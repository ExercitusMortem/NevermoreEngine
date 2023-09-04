"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65912],{22825:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new ObservableMap","params":[],"returns":[{"desc":"","lua_type":"ObservableMap<TKey, TValue>"}],"function_type":"static","source":{"line":24,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"isObservableMap","desc":"Returns whether the set is an observable map","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":78,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"ObserveKeysBrio","desc":"Observes all keys in the map","params":[],"returns":[{"desc":"","lua_type":"Observable<Brio<TKey>>"}],"function_type":"method","source":{"line":86,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"ObserveValuesBrio","desc":"Observes all keys in the map","params":[],"returns":[{"desc":"","lua_type":"Observable<Brio<TKey>>"}],"function_type":"method","source":{"line":96,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"ObservePairsBrio","desc":"Observes all keys in the map","params":[],"returns":[{"desc":"","lua_type":"Observable<Brio<(TKey, TValue)>>"}],"function_type":"method","source":{"line":106,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"Get","desc":"Returns the value for the given key","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"TValue"}],"function_type":"method","source":{"line":147,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"ContainsKey","desc":"Returns whether the map contains the key","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":158,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"GetCount","desc":"Gets the count of items in the set","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":168,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"ObserveCount","desc":"Observes the count of the set","params":[],"returns":[{"desc":"","lua_type":"Observable<number>"}],"function_type":"method","source":{"line":177,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"ObserveAtKeyBrio","desc":"Observes the value for the given key.","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"Observable<Brio<TValue>>"}],"function_type":"method","source":{"line":187,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"ObserveAtKey","desc":"Observes the value for the given key.","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"Observable<TValue?>"}],"function_type":"method","source":{"line":204,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"ObserveValueForKey","desc":"Observes the value for the given key. Alias for [ObservableMap.ObserveAtKey].","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"Observable<TValue?>"}],"function_type":"static","source":{"line":220,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"Set","desc":"Adds the item to the set if it does not exists.","params":[{"name":"key","desc":"","lua_type":"TKey"},{"name":"value","desc":"","lua_type":"TValue?"}],"returns":[{"desc":"Call to remove the value if it was added","lua_type":"callback"}],"function_type":"method","source":{"line":228,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"Remove","desc":"Removes the item from the map if it exists.","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[],"function_type":"method","source":{"line":271,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"GetValueList","desc":"Gets a list of all values.","params":[],"returns":[{"desc":"","lua_type":"{ TValue }"}],"function_type":"method","source":{"line":281,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"GetKeyList","desc":"Gets a list of all keys.","params":[],"returns":[{"desc":"","lua_type":"{ TKey }"}],"function_type":"method","source":{"line":293,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"Destroy","desc":"Cleans up the ObservableMap and sets the metatable to nil.","params":[],"returns":[],"function_type":"method","source":{"line":305,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}}],"properties":[{"name":"KeyAdded","desc":"Fires when a key is added","lua_type":"Signal<TKey>","readonly":true,"source":{"line":42,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"KeyRemoved","desc":"Fires when a key is removed","lua_type":"Signal<TKey>","readonly":true,"source":{"line":51,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"KeyValueChanged","desc":"Fires when a key value changes, including add and remove.","lua_type":"Signal<(TKey, TValue, TValue)>","readonly":true,"source":{"line":60,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}},{"name":"CountChanged","desc":"Fires when the count changes.","lua_type":"RBXScriptSignal","source":{"line":68,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}}],"types":[],"name":"ObservableMap","desc":"A list that can be observed for blend and other components","source":{"line":5,"path":"src/observablecollection/src/Shared/ObservableMap.lua"}}')}}]);