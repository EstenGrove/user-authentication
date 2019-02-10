import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import UserHome from './components/UserPages/UserHome.vue';



Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Login',
  component: Login
}, {
  path: '/signup',
  name: 'Signup',
  component: Signup
}, {
  path: '/home',
  name: 'UserHome',
  component: UserHome,
  meta: {
    requiresAuth: true
  }
}]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
