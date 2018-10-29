<template>
  <div v-if="!loading">
    <TenantsPage v-if="isInstalled"/>
    <InstallPage v-else/>
  </div>
</template>

<style>
</style>

<script>
import InstallPage from './Install.vue'
import TenantsPage from './Tenants.vue'
export default {
  name: 'PageIndex',
  components: { InstallPage, TenantsPage },
  data () {
    return {
      tenants: [],
      loading: true
    }
  },
  firestore () {
    return {
      tenants: this.$db.collection('tenants'),
      host: this.$db.collection('company-info')
    }
  },
  computed: {
    isInstalled () {
      return (this.tenants.length !== 0 && typeof this.$db !== 'undefined')
    }
  },
  created () {
    this.loading = false
    console.log('yoo')
  }
}
</script>
