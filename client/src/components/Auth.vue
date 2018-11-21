<template>
  <div >
    <br><br>
<div class = "container">
<b-container  fluid class="bv-example-row">
  <b-row align-h="center">
  <b-col md="6"  >
  <b-card class='card-login'>
      <b-row align-h="center">
        <b-col >
          <button @click="handleSignup">Signup</button>
        </b-col>
        <b-col>
          <button @click="handleSignin">Signin</button>
        </b-col>
        <br><br><br><br>
      </b-row >
      <b-row align-h="center" class='user-pass'>
        <b-col md="3"><b>Username</b></b-col>
        <b-col md="6"><input v-model='username' name='username'  required></b-col>
      </b-row>
      <br>
      <b-row align-h="center" class='user-pass'>
      <b-col md="3"><b>Password</b></b-col>
      <b-col md="6"><input type='password' v-model='password' name='password' required></b-col>
      </b-row>
  </b-card>
  </b-col>
  </b-row>
</b-container>
</div>
  </div>
</template>


<script>
import Api from '@/services/Api'
import store from '@/store'

export default {
  name: 'auth',
  data(){
    return{
     username:'',
     password:'',
    }
  },

  methods:{
    handleSignup(){
     Api().post('/signup', {
       username: this.username,
       password: this.password
     })
     .then(response => alert(response.data.msg))
    },

    handleSignin(){
      Api().post('/signin', {
       username: this.username,
       password: this.password
      })
      .then(response => {
        if (response.data.msg === 'Loggedin successfully'){
          if(this.username === 'admin'){
            this.$router.push('/qaa')
          }
          else{
            this.$router.push('/qao')
          }
           store.commit('updateLoggedUser', this.username)
        }
        else{
          alert(response.data.msg)
        }
      })
    }
  }
}
</script>

<style scoped>

.card-login{
  background-color: darkolivegreen;
}

.user-pass{
  color: white;
}
a {
  color: #42b983;
}
body{
  background-color: #AAAAAA

}
</style>
