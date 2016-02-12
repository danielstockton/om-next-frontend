// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_frontend.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('bidi.bidi');
goog.require('om.dom');
goog.require('datascript.core');
goog.require('om_next_frontend.util');
goog.require('om.next');
goog.require('pushy.core');
goog.require('om_next_frontend.parser');
cljs.core.enable_console_print_BANG_.call(null);
om_next_frontend.core.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"page1","page1",-1097112046),"page2",new cljs.core.Keyword(null,"page2","page2",1846416065),"page3",new cljs.core.Keyword(null,"page3","page3",-1557384585)], null)], null);
om_next_frontend.core.route__GT_url = (function om_next_frontend$core$route__GT_url(route){
return bidi.bidi.path_for.call(null,om_next_frontend.core.routes,route);
});
om_next_frontend.core.url__GT_route = (function om_next_frontend$core$url__GT_route(url){
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(bidi.bidi.match_route.call(null,om_next_frontend.core.routes,url));
});
om_next_frontend.core.conn = datascript.core.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);
datascript.core.transact_BANG_.call(null,om_next_frontend.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","route","app/route",327440334),om_next_frontend.core.url__GT_route.call(null,window.location.pathname)], null)], null));
/**
 * @constructor
 */
om_next_frontend.core.Page1 = (function om_next_frontend$core$Page1(){
var this__23544__auto__ = this;
React.Component.apply(this__23544__auto__,arguments);

if(!((this__23544__auto__.initLocalState == null))){
this__23544__auto__.state = this__23544__auto__.initLocalState();
} else {
this__23544__auto__.state = {};
}

return this__23544__auto__;
});

om_next_frontend.core.Page1.prototype = goog.object.clone(React.Component.prototype);

var x24469_24479 = om_next_frontend.core.Page1.prototype;
x24469_24479.componentWillUpdate = ((function (x24469_24479){
return (function (next_props__23481__auto__,next_state__23482__auto__){
var this__23480__auto__ = this;
if(((!((this__23480__auto__ == null)))?(((false) || (this__23480__auto__.om$next$Ident$))?true:false):false)){
var ident__23483__auto___24480 = om.next.ident.call(null,this__23480__auto__,om.next.props.call(null,this__23480__auto__));
var next_ident__23484__auto___24481 = om.next.ident.call(null,this__23480__auto__,om.next._next_props.call(null,next_props__23481__auto__,this__23480__auto__));
if(cljs.core.not_EQ_.call(null,ident__23483__auto___24480,next_ident__23484__auto___24481)){
var idxr__23485__auto___24482 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23485__auto___24482 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23485__auto___24482),((function (idxr__23485__auto___24482,ident__23483__auto___24480,next_ident__23484__auto___24481,this__23480__auto__,x24469_24479){
return (function (indexes__23486__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23486__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23483__auto___24480], null),cljs.core.disj,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23484__auto___24481], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23480__auto__);
});})(idxr__23485__auto___24482,ident__23483__auto___24480,next_ident__23484__auto___24481,this__23480__auto__,x24469_24479))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23480__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23480__auto__);
});})(x24469_24479))
;

x24469_24479.shouldComponentUpdate = ((function (x24469_24479){
return (function (next_props__23481__auto__,next_state__23482__auto__){
var this__23480__auto__ = this;
var next_props__23481__auto____$1 = goog.object.get(next_props__23481__auto__,"omcljs$value");
var next_props__23481__auto____$2 = (function (){var G__24471 = next_props__23481__auto____$1;
if((next_props__23481__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__24471);
} else {
return G__24471;
}
})();
var or__18383__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23480__auto__),next_props__23481__auto____$2);
if(or__18383__auto__){
return or__18383__auto__;
} else {
var and__18371__auto__ = this__23480__auto__.state;
if(cljs.core.truth_(and__18371__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23480__auto__.state,"omcljs$state"),goog.object.get(next_state__23482__auto__,"omcljs$state"));
} else {
return and__18371__auto__;
}
}
});})(x24469_24479))
;

x24469_24479.componentWillUnmount = ((function (x24469_24479){
return (function (){
var this__23480__auto__ = this;
var r__23490__auto__ = om.next.get_reconciler.call(null,this__23480__auto__);
var cfg__23491__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23490__auto__);
var st__23492__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23491__auto__);
var indexer__23489__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23491__auto__);
if(cljs.core.truth_((function (){var and__18371__auto__ = !((st__23492__auto__ == null));
if(and__18371__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__23492__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__23480__auto__], null));
} else {
return and__18371__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__23492__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23480__auto__);
} else {
}

if((indexer__23489__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23489__auto__,this__23480__auto__);
}
});})(x24469_24479))
;

