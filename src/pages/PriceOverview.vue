<template>
    <div class="wrapper">
        <h1 class="title">各類商品物價概覽</h1>
        <div class="prices">
            <CategoryPrice class="category" v-for="category in category_list" :key="category"
                :category="category" :isLoading="isLoading" :errorMessage="errorMessage" :priceData="getPriceData(category)"></CategoryPrice>
        </div>
    </div>
</template>

<script>
import CategoryPrice from '@/components/CategoryPrice.vue';
import Categories from '@/constants/categories';
import { usePricesStore } from '@/stores/prices';

export default {
    name: 'PriceOverview',
    data() {
        return {
            prices: {}
        };
    },
    components: {
        CategoryPrice
    },
    computed: {
        category_list() {
            return Object.keys(Categories);
        },
        isLoading(){
            const store = usePricesStore();
            return store.isLoading;
        },
        errorMessage(){
            const store = usePricesStore();
            return store.errorMessage;
        },
    },
    methods:{
        getPriceData(category){
            const store = usePricesStore();
            return store.getPricesByCategory(category);
        }    
    },
    created() {
        const store = usePricesStore();
        store.fetchPrices();
    }
};
</script>

<style scoped>
.wrapper{
    padding: 3em 5em;
    background: #f3f3f3;
    height: calc(100% - 4.5em);
    box-sizing: border-box;
}
.prices{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.category{
    margin: 1em;
    flex-grow: 1;
}
</style>