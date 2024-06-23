import { defineStore } from 'pinia';
// import axios from 'axios';
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
        fetchPrices() {
            this.isLoading = true;
            this.errorMessage = '';
            try {
                // const response = await axios.get('https://opendata.ey.gov.tw/api/ConsumerProtection/NecessitiesPrice', {
                //     CategoryName: params
                // });
                // const data = response.data;
                const data = [
                    {
                        類別: '牛奶',
                        編號: '1',
                        產品名稱: '全脂鮮乳',
                        規格: '1000',
                        統計值: '1,2,3,4,1,34,1,5,341,112',
                        時間起點: '2021-01-01',
                        時間終點: '2021-06-01'
                    }
                ];

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
