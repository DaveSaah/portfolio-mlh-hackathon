// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/devtools"],
  app: {
    head: {
      title: "DaveSaah ~ Portfotlio",
      meta: [
        { name: "description", content: "David Saah's Portfolio" },
        { name: "title", content: "DaveSaah ~ Portfolio" },
        { name: "robots", content: "index, follow" },
        { name: "og:description", content: "David Saah's Portfolio" },
        { name: "og:title", content: "DaveSaah ~ Portfolio" },
        { name: "og:image", content: "/images/computer.svg" },
        { name: "og:url", content: "http://localhost:3000" },
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/ico",
          href: "/favicon.ico",
        },
      ],
      style: [
        {
          children: "#__nuxt { background-color: #0F172A;}",
        },
      ],
    },
  },
});
