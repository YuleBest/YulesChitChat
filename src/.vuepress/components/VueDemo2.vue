<template>
  <div class="demo-box">
    <p>当前计数：{{ count }}</p>
    <button @click="increment">加一</button>
    <p>计数状态：{{ status }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(0);

function increment() {
  count.value += 1;
}

const status = computed(() => {
  return count.value % 2 === 0 ? "偶数" : "奇数";
});
</script>

<style scoped>
.demo-box {
  border: 1px solid #ccc;
  padding: 16px;
  width: 240px;
  border-radius: 8px;
}
button {
  margin-top: 8px;
}
</style>
