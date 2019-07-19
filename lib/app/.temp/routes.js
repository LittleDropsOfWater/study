import Vue from 'vue'
Vue.component("Bit", () => import("D:\\APPS\\website\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-843c438de46f",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\README.md").then(comp => {
        Vue.component("v-843c438de46f", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-1d2e8bdb29019",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\config\\README.md").then(comp => {
        Vue.component("v-1d2e8bdb29019", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-4961f326bb4e2",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-4961f326bb4e2", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-d962f152982ed",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\README.md").then(comp => {
        Vue.component("v-d962f152982ed", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-492c1776e7dcb",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-492c1776e7dcb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4b7b4998bfa3",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-b4b7b4998bfa3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fdca60e097c09",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-fdca60e097c09", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dcf128cc7b8af",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-dcf128cc7b8af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-37fc4ecd2fec9",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-37fc4ecd2fec9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-20d25f90400c5",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-20d25f90400c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-394d165d2c38f",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-394d165d2c38f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-82ec8ecbc1ea4",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-82ec8ecbc1ea4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-11350e6f74b45",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\README.md").then(comp => {
        Vue.component("v-11350e6f74b45", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-2e6f8439676d9",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-2e6f8439676d9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af90fe9e7dbab",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-af90fe9e7dbab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-be1cb2506bcfc",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-be1cb2506bcfc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-72dc24c3f62b1",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-72dc24c3f62b1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-fb4255802443b",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-fb4255802443b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-660eec738e255",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-660eec738e255", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-e21973118d87c",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-e21973118d87c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-1629ae56e59f3",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-1629ae56e59f3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e86d4f320d05",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-8e86d4f320d05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9d0e8e758c277",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-9d0e8e758c277", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2830065508789",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-2830065508789", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7ae007df486fb",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-7ae007df486fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4cd818019a863",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-4cd818019a863", comp.default)
        next()
      })
    }
  },
  {
    name: "v-808d0573524ab",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-808d0573524ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3da761f28bdee",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-3da761f28bdee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-acb11e2569544",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-acb11e2569544", comp.default)
        next()
      })
    }
  },
  {
    name: "v-80e82826f00be",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-80e82826f00be", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b086f24d40178",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-b086f24d40178", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1711afeee87cc",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-1711afeee87cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d9990bb672321",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-d9990bb672321", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5fd6734f559fa",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-5fd6734f559fa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-dd8e98cc51034",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-dd8e98cc51034", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81d494113571",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-81d494113571", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-c0e4a7db802a2",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-c0e4a7db802a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e6639cb1a9059",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-e6639cb1a9059", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-99cdc6e4ca485",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-99cdc6e4ca485", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-c70135df8df2b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-c70135df8df2b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-6b56228103bae",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-6b56228103bae", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-9abf042f4e031",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-9abf042f4e031", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-5ff3fe64a7722",
    path: "/zh/miscellaneous/AboutJS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\AboutJS.md").then(comp => {
        Vue.component("v-5ff3fe64a7722", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60af7256c4a26",
    path: "/zh/miscellaneous/DvaJs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\DvaJs.md").then(comp => {
        Vue.component("v-60af7256c4a26", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e5ffb1bff7b77",
    path: "/zh/miscellaneous/ES6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\ES6.md").then(comp => {
        Vue.component("v-e5ffb1bff7b77", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2f9d692a7f4d",
    path: "/zh/miscellaneous/Functional%20programming.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\Functional programming.md").then(comp => {
        Vue.component("v-f2f9d692a7f4d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/Functional programming.html",
    redirect: "/zh/miscellaneous/Functional%20programming.html"
  },
  {
    name: "v-837a2ecbc048d",
    path: "/zh/miscellaneous/Generator.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\Generator.md").then(comp => {
        Vue.component("v-837a2ecbc048d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2da07822b56a",
    path: "/zh/miscellaneous/JS%20operating%20mechanism.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\JS operating mechanism.md").then(comp => {
        Vue.component("v-d2da07822b56a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/JS operating mechanism.html",
    redirect: "/zh/miscellaneous/JS%20operating%20mechanism.html"
  },
  {
    name: "v-307e37c1bdfeb",
    path: "/zh/miscellaneous/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\JSX.md").then(comp => {
        Vue.component("v-307e37c1bdfeb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e37f9cdc4cac",
    path: "/zh/miscellaneous/antd.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\antd.md").then(comp => {
        Vue.component("v-4e37f9cdc4cac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2fb506f02779",
    path: "/zh/miscellaneous/async.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\async.md").then(comp => {
        Vue.component("v-e2fb506f02779", comp.default)
        next()
      })
    }
  },
  {
    name: "v-874a2a27bd60b",
    path: "/zh/miscellaneous/cssModule.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\cssModule.md").then(comp => {
        Vue.component("v-874a2a27bd60b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6a72ac8bd7853",
    path: "/zh/miscellaneous/debounceAndThrottling.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\debounceAndThrottling.md").then(comp => {
        Vue.component("v-6a72ac8bd7853", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b01230efbc2a",
    path: "/zh/miscellaneous/dom%20diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\dom diff.md").then(comp => {
        Vue.component("v-6b01230efbc2a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/dom diff.html",
    redirect: "/zh/miscellaneous/dom%20diff.html"
  },
  {
    name: "v-eb767fd085785",
    path: "/zh/miscellaneous/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\git.md").then(comp => {
        Vue.component("v-eb767fd085785", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3e50972deeb55",
    path: "/zh/miscellaneous/github.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\github.md").then(comp => {
        Vue.component("v-3e50972deeb55", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49687c33ff764",
    path: "/zh/miscellaneous/location.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\location.md").then(comp => {
        Vue.component("v-49687c33ff764", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e72d7b9b3263f",
    path: "/zh/miscellaneous/md%E8%AF%AD%E6%B3%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\md语法.md").then(comp => {
        Vue.component("v-e72d7b9b3263f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/md语法.html",
    redirect: "/zh/miscellaneous/md%E8%AF%AD%E6%B3%95.html"
  },
  {
    name: "v-6d790ee3396e3",
    path: "/zh/miscellaneous/mobx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\mobx.md").then(comp => {
        Vue.component("v-6d790ee3396e3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-392502e41733",
    path: "/zh/miscellaneous/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\react.md").then(comp => {
        Vue.component("v-392502e41733", comp.default)
        next()
      })
    }
  },
  {
    name: "v-59a1c9e091c63",
    path: "/zh/miscellaneous/utils.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\utils.md").then(comp => {
        Vue.component("v-59a1c9e091c63", comp.default)
        next()
      })
    }
  },
  {
    name: "v-93971d1a8f567",
    path: "/zh/miscellaneous/virtual%20dom.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\virtual dom.md").then(comp => {
        Vue.component("v-93971d1a8f567", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/virtual dom.html",
    redirect: "/zh/miscellaneous/virtual%20dom.html"
  },
  {
    name: "v-87b5c89a6ba01",
    path: "/zh/miscellaneous/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\vue.md").then(comp => {
        Vue.component("v-87b5c89a6ba01", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6db7b8f6b9987",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-6db7b8f6b9987", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c479c5ca87db2",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-c479c5ca87db2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6210ce2a76f4c",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-6210ce2a76f4c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-87b696d582eae",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-87b696d582eae", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-d0d520e7ec71a",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-d0d520e7ec71a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-5e4692d6f3db4",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-5e4692d6f3db4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a31b19dafcab6",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-a31b19dafcab6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-839ab87d1e227",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-839ab87d1e227", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2def0d6768c63",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-2def0d6768c63", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-4127db1dcb77",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-4127db1dcb77", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-527c3c7d14a9",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-527c3c7d14a9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-649a4d123f05",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-649a4d123f05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-97597d016dd99",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-97597d016dd99", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31d02604ef905",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-31d02604ef905", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc4ea6b1e4687",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-bc4ea6b1e4687", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ff72a51b68828",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-ff72a51b68828", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e82742a7e67d8",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-e82742a7e67d8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5f24096b8d83c",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-5f24096b8d83c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-623c482ad3657",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-623c482ad3657", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ca683deecbd8b",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-ca683deecbd8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eb2e87001f43",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-eb2e87001f43", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4565c15219374",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-4565c15219374", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-f99aef4598f61",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-f99aef4598f61", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f16a6f7cd2d19",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-f16a6f7cd2d19", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-bc3c888b871f9",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-bc3c888b871f9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-f1c2c2b5ed11f",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-f1c2c2b5ed11f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-fb788e7a6079c",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-fb788e7a6079c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-ca39cc7e6c892",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-ca39cc7e6c892", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-ef969cbc33cb5",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-ef969cbc33cb5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ec3b0d67ec4e",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-9ec3b0d67ec4e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-65a79d0f3bde1",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-65a79d0f3bde1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-5a4c5c2556e78",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-5a4c5c2556e78", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/webpack/index.html",
    redirect: "/zh/webpack/"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]