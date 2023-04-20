---
theme: ./theme
class: text-center
highlighter: shiki
lineNumbers: false
info: false
drawings:
  persist: false
transition: slide-left
css: unocss
monaco: true
---

# Mastering TypeScript

---

How you can go from the **Foundational Knowledge** to **Developing Advance Types**.

```ts
const fruit: string = 'apple';
```

to

```ts
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };
```

---

# any ⚔️ unknown

```ts {monaco}
const iAmAnything: any = 1;
const iAmUnknown: unknown = 1;

iAmAnything();
iAmUnknown();

if (typeof iAmUnknown === 'function') {
  iAmUnknown();
}
```

<!-- 
While `any` type is a necessary feature for TypeScript, and is primarily used for backward compatibility with JavaScript, its usage should be limited as much as possible, its excessive use will quickly lead to coding errors that will be difficult to find.
-->

---

## Quick Magic 🪄

<div class="mt-6"></div>

```ts {monaco}
const a = undefined;

var b = undefined;

let c = undefined;
```

<!-- 
It is able to infer the type based on variable type as well
-->

---

# Generics 🧬

Provides a mechanism to write code that doesn't need to specify a specific type.

- Can be used with `interface`, `class`, `function`.

```ts {monaco}
function reverse(items: any[]) {
  return items.reverse();
}

const reversed = reverse([1,2,3]);
```

<!-- 
Upto the caller to specify the type the generic function/class/interface
will be working with.
-->

---

## Constraining the type of T 🚧

In most instances, we will want to limit the type of `T` in order to only allow
a specific set of types to be used within our generic code.

```ts {monaco}
function getLength<T>(input: T): number {
  return input.length;
}

const l1 = getLength(123);
const l2 = getLength('dhruv');
```

---

## Generic from a Generic 🪝

Deriving generic types from other generic types.

```ts {monaco}
function getValue<T, Keys extends keyof T>(ob: T, key: Keys): T[Keys] | number {
  return ob[key] || 404;
}

const a = getValue({x: 1}, 'x')
```

---

## Conditional Types ⚖️

TypeScript conditional types allow you to define a type that depends on a condition. They are often used in generic types to specify different types based on a given condition.

Here's an example of how to use conditional types in TypeScript to create a type that is either an array or a single value, depending on the input:

```ts {monaco}
type ArrayOfValue<T> = T extends any[] ? T : [T];
```

---

## Pick

One of the Utility Types by TypeScript

```ts {monaco}
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

type Sub = Pick<User, 'firstName' | 'lastName'>;

type MyPick = 

```

<!--
<T, K extends keyof T> = {[k in K]: T[k]}
-->

---

## infer 🎲

Is used in conditional types to infer the type of a parameter or return value
based on some other type.

```ts {monaco}
type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never;
```

<!-- 
type MyReturnType<T> = T extends () => infer R ? R : never

const foo = () => 1

type Foo = MyReturnType<typeof foo>
-->
<!-- 
type ExtractValueType<T, K extends keyof T> = T extends {[k in K]: infer V} ? V : never;

const obj = {
  name: 'Dhruv',
  age: 21
}

type Bro = ExtractValueType<typeof obj, 'age'>
 -->

---
src: ./shared/follow-me.md
---
