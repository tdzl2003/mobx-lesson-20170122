/**
 * Created by tdzl2003 on 1/20/17.
 */

import { observable, autorun } from 'mobx';

export default function demo3() {
  const value = observable({
    foo: 0,
    bar: 0,
    get condition() {
      return this.foo >= 0;
    },
  });

  autorun(() => {
    console.log(`value.foo is: ${value.foo}`);
  });

  autorun(() => {
    console.log(`value.condition is: ${value.condition}`);
  });

  value.foo = 2;
  value.foo = 8;
  value.foo = -3;

  value.bar = 1;
  value.bar = 2;
}
