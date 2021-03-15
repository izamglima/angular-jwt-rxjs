# Derivative Data with RxJS & JWT Auth - Angular

Studies of RxJS operators such as:
Subject, BehaviorSubject, replaySubject, combineLatest, map, pipe, tap, forkJoin, mergeMap, shareReplay

- Subject:
Is a special type of Observable that can multicast (be delivered to many) at once in a single execution, while typical observables would be comparable to a 1 on 1 conversation (unicast).
No initial value or replay behavior.
Can act as a Observable or a Observer(next, error, complete) subscribing.

- BehaviorSubject:
Requires an initial value and emits the current value - the last emitted - to new subscribers.
In this application, it gets the current user from local storage, assign the value and emits the value as a new Observable asObservable()

- replaySubject:
"replays" or emits old values to new subscribers. It buffers a set number of values and will emit those values immediately to any new subscribers in addition to emitting new values to existing subscribers.
In this application, the replaySubject observable handles the changes of the different products id's that user can select on products list.

- combineLatest:
Will combine multiple continuous streams into a new stream using the lastest emitted values. Emits an array of values, one for each stream. In this application is been used to get all products, get all categories and transform both streams into a mapped array of products with category added
map:
transform emitted values from an observable source and emits the resulting values as an Observable

- pipe:
chain operators

- tap:
console.log - for example to check the current values passing through the stream

- forkJoin:
Emit the last emitted value from multiple observables, one example is to use on multiple requests on page load and only take action after the responses has been received for all.


- User Registration and Login Example using JWT

- Collecting data from a backend server

- Combining data streams with other data streams to handle foreign key and aggregate relationships

- Caching the streams in a service so they can be readily reused

- All without a subscription