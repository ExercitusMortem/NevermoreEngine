# (Sun Jan 16 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, null[@Yuuwa0519](https://github.com/Yuuwa0519), for all your work!

#### 🐛 Bug Fix

- `@quenty/draw@2.2.2`
  - fix: Disabled CanTouch and CanQuery [#246](https://github.com/Quenty/NevermoreEngine/pull/246) ([@Yuuwa0519](https://github.com/Yuuwa0519))
- `@quenty/blend@2.2.1`, `@quenty/camera@5.2.1`, `@quenty/cmdrservice@3.8.1`, `@quenty/guivisiblemanager@4.2.1`, `@quenty/ik@5.2.1`, `@quenty/lipsum@4.2.1`, `@quenty/markdownrender@2.0.2`, `@quenty/permissionprovider@4.6.1`, `@quenty/promise@3.5.1`, `@quenty/rotatinglabel@4.2.1`, `@quenty/roundedbackingbuilder@2.0.2`, `@quenty/scoredactionservice@4.8.1`, `@quenty/templateprovider@3.7.1`
  - docs: Fix docs from old luadocs and make checking moonwave docs a lot faster [#245](https://github.com/Quenty/NevermoreEngine/pull/245) ([@Quenty](https://github.com/Quenty))

#### Authors: 2

- [@Yuuwa0519](https://github.com/Yuuwa0519)
- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Fri Jan 07 2022)

#### 🚀 Enhancement

- `@quenty/loader@3.3.0`
  - fix: Centralize loader constants [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/cooldown@1.7.0`
  - feat: Cooldowns use attributes and can be cloned, API surface is cleaned up. [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/brio@3.7.0`
  - feat: Add RxBrioUtils.createStateStack(observable) [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/statestack@3.4.0`, `@quenty/valueobject@3.7.0`
  - feat: Add ValueObject:Observe() and StateStack:Observe() [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/attributeutils@4.2.0`
  - feat: Add AttributeValue:Observe() [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- `@quenty/permissionprovider@4.6.0`
  - fix: Permissions are lower. Technically this is a breaking change, but I don't think anyone is depending upon this API surface right now. [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/valueobject@3.7.0`
  - docs: Add documentation to ValueObjectUtils [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/rx@3.7.0`
  - docs: Do not document Rx.spec [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/cmdrservice@3.8.0`
  - fix: Fix dependencies of CmdrService [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/buttonhighlightmodel@3.5.0`
  - fix: Fix dependencies [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/blend@2.2.0`
  - fix: Blend does not complete all observables is a sub-observable completes [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/binder@4.7.0`
  - fix: Binders initialize properly and provider better warnings [#244](https://github.com/Quenty/NevermoreEngine/pull/244) ([@Quenty](https://github.com/Quenty))
- `@quenty/ragdoll@5.2.0`
  - docs: Add documentation for ragdoll system [#243](https://github.com/Quenty/NevermoreEngine/pull/243) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Thu Jan 06 2022)

#### 🐛 Bug Fix

- `@quenty/ragdoll@5.1.2`
  - docs: Add documentation for ragdoll system [#243](https://github.com/Quenty/NevermoreEngine/pull/243) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Thu Jan 06 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, aku ([@aku-e](https://github.com/aku-e)), for all your work!

#### 🐛 Bug Fix

- `@quenty/spring@3.1.1`
  - docs: Fix typo in spring docs, "fond" --> "found" [#242](https://github.com/Quenty/NevermoreEngine/pull/242) ([@aku-e](https://github.com/aku-e))

#### Authors: 1

- aku ([@aku-e](https://github.com/aku-e))

---

# (Mon Jan 03 2022)

#### 🚀 Enhancement

- `@quenty/metricutils@2.1.0`
  - feat: Add MetricUtils.kphToStudsPerSecond(kph) and MetricUtils.mphToStudsPerSecond(mph) [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
  - feat: Add MetricUtils.studsPerSecondToKph(studsPerSecond) and MetricUtils.studsPerSecondToMph(studsPerSecond) [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/observablecollection@1.1.0`
  - feat: Add ObservableCollection package [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/statestack@3.3.0`
  - feat: StateStack can now have states beyond boolean. Note that it tries to preserve its old behavior [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/signal@2.1.0`
  - feat: Add Signal.isSignal(value) [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/brio@3.6.0`
  - feat: Deprecate old brio commands and add new utility functions, including: [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/localizedtextutils@2.1.0`
  - feat: Add localization text utils changes, including.... [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/valuebaseutils@3.6.0`
  - feat: Deprecate RxValueBaseUtils.observe and add RxValueBaseUtils.observeBrio [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/clienttranslator@4.5.0`
  - feat: Suppress localization warnings when game is not published [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
  - feat: Add JSONTranslator:ObserveFormatByKey(key, argData) [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/attributeutils@4.1.0`
  - feat: Add AttributeUtils.initAttribute(instance, attributeName, default) [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/basicpane@3.3.0`
  - feat: Add BasicPaneUtils and BasicPane.isBasicPane(value) [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/blend@2.1.0`
  - feat: Blend now supports a more stable contract for adding children. [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- `@quenty/blend@2.1.0`
  - fix: Blend.Single specification was wrong [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/brio@3.6.0`, `@quenty/localizedtextutils@2.1.0`
  - fix: Fix moonwave documentation [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/cmdrservice@3.7.0`
  - fix: CmdrService declares string dependency required [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/rx@3.6.0`
  - fix: Fix Rx typing in documentation and provide better error messages. Also... [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/linkutils@3.6.0`, `@quenty/loader@3.2.0`
  - fix: Better error messages [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/r15utils@3.6.0`, `@quenty/ragdoll@5.1.0`, `@quenty/rxbinderutils@4.7.0`
  - fix: Use new non-deprecated RxBrioUtils methods [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/instanceutils@3.6.0`
  - fix: Better error messages on RxInstanceUtils.observeProperty(instance, propertyName) [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/binder@4.6.0`
  - fix: Binder.isBinder(binder) does not error on child classes [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/cancellabledelay@2.2.0`
  - docs: Fix documentation on cancellableDelay [#241](https://github.com/Quenty/NevermoreEngine/pull/241) ([@Quenty](https://github.com/Quenty))
- `@quenty/signal@2.1.0`
  - docs: Add documentation on SignalUtils [#239](https://github.com/Quenty/NevermoreEngine/pull/239) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Thu Dec 30 2021)

#### 🐛 Bug Fix

- `@quenty/signal@2.0.2`
  - docs: Add documentation on SignalUtils [#239](https://github.com/Quenty/NevermoreEngine/pull/239) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Thu Dec 30 2021)

#### 🐛 Bug Fix

- `@quenty/acceltween@2.0.1`, `@quenty/actionmanager@3.5.1`, `@quenty/adorneeutils@2.1.1`, `@quenty/animationgroup@3.2.1`, `@quenty/animationprovider@3.5.1`, `@quenty/animationtrackutils@2.0.1`, `@quenty/applytagtotaggedchildren@3.2.1`, `@quenty/attributeutils@4.0.1`, `@quenty/axisangleutils@2.0.1`, `@quenty/badgeutils@3.3.1`, `@quenty/baseobject@3.2.1`, `@quenty/basicpane@3.2.1`, `@quenty/bezierutils@2.0.1`, `@quenty/binarysearch@2.0.1`, `@quenty/binder@4.5.1`, `@quenty/blend@2.0.1`, `@quenty/boundingboxutils@2.0.1`, `@quenty/boundlinkutils@4.5.1`, `@quenty/brio@3.5.1`, `@quenty/buttonhighlightmodel@3.3.1`, `@quenty/buttonutils@2.0.1`, `@quenty/camera@5.0.1`, `@quenty/camerastoryutils@3.3.1`, `@quenty/cancellabledelay@2.1.1`, `@quenty/canceltoken@3.3.1`, `@quenty/cframeserializer@2.0.1`, `@quenty/cframeutils@2.0.1`, `@quenty/characterparticleplayer@2.0.1`, `@quenty/characterutils@3.3.1`, `@quenty/clienttranslator@4.4.1`, `@quenty/clipcharacters@3.3.1`, `@quenty/cmdrservice@3.6.1`, `@quenty/collectionserviceutils@2.0.1`, `@quenty/color3serializationutils@2.0.1`, `@quenty/color3utils@2.0.1`, `@quenty/colorsequenceutils@2.0.1`, `@quenty/contentproviderutils@3.3.1`, `@quenty/cooldown@1.5.1`, `@quenty/coreguienabler@3.3.1`, `@quenty/coreguiutils@3.3.1`, `@quenty/cubicspline@3.2.1`, `@quenty/datastore@3.3.1`, `@quenty/debounce@2.0.1`, `@quenty/deferred@2.0.2`, `@quenty/depthoffield@1.5.1`, `@quenty/draw@2.2.1`, `@quenty/enabledmixin@3.2.1`, `@quenty/equippedtracker@3.5.1`, `@quenty/experiencecalculator@2.0.1`, `@quenty/fakeskybox@3.2.1`, `@quenty/firstpersoncharactertransparency@3.2.1`, `@quenty/friendutils@3.3.1`, `@quenty/functionutils@2.0.1`, `@quenty/gamescalingutils@3.0.1`, `@quenty/gameversionutils@2.0.1`, `@quenty/generatewithmixin@3.4.1`, `@quenty/genericscreenguiprovider@3.4.1`, `@quenty/geometryutils@2.1.1`, `@quenty/getgroundplane@3.1.2`, `@quenty/getmechanismparts@2.0.1`, `@quenty/getpercentexposedutils@3.2.1`, `@quenty/grouputils@3.4.1`, `@quenty/guitriangle@2.0.1`, `@quenty/guivisiblemanager@4.0.1`, `@quenty/hapticfeedbackutils@2.1.1`, `@quenty/hide@1.5.1`, `@quenty/hintscoringutils@5.0.1`, `@quenty/httppromise@3.3.1`, `@quenty/humanoidanimatorutils@2.0.1`, `@quenty/humanoiddescriptionutils@3.3.1`, `@quenty/humanoidkillerutils@2.0.1`, `@quenty/humanoidmovedirectionutils@3.2.1`, `@quenty/humanoidspeed@1.5.1`, `@quenty/humanoidteleportutils@3.2.1`, `@quenty/humanoidtracker@3.5.1`, `@quenty/humanoidutils@2.0.1`, `@quenty/idleservice@2.0.1`, `@quenty/ik@5.0.1`, `@quenty/inputkeymaputils@3.5.1`, `@quenty/inputmode@3.5.1`, `@quenty/inputobjectutils@2.0.2`, `@quenty/insertserviceutils@3.3.1`, `@quenty/instanceutils@3.5.1`, `@quenty/isamixin@2.0.1`, `@quenty/jsonutils@3.3.1`, `@quenty/jumpbuttonutils@2.0.1`, `@quenty/linearsystemssolver@2.0.1`, `@quenty/linkutils@3.5.1`, `@quenty/lipsum@4.0.1`, `@quenty/loader@3.1.2`, `@quenty/localizedtextutils@2.0.1`, `@quenty/maid@2.0.2`, `@quenty/markdownrender@2.0.1`, `@quenty/marketplaceutils@3.3.1`, `@quenty/math@2.0.1`, `@quenty/meshutils@2.0.1`, `@quenty/metricutils@2.0.1`, `@quenty/modelappearance@3.2.1`, `@quenty/modeltransparencyeffect@3.2.1`, `@quenty/mouseovermixin@3.2.1`, `@quenty/mouseshiftlockservice@3.3.1`, `@quenty/multipleclickutils@3.2.1`, `@quenty/networkownerservice@3.0.2`, `@quenty/networkownerutils@2.0.1`, `@quenty/networkropeutils@3.2.1`, `@quenty/nocollisionconstraintutils@3.2.1`, `@quenty/numberrangeutils@2.0.1`, `@quenty/numbersequenceutils@2.0.1`, `@quenty/numbertoinputkeyutils@2.0.1`, `@quenty/octree@3.3.1`, `@quenty/optional@4.2.1`, `@quenty/overriddenproperty@3.2.1`, `@quenty/particleengine@3.3.1`, `@quenty/parttouchingcalculator@4.5.1`, `@quenty/pathfindingutils@3.4.1`, `@quenty/permissionprovider@4.4.1`, `@quenty/physicsutils@2.0.1`, `@quenty/pillbacking@3.2.1`, `@quenty/playerbinder@4.5.1`, `@quenty/playerhumanoidbinder@4.5.1`, `@quenty/playersservicepromises@3.3.1`, `@quenty/playerthumbnailutils@3.4.1`, `@quenty/polynomialutils@2.0.1`, `@quenty/preferredparentutils@2.0.1`, `@quenty/probability@2.0.1`, `@quenty/promise@3.3.1`, `@quenty/pseudolocalize@2.0.1`, `@quenty/qframe@3.3.1`, `@quenty/qgui@2.0.1`, `@quenty/quaternion@2.1.1`, `@quenty/r15utils@3.5.1`, `@quenty/racketingropeconstraint@3.3.1`, `@quenty/ragdoll@5.0.1`, `@quenty/randomutils@2.1.1`, `@quenty/raycaster@2.1.1`, `@quenty/region3int16utils@3.2.1`, `@quenty/region3utils@3.2.1`, `@quenty/remotefunctionutils@3.3.1`, `@quenty/remoting@3.3.1`, `@quenty/resetservice@1.3.1`, `@quenty/rigbuilderutils@3.3.1`, `@quenty/rodux-actions@1.2.1`, `@quenty/rodux-undo@1.2.1`, `@quenty/rotatinglabel@4.0.1`, `@quenty/roundedbackingbuilder@2.0.1`, `@quenty/rx@3.5.1`, `@quenty/rxbinderutils@4.6.1`, `@quenty/safedestroy@1.1.1`, `@quenty/scoredactionservice@4.6.1`, `@quenty/scrollingframe@4.0.1`, `@quenty/selectionimageutils@4.1.2`, `@quenty/servicebag@3.2.2`, `@quenty/setmechanismcframe@3.2.1`, `@quenty/signal@2.0.1`, `@quenty/snackbar@3.3.1`, `@quenty/socialserviceutils@3.3.1`, `@quenty/sounds@3.5.1`, `@quenty/spring@3.0.1`, `@quenty/sprites@3.4.1`, `@quenty/statestack@3.2.1`, `@quenty/steputils@3.0.1`, `@quenty/streamingutils@3.3.1`, `@quenty/string@2.2.1`, `@quenty/sunpositionutils@2.1.1`, `@quenty/symbol@2.0.1`, `@quenty/table@2.1.1`, `@quenty/teamtracker@3.5.1`, `@quenty/teamutils@2.0.1`, `@quenty/templateprovider@3.5.1`, `@quenty/terrainutils@3.2.1`, `@quenty/textfilterservice@3.3.1`, `@quenty/textfilterutils@3.3.1`, `@quenty/textserviceutils@3.0.1`, `@quenty/throttle@3.2.1`, `@quenty/time@2.0.1`, `@quenty/timesyncservice@3.3.1`, `@quenty/touchingpartutils@2.0.1`, `@quenty/trajectory@2.0.1`, `@quenty/transparencyservice@3.2.1`, `@quenty/uiobjectutils@2.0.1`, `@quenty/ultrawidecontainerutils@2.0.1`, `@quenty/utf8@2.0.1`, `@quenty/valuebaseutils@3.5.1`, `@quenty/valueobject@3.5.1`, `@quenty/vector3int16utils@2.0.1`, `@quenty/vector3utils@3.2.1`, `@quenty/weldconstraintutils@2.0.1`
  - docs: Add initial moonwave documentation [#238](https://github.com/Quenty/NevermoreEngine/pull/238) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Wed Dec 22 2021)

#### 💥 Breaking Change

- `@quenty/guivisiblemanager@5.0.0`
  - feat!: Remove GuiVisibleManager:SetPreferredTheme() support [#236](https://github.com/Quenty/NevermoreEngine/pull/236) ([@Quenty](https://github.com/Quenty))

#### 🚀 Enhancement

- `@quenty/spring@3.0.0`
  - feat: Add spring support for UDim2 and UDim and Vector2 [#237](https://github.com/Quenty/NevermoreEngine/pull/237) ([@Quenty](https://github.com/Quenty))
- `@quenty/textserviceutils@3.0.0`
  - feat: Add observeSizeForLabelProps [#237](https://github.com/Quenty/NevermoreEngine/pull/237) ([@Quenty](https://github.com/Quenty))
- `@quenty/ragdoll@5.0.0`
  - feat: Automatic ragdolling [#237](https://github.com/Quenty/NevermoreEngine/pull/237) ([@Quenty](https://github.com/Quenty))
  - feat: Adjust unragdoll logic [#237](https://github.com/Quenty/NevermoreEngine/pull/237) ([@Quenty](https://github.com/Quenty))
- `@quenty/attributeutils@4.0.0`
  - feat: Add better warnings [#237](https://github.com/Quenty/NevermoreEngine/pull/237) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Dec 18 2021)

#### 💥 Breaking Change

- `@quenty/guivisiblemanager@4.0.0`
  - feat!: Remove GuiVisibleManager:SetPreferredTheme() support [#236](https://github.com/Quenty/NevermoreEngine/pull/236) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Dec 18 2021)

#### 🚀 Enhancement

- `@quenty/sunpositionutils@2.1.0`
  - fix: Selene linting Vector3.zAxis [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
  - feat: Add SunPositionUtils.getSunPosition(clockTime, geoLatitude), SunPositionUtils.getClockTimeFromMoonDirection(direction), and SunPositionUtils.getGeographicalLatitudeFromMoonDirection [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/cooldown@1.5.0`
  - feat: Allow CooldownTracker to be initialized without the cooldown binders being initialized. [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/rigbuilderutils@3.3.0`
  - feat: Add RigBuilderUtils.promiseR15Rig() and RigBuilderUtils.promisePlayerRig(userId) [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/blend@1.2.0`
  - feat: Allow Color3 spring manipulation, and AccelTween usage [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/gamescalingutils@2.1.0`
  - feat: Add GameScalingUtils.observeUIScale() which lets the UI Scale be observed [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/buttonhighlightmodel@3.3.0`
  - feat: ButtonHighlightModel can act as a model for Blend [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/camera@4.4.0`, `@quenty/camerastoryutils@3.3.0`, `@quenty/qframe@3.3.0`
  - feat: Better camera explainability [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/spring@2.2.0`
  - feat: Allow transformation of Color3 into a linear value for interpolation [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- chore: Add sample integration game [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- chore: Update copyright date [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/promise@3.3.0`
  - fix: Use Promies.spawn() since task.spawn() is probably cheaper now [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/binder@4.5.0`
  - fix: Binder was not deconstructing correctly on cleanup [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/blend@1.2.0`
  - refactor: Rename Blend.applyProperties to Blend.mount [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))
- `@quenty/cancellabledelay@2.1.0`, `@quenty/clienttranslator@4.4.0`, `@quenty/hapticfeedbackutils@2.1.0`, `@quenty/ragdoll@4.6.0`, `@quenty/snackbar@3.3.0`, `@quenty/textfilterservice@3.3.0`
  - fix: use task.delay() instead of delay() [#235](https://github.com/Quenty/NevermoreEngine/pull/235) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Tue Dec 14 2021)

#### 🚀 Enhancement

- `@quenty/blend@1.1.0`
  - style: Fix linting [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))
  - feat: Add initial Blend package, a declarative UI package like Fusion [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))
- `@quenty/sounds@3.4.0`
  - feat: Add SoundUtils.playFromId(id) [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))
- `@quenty/valuebaseutils@3.4.0`, `@quenty/valueobject@3.4.0`
  - feat: ValueObject does not fire .Changed on cleanup. [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))
- `@quenty/ragdoll@4.5.0`
  - feat: Ragdoll package automatically binds ragdollable and ragdoll humanoid on death [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))
- `@quenty/playerhumanoidbinder@4.4.0`
  - feat: Can disabling tagging on PlayerHumanoidBinders [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))
- `@quenty/playerthumbnailutils@3.3.0`
  - feat: Add PlayerThumbnailUtils.promiseUserName(userId) [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- `@quenty/rx@3.4.0`
  - refactor: Syntax changes [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))
- `@quenty/cooldown@1.4.0`
  - fix: Cooldown package uses RxBinderUtils to observe bound class changing properly [#234](https://github.com/Quenty/NevermoreEngine/pull/234) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Thu Dec 09 2021)

#### 🚀 Enhancement

- `@quenty/cmdrservice@3.5.0`
  - feat: CmdrService allows access to cmdr via /cmdr for mobile access [#232](https://github.com/Quenty/NevermoreEngine/pull/232) ([@Quenty](https://github.com/Quenty))
- `@quenty/clienttranslator@4.3.0`
  - feat: JSONTranslator can take a table instead of a Roblox instance too [#232](https://github.com/Quenty/NevermoreEngine/pull/232) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sun Dec 05 2021)

#### 🚀 Enhancement

- `@quenty/cmdrservice@3.4.0`
  - feat: Make CmdrService allow dynamically binding commands [#231](https://github.com/Quenty/NevermoreEngine/pull/231) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Dec 04 2021)

#### 🐛 Bug Fix

- `@quenty/servicebag@3.2.1`
  - fix: Better error messages [#230](https://github.com/Quenty/NevermoreEngine/pull/230) ([@Quenty](https://github.com/Quenty))
- `@quenty/animationprovider@3.4.1`
  - fix: Do not search for the animation provider in replicated storage [#230](https://github.com/Quenty/NevermoreEngine/pull/230) ([@Quenty](https://github.com/Quenty))
- `@quenty/binder@4.3.1`
  - fix: Add GetClassRemovedSignal() to Binder [#230](https://github.com/Quenty/NevermoreEngine/pull/230) ([@Quenty](https://github.com/Quenty))
- `@quenty/cooldown@1.3.1`
  - fix: Cooldown can handle a synced clock not being synced [#230](https://github.com/Quenty/NevermoreEngine/pull/230) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Mon Nov 22 2021)

#### 🚀 Enhancement

- `@quenty/grouputils@3.3.0`
  - feat: Added promiseRoleInGroup to GroupUtils [#227](https://github.com/Quenty/NevermoreEngine/pull/227) ([@Boegie19](https://github.com/Boegie19))

#### Authors: 1

- [@Boegie19](https://github.com/Boegie19)

---

# (Mon Nov 22 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, null[@Boegie19](https://github.com/Boegie19), for all your work!

#### 🐛 Bug Fix

- ci: update to mesh syncing verson of rojo [#226](https://github.com/Quenty/NevermoreEngine/pull/226) ([@Quenty](https://github.com/Quenty))
- `@quenty/remotefunctionutils@3.2.1`
  - fix: RemoteFunctionUtils.promiseInvokeServer [#228](https://github.com/Quenty/NevermoreEngine/pull/228) ([@Boegie19](https://github.com/Boegie19))

#### Authors: 2

- [@Boegie19](https://github.com/Boegie19)
- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Nov 20 2021)

#### 🚀 Enhancement

- `@quenty/string@2.3.0`
  - feat: Add string.startsWith [#224](https://github.com/Quenty/NevermoreEngine/pull/224) ([@Quenty](https://github.com/Quenty))
- `@quenty/resetservice@1.2.0`
  - feat: Add ResetService package [#224](https://github.com/Quenty/NevermoreEngine/pull/224) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- `@quenty/actionmanager@3.3.0`, `@quenty/animationgroup@3.2.0`, `@quenty/animationprovider@3.4.0`, `@quenty/applytagtotaggedchildren@3.2.0`, `@quenty/attributeutils@3.4.0`, `@quenty/badgeutils@3.2.0`, `@quenty/baseobject@3.2.0`, `@quenty/basicpane@3.2.0`, `@quenty/binder@4.3.0`, `@quenty/boundlinkutils@4.3.0`, `@quenty/brio@3.3.0`, `@quenty/buttonhighlightmodel@3.2.0`, `@quenty/camera@4.3.0`, `@quenty/camerastoryutils@3.2.0`, `@quenty/canceltoken@3.2.0`, `@quenty/characterutils@3.2.0`, `@quenty/clienttranslator@4.2.0`, `@quenty/clipcharacters@3.2.0`, `@quenty/cmdrservice@3.2.0`, `@quenty/contentproviderutils@3.2.0`, `@quenty/cooldown@1.3.0`, `@quenty/coreguienabler@3.2.0`, `@quenty/coreguiutils@3.2.0`, `@quenty/cubicspline@3.2.0`, `@quenty/datastore@3.2.0`, `@quenty/depthoffield@1.3.0`, `@quenty/enabledmixin@3.2.0`, `@quenty/equippedtracker@3.3.0`, `@quenty/fakeskybox@3.2.0`, `@quenty/firstpersoncharactertransparency@3.2.0`, `@quenty/friendutils@3.2.0`, `@quenty/generatewithmixin@3.4.0`, `@quenty/genericscreenguiprovider@3.4.0`, `@quenty/getpercentexposedutils@3.2.0`, `@quenty/grouputils@3.2.0`, `@quenty/guivisiblemanager@3.2.0`, `@quenty/hide@1.3.0`, `@quenty/hintscoringutils@4.3.0`, `@quenty/httppromise@3.2.0`, `@quenty/humanoiddescriptionutils@3.2.0`, `@quenty/humanoidmovedirectionutils@3.2.0`, `@quenty/humanoidspeed@1.3.0`, `@quenty/humanoidteleportutils@3.2.0`, `@quenty/humanoidtracker@3.3.0`, `@quenty/idleservice@1.4.0`, `@quenty/ik@4.4.0`, `@quenty/inputkeymaputils@3.3.0`, `@quenty/inputmode@3.3.0`, `@quenty/insertserviceutils@3.2.0`, `@quenty/instanceutils@3.3.0`, `@quenty/jsonutils@3.2.0`, `@quenty/linkutils@3.3.0`, `@quenty/lipsum@3.4.0`, `@quenty/marketplaceutils@3.2.0`, `@quenty/modelappearance@3.2.0`, `@quenty/modeltransparencyeffect@3.2.0`, `@quenty/mouseovermixin@3.2.0`, `@quenty/mouseshiftlockservice@3.2.0`, `@quenty/multipleclickutils@3.2.0`, `@quenty/networkropeutils@3.2.0`, `@quenty/nocollisionconstraintutils@3.2.0`, `@quenty/octree@3.3.0`, `@quenty/optional@4.2.0`, `@quenty/overriddenproperty@3.2.0`, `@quenty/particleengine@3.2.0`, `@quenty/parttouchingcalculator@4.3.0`, `@quenty/pathfindingutils@3.3.0`, `@quenty/permissionprovider@4.2.0`, `@quenty/pillbacking@3.2.0`, `@quenty/playerbinder@4.3.0`, `@quenty/playerhumanoidbinder@4.3.0`, `@quenty/playersservicepromises@3.2.0`, `@quenty/playerthumbnailutils@3.2.0`, `@quenty/promise@3.2.0`, `@quenty/qframe@3.2.0`, `@quenty/quaternion@2.1.0`, `@quenty/r15utils@3.3.0`, `@quenty/racketingropeconstraint@3.2.0`, `@quenty/ragdoll@4.4.0`, `@quenty/region3int16utils@3.2.0`, `@quenty/region3utils@3.2.0`, `@quenty/remotefunctionutils@3.2.0`, `@quenty/remoting@3.2.0`, `@quenty/resetservice@1.2.0`, `@quenty/rigbuilderutils@3.2.0`, `@quenty/rodux-actions@1.2.0`, `@quenty/rodux-undo@1.2.0`, `@quenty/rotatinglabel@3.3.0`, `@quenty/rx@3.3.0`, `@quenty/rxbinderutils@4.4.0`, `@quenty/scoredactionservice@4.4.0`, `@quenty/scrollingframe@3.3.0`, `@quenty/servicebag@3.2.0`, `@quenty/setmechanismcframe@3.2.0`, `@quenty/snackbar@3.2.0`, `@quenty/socialserviceutils@3.2.0`, `@quenty/sounds@3.3.0`, `@quenty/sprites@3.4.0`, `@quenty/statestack@3.2.0`, `@quenty/streamingutils@3.2.0`, `@quenty/teamtracker@3.3.0`, `@quenty/templateprovider@3.4.0`, `@quenty/terrainutils@3.2.0`, `@quenty/textfilterservice@3.2.0`, `@quenty/textfilterutils@3.2.0`, `@quenty/throttle@3.2.0`, `@quenty/timesyncservice@3.2.0`, `@quenty/transparencyservice@3.2.0`, `@quenty/valuebaseutils@3.3.0`, `@quenty/valueobject@3.3.0`, `@quenty/vector3utils@3.2.0`
  - fix: Support MacOS syncing [#225](https://github.com/Quenty/NevermoreEngine/pull/225) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Wed Nov 10 2021)

#### 🚀 Enhancement

- `@quenty/string@2.2.0`
  - feat: Add string.startsWith [#224](https://github.com/Quenty/NevermoreEngine/pull/224) ([@Quenty](https://github.com/Quenty))
- `@quenty/resetservice@1.1.0`
  - feat: Add ResetService package [#224](https://github.com/Quenty/NevermoreEngine/pull/224) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Wed Nov 10 2021)

#### 🐛 Bug Fix

- `@quenty/servicebag@3.1.3`
  - fix: Prevent double service initialization from occuring when retrieving service that has not yet been added to service bag [#223](https://github.com/Quenty/NevermoreEngine/pull/223) ([@Quenty](https://github.com/Quenty))
- `@quenty/binder@4.2.1`
  - fix: Better error messages [#223](https://github.com/Quenty/NevermoreEngine/pull/223) ([@Quenty](https://github.com/Quenty))
- `@quenty/attributeutils@3.3.1`
  - fix: Defer signal creation [#223](https://github.com/Quenty/NevermoreEngine/pull/223) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Oct 30 2021)

#### 🚀 Enhancement

- `@quenty/binder@4.2.0`, `@quenty/brio@3.2.0`, `@quenty/instanceutils@3.2.0`, `@quenty/rx@3.2.0`
  - feat: Add unit tests and other small features [#221](https://github.com/Quenty/NevermoreEngine/pull/221) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Oct 30 2021)

#### 🐛 Bug Fix

- `@quenty/loader@3.1.1`, `@quenty/networkownerservice@3.0.1`, `@quenty/playersservicepromises@3.1.2`, `@quenty/templateprovider@3.2.2`
  - fix: Make minor fixes and allow unit testing via TestEz to be added [#220](https://github.com/Quenty/NevermoreEngine/pull/220) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Wed Oct 13 2021)

#### 🐛 Bug Fix

- `@quenty/inputobjectutils@2.0.1`
  - fix: InputObjectRayUtils allows the specification of the camera [#218](https://github.com/Quenty/NevermoreEngine/pull/218) ([@Quenty](https://github.com/Quenty))
- `@quenty/attributeutils@3.2.2`
  - fix: Add AttributeValue class [#218](https://github.com/Quenty/NevermoreEngine/pull/218) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Wed Oct 06 2021)

#### 🐛 Bug Fix

- `@quenty/servicebag@3.1.1`
  - fix: Enforce service retrieve returning correct memory address and initializing a separate table [#217](https://github.com/Quenty/NevermoreEngine/pull/217) ([@Quenty](https://github.com/Quenty))
- `@quenty/badgeutils@3.1.1`, `@quenty/binder@4.1.1`, `@quenty/camera@4.2.1`, `@quenty/characterutils@3.1.1`, `@quenty/clienttranslator@4.1.1`, `@quenty/contentproviderutils@3.1.1`, `@quenty/coreguiutils@3.1.1`, `@quenty/datastore@3.1.1`, `@quenty/deferred@2.0.1`, `@quenty/friendutils@3.1.1`, `@quenty/grouputils@3.1.1`, `@quenty/httppromise@3.1.1`, `@quenty/humanoiddescriptionutils@3.1.1`, `@quenty/insertserviceutils@3.1.1`, `@quenty/maid@2.0.1`, `@quenty/marketplaceutils@3.1.1`, `@quenty/mouseshiftlockservice@3.1.1`, `@quenty/pathfindingutils@3.2.1`, `@quenty/permissionprovider@4.1.1`, `@quenty/playersservicepromises@3.1.1`, `@quenty/playerthumbnailutils@3.1.1`, `@quenty/promise@3.1.1`, `@quenty/ragdoll@4.2.1`, `@quenty/remotefunctionutils@3.1.1`, `@quenty/remoting@3.1.1`, `@quenty/rigbuilderutils@3.1.1`, `@quenty/socialserviceutils@3.1.1`, `@quenty/streamingutils@3.1.1`, `@quenty/textfilterservice@3.1.1`, `@quenty/textfilterutils@3.1.1`, `@quenty/timesyncservice@3.1.1`
  - refactor: Switch to new task.spawn API library [#217](https://github.com/Quenty/NevermoreEngine/pull/217) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sun Oct 03 2021)

#### 🐛 Bug Fix

- fix: Upgrade foreman.toml and luacheck point ([@Quenty](https://github.com/Quenty))
- `@quenty/scoredactionservice@4.2.1`
  - fix: Fixes for deferred mode ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Oct 02 2021)

#### 🚀 Enhancement

- `@quenty/inputkeymaputils@3.1.0`, `@quenty/rodux-actions@1.1.0`
  - fix: Update linting [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/geometryutils@2.1.0`
  - feat: Add ScaleModelUtils to the geometry [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/loader@3.1.0`
  - feat: Loader performance optimizations [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/raycaster@2.1.0`
  - feat: Add RaycastUtils [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/randomutils@2.1.0`
  - feat: Add RandomUtils.guassuanRandom() and RandomUtils.randomUnitVector3 [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/inputkeymaputils@3.1.0`, `@quenty/scoredactionservice@4.2.0`
  - feat: Handle slotted touch buttons so we can always position touch buttons in the same place [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/vector3utils@3.1.0`
  - feat: Add another way to get the angle between vectors with more numeric stability [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/table@2.1.0`
  - feat: Add Set.difference [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/safedestroy@1.1.0`
  - feat: Add safeDestroy package [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/rodux-actions@1.1.0`, `@quenty/rodux-undo@1.1.0`
  - feat: Move rodux code to packages [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/draw@2.2.0`
  - feat: Can update ray appearance for performance reasons [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/buttonhighlightmodel@3.1.0`
  - feat: ButtonHighlightModel now handles touch inputs being down/over appropriately [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/insertserviceutils@3.1.0`, `@quenty/templateprovider@3.2.0`
  - feat: Allow template provider to replicate assets from the cloud [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- chore: Remove heatbeatWait module since it's deprecated by the task.wait method. [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- fix: Upgrade luacheck to version-f5b685d4be894c8f [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/raycaster@2.1.0`
  - chore: Add Trey (AxisAngle) to contributor list [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/camera@4.2.0`
  - Register defaultcamera 1 step off so we can mess with the camera if we need to. [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))
- `@quenty/optional@4.1.0`
  - fix: Optional would fail with non-global load. Require loader to now pass in this value. [#216](https://github.com/Quenty/NevermoreEngine/pull/216) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Wed Sep 22 2021)

#### 🐛 Bug Fix

- `@quenty/ik@4.1.1`
  - fix: Prevent NaN values in the IK service [#215](https://github.com/Quenty/NevermoreEngine/pull/215) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Wed Sep 22 2021)

#### 🚀 Enhancement

- `@quenty/templateprovider@3.1.0`
  - fix: Add specific behavior for templates in StarterGui [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/sounds@3.1.0`
  - feat: Add ability to play sounds in parent [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- `@quenty/camera@4.1.0`
  - fix: Add test to CameraUtils [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/scoredactionservice@4.1.0`
  - fix: Handle TouchButton actions and allow observation of input key map lists [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/spring@2.1.0`
  - fix: Spring does not have clamped damper [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/attributeutils@3.1.0`
  - fix: Add default attribute utils [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/sprites@3.1.0`
  - fix: Make sure sprites have all dependencies listed [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/rxbinderutils@4.1.0`
  - fix: Add RxBinderUtils.observeBoundParentClassBrio(binder, instance) [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
  - fix: Add better sanity checks on binder [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/adorneeutils@2.1.0`
  - fix: Add attachment for bounding box in adornee utils [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/ragdoll@4.1.0`
  - fix: Add unragdoll automatically to ragdoll binders [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/draw@2.1.0`
  - fix: Add sphere to draw [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))
- `@quenty/string@2.1.0`
  - fix: Add new string feature [#214](https://github.com/Quenty/NevermoreEngine/pull/214) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Sep 18 2021)

#### 🐛 Bug Fix

- `@quenty/loader@3.0.1`
  - fix: Handle deferred mode and loader in test mode in loader [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))
  - fix: Better warnings in loader and also allow multiple groups [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))
- `@quenty/cooldown@1.0.1`
  - fix: Fix cooldown dependencies [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))
  - chore: Add cooldown package [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))
- `@quenty/camerastoryutils@3.0.1`
  - fix: camera story parents relative to the camera [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))
  - fix: Fix CameraStoryUtils [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))
- `@quenty/templateprovider@3.0.1`
  - fix: Prevent double initialization [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))
- `@quenty/camera@4.0.1`, `@quenty/lipsum@3.0.1`, `@quenty/qframe@3.0.1`, `@quenty/rigbuilderutils@3.0.1`, `@quenty/sprites@3.0.1`
  - fix: Allow stories to be loaded into the actual package in question [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))
- `@quenty/brio@3.0.1`, `@quenty/camera@4.0.1`, `@quenty/datastore@3.0.1`, `@quenty/depthoffield@1.0.1`, `@quenty/hide@1.0.1`, `@quenty/humanoidspeed@1.0.1`, `@quenty/idleservice@1.0.1`, `@quenty/instanceutils@3.0.1`, `@quenty/linkutils@3.0.1`, `@quenty/r15utils@3.0.1`, `@quenty/rx@3.0.1`, `@quenty/sprites@3.0.1`, `@quenty/textfilterservice@3.0.1`, `@quenty/valueobject@3.0.1`
  - fix: Fix undeclare package dependencies that prevented loading in certain situations [#213](https://github.com/Quenty/NevermoreEngine/pull/213) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Sep 11 2021)

#### 🐛 Bug Fix

- `@quenty/sounds@3.0.1`
  - fix: Fix soundutils [#212](https://github.com/Quenty/NevermoreEngine/pull/212) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Sep 11 2021)

#### 💥 Breaking Change

- `@quenty/firstpersoncharactertransparency@3.0.0`
  - fix: FirstPersonCharacterTransparency uses service bag [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/humanoidspeed@1.0.0`
  - feat!: Add humanoid speed package [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/sounds@3.0.0`
  - feat!: Add sound package, removing soundpromiseutils as a package [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))

#### 🚀 Enhancement

- `@quenty/servicebag@3.0.0`, `@quenty/templateprovider@3.0.0`
  - feat: Service bags now now create a prototype and use that, instead of allowing global access [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/hide@1.0.0`
  - feat: Add hide service package [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/depthoffield@1.0.0`
  - feat: Add DepthOfField service package [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/idleservice@1.0.0`
  - feat: Add idleservice package [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/steputils@3.0.0`
  - feat: Add new methods to StepUtils [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- chore: Remove dead code [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/loader@3.0.0`
  - fix: Misc loading issues fixed, including loading injection and other issues [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/modeltransparencyeffect@3.0.0`
  - fix: ModelTransparencyEffect works with new service bag [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/ik@4.0.0`
  - fix: Retrieving ik components [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
  - fix: IKGrips [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/brio@3.0.0`
  - fix: Brio passing arguments is safe [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/humanoidtracker@3.0.0`
  - fix: Make sure HumanoidTrackerService cannot be initialized more than once [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/binder@4.0.0`
  - fix: Allow BinderGroup to be initialized by the service bag [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/inputkeymaputils@3.0.0`
  - fix: Turns out assert passes multiple arguments so this was bad code [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/rxbinderutils@4.0.0`
  - fix: Importing rxbinderutils now works [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))
- `@quenty/networkownerservice@3.0.0`
  - fix: Fix NetworkOwnerService initialization [#211](https://github.com/Quenty/NevermoreEngine/pull/211) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sun Sep 05 2021)

#### 🚀 Enhancement

- `@quenty/loader@2.1.0`
  - fix: Ensure loader injects itself [#210](https://github.com/Quenty/NevermoreEngine/pull/210) ([@Quenty](https://github.com/Quenty))
  - fix: Discover top level module scripts [#210](https://github.com/Quenty/NevermoreEngine/pull/210) ([@Quenty](https://github.com/Quenty))
  - fix: Loader allows container [#210](https://github.com/Quenty/NevermoreEngine/pull/210) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sun Sep 05 2021)

#### 💥 Breaking Change

- `@quenty/acceltween@2.0.0`, `@quenty/actionmanager@2.0.0`, `@quenty/adorneeutils@2.0.0`, `@quenty/animationgroup@2.0.0`, `@quenty/animationprovider@2.0.0`, `@quenty/animationtrackutils@2.0.0`, `@quenty/applytagtotaggedchildren@2.0.0`, `@quenty/attributeutils@2.0.0`, `@quenty/axisangleutils@2.0.0`, `@quenty/badgeutils@2.0.0`, `@quenty/baseobject@2.0.0`, `@quenty/basicpane@2.0.0`, `@quenty/bezierutils@2.0.0`, `@quenty/binarysearch@2.0.0`, `@quenty/binder@3.0.0`, `@quenty/boundingboxutils@2.0.0`, `@quenty/boundlinkutils@3.0.0`, `@quenty/brio@2.0.0`, `@quenty/buttonhighlightmodel@2.0.0`, `@quenty/buttonutils@2.0.0`, `@quenty/camera@3.0.0`, `@quenty/camerastoryutils@2.0.0`, `@quenty/cancellabledelay@2.0.0`, `@quenty/canceltoken@2.0.0`, `@quenty/cframeserializer@2.0.0`, `@quenty/cframeutils@2.0.0`, `@quenty/characterparticleplayer@2.0.0`, `@quenty/characterutils@2.0.0`, `@quenty/clienttranslator@3.0.0`, `@quenty/clipcharacters@2.0.0`, `@quenty/cmdrservice@2.0.0`, `@quenty/collectionserviceutils@2.0.0`, `@quenty/color3serializationutils@2.0.0`, `@quenty/color3utils@2.0.0`, `@quenty/colorsequenceutils@2.0.0`, `@quenty/contentproviderutils@2.0.0`, `@quenty/coreguienabler@2.0.0`, `@quenty/coreguiutils@2.0.0`, `@quenty/cubicspline@2.0.0`, `@quenty/datastore@2.0.0`, `@quenty/debounce@2.0.0`, `@quenty/deferred@2.0.0`, `@quenty/draw@2.0.0`, `@quenty/enabledmixin@2.0.0`, `@quenty/equippedtracker@2.0.0`, `@quenty/experiencecalculator@2.0.0`, `@quenty/fakeskybox@2.0.0`, `@quenty/firstpersoncharactertransparency@2.0.0`, `@quenty/friendutils@2.0.0`, `@quenty/functionutils@2.0.0`, `@quenty/gamescalingutils@2.0.0`, `@quenty/gameversionutils@2.0.0`, `@quenty/generatewithmixin@2.0.0`, `@quenty/genericscreenguiprovider@2.0.0`, `@quenty/geometryutils@2.0.0`, `@quenty/getgroundplane@2.0.0`, `@quenty/getmechanismparts@2.0.0`, `@quenty/getpercentexposedutils@2.0.0`, `@quenty/grouputils@2.0.0`, `@quenty/guitriangle@2.0.0`, `@quenty/guivisiblemanager@2.0.0`, `@quenty/hapticfeedbackutils@2.0.0`, `@quenty/hintscoringutils@3.0.0`, `@quenty/httppromise@2.0.0`, `@quenty/humanoidanimatorutils@2.0.0`, `@quenty/humanoiddescriptionutils@2.0.0`, `@quenty/humanoidkillerutils@2.0.0`, `@quenty/humanoidmovedirectionutils@2.0.0`, `@quenty/humanoidteleportutils@2.0.0`, `@quenty/humanoidtracker@2.0.0`, `@quenty/humanoidutils@2.0.0`, `@quenty/ik@3.0.0`, `@quenty/inputkeymaputils@2.0.0`, `@quenty/inputmode@2.0.0`, `@quenty/inputobjectutils@2.0.0`, `@quenty/insertserviceutils@2.0.0`, `@quenty/instanceutils@2.0.0`, `@quenty/isamixin@2.0.0`, `@quenty/jsonutils@2.0.0`, `@quenty/jumpbuttonutils@2.0.0`, `@quenty/linearsystemssolver@2.0.0`, `@quenty/linkutils@2.0.0`, `@quenty/lipsum@2.0.0`, `@quenty/loader@2.0.0`, `@quenty/localizedtextutils@2.0.0`, `@quenty/maid@2.0.0`, `@quenty/markdownrender@2.0.0`, `@quenty/marketplaceutils@2.0.0`, `@quenty/math@2.0.0`, `@quenty/meshutils@2.0.0`, `@quenty/metricutils@2.0.0`, `@quenty/modelappearance@2.0.0`, `@quenty/modeltransparencyeffect@2.0.0`, `@quenty/mouseovermixin@2.0.0`, `@quenty/mouseshiftlockservice@2.0.0`, `@quenty/multipleclickutils@2.0.0`, `@quenty/networkownerservice@2.0.0`, `@quenty/networkownerutils@2.0.0`, `@quenty/networkropeutils@2.0.0`, `@quenty/nocollisionconstraintutils@2.0.0`, `@quenty/numberrangeutils@2.0.0`, `@quenty/numbersequenceutils@2.0.0`, `@quenty/numbertoinputkeyutils@2.0.0`, `@quenty/octree@2.0.0`, `@quenty/optional@2.0.0`, `@quenty/overriddenproperty@2.0.0`, `@quenty/particleengine@2.0.0`, `@quenty/parttouchingcalculator@3.0.0`, `@quenty/pathfindingutils@2.0.0`, `@quenty/permissionprovider@3.0.0`, `@quenty/physicsutils@2.0.0`, `@quenty/pillbacking@2.0.0`, `@quenty/playerbinder@3.0.0`, `@quenty/playerhumanoidbinder@3.0.0`, `@quenty/playersservicepromises@2.0.0`, `@quenty/playerthumbnailutils@2.0.0`, `@quenty/polynomialutils@2.0.0`, `@quenty/preferredparentutils@2.0.0`, `@quenty/probability@2.0.0`, `@quenty/promise@2.0.0`, `@quenty/pseudolocalize@2.0.0`, `@quenty/qframe@2.0.0`, `@quenty/qgui@2.0.0`, `@quenty/quaternion@2.0.0`, `@quenty/r15utils@2.0.0`, `@quenty/racketingropeconstraint@2.0.0`, `@quenty/ragdoll@3.0.0`, `@quenty/randomutils@2.0.0`, `@quenty/raycaster@2.0.0`, `@quenty/region3int16utils@2.0.0`, `@quenty/region3utils@2.0.0`, `@quenty/remotefunctionutils@2.0.0`, `@quenty/remoting@2.0.0`, `@quenty/rigbuilderutils@2.0.0`, `@quenty/rotatinglabel@2.0.0`, `@quenty/roundedbackingbuilder@2.0.0`, `@quenty/rx@2.0.0`, `@quenty/rxbinderutils@3.0.0`, `@quenty/scoredactionservice@3.0.0`, `@quenty/scrollingframe@2.0.0`, `@quenty/selectionimageutils@3.0.0`, `@quenty/servicebag@2.0.0`, `@quenty/setmechanismcframe@2.0.0`, `@quenty/signal@2.0.0`, `@quenty/snackbar@2.0.0`, `@quenty/socialserviceutils@2.0.0`, `@quenty/soundpromiseutils@2.0.0`, `@quenty/spring@2.0.0`, `@quenty/sprites@2.0.0`, `@quenty/statestack@2.0.0`, `@quenty/steputils@2.0.0`, `@quenty/streamingutils@2.0.0`, `@quenty/string@2.0.0`, `@quenty/sunpositionutils@2.0.0`, `@quenty/symbol@2.0.0`, `@quenty/table@2.0.0`, `@quenty/teamtracker@2.0.0`, `@quenty/teamutils@2.0.0`, `@quenty/templateprovider@2.0.0`, `@quenty/terrainutils@2.0.0`, `@quenty/textfilterservice@2.0.0`, `@quenty/textfilterutils@2.0.0`, `@quenty/textserviceutils@2.0.0`, `@quenty/throttle@2.0.0`, `@quenty/time@2.0.0`, `@quenty/timesyncservice@2.0.0`, `@quenty/touchingpartutils@2.0.0`, `@quenty/trajectory@2.0.0`, `@quenty/transparencyservice@2.0.0`, `@quenty/uiobjectutils@2.0.0`, `@quenty/ultrawidecontainerutils@2.0.0`, `@quenty/utf8@2.0.0`, `@quenty/valuebaseutils@2.0.0`, `@quenty/valueobject@2.0.0`, `@quenty/vector3int16utils@2.0.0`, `@quenty/vector3utils@2.0.0`, `@quenty/weldconstraintutils@2.0.0`
  - fix: Remove peer dependencies. This is because lerna doesn't really support peer dependencies being linked and getting a new version on build, which is unfortunate. [#209](https://github.com/Quenty/NevermoreEngine/pull/209) ([@Quenty](https://github.com/Quenty))
  - feat!: Add new loader to Nevermore [#209](https://github.com/Quenty/NevermoreEngine/pull/209) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Fri Aug 06 2021)

#### 🐛 Bug Fix

- `@quenty/clienttranslator@2.0.1`
  - fix: JSONTranslator fails to resolve to anything but english in run mode ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Fri Aug 06 2021)

#### 🐛 Bug Fix

- `@quenty/camera@2.0.1`, `@quenty/cmdrservice@1.0.1`, `@quenty/ik@2.0.1`, `@quenty/permissionprovider@2.0.1`
  - fix: Fix version numbers locked to canary versions [#204](https://github.com/Quenty/NevermoreEngine/pull/204) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Fri Aug 06 2021)

#### 💥 Breaking Change

- `@quenty/cmdrservice@1.0.0`
  - feat!: Add CmdrService package [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/permissionprovider@2.0.0`
  - feat!: Permission provider now has the following features: [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/scoredactionservice@2.0.0`
  - feat!: Make ScoredActionService use ServiceBag [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/ik@2.0.0`
  - feat!: Make IKRig use ServiceBag [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/rigbuilderutils@1.0.0`
  - feat!: Add RigBuilderUtils package [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/ragdoll@2.0.0`
  - feat!: Make Ragdoll use servicebag [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/camera@2.0.0`
  - feat!: cameras use service bag [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/clienttranslator@2.0.0`
  - feat!: Remove ClientTranslator in favor of localized JSONTranslator [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))

#### 🚀 Enhancement

- `@quenty/binder@2.0.0`, `@quenty/playerbinder@2.0.0`, `@quenty/playerhumanoidbinder@2.0.0`
  - feat: Ensure that we can pass in the servicebag into inherited binders [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/binder@2.0.0`
  - feat: Support passing in servicebags into binder objects [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
  - feat: Binder passes in any amount of arguments into constructor [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/servicebag@1.0.0`
  - feat: Add servicebag package [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/qframe@2.0.0`
  - feat: Change how QFrame calculates multiplication and power [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- chore: Add funding links [#200](https://github.com/Quenty/NevermoreEngine/pull/200) ([@Quenty](https://github.com/Quenty))
- docs: Update readme clarifying state of repository [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- chore: Remove quenty.org specific libraries [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- `@quenty/selectionimageutils@2.0.0`
  - fix: Make SelectionImageUtils not use dialog templates (bad dependency) [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/permissionprovider@2.0.0`
  - docs: Add documentation to PermissionProvider [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))
- `@quenty/acceltween@2.0.0`, `@quenty/actionmanager@2.0.0`, `@quenty/adorneeutils@2.0.0`, `@quenty/animationgroup@2.0.0`, `@quenty/animationprovider@2.0.0`, `@quenty/animationtrackutils@2.0.0`, `@quenty/applytagtotaggedchildren@2.0.0`, `@quenty/attributeutils@2.0.0`, `@quenty/axisangleutils@2.0.0`, `@quenty/badgeutils@2.0.0`, `@quenty/baseobject@2.0.0`, `@quenty/basicpane@2.0.0`, `@quenty/bezierutils@2.0.0`, `@quenty/binarysearch@2.0.0`, `@quenty/binder@2.0.0`, `@quenty/boundingboxutils@2.0.0`, `@quenty/boundlinkutils@2.0.0`, `@quenty/brio@2.0.0`, `@quenty/buttonhighlightmodel@2.0.0`, `@quenty/buttonutils@2.0.0`, `@quenty/camera@2.0.0`, `@quenty/camerastoryutils@2.0.0`, `@quenty/cancellabledelay@2.0.0`, `@quenty/canceltoken@2.0.0`, `@quenty/cframeserializer@2.0.0`, `@quenty/cframeutils@2.0.0`, `@quenty/characterparticleplayer@2.0.0`, `@quenty/characterutils@2.0.0`, `@quenty/clienttranslator@2.0.0`, `@quenty/clipcharacters@2.0.0`, `@quenty/collectionserviceutils@2.0.0`, `@quenty/color3serializationutils@2.0.0`, `@quenty/color3utils@2.0.0`, `@quenty/colorsequenceutils@2.0.0`, `@quenty/contentproviderutils@2.0.0`, `@quenty/coreguienabler@2.0.0`, `@quenty/coreguiutils@2.0.0`, `@quenty/cubicspline@2.0.0`, `@quenty/datastore@2.0.0`, `@quenty/debounce@2.0.0`, `@quenty/deferred@2.0.0`, `@quenty/draw@2.0.0`, `@quenty/enabledmixin@2.0.0`, `@quenty/equippedtracker@2.0.0`, `@quenty/experiencecalculator@2.0.0`, `@quenty/fakeskybox@2.0.0`, `@quenty/firstpersoncharactertransparency@2.0.0`, `@quenty/friendutils@2.0.0`, `@quenty/functionutils@2.0.0`, `@quenty/gamescalingutils@2.0.0`, `@quenty/gameversionutils@2.0.0`, `@quenty/generatewithmixin@2.0.0`, `@quenty/genericscreenguiprovider@2.0.0`, `@quenty/geometryutils@2.0.0`, `@quenty/getgroundplane@2.0.0`, `@quenty/getmechanismparts@2.0.0`, `@quenty/getpercentexposedutils@2.0.0`, `@quenty/grouputils@2.0.0`, `@quenty/guitriangle@2.0.0`, `@quenty/guivisiblemanager@2.0.0`, `@quenty/hapticfeedbackutils@2.0.0`, `@quenty/hintscoringutils@2.0.0`, `@quenty/httppromise@2.0.0`, `@quenty/humanoidanimatorutils@2.0.0`, `@quenty/humanoiddescriptionutils@2.0.0`, `@quenty/humanoidkillerutils@2.0.0`, `@quenty/humanoidmovedirectionutils@2.0.0`, `@quenty/humanoidteleportutils@2.0.0`, `@quenty/humanoidtracker@2.0.0`, `@quenty/humanoidutils@2.0.0`, `@quenty/ik@2.0.0`, `@quenty/inputkeymaputils@2.0.0`, `@quenty/inputmode@2.0.0`, `@quenty/inputobjectutils@2.0.0`, `@quenty/insertserviceutils@2.0.0`, `@quenty/instanceutils@2.0.0`, `@quenty/isamixin@2.0.0`, `@quenty/jsonutils@2.0.0`, `@quenty/jumpbuttonutils@2.0.0`, `@quenty/linearsystemssolver@2.0.0`, `@quenty/linkutils@2.0.0`, `@quenty/lipsum@2.0.0`, `@quenty/loader@2.0.0`, `@quenty/localizedtextutils@2.0.0`, `@quenty/maid@2.0.0`, `@quenty/markdownrender@2.0.0`, `@quenty/marketplaceutils@2.0.0`, `@quenty/math@2.0.0`, `@quenty/meshutils@2.0.0`, `@quenty/metricutils@2.0.0`, `@quenty/modelappearance@2.0.0`, `@quenty/modeltransparencyeffect@2.0.0`, `@quenty/mouseovermixin@2.0.0`, `@quenty/mouseshiftlockservice@2.0.0`, `@quenty/multipleclickutils@2.0.0`, `@quenty/networkownerservice@2.0.0`, `@quenty/networkownerutils@2.0.0`, `@quenty/networkropeutils@2.0.0`, `@quenty/nocollisionconstraintutils@2.0.0`, `@quenty/numberrangeutils@2.0.0`, `@quenty/numbersequenceutils@2.0.0`, `@quenty/numbertoinputkeyutils@2.0.0`, `@quenty/octree@2.0.0`, `@quenty/optional@2.0.0`, `@quenty/overriddenproperty@2.0.0`, `@quenty/particleengine@2.0.0`, `@quenty/parttouchingcalculator@2.0.0`, `@quenty/pathfindingutils@2.0.0`, `@quenty/permissionprovider@2.0.0`, `@quenty/physicsutils@2.0.0`, `@quenty/pillbacking@2.0.0`, `@quenty/playerbinder@2.0.0`, `@quenty/playerhumanoidbinder@2.0.0`, `@quenty/playersservicepromises@2.0.0`, `@quenty/playerthumbnailutils@2.0.0`, `@quenty/polynomialutils@2.0.0`, `@quenty/preferredparentutils@2.0.0`, `@quenty/probability@2.0.0`, `@quenty/promise@2.0.0`, `@quenty/pseudolocalize@2.0.0`, `@quenty/qframe@2.0.0`, `@quenty/qgui@2.0.0`, `@quenty/quaternion@2.0.0`, `@quenty/r15utils@2.0.0`, `@quenty/racketingropeconstraint@2.0.0`, `@quenty/ragdoll@2.0.0`, `@quenty/randomutils@2.0.0`, `@quenty/raycaster@2.0.0`, `@quenty/region3int16utils@2.0.0`, `@quenty/region3utils@2.0.0`, `@quenty/remotefunctionutils@2.0.0`, `@quenty/remoting@2.0.0`, `@quenty/rotatinglabel@2.0.0`, `@quenty/roundedbackingbuilder@2.0.0`, `@quenty/rx@2.0.0`, `@quenty/rxbinderutils@2.0.0`, `@quenty/scoredactionservice@2.0.0`, `@quenty/scrollingframe@2.0.0`, `@quenty/selectionimageutils@2.0.0`, `@quenty/setmechanismcframe@2.0.0`, `@quenty/signal@2.0.0`, `@quenty/snackbar@2.0.0`, `@quenty/socialserviceutils@2.0.0`, `@quenty/soundpromiseutils@2.0.0`, `@quenty/spring@2.0.0`, `@quenty/sprites@2.0.0`, `@quenty/statestack@2.0.0`, `@quenty/steputils@2.0.0`, `@quenty/streamingutils@2.0.0`, `@quenty/string@2.0.0`, `@quenty/sunpositionutils@2.0.0`, `@quenty/symbol@2.0.0`, `@quenty/table@2.0.0`, `@quenty/teamtracker@2.0.0`, `@quenty/teamutils@2.0.0`, `@quenty/templateprovider@2.0.0`, `@quenty/terrainutils@2.0.0`, `@quenty/textfilterservice@2.0.0`, `@quenty/textfilterutils@2.0.0`, `@quenty/throttle@2.0.0`, `@quenty/time@2.0.0`, `@quenty/timesyncservice@2.0.0`, `@quenty/touchingpartutils@2.0.0`, `@quenty/trajectory@2.0.0`, `@quenty/transparencyservice@2.0.0`, `@quenty/uiobjectutils@2.0.0`, `@quenty/ultrawidecontainerutils@2.0.0`, `@quenty/utf8@2.0.0`, `@quenty/valuebaseutils@2.0.0`, `@quenty/valueobject@2.0.0`, `@quenty/vector3int16utils@2.0.0`, `@quenty/vector3utils@2.0.0`, `@quenty/weldconstraintutils@2.0.0`
  - docs: Remove Changelog from README.md in favor of CHANGELOG.md which will be generated [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
  - fix: Adjust CI badge to show automatic build and release state [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
  - fix: Add CI and CD [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- `@quenty/acceltween@2.0.0`, `@quenty/actionmanager@2.0.0`, `@quenty/adorneeutils@2.0.0`, `@quenty/animationgroup@2.0.0`, `@quenty/animationprovider@2.0.0`, `@quenty/animationtrackutils@2.0.0`, `@quenty/applytagtotaggedchildren@2.0.0`, `@quenty/attributeutils@2.0.0`, `@quenty/axisangleutils@2.0.0`, `@quenty/badgeutils@2.0.0`, `@quenty/baseobject@2.0.0`, `@quenty/basicpane@2.0.0`, `@quenty/bezierutils@2.0.0`, `@quenty/binarysearch@2.0.0`, `@quenty/binder@2.0.0`, `@quenty/boundingboxutils@2.0.0`, `@quenty/boundlinkutils@2.0.0`, `@quenty/brio@2.0.0`, `@quenty/buttonhighlightmodel@2.0.0`, `@quenty/buttonutils@2.0.0`, `@quenty/camera@2.0.0`, `@quenty/camerastoryutils@2.0.0`, `@quenty/cancellabledelay@2.0.0`, `@quenty/canceltoken@2.0.0`, `@quenty/cframeserializer@2.0.0`, `@quenty/cframeutils@2.0.0`, `@quenty/characterparticleplayer@2.0.0`, `@quenty/characterutils@2.0.0`, `@quenty/clienttranslator@2.0.0`, `@quenty/clipcharacters@2.0.0`, `@quenty/collectionserviceutils@2.0.0`, `@quenty/color3serializationutils@2.0.0`, `@quenty/color3utils@2.0.0`, `@quenty/colorsequenceutils@2.0.0`, `@quenty/contentproviderutils@2.0.0`, `@quenty/coreguienabler@2.0.0`, `@quenty/coreguiutils@2.0.0`, `@quenty/cubicspline@2.0.0`, `@quenty/datastore@2.0.0`, `@quenty/debounce@2.0.0`, `@quenty/deferred@2.0.0`, `@quenty/draw@2.0.0`, `@quenty/enabledmixin@2.0.0`, `@quenty/equippedtracker@2.0.0`, `@quenty/experiencecalculator@2.0.0`, `@quenty/fakeskybox@2.0.0`, `@quenty/firstpersoncharactertransparency@2.0.0`, `@quenty/friendutils@2.0.0`, `@quenty/functionutils@2.0.0`, `@quenty/gamescalingutils@2.0.0`, `@quenty/gameversionutils@2.0.0`, `@quenty/generatewithmixin@2.0.0`, `@quenty/genericscreenguiprovider@2.0.0`, `@quenty/geometryutils@2.0.0`, `@quenty/getgroundplane@2.0.0`, `@quenty/getmechanismparts@2.0.0`, `@quenty/getpercentexposedutils@2.0.0`, `@quenty/grouputils@2.0.0`, `@quenty/guitriangle@2.0.0`, `@quenty/guivisiblemanager@2.0.0`, `@quenty/hapticfeedbackutils@2.0.0`, `@quenty/hintscoringutils@2.0.0`, `@quenty/httppromise@2.0.0`, `@quenty/humanoidanimatorutils@2.0.0`, `@quenty/humanoiddescriptionutils@2.0.0`, `@quenty/humanoidkillerutils@2.0.0`, `@quenty/humanoidmovedirectionutils@2.0.0`, `@quenty/humanoidteleportutils@2.0.0`, `@quenty/humanoidtracker@2.0.0`, `@quenty/humanoidutils@2.0.0`, `@quenty/ik@2.0.0`, `@quenty/inputkeymaputils@2.0.0`, `@quenty/inputmode@2.0.0`, `@quenty/inputobjectutils@2.0.0`, `@quenty/insertserviceutils@2.0.0`, `@quenty/instanceutils@2.0.0`, `@quenty/isamixin@2.0.0`, `@quenty/jsonutils@2.0.0`, `@quenty/jumpbuttonutils@2.0.0`, `@quenty/linearsystemssolver@2.0.0`, `@quenty/linkutils@2.0.0`, `@quenty/lipsum@2.0.0`, `@quenty/loader@2.0.0`, `@quenty/localizedtextutils@2.0.0`, `@quenty/maid@2.0.0`, `@quenty/markdownrender@2.0.0`, `@quenty/marketplaceutils@2.0.0`, `@quenty/math@2.0.0`, `@quenty/meshutils@2.0.0`, `@quenty/metricutils@2.0.0`, `@quenty/modelappearance@2.0.0`, `@quenty/modeltransparencyeffect@2.0.0`, `@quenty/mouseovermixin@2.0.0`, `@quenty/mouseshiftlockservice@2.0.0`, `@quenty/multipleclickutils@2.0.0`, `@quenty/networkownerservice@2.0.0`, `@quenty/networkownerutils@2.0.0`, `@quenty/networkropeutils@2.0.0`, `@quenty/nocollisionconstraintutils@2.0.0`, `@quenty/numberrangeutils@2.0.0`, `@quenty/numbersequenceutils@2.0.0`, `@quenty/numbertoinputkeyutils@2.0.0`, `@quenty/octree@2.0.0`, `@quenty/optional@2.0.0`, `@quenty/overriddenproperty@2.0.0`, `@quenty/particleengine@2.0.0`, `@quenty/parttouchingcalculator@2.0.0`, `@quenty/pathfindingutils@2.0.0`, `@quenty/permissionprovider@2.0.0`, `@quenty/physicsutils@2.0.0`, `@quenty/pillbacking@2.0.0`, `@quenty/playerbinder@2.0.0`, `@quenty/playerhumanoidbinder@2.0.0`, `@quenty/playersservicepromises@2.0.0`, `@quenty/playerthumbnailutils@2.0.0`, `@quenty/polynomialutils@2.0.0`, `@quenty/preferredparentutils@2.0.0`, `@quenty/probability@2.0.0`, `@quenty/promise@2.0.0`, `@quenty/pseudolocalize@2.0.0`, `@quenty/qframe@2.0.0`, `@quenty/qgui@2.0.0`, `@quenty/quaternion@2.0.0`, `@quenty/r15utils@2.0.0`, `@quenty/racketingropeconstraint@2.0.0`, `@quenty/ragdoll@2.0.0`, `@quenty/randomutils@2.0.0`, `@quenty/raycaster@2.0.0`, `@quenty/region3int16utils@2.0.0`, `@quenty/region3utils@2.0.0`, `@quenty/remotefunctionutils@2.0.0`, `@quenty/remoting@2.0.0`, `@quenty/rotatinglabel@2.0.0`, `@quenty/roundedbackingbuilder@2.0.0`, `@quenty/rx@2.0.0`, `@quenty/rxbinderutils@2.0.0`, `@quenty/scoredactionservice@2.0.0`, `@quenty/scrollingframe@2.0.0`, `@quenty/selectionimageutils@2.0.0`, `@quenty/setmechanismcframe@2.0.0`, `@quenty/signal@2.0.0`, `@quenty/snackbar@2.0.0`, `@quenty/socialserviceutils@2.0.0`, `@quenty/soundpromiseutils@2.0.0`, `@quenty/spring@2.0.0`, `@quenty/sprites@2.0.0`, `@quenty/statestack@2.0.0`, `@quenty/steputils@2.0.0`, `@quenty/streamingutils@2.0.0`, `@quenty/string@2.0.0`, `@quenty/sunpositionutils@2.0.0`, `@quenty/symbol@2.0.0`, `@quenty/table@2.0.0`, `@quenty/teamtracker@2.0.0`, `@quenty/teamutils@2.0.0`, `@quenty/templateprovider@2.0.0`, `@quenty/terrainutils@2.0.0`, `@quenty/textfilterservice@2.0.0`, `@quenty/textfilterutils@2.0.0`, `@quenty/textserviceutils@2.0.0`, `@quenty/throttle@2.0.0`, `@quenty/time@2.0.0`, `@quenty/timesyncservice@2.0.0`, `@quenty/touchingpartutils@2.0.0`, `@quenty/trajectory@2.0.0`, `@quenty/transparencyservice@2.0.0`, `@quenty/uiobjectutils@2.0.0`, `@quenty/ultrawidecontainerutils@2.0.0`, `@quenty/utf8@2.0.0`, `@quenty/valuebaseutils@2.0.0`, `@quenty/valueobject@2.0.0`, `@quenty/vector3int16utils@2.0.0`, `@quenty/vector3utils@2.0.0`, `@quenty/weldconstraintutils@2.0.0`
  - chore: Add funding field to package.json [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
  - fix: Fix selene linting [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- `@quenty/camera@2.0.0`
  - fix: Fix CameraFrame.story [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))

---

# (Sat Jul 31 2021)

#### 🚀 Enhancement

- feat: Change how QFrame calculates multiplication and power [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))

#### 🐛 Bug Fix

- docs: Update readme clarifying state of repository [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- docs: Remove Changelog from README.md in favor of CHANGELOG.md which will be generated [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- fix: Adjust CI badge to show automatic build and release state [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- chore: Add funding field to package.json [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- chore: Remove quenty.org specific libraries [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- fix: Fix CameraFrame.story [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- fix: Fix selene linting [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))
- fix: Add CI and CD [#199](https://github.com/Quenty/NevermoreEngine/pull/199) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))