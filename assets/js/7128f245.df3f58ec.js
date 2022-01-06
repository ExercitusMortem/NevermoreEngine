"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12649],{34537:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new DefaultCamera","params":[],"returns":[{"desc":"","lua_type":"DefaultCamera"}],"function_type":"static","source":{"line":25,"path":"src/camera/src/Client/Effects/DefaultCamera.lua"}},{"name":"OverrideGlobalFieldOfView","desc":"Overrides the global field of view in the cached camera state","params":[{"name":"fieldOfView","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","source":{"line":41,"path":"src/camera/src/Client/Effects/DefaultCamera.lua"}},{"name":"BindToRenderStep","desc":"Binds the camera to RunService RenderStepped event.\\n\\n:::tip\\nBe sure to call UnbindFromRenderStep when using this.\\n:::","params":[],"returns":[],"function_type":"method","source":{"line":56,"path":"src/camera/src/Client/Effects/DefaultCamera.lua"}},{"name":"UnbindFromRenderStep","desc":"Unbinds the camera from the RunService","params":[],"returns":[],"function_type":"method","source":{"line":71,"path":"src/camera/src/Client/Effects/DefaultCamera.lua"}}],"properties":[{"name":"CameraState","desc":"The current state.","lua_type":"CameraState","readonly":true,"source":{"line":50,"path":"src/camera/src/Client/Effects/HeartbeatCamera.lua"}},{"name":"CameraState","desc":"The current state.","lua_type":"CameraState","readonly":true,"source":{"line":82,"path":"src/camera/src/Client/Effects/DefaultCamera.lua"}},{"name":"CameraState","desc":"The current state.","lua_type":"CameraState","readonly":true,"source":{"line":60,"path":"src/camera/src/Client/Effects/ImpulseCamera.lua"}}],"types":[],"name":"DefaultCamera","desc":"Hack to maintain default camera control by binding before and after the camera update cycle\\nThis allows other cameras to build off of the \\"default\\" camera while maintaining the same Roblox control scheme.\\n\\nThis camera is automatically setup by the [CameraStackService](/api/CameraStackService).","source":{"line":8,"path":"src/camera/src/Client/Effects/DefaultCamera.lua"}}')}}]);