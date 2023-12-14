"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99613],{96971:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"A transition model that has a spring underlying it. Very useful\\nfor animations on tracks that need to be on a spring.","params":[],"returns":[{"desc":"","lua_type":"TimedTransitionModel<T>"}],"function_type":"static","source":{"line":23,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"IsShowingComplete","desc":"Returns true if showing is complete","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":53,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"IsHidingComplete","desc":"Returns true if hiding is complete","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":61,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"ObserveIsShowingComplete","desc":"Observe is showing is complete","params":[],"returns":[{"desc":"","lua_type":"Observable<boolean>"}],"function_type":"method","source":{"line":69,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"ObserveIsHidingComplete","desc":"Observe is hiding is complete","params":[],"returns":[{"desc":"","lua_type":"Observable<boolean>"}],"function_type":"method","source":{"line":77,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"BindToPaneVisbility","desc":"Binds the transition model to the actual visiblity of the pane","params":[{"name":"pane","desc":"","lua_type":"BasicPane"}],"returns":[{"desc":"Cleanup function","lua_type":"function"}],"function_type":"method","source":{"line":87,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"ObserveRenderStepped","desc":"Observes the spring animating","params":[],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"method","source":{"line":116,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"Observe","desc":"Alias to spring transition model observation!","params":[],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"method","source":{"line":125,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"PromiseShow","desc":"Shows the model and promises when the showing is complete.","params":[{"name":"doNotAnimate","desc":"","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":135,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"PromiseHide","desc":"Hides the model and promises when the showing is complete.","params":[{"name":"doNotAnimate","desc":"","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":145,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}},{"name":"PromiseToggle","desc":"Toggles the model and promises when the transition is complete.","params":[{"name":"doNotAnimate","desc":"","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":155,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}}],"properties":[],"types":[],"name":"TimedTransitionModel","desc":"","source":{"line":4,"path":"src/transitionmodel/src/Shared/Timed/TimedTransitionModel.lua"}}')}}]);