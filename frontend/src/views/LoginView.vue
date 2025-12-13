<template>
<<<<<<< HEAD:src/views/LoginView.vue
  <div class="login">
    <h1>Login page</h1>
    <div class="card">
      <form @submit="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="email" required />
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
          <div v-if="errors.length > 0" class="error-messages">
            <p v-for="error in errors" :key="error" class="error-text">{{ error }}</p>
          </div>
        </div>
        <button type="submit">Login</button>
        <button type="button" @click="goToSignup">Sign Up</button>
      </form>
    </div>
  </div>
=======
    <div class="login">
        <h1>Login page</h1>
        <div class="card">
            <form @submit="handleLogin">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" id="email" v-model="email" required />
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" required />
                    <div v-if="error" class="error-messages">
                        <p class="error-text">{{ error }}</p>
                    </div>
                </div>
                <button type="submit">Login</button>
            </form>
            <div class="signup-link">
                <p>Don't have an account?</p>
                <button @click="goToSignup">Sign Up</button>
            </div>
        </div>
    </div>
>>>>>>> 9d33746 (Create backend functinality):frontend/src/views/LoginView.vue
</template>

<script>
export default {
<<<<<<< HEAD:src/views/LoginView.vue
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    handleLogin(event) {
      event.preventDefault();
      this.errors = [];

      // Validate email
      const emailErrors = this.validateEmail(this.email);
      this.errors.push(...emailErrors);

      // Validate password
      const passwordErrors = this.validatePassword(this.password);
      this.errors.push(...passwordErrors);

      if (this.errors.length === 0) {
        // Navigate to main view on successful validation
        this.$router.push({ name: 'main' });
      }
    },

    goToSignup() {
      this.$router.push({ name: 'signup' });
    },

    validateEmail(email) {
      const errors = [];

      if (!email || email.trim() === '') {
        errors.push("Invalid email");
      }

      return errors;
    },

    validatePassword(password) {
      const errors = [];

      if (!password || password.trim() === '') {
        return ["Invalid password"];
      }
      if (password.length < 8 || password.length >= 15) {
        return ["Invalid password"];
      }
      if (/\d/.test(password) == false) {
        return ["Invalid password"];
      }
      if (/^\p{Lu}/u.test(password) == false) {
        return ["Invalid password"];
      }
      if (/[A-Z]/.test(password) == false) {
        return ["Invalid password"];
      }
      if (password.includes("_") == false) {
        return ["Invalid password"];
      }
      if (/([a-z].*[a-z])/.test(password) == false) {
        return ["Invalid password"];
      }

      return [];
    }
  }
=======
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async handleLogin(event) {
            event.preventDefault();
            this.error = '';

            const success = await this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            });

            if (success) {
                this.$router.push({ name: 'main' });
            } else {
                this.error = "Login failed. Please check your credentials.";
            }
        },
        goToSignup() {
            this.$router.push({ name: 'signup' });
        }
    }
>>>>>>> 9d33746 (Create backend functinality):frontend/src/views/LoginView.vue
}
</script>

<style scoped>
.card {
<<<<<<< HEAD:src/views/LoginView.vue
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
=======
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
>>>>>>> 9d33746 (Create backend functinality):frontend/src/views/LoginView.vue
}

input[type="text"],
input[type="password"] {
<<<<<<< HEAD:src/views/LoginView.vue
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
}

.error-messages {
  margin-top: 8px;
}

.error-text {
  color: #e74c3c;
  font-size: 14px;
  margin: 4px 0;
=======
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
}

.signup-link {
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 10px;
}

.error-messages {
    margin-top: 8px;
}

.error-text {
    color: #e74c3c;
    font-size: 14px;
    margin: 4px 0;
>>>>>>> 9d33746 (Create backend functinality):frontend/src/views/LoginView.vue
}
</style>
