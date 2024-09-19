<template>
    <div class="toggle-switch" :class="{ 'is-checked': isChecked }" @click="toggleSwitch">
      <div class="toggle-switch-handle"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ToggleSwitch",
    props: {
      modelValue: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue'],
    computed: {
      isChecked() {
        return this.modelValue;
      }
    },
    methods: {
      toggleSwitch() {
        this.$emit('update:modelValue', !this.isChecked);
      }
    }
  }
  </script>
  
  <style scoped>
  .toggle-switch {
    width: 45px;
    height: 20px;
    background-color: #ccc;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .toggle-switch.is-checked {
    background-color: #2dce89;
  }
  
  .toggle-switch-handle {
    width: 18px;
    height: 17px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: left 0.2s;
  }
  
  .toggle-switch.is-checked .toggle-switch-handle {
    left: calc(100% - 20px);
  }
  </style>
  