"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37858],{37833:e=>{e.exports=JSON.parse('{"functions":[{"name":"createExperienceConfig","desc":"Creates a new experience configuration to be used","params":[{"name":"options","desc":"","lua_type":"ExperienceConfig"}],"returns":[{"desc":"","lua_type":"ExperienceConfig"}],"function_type":"static","source":{"line":26,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}},{"name":"isExperienceConfig","desc":"Returns whether a value is an experience config","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":41,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}},{"name":"getLevel","desc":"Gets the current level from experience.","params":[{"name":"config","desc":"","lua_type":"ExperienceConfig"},{"name":"totalExperience","desc":"","lua_type":"number"}],"returns":[{"desc":"Level","lua_type":"number"}],"function_type":"static","source":{"line":53,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}},{"name":"experienceFromLevel","desc":"Gets experience required for a current level. Once the experience is\\nequal to this threshold, or greater, then the level is considered\\nearned.","params":[{"name":"config","desc":"","lua_type":"ExperienceConfig"},{"name":"level","desc":"","lua_type":"number"}],"returns":[{"desc":"Total experience required for a level","lua_type":"number"}],"function_type":"static","source":{"line":78,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}},{"name":"levelExperienceEarned","desc":"For this level only, how much experience is earned.","params":[{"name":"config","desc":"","lua_type":"ExperienceConfig"},{"name":"totalExperience","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":92,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}},{"name":"levelExperienceLeft","desc":"For this level only, how much experience is left to earn.","params":[{"name":"config","desc":"","lua_type":"ExperienceConfig"},{"name":"totalExperience","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":117,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}},{"name":"levelExperienceRequired","desc":"For this level only, how much experience is required","params":[{"name":"config","desc":"","lua_type":"ExperienceConfig"},{"name":"totalExperience","desc":"Current experience of player","lua_type":"number"}],"returns":[{"desc":"Total required for next level","lua_type":"number"}],"function_type":"static","source":{"line":142,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}},{"name":"percentLevelComplete","desc":"Returns the percent of the level complete","params":[{"name":"config","desc":"","lua_type":"ExperienceConfig"},{"name":"totalExperience","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"number"}],"function_type":"static","source":{"line":167,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}}],"properties":[],"types":[],"name":"ExperienceUtils","desc":"Calculate experience on an exponential curve and perform relevant calculations.\\n\\nUses formulas from https://stackoverflow.com/questions/6954874/php-game-formula-to-calculate-a-level-based-on-exp\\n\\n```lua\\nlocal config = ExperienceUtils.createExperienceConfig({\\n\\tfactor = 200;\\n})\\n\\nlocal totalExperience = 2000\\nlocal level = ExperienceUtils.getLevel(config, totalExperience)\\nlocal percentDone = ExperienceUtils.percentLevelComplete(config, totalExperience)\\n```","source":{"line":17,"path":"src/experiencecalculator/src/Shared/ExperienceUtils.lua"}}')}}]);