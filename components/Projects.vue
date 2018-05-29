<template>

  <section class="sp-projects">
    <h2>Projects</h2>

    <sp-project-single v-for="(project, index) in projects" :key="index" :image="project.image">
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
          description: 'Website I programmed using SCSS and Wordpress for a tennis club in Bankeryd, Sweden. The back-end uses Advanced Custom Fields Pro so the customer easily can change what’s on the front-end. This project took around 100 hours to create, together with Mattias Haal &amp; Mattias Rydh at Grand Public.'
        },
        swss: {
          title: 'Swiss+style',
          date: 'February 2016',
          description: 'A small and very hastily made website as a school exercise. The assignment was to create a "Swiss style" website without using any images. Built using SCSS & PHP.'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/_variables.scss';

.sp-projects {
  //background-color: #2AB764;
  display: block;
  width: 100%;
  
  h2 {
    margin: 1rem 0;
    color: $white;
  }
}

</style>
