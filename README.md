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

TODO...

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
