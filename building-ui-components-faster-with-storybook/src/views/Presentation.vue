<template>
  <div class="c-app__presentation">
    <div class="c-app__nav">
      <the-navigation :items="navigationItems"></the-navigation>
    </div>

    <div class="c-presentation">
      <div class="c-presentation__slides">
        <hooper :settings="hooperSettings">
          <slide>
            <h1>Storybook</h1>
          </slide>
          <slide>
            <h2>What benefits does it bring?</h2>
            <div class="o-separator"></div>
            <h5>Component isolation</h5>
            <h5>Component documentation</h5>
            <h5>Component automatic visual test</h5>
            <h5>Addons ecosystem</h5>
            <h3>=</h3>
            <h4>Faster and easier development</h4>
          </slide>
          <slide>
            <h2>What's a Story?</h2>
            <blockquote>"A story is a code snippet that renders an example of a component in a specific state."<br><cite><a href="https://storybook.js.org/blog/component-story-format/" target="_blank">Component Story Format</a>, Storybooks's blog</cite></blockquote>
            <div class="o-separator"></div>
            <h4>Component Story Format (CSF)</h4>
            <div class="o-separator"></div>
            <div class="c-table">
              <div class="c-table__col">
                <ul>
                  <li class="c-table__title"><strong>Default export</strong> - Describes the component</li>
                  <li><pre>export default {}</pre></li>
                  <li><div class="o-separator"></div></li>
                </ul>
              </div>
              <div class="c-table__col">
                <ul>
                  <li class="c-table__title"><strong>Named export(s)</strong> - Describes the stories</li>
                  <li><pre>export Story {}</pre></li>
                </ul>
              </div>
            </div>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation/TheNavigation.vue'
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Presentation',

  components: {
    TheNavigation,
    Hooper,
    Slide
  },

  data() {
    return {
      hooperSettings: {
        vertical: true,
        centerMode: true,
        keysControl: true,
        wheelControl: false,

      }
    };
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

<style>
.c-presentation {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  text-align: center;
}

.c-presentation__slides {
  flex-grow: 1;
}

.c-table {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.c-table__title {
  font-size: 1.1rem;
}

.hooper {
  height: 100%;
}

.hooper-list {
  display: flex;
  flex-direction: column;
}

.hooper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hooper.is-vertical .hooper-track {
  height: calc(100vh - 3.3333333333333335rem * 2);
}

.o-separator {
  margin-top: 2.7777777777777777rem;
}
</style>
