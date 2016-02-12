// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18383__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18383__auto__){
return or__18383__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18383__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29295_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29295_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29300 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29301 = null;
var count__29302 = (0);
var i__29303 = (0);
while(true){
if((i__29303 < count__29302)){
var n = cljs.core._nth.call(null,chunk__29301,i__29303);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29304 = seq__29300;
var G__29305 = chunk__29301;
var G__29306 = count__29302;
var G__29307 = (i__29303 + (1));
seq__29300 = G__29304;
chunk__29301 = G__29305;
count__29302 = G__29306;
i__29303 = G__29307;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29300);
if(temp__4657__auto__){
var seq__29300__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29300__$1)){
var c__19186__auto__ = cljs.core.chunk_first.call(null,seq__29300__$1);
var G__29308 = cljs.core.chunk_rest.call(null,seq__29300__$1);
var G__29309 = c__19186__auto__;
var G__29310 = cljs.core.count.call(null,c__19186__auto__);
var G__29311 = (0);
seq__29300 = G__29308;
chunk__29301 = G__29309;
count__29302 = G__29310;
i__29303 = G__29311;
continue;
} else {
var n = cljs.core.first.call(null,seq__29300__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29312 = cljs.core.next.call(null,seq__29300__$1);
var G__29313 = null;
var G__29314 = (0);
var G__29315 = (0);
seq__29300 = G__29312;
chunk__29301 = G__29313;
count__29302 = G__29314;
i__29303 = G__29315;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29354_29361 = cljs.core.seq.call(null,deps);
var chunk__29355_29362 = null;
var count__29356_29363 = (0);
var i__29357_29364 = (0);
while(true){
if((i__29357_29364 < count__29356_29363)){
var dep_29365 = cljs.core._nth.call(null,chunk__29355_29362,i__29357_29364);
topo_sort_helper_STAR_.call(null,dep_29365,(depth + (1)),state);

var G__29366 = seq__29354_29361;
var G__29367 = chunk__29355_29362;
var G__29368 = count__29356_29363;
var G__29369 = (i__29357_29364 + (1));
seq__29354_29361 = G__29366;
chunk__29355_29362 = G__29367;
count__29356_29363 = G__29368;
i__29357_29364 = G__29369;
continue;
} else {
var temp__4657__auto___29370 = cljs.core.seq.call(null,seq__29354_29361);
if(temp__4657__auto___29370){
var seq__29354_29371__$1 = temp__4657__auto___29370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29354_29371__$1)){
var c__19186__auto___29372 = cljs.core.chunk_first.call(null,seq__29354_29371__$1);
var G__29373 = cljs.core.chunk_rest.call(null,seq__29354_29371__$1);
var G__29374 = c__19186__auto___29372;
var G__29375 = cljs.core.count.call(null,c__19186__auto___29372);
var G__29376 = (0);
seq__29354_29361 = G__29373;
chunk__29355_29362 = G__29374;
count__29356_29363 = G__29375;
i__29357_29364 = G__29376;
continue;
} else {
var dep_29377 = cljs.core.first.call(null,seq__29354_29371__$1);
topo_sort_helper_STAR_.call(null,dep_29377,(depth + (1)),state);

var G__29378 = cljs.core.next.call(null,seq__29354_29371__$1);
var G__29379 = null;
var G__29380 = (0);
var G__29381 = (0);
seq__29354_29361 = G__29378;
chunk__29355_29362 = G__29379;
count__29356_29363 = G__29380;
i__29357_29364 = G__29381;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29358){
var vec__29360 = p__29358;
var x = cljs.core.nth.call(null,vec__29360,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29360,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29360,x,xs,get_deps__$1){
return (function (p1__29316_SHARP_){
return clojure.set.difference.call(null,p1__29316_SHARP_,x);
});})(vec__29360,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29394 = cljs.core.seq.call(null,provides);
var chunk__29395 = null;
var count__29396 = (0);
var i__29397 = (0);
while(true){
if((i__29397 < count__29396)){
var prov = cljs.core._nth.call(null,chunk__29395,i__29397);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29398_29406 = cljs.core.seq.call(null,requires);
var chunk__29399_29407 = null;
var count__29400_29408 = (0);
var i__29401_29409 = (0);
while(true){
if((i__29401_29409 < count__29400_29408)){
var req_29410 = cljs.core._nth.call(null,chunk__29399_29407,i__29401_29409);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29410,prov);

var G__29411 = seq__29398_29406;
var G__29412 = chunk__29399_29407;
var G__29413 = count__29400_29408;
var G__29414 = (i__29401_29409 + (1));
seq__29398_29406 = G__29411;
chunk__29399_29407 = G__29412;
count__29400_29408 = G__29413;
i__29401_29409 = G__29414;
continue;
} else {
var temp__4657__auto___29415 = cljs.core.seq.call(null,seq__29398_29406);
if(temp__4657__auto___29415){
var seq__29398_29416__$1 = temp__4657__auto___29415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29398_29416__$1)){
var c__19186__auto___29417 = cljs.core.chunk_first.call(null,seq__29398_29416__$1);
var G__29418 = cljs.core.chunk_rest.call(null,seq__29398_29416__$1);
var G__29419 = c__19186__auto___29417;
var G__29420 = cljs.core.count.call(null,c__19186__auto___29417);
var G__29421 = (0);
seq__29398_29406 = G__29418;
chunk__29399_29407 = G__29419;
count__29400_29408 = G__29420;
i__29401_29409 = G__29421;
continue;
} else {
var req_29422 = cljs.core.first.call(null,seq__29398_29416__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29422,prov);

var G__29423 = cljs.core.next.call(null,seq__29398_29416__$1);
var G__29424 = null;
var G__29425 = (0);
var G__29426 = (0);
seq__29398_29406 = G__29423;
chunk__29399_29407 = G__29424;
count__29400_29408 = G__29425;
i__29401_29409 = G__29426;
continue;
}
} else {
}
}
break;
}

var G__29427 = seq__29394;
var G__29428 = chunk__29395;
var G__29429 = count__29396;
var G__29430 = (i__29397 + (1));
seq__29394 = G__29427;
chunk__29395 = G__29428;
count__29396 = G__29429;
i__29397 = G__29430;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29394);
if(temp__4657__auto__){
var seq__29394__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29394__$1)){
var c__19186__auto__ = cljs.core.chunk_first.call(null,seq__29394__$1);
var G__29431 = cljs.core.chunk_rest.call(null,seq__29394__$1);
var G__29432 = c__19186__auto__;
var G__29433 = cljs.core.count.call(null,c__19186__auto__);
var G__29434 = (0);
seq__29394 = G__29431;
chunk__29395 = G__29432;
count__29396 = G__29433;
i__29397 = G__29434;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29394__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29402_29435 = cljs.core.seq.call(null,requires);
var chunk__29403_29436 = null;
var count__29404_29437 = (0);
var i__29405_29438 = (0);
while(true){
if((i__29405_29438 < count__29404_29437)){
var req_29439 = cljs.core._nth.call(null,chunk__29403_29436,i__29405_29438);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29439,prov);

var G__29440 = seq__29402_29435;
var G__29441 = chunk__29403_29436;
var G__29442 = count__29404_29437;
var G__29443 = (i__29405_29438 + (1));
seq__29402_29435 = G__29440;
chunk__29403_29436 = G__29441;
count__29404_29437 = G__29442;
i__29405_29438 = G__29443;
continue;
} else {
var temp__4657__auto___29444__$1 = cljs.core.seq.call(null,seq__29402_29435);
if(temp__4657__auto___29444__$1){
var seq__29402_29445__$1 = temp__4657__auto___29444__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29402_29445__$1)){
var c__19186__auto___29446 = cljs.core.chunk_first.call(null,seq__29402_29445__$1);
var G__29447 = cljs.core.chunk_rest.call(null,seq__29402_29445__$1);
var G__29448 = c__19186__auto___29446;
var G__29449 = cljs.core.count.call(null,c__19186__auto___29446);
var G__29450 = (0);
seq__29402_29435 = G__29447;
chunk__29403_29436 = G__29448;
count__29404_29437 = G__29449;
i__29405_29438 = G__29450;
continue;
} else {
var req_29451 = cljs.core.first.call(null,seq__29402_29445__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29451,prov);

var G__29452 = cljs.core.next.call(null,seq__29402_29445__$1);
var G__29453 = null;
var G__29454 = (0);
var G__29455 = (0);
seq__29402_29435 = G__29452;
chunk__29403_29436 = G__29453;
count__29404_29437 = G__29454;
i__29405_29438 = G__29455;
continue;
}
} else {
}
}
break;
}

