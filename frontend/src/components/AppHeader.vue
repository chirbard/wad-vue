<template>
    <header class="app-header" role="banner">
        <div class="header-inner">Header component</div>
        <nav class="header-nav">
            <router-link to="/">Main</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
    width: 100%;
    background: #e0e0e0;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 16px 0;
}

.header-inner {
    font-weight: bold;
    margin-bottom: 8px;
}

.header-nav {
    padding: 6px 0;
}

.header-nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

.header-nav a.router-link-exact-active {
    color: #42b983;
}
</style>
