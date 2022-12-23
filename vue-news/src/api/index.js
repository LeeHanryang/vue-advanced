import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
};

async function fetchList(pageName) {
    try {
        return axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchUserInfo(userName) {
    try {
        return axios.get(`${config.baseUrl}user/${userName}.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchItemInfo(id) {
    try {
        return axios.get(`${config.baseUrl}item/${id}.json`);
    } catch (error) {
        console.log(error);
    }
}


export {
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}