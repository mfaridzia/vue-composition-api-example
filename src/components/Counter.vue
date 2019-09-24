<template>
  <div>
    <p>Count is {{ count }}</p>
    <button @click="incrementCount">Increment</button> -
    <button @click="decrementCount">Decrement</button>
  </div>
</template>

<script>
import { onMounted, watch } from "@vue/composition-api";
import useCounter from "../hooks/useCounter";

export default {
  setup() {
    const { count, incrementCount, decrementCount } = useCounter();

    watch(() => console.log(count.value));

    onMounted(() => console.log("Mounted...."));

    return {
      count,
      incrementCount,
      decrementCount
    };
  }
};
</script>

<style>
</style>