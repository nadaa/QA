import Api from '@/services/Api'

export default {
    saveExpense(data) {
        Api().post('/addexpense', data)  // data is an object {month,category}
        .then(response => alert (response.data.msg))
        // console.log('post expense to db', data)
    }
}
