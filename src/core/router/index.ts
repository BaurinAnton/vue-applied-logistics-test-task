import { createRouter, createWebHistory } from 'vue-router'
import TestTaskView from '../views/TestTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'test-task',
      component: TestTaskView,
    },
  ],
})

export default router
