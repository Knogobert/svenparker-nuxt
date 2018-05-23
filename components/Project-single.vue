<template>

  <div class="project-single">
    <h3><slot name="title"></slot></h3>
    <h5><slot name="date"></slot></h5>
    <p><slot name="description"></slot></p>
  </div>

</template>

<script>

props: ['title']

</script>

<style lang="scss">
@import '~assets/_variables.scss';

.project-single {
  background-color: #26A65B;
  padding: 50px;
}

</style>
