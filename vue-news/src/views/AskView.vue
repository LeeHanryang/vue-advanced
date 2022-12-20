<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="ask-list">
      <li v-for="ask in fetchedAsk" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`item/${ask.id}`">
              {{ ask.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ ask.time_ago }}, 
            <router-link :to="`/user/${ask.user}`" class="link-text">
              {{ ask.user }}
            </router-link>
          </small>
        </div>
        </li>
      </ul> -->
    </div>
    <!-- <p v-for="item in fetchedAsk">
      <router-link :to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div> -->
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  }
  // computed: {
    // #4
    // ...mapGetters(['fetchedAsk']), // 바로 사용할 때

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
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
}
</script>

<style scoped>
/* .ask-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #EEE;
}
.points {
    width: 60px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42B883;
}
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282;
} */
</style>