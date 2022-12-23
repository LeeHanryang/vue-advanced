import { 
    // fetchNewsList,
    // fetchJobsList,
    // fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList 
} from '../api/index';

export default {
    // promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(response => {
    //         // console.log(response);
    //         context.commit('SET_NEWS', response.data);
    //         // this.state.news = response.data;
    //         return response;
    //     })
    //     .catch(error => console.log(error));
    // },
    // async
    async FETCH_NEWS({commit}) {
        try {
            const { data } = await fetchNewsList();
            commit('SET_NEWS', data);
            return data;
        } catch (error) {
            console.log(error);            
        }
    },
    async FETCH_JOBS({commit}) {
        try {
            const { data } = await fetchJobsList();
            commit('SET_JOBS', data);
            return data;
        } catch (error) {
            console.log(error);            
        }
    },
    async FETCH_ASK({commit}) {
        try {
            const { data } = await fetchAskList();
            commit('SET_ASK', data);
            return data;
        } catch (error) {
            console.log(error);            
        }
    },
    async FETCH_USER({commit}, name) {
        try {
            const { data } = await fetchUserInfo(name);
            commit('SET_USER', data);
            return data;
        } catch (error) {
            console.log(error);            
        }
    },
    async FETCH_ITEM({commit}, id) {
        try {
            const { data } = await fetchItemInfo(id);
            commit('SET_ITEM', data);
            return data;
        } catch (error) {
            console.log(error);            
        }
    },
    async FETCH_LIST({commit}, pageName) {
        try {
            const { data } = await fetchList(pageName);
            commit('SET_LIST', data);
            return data;
        } catch (error) {
            console.log(error);            
        }
    },
}