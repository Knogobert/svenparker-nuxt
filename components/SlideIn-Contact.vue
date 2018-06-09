<template>
  <aside class="aside-contact">
    <h2>Contact</h2>
  </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.js-slideIn--contact .aside-contact {
  transform: translateX(-100vw);
  transition: transform .5s ease-in-out;
}

.aside-contact {
  position: absolute;
  top: 0;
  right: -100vw;
  bottom: 0;
  width: 100%;

  padding: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;

  background-color: red;

  transform: translateX(30px);
  transition: transform .5s ease-in-out;
}

</style>
