<template lang="html">
  <div class="badge">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'vuiBadge',
  props: {
    value: {
      type: Number,
      default: null,
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../core/styles/variables';
  .badge {
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 1;
    padding: 6px 6px;
    background: $accent-color;
    border-radius: 50%;
    font-size: 8px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.87);
  }
</style>
