// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_frontend.util');
goog.require('cljs.core');
goog.require('om.next');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
om_next_frontend.util.transit_post = (function om_next_frontend$util$transit_post(url){
return (function (p__22130,cb){
var map__22131 = p__22130;
var map__22131__$1 = ((((!((map__22131 == null)))?((((map__22131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22131):map__22131);
var remote = cljs.core.get.call(null,map__22131__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
return goog.net.XhrIo.send(url,((function (map__22131,map__22131__$1,remote){
return (function (e){
var this$ = this;
return cb.call(null,cognitect.transit.read.call(null,om.next.reader.call(null),this$.getResponseText()));
});})(map__22131,map__22131__$1,remote))
,"POST",cognitect.transit.write.call(null,om.next.writer.call(null),remote),{"Content-Type": "application/transit+json"});
});
});

//# sourceMappingURL=util.js.map