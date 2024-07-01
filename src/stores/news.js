import { defineStore } from 'pinia';
import axios from 'axios';

export const useNewsStore = defineStore('news', {
    state: () => ({
        newsList: [],
        isLoading: false,
        errorMessage: '',
    }),
    actions: {
        async fetchNews() {
            this.isLoading = true;
            this.errorMessage = '';
            try {
                const response = await axios.get('http://localhost:8000/api/v1/news/news');
                this.newsList = response.data;
            } catch (error) {
                this.errorMessage = 'Error fetching news: ' + error.message;
            } finally {
                this.isLoading = false;
            }
        },
    },
    getters: {
        getNews: (state) => {
            return state.newsList;
        },
    },
});
