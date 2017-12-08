
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import routes from './routes.js';
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
});

// new Vue(Vue.util.extend({ router }, App)).$mount('#app');

let path = window.location.pathname.substr(1 ,9);

if(path == 'dashboard'){
    const app = new Vue({
        el: '#app',
        router,
        render: creatElment => creatElment(App)
    });
}else{
    const app = new Vue({
        el: '#app'
    });
}

