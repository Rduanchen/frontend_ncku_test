<template>
    <div class="news-item">
        <h2>{{ news.title }}</h2>
        <p class="time">{{news.time}}</p>
        <p><strong>原因：</strong> {{ news.reason }}</p>
        <p><strong>影響：</strong> {{ news.summary }}</p>
    </div>
</template>

<script>
export default {
    props: {
        news: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.news-item {
    padding: 2em;
}

.news-item h2 {
    margin: 0;
    font-size: 1.5em;
}

.news-item p {
    margin: .5em 0;
    text-align: start;
    font-size: 1.1em;
}

.news-item .time {
    color: #888;
}
</style>