---
theme: ./theme
class: text-center
highlighter: shiki
lineNumbers: false
info: false
drawings:
  persist: false
transition: slide-right
css: unocss
monaco: true
---

# Mastering TypeScript

---

# any V/S unknown

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
src: ./shared/follow-me.md
---
