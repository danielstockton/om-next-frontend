(ns om-next-frontend.util
  (:require [om.next :as om]
            [cognitect.transit :as t])
  (:import [goog.net XhrIo]))

(defn transit-post [url]
  (fn [{:keys [remote]} cb]
    (.send XhrIo url
           (fn [e]
             (this-as this
               (cb (t/read (om/reader) (.getResponseText this)))))
           "POST" (t/write (om/writer) remote)
           #js {"Content-Type" "application/transit+json"})))
