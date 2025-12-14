<template>
    <div class="a-post">
        <h1>A Post</h1>
        <div class="card" v-if="post">
            <h3>{{ post.body }}</h3>
            <div class="actions">
                <button @click="updatePost" class="update-btn">Update</button>
                <button @click="deletePost" class="delete-btn">Delete</button>
            </div>
            <div v-if="isUpdating" class="update-form">
                <textarea v-model="updatedBody"></textarea>
                <button @click="confirmUpdate" class="default-button">Confirm Update</button>
                <button @click=" isUpdating = false" class="default-button">Cancel</button>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'APostView',
    data() {
        return {
            post: null,
            isUpdating: false,
            updatedBody: ''
        }
    },
    async created() {
        const postId = this.$route.params.id;
        this.post = await this.$store.dispatch('getPost', postId);
        if (this.post) {
            this.updatedBody = this.post.body;
        }
    },
    methods: {
        updatePost() {
            this.isUpdating = true;
        },
        async confirmUpdate() {
            const success = await this.$store.dispatch('updatePost', {
                id: this.post.id,
                body: this.updatedBody
            });
            if (success) {
                this.isUpdating = false;
                this.post.body = this.updatedBody;
                this.$router.push({ name: 'main' });
            } else {
                alert('Failed to update post');
            }
        },
        async deletePost() {
            const success = await this.$store.dispatch('deletePost', this.post.id);
            if (success) {
                this.$router.push({ name: 'main' });
            } else {
                alert('Failed to delete post');
            }
        }
    }
}
</script>

<style scoped>
.card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 16px;
    width: 360px;
    margin: 0 auto;
}

.actions {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
}

button {
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    color: white;
}

.update-btn {
    background-color: #3498db;
}

.delete-btn {
    background-color: #e74c3c;
}

.default-button {
    background-color: #2ecc71;
}

.update-form {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

textarea {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
}
</style>
