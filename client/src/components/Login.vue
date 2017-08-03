<template>
  <div class="company">
    <h2>Login</h2>
    <form @submit.prevent="login">
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
            type="password"
            name="password"
            placeholder="Password*"
            v-model="userFormData.password"
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
  name: 'login',
  data () {
    return {
      userFormData: {
        name: '',
        password: ''
      }
    }
  },
  created () {
    axios.get('http://localhost:4000/users/register').then(res => {
      console.log(res)
    })
  },
  methods: {
    login () {
      console.log('test')
    }
  }
}
</script>
