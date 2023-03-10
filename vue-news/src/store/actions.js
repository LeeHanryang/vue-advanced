import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo } from '../api/index';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            // console.log(response);
            context.commit('SET_NEWS', response.data);
            // this.state.news = response.data;
        })
        .catch(error => console.log(error));
    },
    // destructuring 
    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data);
        })
        .catch(error => console.log(error));
    },
    FETCH_ASK({commit}) {
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASK', data);
        })
        .catch(error => console.log(error));
    },
    FETCH_USER({commit}, name) {
        fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data);
        })
        .catch(error => console.log(error));
    },
    FETCH_ITEM({commit}, id) {
        fetchItemInfo(id)
        .then(({data}) => {
            commit('SET_ITEM', data);
        })
        .catch(error => console.log(error));
    },
}