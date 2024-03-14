import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cef62300 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _0556a023 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _2dee7c5b = () => interopDefault(import('..\\pages\\odooConfig.vue' /* webpackChunkName: "pages/odooConfig" */))
const _bef40fa8 = () => interopDefault(import('..\\pages\\procesos.vue' /* webpackChunkName: "pages/procesos" */))
const _0c8ab084 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _cef62300,
    name: "dashboard"
  }, {
    path: "/home",
    component: _0556a023,
    name: "home"
  }, {
    path: "/odooConfig",
    component: _2dee7c5b,
    name: "odooConfig"
  }, {
    path: "/procesos",
    component: _bef40fa8,
    name: "procesos"
  }, {
    path: "/",
    component: _0c8ab084,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
