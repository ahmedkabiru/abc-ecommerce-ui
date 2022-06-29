<template>
  <div class="alert alert-success" role="alert" id="message">
    Payment successful
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PaymentSuccess",
  props:["baseURL"],
  data() {
    return {
      token: null,
      sessionId: null
    }
  },
  methods:{

    saveOrder(){
      axios({
        method: 'post',
        url: this.baseURL + "order/add?sessionId="+ this.sessionId,
        headers: {
          'Content-Type': 'application/json',
          'token': this.token
        }
      }) .then( (response) => {
        if(response.status == 200){
        //  document.getElementById("message").innerHTML = "order placed";
          this.$router.push({ name : 'OrderHistory'})
        }
      }).catch(err => console.log(err));
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.sessionId = localStorage.getItem("sessionId");
    this.saveOrder()
  }
}
</script>

<style scoped>

</style>