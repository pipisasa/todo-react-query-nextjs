// function foo<T = string>(a: T): T[]{
//   return [a,a,a]
// }

// foo("foo") // ["foo", "foo", "foo"]
// foo<number>(4) // [4, 4, 4]


// type A = string | boolean | number | null | undefined | void | object | string[] | Array<string>

// type A = string;

// type A = 'A' | 'B' | 'C';
// type A = 'up' | 'down';
// type A = string | number;
// type A = string | null;
// type A = string | number;
// type B = A[];

// const a: B = [1, 'sda', 32, 'adsf'];


// type Foo<T = string> = {
//   a: string;
//   b: T,
// };

// const foo: Foo<number> = {
//   a: 'asdasd',
//   b: 21
// }

// const foo2: Foo<string> = {
//   a: 'asdasd',
//   b: 'asddas'
// }

// const foo3: Foo<Foo<number>> = {
//   a: 'asdasd',
//   b: {
//     a: 'sadasd',
//     b: 23423,
//   }
// }


// type Bar<T1, T2> = [T1, T2];

// const bar: Bar<string, Foo> = ['asdasd', { a: 'sdsd', b: 'test' }];

// type A = string[];
// type B = Array<string>;
// type C = [string, number, boolean];

// const a: A = ['asdasd', 'asdasd', 'asdfasdf', 'asdfasdf'];
// const b: B = ['asdasd', 'asdasd', 'asdfasdf', 'asdfasdf'];
// const c: C = ['asdasd', 42, false];

// const d = ['asdf', false] as const;

// type A = true | "asfasdf" | 32 | 2;

// const a: A = true;


// type A = {
//   a?: string;
//   b: number;
//   c: boolean;
// }

// type Keys = 'a' | 'c';

// type B = Omit<A, Keys>;

// type C = Pick<A, Keys>;

// type D = Exclude<'a' | 'b' | 'c', 'a'>;

// type E = Exclude<keyof A, 'a' | 'c'>;

// type F = Pick<A, E>

// type B = Partial<A>;
// type C = Required<A>;

// type F = Record<string, number>;

// const f: F = {
//   'asdfasd': 1223,
//   'asdfasdf': 3241234,
// }
// const g: Record<'a' | 'b' | 'c', boolean | 42 | 'red'> = {

// }


// const g = {
//   'asd': 'asdasd'
// }

// const foo = {
//   // asdasdasdf: 'adsfasdf',
//   // 'background-color': 'red',
//   // 42: 'asdasd',
//   0: 1,
//   1: 2,
//   2: 3,
// }

// foo[1]


// arr[0]

// foo[42];

// foo['background-color'];
// // foo.asdasdasdf
// foo['asdasdasdf'];

// const arr = [1, 2, 3];
// arr[2]

// let a = {
//   "asdfasdf": "asfasdf",
// }



// <div className="container mx-auto px-4">
// <div className="mt-4 flex gap-2 flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col">
//   <div className="bg-red-500 p-4 rounded-md">
//     hello
//   </div>
//   <div className="bg-red-500 p-4 rounded-md hover:bg-blue-500">
//     hello
//   </div>
//   <div className="bg-red-500 p-4 rounded-md">
//     hello
//   </div>
//   <div className="bg-red-500 p-4 rounded-md">
//     hello
//   </div>
// </div>

// <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 ">
//   <div className="bg-green-500 p-4 rounded-md hover:bg-blue-500">
//     hello 1
//   </div>
//   <div className="bg-green-500 p-4 rounded-md hover:bg-blue-500">
//     hello 2
//   </div>
//   <div className="bg-green-500 p-4 rounded-md hover:bg-blue-500 row-span-2">
//     hello 3
//   </div>
//   <div className="bg-green-500 p-4 rounded-md hover:bg-blue-500 col-span-2">
//     hello 4
//   </div>
// </div>
// </div>