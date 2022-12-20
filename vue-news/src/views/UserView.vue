<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import axios from 'axios';
export default {
  computed: {
    ...mapGetters({
      userInfo: 'fetchedUser',
    }),
  },
  created() {
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style>

</style>