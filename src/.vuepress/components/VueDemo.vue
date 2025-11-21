<template>
  <div class="demo">
    <span>当前值：{{ count }}</span>
    <button @click="count++">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<style scoped>
button {
  margin: 10px;
}
</style>
