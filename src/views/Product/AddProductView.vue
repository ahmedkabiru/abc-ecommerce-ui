<template>

  <div class="container">

    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add new Product</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Category</label>
            <select v-model="categoryId" class="form-control" required>
              <option v-for="category of categories" :key="category.id" :value="category.id">
                {{ category.categoryName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input v-model="name" class="form-control" required type="text">
          </div>
          <div class="form-group">
            <label>Description</label>
            <input v-model="description" class="form-control" required type="text">
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input v-model="imageURL" class="form-control" required type="url">
          </div>
          <div class="form-group">
            <label>Price</label>
            <input v-model="price" class="form-control" required type="number">
          </div>
          <button class="btn btn-primary" type="button" @click="addProduct">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
const axios = require("axios")
import swal from "sweetalert";
export default {
  name: "AddProductView",
  data() {
    return {
      categoryId: null,
      name: null,
      description: null,
      imageURL: null,
      price: null
    }

  },
  props: ["baseURL", "categories"],
  methods: {

    async addProduct() {

      const newProduct = {
        categoryId: this.categoryId,
        name: this.name,
        description: this.description,
        imageURL: this.imageURL,
        price: this.price
      }

      await axios(
          {
            method: 'post',
            url: this.baseURL + "product",
            data: JSON.stringify(newProduct),
            headers: {
              'Content-Type': 'application/json'
            }

          }).then(() => {
        swal({
          text: "Product Added Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      }).catch(err => console.log(err));

    }

  },
  mounted() {

  }
}
</script>

<style scoped>

h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}


</style>