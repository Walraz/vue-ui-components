<template lang="html">
  <div class="sidebar-panel" :class="{ 'sidebar-panel--active-left' : openPanel }">
    <div class="sidebar-panel__header">
      <div class="sidebar-panel__title" :class="{ 'sidebar-panel__title--active' : openPanel }">
        {{ title }}
      </div>
      <div @click="togglePanel" class="sidebar-panel__toggle" :class="{ 'sidebar-panel__toggle--active' : !openPanel }" v-ripple>
        <vui-badge :value="badge" v-if="!openPanel && badge"></vui-badge>
        <i class="material-icons" :class="{ 'sidebar-panel__toggle--close' : openPanel }">first_page</i>
        <i class="material-icons" :class="{ 'sidebar-panel__toggle--open' : !openPanel }">{{ openIcon }}</i>
      </div>
    </div>
    <div class="sidebar-panel__content" :class="{ 'sidebar-panel__title--active' : delayContent }">
      <slot/>
    </div>
  </div>
</template>

<script>
import debounce from '../core/util/debounce'
export default {
  name: 'vuiSidebarPanel',
  props: {
    title: {
      type: String,
      required: false,
    },
    openIcon: {
      type: String,
      required: false,
    },
    badge: {
      type: Number,
      default: null,
      required: false,
    }
  },
  data() {
    return {
      openPanel: false,
      delayContent: false,
    }
  },
  created() {
    setTimeout(() => {
      this.togglePanel()
    }, 375)
  },
  methods: {
    togglePanel() {
      const state = !this.openPanel
      if(state) {
        this.openPanel = state
        setTimeout(() => {
          this.delayContent = true
        }, 375)
      } else {
        this.delayContent = false
        setTimeout(() => {
          this.openPanel = state
        }, 375)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../core/styles/variables';
  .sidebar-panel {
    position: relative;
    z-index: 1;
    background: transparent;
    width: 0px;
    height: calc(100%);
    transition: all .375s ease;
    padding-bottom: 120px;
  }
  .sidebar-panel__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, .38);
    height: 60px;

    .sidebar-panel__title {
      color: rgba(255, 255, 255, .87);
      font-size: 16px;
      padding-left: 16px;
      font-weight: 400;
      user-select: none;
      opacity: 0;
      transition: all .375s ease;
    }
    .sidebar-panel__toggle {
      position: absolute !important;
      right: 0;
      top: 0;
      z-index: 2;
      cursor: pointer;
      font-size: 18px;
      user-select: none;
      height: 100%;
      width: 60px;
      min-width: 60px;
      padding: 21px;
      i {
        transition: all .375s ease;
        position: absolute;
        font-size: 18px;
        transform: scale(0);
      }
    }
  }
  .sidebar-panel__content {
    opacity: 0;
    transition: opacity .375s ease;
  }
  .sidebar-panel__toggle--open, .sidebar-panel__toggle--close  {
    transform: scale(1) !important;
  }
  .sidebar-panel__title--active {
    opacity: 1 !important;
  }

  .sidebar-panel__toggle--active {
    color: $secondary-color;
    right: -60px !important;
    border-right: 1px solid rgba(0,0,0,.11);
  }
  .sidebar-panel--active-left {
    width: 260px;
    background: rgba(46, 53, 64, 1.00);
    //box-shadow: 0px 2px 6px rgba(0,0,0,.87);
    .sidebar-panel__header {
      background: rgba(46, 53, 64, 1.00);
    }
  }
</style>
