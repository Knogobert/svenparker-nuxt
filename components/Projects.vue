<template>

  <section class="sp-projects">
    <!-- <h2>Projects</h2> -->

    <sp-project-single v-for="(project, key, index) in projects" :key="index" :image="project.image" :index="index" :slug="project.key">
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
          date: 'August 2016',
          description: 'I love my job at Briefcave. I developed the Wordpress theme for their new agency website and it features a nice page for job estimates and a lot of slick animations. This is where I currently sit.',
          image: 'http://svenparker.com/img/portfolio/web/snap-BC-opt.png'
        },
        lls: {
          title: 'La Lepre Stanca',
          link: 'http://www.laleprestanca.se/',
          date: 'May 2016',
          description: 'During my internship at Grand Public I had the honors to create the Wordpress theme for a bicycling club based in Jönköping. Some of the difficulties were to code a back-end for the site users to manage their meet-ups through. The result was great!',
          image: 'http://svenparker.com/img/portfolio/web/snap-LLS-opt.png'
        },
        btk: {
          title: 'Bankeryds Tennisklubb',
          date: 'April 2016',
          description: 'Website I programmed using SCSS and Wordpress for a tennis club in Bankeryd, Sweden. The back-end uses Advanced Custom Fields Pro so the customer easily can change what’s on the front-end. This project took around 100 hours to create, together with Mattias Haal & Mattias Rydh at Grand Public.',
          image: 'http://svenparker.com/img/portfolio/web/snap-BTK-opt.png'
        },
        swss: {
          title: 'Swiss+style',
          date: 'February 2016',
          description: 'A small and very hastily made website as a school exercise. The assignment was to create a "Swiss style" website without using any images. Built using SCSS & PHP.',
          image: 'http://svenparker.com/img/portfolio/web/snap-Swiss+style-opt.png'
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
