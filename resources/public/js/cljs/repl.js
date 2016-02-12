// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30473_30487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30474_30488 = null;
var count__30475_30489 = (0);
var i__30476_30490 = (0);
while(true){
if((i__30476_30490 < count__30475_30489)){
var f_30491 = cljs.core._nth.call(null,chunk__30474_30488,i__30476_30490);
cljs.core.println.call(null,"  ",f_30491);

var G__30492 = seq__30473_30487;
var G__30493 = chunk__30474_30488;
var G__30494 = count__30475_30489;
var G__30495 = (i__30476_30490 + (1));
seq__30473_30487 = G__30492;
chunk__30474_30488 = G__30493;
count__30475_30489 = G__30494;
i__30476_30490 = G__30495;
continue;
} else {
var temp__4657__auto___30496 = cljs.core.seq.call(null,seq__30473_30487);
if(temp__4657__auto___30496){
var seq__30473_30497__$1 = temp__4657__auto___30496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30473_30497__$1)){
var c__19186__auto___30498 = cljs.core.chunk_first.call(null,seq__30473_30497__$1);
var G__30499 = cljs.core.chunk_rest.call(null,seq__30473_30497__$1);
var G__30500 = c__19186__auto___30498;
var G__30501 = cljs.core.count.call(null,c__19186__auto___30498);
var G__30502 = (0);
seq__30473_30487 = G__30499;
chunk__30474_30488 = G__30500;
count__30475_30489 = G__30501;
i__30476_30490 = G__30502;
continue;
} else {
var f_30503 = cljs.core.first.call(null,seq__30473_30497__$1);
cljs.core.println.call(null,"  ",f_30503);

var G__30504 = cljs.core.next.call(null,seq__30473_30497__$1);
var G__30505 = null;
var G__30506 = (0);
var G__30507 = (0);
seq__30473_30487 = G__30504;
chunk__30474_30488 = G__30505;
count__30475_30489 = G__30506;
i__30476_30490 = G__30507;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30508 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18383__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30508);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30508)))?cljs.core.second.call(null,arglists_30508):arglists_30508));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30478 = null;
var count__30479 = (0);
var i__30480 = (0);
while(true){
if((i__30480 < count__30479)){
var vec__30481 = cljs.core._nth.call(null,chunk__30478,i__30480);
var name = cljs.core.nth.call(null,vec__30481,(0),null);
var map__30482 = cljs.core.nth.call(null,vec__30481,(1),null);
var map__30482__$1 = ((((!((map__30482 == null)))?((((map__30482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30482):map__30482);
var doc = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30509 = seq__30477;
var G__30510 = chunk__30478;
var G__30511 = count__30479;
var G__30512 = (i__30480 + (1));
seq__30477 = G__30509;
chunk__30478 = G__30510;
count__30479 = G__30511;
i__30480 = G__30512;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30477);
if(temp__4657__auto__){
var seq__30477__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30477__$1)){
var c__19186__auto__ = cljs.core.chunk_first.call(null,seq__30477__$1);
var G__30513 = cljs.core.chunk_rest.call(null,seq__30477__$1);
var G__30514 = c__19186__auto__;
var G__30515 = cljs.core.count.call(null,c__19186__auto__);
var G__30516 = (0);
seq__30477 = G__30513;
chunk__30478 = G__30514;
count__30479 = G__30515;
i__30480 = G__30516;
continue;
} else {
var vec__30484 = cljs.core.first.call(null,seq__30477__$1);
var name = cljs.core.nth.call(null,vec__30484,(0),null);
var map__30485 = cljs.core.nth.call(null,vec__30484,(1),null);
var map__30485__$1 = ((((!((map__30485 == null)))?((((map__30485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30485):map__30485);
var doc = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30485__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30517 = cljs.core.next.call(null,seq__30477__$1);
var G__30518 = null;
var G__30519 = (0);
var G__30520 = (0);
seq__30477 = G__30517;
chunk__30478 = G__30518;
count__30479 = G__30519;
i__30480 = G__30520;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map