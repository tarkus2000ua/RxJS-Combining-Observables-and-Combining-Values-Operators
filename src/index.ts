console.log(`Hi, Rxjs`);

import {
  concatDemo1,
  concatDemo2,
  concatDemo3,
  concatDemo4,
  mergeDemo1,
  mergeDemo2,
  mergeDemo3,
  raceDemo,
  startWithDemo,
  endWithDemo,
} from "./01-combining-observables";

import {
  forkJoinDemo1,
  forkJoinDemo2,
  forkJoinDemo3,
  zipDemo1,
  zipDemo2,
  withLatestFromDemo1,
  withLatestFromDemo2,
  withLatestFromDemo3,
  combineLatestDemo1,
  combineLatestWithDemo1,
  zipDemo3,
  forkJoinDemo4,
  forkJoinDemo5,
  zipDemo4,
  zipWithDemo1,
  zipWithDemo2,
  zipWithDemo3,
  zipWithDemo4,
} from "./02-combining-values";
import { runner } from "./03-practice/tasks";

// ***************************************************
// *                            Combination Strategies
// ***************************************************
concatDemo1();
concatDemo2();
concatDemo3();
concatDemo4();
mergeDemo1();
mergeDemo2();
mergeDemo3();
raceDemo();
startWithDemo();
endWithDemo();

// ***************************************************
// *                            07 - Combining Values
// ***************************************************
combineLatestDemo1();
combineLatestWithDemo1();
zipDemo1();
zipDemo2();
zipDemo3();
zipDemo4();
zipWithDemo1();
zipWithDemo2();
zipWithDemo3();
zipWithDemo4();
forkJoinDemo1();
forkJoinDemo2();
forkJoinDemo3();
forkJoinDemo4();
forkJoinDemo5();
withLatestFromDemo1();
withLatestFromDemo2();
withLatestFromDemo3();

runner();
