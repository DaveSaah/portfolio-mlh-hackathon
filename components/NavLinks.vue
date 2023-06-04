<script setup lang="ts">
const navlinks = ref([
  { id: "#home", label: "Home", clicked: true },
  { id: "#about", label: "About", clicked: false },
  { id: "#projects", label: "Projects", clicked: false },
  { id: "#explore", label: "Explorations", clicked: false },
]);

function toggle(navLabel: string) {
  navlinks.value.forEach((element) => {
    element.label === navLabel
      ? (element.clicked = true)
      : (element.clicked = false);
  });
}
</script>

<template>
  <ul class="text-sm leading-6">
    <li>
      <a
        v-for="nav in navlinks"
        :href="nav.id"
        @click="
          toggle(nav.label);
          console.log(nav.clicked);
        "
        :class="[
          nav.clicked ? 'text-sky-500' : '',
          'block py-1 font-semibold hover:text-green-400',
        ]"
      >
        {{ nav.label }}
      </a>
    </li>
  </ul>
</template>
