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
  name: 'sp-projects',
  components: {
    spProjectSingle
  },
  data() {
    return {
      projects: {
        bc: {
          title: 'Briefcave',
          url: 'https://www.briefcave.se/',
          date: 'August 2016',
          description: 'I love my job at Briefcave. I developed the Wordpress theme for their new agency website and it features a nice page for job estimates and a lot of slick animations. This is where I currently sit.',
          image: '/projects/snap-BC.jpg'
        },
        lls: {
          title: 'La Lepre Stanca',
          url: 'http://www.laleprestanca.se/',
          date: 'May 2016',
          description: 'During my internship at Grand Public I had the honors to create the Wordpress theme for a bicycling club based in Jönköping. Some of the difficulties were to code a back-end for the site users to manage their meet-ups through. The result was great!',
          image: '/projects/snap-LLS.jpg'
        },
        btk: {
          title: 'Bankeryds Tennisklubb',
          url: 'http://www.bankerydstk.nu/',
          date: 'April 2016',
          description: 'Website I programmed using SCSS and Wordpress for a tennis club in Bankeryd, Sweden. The back-end uses Advanced Custom Fields Pro so the customer easily can change what’s on the front-end. This project took around 100 hours to create, together with Mattias Haal & Mattias Rydh at Grand Public.',
          image: '/projects/snap-BTK.jpg'
        },
        swss: {
          title: 'Swiss+style',
          url: 'http://svenparker.com/swiss+style/index.php',
          date: 'February 2016',
          description: 'A small and very hastily made website as a school exercise. The assignment was to create a "Swiss style" website without using any images. Built using SCSS & PHP.',
          image: '/projects/snap-SWSS.png'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/_variables.scss';

.sp-projects {
  background-color: hsla(0, 0%, 0%, .05);
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
