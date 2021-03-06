// Compiled by ClojureScript 1.7.228 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
return pushy$core$recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__32365 = h;
G__32365.setUseFragment(false);

G__32365.setPathPrefix("");

G__32365.setEnabled(true);

return G__32365;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var args32366 = [];
var len__19441__auto___32369 = arguments.length;
var i__19442__auto___32370 = (0);
while(true){
if((i__19442__auto___32370 < len__19441__auto___32369)){
args32366.push((arguments[i__19442__auto___32370]));

var G__32371 = (i__19442__auto___32370 + (1));
i__19442__auto___32370 = G__32371;
continue;
} else {
}
break;
}

var G__32368 = args32366.length;
switch (G__32368) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32366.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;

/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var args32373 = [];
var len__19441__auto___32379 = arguments.length;
var i__19442__auto___32380 = (0);
while(true){
if((i__19442__auto___32380 < len__19441__auto___32379)){
args32373.push((arguments[i__19442__auto___32380]));

var G__32381 = (i__19442__auto___32380 + (1));
i__19442__auto___32380 = G__32381;
continue;
} else {
}
break;
}

var G__32375 = args32373.length;
switch (G__32375) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32373.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$,token);
} else {
var m__19039__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$,token,title);
} else {
var m__19039__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var args32376 = [];
var len__19441__auto___32383 = arguments.length;
var i__19442__auto___32384 = (0);
while(true){
if((i__19442__auto___32384 < len__19441__auto___32383)){
args32376.push((arguments[i__19442__auto___32384]));

var G__32385 = (i__19442__auto___32384 + (1));
i__19442__auto___32384 = G__32385;
continue;
} else {
}
break;
}

var G__32378 = args32376.length;
switch (G__32378) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32376.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$,token);
} else {
var m__19039__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$,token,title);
} else {
var m__19039__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (pushy.core.get_token[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$);
} else {
var m__19039__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$);
} else {
var m__19039__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$);
} else {
var m__19039__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (!(clojure.string.blank_QMARK_.call(null,uri))) && (((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain()))) || (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(location.origin),cljs.core.str(".*$")].join('')),[cljs.core.str(uri)].join('')))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str(path),cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__19448__auto__ = [];
var len__19441__auto___32400 = arguments.length;
var i__19442__auto___32401 = (0);
while(true){
if((i__19442__auto___32401 < len__19441__auto___32400)){
args__19448__auto__.push((arguments[i__19442__auto___32401]));

var G__32402 = (i__19442__auto___32401 + (1));
i__19442__auto___32401 = G__32402;
continue;
} else {
}
break;
}

