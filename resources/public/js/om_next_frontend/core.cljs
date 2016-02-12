(ns om-next-frontend.core
  (:require [bidi.bidi :as bidi :refer [match-route]]
            [datascript.core :as d]
            [goog.dom :as gdom]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [om-next-frontend.parser :refer [read mutate]]
            [om-next-frontend.util :refer [transit-post]]
            [pushy.core :as pushy]))

(enable-console-print!)

(def routes ["/" {""      :page1
                  "page2" :page2
                  "page3" :page3}])

(defn route->url
  [route]
  (bidi/path-for routes route))

(defn url->route [url]
  (:handler (match-route routes url)))

(def conn (d/create-conn {}))

(d/transact! conn
  [{:db/id             -1
    :app/route (url->route (.. js/window -location -pathname))}])

(defui Page1
  static om/IQuery
  (query [this]
    [:page/home])
  Object
  (render [this] (dom/div nil "page1")))

(defui Page2
  static om/IQuery
  (query [this]
    [:page/about])
  Object
  (render [this] (dom/div nil "page2")))

(defui Page3
  static om/IQuery
  (query [this]
    [:page/about])
  Object
  (render [this] (dom/div nil "page3")))

(def route->component
  {:page1 Page1
   :page2 Page2
   :page3 Page3})

(def route->factory
  (zipmap (keys route->component)
    (map om/factory (vals route->component))))

(def route->query
  (zipmap (keys route->component)
    (map om/get-query (vals route->component))))

(declare history)

(defui Root
  static om/IQuery
  (query [this]
    [:app/route {:route/data route->query} {:app/user [:db/id :user/email]}])
  Object
  (componentDidUpdate [this _ _]
    (let [{:keys [app/route]} (om/props this)]
      (when (not= route (url->route (.. js/window -location -pathname)))
        (pushy/set-token! history (route->url route)))))
  (componentDidMount [this]
    (let [listener (pushy/pushy
                     #(om/transact! this `[(route/update {:value ~%}) :route/data])
                     url->route)]
      (pushy/start! listener)
      (set! history listener)))
  (componentWillUnmount [_]
    (pushy/stop! history))
  (render [this]
    (let [{:keys [app/route app/user]} (om/props this)
          factory                      (route->factory route)]
      (.log js/console "State:" (prn-str (om/app-state (om/get-reconciler this))))
      (dom/div nil
        (dom/a #js {:href "/"} "Page 1")
        (dom/a #js {:href "page2"} "Page 2")
        (dom/a #js {:href "page3"} "Page 3")
        (dom/div nil (prn-str user))
        (factory route)))))

(def reconciler
  (om/reconciler
    {:state  conn
     :parser (om/parser {:read read :mutate mutate})
     :merge-tree (fn [_ data]
                   (prn data)
                   (doseq [t (vals (into {} (filter #(keyword? (first %)) data)))]
                     (d/transact! conn t))
                   @conn)
     :send (transit-post "http://localhost:8081/api")}))

(om/add-root! reconciler
  Root (gdom/getElement "app"))
