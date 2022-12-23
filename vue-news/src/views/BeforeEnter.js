import bus from "@/utils/bus";
import { store } from "@/store/index";

export default async function beforeEnter(to, from, next) {
    bus.$emit('start:spinner');
    console.log('fetched');
    try {
        const response = await store.dispatch('FETCH_LIST', to.name);
        next();
    } catch (error) {
        console.log(error);        
    }
}