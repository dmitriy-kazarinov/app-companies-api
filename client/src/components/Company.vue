<template>
  <div class="company">
    <h2>About Company:</h2>
    <ul>
      <li>Company name: {{companyData.name}}</li>
      <li>Company rank: {{companyData.rank}}</li>
      <li>Company available: {{companyData.available}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'company',
  data () {
    return {
      companyData: {}
    }
  },
  mounted () {
    axios.get(`http://localhost:4000/api/companies/${this.$route.params.id}`).then(res => {
      this.companyData = res.data
    })
  }
}
</script>
