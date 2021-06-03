import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Resume from './pages/About.svelte';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume,
  }

]