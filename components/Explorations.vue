<script setup>
const items = [
  {
    title: "Languages",
    links: [
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      "https://img.shields.io/badge/Javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
      "https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white",
      "https://img.shields.io/badge/OCTAVE-darkblue?style=for-the-badge&logo=octave&logoColor=b38600",
      "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
      "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    ],
  },
  {
    title: "Lib/Frameworks",
    links: [
      "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
      "https://img.shields.io/badge/Hugo-black.svg?style=for-the-badge&logo=Hugo",
      "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
      "https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82",
    ],
  },
  {
    title: "Platforms",
    links: [
      "https://img.shields.io/badge/Linux-white?style=for-the-badge&logo=linux&logoColor=black",
      "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
      "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
      "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    ],
  },
  {
    title: "Tools",
    links: [
      "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white",
      "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
      "https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white",
      "https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white",
    ],
  },
];
</script>

<template>
  <div class="py-8">
    <h1 class="text-4xl mb-6">My Explorations</h1>
    <div class="grid grid-cols-2 gap-8">
      <div v-for="item in items">
        <ExploreCard :title="item.title" :links="item.links" />
      </div>
    </div>
  </div>
</template>
