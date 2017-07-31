<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Companies:</h2>
    <ul>
      <li v-for="company in companies">
        <router-link
          :to="{name: 'company', params: {id: company._id}}">
          {{company.name}}
        </router-link>
        <button
          type="button"
          name="button"
          class="close"
          @click="deleteCompany(company._id)">
          x
        </button>
      </li>
    </ul>
    <button
      type="button"
      name="button"
      @click="isAddCompany = true">
      +
    </button>
    <form
      @submit.prevent="sendCompany"
      v-if="isAddCompany">
      <div class="row">
        <input
          name="Name"
          v-model="companyFormData.name"
          type="text"
          placeholder="Company Name*"
          required>
      </div>
      <div class="row">
        <input
          name="Rank"
          v-model="companyFormData.rank"
          type="text"
          placeholder="Company Rank">
      </div>
      <div class="row">
        <input
          name="Rank"
          v-model="companyFormData.available"
          type="checkbox">
          Is Company Available?
      </div>
      <div class="row">
        <button type="submit" name="button">Add Company</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to app-companies-api',
      companies: [],
      companyFormData: {
        name: '',
        rank: '',
        available: false
      },
      isAddCompany: false
    }
  },
  mounted () {
    axios.get('http://localhost:4000/api/companies').then(res => {
      this.companies = res.data
    })
    axios.get('http://localhost:4000/users/register').then(res => {
      console.log(res)
    })
  },
  methods: {
    sendCompany () {
      axios.post('http://localhost:4000/api/companies', this.companyFormData).then(res => {
        this.companies.push(res.data)
        this.isAddCompany = false
        this.companyFormData = {}
      })
    },
    deleteCompany (id) {
      axios.delete(`http://localhost:4000/api/companies/${id}`).then(res => {
        this.companies = this.companies.filter(item => item._id !== res.data._id)
      })
    }
  }
}
</script>
