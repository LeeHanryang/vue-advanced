<template>
  <div>
    <p v-for="item in fetchedAsk">
      <router-link :to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // #4
    ...mapGetters(['fetchedAsk']), // 바로 사용할 때

    // #3
    // ...mapGetters({
    //   askItems: 'fetchedAsk', //변수 명 변경할 때때
    // }),

    // #2
    // ...mapState({
    //   ask: state => state.ask,
    // }),

    // #1
    // ask() {
    //   return this.$store.state;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>