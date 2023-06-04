<script setup>
defineProps({
  title: String,
  links: Array,
});
</script>

<template>
  <div class="flex flex-col justify-center mt-4 bg-slate-800 rounded-xl pb-5">
    <h3 class="py-3 text-2xl font-semibold text-center">{{ title }}</h3>
    <div class="grid grid-cols-3 place-items-center">
      <span v-for="link in links"><img :src="link" class="my-3" /></span>
    </div>
  </div>
</template>