x24469_24479.componentDidUpdate = ((function (x24469_24479){
return (function (prev_props__23487__auto__,prev_state__23488__auto__){
var this__23480__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23480__auto__);
});})(x24469_24479))
;

x24469_24479.isMounted = ((function (x24469_24479){
return (function (){
var this__23480__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23480__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24469_24479))
;

x24469_24479.componentWillMount = ((function (x24469_24479){
return (function (){
var this__23480__auto__ = this;
var indexer__23489__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23489__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23489__auto__,this__23480__auto__);
}
});})(x24469_24479))
;

x24469_24479.render = ((function (x24469_24479){
return (function (){
var this__23479__auto__ = this;
var this$ = this__23479__auto__;
var _STAR_reconciler_STAR_24472 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24473 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24474 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24475 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24476 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23479__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23479__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23479__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23479__auto__);

om.next._STAR_parent_STAR_ = this__23479__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,"page1"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24476;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24475;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24474;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24473;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24472;
}});})(x24469_24479))
;


om_next_frontend.core.Page1.prototype.constructor = om_next_frontend.core.Page1;

om_next_frontend.core.Page1.prototype.constructor.displayName = "om-next-frontend.core/Page1";

om_next_frontend.core.Page1.prototype.om$isComponent = true;

var x24477_24483 = om_next_frontend.core.Page1;
x24477_24483.om$next$IQuery$ = true;

x24477_24483.om$next$IQuery$query$arity$1 = ((function (x24477_24483){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","home","page/home",-85681388)], null);
});})(x24477_24483))
;


var x24478_24484 = om_next_frontend.core.Page1.prototype;
x24478_24484.om$next$IQuery$ = true;

x24478_24484.om$next$IQuery$query$arity$1 = ((function (x24478_24484){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","home","page/home",-85681388)], null);
});})(x24478_24484))
;


om_next_frontend.core.Page1.cljs$lang$type = true;

om_next_frontend.core.Page1.cljs$lang$ctorStr = "om-next-frontend.core/Page1";

om_next_frontend.core.Page1.cljs$lang$ctorPrWriter = (function (this__23546__auto__,writer__23547__auto__,opt__23548__auto__){
return cljs.core._write.call(null,writer__23547__auto__,"om-next-frontend.core/Page1");
});
/**
 * @constructor
 */
om_next_frontend.core.Page2 = (function om_next_frontend$core$Page2(){
var this__23544__auto__ = this;
React.Component.apply(this__23544__auto__,arguments);

if(!((this__23544__auto__.initLocalState == null))){
this__23544__auto__.state = this__23544__auto__.initLocalState();
} else {
this__23544__auto__.state = {};
}

return this__23544__auto__;
});

om_next_frontend.core.Page2.prototype = goog.object.clone(React.Component.prototype);

var x24489_24499 = om_next_frontend.core.Page2.prototype;
x24489_24499.componentWillUpdate = ((function (x24489_24499){
return (function (next_props__23481__auto__,next_state__23482__auto__){
var this__23480__auto__ = this;
if(((!((this__23480__auto__ == null)))?(((false) || (this__23480__auto__.om$next$Ident$))?true:false):false)){
var ident__23483__auto___24500 = om.next.ident.call(null,this__23480__auto__,om.next.props.call(null,this__23480__auto__));
var next_ident__23484__auto___24501 = om.next.ident.call(null,this__23480__auto__,om.next._next_props.call(null,next_props__23481__auto__,this__23480__auto__));
if(cljs.core.not_EQ_.call(null,ident__23483__auto___24500,next_ident__23484__auto___24501)){
var idxr__23485__auto___24502 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23485__auto___24502 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23485__auto___24502),((function (idxr__23485__auto___24502,ident__23483__auto___24500,next_ident__23484__auto___24501,this__23480__auto__,x24489_24499){
return (function (indexes__23486__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23486__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23483__auto___24500], null),cljs.core.disj,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23484__auto___24501], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23480__auto__);
});})(idxr__23485__auto___24502,ident__23483__auto___24500,next_ident__23484__auto___24501,this__23480__auto__,x24489_24499))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23480__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23480__auto__);
});})(x24489_24499))
;

