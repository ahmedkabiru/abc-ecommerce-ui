import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategoryView from "@/views/Category/AddCategoryView";
import CategoryView from "@/views/Category/CategoryView";
import EditCategoryView from "@/views/Category/EditCategoryView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name: "AddCategory",
    component: AddCategoryView
  },
  {
    path: '/admin/category',
    name: "AdminCategory",
    component: CategoryView
  },
  {
    path: '/admin/category/:id',
    name: "EditCategory",
    component: EditCategoryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
