// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19448__auto__ = [];
var len__19441__auto___30543 = arguments.length;
var i__19442__auto___30544 = (0);
while(true){
if((i__19442__auto___30544 < len__19441__auto___30543)){
args__19448__auto__.push((arguments[i__19442__auto___30544]));

var G__30545 = (i__19442__auto___30544 + (1));
i__19442__auto___30544 = G__30545;
continue;
} else {
}
break;
}

var argseq__19449__auto__ = ((((2) < args__19448__auto__.length))?(new cljs.core.IndexedSeq(args__19448__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19449__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30535_30546 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30536_30547 = null;
var count__30537_30548 = (0);
var i__30538_30549 = (0);
while(true){
if((i__30538_30549 < count__30537_30548)){
var k_30550 = cljs.core._nth.call(null,chunk__30536_30547,i__30538_30549);
e.setAttribute(cljs.core.name.call(null,k_30550),cljs.core.get.call(null,attrs,k_30550));

var G__30551 = seq__30535_30546;
var G__30552 = chunk__30536_30547;
var G__30553 = count__30537_30548;
var G__30554 = (i__30538_30549 + (1));
seq__30535_30546 = G__30551;
chunk__30536_30547 = G__30552;
count__30537_30548 = G__30553;
i__30538_30549 = G__30554;
continue;
} else {
var temp__4657__auto___30555 = cljs.core.seq.call(null,seq__30535_30546);
if(temp__4657__auto___30555){
var seq__30535_30556__$1 = temp__4657__auto___30555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30535_30556__$1)){
var c__19186__auto___30557 = cljs.core.chunk_first.call(null,seq__30535_30556__$1);
var G__30558 = cljs.core.chunk_rest.call(null,seq__30535_30556__$1);
var G__30559 = c__19186__auto___30557;
var G__30560 = cljs.core.count.call(null,c__19186__auto___30557);
var G__30561 = (0);
seq__30535_30546 = G__30558;
chunk__30536_30547 = G__30559;
count__30537_30548 = G__30560;
i__30538_30549 = G__30561;
continue;
} else {
var k_30562 = cljs.core.first.call(null,seq__30535_30556__$1);
e.setAttribute(cljs.core.name.call(null,k_30562),cljs.core.get.call(null,attrs,k_30562));

var G__30563 = cljs.core.next.call(null,seq__30535_30556__$1);
var G__30564 = null;
var G__30565 = (0);
var G__30566 = (0);
seq__30535_30546 = G__30563;
chunk__30536_30547 = G__30564;
count__30537_30548 = G__30565;
i__30538_30549 = G__30566;
continue;
}
} else {
}
}
break;
}

var seq__30539_30567 = cljs.core.seq.call(null,children);
var chunk__30540_30568 = null;
var count__30541_30569 = (0);
var i__30542_30570 = (0);
while(true){
if((i__30542_30570 < count__30541_30569)){
var ch_30571 = cljs.core._nth.call(null,chunk__30540_30568,i__30542_30570);
e.appendChild(ch_30571);

var G__30572 = seq__30539_30567;
var G__30573 = chunk__30540_30568;
var G__30574 = count__30541_30569;
var G__30575 = (i__30542_30570 + (1));
seq__30539_30567 = G__30572;
chunk__30540_30568 = G__30573;
count__30541_30569 = G__30574;
i__30542_30570 = G__30575;
continue;
} else {
var temp__4657__auto___30576 = cljs.core.seq.call(null,seq__30539_30567);
if(temp__4657__auto___30576){
var seq__30539_30577__$1 = temp__4657__auto___30576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30539_30577__$1)){
var c__19186__auto___30578 = cljs.core.chunk_first.call(null,seq__30539_30577__$1);
var G__30579 = cljs.core.chunk_rest.call(null,seq__30539_30577__$1);
var G__30580 = c__19186__auto___30578;
var G__30581 = cljs.core.count.call(null,c__19186__auto___30578);
var G__30582 = (0);
seq__30539_30567 = G__30579;
chunk__30540_30568 = G__30580;
count__30541_30569 = G__30581;
i__30542_30570 = G__30582;
continue;
} else {
var ch_30583 = cljs.core.first.call(null,seq__30539_30577__$1);
e.appendChild(ch_30583);

var G__30584 = cljs.core.next.call(null,seq__30539_30577__$1);
var G__30585 = null;
var G__30586 = (0);
var G__30587 = (0);
seq__30539_30567 = G__30584;
chunk__30540_30568 = G__30585;
count__30541_30569 = G__30586;
i__30542_30570 = G__30587;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30532){
var G__30533 = cljs.core.first.call(null,seq30532);
var seq30532__$1 = cljs.core.next.call(null,seq30532);
var G__30534 = cljs.core.first.call(null,seq30532__$1);
var seq30532__$2 = cljs.core.next.call(null,seq30532__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30533,G__30534,seq30532__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19296__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19297__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19298__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19299__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19300__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19296__auto__,prefer_table__19297__auto__,method_cache__19298__auto__,cached_hierarchy__19299__auto__,hierarchy__19300__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19296__auto__,prefer_table__19297__auto__,method_cache__19298__auto__,cached_hierarchy__19299__auto__,hierarchy__19300__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19300__auto__,method_table__19296__auto__,prefer_table__19297__auto__,method_cache__19298__auto__,cached_hierarchy__19299__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30588 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30588.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30588.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_30588.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30588);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30589,st_map){
var map__30594 = p__30589;
var map__30594__$1 = ((((!((map__30594 == null)))?((((map__30594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);
var container_el = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30594,map__30594__$1,container_el){
return (function (p__30596){
var vec__30597 = p__30596;
var k = cljs.core.nth.call(null,vec__30597,(0),null);
var v = cljs.core.nth.call(null,vec__30597,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30594,map__30594__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30598,dom_str){
var map__30601 = p__30598;
var map__30601__$1 = ((((!((map__30601 == null)))?((((map__30601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30601):map__30601);
var c = map__30601__$1;
var content_area_el = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30603){
var map__30606 = p__30603;
var map__30606__$1 = ((((!((map__30606 == null)))?((((map__30606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30606):map__30606);
var content_area_el = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__){
return (function (state_30649){
var state_val_30650 = (state_30649[(1)]);
if((state_val_30650 === (1))){
var inst_30634 = (state_30649[(7)]);
var inst_30634__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30635 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30636 = ["10px","10px","100%","68px","1.0"];
var inst_30637 = cljs.core.PersistentHashMap.fromArrays(inst_30635,inst_30636);
var inst_30638 = cljs.core.merge.call(null,inst_30637,style);
var inst_30639 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30634__$1,inst_30638);
var inst_30640 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30634__$1,msg);
var inst_30641 = cljs.core.async.timeout.call(null,(300));
var state_30649__$1 = (function (){var statearr_30651 = state_30649;
(statearr_30651[(8)] = inst_30639);

(statearr_30651[(9)] = inst_30640);

(statearr_30651[(7)] = inst_30634__$1);

return statearr_30651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30649__$1,(2),inst_30641);
} else {
if((state_val_30650 === (2))){
var inst_30634 = (state_30649[(7)]);
var inst_30643 = (state_30649[(2)]);
var inst_30644 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30645 = ["auto"];
var inst_30646 = cljs.core.PersistentHashMap.fromArrays(inst_30644,inst_30645);
var inst_30647 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30634,inst_30646);
var state_30649__$1 = (function (){var statearr_30652 = state_30649;
(statearr_30652[(10)] = inst_30643);

return statearr_30652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30649__$1,inst_30647);
} else {
return null;
}
}
});})(c__26267__auto__))
;
return ((function (switch__26155__auto__,c__26267__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto____0 = (function (){
var statearr_30656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30656[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto__);

(statearr_30656[(1)] = (1));

return statearr_30656;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto____1 = (function (state_30649){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_30649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e30657){if((e30657 instanceof Object)){
var ex__26159__auto__ = e30657;
var statearr_30658_30660 = state_30649;
(statearr_30658_30660[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30661 = state_30649;
state_30649 = G__30661;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto__ = function(state_30649){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto____1.call(this,state_30649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__))
})();
var state__26269__auto__ = (function (){var statearr_30659 = f__26268__auto__.call(null);
(statearr_30659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_30659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__))
);

return c__26267__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30663 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__30663,(0),null);
var ln = cljs.core.nth.call(null,vec__30663,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30666 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30666,(0),null);
var file_line = cljs.core.nth.call(null,vec__30666,(1),null);
var file_column = cljs.core.nth.call(null,vec__30666,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30666,file_name,file_line,file_column){
return (function (p1__30664_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30664_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30666,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18383__auto__ = file_line;
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var and__18371__auto__ = cause;
if(cljs.core.truth_(and__18371__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18371__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30669 = figwheel.client.heads_up.ensure_container.call(null);
var map__30669__$1 = ((((!((map__30669 == null)))?((((map__30669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var content_area_el = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__){
return (function (state_30717){
var state_val_30718 = (state_30717[(1)]);
if((state_val_30718 === (1))){
var inst_30700 = (state_30717[(7)]);
var inst_30700__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30701 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30702 = ["0.0"];
var inst_30703 = cljs.core.PersistentHashMap.fromArrays(inst_30701,inst_30702);
var inst_30704 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30700__$1,inst_30703);
var inst_30705 = cljs.core.async.timeout.call(null,(300));
var state_30717__$1 = (function (){var statearr_30719 = state_30717;
(statearr_30719[(7)] = inst_30700__$1);

(statearr_30719[(8)] = inst_30704);

return statearr_30719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30717__$1,(2),inst_30705);
} else {
if((state_val_30718 === (2))){
var inst_30700 = (state_30717[(7)]);
var inst_30707 = (state_30717[(2)]);
var inst_30708 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30709 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30710 = cljs.core.PersistentHashMap.fromArrays(inst_30708,inst_30709);
var inst_30711 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30700,inst_30710);
var inst_30712 = cljs.core.async.timeout.call(null,(200));
var state_30717__$1 = (function (){var statearr_30720 = state_30717;
(statearr_30720[(9)] = inst_30707);

(statearr_30720[(10)] = inst_30711);

return statearr_30720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30717__$1,(3),inst_30712);
} else {
if((state_val_30718 === (3))){
var inst_30700 = (state_30717[(7)]);
var inst_30714 = (state_30717[(2)]);
var inst_30715 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30700,"");
var state_30717__$1 = (function (){var statearr_30721 = state_30717;
(statearr_30721[(11)] = inst_30714);

return statearr_30721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30717__$1,inst_30715);
} else {
return null;
}
}
}
});})(c__26267__auto__))
;
return ((function (switch__26155__auto__,c__26267__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__26156__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__26156__auto____0 = (function (){
var statearr_30725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30725[(0)] = figwheel$client$heads_up$clear_$_state_machine__26156__auto__);

(statearr_30725[(1)] = (1));

return statearr_30725;
});
var figwheel$client$heads_up$clear_$_state_machine__26156__auto____1 = (function (state_30717){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_30717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e30726){if((e30726 instanceof Object)){
var ex__26159__auto__ = e30726;
var statearr_30727_30729 = state_30717;
(statearr_30727_30729[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30730 = state_30717;
state_30717 = G__30730;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__26156__auto__ = function(state_30717){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__26156__auto____1.call(this,state_30717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__26156__auto____0;
figwheel$client$heads_up$clear_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__26156__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__))
})();
var state__26269__auto__ = (function (){var statearr_30728 = f__26268__auto__.call(null);
(statearr_30728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_30728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__))
);

return c__26267__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__){
return (function (state_30762){
var state_val_30763 = (state_30762[(1)]);
if((state_val_30763 === (1))){
var inst_30752 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30762__$1,(2),inst_30752);
} else {
if((state_val_30763 === (2))){
var inst_30754 = (state_30762[(2)]);
var inst_30755 = cljs.core.async.timeout.call(null,(400));
var state_30762__$1 = (function (){var statearr_30764 = state_30762;
(statearr_30764[(7)] = inst_30754);

return statearr_30764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30762__$1,(3),inst_30755);
} else {
if((state_val_30763 === (3))){
var inst_30757 = (state_30762[(2)]);
var inst_30758 = figwheel.client.heads_up.clear.call(null);
var state_30762__$1 = (function (){var statearr_30765 = state_30762;
(statearr_30765[(8)] = inst_30757);

return statearr_30765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30762__$1,(4),inst_30758);
} else {
if((state_val_30763 === (4))){
var inst_30760 = (state_30762[(2)]);
var state_30762__$1 = state_30762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30762__$1,inst_30760);
} else {
return null;
}
}
}
}
});})(c__26267__auto__))
;
return ((function (switch__26155__auto__,c__26267__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto____0 = (function (){
var statearr_30769 = [null,null,null,null,null,null,null,null,null];
(statearr_30769[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto__);

(statearr_30769[(1)] = (1));

return statearr_30769;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto____1 = (function (state_30762){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_30762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e30770){if((e30770 instanceof Object)){
var ex__26159__auto__ = e30770;
var statearr_30771_30773 = state_30762;
(statearr_30771_30773[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30774 = state_30762;
state_30762 = G__30774;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto__ = function(state_30762){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto____1.call(this,state_30762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__))
})();
var state__26269__auto__ = (function (){var statearr_30772 = f__26268__auto__.call(null);
(statearr_30772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_30772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__))
);

return c__26267__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map