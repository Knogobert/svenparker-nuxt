<template>

  <div class="project-single project-single--left" :style="projectStyle">
    <a class="project-single-link" href="#">
      <h3 class="project-single-title"><slot name="title"></slot></h3>
      <h5 class="project-single-subtitle"><slot name="date"></slot></h5>
      <p class="project-single-description"><slot name="description"></slot></p>
    </a>
  </div>

</template>

<script>
export default {
  name: 'sp-projects-single',
  props: ['bg'],
  computed: {
    projectStyle(){
      return {
        'background-image': `url(${this.bg})`,
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.project-single {
  // background-color: hsla(0, 0%, 0%, .1);
  background-size: cover;

  &--left{
    text-align: left;
  }
  &--right{
    text-align: right;
  }

  &-link {
    height: 400px;
    padding: 50px;
    display: block;
    background-color: hsla(0, 0%, 0%, .75);

    &:active, 
    &:hover, 
    &:focus { 
      // .project-single-title {
      //   opacity: 1;
      //   transition: .2s ease-in-out opacity;
      // }
    }
  }

  h3,h4,h5,p {
    color: $white;
  }
  &-title {
    font-size: 3rem;
    margin-bottom: .75rem;
    // opacity: 0;
    // transition: .2s ease-in-out opacity;
  }
  &-subtitle {
    margin-bottom: .5rem;
  }
  &-description {
    max-width: 500px;
  }

}

</style>
