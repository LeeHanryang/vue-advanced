<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="jobs-list">
      <li v-for="(job, index) in fetchedJobs" class="post">
        <div class="points">
          {{ index + 1 }}
        </div>
        <div>
          <p class="jobs-title">
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small class="link-text">
            {{ job.time_ago }}, 
            <a :href="`https://${job.domain}`" class="link-text">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul> -->
    <!-- <p v-for="job in fetchedJobs">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>
        {{job.time_ago }}, {{ job.domain }}
      </small>
    </p> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  }
  // computed: {
  //   ...mapGetters(['fetchedJobs']),
  // },
  // created() {
  //   this.$store.dispatch('FETCH_JOBS');
  // }
}
</script>

<style scoped>
/* .jobs-list {
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
    width: 16px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42B883;
}
.jobs-title {
  margin: 0;
}
.link-text {
  color: #828282;
} */
</style>