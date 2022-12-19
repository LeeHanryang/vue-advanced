<template>
  <div>
    <div v-for="user in users">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index';

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    const vm = this;
    console.log('호출 전: ', this);
    fetchNewsList()
      .then(response => {
        console.log('호출 후: ',this);
        vm.users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style>

</style>