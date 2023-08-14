console.clear();
import { generate } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/generate

// generate sequences

// ex1
// generate(
//   2,
//   (x) => x <= 8,
//   (x) => x + 3,
//   (x) => x * x
// ).subscribe(console.log);

// ex2
// generate(
//   2,
//   (x) => x <= 8,
//   (x) => x + 3
// ).subscribe(console.log);

const src$ = generate(
  1, // Initial state
  (value) => value <= 10, // Condition
  (value) => value + 2, // Iterator
  (value) => value * value // Result selector
);

src$.subscribe((el) => {
  console.log(el);
});
