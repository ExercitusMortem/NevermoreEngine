"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12059],{77062:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new queue","params":[],"returns":[{"desc":"","lua_type":"Queue<T>"}],"function_type":"static","source":{"line":27,"path":"src/loader/src/Queue.lua"}},{"name":"__len","desc":"Gets the queues length","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":38,"path":"src/loader/src/Queue.lua"}},{"name":"GetCount","desc":"Returns the count of the queue","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":47,"path":"src/loader/src/Queue.lua"}},{"name":"PushLeft","desc":"Pushes an entry to the left of the queue","params":[{"name":"value","desc":"","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":55,"path":"src/loader/src/Queue.lua"}},{"name":"PushRight","desc":"Pushes an entry to the right of the queue","params":[{"name":"value","desc":"","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":64,"path":"src/loader/src/Queue.lua"}},{"name":"PopLeft","desc":"Pops an entry from the left of the queue","params":[],"returns":[{"desc":"","lua_type":"T"}],"function_type":"method","source":{"line":73,"path":"src/loader/src/Queue.lua"}},{"name":"PopRight","desc":"Pops an entry from the right of the queue","params":[],"returns":[{"desc":"","lua_type":"T"}],"function_type":"method","source":{"line":89,"path":"src/loader/src/Queue.lua"}},{"name":"IsEmpty","desc":"Returns true if the queue is empty","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":105,"path":"src/loader/src/Queue.lua"}},{"name":"new","desc":"Constructs a new queue","params":[],"returns":[{"desc":"","lua_type":"Queue<T>"}],"function_type":"static","source":{"line":27,"path":"src/queue/src/Shared/Queue.lua"}},{"name":"__len","desc":"Gets the queues length","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":39,"path":"src/queue/src/Shared/Queue.lua"}},{"name":"GetCount","desc":"Returns the count of the queue","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":48,"path":"src/queue/src/Shared/Queue.lua"}},{"name":"PushLeft","desc":"Pushes an entry to the left of the queue","params":[{"name":"value","desc":"","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":56,"path":"src/queue/src/Shared/Queue.lua"}},{"name":"PushRight","desc":"Pushes an entry to the right of the queue","params":[{"name":"value","desc":"","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":65,"path":"src/queue/src/Shared/Queue.lua"}},{"name":"PopLeft","desc":"Pops an entry from the left of the queue","params":[],"returns":[{"desc":"","lua_type":"T"}],"function_type":"method","source":{"line":74,"path":"src/queue/src/Shared/Queue.lua"}},{"name":"PopRight","desc":"Pops an entry from the right of the queue","params":[],"returns":[{"desc":"","lua_type":"T"}],"function_type":"method","source":{"line":90,"path":"src/queue/src/Shared/Queue.lua"}},{"name":"IsEmpty","desc":"Returns true if the queue is empty","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":106,"path":"src/queue/src/Shared/Queue.lua"}}],"properties":[],"types":[],"name":"Queue","desc":"Queue class with better performance characteristics than table.remove()\\n\\n```lua\\nlocal queue = Queue.new()\\nqueue:PushRight(\\"a\\")\\nqueue:PushRight(\\"b\\")\\nqueue:PushRight(\\"c\\")\\n\\nwhile not queue:IsEmpty() do\\n    local entry = queue:PopLeft()\\n    print(entry) --\x3e a, b, c\\nend\\n```","source":{"line":18,"path":"src/queue/src/Shared/Queue.lua"}}')}}]);