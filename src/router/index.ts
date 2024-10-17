import { createRouter, createWebHistory } from 'vue-router'
import ExperienceView from 'src/views/ExperienceView.vue'
import GradeView from 'src/views/GradeView.vue'
import ContactView from 'src/views/ContactView.vue'
import AboutView from 'src/views/AboutView.vue'

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