x24489_24499.shouldComponentUpdate = ((function (x24489_24499){
return (function (next_props__23481__auto__,next_state__23482__auto__){
var this__23480__auto__ = this;
var next_props__23481__auto____$1 = goog.object.get(next_props__23481__auto__,"omcljs$value");
var next_props__23481__auto____$2 = (function (){var G__24491 = next_props__23481__auto____$1;
if((next_props__23481__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__24491);
} else {
return G__24491;
}
})();
var or__18383__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23480__auto__),next_props__23481__auto____$2);
if(or__18383__auto__){
return or__18383__auto__;
} else {
var and__18371__auto__ = this__23480__auto__.state;
if(cljs.core.truth_(and__18371__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23480__auto__.state,"omcljs$state"),goog.object.get(next_state__23482__auto__,"omcljs$state"));
} else {
return and__18371__auto__;
}
}
});})(x24489_24499))
;

x24489_24499.componentWillUnmount = ((function (x24489_24499){
return (function (){
var this__23480__auto__ = this;
var r__23490__auto__ = om.next.get_reconciler.call(null,this__23480__auto__);
var cfg__23491__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23490__auto__);
var st__23492__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23491__auto__);
var indexer__23489__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23491__auto__);
if(cljs.core.truth_((function (){var and__18371__auto__ = !((st__23492__auto__ == null));
if(and__18371__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__23492__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__23480__auto__], null));
} else {
return and__18371__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__23492__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23480__auto__);
} else {
}

if((indexer__23489__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23489__auto__,this__23480__auto__);
}
});})(x24489_24499))
;

x24489_24499.componentDidUpdate = ((function (x24489_24499){
return (function (prev_props__23487__auto__,prev_state__23488__auto__){
var this__23480__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23480__auto__);
});})(x24489_24499))
;

x24489_24499.isMounted = ((function (x24489_24499){
return (function (){
var this__23480__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23480__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24489_24499))
;

x24489_24499.componentWillMount = ((function (x24489_24499){
return (function (){
var this__23480__auto__ = this;
var indexer__23489__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23489__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23489__auto__,this__23480__auto__);
}
});})(x24489_24499))
;

x24489_24499.render = ((function (x24489_24499){
return (function (){
var this__23479__auto__ = this;
var this$ = this__23479__auto__;
var _STAR_reconciler_STAR_24492 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24493 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24494 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24495 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24496 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23479__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23479__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23479__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23479__auto__);

om.next._STAR_parent_STAR_ = this__23479__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,"page2"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24496;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24495;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24494;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24493;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24492;
}});})(x24489_24499))
;


om_next_frontend.core.Page2.prototype.constructor = om_next_frontend.core.Page2;

om_next_frontend.core.Page2.prototype.constructor.displayName = "om-next-frontend.core/Page2";

om_next_frontend.core.Page2.prototype.om$isComponent = true;

var x24497_24503 = om_next_frontend.core.Page2;
x24497_24503.om$next$IQuery$ = true;

x24497_24503.om$next$IQuery$query$arity$1 = ((function (x24497_24503){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","about","page/about",1420522928)], null);
});})(x24497_24503))
;


var x24498_24504 = om_next_frontend.core.Page2.prototype;
x24498_24504.om$next$IQuery$ = true;

x24498_24504.om$next$IQuery$query$arity$1 = ((function (x24498_24504){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","about","page/about",1420522928)], null);
});})(x24498_24504))
;


om_next_frontend.core.Page2.cljs$lang$type = true;

om_next_frontend.core.Page2.cljs$lang$ctorStr = "om-next-frontend.core/Page2";

om_next_frontend.core.Page2.cljs$lang$ctorPrWriter = (function (this__23546__auto__,writer__23547__auto__,opt__23548__auto__){
return cljs.core._write.call(null,writer__23547__auto__,"om-next-frontend.core/Page2");
});
/**
 * @constructor
 */
om_next_frontend.core.Page3 = (function om_next_frontend$core$Page3(){
var this__23544__auto__ = this;
React.Component.apply(this__23544__auto__,arguments);

if(!((this__23544__auto__.initLocalState == null))){
this__23544__auto__.state = this__23544__auto__.initLocalState();
} else {
this__23544__auto__.state = {};
}

return this__23544__auto__;
});

