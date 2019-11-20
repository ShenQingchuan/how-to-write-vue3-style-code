<template>
  <div class="computed">
    <div class="flex-box">
      <label for="firstName">First Name: </label>
      <input name="firstName" type="text"
        v-model="state.firstName" placeholder="input first name...">
    </div>

    <div class="flex-box">
      <label for="lastName">Last Name: </label>
      <input name="lastName" type="text"
        v-model="state.lastName" placeholder="input last name...">
    </div>

    <div class="full-name">Full Name: <span>{{ fullName }}</span> </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api';

export default createComponent({
  name: 'Computed',
  props: {},
  setup(props) {
    const state = reactive({
      firstName: '',
      lastName: '',
    });

    const fullName = computed(() => `${state.firstName} ${state.lastName}`);

    return { state, fullName };
  },
});
</script>

<style scoped>
.computed {
  width: 50%;
}

.computed .flex-box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}

.computed .flex-box label {
  display: inline-block;
  font-weight: bold;
  width: 20%;
}

.computed .flex-box input, input:focus {
  width: 80%;
  margin: 10px auto;
  padding: 3px 10px;
  display: inline-block;
  outline: none;
  line-height: 35px;
  border-radius: 15px;
}


.computed .full-name {
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
}
.computed .full-name span {
  font-size: 19px;
}
</style>
