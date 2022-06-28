import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategoryView from "@/views/Category/AddCategoryView";
import CategoryView from "@/views/Category/CategoryView";
import EditCategoryView from "@/views/Category/EditCategoryView";

import AddProductView from "@/views/Product/AddProductView";
import ProductView from "@/views/Product/ProductView";
import EditProductView from "@/views/Product/EditProductView";
import showDetailsView from "@/views/Product/ShowDetailsView";
import SignUp from "@/views/SignUp";
import SignIn from "@/views/SignIn";
import WishList from "@/views/Product/WishList";
import CartView from "@/views/cart/CartView";
const routes = [
  {
    path: '/',
    name: 'Home',
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
  },
  {
    path: '/admin/product/:id',
    name: "EditProduct",
    component: EditProductView
  },
  {
    path: '/product/show/:id',
    name: "ShowDetails",
    component: showDetailsView
  }, {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn
  },
  {
      path: '/wishlist',
      name: 'WishList',
      component: WishList
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
