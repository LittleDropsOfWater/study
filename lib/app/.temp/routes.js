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
    name: "v-463a942b6967d",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\README.md").then(comp => {
        Vue.component("v-463a942b6967d", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-376e740573d1b",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\config\\README.md").then(comp => {
        Vue.component("v-376e740573d1b", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-88731f5a6bd4b",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-88731f5a6bd4b", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-3120f63bb5992",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\README.md").then(comp => {
        Vue.component("v-3120f63bb5992", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-7e4b6351ecedd",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-7e4b6351ecedd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e1e150d0192a",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-e1e150d0192a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c5913b36ab672",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-c5913b36ab672", comp.default)
        next()
      })
    }
  },
  {
    name: "v-50e798cfda5e1",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-50e798cfda5e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef33e6bb06bee",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-ef33e6bb06bee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dcfa8e7bbc976",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-dcfa8e7bbc976", comp.default)
        next()
      })
    }
  },
  {
    name: "v-89a568aa7d10a",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-89a568aa7d10a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b4202a38a6d1",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-6b4202a38a6d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c285bbc1160fc",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\README.md").then(comp => {
        Vue.component("v-c285bbc1160fc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-f5ec00c73c57a",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-f5ec00c73c57a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46b2e9e2470d2",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-46b2e9e2470d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ad88818f2212",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-1ad88818f2212", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aebcc5c6dc592",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-aebcc5c6dc592", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-621331989d2ca",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-621331989d2ca", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-5bd4318305a14",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-5bd4318305a14", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-56ab54b47c19a",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-56ab54b47c19a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-fb008bfb855fc",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-fb008bfb855fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e709ad596d0bc",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-e709ad596d0bc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a8763c4990a4",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-0a8763c4990a4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86da6ebcea564",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-86da6ebcea564", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad853d6e27782",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-ad853d6e27782", comp.default)
        next()
      })
    }
  },
  {
    name: "v-994e56ce6c03a",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-994e56ce6c03a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af1c0f7ce2fd2",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-af1c0f7ce2fd2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a80dd66950af",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-7a80dd66950af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47cc03017b282",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-47cc03017b282", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5e0202a647c0b",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-5e0202a647c0b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bf45e72ba5359",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-bf45e72ba5359", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7aa53bcd9ab",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-7aa53bcd9ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a290564f125a",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-a290564f125a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8304b4d1dd6dd",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-8304b4d1dd6dd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-ed6a81f67bac7",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-ed6a81f67bac7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f13f8b0cdc0cd",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-f13f8b0cdc0cd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-87dd36fb5de7a",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-87dd36fb5de7a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6486ac5560538",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-6486ac5560538", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-d4296a1277789",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-d4296a1277789", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-03c57522949d3",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-03c57522949d3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-c7f280d8697dd",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-c7f280d8697dd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-e4273bc2d0338",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-e4273bc2d0338", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-38cc602a331da",
    path: "/zh/miscellaneous/AboutJS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\AboutJS.md").then(comp => {
        Vue.component("v-38cc602a331da", comp.default)
        next()
      })
    }
  },
  {
    name: "v-66d72db406e01",
    path: "/zh/miscellaneous/DvaJs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\DvaJs.md").then(comp => {
        Vue.component("v-66d72db406e01", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63c0a579aafef",
    path: "/zh/miscellaneous/ES6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\ES6.md").then(comp => {
        Vue.component("v-63c0a579aafef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-db145a2b7e6c",
    path: "/zh/miscellaneous/Functional%20programming.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\Functional programming.md").then(comp => {
        Vue.component("v-db145a2b7e6c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/Functional programming.html",
    redirect: "/zh/miscellaneous/Functional%20programming.html"
  },
  {
    name: "v-3bb824c9c3448",
    path: "/zh/miscellaneous/Generator.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\Generator.md").then(comp => {
        Vue.component("v-3bb824c9c3448", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f62afdb6cc515",
    path: "/zh/miscellaneous/JS%20operating%20mechanism.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\JS operating mechanism.md").then(comp => {
        Vue.component("v-f62afdb6cc515", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/JS operating mechanism.html",
    redirect: "/zh/miscellaneous/JS%20operating%20mechanism.html"
  },
  {
    name: "v-7eaa30899a4c5",
    path: "/zh/miscellaneous/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\JSX.md").then(comp => {
        Vue.component("v-7eaa30899a4c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a01990987d0d",
    path: "/zh/miscellaneous/antd.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\antd.md").then(comp => {
        Vue.component("v-0a01990987d0d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a83c49bfc19f4",
    path: "/zh/miscellaneous/async.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\async.md").then(comp => {
        Vue.component("v-a83c49bfc19f4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-424e2934f2f1b",
    path: "/zh/miscellaneous/cssModule.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\cssModule.md").then(comp => {
        Vue.component("v-424e2934f2f1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cf5faa9b27129",
    path: "/zh/miscellaneous/debounceAndThrottling.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\debounceAndThrottling.md").then(comp => {
        Vue.component("v-cf5faa9b27129", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7645004970f48",
    path: "/zh/miscellaneous/dom%20diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\dom diff.md").then(comp => {
        Vue.component("v-7645004970f48", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/dom diff.html",
    redirect: "/zh/miscellaneous/dom%20diff.html"
  },
  {
    name: "v-b741a41978a85",
    path: "/zh/miscellaneous/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\git.md").then(comp => {
        Vue.component("v-b741a41978a85", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec3dbb56b468e",
    path: "/zh/miscellaneous/github.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\github.md").then(comp => {
        Vue.component("v-ec3dbb56b468e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9447418005912",
    path: "/zh/miscellaneous/location.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\location.md").then(comp => {
        Vue.component("v-9447418005912", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ddb56ef2ba77b",
    path: "/zh/miscellaneous/md%E8%AF%AD%E6%B3%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\md语法.md").then(comp => {
        Vue.component("v-ddb56ef2ba77b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/md语法.html",
    redirect: "/zh/miscellaneous/md%E8%AF%AD%E6%B3%95.html"
  },
  {
    name: "v-d9ae08d96d8ee",
    path: "/zh/miscellaneous/mobx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\mobx.md").then(comp => {
        Vue.component("v-d9ae08d96d8ee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8c1f36d64cf83",
    path: "/zh/miscellaneous/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\react.md").then(comp => {
        Vue.component("v-8c1f36d64cf83", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3f1c6a9c419bb",
    path: "/zh/miscellaneous/utils.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\utils.md").then(comp => {
        Vue.component("v-3f1c6a9c419bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3fe694e9c0f39",
    path: "/zh/miscellaneous/virtual%20dom.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\virtual dom.md").then(comp => {
        Vue.component("v-3fe694e9c0f39", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/virtual dom.html",
    redirect: "/zh/miscellaneous/virtual%20dom.html"
  },
  {
    name: "v-00102bf483d08",
    path: "/zh/miscellaneous/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\miscellaneous\\vue.md").then(comp => {
        Vue.component("v-00102bf483d08", comp.default)
        next()
      })
    }
  },
  {
    name: "v-30f6d3205484",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-30f6d3205484", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6800b49dd5c41",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-6800b49dd5c41", comp.default)
        next()
      })
    }
  },
  {
    name: "v-20b8f051ea841",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-20b8f051ea841", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aa1eb414919c2",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-aa1eb414919c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-958da65d1c6ce",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-958da65d1c6ce", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-b189f57f6d39e",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-b189f57f6d39e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b0a5738be37d1",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-b0a5738be37d1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-2e58d857cc8dd",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-2e58d857cc8dd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a902a86de4999",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-a902a86de4999", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-c2865c97c778",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-c2865c97c778", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-d31d358cd932e",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-d31d358cd932e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a67c5dca68ead",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-a67c5dca68ead", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5039d8f3a4097",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-5039d8f3a4097", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e8e760889be42",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-e8e760889be42", comp.default)
        next()
      })
    }
  },
  {
    name: "v-175a0f0649ed9",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-175a0f0649ed9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-92570bbebdef1",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-92570bbebdef1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d141878ac2801",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-d141878ac2801", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60dc583d90653",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-60dc583d90653", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d3614c863234",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-d3614c863234", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4d3683154f11f",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-4d3683154f11f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f87bb311ccf9",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-4f87bb311ccf9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-caabd9770a14d",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-caabd9770a14d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-f763aad4d0c46",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-f763aad4d0c46", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bbcf669c6e72c",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-bbcf669c6e72c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-62f25abac40f5",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-62f25abac40f5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-8986d1bae3ce7",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-8986d1bae3ce7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-623a1767111c7",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-623a1767111c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-27c53d5a85d6e",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-27c53d5a85d6e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-da26fbdc56b2e",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-da26fbdc56b2e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e737b3160ca9",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-0e737b3160ca9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-299bcc30adb9d",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-299bcc30adb9d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-e22e117a6d004",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\website\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-e22e117a6d004", comp.default)
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