<template>
  <div>
    <v-select
      v-model="selected"
      :options="options"
      :multiple="true"
      :taggable="true"
      @new-option="addOption"
      placeholder="Select or add options"
    ></v-select>
  </div>
</template>

<script>
import { ref } from 'vue';
import vSelect from 'vue-select';
import "vue-select/dist/vue-select.css";

export default {
  components: { vSelect },
  setup() {
    const options = ref([]);
    const selected = ref([]);

    const addOption = (newOption) => {
      options.value.push(newOption);
    };

    return {
      options,
      selected,
      addOption,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