om_next_frontend.core.Page3.prototype = goog.object.clone(React.Component.prototype);

var x24509_24519 = om_next_frontend.core.Page3.prototype;
x24509_24519.componentWillUpdate = ((function (x24509_24519){
return (function (next_props__23481__auto__,next_state__23482__auto__){
var this__23480__auto__ = this;
if(((!((this__23480__auto__ == null)))?(((false) || (this__23480__auto__.om$next$Ident$))?true:false):false)){
var ident__23483__auto___24520 = om.next.ident.call(null,this__23480__auto__,om.next.props.call(null,this__23480__auto__));
var next_ident__23484__auto___24521 = om.next.ident.call(null,this__23480__auto__,om.next._next_props.call(null,next_props__23481__auto__,this__23480__auto__));
if(cljs.core.not_EQ_.call(null,ident__23483__auto___24520,next_ident__23484__auto___24521)){
var idxr__23485__auto___24522 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23485__auto___24522 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23485__auto___24522),((function (idxr__23485__auto___24522,ident__23483__auto___24520,next_ident__23484__auto___24521,this__23480__auto__,x24509_24519){
return (function (indexes__23486__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23486__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23483__auto___24520], null),cljs.core.disj,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23484__auto___24521], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23480__auto__);
});})(idxr__23485__auto___24522,ident__23483__auto___24520,next_ident__23484__auto___24521,this__23480__auto__,x24509_24519))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23480__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23480__auto__);
});})(x24509_24519))
;

x24509_24519.shouldComponentUpdate = ((function (x24509_24519){
return (function (next_props__23481__auto__,next_state__23482__auto__){
var this__23480__auto__ = this;
var next_props__23481__auto____$1 = goog.object.get(next_props__23481__auto__,"omcljs$value");
var next_props__23481__auto____$2 = (function (){var G__24511 = next_props__23481__auto____$1;
if((next_props__23481__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__24511);
} else {
return G__24511;
}
})();
var or__18383__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23480__auto__),next_props__23481__auto____$2);
if(or__18383__auto__){
return or__18383__auto__;
} else {
var and__18371__auto__ = this__23480__auto__.state;
if(cljs.core.truth_(and__18371__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23480__auto__.state,"omcljs$state"),goog.object.get(next_state__23482__auto__,"omcljs$state"));
} else {
return and__18371__auto__;
}
}
});})(x24509_24519))
;

x24509_24519.componentWillUnmount = ((function (x24509_24519){
return (function (){
var this__23480__auto__ = this;
var r__23490__auto__ = om.next.get_reconciler.call(null,this__23480__auto__);
var cfg__23491__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23490__auto__);
var st__23492__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23491__auto__);
var indexer__23489__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23491__auto__);
if(cljs.core.truth_((function (){var and__18371__auto__ = !((st__23492__auto__ == null));
if(and__18371__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__23492__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__23480__auto__], null));
} else {
return and__18371__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__23492__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23480__auto__);
} else {
}

if((indexer__23489__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23489__auto__,this__23480__auto__);
}
});})(x24509_24519))
;

x24509_24519.componentDidUpdate = ((function (x24509_24519){
return (function (prev_props__23487__auto__,prev_state__23488__auto__){
var this__23480__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23480__auto__);
});})(x24509_24519))
;

x24509_24519.isMounted = ((function (x24509_24519){
return (function (){
var this__23480__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23480__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24509_24519))
;

x24509_24519.componentWillMount = ((function (x24509_24519){
return (function (){
var this__23480__auto__ = this;
var indexer__23489__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23489__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23489__auto__,this__23480__auto__);
}
});})(x24509_24519))
;

x24509_24519.render = ((function (x24509_24519){
return (function (){
var this__23479__auto__ = this;
var this$ = this__23479__auto__;
var _STAR_reconciler_STAR_24512 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24513 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24514 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24515 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24516 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23479__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23479__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23479__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23479__auto__);

om.next._STAR_parent_STAR_ = this__23479__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,"page3"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24516;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24515;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24514;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24513;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24512;
}});})(x24509_24519))
;


om_next_frontend.core.Page3.prototype.constructor = om_next_frontend.core.Page3;

om_next_frontend.core.Page3.prototype.constructor.displayName = "om-next-frontend.core/Page3";

om_next_frontend.core.Page3.prototype.om$isComponent = true;

