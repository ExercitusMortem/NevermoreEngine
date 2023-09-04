"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81279],{4496:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new ObservableMapList","params":[],"returns":[{"desc":"","lua_type":"ObservableMapList<TKey, TValue>"}],"function_type":"static","source":{"line":24,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"Push","desc":"Adds an entry with a dynamic key. This is great for caching things\\nthat need to be looked up by key.\\n\\n:::tip\\nIf `observeKey` emits nil then the value will be excluded from the list.\\n:::","params":[{"name":"observeKey","desc":"","lua_type":"Observable<TKey>"},{"name":"entry","desc":"","lua_type":"TValue"}],"returns":[{"desc":"Cleanup object that will remove the entry","lua_type":"MaidTask"}],"function_type":"method","source":{"line":45,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"GetListCount","desc":"Gets how many lists exist","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":88,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"ObserveListCount","desc":"Observes how many lists exist","params":[],"returns":[{"desc":"","lua_type":"Observable<number>"}],"function_type":"method","source":{"line":96,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"GetAtListIndex","desc":"Gets the current value at the list index","params":[{"name":"key","desc":"","lua_type":"TKey"},{"name":"index","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Observable<TValue?>"}],"function_type":"method","source":{"line":107,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"ObserveAtListIndex","desc":"Observes the current value at the index","params":[{"name":"key","desc":"","lua_type":"TKey"},{"name":"index","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Observable<TValue?>"}],"function_type":"method","source":{"line":126,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"GetKeyList","desc":"Gets a list of all keys","params":[],"returns":[{"desc":"","lua_type":"{ TKey }"}],"function_type":"method","source":{"line":146,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"ObserveKeysBrio","desc":"Observes all keys in the map","params":[],"returns":[{"desc":"","lua_type":"Observable<Brio<TKey>>"}],"function_type":"method","source":{"line":155,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"ObserveAtListIndexBrio","desc":"Observes the current value at the index","params":[{"name":"key","desc":"","lua_type":"TKey"},{"name":"index","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Observable<Brio<TValue>>"}],"function_type":"method","source":{"line":166,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"ObserveItemsForKeyBrio","desc":"Observes all items at the given key","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"Observable<Brio<TValue>>"}],"function_type":"method","source":{"line":187,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"GetListForKey","desc":"Gets a list for a given key.","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"{ TValue }"}],"function_type":"method","source":{"line":207,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"GetListForKey","desc":"Gets the observable list for the given key","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"ObservableList<TValue>"}],"function_type":"method","source":{"line":223,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}},{"name":"Destroy","desc":"Cleans up the ObservableMapList and sets the metatable to nil.","params":[],"returns":[],"function_type":"method","source":{"line":297,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}}],"properties":[],"types":[],"name":"ObservableMapList","desc":"Holds a map of lists. This is good for list-based","source":{"line":6,"path":"src/observablecollection/src/Shared/ObservableMapList.lua"}}')}}]);