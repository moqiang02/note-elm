import App from './App.vue'
import Dashboard from './views/Dashboard.vue'

export default [
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: requireAuth,
        children: [
            {
                path: '/',
                redirect: '/dashboard/home'
            },
            {
                path: 'login',
                component: require('./views/dashboard/Login.vue')
            },
            {
                path: 'home',
                component: require('./views/dashboard/Home.vue')
            },
            {
                path: 'articles',
                component: App,
                children: [
                    {
                        path: '/',
                        name: 'articles',
                        component: require('./views/dashboard/article/Articles.vue')
                    },
                    {
                        path: 'edit/:id',
                        component: require('./views/dashboard/article/Edit.vue')
                    }
                ]
            }
        ]

    }
]

function requireAuth(to, from, next) {
    console.log('requireAuth', to, from)
    if (!window.User && to.fullPath != '/dashboard/login') {
        return next('/dashboard/login')
    } else {
        return next()
    }
}