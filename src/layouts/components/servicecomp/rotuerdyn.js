


export default [
    // =============================================================================
    // Theme Routes
    // =============================================================================
          {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
            beforeEnter(to,from,next){
                if (Store.getters.isAutState) {
                  next()
                } else {
                  next('login')
                }
            }
          },
          {
            path: '/page2',
            name: 'page-2',
            component: () => import('./views/Page2.vue'),
            beforeEnter(to,from,next){
                if (Store.getters.isAutState) {
                  next()
                } else {
                  next('login')
                }
            }
          },
          {
            path: 'satis/hizlisatis',
            name: 'satis/hizlisatis',
            component: () => import('./views/Page2.vue'),
            beforeEnter(to,from,next){
                if (Store.getters.isAutState) {
                  next()
                } else {
                  next('login')
                }
            }
          },
        ]