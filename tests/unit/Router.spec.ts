import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';

import VueRouter from 'vue-router';
import App from '@/App.vue'
import RouterOne from '@/views/RouterOne.vue';

describe('Test: Vue Router', () => {
  const localVue = createLocalVue();
  localVue.use(VueCompositionApi);
  localVue.use(VueRouter);

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/counter',
        name: 'counter',
        component: RouterOne,
      },
    ],
  });

  const wrapper = mount(App, {
    localVue,
    router,
    stubs: {
      RouterLink: RouterLinkStub
    }
  });

  it('1. Has a <router-link> to /counter', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('counter');
  });

  it('2. After clicked the link, check <router-view> text', () => {
    router.push('/counter');
    console.log(wrapper.text());
    expect(wrapper.find(RouterOne).exists()).toBe(true);
  });
})