var x24517_24523 = om_next_frontend.core.Page3;
x24517_24523.om$next$IQuery$ = true;

x24517_24523.om$next$IQuery$query$arity$1 = ((function (x24517_24523){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","about","page/about",1420522928)], null);
});})(x24517_24523))
;


var x24518_24524 = om_next_frontend.core.Page3.prototype;
x24518_24524.om$next$IQuery$ = true;

x24518_24524.om$next$IQuery$query$arity$1 = ((function (x24518_24524){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","about","page/about",1420522928)], null);
});})(x24518_24524))
;


om_next_frontend.core.Page3.cljs$lang$type = true;

om_next_frontend.core.Page3.cljs$lang$ctorStr = "om-next-frontend.core/Page3";

om_next_frontend.core.Page3.cljs$lang$ctorPrWriter = (function (this__23546__auto__,writer__23547__auto__,opt__23548__auto__){
return cljs.core._write.call(null,writer__23547__auto__,"om-next-frontend.core/Page3");
});
om_next_frontend.core.route__GT_component = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page1","page1",-1097112046),om_next_frontend.core.Page1,new cljs.core.Keyword(null,"page2","page2",1846416065),om_next_frontend.core.Page2,new cljs.core.Keyword(null,"page3","page3",-1557384585),om_next_frontend.core.Page3], null);
om_next_frontend.core.route__GT_factory = cljs.core.zipmap.call(null,cljs.core.keys.call(null,om_next_frontend.core.route__GT_component),cljs.core.map.call(null,om.next.factory,cljs.core.vals.call(null,om_next_frontend.core.route__GT_component)));
om_next_frontend.core.route__GT_query = cljs.core.zipmap.call(null,cljs.core.keys.call(null,om_next_frontend.core.route__GT_component),cljs.core.map.call(null,om.next.get_query,cljs.core.vals.call(null,om_next_frontend.core.route__GT_component)));
/**
 * @constructor
 */
om_next_frontend.core.Root = (function om_next_frontend$core$Root(){
var this__23544__auto__ = this;
React.Component.apply(this__23544__auto__,arguments);

if(!((this__23544__auto__.initLocalState == null))){
this__23544__auto__.state = this__23544__auto__.initLocalState();
} else {
this__23544__auto__.state = {};
}

return this__23544__auto__;
});

om_next_frontend.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x24530_24544 = om_next_frontend.core.Root.prototype;
x24530_24544.componentWillUpdate = ((function (x24530_24544){
return (function (next_props__23481__auto__,next_state__23482__auto__){
var this__23480__auto__ = this;
if(((!((this__23480__auto__ == null)))?(((false) || (this__23480__auto__.om$next$Ident$))?true:false):false)){
var ident__23483__auto___24545 = om.next.ident.call(null,this__23480__auto__,om.next.props.call(null,this__23480__auto__));
var next_ident__23484__auto___24546 = om.next.ident.call(null,this__23480__auto__,om.next._next_props.call(null,next_props__23481__auto__,this__23480__auto__));
if(cljs.core.not_EQ_.call(null,ident__23483__auto___24545,next_ident__23484__auto___24546)){
var idxr__23485__auto___24547 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23485__auto___24547 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23485__auto___24547),((function (idxr__23485__auto___24547,ident__23483__auto___24545,next_ident__23484__auto___24546,this__23480__auto__,x24530_24544){
return (function (indexes__23486__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23486__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23483__auto___24545], null),cljs.core.disj,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23484__auto___24546], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23480__auto__);
});})(idxr__23485__auto___24547,ident__23483__auto___24545,next_ident__23484__auto___24546,this__23480__auto__,x24530_24544))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23480__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23480__auto__);
});})(x24530_24544))
;

x24530_24544.shouldComponentUpdate = ((function (x24530_24544){
return (function (next_props__23481__auto__,next_state__23482__auto__){
var this__23480__auto__ = this;
var next_props__23481__auto____$1 = goog.object.get(next_props__23481__auto__,"omcljs$value");
var next_props__23481__auto____$2 = (function (){var G__24532 = next_props__23481__auto____$1;
if((next_props__23481__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__24532);
} else {
return G__24532;
}
})();
var or__18383__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23480__auto__),next_props__23481__auto____$2);
if(or__18383__auto__){
return or__18383__auto__;
} else {
var and__18371__auto__ = this__23480__auto__.state;
if(cljs.core.truth_(and__18371__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23480__auto__.state,"omcljs$state"),goog.object.get(next_state__23482__auto__,"omcljs$state"));
} else {
return and__18371__auto__;
}
}
});})(x24530_24544))
;

