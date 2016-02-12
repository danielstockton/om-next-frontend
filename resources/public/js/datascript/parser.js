// Compiled by ClojureScript 1.7.228 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__19038__auto__ = (((_ == null))?null:_);
var m__19039__auto__ = (datascript.parser._collect[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,_,pred,acc);
} else {
var m__19039__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__19038__auto__ = (((_ == null))?null:_);
var m__19039__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,_,acc);
} else {
var m__19039__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__19038__auto__ = (((_ == null))?null:_);
var m__19039__auto__ = (datascript.parser._postwalk[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,_,f);
} else {
var m__19039__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__22324_SHARP_,p2__22323_SHARP_){
var temp__4655__auto__ = parse_el.call(null,p2__22323_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.conj.call(null,p1__22324_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__19448__auto__ = [];
var len__19441__auto___22331 = arguments.length;
var i__19442__auto___22332 = (0);
while(true){
if((i__19442__auto___22332 < len__19441__auto___22331)){
args__19448__auto__.push((arguments[i__19442__auto___22332]));

var G__22333 = (i__19442__auto___22332 + (1));
i__19442__auto___22332 = G__22333;
continue;
} else {
}
break;
}

var argseq__19449__auto__ = ((((2) < args__19448__auto__.length))?(new cljs.core.IndexedSeq(args__19448__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19449__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__22328){
var vec__22329 = p__22328;
var acc = cljs.core.nth.call(null,vec__22329,(0),null);
var acc__$1 = (function (){var or__18383__auto__ = acc;
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__22329,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__22329,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq22325){
var G__22326 = cljs.core.first.call(null,seq22325);
var seq22325__$1 = cljs.core.next.call(null,seq22325);
var G__22327 = cljs.core.first.call(null,seq22325__$1);
var seq22325__$2 = cljs.core.next.call(null,seq22325__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__22326,G__22327,seq22325__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__18383__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__18383__auto__){
return or__18383__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__22340){
var vec__22341 = p__22340;
var k = cljs.core.nth.call(null,vec__22341,(0),null);
var v = cljs.core.nth.call(null,vec__22341,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__22334_SHARP_){
return datascript$parser$postwalk.call(null,p1__22334_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__22335_SHARP_){
return datascript$parser$postwalk.call(null,p1__22335_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__18383__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22346,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22348 = k22346;
switch (G__22348) {
default:
return cljs.core.get.call(null,self__.__extmap,k22346,else__19000__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Placeholder{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22345){
var self__ = this;
var G__22345__$1 = this;
return (new cljs.core.RecordIter((0),G__22345__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22345){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22349 = cljs.core.keyword_identical_QMARK_;
var expr__22350 = k__19005__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22345),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22345){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Placeholder(G__22345,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22342){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22343,acc22344){
var self__ = this;
var ___21296__auto____$1 = this;
return acc22344;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22344){
var self__ = this;
var ___21296__auto____$1 = this;
return acc22344;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__22347){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__22347),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22357,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22359 = (((k22357 instanceof cljs.core.Keyword))?k22357.fqn:null);
switch (G__22359) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22357,else__19000__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Variable{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22356){
var self__ = this;
var G__22356__$1 = this;
return (new cljs.core.RecordIter((0),G__22356__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22356){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22360 = cljs.core.keyword_identical_QMARK_;
var expr__22361 = k__19005__auto__;
if(cljs.core.truth_(pred__22360.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__22361))){
return (new datascript.parser.Variable(G__22356,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22356),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22356){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__22356,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22353){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f22353),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22354,acc22355){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22354,self__.symbol,acc22355);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22355){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22355,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__22358){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__22358),null,cljs.core.dissoc.call(null,G__22358,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22368,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22370 = (((k22368 instanceof cljs.core.Keyword))?k22368.fqn:null);
switch (G__22370) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22368,else__19000__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.SrcVar{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22367){
var self__ = this;
var G__22367__$1 = this;
return (new cljs.core.RecordIter((0),G__22367__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22367){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22371 = cljs.core.keyword_identical_QMARK_;
var expr__22372 = k__19005__auto__;
if(cljs.core.truth_(pred__22371.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__22372))){
return (new datascript.parser.SrcVar(G__22367,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22367),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22367){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__22367,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22364){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f22364),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22365,acc22366){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22365,self__.symbol,acc22366);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22366){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22366,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__22369){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__22369),null,cljs.core.dissoc.call(null,G__22369,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22379,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22381 = k22379;
switch (G__22381) {
default:
return cljs.core.get.call(null,self__.__extmap,k22379,else__19000__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22378){
var self__ = this;
var G__22378__$1 = this;
return (new cljs.core.RecordIter((0),G__22378__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22378){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22382 = cljs.core.keyword_identical_QMARK_;
var expr__22383 = k__19005__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22378),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22378){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__22378,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22375){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22376,acc22377){
var self__ = this;
var ___21296__auto____$1 = this;
return acc22377;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22377){
var self__ = this;
var ___21296__auto____$1 = this;
return acc22377;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__22380){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__22380),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22390,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22392 = k22390;
switch (G__22392) {
default:
return cljs.core.get.call(null,self__.__extmap,k22390,else__19000__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.RulesVar{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22389){
var self__ = this;
var G__22389__$1 = this;
return (new cljs.core.RecordIter((0),G__22389__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22389){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22393 = cljs.core.keyword_identical_QMARK_;
var expr__22394 = k__19005__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22389),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22389){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.RulesVar(G__22389,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22386){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22387,acc22388){
var self__ = this;
var ___21296__auto____$1 = this;
return acc22388;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22388){
var self__ = this;
var ___21296__auto____$1 = this;
return acc22388;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__22391){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__22391),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22401,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22403 = (((k22401 instanceof cljs.core.Keyword))?k22401.fqn:null);
switch (G__22403) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22401,else__19000__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Constant{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22400){
var self__ = this;
var G__22400__$1 = this;
return (new cljs.core.RecordIter((0),G__22400__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22400){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22404 = cljs.core.keyword_identical_QMARK_;
var expr__22405 = k__19005__auto__;
if(cljs.core.truth_(pred__22404.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__22405))){
return (new datascript.parser.Constant(G__22400,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22400),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22400){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__22400,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22397){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f22397),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22398,acc22399){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22398,self__.value,acc22399);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22399){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22399,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__22402){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__22402),null,cljs.core.dissoc.call(null,G__22402,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22412,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22414 = (((k22412 instanceof cljs.core.Keyword))?k22412.fqn:null);
switch (G__22414) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22412,else__19000__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22411){
var self__ = this;
var G__22411__$1 = this;
return (new cljs.core.RecordIter((0),G__22411__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22411){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22415 = cljs.core.keyword_identical_QMARK_;
var expr__22416 = k__19005__auto__;
if(cljs.core.truth_(pred__22415.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__22416))){
return (new datascript.parser.PlainSymbol(G__22411,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22411),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22411){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__22411,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22408){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f22408),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22409,acc22410){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22409,self__.symbol,acc22410);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22410){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22410,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__22413){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__22413),null,cljs.core.dissoc.call(null,G__22413,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__18383__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22423,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22425 = (((k22423 instanceof cljs.core.Keyword))?k22423.fqn:null);
switch (G__22425) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22423,else__19000__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.RuleVars{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22422){
var self__ = this;
var G__22422__$1 = this;
return (new cljs.core.RecordIter((0),G__22422__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22422){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22426 = cljs.core.keyword_identical_QMARK_;
var expr__22427 = k__19005__auto__;
if(cljs.core.truth_(pred__22426.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__22427))){
return (new datascript.parser.RuleVars(G__22422,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22426.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__22427))){
return (new datascript.parser.RuleVars(self__.required,G__22422,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22422),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22422){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__22422,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22419){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f22419),datascript.parser.postwalk.call(null,self__.free,f22419),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22420,acc22421){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22420,self__.free,datascript.parser.collect.call(null,pred22420,self__.required,acc22421));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22421){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22421,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__22424){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__22424),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__22424),null,cljs.core.dissoc.call(null,G__22424,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__22431 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__22431,(0),null);
var rest = cljs.core.nth.call(null,vec__22431,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22436,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22438 = k22436;
switch (G__22438) {
default:
return cljs.core.get.call(null,self__.__extmap,k22436,else__19000__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22435){
var self__ = this;
var G__22435__$1 = this;
return (new cljs.core.RecordIter((0),G__22435__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22435){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22439 = cljs.core.keyword_identical_QMARK_;
var expr__22440 = k__19005__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22435),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22435){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__22435,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22432){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22433,acc22434){
var self__ = this;
var ___21296__auto____$1 = this;
return acc22434;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22434){
var self__ = this;
var ___21296__auto____$1 = this;
return acc22434;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__22437){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__22437),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22447,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22449 = (((k22447 instanceof cljs.core.Keyword))?k22447.fqn:null);
switch (G__22449) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22447,else__19000__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.BindScalar{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22446){
var self__ = this;
var G__22446__$1 = this;
return (new cljs.core.RecordIter((0),G__22446__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22446){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22450 = cljs.core.keyword_identical_QMARK_;
var expr__22451 = k__19005__auto__;
if(cljs.core.truth_(pred__22450.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__22451))){
return (new datascript.parser.BindScalar(G__22446,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22446),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22446){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__22446,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22443){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f22443),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22444,acc22445){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22444,self__.variable,acc22445);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22445){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22445,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__22448){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__22448),null,cljs.core.dissoc.call(null,G__22448,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22458,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22460 = (((k22458 instanceof cljs.core.Keyword))?k22458.fqn:null);
switch (G__22460) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22458,else__19000__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.BindTuple{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22457){
var self__ = this;
var G__22457__$1 = this;
return (new cljs.core.RecordIter((0),G__22457__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22457){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22461 = cljs.core.keyword_identical_QMARK_;
var expr__22462 = k__19005__auto__;
if(cljs.core.truth_(pred__22461.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__22462))){
return (new datascript.parser.BindTuple(G__22457,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22457),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22457){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__22457,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22454){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f22454),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22455,acc22456){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22455,self__.bindings,acc22456);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22456){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22456,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__22459){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__22459),null,cljs.core.dissoc.call(null,G__22459,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22469,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22471 = (((k22469 instanceof cljs.core.Keyword))?k22469.fqn:null);
switch (G__22471) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22469,else__19000__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.BindColl{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22468){
var self__ = this;
var G__22468__$1 = this;
return (new cljs.core.RecordIter((0),G__22468__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22468){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22472 = cljs.core.keyword_identical_QMARK_;
var expr__22473 = k__19005__auto__;
if(cljs.core.truth_(pred__22472.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__22473))){
return (new datascript.parser.BindColl(G__22468,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22468),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22468){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__22468,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22465){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f22465),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22466,acc22467){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22466,self__.binding,acc22467);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22467){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22467,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__22470){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__22470),null,cljs.core.dissoc.call(null,G__22470,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4657__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var var$ = temp__4657__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__18371__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__18371__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__18371__auto__;
}
})())){
var temp__4655__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4655__auto__)){
var sub_bind = temp__4655__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__18383__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4657__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4657__auto__)){
var sub_bindings = temp__4657__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__18371__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__18371__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__18371__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__18383__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
var or__18383__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__18383__auto____$2)){
return or__18383__auto____$2;
} else {
var or__18383__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__18383__auto____$3)){
return or__18383__auto____$3;
} else {
var or__18383__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__18383__auto____$4)){
return or__18383__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (datascript.parser._find_vars[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$);
} else {
var m__19039__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22480,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22482 = (((k22480 instanceof cljs.core.Keyword))?k22480.fqn:null);
switch (G__22482) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22480,else__19000__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Aggregate{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22479){
var self__ = this;
var G__22479__$1 = this;
return (new cljs.core.RecordIter((0),G__22479__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22479){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22483 = cljs.core.keyword_identical_QMARK_;
var expr__22484 = k__19005__auto__;
if(cljs.core.truth_(pred__22483.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__22484))){
return (new datascript.parser.Aggregate(G__22479,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22483.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__22484))){
return (new datascript.parser.Aggregate(self__.fn,G__22479,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22479),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22479){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__22479,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22476){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f22476),datascript.parser.postwalk.call(null,self__.args,f22476),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22477,acc22478){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22477,self__.args,datascript.parser.collect.call(null,pred22477,self__.fn,acc22478));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22478){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22478,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__22481){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__22481),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__22481),null,cljs.core.dissoc.call(null,G__22481,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22491,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22493 = (((k22491 instanceof cljs.core.Keyword))?k22491.fqn:null);
switch (G__22493) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22491,else__19000__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Pull{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22490){
var self__ = this;
var G__22490__$1 = this;
return (new cljs.core.RecordIter((0),G__22490__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22490){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22494 = cljs.core.keyword_identical_QMARK_;
var expr__22495 = k__19005__auto__;
if(cljs.core.truth_(pred__22494.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__22495))){
return (new datascript.parser.Pull(G__22490,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22494.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__22495))){
return (new datascript.parser.Pull(self__.source,G__22490,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22494.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__22495))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__22490,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22490),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22490){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__22490,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22487){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f22487),datascript.parser.postwalk.call(null,self__.variable,f22487),datascript.parser.postwalk.call(null,self__.pattern,f22487),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22488,acc22489){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22488,self__.pattern,datascript.parser.collect.call(null,pred22488,self__.variable,datascript.parser.collect.call(null,pred22488,self__.source,acc22489)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22489){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22489,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__22492){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__22492),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__22492),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__22492),null,cljs.core.dissoc.call(null,G__22492,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__19038__auto__ = (((this$ == null))?null:this$);
var m__19039__auto__ = (datascript.parser.find_elements[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,this$);
} else {
var m__19039__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22502,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22504 = (((k22502 instanceof cljs.core.Keyword))?k22502.fqn:null);
switch (G__22504) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22502,else__19000__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.FindRel{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22501){
var self__ = this;
var G__22501__$1 = this;
return (new cljs.core.RecordIter((0),G__22501__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22501){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22505 = cljs.core.keyword_identical_QMARK_;
var expr__22506 = k__19005__auto__;
if(cljs.core.truth_(pred__22505.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__22506))){
return (new datascript.parser.FindRel(G__22501,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22501),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22501){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__22501,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22498){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f22498),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22499,acc22500){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22499,self__.elements,acc22500);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22500){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22500,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__22503){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__22503),null,cljs.core.dissoc.call(null,G__22503,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22513,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22515 = (((k22513 instanceof cljs.core.Keyword))?k22513.fqn:null);
switch (G__22515) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22513,else__19000__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.FindColl{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22512){
var self__ = this;
var G__22512__$1 = this;
return (new cljs.core.RecordIter((0),G__22512__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22512){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22516 = cljs.core.keyword_identical_QMARK_;
var expr__22517 = k__19005__auto__;
if(cljs.core.truth_(pred__22516.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__22517))){
return (new datascript.parser.FindColl(G__22512,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22512),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22512){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__22512,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22509){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f22509),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22510,acc22511){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22510,self__.element,acc22511);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22511){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22511,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__22514){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__22514),null,cljs.core.dissoc.call(null,G__22514,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22524,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22526 = (((k22524 instanceof cljs.core.Keyword))?k22524.fqn:null);
switch (G__22526) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22524,else__19000__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.FindScalar{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22523){
var self__ = this;
var G__22523__$1 = this;
return (new cljs.core.RecordIter((0),G__22523__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22523){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22527 = cljs.core.keyword_identical_QMARK_;
var expr__22528 = k__19005__auto__;
if(cljs.core.truth_(pred__22527.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__22528))){
return (new datascript.parser.FindScalar(G__22523,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22523),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22523){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__22523,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22520){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f22520),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22521,acc22522){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22521,self__.element,acc22522);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22522){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22522,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__22525){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__22525),null,cljs.core.dissoc.call(null,G__22525,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22535,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22537 = (((k22535 instanceof cljs.core.Keyword))?k22535.fqn:null);
switch (G__22537) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22535,else__19000__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.FindTuple{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22534){
var self__ = this;
var G__22534__$1 = this;
return (new cljs.core.RecordIter((0),G__22534__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22534){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22538 = cljs.core.keyword_identical_QMARK_;
var expr__22539 = k__19005__auto__;
if(cljs.core.truth_(pred__22538.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__22539))){
return (new datascript.parser.FindTuple(G__22534,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22534),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22534){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__22534,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22531){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f22531),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22532,acc22533){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22532,self__.elements,acc22533);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22533){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22533,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__22536){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__22536),null,cljs.core.dissoc.call(null,G__22536,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__22543 = form;
var fn = cljs.core.nth.call(null,vec__22543,(0),null);
var args = cljs.core.nthnext.call(null,vec__22543,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__18371__auto__ = fn_STAR_;
if(cljs.core.truth_(and__18371__auto__)){
return args_STAR_;
} else {
return and__18371__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__22545 = form;
var _ = cljs.core.nth.call(null,vec__22545,(0),null);
var fn = cljs.core.nth.call(null,vec__22545,(1),null);
var args = cljs.core.nthnext.call(null,vec__22545,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__18371__auto__ = fn_STAR_;
if(cljs.core.truth_(and__18371__auto__)){
return args_STAR_;
} else {
return and__18371__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__22547 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__22547,(0),null);
var pattern = cljs.core.nth.call(null,vec__22547,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__18383__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__18371__auto__ = src_STAR_;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__18371__auto____$1)){
return pattern_STAR_;
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__18383__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
var or__18383__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__18383__auto____$2)){
return or__18383__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__22549 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__22549 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__22549,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__22551 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__22551 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__22551,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__22553 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__22553 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__22553,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__22555 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__22555 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__22555,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__18383__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
var or__18383__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__18383__auto____$2)){
return or__18383__auto____$2;
} else {
var or__18383__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__18383__auto____$3)){
return or__18383__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__18383__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4655__auto__ = (function (){var or__18383__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__18383__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22560,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22562 = (((k22560 instanceof cljs.core.Keyword))?k22560.fqn:null);
switch (G__22562) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22560,else__19000__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Pattern{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22559){
var self__ = this;
var G__22559__$1 = this;
return (new cljs.core.RecordIter((0),G__22559__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22559){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22563 = cljs.core.keyword_identical_QMARK_;
var expr__22564 = k__19005__auto__;
if(cljs.core.truth_(pred__22563.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__22564))){
return (new datascript.parser.Pattern(G__22559,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22563.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__22564))){
return (new datascript.parser.Pattern(self__.source,G__22559,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22559),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22559){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__22559,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22556){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f22556),datascript.parser.postwalk.call(null,self__.pattern,f22556),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22557,acc22558){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22557,self__.pattern,datascript.parser.collect.call(null,pred22557,self__.source,acc22558));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22558){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22558,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__22561){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__22561),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__22561),null,cljs.core.dissoc.call(null,G__22561,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22571,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22573 = (((k22571 instanceof cljs.core.Keyword))?k22571.fqn:null);
switch (G__22573) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22571,else__19000__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Predicate{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22570){
var self__ = this;
var G__22570__$1 = this;
return (new cljs.core.RecordIter((0),G__22570__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22570){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22574 = cljs.core.keyword_identical_QMARK_;
var expr__22575 = k__19005__auto__;
if(cljs.core.truth_(pred__22574.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__22575))){
return (new datascript.parser.Predicate(G__22570,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22574.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__22575))){
return (new datascript.parser.Predicate(self__.fn,G__22570,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22570),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22570){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__22570,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22567){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f22567),datascript.parser.postwalk.call(null,self__.args,f22567),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22568,acc22569){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22568,self__.args,datascript.parser.collect.call(null,pred22568,self__.fn,acc22569));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22569){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22569,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__22572){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__22572),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__22572),null,cljs.core.dissoc.call(null,G__22572,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22582,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22584 = (((k22582 instanceof cljs.core.Keyword))?k22582.fqn:null);
switch (G__22584) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22582,else__19000__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Function{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22581){
var self__ = this;
var G__22581__$1 = this;
return (new cljs.core.RecordIter((0),G__22581__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22581){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22585 = cljs.core.keyword_identical_QMARK_;
var expr__22586 = k__19005__auto__;
if(cljs.core.truth_(pred__22585.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__22586))){
return (new datascript.parser.Function(G__22581,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22585.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__22586))){
return (new datascript.parser.Function(self__.fn,G__22581,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22585.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__22586))){
return (new datascript.parser.Function(self__.fn,self__.args,G__22581,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22581),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22581){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__22581,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22578){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f22578),datascript.parser.postwalk.call(null,self__.args,f22578),datascript.parser.postwalk.call(null,self__.binding,f22578),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22579,acc22580){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22579,self__.binding,datascript.parser.collect.call(null,pred22579,self__.args,datascript.parser.collect.call(null,pred22579,self__.fn,acc22580)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22580){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22580,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__22583){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__22583),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__22583),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__22583),null,cljs.core.dissoc.call(null,G__22583,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22593,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22595 = (((k22593 instanceof cljs.core.Keyword))?k22593.fqn:null);
switch (G__22595) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22593,else__19000__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22592){
var self__ = this;
var G__22592__$1 = this;
return (new cljs.core.RecordIter((0),G__22592__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22592){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22596 = cljs.core.keyword_identical_QMARK_;
var expr__22597 = k__19005__auto__;
if(cljs.core.truth_(pred__22596.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__22597))){
return (new datascript.parser.RuleExpr(G__22592,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22596.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22597))){
return (new datascript.parser.RuleExpr(self__.source,G__22592,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22596.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__22597))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__22592,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22592),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22592){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__22592,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22589){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f22589),datascript.parser.postwalk.call(null,self__.name,f22589),datascript.parser.postwalk.call(null,self__.args,f22589),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22590,acc22591){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22590,self__.args,datascript.parser.collect.call(null,pred22590,self__.name,datascript.parser.collect.call(null,pred22590,self__.source,acc22591)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22591){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22591,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__22594){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__22594),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22594),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__22594),null,cljs.core.dissoc.call(null,G__22594,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22604,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22606 = (((k22604 instanceof cljs.core.Keyword))?k22604.fqn:null);
switch (G__22606) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22604,else__19000__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Not{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22603){
var self__ = this;
var G__22603__$1 = this;
return (new cljs.core.RecordIter((0),G__22603__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22603){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22607 = cljs.core.keyword_identical_QMARK_;
var expr__22608 = k__19005__auto__;
if(cljs.core.truth_(pred__22607.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__22608))){
return (new datascript.parser.Not(G__22603,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22607.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__22608))){
return (new datascript.parser.Not(self__.source,G__22603,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22607.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__22608))){
return (new datascript.parser.Not(self__.source,self__.vars,G__22603,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22603),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22603){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__22603,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22600){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f22600),datascript.parser.postwalk.call(null,self__.vars,f22600),datascript.parser.postwalk.call(null,self__.clauses,f22600),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22601,acc22602){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22601,self__.clauses,datascript.parser.collect.call(null,pred22601,self__.vars,datascript.parser.collect.call(null,pred22601,self__.source,acc22602)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22602){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22602,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__22605){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__22605),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__22605),null,cljs.core.dissoc.call(null,G__22605,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22615,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22617 = (((k22615 instanceof cljs.core.Keyword))?k22615.fqn:null);
switch (G__22617) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22615,else__19000__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Or{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22614){
var self__ = this;
var G__22614__$1 = this;
return (new cljs.core.RecordIter((0),G__22614__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22614){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22618 = cljs.core.keyword_identical_QMARK_;
var expr__22619 = k__19005__auto__;
if(cljs.core.truth_(pred__22618.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__22619))){
return (new datascript.parser.Or(G__22614,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22618.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__22619))){
return (new datascript.parser.Or(self__.source,G__22614,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22618.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__22619))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__22614,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22614),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22614){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__22614,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22611){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f22611),datascript.parser.postwalk.call(null,self__.rule_vars,f22611),datascript.parser.postwalk.call(null,self__.clauses,f22611),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22612,acc22613){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22612,self__.clauses,datascript.parser.collect.call(null,pred22612,self__.rule_vars,datascript.parser.collect.call(null,pred22612,self__.source,acc22613)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22613){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22613,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__22616){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__22616),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__22616),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__22616),null,cljs.core.dissoc.call(null,G__22616,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22626,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22628 = (((k22626 instanceof cljs.core.Keyword))?k22626.fqn:null);
switch (G__22628) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22626,else__19000__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.And{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22625){
var self__ = this;
var G__22625__$1 = this;
return (new cljs.core.RecordIter((0),G__22625__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22625){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22629 = cljs.core.keyword_identical_QMARK_;
var expr__22630 = k__19005__auto__;
if(cljs.core.truth_(pred__22629.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__22630))){
return (new datascript.parser.And(G__22625,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22625),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22625){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__22625,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22622){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f22622),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22623,acc22624){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22623,self__.clauses,acc22624);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22624){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc22624,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__22627){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__22627),null,cljs.core.dissoc.call(null,G__22627,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__18383__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4655__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4655__auto__)){
var source_STAR_ = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22634 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__22634,(0),null);
var next_form = cljs.core.nth.call(null,vec__22634,(1),null);
var temp__4657__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4657__auto____$1)){
var pattern_STAR_ = temp__4657__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__22636 = form;
var fn = cljs.core.nth.call(null,vec__22636,(0),null);
var args = cljs.core.nthnext.call(null,vec__22636,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__18383__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__18371__auto__ = fn_STAR_;
if(cljs.core.truth_(and__18371__auto__)){
return args_STAR_;
} else {
return and__18371__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4657__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22638 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__22638,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__22638,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__22641 = form;
var call = cljs.core.nth.call(null,vec__22641,(0),null);
var binding = cljs.core.nth.call(null,vec__22641,(1),null);
var temp__4657__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22642 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__22642,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__22642,(1),null);
var temp__4657__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4657__auto____$1)){
var binding_STAR_ = temp__4657__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22645 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__22645,(0),null);
var next_form = cljs.core.nth.call(null,vec__22645,(1),null);
var vec__22646 = next_form;
var name = cljs.core.nth.call(null,vec__22646,(0),null);
var args = cljs.core.nthnext.call(null,vec__22646,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_22649 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_22649)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_22649)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22652 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__22652,(0),null);
var next_form = cljs.core.nth.call(null,vec__22652,(1),null);
var vec__22653 = next_form;
var sym = cljs.core.nth.call(null,vec__22653,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__22653,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4655__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4655__auto__)){
var clauses_STAR_ = temp__4655__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22656 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__22656,(0),null);
var next_form = cljs.core.nth.call(null,vec__22656,(1),null);
var vec__22657 = next_form;
var sym = cljs.core.nth.call(null,vec__22657,(0),null);
var vars = cljs.core.nth.call(null,vec__22657,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__22657,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__18371__auto__ = vars_STAR_;
if(cljs.core.truth_(and__18371__auto__)){
return clauses_STAR_;
} else {
return and__18371__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__22666 = clause;
var map__22666__$1 = ((((!((map__22666 == null)))?((((map__22666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22666):map__22666);
var map__22667 = cljs.core.get.call(null,map__22666__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__22667__$1 = ((((!((map__22667 == null)))?((((map__22667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22667):map__22667);
var required = cljs.core.get.call(null,map__22667__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__22667__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__22666__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__22670_22674 = cljs.core.seq.call(null,clauses);
var chunk__22671_22675 = null;
var count__22672_22676 = (0);
var i__22673_22677 = (0);
while(true){
if((i__22673_22677 < count__22672_22676)){
var clause_22678__$1 = cljs.core._nth.call(null,chunk__22671_22675,i__22673_22677);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_22678__$1], null),form);

var G__22679 = seq__22670_22674;
var G__22680 = chunk__22671_22675;
var G__22681 = count__22672_22676;
var G__22682 = (i__22673_22677 + (1));
seq__22670_22674 = G__22679;
chunk__22671_22675 = G__22680;
count__22672_22676 = G__22681;
i__22673_22677 = G__22682;
continue;
} else {
var temp__4657__auto___22683 = cljs.core.seq.call(null,seq__22670_22674);
if(temp__4657__auto___22683){
var seq__22670_22684__$1 = temp__4657__auto___22683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22670_22684__$1)){
var c__19186__auto___22685 = cljs.core.chunk_first.call(null,seq__22670_22684__$1);
var G__22686 = cljs.core.chunk_rest.call(null,seq__22670_22684__$1);
var G__22687 = c__19186__auto___22685;
var G__22688 = cljs.core.count.call(null,c__19186__auto___22685);
var G__22689 = (0);
seq__22670_22674 = G__22686;
chunk__22671_22675 = G__22687;
count__22672_22676 = G__22688;
i__22673_22677 = G__22689;
continue;
} else {
var clause_22690__$1 = cljs.core.first.call(null,seq__22670_22684__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_22690__$1], null),form);

var G__22691 = cljs.core.next.call(null,seq__22670_22684__$1);
var G__22692 = null;
var G__22693 = (0);
var G__22694 = (0);
seq__22670_22674 = G__22691;
chunk__22671_22675 = G__22692;
count__22672_22676 = G__22693;
i__22673_22677 = G__22694;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22697 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__22697,(0),null);
var next_form = cljs.core.nth.call(null,vec__22697,(1),null);
var vec__22698 = next_form;
var sym = cljs.core.nth.call(null,vec__22698,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__22698,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4655__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4655__auto__)){
var clauses_STAR_ = temp__4655__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22701 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__22701,(0),null);
var next_form = cljs.core.nth.call(null,vec__22701,(1),null);
var vec__22702 = next_form;
var sym = cljs.core.nth.call(null,vec__22702,(0),null);
var vars = cljs.core.nth.call(null,vec__22702,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__22702,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__18371__auto__ = vars_STAR_;
if(cljs.core.truth_(and__18371__auto__)){
return clauses_STAR_;
} else {
return and__18371__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__18383__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
var or__18383__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__18383__auto____$2)){
return or__18383__auto____$2;
} else {
var or__18383__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__18383__auto____$3)){
return or__18383__auto____$3;
} else {
var or__18383__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__18383__auto____$4)){
return or__18383__auto____$4;
} else {
var or__18383__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__18383__auto____$5)){
return or__18383__auto____$5;
} else {
var or__18383__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__18383__auto____$6)){
return or__18383__auto____$6;
} else {
var or__18383__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__18383__auto____$7)){
return or__18383__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__18383__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22708,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22710 = (((k22708 instanceof cljs.core.Keyword))?k22708.fqn:null);
switch (G__22710) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22708,else__19000__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22707){
var self__ = this;
var G__22707__$1 = this;
return (new cljs.core.RecordIter((0),G__22707__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22707){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22711 = cljs.core.keyword_identical_QMARK_;
var expr__22712 = k__19005__auto__;
if(cljs.core.truth_(pred__22711.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__22712))){
return (new datascript.parser.RuleBranch(G__22707,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22711.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__22712))){
return (new datascript.parser.RuleBranch(self__.vars,G__22707,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22707),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22707){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__22707,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22704){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f22704),datascript.parser.postwalk.call(null,self__.clauses,f22704),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22705,acc22706){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22705,self__.clauses,datascript.parser.collect.call(null,pred22705,self__.vars,acc22706));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22706){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22706,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__22709){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__22709),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__22709),null,cljs.core.dissoc.call(null,G__22709,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22719,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22721 = (((k22719 instanceof cljs.core.Keyword))?k22719.fqn:null);
switch (G__22721) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22719,else__19000__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Rule{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22718){
var self__ = this;
var G__22718__$1 = this;
return (new cljs.core.RecordIter((0),G__22718__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22718){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22722 = cljs.core.keyword_identical_QMARK_;
var expr__22723 = k__19005__auto__;
if(cljs.core.truth_(pred__22722.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22723))){
return (new datascript.parser.Rule(G__22718,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22722.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__22723))){
return (new datascript.parser.Rule(self__.name,G__22718,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22718),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22718){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__22718,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22715){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f22715),datascript.parser.postwalk.call(null,self__.branches,f22715),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22716,acc22717){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22716,self__.branches,datascript.parser.collect.call(null,pred22716,self__.name,acc22717));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22717){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22717,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__22720){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22720),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__22720),null,cljs.core.dissoc.call(null,G__22720,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__22726_SHARP_){
return (p1__22726_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__22727_SHARP_){
return (p1__22727_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__22730 = form;
var head = cljs.core.nth.call(null,vec__22730,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__22730,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__22731 = head;
var name = cljs.core.nth.call(null,vec__22731,(0),null);
var vars = cljs.core.nthnext.call(null,vec__22731,(1));
var name_STAR_ = (function (){var or__18383__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__18383__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__22738 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__22740 = null;
var count__22741 = (0);
var i__22742 = (0);
while(true){
if((i__22742 < count__22741)){
var b = cljs.core._nth.call(null,chunk__22740,i__22742);
var vars_22744 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_22744))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_22744)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__22745 = seq__22738;
var G__22746 = chunk__22740;
var G__22747 = count__22741;
var G__22748 = (i__22742 + (1));
seq__22738 = G__22745;
chunk__22740 = G__22746;
count__22741 = G__22747;
i__22742 = G__22748;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22738);
if(temp__4657__auto__){
var seq__22738__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22738__$1)){
var c__19186__auto__ = cljs.core.chunk_first.call(null,seq__22738__$1);
var G__22749 = cljs.core.chunk_rest.call(null,seq__22738__$1);
var G__22750 = c__19186__auto__;
var G__22751 = cljs.core.count.call(null,c__19186__auto__);
var G__22752 = (0);
seq__22738 = G__22749;
chunk__22740 = G__22750;
count__22741 = G__22751;
i__22742 = G__22752;
continue;
} else {
var b = cljs.core.first.call(null,seq__22738__$1);
var vars_22753 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_22753))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_22753)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__22754 = cljs.core.next.call(null,seq__22738__$1);
var G__22755 = null;
var G__22756 = (0);
var G__22757 = (0);
seq__22738 = G__22754;
chunk__22740 = G__22755;
count__22741 = G__22756;
i__22742 = G__22757;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__19155__auto__ = (function datascript$parser$parse_rules_$_iter__22767(s__22768){
return (new cljs.core.LazySeq(null,(function (){
var s__22768__$1 = s__22768;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22768__$1);
if(temp__4657__auto__){
var s__22768__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22768__$2)){
var c__19153__auto__ = cljs.core.chunk_first.call(null,s__22768__$2);
var size__19154__auto__ = cljs.core.count.call(null,c__19153__auto__);
var b__22770 = cljs.core.chunk_buffer.call(null,size__19154__auto__);
if((function (){var i__22769 = (0);
while(true){
if((i__22769 < size__19154__auto__)){
var vec__22773 = cljs.core._nth.call(null,c__19153__auto__,i__22769);
var name = cljs.core.nth.call(null,vec__22773,(0),null);
var branches = cljs.core.nth.call(null,vec__22773,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__22769,vec__22773,name,branches,c__19153__auto__,size__19154__auto__,b__22770,s__22768__$2,temp__4657__auto__){
return (function (p1__22758_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__22758_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__22758_SHARP_),null,null,null));
});})(i__22769,vec__22773,name,branches,c__19153__auto__,size__19154__auto__,b__22770,s__22768__$2,temp__4657__auto__))
,branches);
cljs.core.chunk_append.call(null,b__22770,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__22775 = (i__22769 + (1));
i__22769 = G__22775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22770),datascript$parser$parse_rules_$_iter__22767.call(null,cljs.core.chunk_rest.call(null,s__22768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22770),null);
}
} else {
var vec__22774 = cljs.core.first.call(null,s__22768__$2);
var name = cljs.core.nth.call(null,vec__22774,(0),null);
var branches = cljs.core.nth.call(null,vec__22774,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__22774,name,branches,s__22768__$2,temp__4657__auto__){
return (function (p1__22758_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__22758_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__22758_SHARP_),null,null,null));
});})(vec__22774,name,branches,s__22768__$2,temp__4657__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__22767.call(null,cljs.core.rest.call(null,s__22768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19155__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18997__auto__,k__18998__auto__){
var self__ = this;
var this__18997__auto____$1 = this;
return cljs.core._lookup.call(null,this__18997__auto____$1,k__18998__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18999__auto__,k22780,else__19000__auto__){
var self__ = this;
var this__18999__auto____$1 = this;
var G__22782 = (((k22780 instanceof cljs.core.Keyword))?k22780.fqn:null);
switch (G__22782) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22780,else__19000__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19011__auto__,writer__19012__auto__,opts__19013__auto__){
var self__ = this;
var this__19011__auto____$1 = this;
var pr_pair__19014__auto__ = ((function (this__19011__auto____$1){
return (function (keyval__19015__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,cljs.core.pr_writer,""," ","",opts__19013__auto__,keyval__19015__auto__);
});})(this__19011__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19012__auto__,pr_pair__19014__auto__,"#datascript.parser.Query{",", ","}",opts__19013__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22779){
var self__ = this;
var G__22779__$1 = this;
return (new cljs.core.RecordIter((0),G__22779__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18995__auto__){
var self__ = this;
var this__18995__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18991__auto__){
var self__ = this;
var this__18991__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19001__auto__){
var self__ = this;
var this__19001__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18992__auto__){
var self__ = this;
var this__18992__auto____$1 = this;
var h__18818__auto__ = self__.__hash;
if(!((h__18818__auto__ == null))){
return h__18818__auto__;
} else {
var h__18818__auto____$1 = cljs.core.hash_imap.call(null,this__18992__auto____$1);
self__.__hash = h__18818__auto____$1;

return h__18818__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18993__auto__,other__18994__auto__){
var self__ = this;
var this__18993__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18371__auto__ = other__18994__auto__;
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = (this__18993__auto____$1.constructor === other__18994__auto__.constructor);
if(and__18371__auto____$1){
return cljs.core.equiv_map.call(null,this__18993__auto____$1,other__18994__auto__);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19006__auto__,k__19007__auto__){
var self__ = this;
var this__19006__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__19007__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19006__auto____$1),self__.__meta),k__19007__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19007__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19004__auto__,k__19005__auto__,G__22779){
var self__ = this;
var this__19004__auto____$1 = this;
var pred__22783 = cljs.core.keyword_identical_QMARK_;
var expr__22784 = k__19005__auto__;
if(cljs.core.truth_(pred__22783.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__22784))){
return (new datascript.parser.Query(G__22779,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22783.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__22784))){
return (new datascript.parser.Query(self__.find,G__22779,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22783.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__22784))){
return (new datascript.parser.Query(self__.find,self__.with$,G__22779,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22783.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__22784))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__22779,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19005__auto__,G__22779),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19009__auto__){
var self__ = this;
var this__19009__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18996__auto__,G__22779){
var self__ = this;
var this__18996__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__22779,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19002__auto__,entry__19003__auto__){
var self__ = this;
var this__19002__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19003__auto__)){
return cljs.core._assoc.call(null,this__19002__auto____$1,cljs.core._nth.call(null,entry__19003__auto__,(0)),cljs.core._nth.call(null,entry__19003__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19002__auto____$1,entry__19003__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21293__auto__,f22776){
var self__ = this;
var this__21293__auto____$1 = this;
var new__21294__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f22776),datascript.parser.postwalk.call(null,self__.with$,f22776),datascript.parser.postwalk.call(null,self__.in$,f22776),datascript.parser.postwalk.call(null,self__.where,f22776),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__21293__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__21295__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__21294__auto__,meta__21295__auto__);
} else {
return new__21294__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21296__auto__,pred22777,acc22778){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect.call(null,pred22777,self__.where,datascript.parser.collect.call(null,pred22777,self__.in$,datascript.parser.collect.call(null,pred22777,self__.with$,datascript.parser.collect.call(null,pred22777,self__.find,acc22778))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21296__auto__,acc22778){
var self__ = this;
var ___21296__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22778,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__19031__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__19031__auto__,writer__19032__auto__){
return cljs.core._write.call(null,writer__19032__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__22781){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__22781),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__22781),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__22781),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__22781),null,cljs.core.dissoc.call(null,G__22781,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4655__auto__)){
var q = temp__4655__auto__;
if((q instanceof cljs.core.Keyword)){
var G__22787 = parsed;
var G__22788 = q;
var G__22789 = cljs.core.next.call(null,qs);
parsed = G__22787;
key = G__22788;
qs = G__22789;
continue;
} else {
var G__22790 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__22791 = key;
var G__22792 = cljs.core.next.call(null,qs);
parsed = G__22790;
key = G__22791;
qs = G__22792;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_22799 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_22800 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_22801 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_22802 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_22803 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_22799,with_vars_22800),clojure.set.union.call(null,where_vars_22802,in_vars_22801));
var shared_22804 = clojure.set.intersection.call(null,find_vars_22799,with_vars_22800);
if(cljs.core.empty_QMARK_.call(null,unknown_22803)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_22803)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_22803,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_22804)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_22804)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_22804,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_22805 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_22806 = datascript.parser.collect.call(null,((function (in_vars_22805){
return (function (p1__22793_SHARP_){
return (p1__22793_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_22805))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_22807 = datascript.parser.collect.call(null,((function (in_vars_22805,in_sources_22806){
return (function (p1__22794_SHARP_){
return (p1__22794_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_22805,in_sources_22806))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__18371__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_22805);
if(cljs.core.truth_(and__18371__auto__)){
var and__18371__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_22806);
if(cljs.core.truth_(and__18371__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_22807);
} else {
return and__18371__auto____$1;
}
} else {
return and__18371__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_22808 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_22808))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_22809 = datascript.parser.collect.call(null,(function (p1__22795_SHARP_){
return (p1__22795_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_22810 = datascript.parser.collect.call(null,((function (in_sources_22809){
return (function (p1__22796_SHARP_){
return (p1__22796_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_22809))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_22811 = clojure.set.difference.call(null,where_sources_22810,in_sources_22809);
if(cljs.core.empty_QMARK_.call(null,unknown_22811)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_22811)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_22811,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__22797_SHARP_){
return (p1__22797_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__22798_SHARP_){
return (p1__22798_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4657__auto__)){
var with$ = temp__4657__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map