/**
 * @Author: xiaocao
 * @Date:   2023-01-29 16:30:13
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-02 16:42:11
 */
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AdLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '1', component: () => import('@/pages/ad/IndexPage.vue') },
    ],
  },

  {
    path: '/manage',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
