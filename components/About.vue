<template>
  <div class="py-8">
    <h1 class="text-4xl mb-6">About Me</h1>
    <AboutCard
      title="Explorer ~ Opensource"
      body="Linux made me like this. I have built many projects these past few years, to learn and solve my problems. The next challenge is to use my skills to solve the problems of others as well. In addition, I write technical articles about opensource technology and programming languages."
      img-src="/images/opensource.png"
      :links="[
        { link: 'https://github.com/DaveSaah', label: 'Github' },
        { link: 'https://davesaah.hashnode.dev', label: 'Hashnode' },
      ]"
      timeline="2019 - present"
    />
    <AboutCard
      title="Code Review Shop"
      body="My medium of giving back to the community. I aim to help students grow with a solid foundation of the concepts and tools we use in the industry. Since its inception, I have guided 20+ students through programming projects and lessons. I also started CodeReview Blog to share lessons about getting started with programming."
      img-src="/images/codereview-logo.png"
      :links="[
        { link: 'https://codereviewshop.web.app', label: 'CodeReviewShop' },
        { link: 'https://codereviewblog.web.app', label: 'CodeReview Blog' },
      ]"
      timeline="2023 - present"
    />

    <AboutCard
      title="Student ~ Ashesi University"
      body="I am a sophomore majoring in Computer Science. I am also a Mastercard Foundation Scholar. Mastercard Foundation scholarraship package is highly competitive and awarded to students who are academically strong and have demonstrated a commitment to making a difference in the lives of others."
      timeline="2021 - 2025"
      img-src="/images/ashesi-logo.jpg"
      :links="[
        { link: 'https://www.ashesi.edu.gh', label: 'Ashesi' },
        { link: 'https://mastercardfdn.org', label: 'Mastercard Foundation' },
      ]"
    />
  </div>
</template>
