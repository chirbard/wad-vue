<template>
    <footer class="app-footer" role="contentinfo">
        <h3>Footer Component</h3>
        <div class="row">
            <div class="column">
                <p>My Company</p>
                <p>© 2025 My Company. All rights reserved.</p>
            </div>
            <div class="column">
                <p>Contact Us</p>
                <p>Email: contact@mycompany.com</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
    width: 100%;
    background: #e0e0e0;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
}

.row {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 16px;
    box-sizing: border-box;
}
</style>