<template>
  <div class="signup">
    <h1>Signup page</h1>
    <div class="card">
      <form @submit="handleSignup">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="email" required />
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
          <div v-if="errors.length > 0" class="error-messages">
            <p v-for="error in errors" :key="error" class="error-text">{{ error }}</p>
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    handleSignup(event) {
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

    validateEmail(email) {
      const errors = [];

      if (!email || email.trim() === '') {
        errors.push("Email is required");
      }

      return errors;
    },

    validatePassword(password) {
      const errors = [];

      if (password.length < 8 || password.length >= 15) {
        errors.push("The password length is either too short or too long, needs to 8 to 15 characters")
      }
      if (/\d/.test(password) == false) {
        errors.push("The password must contains at least one number")
      }
      if (/^\p{Lu}/u.test(password) == false) {
        errors.push("The first character of the password must be capital")
      }
      if (/[A-Z]/.test(password) == false) {
        errors.push("The password must include at least one uppercase alphabet character")
      }
      if (password.includes("_") == false) {
        errors.push("The password must include the character _ ")
      }
      if (/([a-z].*[a-z])/.test(password) == false) {
        errors.push("The password must include at least two lowercase alphabet characters")
      }

      return errors;
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

input[type="text"],
input[type="password"] {
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
}

.error-messages {
  margin-top: 8px;
}

.error-text {
  color: #e74c3c;
  font-size: 14px;
  margin: 4px 0;
}
</style>
