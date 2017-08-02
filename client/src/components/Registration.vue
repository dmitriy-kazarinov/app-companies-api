<template>
  <div class="company">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <ul>
        <li>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            v-model="userFormData.name"
            required />
        </li>
        <li>
          <input
            type="text"
            name="email"
            placeholder="Email*"
            v-model="userFormData.email"
            required />
        </li>
        <li>
          <input
            type="password"
            name="password"
            placeholder="Password*"
            v-model="userFormData.password"
            required />
        </li>
        <li>
          <input
            type="password"
            name="passwordSecond"
            placeholder="Confirm password*"
            v-model="userFormData.passwordSecond"
            required />
        </li>
      </ul>
      <button type="submit" name="button">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'registration',
  data () {
    return {
      userFormData: {
        name: '',
        email: '',
        password: '',
        passwordSecond: ''
      }
    }
  },
  created () {
    axios.get('http://localhost:4000/users/register').then(res => {
      console.log(res)
    })
  },
  methods: {
    registerUser () {
      axios.post('http://localhost:4000/users/register', this.userFormData).then(res => {
        console.log(res)
        this.userFormData = {}
      })
    }
  }
}
</script>