var G__29456 = cljs.core.next.call(null,seq__29394__$1);
var G__29457 = null;
var G__29458 = (0);
var G__29459 = (0);
seq__29394 = G__29456;
chunk__29395 = G__29457;
count__29396 = G__29458;
i__29397 = G__29459;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29464_29468 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29465_29469 = null;
var count__29466_29470 = (0);
var i__29467_29471 = (0);
while(true){
if((i__29467_29471 < count__29466_29470)){
var ns_29472 = cljs.core._nth.call(null,chunk__29465_29469,i__29467_29471);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29472);

var G__29473 = seq__29464_29468;
var G__29474 = chunk__29465_29469;
var G__29475 = count__29466_29470;
var G__29476 = (i__29467_29471 + (1));
seq__29464_29468 = G__29473;
chunk__29465_29469 = G__29474;
count__29466_29470 = G__29475;
i__29467_29471 = G__29476;
continue;
} else {
var temp__4657__auto___29477 = cljs.core.seq.call(null,seq__29464_29468);
if(temp__4657__auto___29477){
var seq__29464_29478__$1 = temp__4657__auto___29477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29464_29478__$1)){
var c__19186__auto___29479 = cljs.core.chunk_first.call(null,seq__29464_29478__$1);
var G__29480 = cljs.core.chunk_rest.call(null,seq__29464_29478__$1);
var G__29481 = c__19186__auto___29479;
var G__29482 = cljs.core.count.call(null,c__19186__auto___29479);
var G__29483 = (0);
seq__29464_29468 = G__29480;
chunk__29465_29469 = G__29481;
count__29466_29470 = G__29482;
i__29467_29471 = G__29483;
continue;
} else {
var ns_29484 = cljs.core.first.call(null,seq__29464_29478__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29484);

var G__29485 = cljs.core.next.call(null,seq__29464_29478__$1);
var G__29486 = null;
var G__29487 = (0);
var G__29488 = (0);
seq__29464_29468 = G__29485;
chunk__29465_29469 = G__29486;
count__29466_29470 = G__29487;
i__29467_29471 = G__29488;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18383__auto__ = goog.require__;
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29489__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29490__i = 0, G__29490__a = new Array(arguments.length -  0);
while (G__29490__i < G__29490__a.length) {G__29490__a[G__29490__i] = arguments[G__29490__i + 0]; ++G__29490__i;}
  args = new cljs.core.IndexedSeq(G__29490__a,0);
} 
return G__29489__delegate.call(this,args);};
G__29489.cljs$lang$maxFixedArity = 0;
G__29489.cljs$lang$applyTo = (function (arglist__29491){
var args = cljs.core.seq(arglist__29491);
return G__29489__delegate(args);
});
G__29489.cljs$core$IFn$_invoke$arity$variadic = G__29489__delegate;
return G__29489;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29493 = cljs.core._EQ_;
var expr__29494 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29493.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29494))){
var path_parts = ((function (pred__29493,expr__29494){
return (function (p1__29492_SHARP_){
return clojure.string.split.call(null,p1__29492_SHARP_,/[\/\\]/);
});})(pred__29493,expr__29494))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29493,expr__29494){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29496){if((e29496 instanceof Error)){
var e = e29496;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29496;

}
}})());
});
;})(path_parts,sep,root,pred__29493,expr__29494))
} else {
if(cljs.core.truth_(pred__29493.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29494))){
return ((function (pred__29493,expr__29494){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29493,expr__29494){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29493,expr__29494))
);

return deferred.addErrback(((function (deferred,pred__29493,expr__29494){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29493,expr__29494))
);
});
;})(pred__29493,expr__29494))
} else {
return ((function (pred__29493,expr__29494){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29493,expr__29494))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29497,callback){
var map__29500 = p__29497;
var map__29500__$1 = ((((!((map__29500 == null)))?((((map__29500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29500):map__29500);
var file_msg = map__29500__$1;
var request_url = cljs.core.get.call(null,map__29500__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29500,map__29500__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29500,map__29500__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__){
return (function (state_29524){
var state_val_29525 = (state_29524[(1)]);
if((state_val_29525 === (7))){
var inst_29520 = (state_29524[(2)]);
var state_29524__$1 = state_29524;
var statearr_29526_29546 = state_29524__$1;
(statearr_29526_29546[(2)] = inst_29520);

(statearr_29526_29546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (1))){
var state_29524__$1 = state_29524;
var statearr_29527_29547 = state_29524__$1;
(statearr_29527_29547[(2)] = null);

(statearr_29527_29547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (4))){
var inst_29504 = (state_29524[(7)]);
var inst_29504__$1 = (state_29524[(2)]);
var state_29524__$1 = (function (){var statearr_29528 = state_29524;
(statearr_29528[(7)] = inst_29504__$1);

return statearr_29528;
})();
if(cljs.core.truth_(inst_29504__$1)){
var statearr_29529_29548 = state_29524__$1;
(statearr_29529_29548[(1)] = (5));

} else {
var statearr_29530_29549 = state_29524__$1;
(statearr_29530_29549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (6))){
var state_29524__$1 = state_29524;
var statearr_29531_29550 = state_29524__$1;
(statearr_29531_29550[(2)] = null);

(statearr_29531_29550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (3))){
var inst_29522 = (state_29524[(2)]);
var state_29524__$1 = state_29524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29524__$1,inst_29522);
} else {
if((state_val_29525 === (2))){
var state_29524__$1 = state_29524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29524__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29525 === (11))){
var inst_29516 = (state_29524[(2)]);
var state_29524__$1 = (function (){var statearr_29532 = state_29524;
(statearr_29532[(8)] = inst_29516);

return statearr_29532;
})();
var statearr_29533_29551 = state_29524__$1;
(statearr_29533_29551[(2)] = null);

(statearr_29533_29551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (9))){
var inst_29508 = (state_29524[(9)]);
var inst_29510 = (state_29524[(10)]);
var inst_29512 = inst_29510.call(null,inst_29508);
var state_29524__$1 = state_29524;
var statearr_29534_29552 = state_29524__$1;
(statearr_29534_29552[(2)] = inst_29512);

(statearr_29534_29552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (5))){
var inst_29504 = (state_29524[(7)]);
var inst_29506 = figwheel.client.file_reloading.blocking_load.call(null,inst_29504);
var state_29524__$1 = state_29524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29524__$1,(8),inst_29506);
} else {
if((state_val_29525 === (10))){
var inst_29508 = (state_29524[(9)]);
var inst_29514 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29508);
var state_29524__$1 = state_29524;
var statearr_29535_29553 = state_29524__$1;
(statearr_29535_29553[(2)] = inst_29514);

(statearr_29535_29553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29525 === (8))){
var inst_29504 = (state_29524[(7)]);
var inst_29510 = (state_29524[(10)]);
var inst_29508 = (state_29524[(2)]);
var inst_29509 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29510__$1 = cljs.core.get.call(null,inst_29509,inst_29504);
var state_29524__$1 = (function (){var statearr_29536 = state_29524;
(statearr_29536[(9)] = inst_29508);

(statearr_29536[(10)] = inst_29510__$1);

return statearr_29536;
})();
if(cljs.core.truth_(inst_29510__$1)){
var statearr_29537_29554 = state_29524__$1;
(statearr_29537_29554[(1)] = (9));

} else {
var statearr_29538_29555 = state_29524__$1;
(statearr_29538_29555[(1)] = (10));

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
});})(c__26267__auto__))
;
return ((function (switch__26155__auto__,c__26267__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26156__auto__ = null;
var figwheel$client$file_reloading$state_machine__26156__auto____0 = (function (){
var statearr_29542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29542[(0)] = figwheel$client$file_reloading$state_machine__26156__auto__);

(statearr_29542[(1)] = (1));

return statearr_29542;
});
var figwheel$client$file_reloading$state_machine__26156__auto____1 = (function (state_29524){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_29524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e29543){if((e29543 instanceof Object)){
var ex__26159__auto__ = e29543;
var statearr_29544_29556 = state_29524;
(statearr_29544_29556[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29557 = state_29524;
state_29524 = G__29557;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26156__auto__ = function(state_29524){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26156__auto____1.call(this,state_29524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26156__auto____0;
figwheel$client$file_reloading$state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26156__auto____1;
return figwheel$client$file_reloading$state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__))
})();
var state__26269__auto__ = (function (){var statearr_29545 = f__26268__auto__.call(null);
(statearr_29545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_29545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__))
);

return c__26267__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29558,callback){
var map__29561 = p__29558;
var map__29561__$1 = ((((!((map__29561 == null)))?((((map__29561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29561):map__29561);
var file_msg = map__29561__$1;
var namespace = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29561,map__29561__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29561,map__29561__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29563){
var map__29566 = p__29563;
var map__29566__$1 = ((((!((map__29566 == null)))?((((map__29566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29566):map__29566);
var file_msg = map__29566__$1;
var namespace = cljs.core.get.call(null,map__29566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18371__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18371__auto__){
var or__18383__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18383__auto__)){
return or__18383__auto__;
} else {
var or__18383__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18383__auto____$1)){
return or__18383__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18371__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29568,callback){
var map__29571 = p__29568;
var map__29571__$1 = ((((!((map__29571 == null)))?((((map__29571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29571):map__29571);
var file_msg = map__29571__$1;
var request_url = cljs.core.get.call(null,map__29571__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29571__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26267__auto___29659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto___29659,out){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto___29659,out){
return (function (state_29641){
var state_val_29642 = (state_29641[(1)]);
if((state_val_29642 === (1))){
var inst_29619 = cljs.core.nth.call(null,files,(0),null);
var inst_29620 = cljs.core.nthnext.call(null,files,(1));
var inst_29621 = files;
var state_29641__$1 = (function (){var statearr_29643 = state_29641;
(statearr_29643[(7)] = inst_29620);

(statearr_29643[(8)] = inst_29619);

(statearr_29643[(9)] = inst_29621);

return statearr_29643;
})();
var statearr_29644_29660 = state_29641__$1;
(statearr_29644_29660[(2)] = null);

(statearr_29644_29660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (2))){
var inst_29624 = (state_29641[(10)]);
var inst_29621 = (state_29641[(9)]);
var inst_29624__$1 = cljs.core.nth.call(null,inst_29621,(0),null);
var inst_29625 = cljs.core.nthnext.call(null,inst_29621,(1));
var inst_29626 = (inst_29624__$1 == null);
var inst_29627 = cljs.core.not.call(null,inst_29626);
var state_29641__$1 = (function (){var statearr_29645 = state_29641;
(statearr_29645[(10)] = inst_29624__$1);

(statearr_29645[(11)] = inst_29625);

return statearr_29645;
})();
if(inst_29627){
var statearr_29646_29661 = state_29641__$1;
(statearr_29646_29661[(1)] = (4));

} else {
var statearr_29647_29662 = state_29641__$1;
(statearr_29647_29662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (3))){
var inst_29639 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29641__$1,inst_29639);
} else {
if((state_val_29642 === (4))){
var inst_29624 = (state_29641[(10)]);
var inst_29629 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29624);
var state_29641__$1 = state_29641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29641__$1,(7),inst_29629);
} else {
if((state_val_29642 === (5))){
var inst_29635 = cljs.core.async.close_BANG_.call(null,out);
var state_29641__$1 = state_29641;
var statearr_29648_29663 = state_29641__$1;
(statearr_29648_29663[(2)] = inst_29635);

(statearr_29648_29663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (6))){
var inst_29637 = (state_29641[(2)]);
var state_29641__$1 = state_29641;
var statearr_29649_29664 = state_29641__$1;
(statearr_29649_29664[(2)] = inst_29637);

(statearr_29649_29664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29642 === (7))){
var inst_29625 = (state_29641[(11)]);
var inst_29631 = (state_29641[(2)]);
var inst_29632 = cljs.core.async.put_BANG_.call(null,out,inst_29631);
var inst_29621 = inst_29625;
var state_29641__$1 = (function (){var statearr_29650 = state_29641;
(statearr_29650[(12)] = inst_29632);

(statearr_29650[(9)] = inst_29621);

return statearr_29650;
})();
var statearr_29651_29665 = state_29641__$1;
(statearr_29651_29665[(2)] = null);

(statearr_29651_29665[(1)] = (2));


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
});})(c__26267__auto___29659,out))
;
return ((function (switch__26155__auto__,c__26267__auto___29659,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto____0 = (function (){
var statearr_29655 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29655[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto__);

(statearr_29655[(1)] = (1));

return statearr_29655;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto____1 = (function (state_29641){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_29641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e29656){if((e29656 instanceof Object)){
var ex__26159__auto__ = e29656;
var statearr_29657_29666 = state_29641;
(statearr_29657_29666[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29667 = state_29641;
state_29641 = G__29667;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto__ = function(state_29641){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto____1.call(this,state_29641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto___29659,out))
})();
var state__26269__auto__ = (function (){var statearr_29658 = f__26268__auto__.call(null);
(statearr_29658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto___29659);

return statearr_29658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto___29659,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29668,opts){
var map__29672 = p__29668;
var map__29672__$1 = ((((!((map__29672 == null)))?((((map__29672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672):map__29672);
var eval_body__$1 = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18371__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18371__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18371__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29674){var e = e29674;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29675_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29675_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29680){
var vec__29681 = p__29680;
var k = cljs.core.nth.call(null,vec__29681,(0),null);
var v = cljs.core.nth.call(null,vec__29681,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29682){
var vec__29683 = p__29682;
var k = cljs.core.nth.call(null,vec__29683,(0),null);
var v = cljs.core.nth.call(null,vec__29683,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29687,p__29688){
var map__29935 = p__29687;
var map__29935__$1 = ((((!((map__29935 == null)))?((((map__29935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29935):map__29935);
var opts = map__29935__$1;
var before_jsload = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29936 = p__29688;
var map__29936__$1 = ((((!((map__29936 == null)))?((((map__29936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29936):map__29936);
var msg = map__29936__$1;
var files = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26267__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26268__auto__ = (function (){var switch__26155__auto__ = ((function (c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30089){
var state_val_30090 = (state_30089[(1)]);
if((state_val_30090 === (7))){
var inst_29953 = (state_30089[(7)]);
var inst_29950 = (state_30089[(8)]);
var inst_29951 = (state_30089[(9)]);
var inst_29952 = (state_30089[(10)]);
var inst_29958 = cljs.core._nth.call(null,inst_29951,inst_29953);
var inst_29959 = figwheel.client.file_reloading.eval_body.call(null,inst_29958,opts);
var inst_29960 = (inst_29953 + (1));
var tmp30091 = inst_29950;
var tmp30092 = inst_29951;
var tmp30093 = inst_29952;
var inst_29950__$1 = tmp30091;
var inst_29951__$1 = tmp30092;
var inst_29952__$1 = tmp30093;
var inst_29953__$1 = inst_29960;
var state_30089__$1 = (function (){var statearr_30094 = state_30089;
(statearr_30094[(7)] = inst_29953__$1);

(statearr_30094[(11)] = inst_29959);

(statearr_30094[(8)] = inst_29950__$1);

(statearr_30094[(9)] = inst_29951__$1);

(statearr_30094[(10)] = inst_29952__$1);

return statearr_30094;
})();
var statearr_30095_30181 = state_30089__$1;
(statearr_30095_30181[(2)] = null);

(statearr_30095_30181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (20))){
var inst_29993 = (state_30089[(12)]);
var inst_30001 = figwheel.client.file_reloading.sort_files.call(null,inst_29993);
var state_30089__$1 = state_30089;
var statearr_30096_30182 = state_30089__$1;
(statearr_30096_30182[(2)] = inst_30001);

(statearr_30096_30182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (27))){
var state_30089__$1 = state_30089;
var statearr_30097_30183 = state_30089__$1;
(statearr_30097_30183[(2)] = null);

(statearr_30097_30183[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (1))){
var inst_29942 = (state_30089[(13)]);
var inst_29939 = before_jsload.call(null,files);
var inst_29940 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29941 = (function (){return ((function (inst_29942,inst_29939,inst_29940,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29684_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29684_SHARP_);
});
;})(inst_29942,inst_29939,inst_29940,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29942__$1 = cljs.core.filter.call(null,inst_29941,files);
var inst_29943 = cljs.core.not_empty.call(null,inst_29942__$1);
var state_30089__$1 = (function (){var statearr_30098 = state_30089;
(statearr_30098[(14)] = inst_29939);

(statearr_30098[(15)] = inst_29940);

(statearr_30098[(13)] = inst_29942__$1);

return statearr_30098;
})();
if(cljs.core.truth_(inst_29943)){
var statearr_30099_30184 = state_30089__$1;
(statearr_30099_30184[(1)] = (2));

} else {
var statearr_30100_30185 = state_30089__$1;
(statearr_30100_30185[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (24))){
var state_30089__$1 = state_30089;
var statearr_30101_30186 = state_30089__$1;
(statearr_30101_30186[(2)] = null);

(statearr_30101_30186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (39))){
var inst_30043 = (state_30089[(16)]);
var state_30089__$1 = state_30089;
var statearr_30102_30187 = state_30089__$1;
(statearr_30102_30187[(2)] = inst_30043);

(statearr_30102_30187[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (46))){
var inst_30084 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30103_30188 = state_30089__$1;
(statearr_30103_30188[(2)] = inst_30084);

(statearr_30103_30188[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (4))){
var inst_29987 = (state_30089[(2)]);
var inst_29988 = cljs.core.List.EMPTY;
var inst_29989 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29988);
var inst_29990 = (function (){return ((function (inst_29987,inst_29988,inst_29989,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29685_SHARP_){
var and__18371__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29685_SHARP_);
if(cljs.core.truth_(and__18371__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29685_SHARP_));
} else {
return and__18371__auto__;
}
});
;})(inst_29987,inst_29988,inst_29989,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29991 = cljs.core.filter.call(null,inst_29990,files);
var inst_29992 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29993 = cljs.core.concat.call(null,inst_29991,inst_29992);
var state_30089__$1 = (function (){var statearr_30104 = state_30089;
(statearr_30104[(17)] = inst_29989);

(statearr_30104[(18)] = inst_29987);

(statearr_30104[(12)] = inst_29993);

return statearr_30104;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30105_30189 = state_30089__$1;
(statearr_30105_30189[(1)] = (16));

} else {
var statearr_30106_30190 = state_30089__$1;
(statearr_30106_30190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (15))){
var inst_29977 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30107_30191 = state_30089__$1;
(statearr_30107_30191[(2)] = inst_29977);

(statearr_30107_30191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (21))){
var inst_30003 = (state_30089[(19)]);
var inst_30003__$1 = (state_30089[(2)]);
var inst_30004 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30003__$1);
var state_30089__$1 = (function (){var statearr_30108 = state_30089;
(statearr_30108[(19)] = inst_30003__$1);

return statearr_30108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30089__$1,(22),inst_30004);
} else {
if((state_val_30090 === (31))){
var inst_30087 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30089__$1,inst_30087);
} else {
if((state_val_30090 === (32))){
var inst_30043 = (state_30089[(16)]);
var inst_30048 = inst_30043.cljs$lang$protocol_mask$partition0$;
var inst_30049 = (inst_30048 & (64));
var inst_30050 = inst_30043.cljs$core$ISeq$;
var inst_30051 = (inst_30049) || (inst_30050);
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_30051)){
var statearr_30109_30192 = state_30089__$1;
(statearr_30109_30192[(1)] = (35));

} else {
var statearr_30110_30193 = state_30089__$1;
(statearr_30110_30193[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (40))){
var inst_30064 = (state_30089[(20)]);
var inst_30063 = (state_30089[(2)]);
var inst_30064__$1 = cljs.core.get.call(null,inst_30063,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30065 = cljs.core.get.call(null,inst_30063,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30066 = cljs.core.not_empty.call(null,inst_30064__$1);
var state_30089__$1 = (function (){var statearr_30111 = state_30089;
(statearr_30111[(21)] = inst_30065);

(statearr_30111[(20)] = inst_30064__$1);

return statearr_30111;
})();
if(cljs.core.truth_(inst_30066)){
var statearr_30112_30194 = state_30089__$1;
(statearr_30112_30194[(1)] = (41));

} else {
var statearr_30113_30195 = state_30089__$1;
(statearr_30113_30195[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (33))){
var state_30089__$1 = state_30089;
var statearr_30114_30196 = state_30089__$1;
(statearr_30114_30196[(2)] = false);

(statearr_30114_30196[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (13))){
var inst_29963 = (state_30089[(22)]);
var inst_29967 = cljs.core.chunk_first.call(null,inst_29963);
var inst_29968 = cljs.core.chunk_rest.call(null,inst_29963);
var inst_29969 = cljs.core.count.call(null,inst_29967);
var inst_29950 = inst_29968;
var inst_29951 = inst_29967;
var inst_29952 = inst_29969;
var inst_29953 = (0);
var state_30089__$1 = (function (){var statearr_30115 = state_30089;
(statearr_30115[(7)] = inst_29953);

(statearr_30115[(8)] = inst_29950);

(statearr_30115[(9)] = inst_29951);

(statearr_30115[(10)] = inst_29952);

return statearr_30115;
})();
var statearr_30116_30197 = state_30089__$1;
(statearr_30116_30197[(2)] = null);

(statearr_30116_30197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (22))){
var inst_30011 = (state_30089[(23)]);
var inst_30006 = (state_30089[(24)]);
var inst_30003 = (state_30089[(19)]);
var inst_30007 = (state_30089[(25)]);
var inst_30006__$1 = (state_30089[(2)]);
var inst_30007__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30006__$1);
var inst_30008 = (function (){var all_files = inst_30003;
var res_SINGLEQUOTE_ = inst_30006__$1;
var res = inst_30007__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30011,inst_30006,inst_30003,inst_30007,inst_30006__$1,inst_30007__$1,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29686_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29686_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30011,inst_30006,inst_30003,inst_30007,inst_30006__$1,inst_30007__$1,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30009 = cljs.core.filter.call(null,inst_30008,inst_30006__$1);
var inst_30010 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30011__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30010);
var inst_30012 = cljs.core.not_empty.call(null,inst_30011__$1);
var state_30089__$1 = (function (){var statearr_30117 = state_30089;
(statearr_30117[(23)] = inst_30011__$1);

(statearr_30117[(24)] = inst_30006__$1);

(statearr_30117[(26)] = inst_30009);

(statearr_30117[(25)] = inst_30007__$1);

return statearr_30117;
})();
if(cljs.core.truth_(inst_30012)){
var statearr_30118_30198 = state_30089__$1;
(statearr_30118_30198[(1)] = (23));

} else {
var statearr_30119_30199 = state_30089__$1;
(statearr_30119_30199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (36))){
var state_30089__$1 = state_30089;
var statearr_30120_30200 = state_30089__$1;
(statearr_30120_30200[(2)] = false);

(statearr_30120_30200[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (41))){
var inst_30064 = (state_30089[(20)]);
var inst_30068 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30069 = cljs.core.map.call(null,inst_30068,inst_30064);
var inst_30070 = cljs.core.pr_str.call(null,inst_30069);
var inst_30071 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30070)].join('');
var inst_30072 = figwheel.client.utils.log.call(null,inst_30071);
var state_30089__$1 = state_30089;
var statearr_30121_30201 = state_30089__$1;
(statearr_30121_30201[(2)] = inst_30072);

(statearr_30121_30201[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (43))){
var inst_30065 = (state_30089[(21)]);
var inst_30075 = (state_30089[(2)]);
var inst_30076 = cljs.core.not_empty.call(null,inst_30065);
var state_30089__$1 = (function (){var statearr_30122 = state_30089;
(statearr_30122[(27)] = inst_30075);

return statearr_30122;
})();
if(cljs.core.truth_(inst_30076)){
var statearr_30123_30202 = state_30089__$1;
(statearr_30123_30202[(1)] = (44));

} else {
var statearr_30124_30203 = state_30089__$1;
(statearr_30124_30203[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (29))){
var inst_30011 = (state_30089[(23)]);
var inst_30006 = (state_30089[(24)]);
var inst_30003 = (state_30089[(19)]);
var inst_30009 = (state_30089[(26)]);
var inst_30043 = (state_30089[(16)]);
var inst_30007 = (state_30089[(25)]);
var inst_30039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30042 = (function (){var all_files = inst_30003;
var res_SINGLEQUOTE_ = inst_30006;
var res = inst_30007;
var files_not_loaded = inst_30009;
var dependencies_that_loaded = inst_30011;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30011,inst_30006,inst_30003,inst_30009,inst_30043,inst_30007,inst_30039,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30041){
var map__30125 = p__30041;
var map__30125__$1 = ((((!((map__30125 == null)))?((((map__30125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30125):map__30125);
var namespace = cljs.core.get.call(null,map__30125__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30011,inst_30006,inst_30003,inst_30009,inst_30043,inst_30007,inst_30039,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30043__$1 = cljs.core.group_by.call(null,inst_30042,inst_30009);
var inst_30045 = (inst_30043__$1 == null);
var inst_30046 = cljs.core.not.call(null,inst_30045);
var state_30089__$1 = (function (){var statearr_30127 = state_30089;
(statearr_30127[(28)] = inst_30039);

(statearr_30127[(16)] = inst_30043__$1);

return statearr_30127;
})();
if(inst_30046){
var statearr_30128_30204 = state_30089__$1;
(statearr_30128_30204[(1)] = (32));

} else {
var statearr_30129_30205 = state_30089__$1;
(statearr_30129_30205[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (44))){
var inst_30065 = (state_30089[(21)]);
var inst_30078 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30065);
var inst_30079 = cljs.core.pr_str.call(null,inst_30078);
var inst_30080 = [cljs.core.str("not required: "),cljs.core.str(inst_30079)].join('');
var inst_30081 = figwheel.client.utils.log.call(null,inst_30080);
var state_30089__$1 = state_30089;
var statearr_30130_30206 = state_30089__$1;
(statearr_30130_30206[(2)] = inst_30081);

(statearr_30130_30206[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (6))){
var inst_29984 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30131_30207 = state_30089__$1;
(statearr_30131_30207[(2)] = inst_29984);

(statearr_30131_30207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (28))){
var inst_30009 = (state_30089[(26)]);
var inst_30036 = (state_30089[(2)]);
var inst_30037 = cljs.core.not_empty.call(null,inst_30009);
var state_30089__$1 = (function (){var statearr_30132 = state_30089;
(statearr_30132[(29)] = inst_30036);

return statearr_30132;
})();
if(cljs.core.truth_(inst_30037)){
var statearr_30133_30208 = state_30089__$1;
(statearr_30133_30208[(1)] = (29));

} else {
var statearr_30134_30209 = state_30089__$1;
(statearr_30134_30209[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (25))){
var inst_30007 = (state_30089[(25)]);
var inst_30023 = (state_30089[(2)]);
var inst_30024 = cljs.core.not_empty.call(null,inst_30007);
var state_30089__$1 = (function (){var statearr_30135 = state_30089;
(statearr_30135[(30)] = inst_30023);

return statearr_30135;
})();
if(cljs.core.truth_(inst_30024)){
var statearr_30136_30210 = state_30089__$1;
(statearr_30136_30210[(1)] = (26));

} else {
var statearr_30137_30211 = state_30089__$1;
(statearr_30137_30211[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (34))){
var inst_30058 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_30058)){
var statearr_30138_30212 = state_30089__$1;
(statearr_30138_30212[(1)] = (38));

} else {
var statearr_30139_30213 = state_30089__$1;
(statearr_30139_30213[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (17))){
var state_30089__$1 = state_30089;
var statearr_30140_30214 = state_30089__$1;
(statearr_30140_30214[(2)] = recompile_dependents);

(statearr_30140_30214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (3))){
var state_30089__$1 = state_30089;
var statearr_30141_30215 = state_30089__$1;
(statearr_30141_30215[(2)] = null);

(statearr_30141_30215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (12))){
var inst_29980 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30142_30216 = state_30089__$1;
(statearr_30142_30216[(2)] = inst_29980);

(statearr_30142_30216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (2))){
var inst_29942 = (state_30089[(13)]);
var inst_29949 = cljs.core.seq.call(null,inst_29942);
var inst_29950 = inst_29949;
var inst_29951 = null;
var inst_29952 = (0);
var inst_29953 = (0);
var state_30089__$1 = (function (){var statearr_30143 = state_30089;
(statearr_30143[(7)] = inst_29953);

(statearr_30143[(8)] = inst_29950);

(statearr_30143[(9)] = inst_29951);

(statearr_30143[(10)] = inst_29952);

return statearr_30143;
})();
var statearr_30144_30217 = state_30089__$1;
(statearr_30144_30217[(2)] = null);

(statearr_30144_30217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (23))){
var inst_30011 = (state_30089[(23)]);
var inst_30006 = (state_30089[(24)]);
var inst_30003 = (state_30089[(19)]);
var inst_30009 = (state_30089[(26)]);
var inst_30007 = (state_30089[(25)]);
var inst_30014 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30016 = (function (){var all_files = inst_30003;
var res_SINGLEQUOTE_ = inst_30006;
var res = inst_30007;
var files_not_loaded = inst_30009;
var dependencies_that_loaded = inst_30011;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30011,inst_30006,inst_30003,inst_30009,inst_30007,inst_30014,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30015){
var map__30145 = p__30015;
var map__30145__$1 = ((((!((map__30145 == null)))?((((map__30145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30145):map__30145);
var request_url = cljs.core.get.call(null,map__30145__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30011,inst_30006,inst_30003,inst_30009,inst_30007,inst_30014,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30017 = cljs.core.reverse.call(null,inst_30011);
var inst_30018 = cljs.core.map.call(null,inst_30016,inst_30017);
var inst_30019 = cljs.core.pr_str.call(null,inst_30018);
var inst_30020 = figwheel.client.utils.log.call(null,inst_30019);
var state_30089__$1 = (function (){var statearr_30147 = state_30089;
(statearr_30147[(31)] = inst_30014);

return statearr_30147;
})();
var statearr_30148_30218 = state_30089__$1;
(statearr_30148_30218[(2)] = inst_30020);

(statearr_30148_30218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (35))){
var state_30089__$1 = state_30089;
var statearr_30149_30219 = state_30089__$1;
(statearr_30149_30219[(2)] = true);

(statearr_30149_30219[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (19))){
var inst_29993 = (state_30089[(12)]);
var inst_29999 = figwheel.client.file_reloading.expand_files.call(null,inst_29993);
var state_30089__$1 = state_30089;
var statearr_30150_30220 = state_30089__$1;
(statearr_30150_30220[(2)] = inst_29999);

(statearr_30150_30220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (11))){
var state_30089__$1 = state_30089;
var statearr_30151_30221 = state_30089__$1;
(statearr_30151_30221[(2)] = null);

(statearr_30151_30221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (9))){
var inst_29982 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30152_30222 = state_30089__$1;
(statearr_30152_30222[(2)] = inst_29982);

(statearr_30152_30222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (5))){
var inst_29953 = (state_30089[(7)]);
var inst_29952 = (state_30089[(10)]);
var inst_29955 = (inst_29953 < inst_29952);
var inst_29956 = inst_29955;
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_29956)){
var statearr_30153_30223 = state_30089__$1;
(statearr_30153_30223[(1)] = (7));

} else {
var statearr_30154_30224 = state_30089__$1;
(statearr_30154_30224[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (14))){
var inst_29963 = (state_30089[(22)]);
var inst_29972 = cljs.core.first.call(null,inst_29963);
var inst_29973 = figwheel.client.file_reloading.eval_body.call(null,inst_29972,opts);
var inst_29974 = cljs.core.next.call(null,inst_29963);
var inst_29950 = inst_29974;
var inst_29951 = null;
var inst_29952 = (0);
var inst_29953 = (0);
var state_30089__$1 = (function (){var statearr_30155 = state_30089;
(statearr_30155[(7)] = inst_29953);

(statearr_30155[(8)] = inst_29950);

(statearr_30155[(9)] = inst_29951);

(statearr_30155[(32)] = inst_29973);

(statearr_30155[(10)] = inst_29952);

return statearr_30155;
})();
var statearr_30156_30225 = state_30089__$1;
(statearr_30156_30225[(2)] = null);

(statearr_30156_30225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (45))){
var state_30089__$1 = state_30089;
var statearr_30157_30226 = state_30089__$1;
(statearr_30157_30226[(2)] = null);

(statearr_30157_30226[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (26))){
var inst_30011 = (state_30089[(23)]);
var inst_30006 = (state_30089[(24)]);
var inst_30003 = (state_30089[(19)]);
var inst_30009 = (state_30089[(26)]);
var inst_30007 = (state_30089[(25)]);
var inst_30026 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30028 = (function (){var all_files = inst_30003;
var res_SINGLEQUOTE_ = inst_30006;
var res = inst_30007;
var files_not_loaded = inst_30009;
var dependencies_that_loaded = inst_30011;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30011,inst_30006,inst_30003,inst_30009,inst_30007,inst_30026,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30027){
var map__30158 = p__30027;
var map__30158__$1 = ((((!((map__30158 == null)))?((((map__30158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30158):map__30158);
var namespace = cljs.core.get.call(null,map__30158__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30158__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30011,inst_30006,inst_30003,inst_30009,inst_30007,inst_30026,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30029 = cljs.core.map.call(null,inst_30028,inst_30007);
var inst_30030 = cljs.core.pr_str.call(null,inst_30029);
var inst_30031 = figwheel.client.utils.log.call(null,inst_30030);
var inst_30032 = (function (){var all_files = inst_30003;
var res_SINGLEQUOTE_ = inst_30006;
var res = inst_30007;
var files_not_loaded = inst_30009;
var dependencies_that_loaded = inst_30011;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30011,inst_30006,inst_30003,inst_30009,inst_30007,inst_30026,inst_30028,inst_30029,inst_30030,inst_30031,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30011,inst_30006,inst_30003,inst_30009,inst_30007,inst_30026,inst_30028,inst_30029,inst_30030,inst_30031,state_val_30090,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30033 = setTimeout(inst_30032,(10));
var state_30089__$1 = (function (){var statearr_30160 = state_30089;
(statearr_30160[(33)] = inst_30026);

(statearr_30160[(34)] = inst_30031);

return statearr_30160;
})();
var statearr_30161_30227 = state_30089__$1;
(statearr_30161_30227[(2)] = inst_30033);

(statearr_30161_30227[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (16))){
var state_30089__$1 = state_30089;
var statearr_30162_30228 = state_30089__$1;
(statearr_30162_30228[(2)] = reload_dependents);

(statearr_30162_30228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (38))){
var inst_30043 = (state_30089[(16)]);
var inst_30060 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30043);
var state_30089__$1 = state_30089;
var statearr_30163_30229 = state_30089__$1;
(statearr_30163_30229[(2)] = inst_30060);

(statearr_30163_30229[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (30))){
var state_30089__$1 = state_30089;
var statearr_30164_30230 = state_30089__$1;
(statearr_30164_30230[(2)] = null);

(statearr_30164_30230[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (10))){
var inst_29963 = (state_30089[(22)]);
var inst_29965 = cljs.core.chunked_seq_QMARK_.call(null,inst_29963);
var state_30089__$1 = state_30089;
if(inst_29965){
var statearr_30165_30231 = state_30089__$1;
(statearr_30165_30231[(1)] = (13));

} else {
var statearr_30166_30232 = state_30089__$1;
(statearr_30166_30232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (18))){
var inst_29997 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_29997)){
var statearr_30167_30233 = state_30089__$1;
(statearr_30167_30233[(1)] = (19));

} else {
var statearr_30168_30234 = state_30089__$1;
(statearr_30168_30234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (42))){
var state_30089__$1 = state_30089;
var statearr_30169_30235 = state_30089__$1;
(statearr_30169_30235[(2)] = null);

(statearr_30169_30235[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (37))){
var inst_30055 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30170_30236 = state_30089__$1;
(statearr_30170_30236[(2)] = inst_30055);

(statearr_30170_30236[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (8))){
var inst_29950 = (state_30089[(8)]);
var inst_29963 = (state_30089[(22)]);
var inst_29963__$1 = cljs.core.seq.call(null,inst_29950);
var state_30089__$1 = (function (){var statearr_30171 = state_30089;
(statearr_30171[(22)] = inst_29963__$1);

return statearr_30171;
})();
if(inst_29963__$1){
var statearr_30172_30237 = state_30089__$1;
(statearr_30172_30237[(1)] = (10));

} else {
var statearr_30173_30238 = state_30089__$1;
(statearr_30173_30238[(1)] = (11));

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
}
});})(c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26155__auto__,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto____0 = (function (){
var statearr_30177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30177[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto__);

(statearr_30177[(1)] = (1));

return statearr_30177;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto____1 = (function (state_30089){
while(true){
var ret_value__26157__auto__ = (function (){try{while(true){
var result__26158__auto__ = switch__26155__auto__.call(null,state_30089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26158__auto__;
}
break;
}
}catch (e30178){if((e30178 instanceof Object)){
var ex__26159__auto__ = e30178;
var statearr_30179_30239 = state_30089;
(statearr_30179_30239[(5)] = ex__26159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30240 = state_30089;
state_30089 = G__30240;
continue;
} else {
return ret_value__26157__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto__ = function(state_30089){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto____1.call(this,state_30089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26156__auto__;
})()
;})(switch__26155__auto__,c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26269__auto__ = (function (){var statearr_30180 = f__26268__auto__.call(null);
(statearr_30180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26267__auto__);

return statearr_30180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26269__auto__);
});})(c__26267__auto__,map__29935,map__29935__$1,opts,before_jsload,on_jsload,reload_dependents,map__29936,map__29936__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26267__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30243,link){
var map__30246 = p__30243;
var map__30246__$1 = ((((!((map__30246 == null)))?((((map__30246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30246):map__30246);
var file = cljs.core.get.call(null,map__30246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30246,map__30246__$1,file){
return (function (p1__30241_SHARP_,p2__30242_SHARP_){
if(cljs.core._EQ_.call(null,p1__30241_SHARP_,p2__30242_SHARP_)){
return p1__30241_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30246,map__30246__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30252){
var map__30253 = p__30252;
var map__30253__$1 = ((((!((map__30253 == null)))?((((map__30253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30253):map__30253);
var match_length = cljs.core.get.call(null,map__30253__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30253__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30248_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30248_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30255 = [];
var len__19441__auto___30258 = arguments.length;
var i__19442__auto___30259 = (0);
while(true){
if((i__19442__auto___30259 < len__19441__auto___30258)){
args30255.push((arguments[i__19442__auto___30259]));

var G__30260 = (i__19442__auto___30259 + (1));
i__19442__auto___30259 = G__30260;
continue;
} else {
}
break;
}

var G__30257 = args30255.length;
switch (G__30257) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30255.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30262_SHARP_,p2__30263_SHARP_){
return cljs.core.assoc.call(null,p1__30262_SHARP_,cljs.core.get.call(null,p2__30263_SHARP_,key),p2__30263_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30264){
var map__30267 = p__30264;
var map__30267__$1 = ((((!((map__30267 == null)))?((((map__30267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30267):map__30267);
var f_data = map__30267__$1;
var file = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30269,files_msg){
var map__30276 = p__30269;
var map__30276__$1 = ((((!((map__30276 == null)))?((((map__30276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30276):map__30276);
var opts = map__30276__$1;
var on_cssload = cljs.core.get.call(null,map__30276__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30278_30282 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30279_30283 = null;
var count__30280_30284 = (0);
var i__30281_30285 = (0);
while(true){
if((i__30281_30285 < count__30280_30284)){
var f_30286 = cljs.core._nth.call(null,chunk__30279_30283,i__30281_30285);
figwheel.client.file_reloading.reload_css_file.call(null,f_30286);

var G__30287 = seq__30278_30282;
var G__30288 = chunk__30279_30283;
var G__30289 = count__30280_30284;
var G__30290 = (i__30281_30285 + (1));
seq__30278_30282 = G__30287;
chunk__30279_30283 = G__30288;
count__30280_30284 = G__30289;
i__30281_30285 = G__30290;
continue;
} else {
var temp__4657__auto___30291 = cljs.core.seq.call(null,seq__30278_30282);
if(temp__4657__auto___30291){
var seq__30278_30292__$1 = temp__4657__auto___30291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30278_30292__$1)){
var c__19186__auto___30293 = cljs.core.chunk_first.call(null,seq__30278_30292__$1);
var G__30294 = cljs.core.chunk_rest.call(null,seq__30278_30292__$1);
var G__30295 = c__19186__auto___30293;
var G__30296 = cljs.core.count.call(null,c__19186__auto___30293);
var G__30297 = (0);
seq__30278_30282 = G__30294;
chunk__30279_30283 = G__30295;
count__30280_30284 = G__30296;
i__30281_30285 = G__30297;
continue;
} else {
var f_30298 = cljs.core.first.call(null,seq__30278_30292__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30298);

var G__30299 = cljs.core.next.call(null,seq__30278_30292__$1);
var G__30300 = null;
var G__30301 = (0);
var G__30302 = (0);
seq__30278_30282 = G__30299;
chunk__30279_30283 = G__30300;
count__30280_30284 = G__30301;
i__30281_30285 = G__30302;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30276,map__30276__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30276,map__30276__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map