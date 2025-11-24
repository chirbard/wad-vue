<template>
    <div class="main">
        <div class="sidebar"></div>
        <div class="posts">
            <button class="reset-likes-button" @click="resetAllLikes">Reset Likes</button>
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <div class="sidebar"></div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import PostCard from '@/components/PostCard.vue'

export default {
    name: 'MainView',
    components: {
        PostCard
    },
    computed: {
        ...mapGetters({
            posts: 'getAllPosts'
        })
    },
    methods: {
        ...mapMutations(['resetLikes']),
        resetAllLikes() {
            this.resetLikes()
        }
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    flex: 1 1 auto;
    min-height: 0;
    box-sizing: border-box;
}

.sidebar {
    background-color: #e0e0e0;
    width: 100px;
    align-self: stretch;
    flex: 0 0 100px;
}

.posts {
    flex: 1 1 auto;
    padding: 16px;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (max-width: 700px) {
    .sidebar {
        display: none;
    }

    .main {
        justify-content: center;
    }
}

.reset-likes-button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 16px;
}
</style>
