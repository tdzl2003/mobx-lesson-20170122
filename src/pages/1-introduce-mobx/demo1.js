/**
 * Created by tdzl2003 on 1/20/17.
 */

import { observable, autorun } from 'mobx';

export default function demo1() {
  const value = observable(0);

  autorun(() => {
    console.log(`Value is: ${value.get()}`);
  });

  value.set(2);
  value.set(8);
  value.set(-3);
}