x24530_24544.isMounted = ((function (x24530_24544){
return (function (){
var this__23480__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23480__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24530_24544))
;

x24530_24544.componentWillMount = ((function (x24530_24544){
return (function (){
var this__23480__auto__ = this;
var indexer__23489__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23480__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23489__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23489__auto__,this__23480__auto__);
}
});})(x24530_24544))
;

x24530_24544.componentDidUpdate = ((function (x24530_24544){
return (function (prev_props__23470__auto__,prev_state__23471__auto__){
var this__23469__auto__ = this;
var this$ = this__23469__auto__;
var _ = om.next._prev_props.call(null,prev_props__23470__auto__,this__23469__auto__);
var ___$1 = goog.object.get(prev_state__23471__auto__,"omcljs$previousState");
var map__24533_24548 = om.next.props.call(null,this$);
var map__24533_24549__$1 = ((((!((map__24533_24548 == null)))?((((map__24533_24548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24533_24548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24533_24548):map__24533_24548);
var route_24550 = cljs.core.get.call(null,map__24533_24549__$1,new cljs.core.Keyword("app","route","app/route",327440334));
if(cljs.core.not_EQ_.call(null,route_24550,om_next_frontend.core.url__GT_route.call(null,window.location.pathname))){
pushy.core.set_token_BANG_.call(null,om_next_frontend.core.history,om_next_frontend.core.route__GT_url.call(null,route_24550));
} else {
}

return om.next.clear_prev_props_BANG_.call(null,this__23469__auto__);
});})(x24530_24544))
;

x24530_24544.componentDidMount = ((function (x24530_24544){
return (function (){
var this$ = this;
var listener = pushy.core.pushy.call(null,((function (this$,x24530_24544){
return (function (p1__24525_SHARP_){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("route","update","route/update",-1700946728,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__24525_SHARP_)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("route","data","route/data",111612152)))))));
});})(this$,x24530_24544))
,om_next_frontend.core.url__GT_route);
pushy.core.start_BANG_.call(null,listener);

return om_next_frontend.core.history = listener;
});})(x24530_24544))
;

x24530_24544.componentWillUnmount = ((function (x24530_24544){
return (function (){
var this__23474__auto__ = this;
var _ = this__23474__auto__;
var r__23475__auto__ = om.next.get_reconciler.call(null,this__23474__auto__);
var cfg__23476__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23475__auto__);
var st__23477__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23476__auto__);
var indexer__23478__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23476__auto__);
if(cljs.core.truth_((function (){var and__18371__auto__ = !((st__23477__auto__ == null));
if(and__18371__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__23477__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__23474__auto__], null));
} else {
return and__18371__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__23477__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23474__auto__);
} else {
}

if((indexer__23478__auto__ == null)){
} else {
om.next.protocols.drop_component_BANG_.call(null,indexer__23478__auto__,this__23474__auto__);
}

return pushy.core.stop_BANG_.call(null,om_next_frontend.core.history);
});})(x24530_24544))
;

x24530_24544.render = ((function (x24530_24544){
return (function (){
var this__23479__auto__ = this;
var this$ = this__23479__auto__;
var _STAR_reconciler_STAR_24535 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24536 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24537 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24538 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24539 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23479__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23479__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23479__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23479__auto__);

om.next._STAR_parent_STAR_ = this__23479__auto__;

try{var map__24540 = om.next.props.call(null,this$);
var map__24540__$1 = ((((!((map__24540 == null)))?((((map__24540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24540):map__24540);
var route = cljs.core.get.call(null,map__24540__$1,new cljs.core.Keyword("app","route","app/route",327440334));
var user = cljs.core.get.call(null,map__24540__$1,new cljs.core.Keyword("app","user","app/user",1532338651));
var factory = om_next_frontend.core.route__GT_factory.call(null,route);
console.log("State:",cljs.core.prn_str.call(null,om.next.app_state.call(null,om.next.get_reconciler.call(null,this$))));

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.a({"href": "/"},om.util.force_children.call(null,"Page 1"))),om.util.force_children.call(null,React.DOM.a({"href": "page2"},om.util.force_children.call(null,"Page 2"))),om.util.force_children.call(null,React.DOM.a({"href": "page3"},om.util.force_children.call(null,"Page 3"))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,cljs.core.prn_str.call(null,user)))),om.util.force_children.call(null,factory.call(null,route)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24539;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24538;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24537;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24536;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24535;
}});})(x24530_24544))
;


om_next_frontend.core.Root.prototype.constructor = om_next_frontend.core.Root;

om_next_frontend.core.Root.prototype.constructor.displayName = "om-next-frontend.core/Root";

om_next_frontend.core.Root.prototype.om$isComponent = true;

var x24542_24551 = om_next_frontend.core.Root;
x24542_24551.om$next$IQuery$ = true;

x24542_24551.om$next$IQuery$query$arity$1 = ((function (x24542_24551){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","route","app/route",327440334),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("route","data","route/data",111612152),om_next_frontend.core.route__GT_query], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","user","app/user",1532338651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null)], null);
});})(x24542_24551))
;