var argseq__19449__auto__ = ((((2) < args__19448__auto__.length))?(new cljs.core.IndexedSeq(args__19448__auto__.slice((2)),(0))):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19449__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__32390){
var map__32391 = p__32390;
var map__32391__$1 = ((((!((map__32391 == null)))?((((map__32391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32391):map__32391);
var processable_url_QMARK_ = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__32391__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core32393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core32393 = (function (dispatch_fn,match_fn,p__32390,map__32391,processable_url_QMARK_,identity_fn,history,event_keys,meta32394){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__32390 = p__32390;
this.map__32391 = map__32391;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta32394 = meta32394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core32393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (_32395,meta32394__$1){
var self__ = this;
var _32395__$1 = this;
return (new pushy.core.t_pushy$core32393(self__.dispatch_fn,self__.match_fn,self__.p__32390,self__.map__32391,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta32394__$1));
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (_32395){
var self__ = this;
var _32395__$1 = this;
return self__.meta32394;
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.prototype.pushy$core$IHistory$ = true;

pushy.core.t_pushy$core32393.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4657__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
));

var temp__4657__auto___32403 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4657__auto___32403)){
var match_32404 = temp__4657__auto___32403;
self__.dispatch_fn.call(null,match_32404);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4657__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__18371__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__18371__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__18371__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__4655__auto___32405 = el.title;
if(cljs.core.truth_(temp__4655__auto___32405)){
var title_32406 = temp__4655__auto___32405;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_32406);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__32396_32407 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__32397_32408 = null;
var count__32398_32409 = (0);
var i__32399_32410 = (0);
while(true){
if((i__32399_32410 < count__32398_32409)){
var key_32411 = cljs.core._nth.call(null,chunk__32397_32408,i__32399_32410);
goog.events.unlistenByKey(key_32411);

var G__32412 = seq__32396_32407;
var G__32413 = chunk__32397_32408;
var G__32414 = count__32398_32409;
var G__32415 = (i__32399_32410 + (1));
seq__32396_32407 = G__32412;
chunk__32397_32408 = G__32413;
count__32398_32409 = G__32414;
i__32399_32410 = G__32415;
continue;
} else {
var temp__4657__auto___32416 = cljs.core.seq.call(null,seq__32396_32407);
if(temp__4657__auto___32416){
var seq__32396_32417__$1 = temp__4657__auto___32416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32396_32417__$1)){
var c__19186__auto___32418 = cljs.core.chunk_first.call(null,seq__32396_32417__$1);
var G__32419 = cljs.core.chunk_rest.call(null,seq__32396_32417__$1);
var G__32420 = c__19186__auto___32418;
var G__32421 = cljs.core.count.call(null,c__19186__auto___32418);
var G__32422 = (0);
seq__32396_32407 = G__32419;
chunk__32397_32408 = G__32420;
count__32398_32409 = G__32421;
i__32399_32410 = G__32422;
continue;
} else {
var key_32423 = cljs.core.first.call(null,seq__32396_32417__$1);
goog.events.unlistenByKey(key_32423);

var G__32424 = cljs.core.next.call(null,seq__32396_32417__$1);
var G__32425 = null;
var G__32426 = (0);
var G__32427 = (0);
seq__32396_32407 = G__32424;
chunk__32397_32408 = G__32425;
count__32398_32409 = G__32426;
i__32399_32410 = G__32427;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.getBasis = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__32390","p__32390",-2013864915,null),new cljs.core.Symbol(null,"map__32391","map__32391",-1177423702,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta32394","meta32394",1239547580,null)], null);
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core32393.cljs$lang$type = true;

pushy.core.t_pushy$core32393.cljs$lang$ctorStr = "pushy.core/t_pushy$core32393";

pushy.core.t_pushy$core32393.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"pushy.core/t_pushy$core32393");
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.__GT_t_pushy$core32393 = ((function (history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core32393(dispatch_fn__$1,match_fn__$1,p__32390__$1,map__32391__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta32394){
return (new pushy.core.t_pushy$core32393(dispatch_fn__$1,match_fn__$1,p__32390__$1,map__32391__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta32394));
});})(history,event_keys,map__32391,map__32391__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core32393(dispatch_fn,match_fn,p__32390,map__32391__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq32387){
var G__32388 = cljs.core.first.call(null,seq32387);
var seq32387__$1 = cljs.core.next.call(null,seq32387);
var G__32389 = cljs.core.first.call(null,seq32387__$1);
var seq32387__$2 = cljs.core.next.call(null,seq32387__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__32388,G__32389,seq32387__$2);
});
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args32428 = [];
var len__19441__auto___32431 = arguments.length;
var i__19442__auto___32432 = (0);
while(true){
if((i__19442__auto___32432 < len__19441__auto___32431)){
args32428.push((arguments[i__19442__auto___32432]));

var G__32433 = (i__19442__auto___32432 + (1));
i__19442__auto___32432 = G__32433;
continue;
} else {
}
break;
}

var G__32430 = args32428.length;
switch (G__32430) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32428.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;
pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var args32435 = [];
var len__19441__auto___32438 = arguments.length;
var i__19442__auto___32439 = (0);
while(true){
if((i__19442__auto___32439 < len__19441__auto___32438)){
args32435.push((arguments[i__19442__auto___32439]));

var G__32440 = (i__19442__auto___32439 + (1));
i__19442__auto___32439 = G__32440;
continue;
} else {
}
break;
}

var G__32437 = args32435.length;
switch (G__32437) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32435.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map