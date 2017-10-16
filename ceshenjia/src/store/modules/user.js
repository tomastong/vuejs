import request from 'superagent'

const state = {
    login_phone: '',
    login_id: '',
    login_token: '',
    temp_phone: '',
    temp_id: '',
    temp_token: ''
}

const getter = {
    // 获取当前用户
    currentUser: state => {
        return {
            phone: state.login_phone,
            id: state.login_id,
            token: state.login_token
        }
    }
}

const mutations = {
    updateData(state, payload){
        switch (payload.name) {
          case 'phone':
            state.temp_phone = payload.value
            break
          case 'token':
            state.temp_token = payload.value
            break
          case 'id':
            state.temp_id = payload.id
            break
          default:
            console.log('Error:Dont directly mutate Vuex store')
        }   
    },
    // 获取本地用户
    getLocalUser (state){
        state.login_id = localStorage.getItem('id');
        state.login_phone = localStorage.getItem('phone');
        state.login_token = localStorage.getItem('token');
    },
    // 更新用户信息
    setUser(state, payload){
        state.login_id = payload.id;
        state.login_phone = payload.phone;
        state.login_token = payload.token;
    } 
}

const actions = {
    
}

export default {
  state,
  getters,
  mutations,
  actions
}
