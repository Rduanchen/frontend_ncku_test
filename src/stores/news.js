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
                this.newsList = response.data.map(news => ({ ...news, isSummaryLoading: false }));
            } catch (error) {
                this.errorMessage = 'Error fetching news: ' + error.message;
            } finally {
                this.isLoading = false;
            }
        },
        async promptSearchNews(prompt) {
            if(this.isLoading) return;
            this.isLoading = true;
            this.errorMessage = '';
            try {
                const response = await axios.post('http://localhost:8000/api/v1/news/search_news', {prompt: prompt});
                this.newsList = response.data.map(news => ({ ...news, isSummaryLoading: false }));
            } catch (error) {
                this.errorMessage = 'Error fetching news: ' + error.message;
            } finally {
                this.isLoading = false;
            }            
        },
        async fetchNewsSummary(content, index) {
            if(this.newsList[index].isSummaryLoading) return;
            this.newsList[index].isSummaryLoading = true;
            this.errorMessage = '';
            try {
                const response = await axios.post('http://localhost:8000/api/v1/news/news_summary', {content: content});
                if (response.data && index >= 0 && index < this.newsList.length) {
                    this.newsList[index].reason = response.data.reason;
                    this.newsList[index].summary = response.data.summary;
                }
            } catch (error) {
                this.errorMessage = 'Error fetching news: ' + error.message;
            } finally {
                this.newsList[index].isSummaryLoading = false;
            }
        }
    },
    getters: {
        getNews: (state) => {
            return state.newsList;
        },
    },
});