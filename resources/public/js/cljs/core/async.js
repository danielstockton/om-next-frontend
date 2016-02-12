// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args26312 = [];
var len__19441__auto___26318 = arguments.length;
var i__19442__auto___26319 = (0);
while(true){
if((i__19442__auto___26319 < len__19441__auto___26318)){
args26312.push((arguments[i__19442__auto___26319]));

var G__26320 = (i__19442__auto___26319 + (1));
i__19442__auto___26319 = G__26320;
continue;
} else {
}
break;
}

var G__26314 = args26312.length;
switch (G__26314) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26312.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26315 = (function (f,blockable,meta26316){
this.f = f;
this.blockable = blockable;
this.meta26316 = meta26316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26317,meta26316__$1){
var self__ = this;
var _26317__$1 = this;
return (new cljs.core.async.t_cljs$core$async26315(self__.f,self__.blockable,meta26316__$1));
});

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26317){
var self__ = this;
var _26317__$1 = this;
return self__.meta26316;
});

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26316","meta26316",-1722067232,null)], null);
});

cljs.core.async.t_cljs$core$async26315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26315";

cljs.core.async.t_cljs$core$async26315.cljs$lang$ctorPrWriter = (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async26315");
});

cljs.core.async.__GT_t_cljs$core$async26315 = (function cljs$core$async$__GT_t_cljs$core$async26315(f__$1,blockable__$1,meta26316){
return (new cljs.core.async.t_cljs$core$async26315(f__$1,blockable__$1,meta26316));
});

}

return (new cljs.core.async.t_cljs$core$async26315(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26324 = [];
var len__19441__auto___26327 = arguments.length;
var i__19442__auto___26328 = (0);
while(true){
if((i__19442__auto___26328 < len__19441__auto___26327)){
args26324.push((arguments[i__19442__auto___26328]));

var G__26329 = (i__19442__auto___26328 + (1));
i__19442__auto___26328 = G__26329;
continue;
} else {
}
break;
}

var G__26326 = args26324.length;
switch (G__26326) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26324.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args26331 = [];
var len__19441__auto___26334 = arguments.length;
var i__19442__auto___26335 = (0);
while(true){
if((i__19442__auto___26335 < len__19441__auto___26334)){
args26331.push((arguments[i__19442__auto___26335]));

var G__26336 = (i__19442__auto___26335 + (1));
i__19442__auto___26335 = G__26336;
continue;
} else {
}
break;
}

var G__26333 = args26331.length;
switch (G__26333) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26331.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26338 = [];
var len__19441__auto___26341 = arguments.length;
var i__19442__auto___26342 = (0);
while(true){
if((i__19442__auto___26342 < len__19441__auto___26341)){
args26338.push((arguments[i__19442__auto___26342]));

var G__26343 = (i__19442__auto___26342 + (1));
i__19442__auto___26342 = G__26343;
continue;
} else {
}
break;
}

var G__26340 = args26338.length;
switch (G__26340) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26338.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26345 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26345);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26345,ret){
return (function (){
return fn1.call(null,val_26345);
});})(val_26345,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26346 = [];
var len__19441__auto___26349 = arguments.length;
var i__19442__auto___26350 = (0);
while(true){
if((i__19442__auto___26350 < len__19441__auto___26349)){
args26346.push((arguments[i__19442__auto___26350]));

var G__26351 = (i__19442__auto___26350 + (1));
i__19442__auto___26350 = G__26351;
continue;
} else {
}
break;
}

var G__26348 = args26346.length;
switch (G__26348) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26346.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19286__auto___26353 = n;
var x_26354 = (0);
while(true){
if((x_26354 < n__19286__auto___26353)){
(a[x_26354] = (0));

var G__26355 = (x_26354 + (1));
x_26354 = G__26355;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26356 = (i + (1));
i = G__26356;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26360 = (function (alt_flag,flag,meta26361){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26361 = meta26361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26362,meta26361__$1){
var self__ = this;
var _26362__$1 = this;
return (new cljs.core.async.t_cljs$core$async26360(self__.alt_flag,self__.flag,meta26361__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26362){
var self__ = this;
var _26362__$1 = this;
return self__.meta26361;
});})(flag))
;

cljs.core.async.t_cljs$core$async26360.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26360.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26361","meta26361",1167719133,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26360";

cljs.core.async.t_cljs$core$async26360.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async26360");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26360 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26360(alt_flag__$1,flag__$1,meta26361){
return (new cljs.core.async.t_cljs$core$async26360(alt_flag__$1,flag__$1,meta26361));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26360(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26366 = (function (alt_handler,flag,cb,meta26367){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26367 = meta26367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26368,meta26367__$1){
var self__ = this;
var _26368__$1 = this;
return (new cljs.core.async.t_cljs$core$async26366(self__.alt_handler,self__.flag,self__.cb,meta26367__$1));
});

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26368){
var self__ = this;
var _26368__$1 = this;
return self__.meta26367;
});

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26367","meta26367",-1380903031,null)], null);
});

cljs.core.async.t_cljs$core$async26366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26366";

cljs.core.async.t_cljs$core$async26366.cljs$lang$ctorPrWriter = (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async26366");
});

cljs.core.async.__GT_t_cljs$core$async26366 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26366(alt_handler__$1,flag__$1,cb__$1,meta26367){
return (new cljs.core.async.t_cljs$core$async26366(alt_handler__$1,flag__$1,cb__$1,meta26367));
});

}

