console.clear();
import { generate } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/generate

// generate sequences
generate(
  2,
  (x) => x <= 8,
  (x) => x + 3,
  (x) => x * x,
  3
).subscribe(console.log);
