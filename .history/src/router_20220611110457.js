import { createRouter, createWebHistory } from 'vue-router'
import WorkAll from './views/WorkAll.vue'
import Oneroute from './views/Oneroute.vue'




const routes = [
    {path: "/" , name:"Work", component: WorkAll},
    {path: "/works/oneroute" , name:"Oneroute", component: Oneroute},
]

// const scrollBehavior = (to, from, savedPosition) => {
//   if (savedPosition) {
//     return savedPosition;
//   } else {
//     return { top: 0 }
//   }
// };

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise ((resolve)=>{
      setTimeout(()=> resolve({top:0}),600)
    })
  }
})

export default router