return (new cljs.core.async.t_cljs$core$async26366(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26369_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26369_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26370_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26370_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18383__auto__ = wport;
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26371 = (i + (1));
i = G__26371;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18383__auto__ = ret;
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18371__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18371__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18371__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19448__auto__ = [];
var len__19441__auto___26377 = arguments.length;
var i__19442__auto___26378 = (0);
while(true){
if((i__19442__auto___26378 < len__19441__auto___26377)){
args__19448__auto__.push((arguments[i__19442__auto___26378]));

var G__26379 = (i__19442__auto___26378 + (1));
i__19442__auto___26378 = G__26379;
continue;
} else {
}
break;
}

var argseq__19449__auto__ = ((((1) < args__19448__auto__.length))?(new cljs.core.IndexedSeq(args__19448__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19449__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26374){
var map__26375 = p__26374;
var map__26375__$1 = ((((!((map__26375 == null)))?((((map__26375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26375):map__26375);
var opts = map__26375__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26372){
var G__26373 = cljs.core.first.call(null,seq26372);
var seq26372__$1 = cljs.core.next.call(null,seq26372);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26373,seq26372__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26380 = [];
var len__19441__auto___26430 = arguments.length;
var i__19442__auto___26431 = (0);
while(true){
if((i__19442__auto___26431 < len__19441__auto___26430)){
args26380.push((arguments[i__19442__auto___26431]));

var G__26432 = (i__19442__auto___26431 + (1));
i__19442__auto___26431 = G__26432;
continue;
} else {
}
break;
}

var G__26382 = args26380.length;
switch (G__26382) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26380.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26267__auto___26434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___26434){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___26434){
return (function (state_26406){
var state_val_26407 = (state_26406[(1)]);
if((state_val_26407 === (7))){
var inst_26402 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26408_26435 = state_26406__$1;
(statearr_26408_26435[(2)] = inst_26402);

(statearr_26408_26435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (1))){
var state_26406__$1 = state_26406;
var statearr_26409_26436 = state_26406__$1;
(statearr_26409_26436[(2)] = null);

(statearr_26409_26436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (4))){
var inst_26385 = (state_26406[(7)]);
var inst_26385__$1 = (state_26406[(2)]);
var inst_26386 = (inst_26385__$1 == null);
var state_26406__$1 = (function (){var statearr_26410 = state_26406;
(statearr_26410[(7)] = inst_26385__$1);

return statearr_26410;
})();
if(cljs.core.truth_(inst_26386)){
var statearr_26411_26437 = state_26406__$1;
(statearr_26411_26437[(1)] = (5));

} else {
var statearr_26412_26438 = state_26406__$1;
(statearr_26412_26438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (13))){
var state_26406__$1 = state_26406;
var statearr_26413_26439 = state_26406__$1;
(statearr_26413_26439[(2)] = null);

(statearr_26413_26439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (6))){
var inst_26385 = (state_26406[(7)]);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26406__$1,(11),to,inst_26385);
} else {
if((state_val_26407 === (3))){
var inst_26404 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26406__$1,inst_26404);
} else {
if((state_val_26407 === (12))){
var state_26406__$1 = state_26406;
var statearr_26414_26440 = state_26406__$1;
(statearr_26414_26440[(2)] = null);

(statearr_26414_26440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (2))){
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26406__$1,(4),from);
} else {
if((state_val_26407 === (11))){
var inst_26395 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
if(cljs.core.truth_(inst_26395)){
var statearr_26415_26441 = state_26406__$1;
(statearr_26415_26441[(1)] = (12));

} else {
var statearr_26416_26442 = state_26406__$1;
(statearr_26416_26442[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (9))){
var state_26406__$1 = state_26406;
var statearr_26417_26443 = state_26406__$1;
(statearr_26417_26443[(2)] = null);

(statearr_26417_26443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (5))){
var state_26406__$1 = state_26406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26418_26444 = state_26406__$1;
(statearr_26418_26444[(1)] = (8));

} else {
var statearr_26419_26445 = state_26406__$1;
(statearr_26419_26445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (14))){
var inst_26400 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26420_26446 = state_26406__$1;
(statearr_26420_26446[(2)] = inst_26400);

(statearr_26420_26446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (10))){
var inst_26392 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26421_26447 = state_26406__$1;
(statearr_26421_26447[(2)] = inst_26392);

(statearr_26421_26447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (8))){
var inst_26389 = cljs.core.async.close_BANG_.call(null,to);
var state_26406__$1 = state_26406;
var statearr_26422_26448 = state_26406__$1;
(statearr_26422_26448[(2)] = inst_26389);

(statearr_26422_26448[(1)] = (10));


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
});})(c__26267__auto___26434))
;
return ((function (switch__26155__auto__,c__26267__auto___26434){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_26426 = [null,null,null,null,null,null,null,null];
(statearr_26426[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_26426[(1)] = (1));

return statearr_26426;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_26406){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_26406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e26427){if((e26427 instanceof Object)){
var ex__26159__auto__ = e26427;
var statearr_26428_26449 = state_26406;
(statearr_26428_26449[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26450 = state_26406;
state_26406 = G__26450;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_26406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_26406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___26434))
})();
var state__26269__auto__ = (function (){var statearr_26429 = f__26268__auto__.call(null);
(statearr_26429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___26434);

return statearr_26429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___26434))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26634){
var vec__26635 = p__26634;
var v = cljs.core.nth.call(null,vec__26635,(0),null);
var p = cljs.core.nth.call(null,vec__26635,(1),null);
var job = vec__26635;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26267__auto___26817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___26817,res,vec__26635,v,p,job,jobs,results){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___26817,res,vec__26635,v,p,job,jobs,results){
return (function (state_26640){
var state_val_26641 = (state_26640[(1)]);
if((state_val_26641 === (1))){
var state_26640__$1 = state_26640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26640__$1,(2),res,v);
} else {
if((state_val_26641 === (2))){
var inst_26637 = (state_26640[(2)]);
var inst_26638 = cljs.core.async.close_BANG_.call(null,res);
var state_26640__$1 = (function (){var statearr_26642 = state_26640;
(statearr_26642[(7)] = inst_26637);

return statearr_26642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26640__$1,inst_26638);
} else {
return null;
}
}
});})(c__26267__auto___26817,res,vec__26635,v,p,job,jobs,results))
;
return ((function (switch__26155__auto__,c__26267__auto___26817,res,vec__26635,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0 = (function (){
var statearr_26646 = [null,null,null,null,null,null,null,null];
(statearr_26646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__);

(statearr_26646[(1)] = (1));

return statearr_26646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1 = (function (state_26640){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_26640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e26647){if((e26647 instanceof Object)){
var ex__26159__auto__ = e26647;
var statearr_26648_26818 = state_26640;
(statearr_26648_26818[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26819 = state_26640;
state_26640 = G__26819;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = function(state_26640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1.call(this,state_26640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___26817,res,vec__26635,v,p,job,jobs,results))
})();
var state__26269__auto__ = (function (){var statearr_26649 = f__26268__auto__.call(null);
(statearr_26649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___26817);

return statearr_26649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___26817,res,vec__26635,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26650){
var vec__26651 = p__26650;
var v = cljs.core.nth.call(null,vec__26651,(0),null);
var p = cljs.core.nth.call(null,vec__26651,(1),null);
var job = vec__26651;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19286__auto___26820 = n;
var __26821 = (0);
while(true){
if((__26821 < n__19286__auto___26820)){
var G__26652_26822 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26652_26822) {
case "compute":
var c__26267__auto___26824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26821,c__26267__auto___26824,G__26652_26822,n__19286__auto___26820,jobs,results,process,async){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (__26821,c__26267__auto___26824,G__26652_26822,n__19286__auto___26820,jobs,results,process,async){
return (function (state_26665){
var state_val_26666 = (state_26665[(1)]);
if((state_val_26666 === (1))){
var state_26665__$1 = state_26665;
var statearr_26667_26825 = state_26665__$1;
(statearr_26667_26825[(2)] = null);

(statearr_26667_26825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (2))){
var state_26665__$1 = state_26665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26665__$1,(4),jobs);
} else {
if((state_val_26666 === (3))){
var inst_26663 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26665__$1,inst_26663);
} else {
if((state_val_26666 === (4))){
var inst_26655 = (state_26665[(2)]);
var inst_26656 = process.call(null,inst_26655);
var state_26665__$1 = state_26665;
if(cljs.core.truth_(inst_26656)){
var statearr_26668_26826 = state_26665__$1;
(statearr_26668_26826[(1)] = (5));

} else {
var statearr_26669_26827 = state_26665__$1;
(statearr_26669_26827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (5))){
var state_26665__$1 = state_26665;
var statearr_26670_26828 = state_26665__$1;
(statearr_26670_26828[(2)] = null);

(statearr_26670_26828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (6))){
var state_26665__$1 = state_26665;
var statearr_26671_26829 = state_26665__$1;
(statearr_26671_26829[(2)] = null);

(statearr_26671_26829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (7))){
var inst_26661 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
var statearr_26672_26830 = state_26665__$1;
(statearr_26672_26830[(2)] = inst_26661);

(statearr_26672_26830[(1)] = (3));


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
});})(__26821,c__26267__auto___26824,G__26652_26822,n__19286__auto___26820,jobs,results,process,async))
;
return ((function (__26821,switch__26155__auto__,c__26267__auto___26824,G__26652_26822,n__19286__auto___26820,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0 = (function (){
var statearr_26676 = [null,null,null,null,null,null,null];
(statearr_26676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__);

(statearr_26676[(1)] = (1));

return statearr_26676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1 = (function (state_26665){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_26665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e26677){if((e26677 instanceof Object)){
var ex__26159__auto__ = e26677;
var statearr_26678_26831 = state_26665;
(statearr_26678_26831[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26832 = state_26665;
state_26665 = G__26832;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = function(state_26665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1.call(this,state_26665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__;
})()
;})(__26821,switch__26155__auto__,c__26267__auto___26824,G__26652_26822,n__19286__auto___26820,jobs,results,process,async))
})();
var state__26269__auto__ = (function (){var statearr_26679 = f__26268__auto__.call(null);
(statearr_26679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___26824);

return statearr_26679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(__26821,c__26267__auto___26824,G__26652_26822,n__19286__auto___26820,jobs,results,process,async))
);


break;
case "async":
var c__26267__auto___26833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26821,c__26267__auto___26833,G__26652_26822,n__19286__auto___26820,jobs,results,process,async){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (__26821,c__26267__auto___26833,G__26652_26822,n__19286__auto___26820,jobs,results,process,async){
return (function (state_26692){
var state_val_26693 = (state_26692[(1)]);
if((state_val_26693 === (1))){
var state_26692__$1 = state_26692;
var statearr_26694_26834 = state_26692__$1;
(statearr_26694_26834[(2)] = null);

(statearr_26694_26834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (2))){
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26692__$1,(4),jobs);
} else {
if((state_val_26693 === (3))){
var inst_26690 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26692__$1,inst_26690);
} else {
if((state_val_26693 === (4))){
var inst_26682 = (state_26692[(2)]);
var inst_26683 = async.call(null,inst_26682);
var state_26692__$1 = state_26692;
if(cljs.core.truth_(inst_26683)){
var statearr_26695_26835 = state_26692__$1;
(statearr_26695_26835[(1)] = (5));

} else {
var statearr_26696_26836 = state_26692__$1;
(statearr_26696_26836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (5))){
var state_26692__$1 = state_26692;
var statearr_26697_26837 = state_26692__$1;
(statearr_26697_26837[(2)] = null);

(statearr_26697_26837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (6))){
var state_26692__$1 = state_26692;
var statearr_26698_26838 = state_26692__$1;
(statearr_26698_26838[(2)] = null);

(statearr_26698_26838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26693 === (7))){
var inst_26688 = (state_26692[(2)]);
var state_26692__$1 = state_26692;
var statearr_26699_26839 = state_26692__$1;
(statearr_26699_26839[(2)] = inst_26688);

(statearr_26699_26839[(1)] = (3));


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
});})(__26821,c__26267__auto___26833,G__26652_26822,n__19286__auto___26820,jobs,results,process,async))
;
return ((function (__26821,switch__26155__auto__,c__26267__auto___26833,G__26652_26822,n__19286__auto___26820,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0 = (function (){
var statearr_26703 = [null,null,null,null,null,null,null];
(statearr_26703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__);

(statearr_26703[(1)] = (1));

return statearr_26703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1 = (function (state_26692){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_26692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e26704){if((e26704 instanceof Object)){
var ex__26159__auto__ = e26704;
var statearr_26705_26840 = state_26692;
(statearr_26705_26840[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26841 = state_26692;
state_26692 = G__26841;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = function(state_26692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1.call(this,state_26692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__;
})()
;})(__26821,switch__26155__auto__,c__26267__auto___26833,G__26652_26822,n__19286__auto___26820,jobs,results,process,async))
})();
var state__26269__auto__ = (function (){var statearr_26706 = f__26268__auto__.call(null);
(statearr_26706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___26833);

return statearr_26706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(__26821,c__26267__auto___26833,G__26652_26822,n__19286__auto___26820,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26842 = (__26821 + (1));
__26821 = G__26842;
continue;
} else {
}
break;
}

var c__26267__auto___26843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___26843,jobs,results,process,async){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___26843,jobs,results,process,async){
return (function (state_26728){
var state_val_26729 = (state_26728[(1)]);
if((state_val_26729 === (1))){
var state_26728__$1 = state_26728;
var statearr_26730_26844 = state_26728__$1;
(statearr_26730_26844[(2)] = null);

(statearr_26730_26844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (2))){
var state_26728__$1 = state_26728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26728__$1,(4),from);
} else {
if((state_val_26729 === (3))){
var inst_26726 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26728__$1,inst_26726);
} else {
if((state_val_26729 === (4))){
var inst_26709 = (state_26728[(7)]);
var inst_26709__$1 = (state_26728[(2)]);
var inst_26710 = (inst_26709__$1 == null);
var state_26728__$1 = (function (){var statearr_26731 = state_26728;
(statearr_26731[(7)] = inst_26709__$1);

return statearr_26731;
})();
if(cljs.core.truth_(inst_26710)){
var statearr_26732_26845 = state_26728__$1;
(statearr_26732_26845[(1)] = (5));

} else {
var statearr_26733_26846 = state_26728__$1;
(statearr_26733_26846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (5))){
var inst_26712 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26728__$1 = state_26728;
var statearr_26734_26847 = state_26728__$1;
(statearr_26734_26847[(2)] = inst_26712);

(statearr_26734_26847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (6))){
var inst_26714 = (state_26728[(8)]);
var inst_26709 = (state_26728[(7)]);
var inst_26714__$1 = cljs.core.async.chan.call(null,(1));
var inst_26715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26716 = [inst_26709,inst_26714__$1];
var inst_26717 = (new cljs.core.PersistentVector(null,2,(5),inst_26715,inst_26716,null));
var state_26728__$1 = (function (){var statearr_26735 = state_26728;
(statearr_26735[(8)] = inst_26714__$1);

return statearr_26735;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26728__$1,(8),jobs,inst_26717);
} else {
if((state_val_26729 === (7))){
var inst_26724 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26736_26848 = state_26728__$1;
(statearr_26736_26848[(2)] = inst_26724);

(statearr_26736_26848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (8))){
var inst_26714 = (state_26728[(8)]);
var inst_26719 = (state_26728[(2)]);
var state_26728__$1 = (function (){var statearr_26737 = state_26728;
(statearr_26737[(9)] = inst_26719);

return statearr_26737;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26728__$1,(9),results,inst_26714);
} else {
if((state_val_26729 === (9))){
var inst_26721 = (state_26728[(2)]);
var state_26728__$1 = (function (){var statearr_26738 = state_26728;
(statearr_26738[(10)] = inst_26721);

return statearr_26738;
})();
var statearr_26739_26849 = state_26728__$1;
(statearr_26739_26849[(2)] = null);

(statearr_26739_26849[(1)] = (2));


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
});})(c__26267__auto___26843,jobs,results,process,async))
;
return ((function (switch__26155__auto__,c__26267__auto___26843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0 = (function (){
var statearr_26743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__);

(statearr_26743[(1)] = (1));

return statearr_26743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1 = (function (state_26728){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_26728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e26744){if((e26744 instanceof Object)){
var ex__26159__auto__ = e26744;
var statearr_26745_26850 = state_26728;
(statearr_26745_26850[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26851 = state_26728;
state_26728 = G__26851;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = function(state_26728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1.call(this,state_26728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___26843,jobs,results,process,async))
})();
var state__26269__auto__ = (function (){var statearr_26746 = f__26268__auto__.call(null);
(statearr_26746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___26843);

return statearr_26746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___26843,jobs,results,process,async))
);


var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__,jobs,results,process,async){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__,jobs,results,process,async){
return (function (state_26784){
var state_val_26785 = (state_26784[(1)]);
if((state_val_26785 === (7))){
var inst_26780 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
var statearr_26786_26852 = state_26784__$1;
(statearr_26786_26852[(2)] = inst_26780);

(statearr_26786_26852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (20))){
var state_26784__$1 = state_26784;
var statearr_26787_26853 = state_26784__$1;
(statearr_26787_26853[(2)] = null);

(statearr_26787_26853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (1))){
var state_26784__$1 = state_26784;
var statearr_26788_26854 = state_26784__$1;
(statearr_26788_26854[(2)] = null);

(statearr_26788_26854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (4))){
var inst_26749 = (state_26784[(7)]);
var inst_26749__$1 = (state_26784[(2)]);
var inst_26750 = (inst_26749__$1 == null);
var state_26784__$1 = (function (){var statearr_26789 = state_26784;
(statearr_26789[(7)] = inst_26749__$1);

return statearr_26789;
})();
if(cljs.core.truth_(inst_26750)){
var statearr_26790_26855 = state_26784__$1;
(statearr_26790_26855[(1)] = (5));

} else {
var statearr_26791_26856 = state_26784__$1;
(statearr_26791_26856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (15))){
var inst_26762 = (state_26784[(8)]);
var state_26784__$1 = state_26784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26784__$1,(18),to,inst_26762);
} else {
if((state_val_26785 === (21))){
var inst_26775 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
var statearr_26792_26857 = state_26784__$1;
(statearr_26792_26857[(2)] = inst_26775);

(statearr_26792_26857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (13))){
var inst_26777 = (state_26784[(2)]);
var state_26784__$1 = (function (){var statearr_26793 = state_26784;
(statearr_26793[(9)] = inst_26777);

return statearr_26793;
})();
var statearr_26794_26858 = state_26784__$1;
(statearr_26794_26858[(2)] = null);

(statearr_26794_26858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (6))){
var inst_26749 = (state_26784[(7)]);
var state_26784__$1 = state_26784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26784__$1,(11),inst_26749);
} else {
if((state_val_26785 === (17))){
var inst_26770 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
if(cljs.core.truth_(inst_26770)){
var statearr_26795_26859 = state_26784__$1;
(statearr_26795_26859[(1)] = (19));

} else {
var statearr_26796_26860 = state_26784__$1;
(statearr_26796_26860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (3))){
var inst_26782 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26784__$1,inst_26782);
} else {
if((state_val_26785 === (12))){
var inst_26759 = (state_26784[(10)]);
var state_26784__$1 = state_26784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26784__$1,(14),inst_26759);
} else {
if((state_val_26785 === (2))){
var state_26784__$1 = state_26784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26784__$1,(4),results);
} else {
if((state_val_26785 === (19))){
var state_26784__$1 = state_26784;
var statearr_26797_26861 = state_26784__$1;
(statearr_26797_26861[(2)] = null);

(statearr_26797_26861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (11))){
var inst_26759 = (state_26784[(2)]);
var state_26784__$1 = (function (){var statearr_26798 = state_26784;
(statearr_26798[(10)] = inst_26759);

return statearr_26798;
})();
var statearr_26799_26862 = state_26784__$1;
(statearr_26799_26862[(2)] = null);

(statearr_26799_26862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (9))){
var state_26784__$1 = state_26784;
var statearr_26800_26863 = state_26784__$1;
(statearr_26800_26863[(2)] = null);

(statearr_26800_26863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (5))){
var state_26784__$1 = state_26784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26801_26864 = state_26784__$1;
(statearr_26801_26864[(1)] = (8));

} else {
var statearr_26802_26865 = state_26784__$1;
(statearr_26802_26865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (14))){
var inst_26762 = (state_26784[(8)]);
var inst_26764 = (state_26784[(11)]);
var inst_26762__$1 = (state_26784[(2)]);
var inst_26763 = (inst_26762__$1 == null);
var inst_26764__$1 = cljs.core.not.call(null,inst_26763);
var state_26784__$1 = (function (){var statearr_26803 = state_26784;
(statearr_26803[(8)] = inst_26762__$1);

(statearr_26803[(11)] = inst_26764__$1);

return statearr_26803;
})();
if(inst_26764__$1){
var statearr_26804_26866 = state_26784__$1;
(statearr_26804_26866[(1)] = (15));

} else {
var statearr_26805_26867 = state_26784__$1;
(statearr_26805_26867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (16))){
var inst_26764 = (state_26784[(11)]);
var state_26784__$1 = state_26784;
var statearr_26806_26868 = state_26784__$1;
(statearr_26806_26868[(2)] = inst_26764);

(statearr_26806_26868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (10))){
var inst_26756 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
var statearr_26807_26869 = state_26784__$1;
(statearr_26807_26869[(2)] = inst_26756);

(statearr_26807_26869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (18))){
var inst_26767 = (state_26784[(2)]);
var state_26784__$1 = state_26784;
var statearr_26808_26870 = state_26784__$1;
(statearr_26808_26870[(2)] = inst_26767);

(statearr_26808_26870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26785 === (8))){
var inst_26753 = cljs.core.async.close_BANG_.call(null,to);
var state_26784__$1 = state_26784;
var statearr_26809_26871 = state_26784__$1;
(statearr_26809_26871[(2)] = inst_26753);

(statearr_26809_26871[(1)] = (10));


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
}
}
}
}
});})(c__26267__auto__,jobs,results,process,async))
;
return ((function (switch__26155__auto__,c__26267__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0 = (function (){
var statearr_26813 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__);

(statearr_26813[(1)] = (1));

return statearr_26813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1 = (function (state_26784){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_26784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e26814){if((e26814 instanceof Object)){
var ex__26159__auto__ = e26814;
var statearr_26815_26872 = state_26784;
(statearr_26815_26872[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26873 = state_26784;
state_26784 = G__26873;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__ = function(state_26784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1.call(this,state_26784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__,jobs,results,process,async))
})();
var state__26269__auto__ = (function (){var statearr_26816 = f__26268__auto__.call(null);
(statearr_26816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_26816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__,jobs,results,process,async))
);

return c__26267__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26874 = [];
var len__19441__auto___26877 = arguments.length;
var i__19442__auto___26878 = (0);
while(true){
if((i__19442__auto___26878 < len__19441__auto___26877)){
args26874.push((arguments[i__19442__auto___26878]));

var G__26879 = (i__19442__auto___26878 + (1));
i__19442__auto___26878 = G__26879;
continue;
} else {
}
break;
}

var G__26876 = args26874.length;
switch (G__26876) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26874.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26881 = [];
var len__19441__auto___26884 = arguments.length;
var i__19442__auto___26885 = (0);
while(true){
if((i__19442__auto___26885 < len__19441__auto___26884)){
args26881.push((arguments[i__19442__auto___26885]));

var G__26886 = (i__19442__auto___26885 + (1));
i__19442__auto___26885 = G__26886;
continue;
} else {
}
break;
}

var G__26883 = args26881.length;
switch (G__26883) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26881.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26888 = [];
var len__19441__auto___26941 = arguments.length;
var i__19442__auto___26942 = (0);
while(true){
if((i__19442__auto___26942 < len__19441__auto___26941)){
args26888.push((arguments[i__19442__auto___26942]));

var G__26943 = (i__19442__auto___26942 + (1));
i__19442__auto___26942 = G__26943;
continue;
} else {
}
break;
}

var G__26890 = args26888.length;
switch (G__26890) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26888.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26267__auto___26945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___26945,tc,fc){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___26945,tc,fc){
return (function (state_26916){
var state_val_26917 = (state_26916[(1)]);
if((state_val_26917 === (7))){
var inst_26912 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
var statearr_26918_26946 = state_26916__$1;
(statearr_26918_26946[(2)] = inst_26912);

(statearr_26918_26946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (1))){
var state_26916__$1 = state_26916;
var statearr_26919_26947 = state_26916__$1;
(statearr_26919_26947[(2)] = null);

(statearr_26919_26947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (4))){
var inst_26893 = (state_26916[(7)]);
var inst_26893__$1 = (state_26916[(2)]);
var inst_26894 = (inst_26893__$1 == null);
var state_26916__$1 = (function (){var statearr_26920 = state_26916;
(statearr_26920[(7)] = inst_26893__$1);

return statearr_26920;
})();
if(cljs.core.truth_(inst_26894)){
var statearr_26921_26948 = state_26916__$1;
(statearr_26921_26948[(1)] = (5));

} else {
var statearr_26922_26949 = state_26916__$1;
(statearr_26922_26949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (13))){
var state_26916__$1 = state_26916;
var statearr_26923_26950 = state_26916__$1;
(statearr_26923_26950[(2)] = null);

(statearr_26923_26950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (6))){
var inst_26893 = (state_26916[(7)]);
var inst_26899 = p.call(null,inst_26893);
var state_26916__$1 = state_26916;
if(cljs.core.truth_(inst_26899)){
var statearr_26924_26951 = state_26916__$1;
(statearr_26924_26951[(1)] = (9));

} else {
var statearr_26925_26952 = state_26916__$1;
(statearr_26925_26952[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (3))){
var inst_26914 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26916__$1,inst_26914);
} else {
if((state_val_26917 === (12))){
var state_26916__$1 = state_26916;
var statearr_26926_26953 = state_26916__$1;
(statearr_26926_26953[(2)] = null);

(statearr_26926_26953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (2))){
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26916__$1,(4),ch);
} else {
if((state_val_26917 === (11))){
var inst_26893 = (state_26916[(7)]);
var inst_26903 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26916__$1,(8),inst_26903,inst_26893);
} else {
if((state_val_26917 === (9))){
var state_26916__$1 = state_26916;
var statearr_26927_26954 = state_26916__$1;
(statearr_26927_26954[(2)] = tc);

(statearr_26927_26954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (5))){
var inst_26896 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26897 = cljs.core.async.close_BANG_.call(null,fc);
var state_26916__$1 = (function (){var statearr_26928 = state_26916;
(statearr_26928[(8)] = inst_26896);

return statearr_26928;
})();
var statearr_26929_26955 = state_26916__$1;
(statearr_26929_26955[(2)] = inst_26897);

(statearr_26929_26955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (14))){
var inst_26910 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
var statearr_26930_26956 = state_26916__$1;
(statearr_26930_26956[(2)] = inst_26910);

(statearr_26930_26956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (10))){
var state_26916__$1 = state_26916;
var statearr_26931_26957 = state_26916__$1;
(statearr_26931_26957[(2)] = fc);

(statearr_26931_26957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (8))){
var inst_26905 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
if(cljs.core.truth_(inst_26905)){
var statearr_26932_26958 = state_26916__$1;
(statearr_26932_26958[(1)] = (12));

} else {
var statearr_26933_26959 = state_26916__$1;
(statearr_26933_26959[(1)] = (13));

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
});})(c__26267__auto___26945,tc,fc))
;
return ((function (switch__26155__auto__,c__26267__auto___26945,tc,fc){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_26937 = [null,null,null,null,null,null,null,null,null];
(statearr_26937[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_26937[(1)] = (1));

return statearr_26937;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_26916){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_26916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e26938){if((e26938 instanceof Object)){
var ex__26159__auto__ = e26938;
var statearr_26939_26960 = state_26916;
(statearr_26939_26960[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26961 = state_26916;
state_26916 = G__26961;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_26916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_26916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___26945,tc,fc))
})();
var state__26269__auto__ = (function (){var statearr_26940 = f__26268__auto__.call(null);
(statearr_26940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___26945);

return statearr_26940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___26945,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__){
return (function (state_27025){
var state_val_27026 = (state_27025[(1)]);
if((state_val_27026 === (7))){
var inst_27021 = (state_27025[(2)]);
var state_27025__$1 = state_27025;
var statearr_27027_27048 = state_27025__$1;
(statearr_27027_27048[(2)] = inst_27021);

(statearr_27027_27048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27026 === (1))){
var inst_27005 = init;
var state_27025__$1 = (function (){var statearr_27028 = state_27025;
(statearr_27028[(7)] = inst_27005);

return statearr_27028;
})();
var statearr_27029_27049 = state_27025__$1;
(statearr_27029_27049[(2)] = null);

(statearr_27029_27049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27026 === (4))){
var inst_27008 = (state_27025[(8)]);
var inst_27008__$1 = (state_27025[(2)]);
var inst_27009 = (inst_27008__$1 == null);
var state_27025__$1 = (function (){var statearr_27030 = state_27025;
(statearr_27030[(8)] = inst_27008__$1);

return statearr_27030;
})();
if(cljs.core.truth_(inst_27009)){
var statearr_27031_27050 = state_27025__$1;
(statearr_27031_27050[(1)] = (5));

} else {
var statearr_27032_27051 = state_27025__$1;
(statearr_27032_27051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27026 === (6))){
var inst_27012 = (state_27025[(9)]);
var inst_27005 = (state_27025[(7)]);
var inst_27008 = (state_27025[(8)]);
var inst_27012__$1 = f.call(null,inst_27005,inst_27008);
var inst_27013 = cljs.core.reduced_QMARK_.call(null,inst_27012__$1);
var state_27025__$1 = (function (){var statearr_27033 = state_27025;
(statearr_27033[(9)] = inst_27012__$1);

return statearr_27033;
})();
if(inst_27013){
var statearr_27034_27052 = state_27025__$1;
(statearr_27034_27052[(1)] = (8));

} else {
var statearr_27035_27053 = state_27025__$1;
(statearr_27035_27053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27026 === (3))){
var inst_27023 = (state_27025[(2)]);
var state_27025__$1 = state_27025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27025__$1,inst_27023);
} else {
if((state_val_27026 === (2))){
var state_27025__$1 = state_27025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27025__$1,(4),ch);
} else {
if((state_val_27026 === (9))){
var inst_27012 = (state_27025[(9)]);
var inst_27005 = inst_27012;
var state_27025__$1 = (function (){var statearr_27036 = state_27025;
(statearr_27036[(7)] = inst_27005);

return statearr_27036;
})();
var statearr_27037_27054 = state_27025__$1;
(statearr_27037_27054[(2)] = null);

(statearr_27037_27054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27026 === (5))){
var inst_27005 = (state_27025[(7)]);
var state_27025__$1 = state_27025;
var statearr_27038_27055 = state_27025__$1;
(statearr_27038_27055[(2)] = inst_27005);

(statearr_27038_27055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27026 === (10))){
var inst_27019 = (state_27025[(2)]);
var state_27025__$1 = state_27025;
var statearr_27039_27056 = state_27025__$1;
(statearr_27039_27056[(2)] = inst_27019);

(statearr_27039_27056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27026 === (8))){
var inst_27012 = (state_27025[(9)]);
var inst_27015 = cljs.core.deref.call(null,inst_27012);
var state_27025__$1 = state_27025;
var statearr_27040_27057 = state_27025__$1;
(statearr_27040_27057[(2)] = inst_27015);

(statearr_27040_27057[(1)] = (10));


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
});})(c__26267__auto__))
;
return ((function (switch__26155__auto__,c__26267__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26156__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26156__auto____0 = (function (){
var statearr_27044 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27044[(0)] = cljs$core$async$reduce_$_state_machine__26156__auto__);

(statearr_27044[(1)] = (1));

return statearr_27044;
});
var cljs$core$async$reduce_$_state_machine__26156__auto____1 = (function (state_27025){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_27025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e27045){if((e27045 instanceof Object)){
var ex__26159__auto__ = e27045;
var statearr_27046_27058 = state_27025;
(statearr_27046_27058[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27059 = state_27025;
state_27025 = G__27059;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26156__auto__ = function(state_27025){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26156__auto____1.call(this,state_27025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26156__auto____0;
cljs$core$async$reduce_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26156__auto____1;
return cljs$core$async$reduce_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__))
})();
var state__26269__auto__ = (function (){var statearr_27047 = f__26268__auto__.call(null);
(statearr_27047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_27047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__))
);

return c__26267__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27060 = [];
var len__19441__auto___27112 = arguments.length;
var i__19442__auto___27113 = (0);
while(true){
if((i__19442__auto___27113 < len__19441__auto___27112)){
args27060.push((arguments[i__19442__auto___27113]));

var G__27114 = (i__19442__auto___27113 + (1));
i__19442__auto___27113 = G__27114;
continue;
} else {
}
break;
}

var G__27062 = args27060.length;
switch (G__27062) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27060.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__){
return (function (state_27087){
var state_val_27088 = (state_27087[(1)]);
if((state_val_27088 === (7))){
var inst_27069 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27089_27116 = state_27087__$1;
(statearr_27089_27116[(2)] = inst_27069);

(statearr_27089_27116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (1))){
var inst_27063 = cljs.core.seq.call(null,coll);
var inst_27064 = inst_27063;
var state_27087__$1 = (function (){var statearr_27090 = state_27087;
(statearr_27090[(7)] = inst_27064);

return statearr_27090;
})();
var statearr_27091_27117 = state_27087__$1;
(statearr_27091_27117[(2)] = null);

(statearr_27091_27117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (4))){
var inst_27064 = (state_27087[(7)]);
var inst_27067 = cljs.core.first.call(null,inst_27064);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27087__$1,(7),ch,inst_27067);
} else {
if((state_val_27088 === (13))){
var inst_27081 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27092_27118 = state_27087__$1;
(statearr_27092_27118[(2)] = inst_27081);

(statearr_27092_27118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (6))){
var inst_27072 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
if(cljs.core.truth_(inst_27072)){
var statearr_27093_27119 = state_27087__$1;
(statearr_27093_27119[(1)] = (8));

} else {
var statearr_27094_27120 = state_27087__$1;
(statearr_27094_27120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (3))){
var inst_27085 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27087__$1,inst_27085);
} else {
if((state_val_27088 === (12))){
var state_27087__$1 = state_27087;
var statearr_27095_27121 = state_27087__$1;
(statearr_27095_27121[(2)] = null);

(statearr_27095_27121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (2))){
var inst_27064 = (state_27087[(7)]);
var state_27087__$1 = state_27087;
if(cljs.core.truth_(inst_27064)){
var statearr_27096_27122 = state_27087__$1;
(statearr_27096_27122[(1)] = (4));

} else {
var statearr_27097_27123 = state_27087__$1;
(statearr_27097_27123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (11))){
var inst_27078 = cljs.core.async.close_BANG_.call(null,ch);
var state_27087__$1 = state_27087;
var statearr_27098_27124 = state_27087__$1;
(statearr_27098_27124[(2)] = inst_27078);

(statearr_27098_27124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (9))){
var state_27087__$1 = state_27087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27099_27125 = state_27087__$1;
(statearr_27099_27125[(1)] = (11));

} else {
var statearr_27100_27126 = state_27087__$1;
(statearr_27100_27126[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (5))){
var inst_27064 = (state_27087[(7)]);
var state_27087__$1 = state_27087;
var statearr_27101_27127 = state_27087__$1;
(statearr_27101_27127[(2)] = inst_27064);

(statearr_27101_27127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (10))){
var inst_27083 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27102_27128 = state_27087__$1;
(statearr_27102_27128[(2)] = inst_27083);

(statearr_27102_27128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (8))){
var inst_27064 = (state_27087[(7)]);
var inst_27074 = cljs.core.next.call(null,inst_27064);
var inst_27064__$1 = inst_27074;
var state_27087__$1 = (function (){var statearr_27103 = state_27087;
(statearr_27103[(7)] = inst_27064__$1);

return statearr_27103;
})();
var statearr_27104_27129 = state_27087__$1;
(statearr_27104_27129[(2)] = null);

(statearr_27104_27129[(1)] = (2));


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
});})(c__26267__auto__))
;
return ((function (switch__26155__auto__,c__26267__auto__){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_27108 = [null,null,null,null,null,null,null,null];
(statearr_27108[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_27108[(1)] = (1));

return statearr_27108;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_27087){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_27087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e27109){if((e27109 instanceof Object)){
var ex__26159__auto__ = e27109;
var statearr_27110_27130 = state_27087;
(statearr_27110_27130[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27131 = state_27087;
state_27087 = G__27131;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_27087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_27087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__))
})();
var state__26269__auto__ = (function (){var statearr_27111 = f__26268__auto__.call(null);
(statearr_27111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_27111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__))
);

return c__26267__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19038__auto__ = (((_ == null))?null:_);
var m__19039__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,_);
} else {
var m__19039__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19038__auto__ = (((m == null))?null:m);
var m__19039__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19039__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19038__auto__ = (((m == null))?null:m);
var m__19039__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,m,ch);
} else {
var m__19039__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19038__auto__ = (((m == null))?null:m);
var m__19039__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,m);
} else {
var m__19039__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27353 = (function (mult,ch,cs,meta27354){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27354 = meta27354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27355,meta27354__$1){
var self__ = this;
var _27355__$1 = this;
return (new cljs.core.async.t_cljs$core$async27353(self__.mult,self__.ch,self__.cs,meta27354__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27355){
var self__ = this;
var _27355__$1 = this;
return self__.meta27354;
});})(cs))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27353.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27354","meta27354",819625597,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27353";

cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async27353");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27353 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27353(mult__$1,ch__$1,cs__$1,meta27354){
return (new cljs.core.async.t_cljs$core$async27353(mult__$1,ch__$1,cs__$1,meta27354));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27353(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26267__auto___27574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___27574,cs,m,dchan,dctr,done){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___27574,cs,m,dchan,dctr,done){
return (function (state_27486){
var state_val_27487 = (state_27486[(1)]);
if((state_val_27487 === (7))){
var inst_27482 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27488_27575 = state_27486__$1;
(statearr_27488_27575[(2)] = inst_27482);

(statearr_27488_27575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (20))){
var inst_27387 = (state_27486[(7)]);
var inst_27397 = cljs.core.first.call(null,inst_27387);
var inst_27398 = cljs.core.nth.call(null,inst_27397,(0),null);
var inst_27399 = cljs.core.nth.call(null,inst_27397,(1),null);
var state_27486__$1 = (function (){var statearr_27489 = state_27486;
(statearr_27489[(8)] = inst_27398);

return statearr_27489;
})();
if(cljs.core.truth_(inst_27399)){
var statearr_27490_27576 = state_27486__$1;
(statearr_27490_27576[(1)] = (22));

} else {
var statearr_27491_27577 = state_27486__$1;
(statearr_27491_27577[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (27))){
var inst_27427 = (state_27486[(9)]);
var inst_27358 = (state_27486[(10)]);
var inst_27434 = (state_27486[(11)]);
var inst_27429 = (state_27486[(12)]);
var inst_27434__$1 = cljs.core._nth.call(null,inst_27427,inst_27429);
var inst_27435 = cljs.core.async.put_BANG_.call(null,inst_27434__$1,inst_27358,done);
var state_27486__$1 = (function (){var statearr_27492 = state_27486;
(statearr_27492[(11)] = inst_27434__$1);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27435)){
var statearr_27493_27578 = state_27486__$1;
(statearr_27493_27578[(1)] = (30));

} else {
var statearr_27494_27579 = state_27486__$1;
(statearr_27494_27579[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (1))){
var state_27486__$1 = state_27486;
var statearr_27495_27580 = state_27486__$1;
(statearr_27495_27580[(2)] = null);

(statearr_27495_27580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (24))){
var inst_27387 = (state_27486[(7)]);
var inst_27404 = (state_27486[(2)]);
var inst_27405 = cljs.core.next.call(null,inst_27387);
var inst_27367 = inst_27405;
var inst_27368 = null;
var inst_27369 = (0);
var inst_27370 = (0);
var state_27486__$1 = (function (){var statearr_27496 = state_27486;
(statearr_27496[(13)] = inst_27367);

(statearr_27496[(14)] = inst_27404);

(statearr_27496[(15)] = inst_27368);

(statearr_27496[(16)] = inst_27370);

(statearr_27496[(17)] = inst_27369);

return statearr_27496;
})();
var statearr_27497_27581 = state_27486__$1;
(statearr_27497_27581[(2)] = null);

(statearr_27497_27581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (39))){
var state_27486__$1 = state_27486;
var statearr_27501_27582 = state_27486__$1;
(statearr_27501_27582[(2)] = null);

(statearr_27501_27582[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (4))){
var inst_27358 = (state_27486[(10)]);
var inst_27358__$1 = (state_27486[(2)]);
var inst_27359 = (inst_27358__$1 == null);
var state_27486__$1 = (function (){var statearr_27502 = state_27486;
(statearr_27502[(10)] = inst_27358__$1);

return statearr_27502;
})();
if(cljs.core.truth_(inst_27359)){
var statearr_27503_27583 = state_27486__$1;
(statearr_27503_27583[(1)] = (5));

} else {
var statearr_27504_27584 = state_27486__$1;
(statearr_27504_27584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (15))){
var inst_27367 = (state_27486[(13)]);
var inst_27368 = (state_27486[(15)]);
var inst_27370 = (state_27486[(16)]);
var inst_27369 = (state_27486[(17)]);
var inst_27383 = (state_27486[(2)]);
var inst_27384 = (inst_27370 + (1));
var tmp27498 = inst_27367;
var tmp27499 = inst_27368;
var tmp27500 = inst_27369;
var inst_27367__$1 = tmp27498;
var inst_27368__$1 = tmp27499;
var inst_27369__$1 = tmp27500;
var inst_27370__$1 = inst_27384;
var state_27486__$1 = (function (){var statearr_27505 = state_27486;
(statearr_27505[(18)] = inst_27383);

(statearr_27505[(13)] = inst_27367__$1);

(statearr_27505[(15)] = inst_27368__$1);

(statearr_27505[(16)] = inst_27370__$1);

(statearr_27505[(17)] = inst_27369__$1);

return statearr_27505;
})();
var statearr_27506_27585 = state_27486__$1;
(statearr_27506_27585[(2)] = null);

(statearr_27506_27585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (21))){
var inst_27408 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27510_27586 = state_27486__$1;
(statearr_27510_27586[(2)] = inst_27408);

(statearr_27510_27586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (31))){
var inst_27434 = (state_27486[(11)]);
var inst_27438 = done.call(null,null);
var inst_27439 = cljs.core.async.untap_STAR_.call(null,m,inst_27434);
var state_27486__$1 = (function (){var statearr_27511 = state_27486;
(statearr_27511[(19)] = inst_27438);

return statearr_27511;
})();
var statearr_27512_27587 = state_27486__$1;
(statearr_27512_27587[(2)] = inst_27439);

(statearr_27512_27587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (32))){
var inst_27428 = (state_27486[(20)]);
var inst_27427 = (state_27486[(9)]);
var inst_27426 = (state_27486[(21)]);
var inst_27429 = (state_27486[(12)]);
var inst_27441 = (state_27486[(2)]);
var inst_27442 = (inst_27429 + (1));
var tmp27507 = inst_27428;
var tmp27508 = inst_27427;
var tmp27509 = inst_27426;
var inst_27426__$1 = tmp27509;
var inst_27427__$1 = tmp27508;
var inst_27428__$1 = tmp27507;
var inst_27429__$1 = inst_27442;
var state_27486__$1 = (function (){var statearr_27513 = state_27486;
(statearr_27513[(20)] = inst_27428__$1);

(statearr_27513[(9)] = inst_27427__$1);

(statearr_27513[(21)] = inst_27426__$1);

(statearr_27513[(12)] = inst_27429__$1);

(statearr_27513[(22)] = inst_27441);

return statearr_27513;
})();
var statearr_27514_27588 = state_27486__$1;
(statearr_27514_27588[(2)] = null);

(statearr_27514_27588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (40))){
var inst_27454 = (state_27486[(23)]);
var inst_27458 = done.call(null,null);
var inst_27459 = cljs.core.async.untap_STAR_.call(null,m,inst_27454);
var state_27486__$1 = (function (){var statearr_27515 = state_27486;
(statearr_27515[(24)] = inst_27458);

return statearr_27515;
})();
var statearr_27516_27589 = state_27486__$1;
(statearr_27516_27589[(2)] = inst_27459);

(statearr_27516_27589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (33))){
var inst_27445 = (state_27486[(25)]);
var inst_27447 = cljs.core.chunked_seq_QMARK_.call(null,inst_27445);
var state_27486__$1 = state_27486;
if(inst_27447){
var statearr_27517_27590 = state_27486__$1;
(statearr_27517_27590[(1)] = (36));

} else {
var statearr_27518_27591 = state_27486__$1;
(statearr_27518_27591[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (13))){
var inst_27377 = (state_27486[(26)]);
var inst_27380 = cljs.core.async.close_BANG_.call(null,inst_27377);
var state_27486__$1 = state_27486;
var statearr_27519_27592 = state_27486__$1;
(statearr_27519_27592[(2)] = inst_27380);

(statearr_27519_27592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (22))){
var inst_27398 = (state_27486[(8)]);
var inst_27401 = cljs.core.async.close_BANG_.call(null,inst_27398);
var state_27486__$1 = state_27486;
var statearr_27520_27593 = state_27486__$1;
(statearr_27520_27593[(2)] = inst_27401);

(statearr_27520_27593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (36))){
var inst_27445 = (state_27486[(25)]);
var inst_27449 = cljs.core.chunk_first.call(null,inst_27445);
var inst_27450 = cljs.core.chunk_rest.call(null,inst_27445);
var inst_27451 = cljs.core.count.call(null,inst_27449);
var inst_27426 = inst_27450;
var inst_27427 = inst_27449;
var inst_27428 = inst_27451;
var inst_27429 = (0);
var state_27486__$1 = (function (){var statearr_27521 = state_27486;
(statearr_27521[(20)] = inst_27428);

(statearr_27521[(9)] = inst_27427);

(statearr_27521[(21)] = inst_27426);

(statearr_27521[(12)] = inst_27429);

return statearr_27521;
})();
var statearr_27522_27594 = state_27486__$1;
(statearr_27522_27594[(2)] = null);

(statearr_27522_27594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (41))){
var inst_27445 = (state_27486[(25)]);
var inst_27461 = (state_27486[(2)]);
var inst_27462 = cljs.core.next.call(null,inst_27445);
var inst_27426 = inst_27462;
var inst_27427 = null;
var inst_27428 = (0);
var inst_27429 = (0);
var state_27486__$1 = (function (){var statearr_27523 = state_27486;
(statearr_27523[(20)] = inst_27428);

(statearr_27523[(9)] = inst_27427);

(statearr_27523[(21)] = inst_27426);

(statearr_27523[(12)] = inst_27429);

(statearr_27523[(27)] = inst_27461);

return statearr_27523;
})();
var statearr_27524_27595 = state_27486__$1;
(statearr_27524_27595[(2)] = null);

(statearr_27524_27595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (43))){
var state_27486__$1 = state_27486;
var statearr_27525_27596 = state_27486__$1;
(statearr_27525_27596[(2)] = null);

(statearr_27525_27596[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (29))){
var inst_27470 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27526_27597 = state_27486__$1;
(statearr_27526_27597[(2)] = inst_27470);

(statearr_27526_27597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (44))){
var inst_27479 = (state_27486[(2)]);
var state_27486__$1 = (function (){var statearr_27527 = state_27486;
(statearr_27527[(28)] = inst_27479);

return statearr_27527;
})();
var statearr_27528_27598 = state_27486__$1;
(statearr_27528_27598[(2)] = null);

(statearr_27528_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (6))){
var inst_27418 = (state_27486[(29)]);
var inst_27417 = cljs.core.deref.call(null,cs);
var inst_27418__$1 = cljs.core.keys.call(null,inst_27417);
var inst_27419 = cljs.core.count.call(null,inst_27418__$1);
var inst_27420 = cljs.core.reset_BANG_.call(null,dctr,inst_27419);
var inst_27425 = cljs.core.seq.call(null,inst_27418__$1);
var inst_27426 = inst_27425;
var inst_27427 = null;
var inst_27428 = (0);
var inst_27429 = (0);
var state_27486__$1 = (function (){var statearr_27529 = state_27486;
(statearr_27529[(20)] = inst_27428);

(statearr_27529[(9)] = inst_27427);

(statearr_27529[(30)] = inst_27420);

(statearr_27529[(21)] = inst_27426);

(statearr_27529[(29)] = inst_27418__$1);

(statearr_27529[(12)] = inst_27429);

return statearr_27529;
})();
var statearr_27530_27599 = state_27486__$1;
(statearr_27530_27599[(2)] = null);

(statearr_27530_27599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (28))){
var inst_27426 = (state_27486[(21)]);
var inst_27445 = (state_27486[(25)]);
var inst_27445__$1 = cljs.core.seq.call(null,inst_27426);
var state_27486__$1 = (function (){var statearr_27531 = state_27486;
(statearr_27531[(25)] = inst_27445__$1);

return statearr_27531;
})();
if(inst_27445__$1){
var statearr_27532_27600 = state_27486__$1;
(statearr_27532_27600[(1)] = (33));

} else {
var statearr_27533_27601 = state_27486__$1;
(statearr_27533_27601[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (25))){
var inst_27428 = (state_27486[(20)]);
var inst_27429 = (state_27486[(12)]);
var inst_27431 = (inst_27429 < inst_27428);
var inst_27432 = inst_27431;
var state_27486__$1 = state_27486;
if(cljs.core.truth_(inst_27432)){
var statearr_27534_27602 = state_27486__$1;
(statearr_27534_27602[(1)] = (27));

} else {
var statearr_27535_27603 = state_27486__$1;
(statearr_27535_27603[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (34))){
var state_27486__$1 = state_27486;
var statearr_27536_27604 = state_27486__$1;
(statearr_27536_27604[(2)] = null);

(statearr_27536_27604[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (17))){
var state_27486__$1 = state_27486;
var statearr_27537_27605 = state_27486__$1;
(statearr_27537_27605[(2)] = null);

(statearr_27537_27605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (3))){
var inst_27484 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27486__$1,inst_27484);
} else {
if((state_val_27487 === (12))){
var inst_27413 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27538_27606 = state_27486__$1;
(statearr_27538_27606[(2)] = inst_27413);

(statearr_27538_27606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (2))){
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27486__$1,(4),ch);
} else {
if((state_val_27487 === (23))){
var state_27486__$1 = state_27486;
var statearr_27539_27607 = state_27486__$1;
(statearr_27539_27607[(2)] = null);

(statearr_27539_27607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (35))){
var inst_27468 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27540_27608 = state_27486__$1;
(statearr_27540_27608[(2)] = inst_27468);

(statearr_27540_27608[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (19))){
var inst_27387 = (state_27486[(7)]);
var inst_27391 = cljs.core.chunk_first.call(null,inst_27387);
var inst_27392 = cljs.core.chunk_rest.call(null,inst_27387);
var inst_27393 = cljs.core.count.call(null,inst_27391);
var inst_27367 = inst_27392;
var inst_27368 = inst_27391;
var inst_27369 = inst_27393;
var inst_27370 = (0);
var state_27486__$1 = (function (){var statearr_27541 = state_27486;
(statearr_27541[(13)] = inst_27367);

(statearr_27541[(15)] = inst_27368);

(statearr_27541[(16)] = inst_27370);

(statearr_27541[(17)] = inst_27369);

return statearr_27541;
})();
var statearr_27542_27609 = state_27486__$1;
(statearr_27542_27609[(2)] = null);

(statearr_27542_27609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (11))){
var inst_27367 = (state_27486[(13)]);
var inst_27387 = (state_27486[(7)]);
var inst_27387__$1 = cljs.core.seq.call(null,inst_27367);
var state_27486__$1 = (function (){var statearr_27543 = state_27486;
(statearr_27543[(7)] = inst_27387__$1);

return statearr_27543;
})();
if(inst_27387__$1){
var statearr_27544_27610 = state_27486__$1;
(statearr_27544_27610[(1)] = (16));

} else {
var statearr_27545_27611 = state_27486__$1;
(statearr_27545_27611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (9))){
var inst_27415 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27546_27612 = state_27486__$1;
(statearr_27546_27612[(2)] = inst_27415);

(statearr_27546_27612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (5))){
var inst_27365 = cljs.core.deref.call(null,cs);
var inst_27366 = cljs.core.seq.call(null,inst_27365);
var inst_27367 = inst_27366;
var inst_27368 = null;
var inst_27369 = (0);
var inst_27370 = (0);
var state_27486__$1 = (function (){var statearr_27547 = state_27486;
(statearr_27547[(13)] = inst_27367);

(statearr_27547[(15)] = inst_27368);

(statearr_27547[(16)] = inst_27370);

(statearr_27547[(17)] = inst_27369);

return statearr_27547;
})();
var statearr_27548_27613 = state_27486__$1;
(statearr_27548_27613[(2)] = null);

(statearr_27548_27613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (14))){
var state_27486__$1 = state_27486;
var statearr_27549_27614 = state_27486__$1;
(statearr_27549_27614[(2)] = null);

(statearr_27549_27614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (45))){
var inst_27476 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27550_27615 = state_27486__$1;
(statearr_27550_27615[(2)] = inst_27476);

(statearr_27550_27615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (26))){
var inst_27418 = (state_27486[(29)]);
var inst_27472 = (state_27486[(2)]);
var inst_27473 = cljs.core.seq.call(null,inst_27418);
var state_27486__$1 = (function (){var statearr_27551 = state_27486;
(statearr_27551[(31)] = inst_27472);

return statearr_27551;
})();
if(inst_27473){
var statearr_27552_27616 = state_27486__$1;
(statearr_27552_27616[(1)] = (42));

} else {
var statearr_27553_27617 = state_27486__$1;
(statearr_27553_27617[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (16))){
var inst_27387 = (state_27486[(7)]);
var inst_27389 = cljs.core.chunked_seq_QMARK_.call(null,inst_27387);
var state_27486__$1 = state_27486;
if(inst_27389){
var statearr_27554_27618 = state_27486__$1;
(statearr_27554_27618[(1)] = (19));

} else {
var statearr_27555_27619 = state_27486__$1;
(statearr_27555_27619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (38))){
var inst_27465 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27556_27620 = state_27486__$1;
(statearr_27556_27620[(2)] = inst_27465);

(statearr_27556_27620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (30))){
var state_27486__$1 = state_27486;
var statearr_27557_27621 = state_27486__$1;
(statearr_27557_27621[(2)] = null);

(statearr_27557_27621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (10))){
var inst_27368 = (state_27486[(15)]);
var inst_27370 = (state_27486[(16)]);
var inst_27376 = cljs.core._nth.call(null,inst_27368,inst_27370);
var inst_27377 = cljs.core.nth.call(null,inst_27376,(0),null);
var inst_27378 = cljs.core.nth.call(null,inst_27376,(1),null);
var state_27486__$1 = (function (){var statearr_27558 = state_27486;
(statearr_27558[(26)] = inst_27377);

return statearr_27558;
})();
if(cljs.core.truth_(inst_27378)){
var statearr_27559_27622 = state_27486__$1;
(statearr_27559_27622[(1)] = (13));

} else {
var statearr_27560_27623 = state_27486__$1;
(statearr_27560_27623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (18))){
var inst_27411 = (state_27486[(2)]);
var state_27486__$1 = state_27486;
var statearr_27561_27624 = state_27486__$1;
(statearr_27561_27624[(2)] = inst_27411);

(statearr_27561_27624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (42))){
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27486__$1,(45),dchan);
} else {
if((state_val_27487 === (37))){
var inst_27358 = (state_27486[(10)]);
var inst_27445 = (state_27486[(25)]);
var inst_27454 = (state_27486[(23)]);
var inst_27454__$1 = cljs.core.first.call(null,inst_27445);
var inst_27455 = cljs.core.async.put_BANG_.call(null,inst_27454__$1,inst_27358,done);
var state_27486__$1 = (function (){var statearr_27562 = state_27486;
(statearr_27562[(23)] = inst_27454__$1);

return statearr_27562;
})();
if(cljs.core.truth_(inst_27455)){
var statearr_27563_27625 = state_27486__$1;
(statearr_27563_27625[(1)] = (39));

} else {
var statearr_27564_27626 = state_27486__$1;
(statearr_27564_27626[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27487 === (8))){
var inst_27370 = (state_27486[(16)]);
var inst_27369 = (state_27486[(17)]);
var inst_27372 = (inst_27370 < inst_27369);
var inst_27373 = inst_27372;
var state_27486__$1 = state_27486;
if(cljs.core.truth_(inst_27373)){
var statearr_27565_27627 = state_27486__$1;
(statearr_27565_27627[(1)] = (10));

} else {
var statearr_27566_27628 = state_27486__$1;
(statearr_27566_27628[(1)] = (11));

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
});})(c__26267__auto___27574,cs,m,dchan,dctr,done))
;
return ((function (switch__26155__auto__,c__26267__auto___27574,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26156__auto__ = null;
var cljs$core$async$mult_$_state_machine__26156__auto____0 = (function (){
var statearr_27570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27570[(0)] = cljs$core$async$mult_$_state_machine__26156__auto__);

(statearr_27570[(1)] = (1));

return statearr_27570;
});
var cljs$core$async$mult_$_state_machine__26156__auto____1 = (function (state_27486){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_27486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e27571){if((e27571 instanceof Object)){
var ex__26159__auto__ = e27571;
var statearr_27572_27629 = state_27486;
(statearr_27572_27629[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27630 = state_27486;
state_27486 = G__27630;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26156__auto__ = function(state_27486){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26156__auto____1.call(this,state_27486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26156__auto____0;
cljs$core$async$mult_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26156__auto____1;
return cljs$core$async$mult_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___27574,cs,m,dchan,dctr,done))
})();
var state__26269__auto__ = (function (){var statearr_27573 = f__26268__auto__.call(null);
(statearr_27573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___27574);

return statearr_27573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___27574,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27631 = [];
var len__19441__auto___27634 = arguments.length;
var i__19442__auto___27635 = (0);
while(true){
if((i__19442__auto___27635 < len__19441__auto___27634)){
args27631.push((arguments[i__19442__auto___27635]));

var G__27636 = (i__19442__auto___27635 + (1));
i__19442__auto___27635 = G__27636;
continue;
} else {
}
break;
}

var G__27633 = args27631.length;
switch (G__27633) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27631.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19038__auto__ = (((m == null))?null:m);
var m__19039__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,m,ch);
} else {
var m__19039__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19038__auto__ = (((m == null))?null:m);
var m__19039__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,m,ch);
} else {
var m__19039__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19038__auto__ = (((m == null))?null:m);
var m__19039__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,m);
} else {
var m__19039__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19038__auto__ = (((m == null))?null:m);
var m__19039__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,m,state_map);
} else {
var m__19039__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19038__auto__ = (((m == null))?null:m);
var m__19039__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,m,mode);
} else {
var m__19039__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19448__auto__ = [];
var len__19441__auto___27648 = arguments.length;
var i__19442__auto___27649 = (0);
while(true){
if((i__19442__auto___27649 < len__19441__auto___27648)){
args__19448__auto__.push((arguments[i__19442__auto___27649]));

var G__27650 = (i__19442__auto___27649 + (1));
i__19442__auto___27649 = G__27650;
continue;
} else {
}
break;
}

var argseq__19449__auto__ = ((((3) < args__19448__auto__.length))?(new cljs.core.IndexedSeq(args__19448__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19449__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27642){
var map__27643 = p__27642;
var map__27643__$1 = ((((!((map__27643 == null)))?((((map__27643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27643):map__27643);
var opts = map__27643__$1;
var statearr_27645_27651 = state;
(statearr_27645_27651[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27643,map__27643__$1,opts){
return (function (val){
var statearr_27646_27652 = state;
(statearr_27646_27652[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27643,map__27643__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27647_27653 = state;
(statearr_27647_27653[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27638){
var G__27639 = cljs.core.first.call(null,seq27638);
var seq27638__$1 = cljs.core.next.call(null,seq27638);
var G__27640 = cljs.core.first.call(null,seq27638__$1);
var seq27638__$2 = cljs.core.next.call(null,seq27638__$1);
var G__27641 = cljs.core.first.call(null,seq27638__$2);
var seq27638__$3 = cljs.core.next.call(null,seq27638__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27639,G__27640,G__27641,seq27638__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27817 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27818){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27818 = meta27818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27819,meta27818__$1){
var self__ = this;
var _27819__$1 = this;
return (new cljs.core.async.t_cljs$core$async27817(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27818__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27819){
var self__ = this;
var _27819__$1 = this;
return self__.meta27818;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27818","meta27818",597990703,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27817";

cljs.core.async.t_cljs$core$async27817.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async27817");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27817 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27817(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27818){
return (new cljs.core.async.t_cljs$core$async27817(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27818));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27817(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26267__auto___27980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___27980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___27980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27917){
var state_val_27918 = (state_27917[(1)]);
if((state_val_27918 === (7))){
var inst_27835 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27919_27981 = state_27917__$1;
(statearr_27919_27981[(2)] = inst_27835);

(statearr_27919_27981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (20))){
var inst_27847 = (state_27917[(7)]);
var state_27917__$1 = state_27917;
var statearr_27920_27982 = state_27917__$1;
(statearr_27920_27982[(2)] = inst_27847);

(statearr_27920_27982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (27))){
var state_27917__$1 = state_27917;
var statearr_27921_27983 = state_27917__$1;
(statearr_27921_27983[(2)] = null);

(statearr_27921_27983[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (1))){
var inst_27823 = (state_27917[(8)]);
var inst_27823__$1 = calc_state.call(null);
var inst_27825 = (inst_27823__$1 == null);
var inst_27826 = cljs.core.not.call(null,inst_27825);
var state_27917__$1 = (function (){var statearr_27922 = state_27917;
(statearr_27922[(8)] = inst_27823__$1);

return statearr_27922;
})();
if(inst_27826){
var statearr_27923_27984 = state_27917__$1;
(statearr_27923_27984[(1)] = (2));

} else {
var statearr_27924_27985 = state_27917__$1;
(statearr_27924_27985[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (24))){
var inst_27870 = (state_27917[(9)]);
var inst_27877 = (state_27917[(10)]);
var inst_27891 = (state_27917[(11)]);
var inst_27891__$1 = inst_27870.call(null,inst_27877);
var state_27917__$1 = (function (){var statearr_27925 = state_27917;
(statearr_27925[(11)] = inst_27891__$1);

return statearr_27925;
})();
if(cljs.core.truth_(inst_27891__$1)){
var statearr_27926_27986 = state_27917__$1;
(statearr_27926_27986[(1)] = (29));

} else {
var statearr_27927_27987 = state_27917__$1;
(statearr_27927_27987[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (4))){
var inst_27838 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27838)){
var statearr_27928_27988 = state_27917__$1;
(statearr_27928_27988[(1)] = (8));

} else {
var statearr_27929_27989 = state_27917__$1;
(statearr_27929_27989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (15))){
var inst_27864 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27864)){
var statearr_27930_27990 = state_27917__$1;
(statearr_27930_27990[(1)] = (19));

} else {
var statearr_27931_27991 = state_27917__$1;
(statearr_27931_27991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (21))){
var inst_27869 = (state_27917[(12)]);
var inst_27869__$1 = (state_27917[(2)]);
var inst_27870 = cljs.core.get.call(null,inst_27869__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27871 = cljs.core.get.call(null,inst_27869__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27872 = cljs.core.get.call(null,inst_27869__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27917__$1 = (function (){var statearr_27932 = state_27917;
(statearr_27932[(12)] = inst_27869__$1);

(statearr_27932[(9)] = inst_27870);

(statearr_27932[(13)] = inst_27871);

return statearr_27932;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27917__$1,(22),inst_27872);
} else {
if((state_val_27918 === (31))){
var inst_27899 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27899)){
var statearr_27933_27992 = state_27917__$1;
(statearr_27933_27992[(1)] = (32));

} else {
var statearr_27934_27993 = state_27917__$1;
(statearr_27934_27993[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (32))){
var inst_27876 = (state_27917[(14)]);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27917__$1,(35),out,inst_27876);
} else {
if((state_val_27918 === (33))){
var inst_27869 = (state_27917[(12)]);
var inst_27847 = inst_27869;
var state_27917__$1 = (function (){var statearr_27935 = state_27917;
(statearr_27935[(7)] = inst_27847);

return statearr_27935;
})();
var statearr_27936_27994 = state_27917__$1;
(statearr_27936_27994[(2)] = null);

(statearr_27936_27994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (13))){
var inst_27847 = (state_27917[(7)]);
var inst_27854 = inst_27847.cljs$lang$protocol_mask$partition0$;
var inst_27855 = (inst_27854 & (64));
var inst_27856 = inst_27847.cljs$core$ISeq$;
var inst_27857 = (inst_27855) || (inst_27856);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27857)){
var statearr_27937_27995 = state_27917__$1;
(statearr_27937_27995[(1)] = (16));

} else {
var statearr_27938_27996 = state_27917__$1;
(statearr_27938_27996[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (22))){
var inst_27876 = (state_27917[(14)]);
var inst_27877 = (state_27917[(10)]);
var inst_27875 = (state_27917[(2)]);
var inst_27876__$1 = cljs.core.nth.call(null,inst_27875,(0),null);
var inst_27877__$1 = cljs.core.nth.call(null,inst_27875,(1),null);
var inst_27878 = (inst_27876__$1 == null);
var inst_27879 = cljs.core._EQ_.call(null,inst_27877__$1,change);
var inst_27880 = (inst_27878) || (inst_27879);
var state_27917__$1 = (function (){var statearr_27939 = state_27917;
(statearr_27939[(14)] = inst_27876__$1);

(statearr_27939[(10)] = inst_27877__$1);

return statearr_27939;
})();
if(cljs.core.truth_(inst_27880)){
var statearr_27940_27997 = state_27917__$1;
(statearr_27940_27997[(1)] = (23));

} else {
var statearr_27941_27998 = state_27917__$1;
(statearr_27941_27998[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (36))){
var inst_27869 = (state_27917[(12)]);
var inst_27847 = inst_27869;
var state_27917__$1 = (function (){var statearr_27942 = state_27917;
(statearr_27942[(7)] = inst_27847);

return statearr_27942;
})();
var statearr_27943_27999 = state_27917__$1;
(statearr_27943_27999[(2)] = null);

(statearr_27943_27999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (29))){
var inst_27891 = (state_27917[(11)]);
var state_27917__$1 = state_27917;
var statearr_27944_28000 = state_27917__$1;
(statearr_27944_28000[(2)] = inst_27891);

(statearr_27944_28000[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (6))){
var state_27917__$1 = state_27917;
var statearr_27945_28001 = state_27917__$1;
(statearr_27945_28001[(2)] = false);

(statearr_27945_28001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (28))){
var inst_27887 = (state_27917[(2)]);
var inst_27888 = calc_state.call(null);
var inst_27847 = inst_27888;
var state_27917__$1 = (function (){var statearr_27946 = state_27917;
(statearr_27946[(7)] = inst_27847);

(statearr_27946[(15)] = inst_27887);

return statearr_27946;
})();
var statearr_27947_28002 = state_27917__$1;
(statearr_27947_28002[(2)] = null);

(statearr_27947_28002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (25))){
var inst_27913 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27948_28003 = state_27917__$1;
(statearr_27948_28003[(2)] = inst_27913);

(statearr_27948_28003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (34))){
var inst_27911 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27949_28004 = state_27917__$1;
(statearr_27949_28004[(2)] = inst_27911);

(statearr_27949_28004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (17))){
var state_27917__$1 = state_27917;
var statearr_27950_28005 = state_27917__$1;
(statearr_27950_28005[(2)] = false);

(statearr_27950_28005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (3))){
var state_27917__$1 = state_27917;
var statearr_27951_28006 = state_27917__$1;
(statearr_27951_28006[(2)] = false);

(statearr_27951_28006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (12))){
var inst_27915 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27917__$1,inst_27915);
} else {
if((state_val_27918 === (2))){
var inst_27823 = (state_27917[(8)]);
var inst_27828 = inst_27823.cljs$lang$protocol_mask$partition0$;
var inst_27829 = (inst_27828 & (64));
var inst_27830 = inst_27823.cljs$core$ISeq$;
var inst_27831 = (inst_27829) || (inst_27830);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27831)){
var statearr_27952_28007 = state_27917__$1;
(statearr_27952_28007[(1)] = (5));

} else {
var statearr_27953_28008 = state_27917__$1;
(statearr_27953_28008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (23))){
var inst_27876 = (state_27917[(14)]);
var inst_27882 = (inst_27876 == null);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27882)){
var statearr_27954_28009 = state_27917__$1;
(statearr_27954_28009[(1)] = (26));

} else {
var statearr_27955_28010 = state_27917__$1;
(statearr_27955_28010[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (35))){
var inst_27902 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
if(cljs.core.truth_(inst_27902)){
var statearr_27956_28011 = state_27917__$1;
(statearr_27956_28011[(1)] = (36));

} else {
var statearr_27957_28012 = state_27917__$1;
(statearr_27957_28012[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (19))){
var inst_27847 = (state_27917[(7)]);
var inst_27866 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27847);
var state_27917__$1 = state_27917;
var statearr_27958_28013 = state_27917__$1;
(statearr_27958_28013[(2)] = inst_27866);

(statearr_27958_28013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (11))){
var inst_27847 = (state_27917[(7)]);
var inst_27851 = (inst_27847 == null);
var inst_27852 = cljs.core.not.call(null,inst_27851);
var state_27917__$1 = state_27917;
if(inst_27852){
var statearr_27959_28014 = state_27917__$1;
(statearr_27959_28014[(1)] = (13));

} else {
var statearr_27960_28015 = state_27917__$1;
(statearr_27960_28015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (9))){
var inst_27823 = (state_27917[(8)]);
var state_27917__$1 = state_27917;
var statearr_27961_28016 = state_27917__$1;
(statearr_27961_28016[(2)] = inst_27823);

(statearr_27961_28016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (5))){
var state_27917__$1 = state_27917;
var statearr_27962_28017 = state_27917__$1;
(statearr_27962_28017[(2)] = true);

(statearr_27962_28017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (14))){
var state_27917__$1 = state_27917;
var statearr_27963_28018 = state_27917__$1;
(statearr_27963_28018[(2)] = false);

(statearr_27963_28018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (26))){
var inst_27877 = (state_27917[(10)]);
var inst_27884 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27877);
var state_27917__$1 = state_27917;
var statearr_27964_28019 = state_27917__$1;
(statearr_27964_28019[(2)] = inst_27884);

(statearr_27964_28019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (16))){
var state_27917__$1 = state_27917;
var statearr_27965_28020 = state_27917__$1;
(statearr_27965_28020[(2)] = true);

(statearr_27965_28020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (38))){
var inst_27907 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27966_28021 = state_27917__$1;
(statearr_27966_28021[(2)] = inst_27907);

(statearr_27966_28021[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (30))){
var inst_27870 = (state_27917[(9)]);
var inst_27871 = (state_27917[(13)]);
var inst_27877 = (state_27917[(10)]);
var inst_27894 = cljs.core.empty_QMARK_.call(null,inst_27870);
var inst_27895 = inst_27871.call(null,inst_27877);
var inst_27896 = cljs.core.not.call(null,inst_27895);
var inst_27897 = (inst_27894) && (inst_27896);
var state_27917__$1 = state_27917;
var statearr_27967_28022 = state_27917__$1;
(statearr_27967_28022[(2)] = inst_27897);

(statearr_27967_28022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (10))){
var inst_27823 = (state_27917[(8)]);
var inst_27843 = (state_27917[(2)]);
var inst_27844 = cljs.core.get.call(null,inst_27843,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27845 = cljs.core.get.call(null,inst_27843,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27846 = cljs.core.get.call(null,inst_27843,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27847 = inst_27823;
var state_27917__$1 = (function (){var statearr_27968 = state_27917;
(statearr_27968[(7)] = inst_27847);

(statearr_27968[(16)] = inst_27844);

(statearr_27968[(17)] = inst_27846);

(statearr_27968[(18)] = inst_27845);

return statearr_27968;
})();
var statearr_27969_28023 = state_27917__$1;
(statearr_27969_28023[(2)] = null);

(statearr_27969_28023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (18))){
var inst_27861 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
var statearr_27970_28024 = state_27917__$1;
(statearr_27970_28024[(2)] = inst_27861);

(statearr_27970_28024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (37))){
var state_27917__$1 = state_27917;
var statearr_27971_28025 = state_27917__$1;
(statearr_27971_28025[(2)] = null);

(statearr_27971_28025[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27918 === (8))){
var inst_27823 = (state_27917[(8)]);
var inst_27840 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27823);
var state_27917__$1 = state_27917;
var statearr_27972_28026 = state_27917__$1;
(statearr_27972_28026[(2)] = inst_27840);

(statearr_27972_28026[(1)] = (10));


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
});})(c__26267__auto___27980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26155__auto__,c__26267__auto___27980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26156__auto__ = null;
var cljs$core$async$mix_$_state_machine__26156__auto____0 = (function (){
var statearr_27976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27976[(0)] = cljs$core$async$mix_$_state_machine__26156__auto__);

(statearr_27976[(1)] = (1));

return statearr_27976;
});
var cljs$core$async$mix_$_state_machine__26156__auto____1 = (function (state_27917){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_27917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e27977){if((e27977 instanceof Object)){
var ex__26159__auto__ = e27977;
var statearr_27978_28027 = state_27917;
(statearr_27978_28027[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28028 = state_27917;
state_27917 = G__28028;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26156__auto__ = function(state_27917){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26156__auto____1.call(this,state_27917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26156__auto____0;
cljs$core$async$mix_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26156__auto____1;
return cljs$core$async$mix_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___27980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26269__auto__ = (function (){var statearr_27979 = f__26268__auto__.call(null);
(statearr_27979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___27980);

return statearr_27979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___27980,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19038__auto__ = (((p == null))?null:p);
var m__19039__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19039__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19038__auto__ = (((p == null))?null:p);
var m__19039__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,p,v,ch);
} else {
var m__19039__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28029 = [];
var len__19441__auto___28032 = arguments.length;
var i__19442__auto___28033 = (0);
while(true){
if((i__19442__auto___28033 < len__19441__auto___28032)){
args28029.push((arguments[i__19442__auto___28033]));

var G__28034 = (i__19442__auto___28033 + (1));
i__19442__auto___28033 = G__28034;
continue;
} else {
}
break;
}

var G__28031 = args28029.length;
switch (G__28031) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28029.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19038__auto__ = (((p == null))?null:p);
var m__19039__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,p);
} else {
var m__19039__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19038__auto__ = (((p == null))?null:p);
var m__19039__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19038__auto__)]);
if(!((m__19039__auto__ == null))){
return m__19039__auto__.call(null,p,v);
} else {
var m__19039__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19039__auto____$1 == null))){
return m__19039__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28037 = [];
var len__19441__auto___28162 = arguments.length;
var i__19442__auto___28163 = (0);
while(true){
if((i__19442__auto___28163 < len__19441__auto___28162)){
args28037.push((arguments[i__19442__auto___28163]));

var G__28164 = (i__19442__auto___28163 + (1));
i__19442__auto___28163 = G__28164;
continue;
} else {
}
break;
}

var G__28039 = args28037.length;
switch (G__28039) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28037.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18383__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18383__auto__,mults){
return (function (p1__28036_SHARP_){
if(cljs.core.truth_(p1__28036_SHARP_.call(null,topic))){
return p1__28036_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28036_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18383__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28040 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28041){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28041 = meta28041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28042,meta28041__$1){
var self__ = this;
var _28042__$1 = this;
return (new cljs.core.async.t_cljs$core$async28040(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28041__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28042){
var self__ = this;
var _28042__$1 = this;
return self__.meta28041;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28040.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28040.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28041","meta28041",-1185045569,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28040";

cljs.core.async.t_cljs$core$async28040.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async28040");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28040 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28040(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28041){
return (new cljs.core.async.t_cljs$core$async28040(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28041));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28040(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26267__auto___28166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___28166,mults,ensure_mult,p){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___28166,mults,ensure_mult,p){
return (function (state_28114){
var state_val_28115 = (state_28114[(1)]);
if((state_val_28115 === (7))){
var inst_28110 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28116_28167 = state_28114__$1;
(statearr_28116_28167[(2)] = inst_28110);

(statearr_28116_28167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (20))){
var state_28114__$1 = state_28114;
var statearr_28117_28168 = state_28114__$1;
(statearr_28117_28168[(2)] = null);

(statearr_28117_28168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (1))){
var state_28114__$1 = state_28114;
var statearr_28118_28169 = state_28114__$1;
(statearr_28118_28169[(2)] = null);

(statearr_28118_28169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (24))){
var inst_28093 = (state_28114[(7)]);
var inst_28102 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28093);
var state_28114__$1 = state_28114;
var statearr_28119_28170 = state_28114__$1;
(statearr_28119_28170[(2)] = inst_28102);

(statearr_28119_28170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (4))){
var inst_28045 = (state_28114[(8)]);
var inst_28045__$1 = (state_28114[(2)]);
var inst_28046 = (inst_28045__$1 == null);
var state_28114__$1 = (function (){var statearr_28120 = state_28114;
(statearr_28120[(8)] = inst_28045__$1);

return statearr_28120;
})();
if(cljs.core.truth_(inst_28046)){
var statearr_28121_28171 = state_28114__$1;
(statearr_28121_28171[(1)] = (5));

} else {
var statearr_28122_28172 = state_28114__$1;
(statearr_28122_28172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (15))){
var inst_28087 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28123_28173 = state_28114__$1;
(statearr_28123_28173[(2)] = inst_28087);

(statearr_28123_28173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (21))){
var inst_28107 = (state_28114[(2)]);
var state_28114__$1 = (function (){var statearr_28124 = state_28114;
(statearr_28124[(9)] = inst_28107);

return statearr_28124;
})();
var statearr_28125_28174 = state_28114__$1;
(statearr_28125_28174[(2)] = null);

(statearr_28125_28174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (13))){
var inst_28069 = (state_28114[(10)]);
var inst_28071 = cljs.core.chunked_seq_QMARK_.call(null,inst_28069);
var state_28114__$1 = state_28114;
if(inst_28071){
var statearr_28126_28175 = state_28114__$1;
(statearr_28126_28175[(1)] = (16));

} else {
var statearr_28127_28176 = state_28114__$1;
(statearr_28127_28176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (22))){
var inst_28099 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
if(cljs.core.truth_(inst_28099)){
var statearr_28128_28177 = state_28114__$1;
(statearr_28128_28177[(1)] = (23));

} else {
var statearr_28129_28178 = state_28114__$1;
(statearr_28129_28178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (6))){
var inst_28045 = (state_28114[(8)]);
var inst_28095 = (state_28114[(11)]);
var inst_28093 = (state_28114[(7)]);
var inst_28093__$1 = topic_fn.call(null,inst_28045);
var inst_28094 = cljs.core.deref.call(null,mults);
var inst_28095__$1 = cljs.core.get.call(null,inst_28094,inst_28093__$1);
var state_28114__$1 = (function (){var statearr_28130 = state_28114;
(statearr_28130[(11)] = inst_28095__$1);

(statearr_28130[(7)] = inst_28093__$1);

return statearr_28130;
})();
if(cljs.core.truth_(inst_28095__$1)){
var statearr_28131_28179 = state_28114__$1;
(statearr_28131_28179[(1)] = (19));

} else {
var statearr_28132_28180 = state_28114__$1;
(statearr_28132_28180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (25))){
var inst_28104 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28133_28181 = state_28114__$1;
(statearr_28133_28181[(2)] = inst_28104);

(statearr_28133_28181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (17))){
var inst_28069 = (state_28114[(10)]);
var inst_28078 = cljs.core.first.call(null,inst_28069);
var inst_28079 = cljs.core.async.muxch_STAR_.call(null,inst_28078);
var inst_28080 = cljs.core.async.close_BANG_.call(null,inst_28079);
var inst_28081 = cljs.core.next.call(null,inst_28069);
var inst_28055 = inst_28081;
var inst_28056 = null;
var inst_28057 = (0);
var inst_28058 = (0);
var state_28114__$1 = (function (){var statearr_28134 = state_28114;
(statearr_28134[(12)] = inst_28080);

(statearr_28134[(13)] = inst_28057);

(statearr_28134[(14)] = inst_28055);

(statearr_28134[(15)] = inst_28056);

(statearr_28134[(16)] = inst_28058);

return statearr_28134;
})();
var statearr_28135_28182 = state_28114__$1;
(statearr_28135_28182[(2)] = null);

(statearr_28135_28182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (3))){
var inst_28112 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28114__$1,inst_28112);
} else {
if((state_val_28115 === (12))){
var inst_28089 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28136_28183 = state_28114__$1;
(statearr_28136_28183[(2)] = inst_28089);

(statearr_28136_28183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (2))){
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28114__$1,(4),ch);
} else {
if((state_val_28115 === (23))){
var state_28114__$1 = state_28114;
var statearr_28137_28184 = state_28114__$1;
(statearr_28137_28184[(2)] = null);

(statearr_28137_28184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (19))){
var inst_28045 = (state_28114[(8)]);
var inst_28095 = (state_28114[(11)]);
var inst_28097 = cljs.core.async.muxch_STAR_.call(null,inst_28095);
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28114__$1,(22),inst_28097,inst_28045);
} else {
if((state_val_28115 === (11))){
var inst_28069 = (state_28114[(10)]);
var inst_28055 = (state_28114[(14)]);
var inst_28069__$1 = cljs.core.seq.call(null,inst_28055);
var state_28114__$1 = (function (){var statearr_28138 = state_28114;
(statearr_28138[(10)] = inst_28069__$1);

return statearr_28138;
})();
if(inst_28069__$1){
var statearr_28139_28185 = state_28114__$1;
(statearr_28139_28185[(1)] = (13));

} else {
var statearr_28140_28186 = state_28114__$1;
(statearr_28140_28186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (9))){
var inst_28091 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28141_28187 = state_28114__$1;
(statearr_28141_28187[(2)] = inst_28091);

(statearr_28141_28187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (5))){
var inst_28052 = cljs.core.deref.call(null,mults);
var inst_28053 = cljs.core.vals.call(null,inst_28052);
var inst_28054 = cljs.core.seq.call(null,inst_28053);
var inst_28055 = inst_28054;
var inst_28056 = null;
var inst_28057 = (0);
var inst_28058 = (0);
var state_28114__$1 = (function (){var statearr_28142 = state_28114;
(statearr_28142[(13)] = inst_28057);

(statearr_28142[(14)] = inst_28055);

(statearr_28142[(15)] = inst_28056);

(statearr_28142[(16)] = inst_28058);

return statearr_28142;
})();
var statearr_28143_28188 = state_28114__$1;
(statearr_28143_28188[(2)] = null);

(statearr_28143_28188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (14))){
var state_28114__$1 = state_28114;
var statearr_28147_28189 = state_28114__$1;
(statearr_28147_28189[(2)] = null);

(statearr_28147_28189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (16))){
var inst_28069 = (state_28114[(10)]);
var inst_28073 = cljs.core.chunk_first.call(null,inst_28069);
var inst_28074 = cljs.core.chunk_rest.call(null,inst_28069);
var inst_28075 = cljs.core.count.call(null,inst_28073);
var inst_28055 = inst_28074;
var inst_28056 = inst_28073;
var inst_28057 = inst_28075;
var inst_28058 = (0);
var state_28114__$1 = (function (){var statearr_28148 = state_28114;
(statearr_28148[(13)] = inst_28057);

(statearr_28148[(14)] = inst_28055);

(statearr_28148[(15)] = inst_28056);

(statearr_28148[(16)] = inst_28058);

return statearr_28148;
})();
var statearr_28149_28190 = state_28114__$1;
(statearr_28149_28190[(2)] = null);

(statearr_28149_28190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (10))){
var inst_28057 = (state_28114[(13)]);
var inst_28055 = (state_28114[(14)]);
var inst_28056 = (state_28114[(15)]);
var inst_28058 = (state_28114[(16)]);
var inst_28063 = cljs.core._nth.call(null,inst_28056,inst_28058);
var inst_28064 = cljs.core.async.muxch_STAR_.call(null,inst_28063);
var inst_28065 = cljs.core.async.close_BANG_.call(null,inst_28064);
var inst_28066 = (inst_28058 + (1));
var tmp28144 = inst_28057;
var tmp28145 = inst_28055;
var tmp28146 = inst_28056;
var inst_28055__$1 = tmp28145;
var inst_28056__$1 = tmp28146;
var inst_28057__$1 = tmp28144;
var inst_28058__$1 = inst_28066;
var state_28114__$1 = (function (){var statearr_28150 = state_28114;
(statearr_28150[(13)] = inst_28057__$1);

(statearr_28150[(17)] = inst_28065);

(statearr_28150[(14)] = inst_28055__$1);

(statearr_28150[(15)] = inst_28056__$1);

(statearr_28150[(16)] = inst_28058__$1);

return statearr_28150;
})();
var statearr_28151_28191 = state_28114__$1;
(statearr_28151_28191[(2)] = null);

(statearr_28151_28191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (18))){
var inst_28084 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28152_28192 = state_28114__$1;
(statearr_28152_28192[(2)] = inst_28084);

(statearr_28152_28192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (8))){
var inst_28057 = (state_28114[(13)]);
var inst_28058 = (state_28114[(16)]);
var inst_28060 = (inst_28058 < inst_28057);
var inst_28061 = inst_28060;
var state_28114__$1 = state_28114;
if(cljs.core.truth_(inst_28061)){
var statearr_28153_28193 = state_28114__$1;
(statearr_28153_28193[(1)] = (10));

} else {
var statearr_28154_28194 = state_28114__$1;
(statearr_28154_28194[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__26267__auto___28166,mults,ensure_mult,p))
;
return ((function (switch__26155__auto__,c__26267__auto___28166,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_28158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28158[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_28158[(1)] = (1));

return statearr_28158;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_28114){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e28159){if((e28159 instanceof Object)){
var ex__26159__auto__ = e28159;
var statearr_28160_28195 = state_28114;
(statearr_28160_28195[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28196 = state_28114;
state_28114 = G__28196;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_28114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_28114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___28166,mults,ensure_mult,p))
})();
var state__26269__auto__ = (function (){var statearr_28161 = f__26268__auto__.call(null);
(statearr_28161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___28166);

return statearr_28161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___28166,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28197 = [];
var len__19441__auto___28200 = arguments.length;
var i__19442__auto___28201 = (0);
while(true){
if((i__19442__auto___28201 < len__19441__auto___28200)){
args28197.push((arguments[i__19442__auto___28201]));

var G__28202 = (i__19442__auto___28201 + (1));
i__19442__auto___28201 = G__28202;
continue;
} else {
}
break;
}

var G__28199 = args28197.length;
switch (G__28199) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28197.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28204 = [];
var len__19441__auto___28207 = arguments.length;
var i__19442__auto___28208 = (0);
while(true){
if((i__19442__auto___28208 < len__19441__auto___28207)){
args28204.push((arguments[i__19442__auto___28208]));

var G__28209 = (i__19442__auto___28208 + (1));
i__19442__auto___28208 = G__28209;
continue;
} else {
}
break;
}

var G__28206 = args28204.length;
switch (G__28206) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28204.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28211 = [];
var len__19441__auto___28282 = arguments.length;
var i__19442__auto___28283 = (0);
while(true){
if((i__19442__auto___28283 < len__19441__auto___28282)){
args28211.push((arguments[i__19442__auto___28283]));

var G__28284 = (i__19442__auto___28283 + (1));
i__19442__auto___28283 = G__28284;
continue;
} else {
}
break;
}

var G__28213 = args28211.length;
switch (G__28213) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28211.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26267__auto___28286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28252){
var state_val_28253 = (state_28252[(1)]);
if((state_val_28253 === (7))){
var state_28252__$1 = state_28252;
var statearr_28254_28287 = state_28252__$1;
(statearr_28254_28287[(2)] = null);

(statearr_28254_28287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (1))){
var state_28252__$1 = state_28252;
var statearr_28255_28288 = state_28252__$1;
(statearr_28255_28288[(2)] = null);

(statearr_28255_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (4))){
var inst_28216 = (state_28252[(7)]);
var inst_28218 = (inst_28216 < cnt);
var state_28252__$1 = state_28252;
if(cljs.core.truth_(inst_28218)){
var statearr_28256_28289 = state_28252__$1;
(statearr_28256_28289[(1)] = (6));

} else {
var statearr_28257_28290 = state_28252__$1;
(statearr_28257_28290[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (15))){
var inst_28248 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
var statearr_28258_28291 = state_28252__$1;
(statearr_28258_28291[(2)] = inst_28248);

(statearr_28258_28291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (13))){
var inst_28241 = cljs.core.async.close_BANG_.call(null,out);
var state_28252__$1 = state_28252;
var statearr_28259_28292 = state_28252__$1;
(statearr_28259_28292[(2)] = inst_28241);

(statearr_28259_28292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (6))){
var state_28252__$1 = state_28252;
var statearr_28260_28293 = state_28252__$1;
(statearr_28260_28293[(2)] = null);

(statearr_28260_28293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (3))){
var inst_28250 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28252__$1,inst_28250);
} else {
if((state_val_28253 === (12))){
var inst_28238 = (state_28252[(8)]);
var inst_28238__$1 = (state_28252[(2)]);
var inst_28239 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28238__$1);
var state_28252__$1 = (function (){var statearr_28261 = state_28252;
(statearr_28261[(8)] = inst_28238__$1);

return statearr_28261;
})();
if(cljs.core.truth_(inst_28239)){
var statearr_28262_28294 = state_28252__$1;
(statearr_28262_28294[(1)] = (13));

} else {
var statearr_28263_28295 = state_28252__$1;
(statearr_28263_28295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (2))){
var inst_28215 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28216 = (0);
var state_28252__$1 = (function (){var statearr_28264 = state_28252;
(statearr_28264[(7)] = inst_28216);

(statearr_28264[(9)] = inst_28215);

return statearr_28264;
})();
var statearr_28265_28296 = state_28252__$1;
(statearr_28265_28296[(2)] = null);

(statearr_28265_28296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (11))){
var inst_28216 = (state_28252[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28252,(10),Object,null,(9));
var inst_28225 = chs__$1.call(null,inst_28216);
var inst_28226 = done.call(null,inst_28216);
var inst_28227 = cljs.core.async.take_BANG_.call(null,inst_28225,inst_28226);
var state_28252__$1 = state_28252;
var statearr_28266_28297 = state_28252__$1;
(statearr_28266_28297[(2)] = inst_28227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (9))){
var inst_28216 = (state_28252[(7)]);
var inst_28229 = (state_28252[(2)]);
var inst_28230 = (inst_28216 + (1));
var inst_28216__$1 = inst_28230;
var state_28252__$1 = (function (){var statearr_28267 = state_28252;
(statearr_28267[(10)] = inst_28229);

(statearr_28267[(7)] = inst_28216__$1);

return statearr_28267;
})();
var statearr_28268_28298 = state_28252__$1;
(statearr_28268_28298[(2)] = null);

(statearr_28268_28298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (5))){
var inst_28236 = (state_28252[(2)]);
var state_28252__$1 = (function (){var statearr_28269 = state_28252;
(statearr_28269[(11)] = inst_28236);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28252__$1,(12),dchan);
} else {
if((state_val_28253 === (14))){
var inst_28238 = (state_28252[(8)]);
var inst_28243 = cljs.core.apply.call(null,f,inst_28238);
var state_28252__$1 = state_28252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28252__$1,(16),out,inst_28243);
} else {
if((state_val_28253 === (16))){
var inst_28245 = (state_28252[(2)]);
var state_28252__$1 = (function (){var statearr_28270 = state_28252;
(statearr_28270[(12)] = inst_28245);

return statearr_28270;
})();
var statearr_28271_28299 = state_28252__$1;
(statearr_28271_28299[(2)] = null);

(statearr_28271_28299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (10))){
var inst_28220 = (state_28252[(2)]);
var inst_28221 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28252__$1 = (function (){var statearr_28272 = state_28252;
(statearr_28272[(13)] = inst_28220);

return statearr_28272;
})();
var statearr_28273_28300 = state_28252__$1;
(statearr_28273_28300[(2)] = inst_28221);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28253 === (8))){
var inst_28234 = (state_28252[(2)]);
var state_28252__$1 = state_28252;
var statearr_28274_28301 = state_28252__$1;
(statearr_28274_28301[(2)] = inst_28234);

(statearr_28274_28301[(1)] = (5));


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
});})(c__26267__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26155__auto__,c__26267__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_28278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28278[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_28278[(1)] = (1));

return statearr_28278;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_28252){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object)){
var ex__26159__auto__ = e28279;
var statearr_28280_28302 = state_28252;
(statearr_28280_28302[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28303 = state_28252;
state_28252 = G__28303;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_28252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_28252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26269__auto__ = (function (){var statearr_28281 = f__26268__auto__.call(null);
(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___28286);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___28286,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28305 = [];
var len__19441__auto___28361 = arguments.length;
var i__19442__auto___28362 = (0);
while(true){
if((i__19442__auto___28362 < len__19441__auto___28361)){
args28305.push((arguments[i__19442__auto___28362]));

var G__28363 = (i__19442__auto___28362 + (1));
i__19442__auto___28362 = G__28363;
continue;
} else {
}
break;
}

var G__28307 = args28305.length;
switch (G__28307) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28305.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26267__auto___28365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___28365,out){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___28365,out){
return (function (state_28337){
var state_val_28338 = (state_28337[(1)]);
if((state_val_28338 === (7))){
var inst_28317 = (state_28337[(7)]);
var inst_28316 = (state_28337[(8)]);
var inst_28316__$1 = (state_28337[(2)]);
var inst_28317__$1 = cljs.core.nth.call(null,inst_28316__$1,(0),null);
var inst_28318 = cljs.core.nth.call(null,inst_28316__$1,(1),null);
var inst_28319 = (inst_28317__$1 == null);
var state_28337__$1 = (function (){var statearr_28339 = state_28337;
(statearr_28339[(7)] = inst_28317__$1);

(statearr_28339[(9)] = inst_28318);

(statearr_28339[(8)] = inst_28316__$1);

return statearr_28339;
})();
if(cljs.core.truth_(inst_28319)){
var statearr_28340_28366 = state_28337__$1;
(statearr_28340_28366[(1)] = (8));

} else {
var statearr_28341_28367 = state_28337__$1;
(statearr_28341_28367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (1))){
var inst_28308 = cljs.core.vec.call(null,chs);
var inst_28309 = inst_28308;
var state_28337__$1 = (function (){var statearr_28342 = state_28337;
(statearr_28342[(10)] = inst_28309);

return statearr_28342;
})();
var statearr_28343_28368 = state_28337__$1;
(statearr_28343_28368[(2)] = null);

(statearr_28343_28368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (4))){
var inst_28309 = (state_28337[(10)]);
var state_28337__$1 = state_28337;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28337__$1,(7),inst_28309);
} else {
if((state_val_28338 === (6))){
var inst_28333 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28344_28369 = state_28337__$1;
(statearr_28344_28369[(2)] = inst_28333);

(statearr_28344_28369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (3))){
var inst_28335 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28337__$1,inst_28335);
} else {
if((state_val_28338 === (2))){
var inst_28309 = (state_28337[(10)]);
var inst_28311 = cljs.core.count.call(null,inst_28309);
var inst_28312 = (inst_28311 > (0));
var state_28337__$1 = state_28337;
if(cljs.core.truth_(inst_28312)){
var statearr_28346_28370 = state_28337__$1;
(statearr_28346_28370[(1)] = (4));

} else {
var statearr_28347_28371 = state_28337__$1;
(statearr_28347_28371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (11))){
var inst_28309 = (state_28337[(10)]);
var inst_28326 = (state_28337[(2)]);
var tmp28345 = inst_28309;
var inst_28309__$1 = tmp28345;
var state_28337__$1 = (function (){var statearr_28348 = state_28337;
(statearr_28348[(11)] = inst_28326);

(statearr_28348[(10)] = inst_28309__$1);

return statearr_28348;
})();
var statearr_28349_28372 = state_28337__$1;
(statearr_28349_28372[(2)] = null);

(statearr_28349_28372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (9))){
var inst_28317 = (state_28337[(7)]);
var state_28337__$1 = state_28337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28337__$1,(11),out,inst_28317);
} else {
if((state_val_28338 === (5))){
var inst_28331 = cljs.core.async.close_BANG_.call(null,out);
var state_28337__$1 = state_28337;
var statearr_28350_28373 = state_28337__$1;
(statearr_28350_28373[(2)] = inst_28331);

(statearr_28350_28373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (10))){
var inst_28329 = (state_28337[(2)]);
var state_28337__$1 = state_28337;
var statearr_28351_28374 = state_28337__$1;
(statearr_28351_28374[(2)] = inst_28329);

(statearr_28351_28374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28338 === (8))){
var inst_28317 = (state_28337[(7)]);
var inst_28318 = (state_28337[(9)]);
var inst_28316 = (state_28337[(8)]);
var inst_28309 = (state_28337[(10)]);
var inst_28321 = (function (){var cs = inst_28309;
var vec__28314 = inst_28316;
var v = inst_28317;
var c = inst_28318;
return ((function (cs,vec__28314,v,c,inst_28317,inst_28318,inst_28316,inst_28309,state_val_28338,c__26267__auto___28365,out){
return (function (p1__28304_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28304_SHARP_);
});
;})(cs,vec__28314,v,c,inst_28317,inst_28318,inst_28316,inst_28309,state_val_28338,c__26267__auto___28365,out))
})();
var inst_28322 = cljs.core.filterv.call(null,inst_28321,inst_28309);
var inst_28309__$1 = inst_28322;
var state_28337__$1 = (function (){var statearr_28352 = state_28337;
(statearr_28352[(10)] = inst_28309__$1);

return statearr_28352;
})();
var statearr_28353_28375 = state_28337__$1;
(statearr_28353_28375[(2)] = null);

(statearr_28353_28375[(1)] = (2));


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
});})(c__26267__auto___28365,out))
;
return ((function (switch__26155__auto__,c__26267__auto___28365,out){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_28357 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28357[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_28357[(1)] = (1));

return statearr_28357;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_28337){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e28358){if((e28358 instanceof Object)){
var ex__26159__auto__ = e28358;
var statearr_28359_28376 = state_28337;
(statearr_28359_28376[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28377 = state_28337;
state_28337 = G__28377;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_28337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_28337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___28365,out))
})();
var state__26269__auto__ = (function (){var statearr_28360 = f__26268__auto__.call(null);
(statearr_28360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___28365);

return statearr_28360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___28365,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28378 = [];
var len__19441__auto___28427 = arguments.length;
var i__19442__auto___28428 = (0);
while(true){
if((i__19442__auto___28428 < len__19441__auto___28427)){
args28378.push((arguments[i__19442__auto___28428]));

var G__28429 = (i__19442__auto___28428 + (1));
i__19442__auto___28428 = G__28429;
continue;
} else {
}
break;
}

var G__28380 = args28378.length;
switch (G__28380) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28378.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26267__auto___28431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___28431,out){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___28431,out){
return (function (state_28404){
var state_val_28405 = (state_28404[(1)]);
if((state_val_28405 === (7))){
var inst_28386 = (state_28404[(7)]);
var inst_28386__$1 = (state_28404[(2)]);
var inst_28387 = (inst_28386__$1 == null);
var inst_28388 = cljs.core.not.call(null,inst_28387);
var state_28404__$1 = (function (){var statearr_28406 = state_28404;
(statearr_28406[(7)] = inst_28386__$1);

return statearr_28406;
})();
if(inst_28388){
var statearr_28407_28432 = state_28404__$1;
(statearr_28407_28432[(1)] = (8));

} else {
var statearr_28408_28433 = state_28404__$1;
(statearr_28408_28433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (1))){
var inst_28381 = (0);
var state_28404__$1 = (function (){var statearr_28409 = state_28404;
(statearr_28409[(8)] = inst_28381);

return statearr_28409;
})();
var statearr_28410_28434 = state_28404__$1;
(statearr_28410_28434[(2)] = null);

(statearr_28410_28434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (4))){
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28404__$1,(7),ch);
} else {
if((state_val_28405 === (6))){
var inst_28399 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28411_28435 = state_28404__$1;
(statearr_28411_28435[(2)] = inst_28399);

(statearr_28411_28435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (3))){
var inst_28401 = (state_28404[(2)]);
var inst_28402 = cljs.core.async.close_BANG_.call(null,out);
var state_28404__$1 = (function (){var statearr_28412 = state_28404;
(statearr_28412[(9)] = inst_28401);

return statearr_28412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28404__$1,inst_28402);
} else {
if((state_val_28405 === (2))){
var inst_28381 = (state_28404[(8)]);
var inst_28383 = (inst_28381 < n);
var state_28404__$1 = state_28404;
if(cljs.core.truth_(inst_28383)){
var statearr_28413_28436 = state_28404__$1;
(statearr_28413_28436[(1)] = (4));

} else {
var statearr_28414_28437 = state_28404__$1;
(statearr_28414_28437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (11))){
var inst_28381 = (state_28404[(8)]);
var inst_28391 = (state_28404[(2)]);
var inst_28392 = (inst_28381 + (1));
var inst_28381__$1 = inst_28392;
var state_28404__$1 = (function (){var statearr_28415 = state_28404;
(statearr_28415[(10)] = inst_28391);

(statearr_28415[(8)] = inst_28381__$1);

return statearr_28415;
})();
var statearr_28416_28438 = state_28404__$1;
(statearr_28416_28438[(2)] = null);

(statearr_28416_28438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (9))){
var state_28404__$1 = state_28404;
var statearr_28417_28439 = state_28404__$1;
(statearr_28417_28439[(2)] = null);

(statearr_28417_28439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (5))){
var state_28404__$1 = state_28404;
var statearr_28418_28440 = state_28404__$1;
(statearr_28418_28440[(2)] = null);

(statearr_28418_28440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (10))){
var inst_28396 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28419_28441 = state_28404__$1;
(statearr_28419_28441[(2)] = inst_28396);

(statearr_28419_28441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (8))){
var inst_28386 = (state_28404[(7)]);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28404__$1,(11),out,inst_28386);
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
});})(c__26267__auto___28431,out))
;
return ((function (switch__26155__auto__,c__26267__auto___28431,out){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_28423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28423[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_28423[(1)] = (1));

return statearr_28423;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_28404){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e28424){if((e28424 instanceof Object)){
var ex__26159__auto__ = e28424;
var statearr_28425_28442 = state_28404;
(statearr_28425_28442[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28443 = state_28404;
state_28404 = G__28443;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_28404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_28404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___28431,out))
})();
var state__26269__auto__ = (function (){var statearr_28426 = f__26268__auto__.call(null);
(statearr_28426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___28431);

return statearr_28426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___28431,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28451 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28451 = (function (map_LT_,f,ch,meta28452){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28452 = meta28452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28453,meta28452__$1){
var self__ = this;
var _28453__$1 = this;
return (new cljs.core.async.t_cljs$core$async28451(self__.map_LT_,self__.f,self__.ch,meta28452__$1));
});

cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28453){
var self__ = this;
var _28453__$1 = this;
return self__.meta28452;
});

cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28454 = (function (map_LT_,f,ch,meta28452,_,fn1,meta28455){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28452 = meta28452;
this._ = _;
this.fn1 = fn1;
this.meta28455 = meta28455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28456,meta28455__$1){
var self__ = this;
var _28456__$1 = this;
return (new cljs.core.async.t_cljs$core$async28454(self__.map_LT_,self__.f,self__.ch,self__.meta28452,self__._,self__.fn1,meta28455__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28456){
var self__ = this;
var _28456__$1 = this;
return self__.meta28455;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28444_SHARP_){
return f1.call(null,(((p1__28444_SHARP_ == null))?null:self__.f.call(null,p1__28444_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28454.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28452","meta28452",1010342762,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28451","cljs.core.async/t_cljs$core$async28451",-1294219005,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28455","meta28455",-709389197,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28454";

cljs.core.async.t_cljs$core$async28454.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async28454");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28454 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28454(map_LT___$1,f__$1,ch__$1,meta28452__$1,___$2,fn1__$1,meta28455){
return (new cljs.core.async.t_cljs$core$async28454(map_LT___$1,f__$1,ch__$1,meta28452__$1,___$2,fn1__$1,meta28455));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28454(self__.map_LT_,self__.f,self__.ch,self__.meta28452,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18371__auto__ = ret;
if(cljs.core.truth_(and__18371__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18371__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28452","meta28452",1010342762,null)], null);
});

cljs.core.async.t_cljs$core$async28451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28451";

cljs.core.async.t_cljs$core$async28451.cljs$lang$ctorPrWriter = (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async28451");
});

cljs.core.async.__GT_t_cljs$core$async28451 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28451(map_LT___$1,f__$1,ch__$1,meta28452){
return (new cljs.core.async.t_cljs$core$async28451(map_LT___$1,f__$1,ch__$1,meta28452));
});

}

return (new cljs.core.async.t_cljs$core$async28451(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28460 = (function (map_GT_,f,ch,meta28461){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28461 = meta28461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28462,meta28461__$1){
var self__ = this;
var _28462__$1 = this;
return (new cljs.core.async.t_cljs$core$async28460(self__.map_GT_,self__.f,self__.ch,meta28461__$1));
});

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28462){
var self__ = this;
var _28462__$1 = this;
return self__.meta28461;
});

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28461","meta28461",-76029143,null)], null);
});

cljs.core.async.t_cljs$core$async28460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28460";

cljs.core.async.t_cljs$core$async28460.cljs$lang$ctorPrWriter = (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async28460");
});

cljs.core.async.__GT_t_cljs$core$async28460 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28460(map_GT___$1,f__$1,ch__$1,meta28461){
return (new cljs.core.async.t_cljs$core$async28460(map_GT___$1,f__$1,ch__$1,meta28461));
});

}

return (new cljs.core.async.t_cljs$core$async28460(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28466 = (function (filter_GT_,p,ch,meta28467){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28467 = meta28467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28468,meta28467__$1){
var self__ = this;
var _28468__$1 = this;
return (new cljs.core.async.t_cljs$core$async28466(self__.filter_GT_,self__.p,self__.ch,meta28467__$1));
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28468){
var self__ = this;
var _28468__$1 = this;
return self__.meta28467;
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28467","meta28467",1980345613,null)], null);
});

cljs.core.async.t_cljs$core$async28466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28466";

cljs.core.async.t_cljs$core$async28466.cljs$lang$ctorPrWriter = (function (this__18981__auto__,writer__18982__auto__,opt__18983__auto__){
return cljs.core._write.call(null,writer__18982__auto__,"cljs.core.async/t_cljs$core$async28466");
});

cljs.core.async.__GT_t_cljs$core$async28466 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28466(filter_GT___$1,p__$1,ch__$1,meta28467){
return (new cljs.core.async.t_cljs$core$async28466(filter_GT___$1,p__$1,ch__$1,meta28467));
});

}

return (new cljs.core.async.t_cljs$core$async28466(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28469 = [];
var len__19441__auto___28513 = arguments.length;
var i__19442__auto___28514 = (0);
while(true){
if((i__19442__auto___28514 < len__19441__auto___28513)){
args28469.push((arguments[i__19442__auto___28514]));

var G__28515 = (i__19442__auto___28514 + (1));
i__19442__auto___28514 = G__28515;
continue;
} else {
}
break;
}

var G__28471 = args28469.length;
switch (G__28471) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28469.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26267__auto___28517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___28517,out){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___28517,out){
return (function (state_28492){
var state_val_28493 = (state_28492[(1)]);
if((state_val_28493 === (7))){
var inst_28488 = (state_28492[(2)]);
var state_28492__$1 = state_28492;
var statearr_28494_28518 = state_28492__$1;
(statearr_28494_28518[(2)] = inst_28488);

(statearr_28494_28518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (1))){
var state_28492__$1 = state_28492;
var statearr_28495_28519 = state_28492__$1;
(statearr_28495_28519[(2)] = null);

(statearr_28495_28519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (4))){
var inst_28474 = (state_28492[(7)]);
var inst_28474__$1 = (state_28492[(2)]);
var inst_28475 = (inst_28474__$1 == null);
var state_28492__$1 = (function (){var statearr_28496 = state_28492;
(statearr_28496[(7)] = inst_28474__$1);

return statearr_28496;
})();
if(cljs.core.truth_(inst_28475)){
var statearr_28497_28520 = state_28492__$1;
(statearr_28497_28520[(1)] = (5));

} else {
var statearr_28498_28521 = state_28492__$1;
(statearr_28498_28521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (6))){
var inst_28474 = (state_28492[(7)]);
var inst_28479 = p.call(null,inst_28474);
var state_28492__$1 = state_28492;
if(cljs.core.truth_(inst_28479)){
var statearr_28499_28522 = state_28492__$1;
(statearr_28499_28522[(1)] = (8));

} else {
var statearr_28500_28523 = state_28492__$1;
(statearr_28500_28523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (3))){
var inst_28490 = (state_28492[(2)]);
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28492__$1,inst_28490);
} else {
if((state_val_28493 === (2))){
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28492__$1,(4),ch);
} else {
if((state_val_28493 === (11))){
var inst_28482 = (state_28492[(2)]);
var state_28492__$1 = state_28492;
var statearr_28501_28524 = state_28492__$1;
(statearr_28501_28524[(2)] = inst_28482);

(statearr_28501_28524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (9))){
var state_28492__$1 = state_28492;
var statearr_28502_28525 = state_28492__$1;
(statearr_28502_28525[(2)] = null);

(statearr_28502_28525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (5))){
var inst_28477 = cljs.core.async.close_BANG_.call(null,out);
var state_28492__$1 = state_28492;
var statearr_28503_28526 = state_28492__$1;
(statearr_28503_28526[(2)] = inst_28477);

(statearr_28503_28526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (10))){
var inst_28485 = (state_28492[(2)]);
var state_28492__$1 = (function (){var statearr_28504 = state_28492;
(statearr_28504[(8)] = inst_28485);

return statearr_28504;
})();
var statearr_28505_28527 = state_28492__$1;
(statearr_28505_28527[(2)] = null);

(statearr_28505_28527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28493 === (8))){
var inst_28474 = (state_28492[(7)]);
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28492__$1,(11),out,inst_28474);
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
});})(c__26267__auto___28517,out))
;
return ((function (switch__26155__auto__,c__26267__auto___28517,out){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_28509 = [null,null,null,null,null,null,null,null,null];
(statearr_28509[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_28509[(1)] = (1));

return statearr_28509;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_28492){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e28510){if((e28510 instanceof Object)){
var ex__26159__auto__ = e28510;
var statearr_28511_28528 = state_28492;
(statearr_28511_28528[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28529 = state_28492;
state_28492 = G__28529;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_28492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_28492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___28517,out))
})();
var state__26269__auto__ = (function (){var statearr_28512 = f__26268__auto__.call(null);
(statearr_28512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___28517);

return statearr_28512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___28517,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28530 = [];
var len__19441__auto___28533 = arguments.length;
var i__19442__auto___28534 = (0);
while(true){
if((i__19442__auto___28534 < len__19441__auto___28533)){
args28530.push((arguments[i__19442__auto___28534]));

var G__28535 = (i__19442__auto___28534 + (1));
i__19442__auto___28534 = G__28535;
continue;
} else {
}
break;
}

var G__28532 = args28530.length;
switch (G__28532) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28530.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__){
return (function (state_28702){
var state_val_28703 = (state_28702[(1)]);
if((state_val_28703 === (7))){
var inst_28698 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28704_28745 = state_28702__$1;
(statearr_28704_28745[(2)] = inst_28698);

(statearr_28704_28745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (20))){
var inst_28668 = (state_28702[(7)]);
var inst_28679 = (state_28702[(2)]);
var inst_28680 = cljs.core.next.call(null,inst_28668);
var inst_28654 = inst_28680;
var inst_28655 = null;
var inst_28656 = (0);
var inst_28657 = (0);
var state_28702__$1 = (function (){var statearr_28705 = state_28702;
(statearr_28705[(8)] = inst_28654);

(statearr_28705[(9)] = inst_28679);

(statearr_28705[(10)] = inst_28656);

(statearr_28705[(11)] = inst_28655);

(statearr_28705[(12)] = inst_28657);

return statearr_28705;
})();
var statearr_28706_28746 = state_28702__$1;
(statearr_28706_28746[(2)] = null);

(statearr_28706_28746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (1))){
var state_28702__$1 = state_28702;
var statearr_28707_28747 = state_28702__$1;
(statearr_28707_28747[(2)] = null);

(statearr_28707_28747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (4))){
var inst_28643 = (state_28702[(13)]);
var inst_28643__$1 = (state_28702[(2)]);
var inst_28644 = (inst_28643__$1 == null);
var state_28702__$1 = (function (){var statearr_28708 = state_28702;
(statearr_28708[(13)] = inst_28643__$1);

return statearr_28708;
})();
if(cljs.core.truth_(inst_28644)){
var statearr_28709_28748 = state_28702__$1;
(statearr_28709_28748[(1)] = (5));

} else {
var statearr_28710_28749 = state_28702__$1;
(statearr_28710_28749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (15))){
var state_28702__$1 = state_28702;
var statearr_28714_28750 = state_28702__$1;
(statearr_28714_28750[(2)] = null);

(statearr_28714_28750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (21))){
var state_28702__$1 = state_28702;
var statearr_28715_28751 = state_28702__$1;
(statearr_28715_28751[(2)] = null);

(statearr_28715_28751[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (13))){
var inst_28654 = (state_28702[(8)]);
var inst_28656 = (state_28702[(10)]);
var inst_28655 = (state_28702[(11)]);
var inst_28657 = (state_28702[(12)]);
var inst_28664 = (state_28702[(2)]);
var inst_28665 = (inst_28657 + (1));
var tmp28711 = inst_28654;
var tmp28712 = inst_28656;
var tmp28713 = inst_28655;
var inst_28654__$1 = tmp28711;
var inst_28655__$1 = tmp28713;
var inst_28656__$1 = tmp28712;
var inst_28657__$1 = inst_28665;
var state_28702__$1 = (function (){var statearr_28716 = state_28702;
(statearr_28716[(8)] = inst_28654__$1);

(statearr_28716[(14)] = inst_28664);

(statearr_28716[(10)] = inst_28656__$1);

(statearr_28716[(11)] = inst_28655__$1);

(statearr_28716[(12)] = inst_28657__$1);

return statearr_28716;
})();
var statearr_28717_28752 = state_28702__$1;
(statearr_28717_28752[(2)] = null);

(statearr_28717_28752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (22))){
var state_28702__$1 = state_28702;
var statearr_28718_28753 = state_28702__$1;
(statearr_28718_28753[(2)] = null);

(statearr_28718_28753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (6))){
var inst_28643 = (state_28702[(13)]);
var inst_28652 = f.call(null,inst_28643);
var inst_28653 = cljs.core.seq.call(null,inst_28652);
var inst_28654 = inst_28653;
var inst_28655 = null;
var inst_28656 = (0);
var inst_28657 = (0);
var state_28702__$1 = (function (){var statearr_28719 = state_28702;
(statearr_28719[(8)] = inst_28654);

(statearr_28719[(10)] = inst_28656);

(statearr_28719[(11)] = inst_28655);

(statearr_28719[(12)] = inst_28657);

return statearr_28719;
})();
var statearr_28720_28754 = state_28702__$1;
(statearr_28720_28754[(2)] = null);

(statearr_28720_28754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (17))){
var inst_28668 = (state_28702[(7)]);
var inst_28672 = cljs.core.chunk_first.call(null,inst_28668);
var inst_28673 = cljs.core.chunk_rest.call(null,inst_28668);
var inst_28674 = cljs.core.count.call(null,inst_28672);
var inst_28654 = inst_28673;
var inst_28655 = inst_28672;
var inst_28656 = inst_28674;
var inst_28657 = (0);
var state_28702__$1 = (function (){var statearr_28721 = state_28702;
(statearr_28721[(8)] = inst_28654);

(statearr_28721[(10)] = inst_28656);

(statearr_28721[(11)] = inst_28655);

(statearr_28721[(12)] = inst_28657);

return statearr_28721;
})();
var statearr_28722_28755 = state_28702__$1;
(statearr_28722_28755[(2)] = null);

(statearr_28722_28755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (3))){
var inst_28700 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28702__$1,inst_28700);
} else {
if((state_val_28703 === (12))){
var inst_28688 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28723_28756 = state_28702__$1;
(statearr_28723_28756[(2)] = inst_28688);

(statearr_28723_28756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (2))){
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28702__$1,(4),in$);
} else {
if((state_val_28703 === (23))){
var inst_28696 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28724_28757 = state_28702__$1;
(statearr_28724_28757[(2)] = inst_28696);

(statearr_28724_28757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (19))){
var inst_28683 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28725_28758 = state_28702__$1;
(statearr_28725_28758[(2)] = inst_28683);

(statearr_28725_28758[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (11))){
var inst_28654 = (state_28702[(8)]);
var inst_28668 = (state_28702[(7)]);
var inst_28668__$1 = cljs.core.seq.call(null,inst_28654);
var state_28702__$1 = (function (){var statearr_28726 = state_28702;
(statearr_28726[(7)] = inst_28668__$1);

return statearr_28726;
})();
if(inst_28668__$1){
var statearr_28727_28759 = state_28702__$1;
(statearr_28727_28759[(1)] = (14));

} else {
var statearr_28728_28760 = state_28702__$1;
(statearr_28728_28760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (9))){
var inst_28690 = (state_28702[(2)]);
var inst_28691 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28702__$1 = (function (){var statearr_28729 = state_28702;
(statearr_28729[(15)] = inst_28690);

return statearr_28729;
})();
if(cljs.core.truth_(inst_28691)){
var statearr_28730_28761 = state_28702__$1;
(statearr_28730_28761[(1)] = (21));

} else {
var statearr_28731_28762 = state_28702__$1;
(statearr_28731_28762[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (5))){
var inst_28646 = cljs.core.async.close_BANG_.call(null,out);
var state_28702__$1 = state_28702;
var statearr_28732_28763 = state_28702__$1;
(statearr_28732_28763[(2)] = inst_28646);

(statearr_28732_28763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (14))){
var inst_28668 = (state_28702[(7)]);
var inst_28670 = cljs.core.chunked_seq_QMARK_.call(null,inst_28668);
var state_28702__$1 = state_28702;
if(inst_28670){
var statearr_28733_28764 = state_28702__$1;
(statearr_28733_28764[(1)] = (17));

} else {
var statearr_28734_28765 = state_28702__$1;
(statearr_28734_28765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (16))){
var inst_28686 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28735_28766 = state_28702__$1;
(statearr_28735_28766[(2)] = inst_28686);

(statearr_28735_28766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (10))){
var inst_28655 = (state_28702[(11)]);
var inst_28657 = (state_28702[(12)]);
var inst_28662 = cljs.core._nth.call(null,inst_28655,inst_28657);
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28702__$1,(13),out,inst_28662);
} else {
if((state_val_28703 === (18))){
var inst_28668 = (state_28702[(7)]);
var inst_28677 = cljs.core.first.call(null,inst_28668);
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28702__$1,(20),out,inst_28677);
} else {
if((state_val_28703 === (8))){
var inst_28656 = (state_28702[(10)]);
var inst_28657 = (state_28702[(12)]);
var inst_28659 = (inst_28657 < inst_28656);
var inst_28660 = inst_28659;
var state_28702__$1 = state_28702;
if(cljs.core.truth_(inst_28660)){
var statearr_28736_28767 = state_28702__$1;
(statearr_28736_28767[(1)] = (10));

} else {
var statearr_28737_28768 = state_28702__$1;
(statearr_28737_28768[(1)] = (11));

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
}
}
}
}
}
}
});})(c__26267__auto__))
;
return ((function (switch__26155__auto__,c__26267__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26156__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26156__auto____0 = (function (){
var statearr_28741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28741[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26156__auto__);

(statearr_28741[(1)] = (1));

return statearr_28741;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26156__auto____1 = (function (state_28702){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e28742){if((e28742 instanceof Object)){
var ex__26159__auto__ = e28742;
var statearr_28743_28769 = state_28702;
(statearr_28743_28769[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28770 = state_28702;
state_28702 = G__28770;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26156__auto__ = function(state_28702){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26156__auto____1.call(this,state_28702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26156__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26156__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__))
})();
var state__26269__auto__ = (function (){var statearr_28744 = f__26268__auto__.call(null);
(statearr_28744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_28744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__))
);

return c__26267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28771 = [];
var len__19441__auto___28774 = arguments.length;
var i__19442__auto___28775 = (0);
while(true){
if((i__19442__auto___28775 < len__19441__auto___28774)){
args28771.push((arguments[i__19442__auto___28775]));

var G__28776 = (i__19442__auto___28775 + (1));
i__19442__auto___28775 = G__28776;
continue;
} else {
}
break;
}

var G__28773 = args28771.length;
switch (G__28773) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28771.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28778 = [];
var len__19441__auto___28781 = arguments.length;
var i__19442__auto___28782 = (0);
while(true){
if((i__19442__auto___28782 < len__19441__auto___28781)){
args28778.push((arguments[i__19442__auto___28782]));

var G__28783 = (i__19442__auto___28782 + (1));
i__19442__auto___28782 = G__28783;
continue;
} else {
}
break;
}

var G__28780 = args28778.length;
switch (G__28780) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28778.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28785 = [];
var len__19441__auto___28836 = arguments.length;
var i__19442__auto___28837 = (0);
while(true){
if((i__19442__auto___28837 < len__19441__auto___28836)){
args28785.push((arguments[i__19442__auto___28837]));

var G__28838 = (i__19442__auto___28837 + (1));
i__19442__auto___28837 = G__28838;
continue;
} else {
}
break;
}

var G__28787 = args28785.length;
switch (G__28787) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28785.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26267__auto___28840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___28840,out){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___28840,out){
return (function (state_28811){
var state_val_28812 = (state_28811[(1)]);
if((state_val_28812 === (7))){
var inst_28806 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28813_28841 = state_28811__$1;
(statearr_28813_28841[(2)] = inst_28806);

(statearr_28813_28841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (1))){
var inst_28788 = null;
var state_28811__$1 = (function (){var statearr_28814 = state_28811;
(statearr_28814[(7)] = inst_28788);

return statearr_28814;
})();
var statearr_28815_28842 = state_28811__$1;
(statearr_28815_28842[(2)] = null);

(statearr_28815_28842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (4))){
var inst_28791 = (state_28811[(8)]);
var inst_28791__$1 = (state_28811[(2)]);
var inst_28792 = (inst_28791__$1 == null);
var inst_28793 = cljs.core.not.call(null,inst_28792);
var state_28811__$1 = (function (){var statearr_28816 = state_28811;
(statearr_28816[(8)] = inst_28791__$1);

return statearr_28816;
})();
if(inst_28793){
var statearr_28817_28843 = state_28811__$1;
(statearr_28817_28843[(1)] = (5));

} else {
var statearr_28818_28844 = state_28811__$1;
(statearr_28818_28844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (6))){
var state_28811__$1 = state_28811;
var statearr_28819_28845 = state_28811__$1;
(statearr_28819_28845[(2)] = null);

(statearr_28819_28845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (3))){
var inst_28808 = (state_28811[(2)]);
var inst_28809 = cljs.core.async.close_BANG_.call(null,out);
var state_28811__$1 = (function (){var statearr_28820 = state_28811;
(statearr_28820[(9)] = inst_28808);

return statearr_28820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28811__$1,inst_28809);
} else {
if((state_val_28812 === (2))){
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28811__$1,(4),ch);
} else {
if((state_val_28812 === (11))){
var inst_28791 = (state_28811[(8)]);
var inst_28800 = (state_28811[(2)]);
var inst_28788 = inst_28791;
var state_28811__$1 = (function (){var statearr_28821 = state_28811;
(statearr_28821[(7)] = inst_28788);

(statearr_28821[(10)] = inst_28800);

return statearr_28821;
})();
var statearr_28822_28846 = state_28811__$1;
(statearr_28822_28846[(2)] = null);

(statearr_28822_28846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (9))){
var inst_28791 = (state_28811[(8)]);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28811__$1,(11),out,inst_28791);
} else {
if((state_val_28812 === (5))){
var inst_28791 = (state_28811[(8)]);
var inst_28788 = (state_28811[(7)]);
var inst_28795 = cljs.core._EQ_.call(null,inst_28791,inst_28788);
var state_28811__$1 = state_28811;
if(inst_28795){
var statearr_28824_28847 = state_28811__$1;
(statearr_28824_28847[(1)] = (8));

} else {
var statearr_28825_28848 = state_28811__$1;
(statearr_28825_28848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (10))){
var inst_28803 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28826_28849 = state_28811__$1;
(statearr_28826_28849[(2)] = inst_28803);

(statearr_28826_28849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (8))){
var inst_28788 = (state_28811[(7)]);
var tmp28823 = inst_28788;
var inst_28788__$1 = tmp28823;
var state_28811__$1 = (function (){var statearr_28827 = state_28811;
(statearr_28827[(7)] = inst_28788__$1);

return statearr_28827;
})();
var statearr_28828_28850 = state_28811__$1;
(statearr_28828_28850[(2)] = null);

(statearr_28828_28850[(1)] = (2));


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
});})(c__26267__auto___28840,out))
;
return ((function (switch__26155__auto__,c__26267__auto___28840,out){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_28832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28832[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_28832[(1)] = (1));

return statearr_28832;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_28811){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e28833){if((e28833 instanceof Object)){
var ex__26159__auto__ = e28833;
var statearr_28834_28851 = state_28811;
(statearr_28834_28851[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28852 = state_28811;
state_28811 = G__28852;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_28811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_28811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___28840,out))
})();
var state__26269__auto__ = (function (){var statearr_28835 = f__26268__auto__.call(null);
(statearr_28835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___28840);

return statearr_28835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___28840,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28853 = [];
var len__19441__auto___28923 = arguments.length;
var i__19442__auto___28924 = (0);
while(true){
if((i__19442__auto___28924 < len__19441__auto___28923)){
args28853.push((arguments[i__19442__auto___28924]));

var G__28925 = (i__19442__auto___28924 + (1));
i__19442__auto___28924 = G__28925;
continue;
} else {
}
break;
}

var G__28855 = args28853.length;
switch (G__28855) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28853.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26267__auto___28927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___28927,out){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___28927,out){
return (function (state_28893){
var state_val_28894 = (state_28893[(1)]);
if((state_val_28894 === (7))){
var inst_28889 = (state_28893[(2)]);
var state_28893__$1 = state_28893;
var statearr_28895_28928 = state_28893__$1;
(statearr_28895_28928[(2)] = inst_28889);

(statearr_28895_28928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (1))){
var inst_28856 = (new Array(n));
var inst_28857 = inst_28856;
var inst_28858 = (0);
var state_28893__$1 = (function (){var statearr_28896 = state_28893;
(statearr_28896[(7)] = inst_28857);

(statearr_28896[(8)] = inst_28858);

return statearr_28896;
})();
var statearr_28897_28929 = state_28893__$1;
(statearr_28897_28929[(2)] = null);

(statearr_28897_28929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (4))){
var inst_28861 = (state_28893[(9)]);
var inst_28861__$1 = (state_28893[(2)]);
var inst_28862 = (inst_28861__$1 == null);
var inst_28863 = cljs.core.not.call(null,inst_28862);
var state_28893__$1 = (function (){var statearr_28898 = state_28893;
(statearr_28898[(9)] = inst_28861__$1);

return statearr_28898;
})();
if(inst_28863){
var statearr_28899_28930 = state_28893__$1;
(statearr_28899_28930[(1)] = (5));

} else {
var statearr_28900_28931 = state_28893__$1;
(statearr_28900_28931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (15))){
var inst_28883 = (state_28893[(2)]);
var state_28893__$1 = state_28893;
var statearr_28901_28932 = state_28893__$1;
(statearr_28901_28932[(2)] = inst_28883);

(statearr_28901_28932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (13))){
var state_28893__$1 = state_28893;
var statearr_28902_28933 = state_28893__$1;
(statearr_28902_28933[(2)] = null);

(statearr_28902_28933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (6))){
var inst_28858 = (state_28893[(8)]);
var inst_28879 = (inst_28858 > (0));
var state_28893__$1 = state_28893;
if(cljs.core.truth_(inst_28879)){
var statearr_28903_28934 = state_28893__$1;
(statearr_28903_28934[(1)] = (12));

} else {
var statearr_28904_28935 = state_28893__$1;
(statearr_28904_28935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (3))){
var inst_28891 = (state_28893[(2)]);
var state_28893__$1 = state_28893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28893__$1,inst_28891);
} else {
if((state_val_28894 === (12))){
var inst_28857 = (state_28893[(7)]);
var inst_28881 = cljs.core.vec.call(null,inst_28857);
var state_28893__$1 = state_28893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28893__$1,(15),out,inst_28881);
} else {
if((state_val_28894 === (2))){
var state_28893__$1 = state_28893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28893__$1,(4),ch);
} else {
if((state_val_28894 === (11))){
var inst_28873 = (state_28893[(2)]);
var inst_28874 = (new Array(n));
var inst_28857 = inst_28874;
var inst_28858 = (0);
var state_28893__$1 = (function (){var statearr_28905 = state_28893;
(statearr_28905[(10)] = inst_28873);

(statearr_28905[(7)] = inst_28857);

(statearr_28905[(8)] = inst_28858);

return statearr_28905;
})();
var statearr_28906_28936 = state_28893__$1;
(statearr_28906_28936[(2)] = null);

(statearr_28906_28936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (9))){
var inst_28857 = (state_28893[(7)]);
var inst_28871 = cljs.core.vec.call(null,inst_28857);
var state_28893__$1 = state_28893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28893__$1,(11),out,inst_28871);
} else {
if((state_val_28894 === (5))){
var inst_28866 = (state_28893[(11)]);
var inst_28857 = (state_28893[(7)]);
var inst_28858 = (state_28893[(8)]);
var inst_28861 = (state_28893[(9)]);
var inst_28865 = (inst_28857[inst_28858] = inst_28861);
var inst_28866__$1 = (inst_28858 + (1));
var inst_28867 = (inst_28866__$1 < n);
var state_28893__$1 = (function (){var statearr_28907 = state_28893;
(statearr_28907[(11)] = inst_28866__$1);

(statearr_28907[(12)] = inst_28865);

return statearr_28907;
})();
if(cljs.core.truth_(inst_28867)){
var statearr_28908_28937 = state_28893__$1;
(statearr_28908_28937[(1)] = (8));

} else {
var statearr_28909_28938 = state_28893__$1;
(statearr_28909_28938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (14))){
var inst_28886 = (state_28893[(2)]);
var inst_28887 = cljs.core.async.close_BANG_.call(null,out);
var state_28893__$1 = (function (){var statearr_28911 = state_28893;
(statearr_28911[(13)] = inst_28886);

return statearr_28911;
})();
var statearr_28912_28939 = state_28893__$1;
(statearr_28912_28939[(2)] = inst_28887);

(statearr_28912_28939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (10))){
var inst_28877 = (state_28893[(2)]);
var state_28893__$1 = state_28893;
var statearr_28913_28940 = state_28893__$1;
(statearr_28913_28940[(2)] = inst_28877);

(statearr_28913_28940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (8))){
var inst_28866 = (state_28893[(11)]);
var inst_28857 = (state_28893[(7)]);
var tmp28910 = inst_28857;
var inst_28857__$1 = tmp28910;
var inst_28858 = inst_28866;
var state_28893__$1 = (function (){var statearr_28914 = state_28893;
(statearr_28914[(7)] = inst_28857__$1);

(statearr_28914[(8)] = inst_28858);

return statearr_28914;
})();
var statearr_28915_28941 = state_28893__$1;
(statearr_28915_28941[(2)] = null);

(statearr_28915_28941[(1)] = (2));


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
});})(c__26267__auto___28927,out))
;
return ((function (switch__26155__auto__,c__26267__auto___28927,out){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_28919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28919[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_28919[(1)] = (1));

return statearr_28919;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_28893){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e28920){if((e28920 instanceof Object)){
var ex__26159__auto__ = e28920;
var statearr_28921_28942 = state_28893;
(statearr_28921_28942[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28943 = state_28893;
state_28893 = G__28943;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_28893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_28893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___28927,out))
})();
var state__26269__auto__ = (function (){var statearr_28922 = f__26268__auto__.call(null);
(statearr_28922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___28927);

return statearr_28922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___28927,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28944 = [];
var len__19441__auto___29018 = arguments.length;
var i__19442__auto___29019 = (0);
while(true){
if((i__19442__auto___29019 < len__19441__auto___29018)){
args28944.push((arguments[i__19442__auto___29019]));

var G__29020 = (i__19442__auto___29019 + (1));
i__19442__auto___29019 = G__29020;
continue;
} else {
}
break;
}

var G__28946 = args28944.length;
switch (G__28946) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28944.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26267__auto___29022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___29022,out){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___29022,out){
return (function (state_28988){
var state_val_28989 = (state_28988[(1)]);
if((state_val_28989 === (7))){
var inst_28984 = (state_28988[(2)]);
var state_28988__$1 = state_28988;
var statearr_28990_29023 = state_28988__$1;
(statearr_28990_29023[(2)] = inst_28984);

(statearr_28990_29023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (1))){
var inst_28947 = [];
var inst_28948 = inst_28947;
var inst_28949 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28988__$1 = (function (){var statearr_28991 = state_28988;
(statearr_28991[(7)] = inst_28949);

(statearr_28991[(8)] = inst_28948);

return statearr_28991;
})();
var statearr_28992_29024 = state_28988__$1;
(statearr_28992_29024[(2)] = null);

(statearr_28992_29024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (4))){
var inst_28952 = (state_28988[(9)]);
var inst_28952__$1 = (state_28988[(2)]);
var inst_28953 = (inst_28952__$1 == null);
var inst_28954 = cljs.core.not.call(null,inst_28953);
var state_28988__$1 = (function (){var statearr_28993 = state_28988;
(statearr_28993[(9)] = inst_28952__$1);

return statearr_28993;
})();
if(inst_28954){
var statearr_28994_29025 = state_28988__$1;
(statearr_28994_29025[(1)] = (5));

} else {
var statearr_28995_29026 = state_28988__$1;
(statearr_28995_29026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (15))){
var inst_28978 = (state_28988[(2)]);
var state_28988__$1 = state_28988;
var statearr_28996_29027 = state_28988__$1;
(statearr_28996_29027[(2)] = inst_28978);

(statearr_28996_29027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (13))){
var state_28988__$1 = state_28988;
var statearr_28997_29028 = state_28988__$1;
(statearr_28997_29028[(2)] = null);

(statearr_28997_29028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (6))){
var inst_28948 = (state_28988[(8)]);
var inst_28973 = inst_28948.length;
var inst_28974 = (inst_28973 > (0));
var state_28988__$1 = state_28988;
if(cljs.core.truth_(inst_28974)){
var statearr_28998_29029 = state_28988__$1;
(statearr_28998_29029[(1)] = (12));

} else {
var statearr_28999_29030 = state_28988__$1;
(statearr_28999_29030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (3))){
var inst_28986 = (state_28988[(2)]);
var state_28988__$1 = state_28988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28988__$1,inst_28986);
} else {
if((state_val_28989 === (12))){
var inst_28948 = (state_28988[(8)]);
var inst_28976 = cljs.core.vec.call(null,inst_28948);
var state_28988__$1 = state_28988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28988__$1,(15),out,inst_28976);
} else {
if((state_val_28989 === (2))){
var state_28988__$1 = state_28988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28988__$1,(4),ch);
} else {
if((state_val_28989 === (11))){
var inst_28952 = (state_28988[(9)]);
var inst_28956 = (state_28988[(10)]);
var inst_28966 = (state_28988[(2)]);
var inst_28967 = [];
var inst_28968 = inst_28967.push(inst_28952);
var inst_28948 = inst_28967;
var inst_28949 = inst_28956;
var state_28988__$1 = (function (){var statearr_29000 = state_28988;
(statearr_29000[(7)] = inst_28949);

(statearr_29000[(11)] = inst_28968);

(statearr_29000[(8)] = inst_28948);

(statearr_29000[(12)] = inst_28966);

return statearr_29000;
})();
var statearr_29001_29031 = state_28988__$1;
(statearr_29001_29031[(2)] = null);

(statearr_29001_29031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (9))){
var inst_28948 = (state_28988[(8)]);
var inst_28964 = cljs.core.vec.call(null,inst_28948);
var state_28988__$1 = state_28988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28988__$1,(11),out,inst_28964);
} else {
if((state_val_28989 === (5))){
var inst_28949 = (state_28988[(7)]);
var inst_28952 = (state_28988[(9)]);
var inst_28956 = (state_28988[(10)]);
var inst_28956__$1 = f.call(null,inst_28952);
var inst_28957 = cljs.core._EQ_.call(null,inst_28956__$1,inst_28949);
var inst_28958 = cljs.core.keyword_identical_QMARK_.call(null,inst_28949,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28959 = (inst_28957) || (inst_28958);
var state_28988__$1 = (function (){var statearr_29002 = state_28988;
(statearr_29002[(10)] = inst_28956__$1);

return statearr_29002;
})();
if(cljs.core.truth_(inst_28959)){
var statearr_29003_29032 = state_28988__$1;
(statearr_29003_29032[(1)] = (8));

} else {
var statearr_29004_29033 = state_28988__$1;
(statearr_29004_29033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (14))){
var inst_28981 = (state_28988[(2)]);
var inst_28982 = cljs.core.async.close_BANG_.call(null,out);
var state_28988__$1 = (function (){var statearr_29006 = state_28988;
(statearr_29006[(13)] = inst_28981);

return statearr_29006;
})();
var statearr_29007_29034 = state_28988__$1;
(statearr_29007_29034[(2)] = inst_28982);

(statearr_29007_29034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (10))){
var inst_28971 = (state_28988[(2)]);
var state_28988__$1 = state_28988;
var statearr_29008_29035 = state_28988__$1;
(statearr_29008_29035[(2)] = inst_28971);

(statearr_29008_29035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28989 === (8))){
var inst_28952 = (state_28988[(9)]);
var inst_28948 = (state_28988[(8)]);
var inst_28956 = (state_28988[(10)]);
var inst_28961 = inst_28948.push(inst_28952);
var tmp29005 = inst_28948;
var inst_28948__$1 = tmp29005;
var inst_28949 = inst_28956;
var state_28988__$1 = (function (){var statearr_29009 = state_28988;
(statearr_29009[(7)] = inst_28949);

(statearr_29009[(8)] = inst_28948__$1);

(statearr_29009[(14)] = inst_28961);

return statearr_29009;
})();
var statearr_29010_29036 = state_28988__$1;
(statearr_29010_29036[(2)] = null);

(statearr_29010_29036[(1)] = (2));


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
});})(c__26267__auto___29022,out))
;
return ((function (switch__26155__auto__,c__26267__auto___29022,out){
return (function() {
var cljs$core$async$state_machine__26156__auto__ = null;
var cljs$core$async$state_machine__26156__auto____0 = (function (){
var statearr_29014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29014[(0)] = cljs$core$async$state_machine__26156__auto__);

(statearr_29014[(1)] = (1));

return statearr_29014;
});
var cljs$core$async$state_machine__26156__auto____1 = (function (state_28988){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_28988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e29015){if((e29015 instanceof Object)){
var ex__26159__auto__ = e29015;
var statearr_29016_29037 = state_28988;
(statearr_29016_29037[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29038 = state_28988;
state_28988 = G__29038;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
cljs$core$async$state_machine__26156__auto__ = function(state_28988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26156__auto____1.call(this,state_28988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26156__auto____0;
cljs$core$async$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26156__auto____1;
return cljs$core$async$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___29022,out))
})();
var state__26269__auto__ = (function (){var statearr_29017 = f__26268__auto__.call(null);
(statearr_29017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___29022);

return statearr_29017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___29022,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map