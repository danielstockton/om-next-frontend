// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30777 = cljs.core._EQ_;
var expr__30778 = (function (){var or__18383__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e30781){if((e30781 instanceof Error)){
var e = e30781;
return false;
} else {
throw e30781;

}
}})();
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30777.call(null,"true",expr__30778))){
return true;
} else {
if(cljs.core.truth_(pred__30777.call(null,"false",expr__30778))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30778)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30783){if((e30783 instanceof Error)){
var e = e30783;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30783;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19448__auto__ = [];
var len__19441__auto___30785 = arguments.length;
var i__19442__auto___30786 = (0);
while(true){
if((i__19442__auto___30786 < len__19441__auto___30785)){
args__19448__auto__.push((arguments[i__19442__auto___30786]));

var G__30787 = (i__19442__auto___30786 + (1));
i__19442__auto___30786 = G__30787;
continue;
} else {
}
break;
}

var argseq__19449__auto__ = ((((0) < args__19448__auto__.length))?(new cljs.core.IndexedSeq(args__19448__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19449__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq30784){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30784));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30788){
var map__30791 = p__30788;
var map__30791__$1 = ((((!((map__30791 == null)))?((((map__30791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30791):map__30791);
var message = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18383__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18371__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18371__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18371__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26267__auto___30953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___30953,ch){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___30953,ch){
return (function (state_30922){
var state_val_30923 = (state_30922[(1)]);
if((state_val_30923 === (7))){
var inst_30918 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30924_30954 = state_30922__$1;
(statearr_30924_30954[(2)] = inst_30918);

(statearr_30924_30954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (1))){
var state_30922__$1 = state_30922;
var statearr_30925_30955 = state_30922__$1;
(statearr_30925_30955[(2)] = null);

(statearr_30925_30955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (4))){
var inst_30875 = (state_30922[(7)]);
var inst_30875__$1 = (state_30922[(2)]);
var state_30922__$1 = (function (){var statearr_30926 = state_30922;
(statearr_30926[(7)] = inst_30875__$1);

return statearr_30926;
})();
if(cljs.core.truth_(inst_30875__$1)){
var statearr_30927_30956 = state_30922__$1;
(statearr_30927_30956[(1)] = (5));

} else {
var statearr_30928_30957 = state_30922__$1;
(statearr_30928_30957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (15))){
var inst_30882 = (state_30922[(8)]);
var inst_30897 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30882);
var inst_30898 = cljs.core.first.call(null,inst_30897);
var inst_30899 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30898);
var inst_30900 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30899)].join('');
var inst_30901 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30900);
var state_30922__$1 = state_30922;
var statearr_30929_30958 = state_30922__$1;
(statearr_30929_30958[(2)] = inst_30901);

(statearr_30929_30958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (13))){
var inst_30906 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30930_30959 = state_30922__$1;
(statearr_30930_30959[(2)] = inst_30906);

(statearr_30930_30959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (6))){
var state_30922__$1 = state_30922;
var statearr_30931_30960 = state_30922__$1;
(statearr_30931_30960[(2)] = null);

(statearr_30931_30960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (17))){
var inst_30904 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30932_30961 = state_30922__$1;
(statearr_30932_30961[(2)] = inst_30904);

(statearr_30932_30961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (3))){
var inst_30920 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30922__$1,inst_30920);
} else {
if((state_val_30923 === (12))){
var inst_30881 = (state_30922[(9)]);
var inst_30895 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30881,opts);
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30895)){
var statearr_30933_30962 = state_30922__$1;
(statearr_30933_30962[(1)] = (15));

} else {
var statearr_30934_30963 = state_30922__$1;
(statearr_30934_30963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (2))){
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30922__$1,(4),ch);
} else {
if((state_val_30923 === (11))){
var inst_30882 = (state_30922[(8)]);
var inst_30887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30888 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30882);
var inst_30889 = cljs.core.async.timeout.call(null,(1000));
var inst_30890 = [inst_30888,inst_30889];
var inst_30891 = (new cljs.core.PersistentVector(null,2,(5),inst_30887,inst_30890,null));
var state_30922__$1 = state_30922;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30922__$1,(14),inst_30891);
} else {
if((state_val_30923 === (9))){
var inst_30882 = (state_30922[(8)]);
var inst_30908 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30909 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30882);
var inst_30910 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30909);
var inst_30911 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30910)].join('');
var inst_30912 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30911);
var state_30922__$1 = (function (){var statearr_30935 = state_30922;
(statearr_30935[(10)] = inst_30908);

return statearr_30935;
})();
var statearr_30936_30964 = state_30922__$1;
(statearr_30936_30964[(2)] = inst_30912);

