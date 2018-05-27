<template>

  <div class="project-single">
    <h3><slot name="title"></slot></h3>
    <h5><slot name="date"></slot></h5>
    <p><slot name="description"></slot></p>
  </div>

</template>

<script>

</script>

<style lang="scss">
@import '~assets/_variables.scss';

.project-single {
  background-color: hsla(0, 0%, 0%, .1);
  padding: 50px;

  h3,
  h4,
  h5,
  p {
    color: $white;
  }
}

</style>
