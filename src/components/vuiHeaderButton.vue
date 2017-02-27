<template lang="html">
  <div class="header-btn" v-ripple>
    <i class="material-icons" :class="{ 'header-btn__icon' : label && icon }">{{ icon }}</i>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'vuiHeaderButton',
  props: {
    label: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../core/styles/variables';
  .header-btn {
    padding: 0 16px;
    user-select: none;
    height: 60px;
    min-width: 60px;
    cursor: pointer;
    border-left: 1px solid rgba(255,255,255,.11);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    i {
      font-size: 18px;
    }
  }
  .header-btn__icon {
    padding-right: 8px;
  }
</style>
