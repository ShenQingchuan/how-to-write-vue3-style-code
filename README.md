# How to write Vue3.0-style Code?

## 🚪Motivation:

I am a student from SICNU, after I attended the VueConf 2019 in
Shanghai, I'm focusing on how to **try Vue3.0 in Typescript**.

But When the CompositionAPI-RFC was published and accepted by our
community, I guess there would be some ways in VueCLI 4.0 for me to create a vue project with Typescript and  Composition API, but the answer is "Not yet...", What a pity!☹️

So I decided to make my own!

(BTW, I found an awesome starter project with Composition API 
and TSX, [click here!](https://github.com/liximomo/vue-composition-api-tsx-example) )

## 📚Documentation:

### Install Composition API in your project

```bash
# via package manager
npm install --save @vue/composition-api
yarn add @vue/composition-api
```

```html
<!-- via CDN -->
<script src="https://unpkg.com/@vue/composition-api/dist/vue-composition-api.umd.js"></script>
```

### Load it in main.ts:

You must install`@vue/composition-api` via `Vue.use()` before using other APIs:

```ts
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
```

After installing the plugin you can use the Composition API to compose your component.

### Create component:

If you're writing a single file `.vue` component, it should
be like this before you write any code:

```html
<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  // introduce it later...
});
</script>
```

### Binding Raw data:

the Object in `createComponent()` is a little bit different
from the `2.6.x` style, but you don't need to worry about it
at all, it's easy to learn!

```js
{
  name: 'Counter',
  props: {
  },
  setup(props) {
    // this seems very similar to React... 😁LOL

    return { 
      // you can put the return value by 2.6.x `data()` here
    }
  }
}
```

For more details, you can run this project, and check the `src/components/Counter.vue` example.

### ⁉️ Warnings:

Here are something need to be noticed from my experience when
building this project:

#### VueRouter Issue:

Now I temporarilly use `() => import('xxx.vue')` for `src/router/index.ts`,

I've already given an example for you to test and reproduce this problem.

```ts
// * Test for Warnings(1):
import RouterOne from '@/views/RouterOne.vue';                // uncomment this line

const routes = [
  {
    path: '/counter',
    name: 'counter',
    // component: () => import('../views/RouterOne.vue'),     // comment this line
    component: RouterOne,                                     // uncomment this line
  },
];
```
and `yarn serve`, after you run this project, there's an `TypeCheck Error`, the logs may be like this:

```ts
ERROR in /Users/student/how-to-write-vue3-style-code/src/router/index.ts(18,30):
18:30 Argument of type '{ mode: "history"; base: any; routes: { path: string; name: string; component: VueProxy<ComponentPropsOptions<Data>, Data>; }[]; }' is not assignable to parameter of ty
pe 'RouterOptions'.
  Types of property 'routes' are incompatible.
    Type '{ path: string; name: string; component: VueProxy<ComponentPropsOptions<Data>, Data>; }[]' is not assignable to type 'RouteConfig[]'.
      Type '{ path: string; name: string; component: VueProxy<ComponentPropsOptions<Data>, Data>; }' is not assignable to type 'RouteConfig'.
        Types of property 'component' are incompatible.
          Type 'VueProxy<ComponentPropsOptions<Data>, Data>' is not assignable to type 'VueConstructor<Vue> | ComponentOptions<Vue, DefaultData<Vue>, DefaultMethods<Vue>, DefaultComputed, Prop
sDefinition<...>, Record<...>> | AsyncComponentPromise<...> | AsyncComponentFactory<...> | undefined'.
            Type 'ComponentOptions<Vue, { [x: string]: unknown; }, never, never, ComponentPropsOptions<Data>, ExtractPropTypes<ComponentPropsOptions<Data>, false>> & VueConstructorProxy<...>' 
is missing the following properties from type 'VueConstructor<Vue>': extend, nextTick, set, delete, and 9 more.
    16 | ];
    17 | 
  > 18 | const router = new VueRouter({
       |                              ^
    19 |   mode: 'history',
    20 |   base: process.env.BASE_URL,
    21 |   routes,
Version: typescript 3.7.2
Time: 627ms
```
I guess this might be a problem caused by the `vue` and `@vue/composition-api` type definition, but I didn't figure it out.

If you got any idea, please send me an issue.

**Solution:**

If you really need to import a router view component like this, then you **MUST** provide
a `props`, even it's just `props: {}`, then the TypeCheck won't report any error;


## 🚀Try:

```bash
# Project setup
npm install
yarn install

# Compiles and hot-reloads for development
npm run serve
yarn serve

# Compiles and minifies for production
npm run build
yarn build

# Lints and fixes files
npm run lint
yarn lint

# Run a unit test
npm run test:unit
yarn test:unit
```

## 📖References:

[【vuejs/composition-api】README-zh-CN.md 中文文档](https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md)
