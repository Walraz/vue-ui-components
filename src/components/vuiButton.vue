<template lang="html">
  <button @click="$emit('click', $event)" type="submit" class="btn" :class="classObject" :disabled="disabled">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'vuiButton',
  computed: {
    classObject() {
      return {
        'btn--raised': this.raised,
        'btn--primary': this.primary,
        'btn--accent': this.accent,
        'btn--disabled': this.disabled,
      }
    }
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    raised: {
      type: Boolean,
      default: false,
      required: false,
    },
    primary: {
      type: Boolean,
      default: false,
      required: false,
    },
    accent: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../core/styles/variables';
  @import '../core/styles/mixins/shadow';
  .btn {
    text-transform: uppercase;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;
    height: 44px;
    max-height: 44px;
    line-height: 44px;
    font-size: 14px;
    padding: 0 16px;
    margin: 8px;
    text-align: center;
    color: $primary-text;
    min-width: 88px;
    width: 100%;
    // border-radius: 2px;
    transition: all .375s ease;
    &:hover {
      background: hsla(0,0%,60%,.2);
    }
    &:focus {
      background: hsla(0,0%,60%,.2);
    }
  }

  .btn--raised {
    //@include box-shadow-2dp(#000);
    &:focus {
      //@include box-shadow-8dp(#000);
    }
  }
  .btn--raised.btn--primary {
    color: rgba(255,255,255,.87);
    background: $primary-color;
    //@include box-shadow-2dp(#000);
    &:hover {
      //background: darken( $primary-color, 2% )
    }
    &:focus {
      //@include box-shadow-4dp(#000);
      //background: darken( $primary-color, 2% )
    }
  }
  .btn--raised.btn--accent {
    color: rgba(255,255,255,.87);
    background: $accent-color;
    //@include box-shadow-2dp(#000);
    &:hover {
      background: $accent-color;
    }
    &:focus {
      background: lighten($accent-color, 11%);
      //@include box-shadow-8dp(#000);
    }
  }
  .btn--raised.btn--disabled {
    cursor: default;
    background: rgba(0,0,0,.11);
    color: rgba(0,0,0,.26);
    box-shadow: none;
    &:hover {
      background: rgba(0,0,0,.11);
    }
  }
  .btn--primary {
    color: $primary-color;
    &:hover {
    background: hsla(0,0%,60%,.2);
    }
    &:focus {
      background: hsla(0,0%,60%,.2);
    }
  }
  .btn--accent {
    color: $accent-color;
    &:hover {
    background: hsla(0,0%,60%,.2);
    }
    &:focus {
    background: hsla(0,0%,60%,.2);
    }
  }
  .btn--disabled {
    cursor: default;
    color: rgba(0,0,0,.26);
    &:hover {
      background: transparent;
    }
  }
</style>
