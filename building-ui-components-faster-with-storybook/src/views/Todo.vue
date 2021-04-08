<template>
  <div class="c-app__todo">
    <div class="c-app__nav">
      <the-navigation :items="navigationItems"></the-navigation>
    </div>
    <todo-list title="To-Do List"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import TheNavigation from '@/components/TheNavigation/TheNavigation.vue'

export default {
  name: 'todoApp',

  components: {
    TheNavigation,
    TodoList
  },

  props: {
    navigationItems: {
      type: Array,
      default: () => [
        {
          url: '/',
          title: 'Home',
          icon: [
            'fas',
            'house-user'
          ]
        },
        {
          url: '/presentation',
          title: 'Presentation',
          icon: [
            'fas',
            'file-alt'
          ]
        }
      ]
    }
  }
}
</script>
