"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80414],{43731:function(e){e.exports=JSON.parse('{"functions":[{"name":"any","desc":"Returns the value of the first promise resolved","params":[{"name":"promises","desc":"","lua_type":"{ Promise<T> }"}],"returns":[{"desc":"Promise that resolves with first result","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":17,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"all","desc":"Executes all promises. If any fails, the result will be rejected. However, it yields until\\nevery promise is complete.","params":[{"name":"promises","desc":"","lua_type":"{ Promise<T> }"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":42,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"invert","desc":"Inverts the result of a promise, turning a resolved promise\\ninto a rejected one, and a rejected one into a resolved one.","params":[{"name":"promise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":78,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"fromSignal","desc":"Creates a promise from a signal","params":[{"name":"signal","desc":"","lua_type":"Signal<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":101,"path":"src/promise/src/Shared/PromiseUtils.lua"}},{"name":"timeout","desc":"Creates a new promise from the given promise that will\\nreject after the given `timeoutTime`","params":[{"name":"timeoutTime","desc":"","lua_type":"number"},{"name":"fromPromise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":125,"path":"src/promise/src/Shared/PromiseUtils.lua"}}],"properties":[],"types":[],"name":"PromiseUtils","desc":"Utility methods for promise","source":{"line":5,"path":"src/promise/src/Shared/PromiseUtils.lua"}}')}}]);