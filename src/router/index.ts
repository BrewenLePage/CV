import { createRouter, createWebHistory } from 'vue-router'
import ExperienceView from '../views/ExperienceView.vue'
import GradeView from '../views/GradeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'about',
            component: AboutView
        }, 
        {
            path: '/experience',
            name: 'experience',
            component: ExperienceView
        },
        {
            path: '/grade',
            name: 'grade',
            component: GradeView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView
          }
    ]
})
export default router