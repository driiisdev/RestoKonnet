<script setup>
    import { RouterView } from 'vue-router';
    import { onMounted } from 'vue';

    import IStaticMethods from "preline/preline";

    globalThis.window.HSStaticMethods = IStaticMethods;


  onMounted(() => {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100)
  });
</script>

<template>
    <main class="h-screen w-full">
        <RouterView />
    </main>
</template>
