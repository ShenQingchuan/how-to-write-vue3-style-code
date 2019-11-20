<template>
  <div class="router-one">
    <Counter msg="快来试试 Composition API 写的计数器吧!"/>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import Counter from '@/components/Counter.vue';

export default createComponent({
  name: 'router-one',
  props: {},
  components: {
    Counter,
  },
});
</script>
