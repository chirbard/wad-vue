<template>
    <div class="add-post">
        <h1>Add Post</h1>
        <div class="card">
            <form @submit="handleAddPost">
                <div class="form-group">
                    <label for="body">Body:</label>
                    <textarea id="body" v-model="body" required></textarea>
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddPostView',
    data() {
        return {
            body: ''
        }
    },
    methods: {
        async handleAddPost(event) {
            event.preventDefault();
            const success = await this.$store.dispatch('addPost', this.body);
            if (success) {
                this.$router.push({ name: 'main' });
            } else {
                alert('Failed to add post');
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

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

label {
    margin-top: 8px;
}

textarea {
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 8px;
    min-height: 100px;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}
</style>
