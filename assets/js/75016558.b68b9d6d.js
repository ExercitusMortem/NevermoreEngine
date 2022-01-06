"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43786],{96810:function(e){e.exports=JSON.parse('{"functions":[{"name":"promiseDataStore","desc":"Promises a Roblox datastore object with the name and scope. Generally only fails\\nwhen you haven\'t published the place.","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"scope","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<DataStore>"}],"function_type":"static","source":{"line":21,"path":"src/datastore/src/Server/Utility/DataStorePromises.lua"}},{"name":"getAsync","desc":"Wraps :GetAsync() in a promise","params":[{"name":"robloxDataStore","desc":"","lua_type":"DataStore"},{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":44,"path":"src/datastore/src/Server/Utility/DataStorePromises.lua"}},{"name":"updateAsync","desc":"Wraps :UpdateAsync() in a promise","params":[{"name":"robloxDataStore","desc":"","lua_type":"DataStore"},{"name":"key","desc":"","lua_type":"string"},{"name":"updateFunc","desc":"","lua_type":"(T) -> T?"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":67,"path":"src/datastore/src/Server/Utility/DataStorePromises.lua"}},{"name":"setAsync","desc":"Wraps :SetAsync() in a promise","params":[{"name":"robloxDataStore","desc":"","lua_type":"DataStore"},{"name":"key","desc":"","lua_type":"string"},{"name":"value","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":95,"path":"src/datastore/src/Server/Utility/DataStorePromises.lua"}},{"name":"promiseIncrementAsync","desc":"Wraps :IncrementAsync() in a promise","params":[{"name":"robloxDataStore","desc":"","lua_type":"DataStore"},{"name":"key","desc":"","lua_type":"string"},{"name":"delta","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":117,"path":"src/datastore/src/Server/Utility/DataStorePromises.lua"}},{"name":"removeAsync","desc":"Wraps :RemoveAsync() in a promise","params":[{"name":"robloxDataStore","desc":"","lua_type":"DataStore"},{"name":"key","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":139,"path":"src/datastore/src/Server/Utility/DataStorePromises.lua"}}],"properties":[],"types":[],"name":"DataStorePromises","desc":"Utility methods to interactive with Roblox datastores.","realm":["Server"],"source":{"line":6,"path":"src/datastore/src/Server/Utility/DataStorePromises.lua"}}')}}]);