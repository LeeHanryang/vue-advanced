<template>
    <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <div class="timeline">
                <slot name="time">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <slot name="karma">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object,
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