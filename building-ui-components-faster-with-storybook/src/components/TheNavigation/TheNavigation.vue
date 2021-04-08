<template>
    <nav :class="[{ 'c-nav': !main }, { 'c-nav--main': main }]">
      <router-link v-for="item in items" :key="item.title" :to="item.url" :title="item.title" class="c-nav__link"><font-awesome-icon :icon="item.icon" class="c-nav__icon"></font-awesome-icon></router-link>
    </nav>
</template>

<script>
export default {
  name: 'the-navigation',

  props: {
      main: {
        type: Boolean,
        default: false
      },
      items: {
          type: Array,
          default: () =>  [],
          required: true
      }
  }
}
</script>

<style scoped>
.c-nav__link, .c-nav--main .c-nav__link {
  padding: 0.8333333333333334rem 1.1111111111111112rem; /* 15px 20px */
  color: #2c3e50;
}

.c-nav__link {
  display: block;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #dadada;
}

.c-nav__link + .c-nav__link {
  margin-top: 0.05555555555555555rem; /* 1px */ 
}

.c-nav--main .c-nav__link + .c-nav__link {
  margin-left: 1.3888888888888888rem; /* 25px */
}

.c-nav--main .c-nav__link {
  display: inline-block;
  vertical-align: middle;
  border-radius: 10px;
  font-size: 1.6666666666666667rem; /* 30px */
  background: #42b883;
  color: #dadada;
  padding: 1.1111111111111112rem 1.3888888888888888rem; /* 20px 25px */
  box-shadow:  5px 5px 10px #3dab7a, 
             -5px -5px 10px #47c58c;
  transition: box-shadow 100ms linear;
}

.c-nav--main .c-nav__link:hover {
  box-shadow: inset 5px 5px 10px #3dab7a, inset -5px -5px 10px #47c58c;
}

.c-nav__icon.c-nav__icon {
  width: 1.1111111111111112rem; /* 20px */
  max-height: 1rem;
}

.c-nav--main .c-nav__icon.c-nav__icon {
  width: 1.6666666666666667rem; /* 30px */
  max-height: 1.6666666666666667rem; /* 30px */
}
</style>