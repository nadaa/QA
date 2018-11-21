<template>
  <div>
       <router-link class='logout' to="/">Logout</router-link> 
        <b-container>
          <b-row v-for='(q,i) in questions' :value='q.askedby' :key='i'>
            <b-row>
            <b-col md="12"> <b>{{q.askedby}}: </b>{{q.quest}}</b-col>
            </b-row>
            <br> <br>
            <b-row>
            <b-col md="11"><input  name='answer' @change='handle_input($event.target.value,i)'></b-col>
            <b-col md="1"> <button class='answer-btn' @click='handle_answer_pressed(i)'>Answer</button></b-col>
            </b-row>
          </b-row>
        </b-container>
  </div>
</template>

<script>
import Api from '@/services/Api'
import store from '@/store'

export default{
  name: 'qaadmin',
  data(){
    return {
      questions:[],
      answer:'',
    }
  },
  beforeMount() {
    // get all unanswered questions
    Api().get('/qs')
    .then(response => {
      this.questions = response.data.questions
    })
  },
  computed:{
    loggedin(){
      return store.getters.get_loggedinUser  
    }
  },
  methods:{
    // answer a selected question
    handle_answer_pressed(i){
      Api().post('/aq',{
        quest: this.questions[i].quest,
        askedby: this.questions[i].askedby,
        ans: this.questions[i].ans
      })
      .then (response => console.log(response.data))
    },
    handle_input(val,i) {
      this.questions[i].ans = val
    },
    handle_logout() {
      this.$router.push('/')

    }
  }
}
</script>

<style scoped>
input {
  width: 900px;
  height: 50px;
  border: 1px solid grey;
}
.answer-btn{
  background-color: brown;
  color:white;
  border-radius: 20%;
  width: 80px;
  height: 40px;
}
.logout{
  margin-left: 900px;
}
</style>
