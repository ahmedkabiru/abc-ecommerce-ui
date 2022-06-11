import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategoryView from "@/views/Category/AddCategoryView";
import CategoryView from "@/views/Category/CategoryView";
import EditCategoryView from "@/views/Category/EditCategoryView";

import AddProductView from "@/views/Product/AddProductView";
import ProductView from "@/views/Product/ProductView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  },
  {
    path: '/admin/product/add',
    name: "AddProduct",
    component: AddProductView
  },
  {
    path: '/admin/product',
    name: "AdminProduct",
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
