<template lang="html">
  <div class="sidebar" :class="{ 'sidebar--expanded' : sidebarOpen }">
    <div @click="toggleSidebar" v-ripple class="sidebar-btn--menu">
      <i class="material-icons" :class="{ 'menu--icon' : !sidebarOpen }">menu</i>
      <i class="material-icons" :class="{ 'menu--arrow' : sidebarOpen }">arrow_back</i>
      <!-- <span class="sidebar-btn__text">Menu</span> -->
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'vuiSidebar',
  data() {
    return {
      sidebarOpen: false,
    }
  },
  created() {
    this.$on('deactivateButtons', (text) => {
      this.$children.forEach(slot => {
        slot.$emit('isActive', text)
      })
    })
  },
  methods: {
    toggleSidebar(e) {
      this.sidebarOpen = !this.sidebarOpen
      this.$children.forEach(slot => {
        slot.$emit('showLabel', this.sidebarOpen)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../core/styles/variables';
  @import '../core/styles/mixins/shadow';
  .sidebar {
    background: $primary-color;
    height: 100vh;
    flex: 60px 0 0;
    overflow-y: auto;
    position: relative;
    z-index: 2;
    transition: flex .375s ease;

    .sidebar-btn--menu {
      border-bottom: 1px solid rgba(255, 255, 255, .11);
      color: rgba(255, 255, 255, .87);
      user-select: none;
      background: $accent-color;
      width: 100%;
      min-width: 100%;
      height: 60px;
      cursor: pointer;
      display: flex;
      align-items: center;
      .sidebar-btn__text {
        padding-left: 60px;
        font-size: 12px;
        color: rgba(255, 255, 255, .87);
      }
      i {
        position: absolute;
        left: 0;
        top: 0;
        transform: scale(0);
        transition: transform .375s ease;
        padding: 21px;
        font-size: 18px;
        line-height: 18px;
      }
    }
  }

  .sidebar--expanded {
    flex: 180px 0 0;
  }

  .menu--icon, .menu--arrow {
    transform: scale(1) !important;
  }
</style>
