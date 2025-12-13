<template>
    <div class="main">
        <div class="sidebar"></div>
        <div class="posts">
            <div class="buttons">
                <button @click="logout">Logout</button>
                <button @click="goToAddPost">Add Post</button>
                <button @click="deleteAllPosts" class="delete-all">Delete All</button>
            </div>
            <PostCard v-for="post in posts" :key="post.id" :post="post" @click="goToPost(post.id)"
                class="clickable-post" />
        </div>
        <div class="sidebar"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostCard from '@/components/PostCard.vue'

export default {
    name: 'MainView',
    components: {
        PostCard
    },
    computed: {
        ...mapGetters({
            posts: 'getAllPosts',
            isAuthenticated: 'isAuthenticated'
        })
    },
    mounted() {
        if (!this.isAuthenticated) {
            this.$router.push({ name: 'login' });
        } else {
            this.$store.dispatch('fetchPosts');
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.push({ name: 'login' });
        },
        goToAddPost() {
            this.$router.push({ name: 'addpost' });
        },
        deleteAllPosts() {
            this.$store.dispatch('deleteAllPosts');
        },
        goToPost(id) {
            this.$router.push({ name: 'apost', params: { id } });
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

.buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #42b983;
    color: white;
}

.delete-all {
    background-color: red;
}

.clickable-post {
    cursor: pointer;
}
</style>
