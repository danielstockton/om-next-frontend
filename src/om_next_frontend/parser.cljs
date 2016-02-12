(ns om-next-frontend.parser
  (:require [om.next :as om]
            [datascript.core :as d]))

(defmulti read om/dispatch)

(defmethod read :route/data
  [{:keys [state query]} _ _]
  (let [route (d/q '[:find ?v .
                     :in $
                     :where [?e :app/route ?v]]
                (d/db state))]
    {:value (get query route)}))

(defmethod read :app/route
  [{:keys [state]} _ _]
  {:value (d/q '[:find ?v .
                 :in $
                 :where [?e :app/route ?v]]
            (d/db state))})

(defmethod read :app/user
  [{:keys [state query]} _ _]
  {:value (d/q '[:find [(pull ?e ?query)]
                 :in $ ?query
                 :where [?e :user/email]]
               (d/db state) query)
   :remote true})

(defmulti mutate om/dispatch)

(defmethod mutate 'route/update
  [{:keys [state]} _ {:keys [value]}]
  (let [eid (d/q '[:find ?e .
                   :in $
                   :where [?e :app/route ?v]]
              (d/db state))]
    {:value {:keys [:app/route]}
     :action (fn []
               (d/transact! state [[:db/add eid :app/route value]]))}))
