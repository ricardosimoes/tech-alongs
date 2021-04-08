<template>
  <div class="c-app__home">
    <nav class="c-nav">
      <the-navigation :main="true" :items="navigationItems"></the-navigation>
    </nav>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation/TheNavigation.vue'

export default {
  name: 'home',

  components: {
    TheNavigation
  },

  props: {
    navigationItems: {
      type: Array,
      default: () => [
        {
          url: '/presentation',
          title: 'Presentation',
          icon: [
            'fas',
            'file-alt'
          ]
        },
        {
          url: '/app',
          title: 'App',
          icon: [
            'fas',
            'list-alt'
          ]
        }
      ]
    }
  }
}
</script>
