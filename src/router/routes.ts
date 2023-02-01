/**
 * @Author: xiaocao
 * @Date:   2023-01-29 16:30:13
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-01 17:07:37
 */
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/2',
    component: () => import('@/layouts/XxxxLl.vue'),
    children: [
      { path: '2', component: () => import('@/pages/ad/IndexPage copy.vue') },
    ],
  },

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
