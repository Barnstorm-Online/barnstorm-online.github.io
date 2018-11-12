<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          v-if="appEnv !== 'dev'"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Barnstorm<q-icon class="bs-wifi-logo" name="wifi" />online
          <div slot="subtitle">Running on v{{ $pkg.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
      <!--<q-btn-->
        <!--flat-->
        <!--dense-->
        <!--round-->
        <!--aria-label="Menu"-->
      <!--/>-->
    </q-layout-header>

    <q-layout-drawer
      v-if="appEnv !== 'dev'"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item v-bind:key="index" v-for="(link, index) in sidebarLinks" @click.native="openURL(link.url)">
          <q-item-side :icon="link.icon" />
          <q-item-main :label="link.label" :sublabel="link.sublabel" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      appEnv: 'dev',
      sidebarLinks: [
        {
          icon: 'rss feed',
          label: 'Twitter',
          sublabel: '@barnstorm',
          url: 'https://twitter.com/barnstorm'
        }
      ],
      companyInfo: {
        title: 'Barnstorm Online'
      },
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
  .bs-wifi-logo {
    margin-top: -6px;
    font-size: 1.8rem;
  }
</style>
