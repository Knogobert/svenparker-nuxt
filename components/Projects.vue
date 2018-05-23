<template>
  <section class="sp-projects">
    Projects

    <sp-project-single>
      <template slot="title">Title1</template>
    </sp-project-single>

    <sp-project-single>
      <template slot="title">Title2</template>
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

<style>
.sp-projects {
  display: block;
  width: 100%;
}
</style>
