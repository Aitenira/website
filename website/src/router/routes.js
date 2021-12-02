
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path:'/earrings',
    component:() => import ('components/Earrings.vue'),
  },
  {
    path: '/bracelet',
    component:() => import ('components/Bracelet.vue'),
  },
  {
    path: '/necklace',
    component:() => import ('components/Necklace.vue'),
  },
  {
    path: '/rings',
    component:() => import ('components/Rings.vue'),
  },
  {
    path: '/silver',
    component:() => import ('components/Silver.vue'),
  },
  {
    path: '/clothes',
    component:() => import ('components/Clothes.vue'),
  },
  {
    path:'/termsofcooperation',
    component:() => import('components/Termsofcoop.vue')
  },
  {
    path:'/delivery',
    component:() => import('components/Delivery.vue')
  },
  {
    path:'/reviews',
    component:() => import('components/Reviews.vue')
  },
  {
    path:'/payment',
    component:() => import('components/Payment.vue')
  },
  {
    path:'/connectionwithus',
    component:() => import('components/Connection.vue')
  },
  {
    path:'/howtoorder',
    component:() => import('components/OrderForm.vue')
  },
  {
    path:'/aboutus',
    component:() => import('components/AboutUs.vue')
  },
  {
    path:'/questionsandaswers',
    component:() => import('components/Questions.vue')
  },





  // {
  //   path: '/auth',
  //   component: () => import('../pages/Auth.vue'),
  //   children:[
  //     {path:'', component: () => import('../components/Login.vue')},
  //     {path:'registration', component: () => import('../components/Register.vue')},
  //   ]
  //
  // },


  // Always leave this as last one,
  // // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
