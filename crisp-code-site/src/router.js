import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Resume from './pages/Resume.svelte';
import Projects from './pages/Projects.svelte';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  }

]