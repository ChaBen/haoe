import Main from '@/pages/main/main';
import AboutPage from '@/pages/about';
import FormPage from '@/pages/form';
import NotFoundPage from '@/pages/not-found';

import PanelLeftPage from '@/pages/side/panel-left';

// auth

export default [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
