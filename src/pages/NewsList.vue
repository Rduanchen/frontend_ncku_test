<template>
    <div class="wrapper">
        <h1>相關新聞</h1>
        <div class="content">
            <div v-if="isLoading">loading...</div>
            <div v-else>
                <NewsItem v-for="news in newsList" :key="news.id" :news="news" />
            </div>
        </div>
    </div>
</template>

<script>
import { useNewsStore } from '@/stores/news';
import { onMounted } from 'vue';
import NewsItem from '@/components/NewsItem.vue';

export default {
    components: {
        NewsItem
    },
    created() {
        const newsStore = useNewsStore();

        onMounted(() => {
            newsStore.fetchNews();
        });
    },
    computed: {
        newsList() {
            const newsStore = useNewsStore();
            return newsStore.newsList;
        },
        isLoading() {
            const newsStore = useNewsStore();
            return newsStore.isLoading;
        }
    }
};
</script>

<style scoped>
.wrapper {
    padding: 3em 5em;
    background: #f3f3f3;
    min-height: calc(100vh - 4.5em);
    height: calc(100% - 4.5em);
    box-sizing: border-box;
    width: 100%;
}
.content {
    background-color: white;
    margin-top: 1em;
    border-radius: 1em;
    padding: 1em 3em;
}
.news-item{
    border-bottom: #aaaaaa 1px solid;
}
.news-item:last-child{
    border-bottom: none;
}
</style>