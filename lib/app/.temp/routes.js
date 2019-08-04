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
    name: "v-38a8fed15914e",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\README.md").then(comp => {
        Vue.component("v-38a8fed15914e", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-1524a121860b7",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\config\\README.md").then(comp => {
        Vue.component("v-1524a121860b7", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-c869b245d4d0c",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-c869b245d4d0c", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-91af03370a9e",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\README.md").then(comp => {
        Vue.component("v-91af03370a9e", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-e5b8093e9e9dc",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-e5b8093e9e9dc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d35bbd0169597",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-d35bbd0169597", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6cd85b04abd25",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-6cd85b04abd25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9d251f36d22c7",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-9d251f36d22c7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0c74a9c0aa417",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-0c74a9c0aa417", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8c81f83dbfde3",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-8c81f83dbfde3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-88e6e2312a71a",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-88e6e2312a71a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8996891d8b312",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-8996891d8b312", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a163173d0ccf3",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\README.md").then(comp => {
        Vue.component("v-a163173d0ccf3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-2709d06467709",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-2709d06467709", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9750ae5d9dc84",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-9750ae5d9dc84", comp.default)
        next()
      })
    }
  },
  {
    name: "v-666a31e404b3f",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-666a31e404b3f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46b1471aeff04",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-46b1471aeff04", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-68d106f56b1c",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-68d106f56b1c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-64f3c07ceb9c3",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-64f3c07ceb9c3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-630508bf22bf6",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-630508bf22bf6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-008967effcd2e",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-008967effcd2e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1aad9efaf249e",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-1aad9efaf249e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aa5218d630b18",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-aa5218d630b18", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b93479910761",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-5b93479910761", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c804974ecedbf",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-c804974ecedbf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-103c5c492fbd7",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-103c5c492fbd7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ba8408d4dda7",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-ba8408d4dda7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-73fe340752555",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-73fe340752555", comp.default)
        next()
      })
    }
  },
  {
    name: "v-58a07ec5564c4",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-58a07ec5564c4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d3480cd44d99c",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-d3480cd44d99c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d9ddb54131c86",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-d9ddb54131c86", comp.default)
        next()
      })
    }
  },
  {
    name: "v-35a52ee66e008",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-35a52ee66e008", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1b19e78598dbc",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-1b19e78598dbc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a992bb6f020d",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-a992bb6f020d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-58c24168d421a",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-58c24168d421a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e85746849b153",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-e85746849b153", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-5eaa4de3af243",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-5eaa4de3af243", comp.default)
        next()
      })
    }
  },
  {
    name: "v-38f67381ed206",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-38f67381ed206", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-7d0520d22f0fe",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-7d0520d22f0fe", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-1f817049b4a03",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-1f817049b4a03", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-0bea0ab4b4d1e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-0bea0ab4b4d1e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-2c5701823365a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-2c5701823365a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-02eacdc07da12",
    path: "/zh/miscellaneous/AboutJS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\AboutJS.md").then(comp => {
        Vue.component("v-02eacdc07da12", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31886554e39ec",
    path: "/zh/miscellaneous/DvaJs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\DvaJs.md").then(comp => {
        Vue.component("v-31886554e39ec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-08f9d6480f7ee",
    path: "/zh/miscellaneous/ES6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\ES6.md").then(comp => {
        Vue.component("v-08f9d6480f7ee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d43570c579ac",
    path: "/zh/miscellaneous/Functional%20programming.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\Functional programming.md").then(comp => {
        Vue.component("v-5d43570c579ac", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/Functional programming.html",
    redirect: "/zh/miscellaneous/Functional%20programming.html"
  },
  {
    name: "v-029072a3fdd36",
    path: "/zh/miscellaneous/Generator.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\Generator.md").then(comp => {
        Vue.component("v-029072a3fdd36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-70fcfc498a688",
    path: "/zh/miscellaneous/JS%20operating%20mechanism.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\JS operating mechanism.md").then(comp => {
        Vue.component("v-70fcfc498a688", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/JS operating mechanism.html",
    redirect: "/zh/miscellaneous/JS%20operating%20mechanism.html"
  },
  {
    name: "v-935ac5a64d8c5",
    path: "/zh/miscellaneous/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\JSX.md").then(comp => {
        Vue.component("v-935ac5a64d8c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8133aab94c7da",
    path: "/zh/miscellaneous/antd.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\antd.md").then(comp => {
        Vue.component("v-8133aab94c7da", comp.default)
        next()
      })
    }
  },
  {
    name: "v-def148178669",
    path: "/zh/miscellaneous/async.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\async.md").then(comp => {
        Vue.component("v-def148178669", comp.default)
        next()
      })
    }
  },
  {
    name: "v-306ff9dfbd28a",
    path: "/zh/miscellaneous/cssModule.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\cssModule.md").then(comp => {
        Vue.component("v-306ff9dfbd28a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f067aacab4485",
    path: "/zh/miscellaneous/debounceAndThrottling.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\debounceAndThrottling.md").then(comp => {
        Vue.component("v-f067aacab4485", comp.default)
        next()
      })
    }
  },
  {
    name: "v-971ab218f428",
    path: "/zh/miscellaneous/dom%20diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\dom diff.md").then(comp => {
        Vue.component("v-971ab218f428", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/dom diff.html",
    redirect: "/zh/miscellaneous/dom%20diff.html"
  },
  {
    name: "v-c647c5475021c",
    path: "/zh/miscellaneous/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\git.md").then(comp => {
        Vue.component("v-c647c5475021c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0204d37c995e7",
    path: "/zh/miscellaneous/github.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\github.md").then(comp => {
        Vue.component("v-0204d37c995e7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c77b3ab5890a7",
    path: "/zh/miscellaneous/location.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\location.md").then(comp => {
        Vue.component("v-c77b3ab5890a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8315eb04fd921",
    path: "/zh/miscellaneous/md%E8%AF%AD%E6%B3%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\md语法.md").then(comp => {
        Vue.component("v-8315eb04fd921", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/md语法.html",
    redirect: "/zh/miscellaneous/md%E8%AF%AD%E6%B3%95.html"
  },
  {
    name: "v-521990f23d51",
    path: "/zh/miscellaneous/mobx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\mobx.md").then(comp => {
        Vue.component("v-521990f23d51", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fe6b38588484d",
    path: "/zh/miscellaneous/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\react.md").then(comp => {
        Vue.component("v-fe6b38588484d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ff10bb48c6ac9",
    path: "/zh/miscellaneous/utils.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\utils.md").then(comp => {
        Vue.component("v-ff10bb48c6ac9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d3af1e483d1e",
    path: "/zh/miscellaneous/virtual%20dom.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\virtual dom.md").then(comp => {
        Vue.component("v-0d3af1e483d1e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/virtual dom.html",
    redirect: "/zh/miscellaneous/virtual%20dom.html"
  },
  {
    name: "v-5c3ea71ec6865",
    path: "/zh/miscellaneous/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\vue.md").then(comp => {
        Vue.component("v-5c3ea71ec6865", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e6c39ec64b58c",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-e6c39ec64b58c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-717add87a6fca",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-717add87a6fca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b1a8bbd43fbb",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-6b1a8bbd43fbb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04e0380bd2f66",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-04e0380bd2f66", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-7ad3e23b8900d",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-7ad3e23b8900d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-469726a4887b2",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-469726a4887b2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-f5da9ccdd4a81",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-f5da9ccdd4a81", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c147f214b2f8b",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-c147f214b2f8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e00a7711b1e8",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-8e00a7711b1e8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-eb891b4c9f6d",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-eb891b4c9f6d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-a676a335dd2a6",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-a676a335dd2a6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-5504e6c5a2ac2",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-5504e6c5a2ac2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b863424f416f3",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-b863424f416f3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0c6c7991b3a12",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-0c6c7991b3a12", comp.default)
        next()
      })
    }
  },
  {
    name: "v-75551848df9b4",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-75551848df9b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a85be38512516",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-a85be38512516", comp.default)
        next()
      })
    }
  },
  {
    name: "v-85bf84e5bac4e",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-85bf84e5bac4e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c1bf34477d8b9",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-c1bf34477d8b9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e8e25ca1f8322",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-e8e25ca1f8322", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c102696c0908",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-7c102696c0908", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd7c1b0aeca8e",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-fd7c1b0aeca8e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-db4db132ebf8",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-db4db132ebf8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-806d1f3cf148d",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-806d1f3cf148d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-71f2a4688f947",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-71f2a4688f947", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-ec3330102f598",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-ec3330102f598", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-c609659e5915c",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-c609659e5915c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-3da4133f8347",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-3da4133f8347", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-aa8f16a14ac0f",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-aa8f16a14ac0f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-9010fe12e8879",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-9010fe12e8879", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2fad5e1e5b56",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-d2fad5e1e5b56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9840a260a927e",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-9840a260a927e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-0bcf494ea7a23",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-0bcf494ea7a23", comp.default)
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