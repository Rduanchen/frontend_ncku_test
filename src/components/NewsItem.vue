<template>
    <div class="news-item">
        <div class="container" >
            <div class="texts" @click="showDialog">
                <h2>{{ news.title }}</h2>
                <p class="time">{{ news.time }}</p>
                <div v-if="hasDetails">
                    <p><strong>原因：</strong> {{ news.reason }}</p>
                    <p><strong>影響：</strong> {{ news.summary }}</p>
                </div>
                <div v-else>
                    <p>{{ shortContent }}</p>
                </div>
            </div>
            <i v-if="!hasDetails && !news.isSummaryLoading" class="bi bi-stars summary-btn" @click="fetchSummary"></i>
            <div v-if="!hasDetails && news.isSummaryLoading" class="loader"></div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        news: {
            type: Object,
            required: true
        }
    },
    computed: {
        hasDetails() {
            return this.news.reason && this.news.summary;
        },
        shortContent() {
            return this.news.content.length > 200 ? this.news.content.substr(0, 200) + '...' : this.news.content;
        }
    },
    methods:{
        showDialog(){
            this.$emit('show-dialog');
        },
        fetchSummary(){
            if(this.isLoading) return;
            this.isLoading = true;
            this.$emit('fetch-summary');
        }
    }
};
</script>

<style scoped>
.news-item {
    padding: 1em;
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

.container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.summary-btn{
    font-size: 2em;
    display: none;
    cursor: pointer;
}

.summary-btn:hover{
    color: #f0ad4e;
}

.news-item:hover .summary-btn{
    display: block;
}

.texts{
    padding: 1em;
    border-radius: .5em;
    margin-right: 1em;
    width: 100%;
}

.texts:hover{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
}

.loader {
  width: 30px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #20A7E8;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
</style>