var x24543_24552 = om_next_frontend.core.Root.prototype;
x24543_24552.om$next$IQuery$ = true;

x24543_24552.om$next$IQuery$query$arity$1 = ((function (x24543_24552){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","route","app/route",327440334),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("route","data","route/data",111612152),om_next_frontend.core.route__GT_query], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","user","app/user",1532338651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null)], null);
});})(x24543_24552))
;


om_next_frontend.core.Root.cljs$lang$type = true;

om_next_frontend.core.Root.cljs$lang$ctorStr = "om-next-frontend.core/Root";

om_next_frontend.core.Root.cljs$lang$ctorPrWriter = (function (this__23546__auto__,writer__23547__auto__,opt__23548__auto__){
return cljs.core._write.call(null,writer__23547__auto__,"om-next-frontend.core/Root");
});
om_next_frontend.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_next_frontend.core.conn,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_next_frontend.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_next_frontend.parser.mutate], null)),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),(function (_,data){
cljs.core.prn.call(null,data);

var seq__24554_24558 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__24553_SHARP_){
return (cljs.core.first.call(null,p1__24553_SHARP_) instanceof cljs.core.Keyword);
}),data))));
var chunk__24555_24559 = null;
var count__24556_24560 = (0);
var i__24557_24561 = (0);
while(true){
if((i__24557_24561 < count__24556_24560)){
var t_24562 = cljs.core._nth.call(null,chunk__24555_24559,i__24557_24561);
datascript.core.transact_BANG_.call(null,om_next_frontend.core.conn,t_24562);

var G__24563 = seq__24554_24558;
var G__24564 = chunk__24555_24559;
var G__24565 = count__24556_24560;
var G__24566 = (i__24557_24561 + (1));
seq__24554_24558 = G__24563;
chunk__24555_24559 = G__24564;
count__24556_24560 = G__24565;
i__24557_24561 = G__24566;
continue;
} else {
var temp__4657__auto___24567 = cljs.core.seq.call(null,seq__24554_24558);
if(temp__4657__auto___24567){
var seq__24554_24568__$1 = temp__4657__auto___24567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24554_24568__$1)){
var c__19186__auto___24569 = cljs.core.chunk_first.call(null,seq__24554_24568__$1);
var G__24570 = cljs.core.chunk_rest.call(null,seq__24554_24568__$1);
var G__24571 = c__19186__auto___24569;
var G__24572 = cljs.core.count.call(null,c__19186__auto___24569);
var G__24573 = (0);
seq__24554_24558 = G__24570;
chunk__24555_24559 = G__24571;
count__24556_24560 = G__24572;
i__24557_24561 = G__24573;
continue;
} else {
var t_24574 = cljs.core.first.call(null,seq__24554_24568__$1);
datascript.core.transact_BANG_.call(null,om_next_frontend.core.conn,t_24574);

var G__24575 = cljs.core.next.call(null,seq__24554_24568__$1);
var G__24576 = null;
var G__24577 = (0);
var G__24578 = (0);
seq__24554_24558 = G__24575;
chunk__24555_24559 = G__24576;
count__24556_24560 = G__24577;
i__24557_24561 = G__24578;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,om_next_frontend.core.conn);
}),new cljs.core.Keyword(null,"send","send",-652151114),om_next_frontend.util.transit_post.call(null,"http://localhost:8081/api")], null));
om.next.add_root_BANG_.call(null,om_next_frontend.core.reconciler,om_next_frontend.core.Root,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map