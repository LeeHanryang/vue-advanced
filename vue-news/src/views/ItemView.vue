<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="fetchedItem">
        <router-link :to="`/user/${fetchedItem.user}`" slot="username">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">
          {{ 'Posted ' + fetchedItem.time_ago }}
        </template>
      </user-profile>
      <!-- <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="timeline">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 글 -->
      <div v-html="fetchedItem.content">

      </div>
    </section>
    <!-- <p>{{ fetchedItem.title }}</p>
    <div>{{ fetchedItem.content }}</div> -->
  </div>
</template>

<script>
// import { fetchItemInfo } from '@/api';
import { mapGetters } from 'vuex';
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
  .user-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding: 8px;
  }
  .timeline {
    font-size: 0.7rem;
  }
</style>