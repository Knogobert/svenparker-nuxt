<template>
  <section class="sp-projects">
    <!-- <h2>Projects</h2> -->
    <sp-project-single
      v-for="(project, key, index) in projects"
      :key="index"
      :title="project.title"
      :url="project.url"
      :image="project.image"
      :index="index"
      :slug="key"
    >
      <template #title>{{ project.title }}</template>
      <template #date>{{ project.date }}</template>
      <template #description>{{ project.description }}</template>
    </sp-project-single>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import spProjectSingle from '@/components/Project-single.vue'

const projects = ref({
  qr: {
    title: 'Swish QR Kod',
    url: 'https://swish-qr-kod.netlify.app/',
    date: 'March 2022',
    description:
      'A one-nighter project I made with my friend Daniel Bark to quickly get nice QR codes for Swish payments. It’s made with Nuxt and Tailwind, and utilizes the Swish API to generate the QR code.',
    image: '/projects/snap-QR@2x.png'
  },
  mk: {
    title: 'Malin Katrine',
    url: 'https://malinkatrine.com/',
    date: 'Feburary 2021',
    description:
      'My better half studies UX, of course she needs an online portfolio. She made the design while I knacked away on the code, but we didn’t make it far until she landed an internship. So it might be a bit underfilled at the moment. I was especially happy about the zooming feature when in a case study, check it out!',
    image: '/projects/snap-MK-case-dark@2x.png'
  },
  ntn: {
    title: 'NTN-Boilerplate',
    url: 'https://github.com/Knogobert/ntn-boilerplate',
    date: 'February 2021',
    description:
      'Whenever I need to get a quick start on a new site that someone requests (sister, brother, spouse, friend or myself). I almost always reach for Nuxt and Tailwind, as they usually fit the need. So I made an open-source starting template that utilize those technologies, with a sprinkle of Netlify CMS which makes the domain the only thing to pay for on a small website. Try it out yourself, it takes less than 5 minutes!',
    image: '/projects/snap-NTN-light@2x.png'
  },
  ejfa: {
    title: 'En Jul För Alla',
    url: 'https://enjulforalla.netlify.app/',
    date: 'December 2020',
    description:
      'One week from initial commit to launch. It was quite a hectic week, but sitting evenings together (remotely) with a coordinated team from Hillsong gave a pretty nice result. The design was handed to me and two more developers. The Swish solution maybe still works, but don’t send money there and expect it to be registered correctly, as the site was supposed to only be up 30 days. Over 300 000 kr was collected through this website to give to the community!',
    image: '/projects/snap-EJFA@2x.png'
  },
  // sm: {
  //   title: 'Sven+Malin',
  //   url: 'https://svenplusmalin.com/',
  //   date: 'February 2020',
  //   description:
  //     'Of course a web developer creates a website for his wedding! This one is built with Nuxt and Firebase.'
  //   // image: '/projects/snap-TC.png'
  // },
  tc: {
    title: 'Trustcruit',
    url: 'https://trustcruit.com/',
    date: 'February 2019',
    description:
      'When I started working at Trustcruit, we set to update the marketing site. Trustcruit is a SAAS for HR departments and employers, with a vision of creating a better job application process across the world. Here I currently work on the Vue dashboard mainly, as a part of the product team. The site has gotten a makeover since the snapshot. Now my colleagues are mostly handling it.',
    image: '/projects/snap-TC.png'
  },
  // lg: {
  //   title: 'Lammet & Grisen',
  //   url: 'https://lammet.nu/',
  //   date: 'November 2018',
  //   description:
  //     'Have you ever been to Sälen or Öland? Then you probably know about one of Swedens most popular restaurants. I made Lammet & Grisens website in the latest available technology for Wordpress. The backend is made easy for the client by utilizing Wordpress Gutenberg.',
  //   image: '/projects/snap-LG.jpg'
  // },
  ms: {
    title: 'Myers Surfboards',
    url: 'https://myerssurfboards.co/',
    date: 'July 2018',
    description:
      'A personal pro bono project made for my brother-in-law Carson Myers. A surfboard shaper based in Wahiawa, HI. Now that it has grown into his full-time job, we have moved away from the wordpress site I once created way back.',
    image: '/projects/snap-MS.jpg'
  },
  // bpx: {
  //   title: 'Boneprox',
  //   url: 'https://boneprox.se/',
  //   date: 'April 2018',
  //   description:
  //     'Made as a informational website for the revolutionary digital tool that analyzes dental x-rays for bone density and possible osteoporosis risks.',
  //   image: '/projects/snap-BPX.jpg'
  // },
  // ws: {
  //   title: 'WinstSeries',
  //   url: 'https://www.winstseries.com/',
  //   date: 'April 2018',
  //   description: 'desc',
  //   image: '/projects/snap-WS.jpg'
  // },
  bc: {
    title: 'Briefcave',
    url: 'https://www.briefcave.se/',
    date: 'August 2016',
    description:
      'On my job at Briefcave I developed the Wordpress theme for their new agency website. It features a nice page for job estimates and a lot of slick animations.',
    image: '/projects/snap-BC.jpg'
  }
  // lls: {
  //   title: 'La Lepre Stanca',
  //   url: 'http://www.laleprestanca.se/',
  //   date: 'May 2016',
  //   description:
  //     'During my internship at Grand Public I had the honors to create the Wordpress theme for a bicycling club based in Jönköping. Some of the difficulties were to code a user portal for the site users to manage their meet-ups in. The result was great!',
  //   image: '/projects/snap-LLS.jpg'
  // },
  // btk: {
  //   title: 'Bankeryds Tennisklubb',
  //   url: 'http://www.bankerydstk.nu/',
  //   date: 'April 2016',
  //   description:
  //     '"Probably Swedens nicest tennis club website" I once heard. I gotta agree... It was coded for a tennis club in Bankeryd, Sweden and created together with some peeps at Grand Public.',
  //   image: '/projects/snap-BTK.jpg'
  // }
  // swss: {
  //   title: 'Swiss+style',
  //   url: 'http://svenparker.com/swiss+style/index.php',
  //   date: 'February 2016',
  //   description: 'A small, fun and very hastily made website as a school exercise. The assignment was to create a "Swiss style" website without using any images. One of my first PHP-only websites.',
  //   image: '/projects/snap-SWSS.png'
  // },
  // temp: {
  //   title: 'More to come...',
  //   // url: 'http://svenparker.com/',
  //   date: '',
  //   description: 'I'm currently updating this website, for reals.',
  //   //image: '/projects/snap-SWSS.png'
  // }
})
</script>

<style lang="scss" scoped>
.sp-projects {
  background-color: hsla(0, 0%, 0%, 0.05);
  display: block;
  width: 100%;

  h2 {
    text-align: center;
    margin: 1rem 0;
    color: var(--white);
    user-select: none;
  }
}
</style>
