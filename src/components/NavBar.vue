<template>
    <nav class="navbar">
        <div class="title"> <router-link to="/overview">價格追蹤小幫手</router-link></div>
        <ul class="options">
            <li><router-link to="/overview">物價概覽</router-link></li>
            <li><router-link to="/trending">物價趨勢</router-link></li>
            <li><router-link to="/news">相關新聞</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    background-color: #f3f3f3;
    padding: 1.5em;
    height: 4.5em;
    width: 100%;
    align-items: center;
    box-shadow: 0 0 5px #000000;
}

.navbar ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
}

.title > a{
    font-size: 1.4em;
    font-weight: bold;
    color: #2c3e50 !important;
}

.navbar li {
    color: #575B5D;
    margin: 0 .5em;
    font-size: 1.2em;
}

.navbar li:hover{
    cursor: pointer;
    font-weight: bold;
}

.navbar a {
    text-decoration: none;
    color: #575B5D;
}

</style>