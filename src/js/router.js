require.config({
  baseUrl: '/',
  paths: {
    'jquery': 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
    'vue': 'https://cdn.bootcss.com/vue/2.4.2/vue.min',
    'vueRouter': 'https://cdn.bootcss.com/vue-router/2.7.0/vue-router',
    'validator': 'https://cdn.bootcss.com/vue-validator/3.0.0-alpha.2/vue-validator',
    'vuex': 'https://cdn.bootcss.com/vuex/2.4.1/vuex',
    'iscroll': 'https://cdn.bootcss.com/iScroll/5.2.0/iscroll',
    'waterWave': 'cdn/waterWave',
    'vuelidation': 'cdn/vuelidation',
    'vuex': 'https://cdn.bootcss.com/vuex/2.4.1/vuex',
    'user': 'js/user'
  }
})

require(['jquery', 'vue', 'vuex', 'vueRouter', 'user', 'vuelidation'], function ($, Vue, Vuex, VueRouter, User, Vuelidation) {
  Vue.use(VueRouter)
  Vue.use(Vuelidation)
  Vue.use(Vuex)
  console.log('---', User)



  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count++
      }
    }
  })

  function dynamicPropsFn (route) {
    const now = new Date()
    return {
      name: (now.getFullYear() + parseInt(route.params.years)) + '!',
      age: function (num) {
        return num * num
      },
      test: function (params) {
        app.dd = app.dd + 1
        console.log(app.dd)
      }
    }
  }

  const Foo = { template: '<div>foo {{newsletterPopup}} -----</div>',props: ['newsletterPopup'] }
  const Bar = { template: '<div>bar</div>' }
  const Sidebar = { template: '<div>----Sidebar</div>' }
  const dynamic = { template: '<div @click="test(23)">---{{name}}-Sidebar---{{age(2)}}</div>',props: ['name', 'age', 'test'] }
  const routes = [
    { path: '/foo', component: Foo, props: { newsletterPopup: false } },
    { path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    },
    { path: '/dynamic/:years', component: dynamic, props: dynamicPropsFn },
    { path: '/', component: Bar }
  ]

  const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })

  var app = new Vue({
    router,
    store,
    data: {
      code: new Array(6),
      dd: 1
    },
    template: `<div>{{dd}}<router-view></router-view><router-view name="sidebar"></router-view></div>`,
    mounted: function () {}
  }).$mount('#app')
})
