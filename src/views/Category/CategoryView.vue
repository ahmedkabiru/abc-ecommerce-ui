<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link id="add-category" :to="{name : 'AddCategory'}" v-show="$route.name==='AdminCategory'">
          <button class="btn">Add a new Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div v-for="category of categories" :key="category.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <CategoryBox :category="category">
        </CategoryBox>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "@/components/Category/CategoryBox";
const axios = require("axios")

export default {
  name: "CategoryView",
  components: {CategoryBox},
  data(){
    return {
      categories : null,
    }
  },
  props:["baseURL"],
  methods: {
    async getCategories() {
      //fetch categories
      await axios.get(this.baseURL + "category")
          .then(res => this.categories = res.data)
          .catch(err => console.log(err))
    }
  },
  mounted() {
    this.getCategories()
  }
}
</script>

<style scoped>

</style>