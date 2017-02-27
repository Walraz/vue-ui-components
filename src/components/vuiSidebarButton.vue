<template lang="html">
  <div @click="toggleActive" class="sidebar-btn" :class="{ 'sidebar-btn--active' : isActive }" v-ripple>
    <i class="material-icons">{{ icon }}</i>
    <span class="sidebar-btn__text" :class="{ 'sidebar-btn__text--active' : showLabel, 'sidebar-btn__text--selected' : isActive }">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'vuiSidebarButton',
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
  data() {
    return {
      isActive: false,
      showLabel: false,
    }
  },
  created() {
    if(this.active) this.isActive = true
    this.$on('isActive', (value) => {
      this.isActive = this.text === value ? true : false
    })
    this.$on('showLabel', (value) => {
      setTimeout(() => {
        this.showLabel = value
      }, 150)
    })
  },
  methods: {
    toggleActive() {
      this.$parent.$emit('deactivateButtons', this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../core/styles/variables';
.sidebar-btn {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-left: 3px solid transparent;
  border-bottom: none;
  background: transparent;
  transition: background, border .375s ease;
  i {
    color: rgba(255, 255, 255, .38);
    padding: 18px 15px 18px 18px;
    font-size: 18px;
    line-height: 22px;
  }
  .sidebar-btn__text {
    opacity: 0;
    transition: opacity .375s ease;
    padding-left: 2px;
    font-size: 12px;
    color: rgba(255, 255, 255, .38);
  }
}
.sidebar-btn__text--active {
  opacity: 1 !important;
}
.sidebar-btn__text--selected {
  color: rgba(255, 255, 255, .87) !important;
}
.sidebar-btn--active {
  background: rgba($secondary-color, 0.38);
  border-left: 3px solid $accent-color;
  i {
    color: rgba(255, 255, 255, .87);
  }
}
</style>
