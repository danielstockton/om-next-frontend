// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_frontend.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('datascript.core');
if(typeof om_next_frontend.parser.read !== 'undefined'){
} else {
om_next_frontend.parser.read = (function (){var method_table__19296__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19297__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19298__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19299__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19300__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-frontend.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19300__auto__,method_table__19296__auto__,prefer_table__19297__auto__,method_cache__19298__auto__,cached_hierarchy__19299__auto__));
})();
}
cljs.core._add_method.call(null,om_next_frontend.parser.read,new cljs.core.Keyword("route","data","route/data",111612152),(function (p__24329,_,___$1){
var map__24330 = p__24329;
var map__24330__$1 = ((((!((map__24330 == null)))?((((map__24330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24330):map__24330);
var state = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var route = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","route","app/route",327440334),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),datascript.core.db.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,query,route)], null);
}));
cljs.core._add_method.call(null,om_next_frontend.parser.read,new cljs.core.Keyword("app","route","app/route",327440334),(function (p__24332,_,___$1){
var map__24333 = p__24332;
var map__24333__$1 = ((((!((map__24333 == null)))?((((map__24333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24333):map__24333);
var state = cljs.core.get.call(null,map__24333__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","route","app/route",327440334),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),datascript.core.db.call(null,state))], null);
}));
cljs.core._add_method.call(null,om_next_frontend.parser.read,new cljs.core.Keyword("app","user","app/user",1532338651),(function (p__24335,_,___$1){
var map__24336 = p__24335;
var map__24336__$1 = ((((!((map__24336 == null)))?((((map__24336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24336):map__24336);
var state = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?query","?query",891204063,null))], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query","?query",891204063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null),datascript.core.db.call(null,state),query),new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}));
if(typeof om_next_frontend.parser.mutate !== 'undefined'){
} else {
om_next_frontend.parser.mutate = (function (){var method_table__19296__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19297__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19298__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19299__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19300__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-frontend.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19300__auto__,method_table__19296__auto__,prefer_table__19297__auto__,method_cache__19298__auto__,cached_hierarchy__19299__auto__));
})();
}
cljs.core._add_method.call(null,om_next_frontend.parser.mutate,new cljs.core.Symbol("route","update","route/update",-1700946728,null),(function (p__24338,_,p__24339){
var map__24340 = p__24338;
var map__24340__$1 = ((((!((map__24340 == null)))?((((map__24340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24340):map__24340);
var state = cljs.core.get.call(null,map__24340__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24341 = p__24339;
var map__24341__$1 = ((((!((map__24341 == null)))?((((map__24341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24341):map__24341);
var value = cljs.core.get.call(null,map__24341__$1,new cljs.core.Keyword(null,"value","value",305978217));
var eid = datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","route","app/route",327440334),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),datascript.core.db.call(null,state));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","route","app/route",327440334)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (eid,map__24340,map__24340__$1,state,map__24341,map__24341__$1,value){
return (function (){
return datascript.core.transact_BANG_.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("app","route","app/route",327440334),value], null)], null));
});})(eid,map__24340,map__24340__$1,state,map__24341,map__24341__$1,value))
], null);
}));

//# sourceMappingURL=parser.js.map