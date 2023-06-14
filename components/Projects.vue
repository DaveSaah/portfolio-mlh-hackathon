<script setup>
const projects = [
  {
    title: "Movie API",
    body: "A web API to demonstrate how HTTP CRUD requests can be handled in production",
    link: "https://github.com/DaveSaah/movieCrudAPI",
    color: "fill-emerald-500",
    lang: "Go",
  },
  {
    title: "Calculator",
    body: "A calculator CLI app that supports advanced mathematical functions.",
    link: "https://github.com/DaveSaah/Calculator",
    color: "fill-sky-500",
    lang: "Python",
  },
  {
    title: "Linear Systems",
    body: "A script that solves systems of linear equations having 2 or 3 variables, with the architecture to support more variables as needed",
    link: "https://github.com/DaveSaah/linear-systems",
    color: "fill-purple-500",
    lang: "Julia",
  },
  {
    title: "Self Reference",
    body: "A web app with references for various languages I'm familiar with for easy access.",
    link: "https://github.com/DaveSaah/Self-Reference",
    color: "fill-orange-500",
    lang: "HTML",
  },
  {
    title: "Pdf2Audio",
    body: "A script that converts a PDF file to a Word document and outputs the text as speech",
    link: "https://github.com/DaveSaah/pdf2audio",
    color: "fill-sky-500",
    lang: "Python",
  },
  {
    title: "Item Check Counter",
    body: "A CLI app for keeping track of items in stock, adding or removing items and producing receipts",
    link: "https://github.com/DaveSaah/Item-Check",
    color: "fill-sky-500",
    lang: "Python",
  },
  {
    title: "Random Number Game",
    body: "A random number guessing game in julia",
    link: "https://github.com/DaveSaah/random-number-game",
    color: "fill-purple-500",
    lang: "Julia",
  },
  {
    title: "CodeReviewShop",
    body: "A web app that allows you to schedule a session to have your code reviewed, and feedback provided",
    link: "https://github.com/CodeReviewShop/codereviewshop",
    color: "fill-yellow-500",
    lang: "Javascript",
  },
  {
    title: "CodeReview Blog",
    body: "A space for articles, announcements and event notes by CodeReviewShop",
    link: "https://github.com/CodeReviewShop/blog",
    color: "fill-emerald-500",
    lang: "Hugo",
  },
  {
    title: "Simple Web Server",
    body: "A simple implementation of a web server in Go",
    link: "https://github.com/DaveSaah/simple-web-server",
    color: "fill-emerald-500",
    lang: "Go",
  },
  {
    title: "Todo App",
    body: "A todo list web app written with react js",
    link: "https://github.com/DaveSaah/todo-app",
    color: "fill-yellow-500",
    lang: "Javascript",
  },
  {
    title: "Structural Analysis",
    body: "A web app that checks the structural integrity of a building based on standard parameters",
    link: "https://github.com/DaveSaah/structural-analysis",
    color: "fill-yellow-500",
    lang: "Javascript",
  },
];
</script>

<template>
  <div class="py-8">
    <h1 class="text-4xl mb-6">Projects</h1>
    <div class="grid grid-cols-4 gap-3">
      <div v-for="item in projects">
        <Card
          :title="item.title"
          :body="item.body"
          :link="item.link"
          :color="item.color"
          :lang="item.lang"
          icon="iconoir:github"
        />
      </div>
    </div>
  </div>
</template>
