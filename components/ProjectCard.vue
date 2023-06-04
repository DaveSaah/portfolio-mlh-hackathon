<script setup>
defineProps({
  title: String,
  body: String,
  link: String,
  color: String,
  lang: String,
});
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="inline-flex w-full flex-col justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
  >
    <div
      class="relative m-4 flex h-40 flex-col justify-between rounded-lg bg-slate-800 p-4"
    >
      <div class="z-10">
        <h3 class="font-bold mb-2 text-lg">{{ title }}</h3>
        <div class="my-3 line-clamp-2">{{ body }}</div>
      </div>
      <div class="flex items-center">
        <svg width="20" height="20" class="mr-1">
          <circle cx="10" cy="10" r="7" :class="color"></circle>
        </svg>
        <span>{{ lang }}</span>
      </div>
      <div class="absolute right-1 text-8xl backdrop-blur">
        <Icon name="iconoir:github" class="blur-sm" />
      </div>
    </div>
  </a>
</template>
