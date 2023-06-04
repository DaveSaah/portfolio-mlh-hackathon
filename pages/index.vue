<template>
  <div
    class="antialiased max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 bg-gradient-to-r from-[#0F172A] to-[#0F172A] text-white"
  >
    <div class="container mx-auto py-8 grow">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <LazyAbout />
      </div>
      <div id="projects">
        <LazyProjects />
      </div>
      <div id="explore">
        <LazyExplorations/>
      </div>
    </div>
    <div
      class="fixed z-20 top-[20rem] bottom-0 right-[max(0px,calc(50%-70rem))] w-[15rem] py-10 overflow-y-auto hidden xl:block"
    >
      <div class="px-8">
        <h5 class="font-bold mb-4 text-lg leading-6">On this page</h5>
        <NavLinks />
      </div>
    </div>
  </div>
  <Footer />
</template>
