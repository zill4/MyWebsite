import Home from './Home.svelte';
import About from './About.svelte';

import { writeable } from 'svelte/store';

const router = {
    
    '/': Home,

    '/home': Home,

    '/about': About

}

export default router;

export const curRoute = writeable('/home');