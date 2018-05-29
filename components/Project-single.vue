<template>

  <div class="project-single project-single--left">
    <h3 class="project-single-title"><slot name="title"></slot></h3>
    <h5 class="project-single-subtitle"><slot name="date"></slot></h5>
    <p class="project-single-description"><slot name="description"></slot></p>
  </div>

</template>

<script>

</script>

<style lang="scss">
@import '~assets/_variables.scss';

.project-single {
  background-color: hsla(0, 0%, 0%, .1);
  height: 400px;
  padding: 50px;

  &--left{
    text-align: left;
  }
  &--right{
    text-align: right;
  }

  h3,
  h4,
  h5,
  p {
    color: $white;
  }
}

</style>
