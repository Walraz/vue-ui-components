<template lang="html">
  <header>
    <div class="header__title">
      {{ title }}
    </div>
    <div class="header__toolbar">
      <slot/>
    </div>
  </header>
</template>

<script>
export default {
  name: 'vuiHeader',
  props: {
    title: {
      type: String,
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../core/styles/variables';
  @import '../core/styles/mixins/shadow';
  header {
    height: 60px;
    min-height: 60px;
    max-height: 60px;
    width: 100%;
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 0 0 16px;
    background: $primary-color;
    border-bottom: 1px solid rgba(0,0,0,.11);
    display: flex;
    justify-content: space-between;

    .header__title {
      display: flex;
      align-items: center;
      font-size: 18px;
      line-height: 60px;
      font-weight: 300;
      color: rgba(#fff, .87);
      white-space: nowrap;
    }
    .header__toolbar {
      display: flex;
      align-items: center;
      line-height: 60px;
      white-space: nowrap;
      color: rgba(#fff, .87);
    }
  }
</style>
