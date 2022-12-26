<template>
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  data() {
    return {
      checked: false,
    }
  },
  components: {
    CheckBox
  },
}
</script>