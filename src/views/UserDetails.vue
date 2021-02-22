<template>
<div class="detail">
  <div id="image">
    <img :src="userDetail.avatar_url"/>
  </div>
  <div id="content">
    <h1>Welcome to {{username}}'s detail!</h1>
    <h2>User Id: {{userDetail.id}}</h2>
    <h2>User Name: {{userDetail.name}}</h2>
    <h2>No. of followers: {{userDetail.followers}}</h2>
    <h2>No.of following: {{userDetail.following}}</h2>
    <h2 v-if="userDetail.location">Location: {{userDetail.location}}</h2>
  </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "UserDetails",
  data: ()=> {
    return{
      username: "",
      userDetail:{}
    }
  },
  created() {
    this.username=this.$route.params.user

    axios.get('https://api.github.com/users/'+this.username)
        .then(response => {
          this.userDetail = response.data || {};
        })
  }
}
</script>

<style scoped>
.detail{
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: aliceblue;
}
#image {
  margin: auto;
  width:40%;
  height: 100%;
}

#content{
  width: 60%;
}
h2{

}

</style>