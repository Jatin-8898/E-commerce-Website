# Changelog

Pose adheres to [Semantic Versioning](http://semver.org/).

## [1.0.24] 2018-03-28

### Update

- Libralised `PoserProps` type.

## [1.0.23] 2018-03-28

### Fixed

- Fixed flipped-axis FLIP measurements

## [1.0.22] 2018-03-28

### Fixed

- Fixed bug with FLIP `render` happening too late.

## [1.0.21] 2018-03-28

### Fixed

- Improvement to FLIP algo that measures offset from the center of each bounding box.

## [1.0.20] 2018-03-26

### Fixed

- Now parsing numerical values from Stylefire from string to number.

## [1.0.19] 2018-03-26

### Fixed

- Fixed type error where the `poser.flip` callback was set to mandatory

## [1.0.18] 2018-03-25

### Fixed

- There's a bug in Stylefire where Firefox doesn't respect `originX` or `originY` as separate values. For now we're setting `transformOrigin` as a unified value instead.

## [1.0.17] 2018-03-25

### Fixed

- If `x` or `y` were only defined in dragBounds, they couldn't previously be set as percentages.

## [1.0.16] 2018-03-25

### Added

- Default animation for `scale` props increases damping if `to: 0`.

## [1.0.15] 2018-03-25

### Added

- Default animation for `opacity` is now a tween with linear easing
- Default animation for `rotate` props is now underdamped `spring`

## [1.0.14] 2018-03-23

### Fixed

- Bad merge

## [1.0.13] 2018-03-23

### Added

- `dragBounds` can be provided as percentages.
- Dragging now still works if `x` or `y` have been defined as percentages.

## [1.0.12] 2018-03-22

### Fixed

- Updating `getPoses` to strip new properties.

## [1.0.11] 2018-03-22

### Added

- `values` property to allow external creation and ownership of values.

## [1.0.10] 2018-03-21

### Fixed

- Fixed bug where if only defined pose had values set to `true`, it set that as the initial value. Instead we're setting `dragEnd` and `dragging` to `0`.
- `measure` now returns element dimensions.

## [1.0.9] 2018-03-21

### Fixed

- Merging user and internal drag poses.

## [1.0.8] 2018-03-20

### Added

- Temporarily remove transform before measuring final FLIP position in the event that we're mid-flip.
- Added array type to `initialPose`

## [1.0.7] 2018-03-19

### Added

- Positional FLIP

## [1.0.6] 2018-03-19

### Added

- `initialPose` can now be set as an array of multiple poses.

## [1.0.5] 2018-03-19

### Fixed

- FLIP bug fixes.

## [1.0.4] 2018-03-19

### Fixed

- Bug fixes.

## [1.0.3] 2018-03-18

### Update

- Fixing imports.

## [1.0.2] 2018-03-18

### Update

- Exporting `Poser` type.

## [1.0.1] 2018-03-18

### Update

- Exporting `PoserProps` type.

## [1.0.0] 2018-03-18

### Changed

- Finalised API.

## [0.2.3] 2018-03-14

### Changed

- Rewritten in TypeScript.

## [0.2.2] 2018-03-13

### Changed

- Adjusted the default animations.

## [0.2.1] 2018-03-13

### Added

- Ability to pass through custom props to `poser.set(pose, props)`. These will be passed through to the `transition` method of that pose.

### Fixed

- `passive` linking fixed in same-poser.

## [0.2.1] 2018-03-12

### Added

- `onChange` map now available to add onChange events.

## [0.2.0] 2018-03-12

### Changed

- `addChild` now creates and returns the new `Poser`.

## [0.1.1] 2018-03-12

### Added

- `staggerDirection` property.

## [0.1.0] 2018-03-11

### Added

- `onDragStart`, `onDragEnd`, `dragBounds` properties.

## [0.0.16] 2018-03-10

### Removed

- Removed `spawnChild` method.

## [0.0.15] 2018-03-10

### Added

- Undocumented `spawnChild` method.

## [0.0.14] 2018-03-09

### Fixed

- Replacing falsy check for initial value.

## [0.0.13] 2018-03-09

### Fixed

- Checking if `type` exists before running `parse`.

## [0.0.12] 2018-03-09

### Fixed

- Checking if value exists on initialPose before initializing with it.

## [0.0.11] 2018-03-09

### Fixed

- Fixing special value types on `initialPose`.

## [0.0.10] 2018-03-06

### Fixed

- Fix to second `update`.

## [0.0.9] 2018-03-06

### Fixed

- New FLIP properties are now `update`d twice to reset velocity to `0`.

## [0.0.8] 2018-03-06

### Added

- SVG support
- Updated `popmotion` to `8.1.16`

## [0.0.7] 2018-03-05

### Fixes

- Fixing `delay` property

### Updates

- Adding Changelog