<template>
    <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
            <div>
                {{ UserInfo.id }}
            </div>
            <!-- <router-link :to="`/user/${UserInfo.user}`">
                {{ UserInfo.id }}
            </router-link> -->
            <div class="timeline">
                {{ UserInfo.created }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
      ...mapGetters({
        UserInfo: 'fetchedUser',
      }),
    },
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