import Vue from 'vue'
import StoryRouter from 'storybook-vue-router';

import TheNavigation from './TheNavigation.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHouseUser)
library.add(faFileAlt)
library.add(faListAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const iconMap = { 
  House: [
    'fas',
    'house-user'
  ], 
  File: [
    'fas',
    'file-alt'
  ], 
  List: [
    'fas',
    'list-alt'
  ] 
};

export default {
  title: 'Navigation example',
  component: TheNavigation,
  decorators: [StoryRouter()],
  // args: {},
  // Creates specific argTypes with options
  argTypes: {
    icon1: {
      name: 'First navigation item',
      defaultValue: 'House',
      description: 'Select first item.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: iconMap.House },
      },
      control: {
        type: 'select',
        options: Object.keys(iconMap)
      }
    },
    icon2: {
      name: 'Second navigation item',
      defaultValue: 'List',
      description: 'Select second item.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: iconMap.List },
      },
      control: {
        type: 'select',
        options: Object.keys(iconMap)
      }
    },
    items: {
      name: 'Items',
      description: 'Items that are displayed in the navigation containing a url, title and and icon.',
      // Disables control and docs for the items' property
      // table: {
        //disable:true
      // },
      // Disables control bue keeps docs for the items' property
      // control: false
    },
    main: {
      name: 'Main',
      description: 'Adjusts the look of the navigation for the main one.',
    }
  }
}

const Template = (args, { argTypes }) => {
  const { icon1, icon2 } = args;

  if (icon1) {
    args.items[0].icon = iconMap[icon1]
  }
  if (icon2) {
    args.items[1].icon = iconMap[icon2]
  }

  return {
      components: { TheNavigation, FontAwesomeIcon },
      props: Object.keys(argTypes),
      template: '<TheNavigation v-bind="$props" />'
  }
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      url: '/',
      title: 'Home',
      icon: iconMap.House
    },
    {
      url: '/app',
      title: 'App',
      icon: iconMap.List
    }
  ]
};

export const Main = Template.bind({});
Main.args = {
  main: true,
  items:  [
      {
        url: '/presentation',
        title: 'Presentation',
        icon: iconMap.File
      },
      {
        url: '/app',
        title: 'App',
        icon: iconMap.List
      }
  ]
};