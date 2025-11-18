<template>
    <div class="main">
        <div class="sidebar"></div>
        <div class="posts">
            <p>add posts here</p>
        </div>
        <div class="sidebar"></div>
    </div>
</template>

<script>

export default {
    name: 'MainView',
    components: {
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
}

@media only screen and (max-width: 600px) {
    .sidebar {
        display: none;
    }

    .main {
        justify-content: center;
    }
}
</style>
