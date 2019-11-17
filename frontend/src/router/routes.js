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
      { path: '', component: () => import('pages/Index.vue') }
      { path: 'debug', component: () => import('components/microdapp') },
      { path: 'results', component: () => import('pages/Results.vue') },
      { path: 'new_poll', component: () => import('pages/NewPoll.vue') }
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
