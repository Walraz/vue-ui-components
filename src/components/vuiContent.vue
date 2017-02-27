<template lang="html">
  <div class="content">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'vuiContent'
}
</script>

<style lang="scss" scoped>
@import '../core/styles/variables';
  .content {
    display: flex;
    position: relative;
    flex-flow: row wrap;
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
</style>
