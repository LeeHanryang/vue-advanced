import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import createListView from "@/views/CreateListView";

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
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
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