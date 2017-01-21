/**
 * Created by tdzl2003 on 1/20/17.
 */

import { observable, computed, autorun } from 'mobx';

export default function demo4() {
  const value = observable([0]);

  autorun(() => {
    console.log(`value.length is: ${value.length}`);
  });

  autorun(() => {
    console.log(`value[0] is: ${value[0]}`);
  });

  // const first = computed(() => value[0]);
  //
  // autorun(() => {
  //   console.log(`first is: ${first.get()}`);
  // });

  value[0] = 1;
  value.push(2);
  value.push(3);

  value.splice(0, 1);
}
