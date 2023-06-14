<script setup>
const socials = [
  {
    title: "Email",
    link: "mailto:saahdavid17@gmail.com",
    icon: "logos:google-gmail",
    body: "Send me an email",
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/davesaah",
    icon: "devicon:linkedin",
    body: "Let's connect",
  },
  {
    title: "Github",
    link: "https://github.com/DaveSaah",
    icon: "devicon:github",
    body: "Explore what I've been working on",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/dave_saah",
    icon: "devicon:twitter",
    body: "Find out about my other interests",
  },
];
</script>

<template>
  <div class="py-8">
    <h1 class="text-4xl mb-6">Socials</h1>
    <div class="grid grid-cols-4 gap-3">
      <div v-for="item in socials">
        <Card
          :title="item.title"
          :body="item.body"
          :link="item.link"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
</template>
