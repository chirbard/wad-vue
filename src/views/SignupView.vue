<template>
    <div class="signup">
        <h1>This is a signup page</h1>
        <!-- Add signup form here -->
    </div>
</template>

<script>
  export default {
    name: 'SignupPage',
    data() {
      return {
        password: ''
      }
    },
    methods:{
      handleSignup(event){
        event.preventDefault();
        const errors = this.validatePassword(this.password);

        if (errors.length === 0) {
          alert("Welcome in!");
        }
        else{
          alert("Please fix password errors - " + errors.join(" "));
        }
      },

      validatePassword(password){
          const errors = [];

          if (password.length < 8 || password.length >= 15){
            errors.push("The password length is either too short or too long, needs to 8 to 15 characters")
          }
          if(/\d/.test(password) == false) {
            errors.push("The password must contains at least one number")
          }
          if(/^\p{Lu}/u.test(password) == false) {
            errors.push("The first character of the password must be capital")
          }
          if(password.includes("_") == false) {
            errors.push("The password must include the character _ ")
          }
          if( /([a-z].*[a-z])/.test(password) == false) {
            errors.push("The password must include at least two lowercase alphabet characters")
          }

          return errors;
        }
    }
  }
</script>




