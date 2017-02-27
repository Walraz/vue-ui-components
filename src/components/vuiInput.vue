<template lang="html">
  <div class="input" :class="{ 'input--disabled' : disabled }">

    <div class="input__select" v-if="options" :class="{ 'input__select--active' : showSelects }">
      <div class="input__select__option" v-ripple.dark v-for="option in optionsArray" @click="selected(option)" :class="{ 'input__select__option--active' : option === _value }">
        {{ option }}
      </div>
    </div>
    <div class="click-outside" v-if="options && showSelects" @click="showSelects = false"></div>
    <input type="text" :value="_value" required :disabled="disabled" @click="openSelect" @keyup.tab="openSelect" :maxlength="maxLength">
    <div class="arrow-down" v-if="options"></div>
    <span class="label" :class="{ 'label--disabled' : !value.length }">{{ label }}</span>
    <span class="bar"></span>
  </div>
</template>

<script>
  export default {
    name: 'vuiInput',
    props: {
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'text',
        required: false,
      },
      value: {
        type: String,
        default: '',
        required: false,
      },
      maxLength: {
        type: Number,
        default: 25,
        required: false,
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false,
      },
      options: {
        type: Array,
        required: false,
      }
    },
    computed: {
      _value() {
        return this.value
      }
    },
    data() {
      return {
        optionsArray: [],
        showSelects: false,
      }
    },
    created() {
      if(this.options) {
        //this.setReadOnly()
        this.optionsArray = this.options
      }
    },
    methods: {
      focusSelected(e) {
        console.log('test')
        this.openSelect()
      },
      setReadOnly() {
        this.$nextTick(() => {
          this.$el.querySelector('input').readOnly = true
        })
      },
      selected(option) {
        this.showSelects = false
        this.$emit('input', option)
      },
      openSelect() {
        if(this.options && !this.disabled) {
          this.showSelects = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../core/styles/variables';
  .input {
    position: relative;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, .11);
    .label {
      position: absolute;
      z-index: 1;
      font-weight: 300;
      left: 16px;
      top: 36px;
      font-size: 14px;
      color: rgba(255, 255, 255, .38);
      transition: all .3s ease;
    }
    input:focus~.label,
    input:valid~.label {
      top: 18px;
      left: 16px;
      font-size: 10px;
      color: $accent-color;
    }
    input:disabled~.label {
      top: 18px;
      left: 16px;
      font-size: 10px;
      color: rgba(255, 255, 255, .38);
    }
    input {
      z-index: 2;
      width: 100%;
      background: transparent;
      position: absolute;
      bottom: 6px;
      left: 16px;
      font-weight: 300;
      font-size: 14px;
      color: rgba(255, 255, 255, .87);
      border: none;
      &:focus {
        outline: none;
      }
    }
    input::-webkit-contacts-auto-fill-button {
      visibility: hidden;
      display: none !important;
      pointer-events: none;
      position: absolute;
      right: 0;
    }
    .bar {
      position: absolute;
      bottom: -1px;
      height: 1px;
      display: block;
      width: 100%;
      &:before {
        content: '';
        left: 50%;
      }
      &:after {
        content: '';
        right: 50%;
      }
    }
    .bar:before,
    .bar:after {
      position: absolute;
      bottom: 0px;
      height: 1px;
      width: 0;
      background: $accent-color;
      transition: all .3s ease;
    }
    input:focus~.bar:before,
    input:focus~.bar:after {
      width: 50%;
    }

  }

  .input--disabled {
    border-bottom: 1px dashed rgba(255, 255, 255, .11);
    input {
      color: rgba(255, 255, 255, .11) !important;
    }
    .arrow-down {
      border-top: 6px solid rgba(#fff, .11) !important;
    }
    .label--disabled {
      top: 36px !important;
      color: rgba(255, 255, 255, .11) !important;
      font-size: 14px !important;
    }
  }
  .input__select {
    position: absolute;
    background: $secondary-color;
    z-index: 5;
    width: calc(260px - 16px);
    margin: 0 8px;
    left: 0;
    top: 16px;
    opacity: 0;
    overflow-y: scroll;
    max-height: 0px;
    transition: all .375s ease;
    .input__select__option {
      user-select: none;
      cursor: pointer;
      height: 44px;
      font-size: 14px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      color: rgba(#fff, 0.87);
      transition: background .375s ease;
      &:hover {
        background: rgba(#000, .11)
      }
      &:focus {
        border: 1px solid $accent-color;
      }
    }
  }
  .input__select__option--active {
    color: $accent-color !important;
  }
  .input__select--active {
    opacity: 1;
    max-height: 132px;
  }
  .arrow-down {
    position: absolute;
    right: 16px;
    top: 42px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(#fff, .38);
  }
  .click-outside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 4;
  }
</style>
