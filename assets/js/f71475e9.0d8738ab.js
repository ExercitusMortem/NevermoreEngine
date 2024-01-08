"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76641],{59823:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Tracks the player\'s current humanoid\\n\\n:::tip\\nBe sure to clean up the tracker once you\'re done!\\n:::","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"HumanoidTracker"}],"function_type":"static","source":{"line":45,"path":"src/humanoidtracker/src/Shared/HumanoidTracker.lua"}},{"name":"PromiseNextHumanoid","desc":"Returns a promise that resolves when the next humanoid is found.\\nIf a humanoid is already there, then returns a resolved promise\\nwith that humanoid.","params":[],"returns":[{"desc":"","lua_type":"Promise<Humanoid>"}],"function_type":"method","source":{"line":84,"path":"src/humanoidtracker/src/Shared/HumanoidTracker.lua"}}],"properties":[{"name":"Humanoid","desc":"Current humanoid","lua_type":"ValueObject<Humanoid>","source":{"line":23,"path":"src/humanoidtracker/src/Shared/HumanoidTracker.lua"}},{"name":"AliveHumanoid","desc":"Current humanoid which is alive","lua_type":"ValueObject<Humanoid>","source":{"line":29,"path":"src/humanoidtracker/src/Shared/HumanoidTracker.lua"}},{"name":"HumanoidDied","desc":"Fires when the humanoid dies","lua_type":"Signal<Humanoid>","source":{"line":35,"path":"src/humanoidtracker/src/Shared/HumanoidTracker.lua"}}],"types":[],"name":"HumanoidTracker","desc":"Tracks a player\'s character\'s humanoid","source":{"line":5,"path":"src/humanoidtracker/src/Shared/HumanoidTracker.lua"}}')}}]);