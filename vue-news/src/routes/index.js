import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
// import createListView from "@/views/CreateListView";
// import beforeEnter from "@/views/BeforeEnter";
import beforeEnter from "@/views/BeforeEnter";
// import bus from "@/utils/bus";
// import { store } from "@/store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',   // url 주소
      name: 'news',
      component: NewsView, // url 주소로 갔을 때 표시 될 컴포넌트
      // component: createListView('NewsView'),
      beforeEnter,
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      // beforeEnter,
      beforeEnter,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter,
      // component: createListView('JobsView'),
      // beforeEnter(to, from, next) {
      //   bus.$emit('start:spinner');
      //   // setTimeout(() => {
      //   store.dispatch('FETCH_LIST', to.name)
      //   .then(() => next())
      //   .catch(error => console.log(error));
      // },
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});