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
    name: "v-6eb801d0d220a",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\README.md").then(comp => {
        Vue.component("v-6eb801d0d220a", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-f95bb6dce864",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\config\\README.md").then(comp => {
        Vue.component("v-f95bb6dce864", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-d3245b6effd18",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d3245b6effd18", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-b10117a5f585",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\README.md").then(comp => {
        Vue.component("v-b10117a5f585", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-3d4dae3628b27",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-3d4dae3628b27", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d66dd885b35f8",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-d66dd885b35f8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2864b599d9436",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-2864b599d9436", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4fded4494eb4",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-f4fded4494eb4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f78093d006f1f",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-f78093d006f1f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-746ea4ebc481",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-746ea4ebc481", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4856e88e8b02a",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-4856e88e8b02a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-53cfbef92daa4",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-53cfbef92daa4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ca5295740c451",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\README.md").then(comp => {
        Vue.component("v-ca5295740c451", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-2aab9bdc09d0a",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-2aab9bdc09d0a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5124a1de8dd47",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-5124a1de8dd47", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b15d052c45cde",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-b15d052c45cde", comp.default)
        next()
      })
    }
  },
  {
    name: "v-94071b6450d05",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-94071b6450d05", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-7fc93abe25fd5",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-7fc93abe25fd5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-8b3936bbb7ee3",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-8b3936bbb7ee3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-f874fbacadcf9",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-f874fbacadcf9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-0808d2bfa482e",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-0808d2bfa482e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2b6001c062605",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-2b6001c062605", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b99d520a2954e",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-b99d520a2954e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2ab4e4b7a88d2",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-2ab4e4b7a88d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-699ca2089ef3a",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-699ca2089ef3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-03500e8dd9c25",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-03500e8dd9c25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01a1f12aa9f17",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-01a1f12aa9f17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e52e5da8af8f",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-0e52e5da8af8f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e5c3519354e12",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-e5c3519354e12", comp.default)
        next()
      })
    }
  },
  {
    name: "v-19384d838f2a9",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-19384d838f2a9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-71432777df892",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-71432777df892", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d4f2a8cb0268d",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-d4f2a8cb0268d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8c6bcdac4fd7a",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-8c6bcdac4fd7a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-783568810dc3e",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-783568810dc3e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-0a293039d704a",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-0a293039d704a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b11a9dc563591",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-b11a9dc563591", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-a985b9fa7e66c",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-a985b9fa7e66c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-220baa4d0cdad",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-220baa4d0cdad", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-5cc2c4b7fddda",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-5cc2c4b7fddda", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-4268d9f743a26",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-4268d9f743a26", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b9891b390ca6e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-b9891b390ca6e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-5b772b32fd967",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-5b772b32fd967", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-ddeaee83a534f",
    path: "/zh/miscellaneous/DvaJs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\DvaJs.md").then(comp => {
        Vue.component("v-ddeaee83a534f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-019da70885568",
    path: "/zh/miscellaneous/ES6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\ES6.md").then(comp => {
        Vue.component("v-019da70885568", comp.default)
        next()
      })
    }
  },
  {
    name: "v-37e353d78c745",
    path: "/zh/miscellaneous/Functional%20programming.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\Functional programming.md").then(comp => {
        Vue.component("v-37e353d78c745", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/Functional programming.html",
    redirect: "/zh/miscellaneous/Functional%20programming.html"
  },
  {
    name: "v-3b0da61a35e45",
    path: "/zh/miscellaneous/Generator.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\Generator.md").then(comp => {
        Vue.component("v-3b0da61a35e45", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7f561517fa676",
    path: "/zh/miscellaneous/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\JSX.md").then(comp => {
        Vue.component("v-7f561517fa676", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8dc569632e30f",
    path: "/zh/miscellaneous/antd.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\antd.md").then(comp => {
        Vue.component("v-8dc569632e30f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d786bc76b9c96",
    path: "/zh/miscellaneous/async.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\async.md").then(comp => {
        Vue.component("v-d786bc76b9c96", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86c79271af8c9",
    path: "/zh/miscellaneous/cssModule.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\cssModule.md").then(comp => {
        Vue.component("v-86c79271af8c9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-986ca416069ec",
    path: "/zh/miscellaneous/dom%20diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\dom diff.md").then(comp => {
        Vue.component("v-986ca416069ec", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/dom diff.html",
    redirect: "/zh/miscellaneous/dom%20diff.html"
  },
  {
    name: "v-a48d3b5f082a6",
    path: "/zh/miscellaneous/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\git.md").then(comp => {
        Vue.component("v-a48d3b5f082a6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7032c94bb3175",
    path: "/zh/miscellaneous/github.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\github.md").then(comp => {
        Vue.component("v-7032c94bb3175", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7503146b7e18",
    path: "/zh/miscellaneous/mobx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\mobx.md").then(comp => {
        Vue.component("v-7503146b7e18", comp.default)
        next()
      })
    }
  },
  {
    name: "v-64337b3f92a28",
    path: "/zh/miscellaneous/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\react.md").then(comp => {
        Vue.component("v-64337b3f92a28", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5286db20021b",
    path: "/zh/miscellaneous/virtual%20dom.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\virtual dom.md").then(comp => {
        Vue.component("v-a5286db20021b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/virtual dom.html",
    redirect: "/zh/miscellaneous/virtual%20dom.html"
  },
  {
    name: "v-ecafbd5741993",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-ecafbd5741993", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e103c5d5bf6cc",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-e103c5d5bf6cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4837815ba478e",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-4837815ba478e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-07b923d273d8f",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-07b923d273d8f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-f0ee43addf8f7",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-f0ee43addf8f7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-1c5663e2bcfb6",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-1c5663e2bcfb6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-d432c4a34190a",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-d432c4a34190a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-eb8a54b3ee421",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-eb8a54b3ee421", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b5f7fcca7eb68",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-b5f7fcca7eb68", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-2849c83dc3692",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-2849c83dc3692", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-37e9028ffb8d9",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-37e9028ffb8d9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-d3f8be90d7f94",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-d3f8be90d7f94", comp.default)
        next()
      })
    }
  },
  {
    name: "v-653a5d830f8aa",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-653a5d830f8aa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13e9b302bb608",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-13e9b302bb608", comp.default)
        next()
      })
    }
  },
  {
    name: "v-956c8dcdba7ca",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-956c8dcdba7ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0c328110f49fb",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-0c328110f49fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2c5322b4fb59b",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-2c5322b4fb59b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a410618cb3f2",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-2a410618cb3f2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6496a3c09d2b6",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-6496a3c09d2b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-289a0020270e1",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-289a0020270e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e8169fbd5f9c6",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-e8169fbd5f9c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7dbf04708f6be",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-7dbf04708f6be", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-d17a738165c1b",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-d17a738165c1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c85546d6b66c1",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-c85546d6b66c1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-2ddb4c651d3a7",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-2ddb4c651d3a7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-53c2015d3b539",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-53c2015d3b539", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-5262005230188",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-5262005230188", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-543b76524ea5",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-543b76524ea5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-313997e4e6112",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-313997e4e6112", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a0f52686cc21e",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-a0f52686cc21e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b4af633fd022",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-9b4af633fd022", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-61cef5d8c02f3",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-61cef5d8c02f3", comp.default)
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