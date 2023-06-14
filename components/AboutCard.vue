<script setup>
defineProps({
  title: String,
  imgSrc: String,
  body: String,
  timeline: String,
  links: Array,
});
</script>

<template>
  <div class="flex flex-row rounded-lg bg-slate-800 w-full h-56 my-4">
    <img
      class="h-70 w-70 rounded-t-lg rounded-b-lg object-cover"
      :src="imgSrc"
      :alt="title"
    />
    <div class="flex flex-col justify-start p-6">
      <h5 class="mb-2 text-xl font-semibold text-neutral-50">
        {{ title }}
      </h5>
      <p class="mb-4 text-base text-neutral-200">
        {{ body }}
      </p>
      <div v-for="item in links" class="flex flex-col items-left">
        <a :href="item.link" class="text-sky-500" target="_blank">
          <Icon name="icon-park-outline:link-one" /> {{ item.label }}
        </a>
      </div>
      <p class="text-xs text-neutral-300 pt-4">
        {{ timeline }}
      </p>
    </div>
  </div>
</template>
