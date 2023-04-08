"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87555],{35743:e=>{e.exports=JSON.parse('{"functions":[],"properties":[],"types":[],"name":"NumberLocalizationUtils","desc":"NumberLocalizationUtils script from Roblox\'s player scripts in handling the leaderboard.\\n\\nExample locale-sensitive number formatting:\\nhttps://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html\\n\\nLocale specification:\\n[DECIMAL_SEPARATOR] = string for decimal point, if needed\\n[GROUP_DELIMITER] = string for groupings of numbers left of the decimal\\nList section = abbreviations for language, in increasing order\\n\\nMissing features in this code:\\n- No support for differences in number of digits per GROUP_DELIMITER.\\nSome Chinese dialects group by 10000 instead of 1000.\\n- No support for variable differences in number of digits per GROUP_DELIMITER.\\nIndian natural language groups the first 3 to left of decimal, then every 2 after that.\\n\\nSee https://en.wikipedia.org/wiki/Decimal_separator#Digit_grouping","source":{"line":23,"path":"src/clienttranslator/src/Client/NumberLocalizationUtils.lua"}}')}}]);