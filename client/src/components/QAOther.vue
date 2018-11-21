<template>
  <div>
      <div class='logout'>
       <router-link  to="/">Logout</router-link> 
      </div>
      <div>
        <input name='q_to_send' v-model='q_to_send' required>
        <button @click='handle_question_send'>Ask</button>
      </div>
      <br><br>
      <div class='question'>
        <b>{{asked_by}}: </b> {{asked_q}}
      </div>
      <div class='answer'>
        <b>Admin: </b> {{ans}}
      </div>
  </div>
</template>

<script>
import Api from '@/services/Api'
import store from '@/store'

export default{
  name: 'qaother',
  data(){
    return {
      q_to_send:'',
      asked_by:'',
      asked_q:'',
      ans:''
    }
  },
  beforeMount() {
    // get the last ansered question
    Api().get('/lastq')
    .then(response => {
      this.asked_by =response.data.question[0].askedby
      this.asked_q = response.data.question[0].quest
      this.ans = response.data.question[0].ans
    })
  },
  computed:{
    loggedin(){
      return store.getters.get_loggedinUser  
    }
  },
  methods:{
    //send a question
    handle_question_send(){
      Api().post('/newq',{
        quest: this.q_to_send,
        askedby: this.loggedin,
        ans: ''
      })
      .then (response => alert (response.data.msg))
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quest-container{
  background-color: bisque;
  font-size: 25px;
}
.question{
  background-color:lightgray;
  width: 50%;
  margin: 0 auto;
    }
.answer{
  background-color:olivedrab;
  width: 50%;
  margin: 0 auto;
  color:white;
}
.logout{
  margin-left: 1000px;
}
</style>
