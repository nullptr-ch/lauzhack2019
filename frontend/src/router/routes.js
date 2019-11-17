
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: 'opinion/:pollUid/',
        component: () => import('pages/Opinion.vue'),
        props: true
      },
      { path: '', component: () => import('pages/Index.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
