import React from 'react';
import { BaseAnimation } from './inc';
import chain from '../packages/popmotion/lib/compositors/chain';
import composite from '../packages/popmotion/lib/compositors/composite';
import delay from '../packages/popmotion/lib/compositors/delay';
import crossfade from '../packages/popmotion/lib/compositors/crossfade';
import tween from '../packages/popmotion/lib/animations/tween';
import physics from '../packages/popmotion/lib/animations/physics';

//import { Chain, Composite, Delay, Crossfade, Merge, Parallel, Stagger } from './compositors';

export class Chain extends BaseAnimation {
  getAnimation = (styler) => chain(
    tween({ to: 300 }),
    physics({ to: 0 })
  ).start(styler.set('x'))
}

export class Crossfade extends BaseAnimation {
  getAnimation = (styler) => {
    const f = crossfade(
      tween({ to: 300 }),
      tween({ from: 300, to: 0 })
    ).start(styler.set('x'));

    tween().start(f.setBalance);
  }
}

export class Composite extends BaseAnimation {
  getAnimation = (styler) => composite({
    x: tween({ to: 300 }),
    y: tween({ to: 300 })
  }).start(styler.set)
}

export class Delay extends BaseAnimation {
  getAnimation = (styler) => chain(
    delay(500),
    () => tween({ to: 300 }).start(styler.set('x'))
  )
}

export class Merge extends BaseAnimation {
  // getAnimation = (styler) => merge(
  //   tween()
  // )
}

export class Parallel extends BaseAnimation {
  //getAnimation = (styler) => 
}

export class Stagger extends BaseAnimation {
  //getAnimation = (styler) => 
}