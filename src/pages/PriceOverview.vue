<template>
    <div class="hey">哈囉 不要消失</div>
    <!-- <div>
        <CategoryPrice v-for="category in category_list" :key="category" :category="category"></CategoryPrice>
    </div> -->
</template>

<script>
// import CategoryPrice from '@/components/CategoryPrice.vue';
// import Categories from '@/constants/categories';
// import { usePricesStore } from '@/stores/prices';

export default {
    name: 'PriceOverview',
//     components: {
//         // CategoryPrice
//     },
//     computed: {
//         category_list() {
//             return Object.keys(Categories);
//         }
//     },
//     created() {
//         const store = usePricesStore();
//         store.fetchPrices();
//     }
};
</script>

<style>
.hey{
    font-size: 1.5em;
    font-weight: bold;
    color: #575B5D;
    margin-top: 5em;
    text-align: center;
}
</style>