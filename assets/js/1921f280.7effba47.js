"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29944],{31368:function(e){e.exports=JSON.parse('{"functions":[{"name":"bootstrapGame","desc":"Bootstraps the game by replicating packages to server, client, and\\nshared.\\n\\n```lua\\nlocal ServerScriptService = game:GetService(\\"ServerScriptService\\")\\n\\nlocal loader = ServerScriptService:FindFirstChild(\\"LoaderUtils\\", true).Parent\\nlocal packages = require(loader).bootstrapGame(ServerScriptService.ik)\\n```\\n\\n:::info\\nThe game must be running to do this bootstrapping operation.\\n:::","params":[{"name":"packageFolder","desc":"","lua_type":"Instance"}],"returns":[{"desc":"serverFolder","lua_type":"Folder"}],"function_type":"static","realm":["Server"],"source":{"line":70,"path":"src/loader/src/init.lua"}},{"name":"load","desc":"Returns a function that can be used to load modules relative\\nto the script specified.\\n\\n```lua\\nlocal require = require(script.Parent.loader).load(script)\\n\\nlocal maid = require(\\"Maid\\")\\n```","params":[{"name":"script","desc":"The script to load dependencies for.","lua_type":"Script"}],"returns":[{"desc":"","lua_type":"(moduleReference: ModuleReference) -> any"}],"function_type":"static","source":{"line":127,"path":"src/loader/src/init.lua"}}],"properties":[],"types":[{"name":"ModuleReference","desc":"A type that can be loaded into a module","lua_type":"ModuleScript | number | string","source":{"line":111,"path":"src/loader/src/init.lua"}}],"name":"Loader","desc":"Loads Nevermore and handles loading!\\n\\nThis is a centralized loader that handles the following scenarios:\\n\\n* Specific layouts for npm node_modules\\n* Layouts for node_modules being symlinked\\n* Multiple versions of modules being used in conjunction with each other\\n* Relative path requires\\n* Require by name\\n* Replication to client and server","source":{"line":15,"path":"src/loader/src/init.lua"}}')}}]);