(statearr_30936_30964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (5))){
var inst_30875 = (state_30922[(7)]);
var inst_30877 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30878 = (new cljs.core.PersistentArrayMap(null,2,inst_30877,null));
var inst_30879 = (new cljs.core.PersistentHashSet(null,inst_30878,null));
var inst_30880 = figwheel.client.focus_msgs.call(null,inst_30879,inst_30875);
var inst_30881 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30880);
var inst_30882 = cljs.core.first.call(null,inst_30880);
var inst_30883 = figwheel.client.autoload_QMARK_.call(null);
var state_30922__$1 = (function (){var statearr_30937 = state_30922;
(statearr_30937[(9)] = inst_30881);

(statearr_30937[(8)] = inst_30882);

return statearr_30937;
})();
if(cljs.core.truth_(inst_30883)){
var statearr_30938_30965 = state_30922__$1;
(statearr_30938_30965[(1)] = (8));

} else {
var statearr_30939_30966 = state_30922__$1;
(statearr_30939_30966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (14))){
var inst_30893 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30940_30967 = state_30922__$1;
(statearr_30940_30967[(2)] = inst_30893);

(statearr_30940_30967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (16))){
var state_30922__$1 = state_30922;
var statearr_30941_30968 = state_30922__$1;
(statearr_30941_30968[(2)] = null);

(statearr_30941_30968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (10))){
var inst_30914 = (state_30922[(2)]);
var state_30922__$1 = (function (){var statearr_30942 = state_30922;
(statearr_30942[(11)] = inst_30914);

return statearr_30942;
})();
var statearr_30943_30969 = state_30922__$1;
(statearr_30943_30969[(2)] = null);

(statearr_30943_30969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (8))){
var inst_30881 = (state_30922[(9)]);
var inst_30885 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30881,opts);
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30885)){
var statearr_30944_30970 = state_30922__$1;
(statearr_30944_30970[(1)] = (11));

} else {
var statearr_30945_30971 = state_30922__$1;
(statearr_30945_30971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26267__auto___30953,ch))
;
return ((function (switch__26155__auto__,c__26267__auto___30953,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26156__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26156__auto____0 = (function (){
var statearr_30949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30949[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26156__auto__);

(statearr_30949[(1)] = (1));

return statearr_30949;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26156__auto____1 = (function (state_30922){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_30922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e30950){if((e30950 instanceof Object)){
var ex__26159__auto__ = e30950;
var statearr_30951_30972 = state_30922;
(statearr_30951_30972[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30973 = state_30922;
state_30922 = G__30973;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26156__auto__ = function(state_30922){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26156__auto____1.call(this,state_30922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26156__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26156__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___30953,ch))
})();
var state__26269__auto__ = (function (){var statearr_30952 = f__26268__auto__.call(null);
(statearr_30952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___30953);

return statearr_30952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___30953,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30974_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30974_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30981 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30981){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30979 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30980 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30980;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30979;
}}catch (e30978){if((e30978 instanceof Error)){
var e = e30978;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30981], null));
} else {
var e = e30978;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30981))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30982){
var map__30989 = p__30982;
var map__30989__$1 = ((((!((map__30989 == null)))?((((map__30989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30989):map__30989);
var opts = map__30989__$1;
var build_id = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30989,map__30989__$1,opts,build_id){
return (function (p__30991){
var vec__30992 = p__30991;
var map__30993 = cljs.core.nth.call(null,vec__30992,(0),null);
var map__30993__$1 = ((((!((map__30993 == null)))?((((map__30993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30993):map__30993);
var msg = map__30993__$1;
var msg_name = cljs.core.get.call(null,map__30993__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30992,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30992,map__30993,map__30993__$1,msg,msg_name,_,map__30989,map__30989__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30992,map__30993,map__30993__$1,msg,msg_name,_,map__30989,map__30989__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30989,map__30989__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30999){
var vec__31000 = p__30999;
var map__31001 = cljs.core.nth.call(null,vec__31000,(0),null);
var map__31001__$1 = ((((!((map__31001 == null)))?((((map__31001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31001):map__31001);
var msg = map__31001__$1;
var msg_name = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31000,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31003){
var map__31013 = p__31003;
var map__31013__$1 = ((((!((map__31013 == null)))?((((map__31013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31013):map__31013);
var on_compile_warning = cljs.core.get.call(null,map__31013__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31013__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31013,map__31013__$1,on_compile_warning,on_compile_fail){
return (function (p__31015){
var vec__31016 = p__31015;
var map__31017 = cljs.core.nth.call(null,vec__31016,(0),null);
var map__31017__$1 = ((((!((map__31017 == null)))?((((map__31017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31017):map__31017);
var msg = map__31017__$1;
var msg_name = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31016,(1));
var pred__31019 = cljs.core._EQ_;
var expr__31020 = msg_name;
if(cljs.core.truth_(pred__31019.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31020))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31019.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31020))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31013,map__31013__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__,msg_hist,msg_names,msg){
return (function (state_31236){
var state_val_31237 = (state_31236[(1)]);
if((state_val_31237 === (7))){
var inst_31160 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31160)){
var statearr_31238_31284 = state_31236__$1;
(statearr_31238_31284[(1)] = (8));

} else {
var statearr_31239_31285 = state_31236__$1;
(statearr_31239_31285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (20))){
var inst_31230 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31240_31286 = state_31236__$1;
(statearr_31240_31286[(2)] = inst_31230);

(statearr_31240_31286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (27))){
var inst_31226 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31241_31287 = state_31236__$1;
(statearr_31241_31287[(2)] = inst_31226);

(statearr_31241_31287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (1))){
var inst_31153 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31153)){
var statearr_31242_31288 = state_31236__$1;
(statearr_31242_31288[(1)] = (2));

} else {
var statearr_31243_31289 = state_31236__$1;
(statearr_31243_31289[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (24))){
var inst_31228 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31244_31290 = state_31236__$1;
(statearr_31244_31290[(2)] = inst_31228);

(statearr_31244_31290[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (4))){
var inst_31234 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31236__$1,inst_31234);
} else {
if((state_val_31237 === (15))){
var inst_31232 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31245_31291 = state_31236__$1;
(statearr_31245_31291[(2)] = inst_31232);

(statearr_31245_31291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (21))){
var inst_31191 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31246_31292 = state_31236__$1;
(statearr_31246_31292[(2)] = inst_31191);

(statearr_31246_31292[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (31))){
var inst_31215 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31215)){
var statearr_31247_31293 = state_31236__$1;
(statearr_31247_31293[(1)] = (34));

} else {
var statearr_31248_31294 = state_31236__$1;
(statearr_31248_31294[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (32))){
var inst_31224 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31249_31295 = state_31236__$1;
(statearr_31249_31295[(2)] = inst_31224);

(statearr_31249_31295[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (33))){
var inst_31213 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31250_31296 = state_31236__$1;
(statearr_31250_31296[(2)] = inst_31213);

(statearr_31250_31296[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (13))){
var inst_31174 = figwheel.client.heads_up.clear.call(null);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(16),inst_31174);
} else {
if((state_val_31237 === (22))){
var inst_31195 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31196 = figwheel.client.heads_up.append_message.call(null,inst_31195);
var state_31236__$1 = state_31236;
var statearr_31251_31297 = state_31236__$1;
(statearr_31251_31297[(2)] = inst_31196);

(statearr_31251_31297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (36))){
var inst_31222 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31252_31298 = state_31236__$1;
(statearr_31252_31298[(2)] = inst_31222);

(statearr_31252_31298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (29))){
var inst_31206 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31253_31299 = state_31236__$1;
(statearr_31253_31299[(2)] = inst_31206);

(statearr_31253_31299[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (6))){
var inst_31155 = (state_31236[(7)]);
var state_31236__$1 = state_31236;
var statearr_31254_31300 = state_31236__$1;
(statearr_31254_31300[(2)] = inst_31155);

(statearr_31254_31300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (28))){
var inst_31202 = (state_31236[(2)]);
var inst_31203 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31204 = figwheel.client.heads_up.display_warning.call(null,inst_31203);
var state_31236__$1 = (function (){var statearr_31255 = state_31236;
(statearr_31255[(8)] = inst_31202);

return statearr_31255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(29),inst_31204);
} else {
if((state_val_31237 === (25))){
var inst_31200 = figwheel.client.heads_up.clear.call(null);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(28),inst_31200);
} else {
if((state_val_31237 === (34))){
var inst_31217 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(37),inst_31217);
} else {
if((state_val_31237 === (17))){
var inst_31182 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31256_31301 = state_31236__$1;
(statearr_31256_31301[(2)] = inst_31182);

(statearr_31256_31301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (3))){
var inst_31172 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31172)){
var statearr_31257_31302 = state_31236__$1;
(statearr_31257_31302[(1)] = (13));

} else {
var statearr_31258_31303 = state_31236__$1;
(statearr_31258_31303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (12))){
var inst_31168 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31259_31304 = state_31236__$1;
(statearr_31259_31304[(2)] = inst_31168);

(statearr_31259_31304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (2))){
var inst_31155 = (state_31236[(7)]);
var inst_31155__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31236__$1 = (function (){var statearr_31260 = state_31236;
(statearr_31260[(7)] = inst_31155__$1);

return statearr_31260;
})();
if(cljs.core.truth_(inst_31155__$1)){
var statearr_31261_31305 = state_31236__$1;
(statearr_31261_31305[(1)] = (5));

} else {
var statearr_31262_31306 = state_31236__$1;
(statearr_31262_31306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (23))){
var inst_31198 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31198)){
var statearr_31263_31307 = state_31236__$1;
(statearr_31263_31307[(1)] = (25));

} else {
var statearr_31264_31308 = state_31236__$1;
(statearr_31264_31308[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (35))){
var state_31236__$1 = state_31236;
var statearr_31265_31309 = state_31236__$1;
(statearr_31265_31309[(2)] = null);

(statearr_31265_31309[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (19))){
var inst_31193 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31193)){
var statearr_31266_31310 = state_31236__$1;
(statearr_31266_31310[(1)] = (22));

} else {
var statearr_31267_31311 = state_31236__$1;
(statearr_31267_31311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (11))){
var inst_31164 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31268_31312 = state_31236__$1;
(statearr_31268_31312[(2)] = inst_31164);

(statearr_31268_31312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (9))){
var inst_31166 = figwheel.client.heads_up.clear.call(null);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(12),inst_31166);
} else {
if((state_val_31237 === (5))){
var inst_31157 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31236__$1 = state_31236;
var statearr_31269_31313 = state_31236__$1;
(statearr_31269_31313[(2)] = inst_31157);

(statearr_31269_31313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (14))){
var inst_31184 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31184)){
var statearr_31270_31314 = state_31236__$1;
(statearr_31270_31314[(1)] = (18));

} else {
var statearr_31271_31315 = state_31236__$1;
(statearr_31271_31315[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (26))){
var inst_31208 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31236__$1 = state_31236;
if(cljs.core.truth_(inst_31208)){
var statearr_31272_31316 = state_31236__$1;
(statearr_31272_31316[(1)] = (30));

} else {
var statearr_31273_31317 = state_31236__$1;
(statearr_31273_31317[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (16))){
var inst_31176 = (state_31236[(2)]);
var inst_31177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31178 = figwheel.client.format_messages.call(null,inst_31177);
var inst_31179 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31180 = figwheel.client.heads_up.display_error.call(null,inst_31178,inst_31179);
var state_31236__$1 = (function (){var statearr_31274 = state_31236;
(statearr_31274[(9)] = inst_31176);

return statearr_31274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(17),inst_31180);
} else {
if((state_val_31237 === (30))){
var inst_31210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31211 = figwheel.client.heads_up.display_warning.call(null,inst_31210);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(33),inst_31211);
} else {
if((state_val_31237 === (10))){
var inst_31170 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31275_31318 = state_31236__$1;
(statearr_31275_31318[(2)] = inst_31170);

(statearr_31275_31318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (18))){
var inst_31186 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31187 = figwheel.client.format_messages.call(null,inst_31186);
var inst_31188 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31189 = figwheel.client.heads_up.display_error.call(null,inst_31187,inst_31188);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(21),inst_31189);
} else {
if((state_val_31237 === (37))){
var inst_31219 = (state_31236[(2)]);
var state_31236__$1 = state_31236;
var statearr_31276_31319 = state_31236__$1;
(statearr_31276_31319[(2)] = inst_31219);

(statearr_31276_31319[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31237 === (8))){
var inst_31162 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31236__$1,(11),inst_31162);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26267__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26155__auto__,c__26267__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto____0 = (function (){
var statearr_31280 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31280[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto__);

(statearr_31280[(1)] = (1));

return statearr_31280;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto____1 = (function (state_31236){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_31236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e31281){if((e31281 instanceof Object)){
var ex__26159__auto__ = e31281;
var statearr_31282_31320 = state_31236;
(statearr_31282_31320[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31321 = state_31236;
state_31236 = G__31321;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto__ = function(state_31236){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto____1.call(this,state_31236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__,msg_hist,msg_names,msg))
})();
var state__26269__auto__ = (function (){var statearr_31283 = f__26268__auto__.call(null);
(statearr_31283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_31283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__,msg_hist,msg_names,msg))
);

return c__26267__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26267__auto___31384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___31384,ch){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___31384,ch){
return (function (state_31367){
var state_val_31368 = (state_31367[(1)]);
if((state_val_31368 === (1))){
var state_31367__$1 = state_31367;
var statearr_31369_31385 = state_31367__$1;
(statearr_31369_31385[(2)] = null);

(statearr_31369_31385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (2))){
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31367__$1,(4),ch);
} else {
if((state_val_31368 === (3))){
var inst_31365 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31367__$1,inst_31365);
} else {
if((state_val_31368 === (4))){
var inst_31355 = (state_31367[(7)]);
var inst_31355__$1 = (state_31367[(2)]);
var state_31367__$1 = (function (){var statearr_31370 = state_31367;
(statearr_31370[(7)] = inst_31355__$1);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31355__$1)){
var statearr_31371_31386 = state_31367__$1;
(statearr_31371_31386[(1)] = (5));

} else {
var statearr_31372_31387 = state_31367__$1;
(statearr_31372_31387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (5))){
var inst_31355 = (state_31367[(7)]);
var inst_31357 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31355);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31367__$1,(8),inst_31357);
} else {
if((state_val_31368 === (6))){
var state_31367__$1 = state_31367;
var statearr_31373_31388 = state_31367__$1;
(statearr_31373_31388[(2)] = null);

(statearr_31373_31388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (7))){
var inst_31363 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31374_31389 = state_31367__$1;
(statearr_31374_31389[(2)] = inst_31363);

(statearr_31374_31389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (8))){
var inst_31359 = (state_31367[(2)]);
var state_31367__$1 = (function (){var statearr_31375 = state_31367;
(statearr_31375[(8)] = inst_31359);

return statearr_31375;
})();
var statearr_31376_31390 = state_31367__$1;
(statearr_31376_31390[(2)] = null);

(statearr_31376_31390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26267__auto___31384,ch))
;
return ((function (switch__26155__auto__,c__26267__auto___31384,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26156__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26156__auto____0 = (function (){
var statearr_31380 = [null,null,null,null,null,null,null,null,null];
(statearr_31380[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26156__auto__);

(statearr_31380[(1)] = (1));

return statearr_31380;
});
var figwheel$client$heads_up_plugin_$_state_machine__26156__auto____1 = (function (state_31367){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_31367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e31381){if((e31381 instanceof Object)){
var ex__26159__auto__ = e31381;
var statearr_31382_31391 = state_31367;
(statearr_31382_31391[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31392 = state_31367;
state_31367 = G__31392;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26156__auto__ = function(state_31367){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26156__auto____1.call(this,state_31367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26156__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26156__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___31384,ch))
})();
var state__26269__auto__ = (function (){var statearr_31383 = f__26268__auto__.call(null);
(statearr_31383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___31384);

return statearr_31383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___31384,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__){
return (function (state_31413){
var state_val_31414 = (state_31413[(1)]);
if((state_val_31414 === (1))){
var inst_31408 = cljs.core.async.timeout.call(null,(3000));
var state_31413__$1 = state_31413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31413__$1,(2),inst_31408);
} else {
if((state_val_31414 === (2))){
var inst_31410 = (state_31413[(2)]);
var inst_31411 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31413__$1 = (function (){var statearr_31415 = state_31413;
(statearr_31415[(7)] = inst_31410);

return statearr_31415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31413__$1,inst_31411);
} else {
return null;
}
}
});})(c__26267__auto__))
;
return ((function (switch__26155__auto__,c__26267__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26156__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26156__auto____0 = (function (){
var statearr_31419 = [null,null,null,null,null,null,null,null];
(statearr_31419[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26156__auto__);

(statearr_31419[(1)] = (1));

return statearr_31419;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26156__auto____1 = (function (state_31413){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_31413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e31420){if((e31420 instanceof Object)){
var ex__26159__auto__ = e31420;
var statearr_31421_31423 = state_31413;
(statearr_31421_31423[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31424 = state_31413;
state_31413 = G__31424;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26156__auto__ = function(state_31413){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26156__auto____1.call(this,state_31413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26156__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26156__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__))
})();
var state__26269__auto__ = (function (){var statearr_31422 = f__26268__auto__.call(null);
(statearr_31422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_31422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__))
);

return c__26267__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31425){
var map__31432 = p__31425;
var map__31432__$1 = ((((!((map__31432 == null)))?((((map__31432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31432):map__31432);
var ed = map__31432__$1;
var formatted_exception = cljs.core.get.call(null,map__31432__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31432__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31432__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31434_31438 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31435_31439 = null;
var count__31436_31440 = (0);
var i__31437_31441 = (0);
while(true){
if((i__31437_31441 < count__31436_31440)){
var msg_31442 = cljs.core._nth.call(null,chunk__31435_31439,i__31437_31441);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31442);

var G__31443 = seq__31434_31438;
var G__31444 = chunk__31435_31439;
var G__31445 = count__31436_31440;
var G__31446 = (i__31437_31441 + (1));
seq__31434_31438 = G__31443;
chunk__31435_31439 = G__31444;
count__31436_31440 = G__31445;
i__31437_31441 = G__31446;
continue;
} else {
var temp__4657__auto___31447 = cljs.core.seq.call(null,seq__31434_31438);
if(temp__4657__auto___31447){
var seq__31434_31448__$1 = temp__4657__auto___31447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31434_31448__$1)){
var c__19186__auto___31449 = cljs.core.chunk_first.call(null,seq__31434_31448__$1);
var G__31450 = cljs.core.chunk_rest.call(null,seq__31434_31448__$1);
var G__31451 = c__19186__auto___31449;
var G__31452 = cljs.core.count.call(null,c__19186__auto___31449);
var G__31453 = (0);
seq__31434_31438 = G__31450;
chunk__31435_31439 = G__31451;
count__31436_31440 = G__31452;
i__31437_31441 = G__31453;
continue;
} else {
var msg_31454 = cljs.core.first.call(null,seq__31434_31448__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31454);

var G__31455 = cljs.core.next.call(null,seq__31434_31448__$1);
var G__31456 = null;
var G__31457 = (0);
var G__31458 = (0);
seq__31434_31438 = G__31455;
chunk__31435_31439 = G__31456;
count__31436_31440 = G__31457;
i__31437_31441 = G__31458;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31459){
var map__31462 = p__31459;
var map__31462__$1 = ((((!((map__31462 == null)))?((((map__31462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31462):map__31462);
var w = map__31462__$1;
var message = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18371__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18371__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18371__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31470 = cljs.core.seq.call(null,plugins);
var chunk__31471 = null;
var count__31472 = (0);
var i__31473 = (0);
while(true){
if((i__31473 < count__31472)){
var vec__31474 = cljs.core._nth.call(null,chunk__31471,i__31473);
var k = cljs.core.nth.call(null,vec__31474,(0),null);
var plugin = cljs.core.nth.call(null,vec__31474,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31476 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31470,chunk__31471,count__31472,i__31473,pl_31476,vec__31474,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31476.call(null,msg_hist);
});})(seq__31470,chunk__31471,count__31472,i__31473,pl_31476,vec__31474,k,plugin))
);
} else {
}

var G__31477 = seq__31470;
var G__31478 = chunk__31471;
var G__31479 = count__31472;
var G__31480 = (i__31473 + (1));
seq__31470 = G__31477;
chunk__31471 = G__31478;
count__31472 = G__31479;
i__31473 = G__31480;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31470);
if(temp__4657__auto__){
var seq__31470__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31470__$1)){
var c__19186__auto__ = cljs.core.chunk_first.call(null,seq__31470__$1);
var G__31481 = cljs.core.chunk_rest.call(null,seq__31470__$1);
var G__31482 = c__19186__auto__;
var G__31483 = cljs.core.count.call(null,c__19186__auto__);
var G__31484 = (0);
seq__31470 = G__31481;
chunk__31471 = G__31482;
count__31472 = G__31483;
i__31473 = G__31484;
continue;
} else {
var vec__31475 = cljs.core.first.call(null,seq__31470__$1);
var k = cljs.core.nth.call(null,vec__31475,(0),null);
var plugin = cljs.core.nth.call(null,vec__31475,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31485 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31470,chunk__31471,count__31472,i__31473,pl_31485,vec__31475,k,plugin,seq__31470__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31485.call(null,msg_hist);
});})(seq__31470,chunk__31471,count__31472,i__31473,pl_31485,vec__31475,k,plugin,seq__31470__$1,temp__4657__auto__))
);
} else {
}

var G__31486 = cljs.core.next.call(null,seq__31470__$1);
var G__31487 = null;
var G__31488 = (0);
var G__31489 = (0);
seq__31470 = G__31486;
chunk__31471 = G__31487;
count__31472 = G__31488;
i__31473 = G__31489;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31490 = [];
var len__19441__auto___31493 = arguments.length;
var i__19442__auto___31494 = (0);
while(true){
if((i__19442__auto___31494 < len__19441__auto___31493)){
args31490.push((arguments[i__19442__auto___31494]));

var G__31495 = (i__19442__auto___31494 + (1));
i__19442__auto___31494 = G__31495;
continue;
} else {
}
break;
}

var G__31492 = args31490.length;
switch (G__31492) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31490.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19448__auto__ = [];
var len__19441__auto___31501 = arguments.length;
var i__19442__auto___31502 = (0);
while(true){
if((i__19442__auto___31502 < len__19441__auto___31501)){
args__19448__auto__.push((arguments[i__19442__auto___31502]));

var G__31503 = (i__19442__auto___31502 + (1));
i__19442__auto___31502 = G__31503;
continue;
} else {
}
break;
}

var argseq__19449__auto__ = ((((0) < args__19448__auto__.length))?(new cljs.core.IndexedSeq(args__19448__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19449__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31498){
var map__31499 = p__31498;
var map__31499__$1 = ((((!((map__31499 == null)))?((((map__31499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31499):map__31499);
var opts = map__31499__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31497){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31497));
});

//# sourceMappingURL=client.js.map