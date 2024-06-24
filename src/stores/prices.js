import { defineStore } from 'pinia';
import axios from 'axios';
import Categories from '@/constants/categories';

export const usePricesStore = defineStore('prices', {
    state: () => {
        const initialState = {
            categories: {},
            isLoading: false,
            errorMessage: ''
        };
        Object.keys(Categories).forEach(category => {
            initialState.categories[category] = [];
        });
        return initialState;
    },
    actions: {
        async fetchPrices() {
            this.isLoading = true;
            this.errorMessage = '';
            Object.keys(Categories).forEach(category => {
                this.categories[category] = [];
            });
            try {
                const response = await axios.get('http://localhost:8000/api/v1/prices/necessities-price');
                let data = response.data;


                data.forEach(item => {
                    const categoryKey = Object.keys(Categories).find(
                        key => Categories[key] === item.類別
                    );
                    if (categoryKey) {
                        this.categories[categoryKey].push(item);
                    }
                });
            } catch (error) {
                this.errorMessage = 'Error fetching prices: ' + error.message;
                console.log(error);
            } finally {
                this.isLoading = false;
            }
        }
    },
    getters: {
        getPricesByCategory: (state) => (category) => {
            return state.categories[category] || [];
        },
        getAllCategories: (state) => {
            return state.categories;
        }
    }
});
