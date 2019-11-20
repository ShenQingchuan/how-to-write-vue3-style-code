import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import Computed from '@/components/Computed.vue';

describe('Test: Computed.vue', () => {
  const localVue = createLocalVue();
  localVue.use(VueCompositionApi);

  const wrapper = shallowMount(Computed, {
    localVue,
  });

  it('0. It\'s at least a Vue Instance: ', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('1. Input the first name: ', () => {
    const firstNameInputer = wrapper.find('input[name="firstName"]');
    firstNameInputer.setValue('Hallon');
    expect(wrapper.vm.$data.state.firstName).toBe('Hallon');
  });

  it('2. Input the last name: ', () => {
    const lastNameInputer = wrapper.find('input[name="lastName"]');
    lastNameInputer.setValue('Smith');
    expect(wrapper.vm.$data.state.lastName).toBe('Smith');
  });

  it('2. check the full name: ', () => {
    const fullNameSpan = wrapper.find("div.full-name > span");
    expect(fullNameSpan.text()).toBe('Hallon Smith');
    expect(wrapper.vm.$data.fullName).toBe('Hallon Smith');
  });
});
