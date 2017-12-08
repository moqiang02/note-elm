import Dashboard from './views/Dashboard.vue'

export default [
    {
        path: '/dashboard',
        component: Dashboard,
        //beforeEnter: requireAuth,
        children: [
            {
                path: '/',
                redirect: '/dashboard/home'
            },
            {
                path:'home',
                component:require('./views/dashboard/Home.vue')
            },
            {
                path:'articles',
                component:require('./views/dashboard/Articles.vue')
            }
        ]

    }
]

function requireAuth(to, from, next) {
    if (window.User) {
        return next()
    } else {
        return next('/login')
    }
}