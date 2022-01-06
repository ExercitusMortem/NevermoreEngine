"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92614],{28300:function(e){e.exports=JSON.parse('{"functions":[],"properties":[{"name":"Ragdoll","desc":"Apply this [Binder] to a humanoid to ragdoll it. Humanoid must already have [Ragdollable] defined.\\n\\n```lua\\nlocal ragdollBinder = serviceBag:GetService(RagdollBindersClient).Ragdoll\\n\\nlocal ragdoll = ragdollBinder:Get(humanoid)\\nif ragdoll then\\n\\tprint(\\"Is ragdolled\\")\\n\\tragdollBinder:Unbind(humanoid)\\nelse\\n\\tprint(\\"Not ragdolled\\")\\n\\tragdollBinder:Bind(humanoid)\\nend\\n```\\n\\nYou can also use [RxBinderUtils.observeBoundClass] to observe whether a humanoid is ragdolled using an [Observable].\\n\\n:::info\\nLike any usage of [Observable], be sure to give the [Subscription] to a [Maid] (or call\\n[Subscription.Destroy] on it) once done with the event connection.\\n:::\\n\\n```lua\\nlocal maid = Maid.new()\\n\\nlocal ragdollBinder = serviceBag:GetService(RagdollBindersClient).Ragdoll\\nmaid:GiveTask(RxBinderUtils.observeBoundClass(ragdollBinder, humanoid):Subscribe(function(ragdoll)\\n\\tif ragdoll then\\n\\t\\tprint(\\"Ragdolled!\\")\\n\\telse\\n\\t\\tprint(\\"Not ragdolled\\")\\n\\tend\\nend))\\n```","lua_type":"Binder<Ragdoll>","source":{"line":67,"path":"src/ragdoll/src/Server/RagdollBindersServer.lua"}},{"name":"Ragdollable","desc":"Enables ragdolling on a humanoid.","lua_type":"PlayerHumanoidBinder<Ragdollable>","source":{"line":74,"path":"src/ragdoll/src/Server/RagdollBindersServer.lua"}},{"name":"RagdollHumanoidOnDeath","desc":"Automatically applies ragdoll upon humanoid death.","lua_type":"PlayerHumanoidBinder<RagdollHumanoidOnDeath>","source":{"line":81,"path":"src/ragdoll/src/Server/RagdollBindersServer.lua"}},{"name":"RagdollHumanoidOnFall","desc":"Automatically applies ragdoll upon humanoid fall.","lua_type":"PlayerHumanoidBinder<RagdollHumanoidOnFall>","source":{"line":88,"path":"src/ragdoll/src/Server/RagdollBindersServer.lua"}},{"name":"UnragdollAutomatically","desc":"Automatically unragdolls the humanoid.","lua_type":"PlayerHumanoidBinder<UnragdollAutomatically>","source":{"line":95,"path":"src/ragdoll/src/Server/RagdollBindersServer.lua"}}],"types":[],"name":"RagdollBindersServer","desc":"Holds binders for Ragdoll system. Be sure to initialize on the client too. See [RagdollBindersClient].\\nBe sure to use a [ServiceBag] to initialize this service.\\n\\n```lua\\n-- Server.lua\\n\\nlocal serviceBag = require(\\"ServiceBag\\")\\nlocal ragdollBindersServer = serviceBag:GetService(require(\\"RagdollBindersServer\\"))\\nserviceBag:Init()\\n\\nragdollBindersServer.RagdollHumanoidOnDeath:SetAutomaticTagging(false)\\n\\nserviceBag:Start()\\n```","realm":["Server"],"source":{"line":20,"path":"src/ragdoll/src/Server/RagdollBindersServer.lua"}}')}}]);