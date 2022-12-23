import bus from "@/utils/bus";
import { store } from "@/store/index";

export default function beforeEnter(to, from, next) {
    bus.$emit('start:spinner');
    // setTimeout(() => {
    store.dispatch('FETCH_LIST', to.name)
    .then(() => next())
    .catch(error => console.log(error));
}