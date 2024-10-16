
// import { createMemoryHistory, createRouter } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import MadiaPage from "../views/MadiaPage.vue";
import MediaPost from '@/components/MediaPost.vue';
import AdminPage from '@/views/AdminPage.vue';
import forgotPassword from '@/views/forgotPassword.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import UserPage from '@/views/UserPage.vue';
import NosServicePage from '@/views/NosServicePage.vue';
import mentionLegales from '@/views/Ml&PcPage.vue';

import {auth} from '../firebase'
import MethodeDeTravail from '@/views/MethodeDeTravail.vue';
import NosRealisation from '@/views/NosRealisation.vue';
import RealisationDetail from '@/views/RealisationDetail.vue';
import UserFormation from '@/views/UserFormation.vue';
import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/media',
    component: MadiaPage
  },
  {
    path: '/media/:id', // Dynamic route for single posts
    name: 'MediaPost',
    component: MediaPost,
  },
  {
    path: '/contact',
    component: ContactPage
  },
  {
    path: '/admindPage',
    name: 'adminPage',
    component: AdminPage
  },
  {
    path: '/nosService',
    name: 'nosService',
    component: NosServicePage
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: forgotPassword
  },
  {
    path: '/registerPage',
    name: 'registerPage',
    component: RegisterPage
  },
  {
    path: '/userPage',
    name: 'userPage',
    props: true,
    // meta: {
    //   authRequired: true,
    // },     
    component: UserPage,
    children: [
      {
        path: "/userCredentials",
        component: ()=> import('@/components/UserCredentials.vue')
       },
      {
        path: "/formation",
        name:'formation',
        component:UserFormation
      },
    ]
  },
  // {
  //   path:"/courses",
  //   name:"courses",
  //   component:CoursesPage
  // },

  {
    path:'/ml&pc',
    name:'ml&pc',
    component: mentionLegales
  },
  {
    path:'/notre-methode-de-travail',
    name:'/notre-methode-de-travail',
    component:MethodeDeTravail
  },
  {
    path:'/realisation',
    name:'realisation',
    component:NosRealisation
  },
  {
    path:'/realisation/:id',
    name:'realisationDetail',
    component:RealisationDetail
  },

  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=> import('../views/NotFound.vue')
  }

];

const router = createRouter({
  // base: process.env.BASE_URL,
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      Toast.fire({
        icon: "error",
        title: "Vous devez être connecté pour accéder à cette zone",
      });
     router.push("/");
    }
  } else {
    next();
  }
});

export default router;