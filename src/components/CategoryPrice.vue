<template>
<div>
    <h2>{{ category }}</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <table v-if="!isLoading && !errorMessage">
        <thead>
            <tr>
                <th>商品名稱</th>
                <th>規格</th>
                <th>最新價格</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in priceData()" :key="data.編號">
                <td>{{ data.產品名稱 }}</td>
                <td>{{ data.規格 }}</td>
                <td>{{ latestPrice(data.統計值) }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import {
    usePricesStore
} from '@/stores/prices';
import Categories from '@/constants/categories';

export default {
    props: {
        category: {
            type: String,
            required: true
        }
    },
    computed: {
        categoryName() {
            return Categories[this.category];
        },
        priceData() {
            const store = usePricesStore();
            return store.getPricesByCategory(this.category);
        },
        latestPrice(prices_str) {
            let number = prices_str.split(',').map(Number);
            return number[number.length - 1];
        },
        isLoading() {
            const store = usePricesStore();
            return store.isLoading;
        },
        errorMessage() {
            const store = usePricesStore();
            return store.errorMessage;
        }
    },

};
</script>

<style scoped>
.error {
    color: red;
}
</style>
