import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import Counter from '@/components/Counter.vue';

describe('Test: Counter.vue', () => {
  const localVue = createLocalVue();
  localVue.use(VueCompositionApi);

  const wrapper = shallowMount(Counter, {
    propsData: { msg: 'Welcome to the Vue.js + TypeScript App' },
    localVue,
  });

  it('0. It\'s a Vue Instance: ', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('1. Increase the counter value from 0 to 2: ', () => {
    // initial state:
    expect(wrapper.vm.$data.count).toBe(0);
    wrapper.findAll('button').at(0).trigger('click');
    wrapper.findAll('button').at(0).trigger('click');
    expect(wrapper.vm.$data.count).toBe(2);
  });

  it('2. Reset the counter value from 2 to 0: ', () => {
    // initial state:
    expect(wrapper.vm.$data.count).toBe(2);
    wrapper.findAll('button').at(1).trigger('click');
    expect(wrapper.vm.$data.count).toBe(0);
  });
});
