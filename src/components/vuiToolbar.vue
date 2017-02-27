<template lang="html">
  <div class="toolbar">
    <div class="breadcrumb">
      {{ breadcrumb }}
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'vuiToolbar',
  props: {
    breadcrumb: {
      type: String,
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../core/styles/variables';
  .toolbar {
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    position: relative;
    z-index: 0;
    background: rgba($primary-color, .05);
    i {

    }
    .breadcrumb {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 300;
      color: rgba(#000, .87);
      padding-left: 16px;
    }
  }
</style>
