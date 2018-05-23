<template>

  <section class="sp-projects">
    <h2>Projects</h2>

    <sp-project-single>
      <template slot="title">La Lepre Stanca</template>
      <template slot="date">May 2016</template>
      <template slot="description">During my internship at Grand Public I had the honors to create the Wordpress theme for a bicycling club based in Jönköping. Some of the difficulties were to code a back-end for the site users to manage their meet-ups through. The result was great!</template>


    </sp-project-single>

    <sp-project-single>
      <template slot="title">Bankeryds Tennisklubb</template>
      <template slot="date">April 2016</template>
      <template slot="description">Website I programmed using SCSS and Wordpress for a tennis club in Bankeryd, Sweden. The back-end uses Advanced Custom Fields Pro so the customer easily can change what's on the front-end. This project took around 100 hours to create, together with Mattias Haal &amp; Mattias Rydh at Grand Public.</template>
    </sp-project-single>
  </section>

</template>

<script>
import spProjectSingle from '~/components/Project-single.vue'

export default {
  components: {
    spProjectSingle
  }
}

</script>

<style lang="scss">

.sp-projects {
  background-color: #2AB764;
  display: block;
  width: 100%;
  
  h2 {
    margin: 1rem 0;
  }
}

</style>
