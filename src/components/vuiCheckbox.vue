<template lang="html">
  <div class="checkbox">
    <label>
        <input @change="$emit('input', checkedProxy)" v-model="checked" type="checkbox" :disabled="disabled" />
    </label>
    <span>{{ label }}</span>
  </div>
</template>

<script>
  export default {
    name: 'md-checkbox',
    props: {
      label: {
        type: String,
        default: '',
        required: false,
      },
      value: {
        type: null,
        required: false,
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false,
      }
    },
    data() {
      return {
        checkedProxy: false
      }
    },
    computed: {
      checked: {
        get() {
          return this.value
        },
        set(val) {
          this.checkedProxy = val
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../core/styles/variables';
  .checkbox {
    // padding-top: 16px;
    height: 60px;
    min-height: 60px;
    max-height: 60px;
    margin: 0 16px;
    display: flex;
    user-select: none;
    align-items: center;
    span {
      padding: 2px 0 0 16px;
      color: rgba(#fff, .38);
      font-weight: 300;
      font-size: 14px;
    }
    input[type="checkbox"] {
      cursor: pointer;
      margin: 4px 0 0;
      position: relative;
    }
    input[type="checkbox"] {
      -webkit-appearance: none;
      margin-left: 0px;
    }
    input[type="checkbox"]:after {
      border-color: $accent-color;
    }
    input[type="checkbox"]:disabled:after {
      border: 1px dashed;
      border-color: rgba(#fff, .11);
    }
    input[type="checkbox"]:focus:after {
      outline: none;
      border: 1px solid $accent-color;
    }
    input[type="checkbox"]:after {
      border: 1px solid;
      border-color: rgba(#fff, .11);
      // border-radius: 2px;
      content: '';
      display: block;
      height: 20px;
      transition: .375s;
      width: 20px;
    }
    input[type="checkbox"]:checked:before {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      left: 8px;
      top: 3px;
      display: table;
      width: 5px;
      height: 11px;
      border: 1px solid rgba(#fff, 1);
      border-top: 0;
      border-left: 0;
      content: '';
    }
    input[type="checkbox"]:checked:after {
      background-color: $accent-color;
      border-color: $accent-color;
    }
    input[type="checkbox"]:disabled:checked:after {
      background-color: rgba(#fff, .11);
      border-color: transparent;
    }
  }
</style>
