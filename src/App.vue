<!--<template>-->
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
<!--</template>-->

<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <div style="min-height: 60vh">
      <router-view v-if="products && categories"
                   :baseURL="baseURL"
                   :products="products"
                   :categories="categories"
                   @fetchData = "fetchData">
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const  axios = require("axios")
export  default {
  data(){
    return {
      baseURL : process.env.VUE_APP_BASE_URL,
      products : null,
      categories : null
    }
  },
  components:{
      Navbar,Footer
  },
  methods : {
      async fetchData(){
        // fetch product
        await axios.get(this.baseURL + "product")
            .then(res => {
              this.products = res.data;
            }).catch(err => console.log(err))

        // fetch categories
        await axios.get(this.baseURL + "category")
            .then(res => {
              this.categories = res.data;
            }).catch(err => console.log(err))
      }
  },
  mounted() {
    this.fetchData()
  }

}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
