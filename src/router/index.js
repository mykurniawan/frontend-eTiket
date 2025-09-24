import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

import indexTiket from '../components/tiket/IndexTicket.vue'
import TambahTiket from '../components/tiket/TambahTiket.vue'
import EditTicket from '../components/tiket/EditTicket.vue'

import indexCustomers from '../components/customer/IndexCustomer.vue'
import CreateCustomer from '../components/customer/CreateCustomer.vue'
import EditCustomer from '../components/customer/EditCustomer.vue'


import IndexMetodBayar from '../components/metodeBayar/IndexMetodBayar.vue'
import CreateMetodBayar from '../components/metodeBayar/CreateMetodBayar.vue'
import EditMetodBayar from '../components/metodeBayar/EditMetodBayar.vue'

import IndexPemesanan from '../components/pemesanan/IndexPemesanan.vue'
import CreatePesan from '../components/pemesanan/CreatePesan.vue'
import UpdatePesanan from '../components/pemesanan/UpdatePesanan.vue'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import App from './App.vue';
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/tiket',
    name: 'indexTiket',
    component: indexTiket
  },
  {
    path : '/tambah',
    name : 'TambahTiket',
    component : TambahTiket
  },
  {
    path : '/tiket/EditTicket/:id',
    name : 'EditTiket',
    component : EditTicket
  },
  {
    path : '/customer',
    name : 'IndexCustomer',
    component : indexCustomers
  },
  {
    path : '/tambah/Customers',
    name : 'CreateCustomer',
    component : CreateCustomer
  },
  {
    path : '/customer/EditCustomer/:idPelanggan',
    name : 'EditCustomer',
    component : EditCustomer
  },
  {
    path : '/metodebayar',
    name : 'IndexMetodBayar',
    component : IndexMetodBayar
  },
  {
    path : '/tambah/metodebayar',
    name : 'CreateMetodBayar',
    component : CreateMetodBayar
  },
  {
    path : '/metodeBayar/EditMetodBayar/:idMetodeBayar',
    name : 'EditMetodBayar',
    component : EditMetodBayar
  },
  {
    path: '/pemesanan',
    name: 'IndexPemesanan',
    component: IndexPemesanan
  },
  {
    path: '/buat/pemesanan',
    name: 'CreatePesan',
    component: CreatePesan
  },
  {
    path: '/pemesanan/UpdatePesanan/:idPesanan',
    name: 'UpdatePesanan',
    component: UpdatePesanan
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
