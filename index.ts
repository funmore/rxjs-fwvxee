import './style.css';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
// Open the console in the bottom right to see results.

const foo = new Observable(subscriber => {
  console.log('subscriber', subscriber);
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another
});

console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');

// this func create a stream / pattern that will happen , once some obj subscribe to this stream or pattern , the stream is happening, then the
const stream = new Observable(subscriber => {
  setTimeout(() => {
    console.log('stream', 500);
    subscriber.next(500);
  }, 500);
  setTimeout(() => {
    console.log('stream', 1000);

    subscriber.next(1000);
  }, 1000);
  setTimeout(() => {
    console.log('stream', 3000);

    subscriber.next(3000);
  }, 3000);
  setTimeout(() => {
    console.log('stream', 40000);

    subscriber.next(40000);
  }, 4000);
});

const subscription1 = stream.subscribe({
  complete: () => console.log('done'),
  next: v => console.log(v),
  error: () => console.log('errror')
});
const subscription3 = stream.subscribe(v => {
  console.log('subscription3 ', v);
});

// const subscription2 = stream.subscribe({
//   next: v => console.log('subscription2')
// });
// setTimeout(() => {
//   subscription2.unsubscribe();
// }, 100);

// of(1, 2, 3)
//   .pipe(map(x => x * x))
//   .subscribe(v => {
//     console.log(`value: ${v}`);
//   });
// of(1, 2, 3).subscribe(v => {
//   console.log(v);
// });
// of(1, 2, 3)
//   .pipe(first())
//   .subscribe(v => console.log(`first value: ${v}`));
// new Observable(subscriber => {
//   return subscriber;
// }).subscribe(v => console.log('v', 12));
