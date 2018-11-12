<template>
  <MaintenancePage v-if="appEnv ==='dev'"/>
  <MultiTenantPage v-else-if="isInstalled && appEnv !=='dev'"/>
  <InstallPage v-else/>
</template>

<style>
</style>

<script>
import InstallPage from './states/Install'
import MultiTenantPage from './states/MultiTenant'
import MaintenancePage from './states/Maintenance'
export default {
  name: 'PageIndex',
  components: { MaintenancePage, InstallPage, MultiTenantPage },
  data () {
    return {
      tenants: [],
      loading: true,
      appEnv: 'dev'
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
