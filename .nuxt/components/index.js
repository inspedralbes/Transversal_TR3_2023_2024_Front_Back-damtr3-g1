export const GraphHoras = () => import('../..\\components\\GraphHoras.vue' /* webpackChunkName: "components/graph-horas" */).then(c => wrapFunctional(c.default || c))
export const GraphKda = () => import('../..\\components\\GraphKda.vue' /* webpackChunkName: "components/graph-kda" */).then(c => wrapFunctional(c.default || c))
export const GraphKills = () => import('../..\\components\\GraphKills.vue' /* webpackChunkName: "components/graph-kills" */).then(c => wrapFunctional(c.default || c))
export const GraphMediaMontoGastado = () => import('../..\\components\\GraphMediaMontoGastado.vue' /* webpackChunkName: "components/graph-media-monto-gastado" */).then(c => wrapFunctional(c.default || c))
export const GraphMontoGastado = () => import('../..\\components\\GraphMontoGastado.vue' /* webpackChunkName: "components/graph-monto-gastado" */).then(c => wrapFunctional(c.default || c))
export const GraphPartidas = () => import('../..\\components\\GraphPartidas.vue' /* webpackChunkName: "components/graph-partidas" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
