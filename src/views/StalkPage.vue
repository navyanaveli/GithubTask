<template>
  <div>
    <img alt="github logo" class="git" src="https://miro.medium.com/max/1400/1*WaaXnUvhvrswhBJSw4YTuQ.png">
    <div>
    <input class="search" v-model="username" type="text" placeholder="Enter github username" v-on:keyup="addProfileSuggestions" >
    </div>
    <ul>
      <li class ="list" v-for="profileSuggestion in profileSuggestions" :key="profileSuggestion.index" @click="viewUserDetails(profileSuggestion.login)" >
        <img alt="profile image" :src="profileSuggestion.avatar_url"/>
        {{profileSuggestion.login}}

      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "StalkPage",
  data: () => {
    return {
      username: "",
      profileSuggestions: []
    }
  },
  methods:{
    addProfileSuggestions : function (){
      axios.get('https://api.github.com/search/users?q='+this.username)
      .then(response => {
         this.profileSuggestions = response.data.items || [];
         this.$router.push({query: { 'user': this.username }})
      })
    },
    viewUserDetails : function (login){
      this.$router.push({name:'UserDetails',params:{user:login}});
    }
  },
  created() {
    this.username=this.$route.query.user || "";
    this.addProfileSuggestions();
  }

}
</script>

<style scoped>
.list{
  padding: 10px;
  background-color: palegoldenrod;
  border: 2px solid darkgray;
  border-collapse: separate;
}
.list:hover {
  background-color: cornflowerblue;
}
li{
  list-style-type: none;
}
.git{
  height: 300px;
}
.search{
  height: 30px;
  width: 400px;
  font-size: 20px;
  text-align: center;
  border-radius: 20px;
}
img {
 height: 50px;
}

</style>
