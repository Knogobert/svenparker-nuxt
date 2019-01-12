<template>

  <section class="sp-projects">
    <!-- <h2>Projects</h2> -->

    <style>.filter::before{background-color: {{ themeColor }};}</style>
    <sp-project-single
      v-for="(project, key, index) in projects"
      :key="index"
      :title="project.title"
      :url="project.url"
      :image="project.image"
      :index="index"
      :slug="key">
      <template slot="title">{{ project.title }}</template>
      <template slot="date">{{ project.date }}</template>
      <template slot="description">{{ project.description }}</template>
    </sp-project-single>

  </section>

</template>

<script>
import spProjectSingle from '~/components/Project-single.vue'

export default {
  name: 'SpProjects',
  components: {
    spProjectSingle
  },
  data() {
    return {
      themeColor: 'hsla(223, 63%, 49%, 1)', // Default set color
      projects: {
        lg: {
          title: 'Lammet & Grisen',
          url: 'https://lammet.nu/',
          date: 'November 2018',
          description:
            'Have you ever been to Sälen or Öland? Then you probably know about one of Swedens most popular restaurants. I made Lammet & Grisens website in the latest available technology for Wordpress. The backend is made easy for the client by utilizing Wordpress Gutenberg.',
          image: '/projects/snap-LG.jpg'
        },
        ms: {
          title: 'Myers Surfboards',
          url: 'https://myerssurfboards.co/',
          date: 'July 2018',
          description:
            'A personal pro bono project made for my brother-in-law Carson Myers. A surfboard shaper based in Wahiawa, HI. Currently a work-in-progress and should probably be a locked down staging site, but isn’t because of economic reasons.',
          image: '/projects/snap-MS.jpg'
        },
        bpx: {
          title: 'Boneprox',
          url: 'https://boneprox.se/',
          date: 'April 2018',
          description:
            'Made as a informational website for the revolutionary digital tool that analyzes dental x-rays for bone density and possible osteoporosis risks.',
          image: '/projects/snap-BPX.jpg'
        },
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
        },
        lls: {
          title: 'La Lepre Stanca',
          url: 'http://www.laleprestanca.se/',
          date: 'May 2016',
          description:
            'During my internship at Grand Public I had the honors to create the Wordpress theme for a bicycling club based in Jönköping. Some of the difficulties were to code a user portal for the site users to manage their meet-ups in. The result was great!',
          image: '/projects/snap-LLS.jpg'
        },
        btk: {
          title: 'Bankeryds Tennisklubb',
          url: 'http://www.bankerydstk.nu/',
          date: 'April 2016',
          description:
            '"Probably Swedens nicest tennis club website" I once heard. I gotta agree... It was programmed for a tennis club in Bankeryd, Sweden and created together with some peeps at Grand Public.',
          image: '/projects/snap-BTK.jpg'
        }
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
        //   description: 'I’m currently updating this website, for reals.',
        //   //image: '/projects/snap-SWSS.png'
        // }
      }
    }
  },
  mounted() {
    if (localStorage.themeColor) {
      this.themeColor = JSON.parse(localStorage.themeColor).color
    }
    this.$bus.$on('colorChange', data => {
      this.themeColor = data
    })
    // let currentDate = new Date(Date.now()).toDateString();
    // this.projects.temp.date = currentDate.slice(3,7);
    // this.projects.temp.date += currentDate.slice(10);
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/_variables.scss';

.sp-projects {
  background-color: hsla(0, 0%, 0%, 0.05);
  display: block;
  width: 100%;

  h2 {
    text-align: center;
    margin: 1rem 0;
    color: $white;
    user-select: none;
  }
}
</style>
