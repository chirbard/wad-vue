<template>
    <div class="post-card">
        <div class="post-header">
            <div class="author-info">
                <img :src="post.authorAvatar" :alt="post.author" class="author-avatar">
                <h3 class="author-name">{{ post.author }}</h3>
            </div>
            <p class="post-date">{{ post.displayDate }}</p>
        </div>

        <div class="post-content">
            <img v-if="post.image" :src="post.image" :alt="post.text" class="post-image">
            <p class="post-text">{{ post.text }}</p>
        </div>

        <div class="post-actions">
            <button @click="likePost" class="like-button">
                <img src="/img/like.jpg" alt="Like" class="like-icon"> {{ post.likes }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'PostCard',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapMutations(['incrementLikes']),
        likePost() {
            this.incrementLikes(this.post.id)
        }
    }
}
</script>

<style scoped>
.post-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    background-color: #fff;
    width: 420px;
}

@media only screen and (max-width: 500px) {
    .post-card {
        width: 100%;
    }
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.author-info {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px;
}


img {
    max-width: 100%;
    border-radius: 8px;
}

.like-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
}

.post-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.like-button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    background-color: #bbb;
    border-radius: 50px;
}

.like-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
}
</style>