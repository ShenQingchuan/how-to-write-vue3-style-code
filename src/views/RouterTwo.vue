<template>
  <div class="router-two">

    <h2>查看 src/components/Computed.vue</h2>
    <h3>查看新的计算属性的写法示例:</h3>

    <Computed />

  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import Computed from '@/components/Computed.vue';

export default createComponent({
  name: 'RouterTwo',
  props: {},
  components: {
    Computed,
  },
});
</script>

<style scoped>
.router-two {
  width: 75vw;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
