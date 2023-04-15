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

<div v-click>
Provides a mechanism to write code that doesn't need to specify a specific type.
</div>

<!-- 
Upto the caller to specify the type the generic function/class/interface
will be working with.
-->
---
src: ./shared/follow-me.md
---
