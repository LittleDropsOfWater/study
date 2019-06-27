import Vue from 'vue'
Vue.component("Bit", () => import("D:\\APPS\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-a0cb56e449342",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\README.md").then(comp => {
        Vue.component("v-a0cb56e449342", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-86f421e339c81",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-86f421e339c81", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-26ae0f8188739",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-26ae0f8188739", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-099aef27a73a9",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-099aef27a73a9", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-f2b8701e49ede",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-f2b8701e49ede", comp.default)
        next()
      })
    }
  },
  {
    name: "v-731644d7621f",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-731644d7621f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8c4f45ea41453",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-8c4f45ea41453", comp.default)
        next()
      })
    }
  },
  {
    name: "v-942b20ff682d1",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-942b20ff682d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-69f2feb1eab33",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-69f2feb1eab33", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6881a266ef7fc",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-6881a266ef7fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a778b6552554d",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-a778b6552554d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51342deab0b17",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-51342deab0b17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5e53d5506d0cb",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-5e53d5506d0cb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-51fb7c77f1b52",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-51fb7c77f1b52", comp.default)
        next()
      })
    }
  },
  {
    name: "v-694f750d98b8e",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-694f750d98b8e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e04042972511d",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-e04042972511d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7883900b24406",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-7883900b24406", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-9e8a6f1d57c2c",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-9e8a6f1d57c2c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-9a4880ad970ea",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-9a4880ad970ea", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-2f22ba2238d61",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-2f22ba2238d61", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-7cd873c4b9a54",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-7cd873c4b9a54", comp.default)
        next()
      })
    }
  },
  {
    name: "v-38bd24108a2d1",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-38bd24108a2d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-593a33bdb4443",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-593a33bdb4443", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28ca0053d1527",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-28ca0053d1527", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fc9678de1eb36",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-fc9678de1eb36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef90a1d0e006b",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-ef90a1d0e006b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04e9cc1a586c7",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-04e9cc1a586c7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-de78d469473a4",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-de78d469473a4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-df2159fb24f39",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-df2159fb24f39", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8c0df709a6cb9",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-8c0df709a6cb9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-306c18f99899d",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-306c18f99899d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d1f4daabd8d6",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-8d1f4daabd8d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c3bbbb2e76864",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-c3bbbb2e76864", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1986423c5ce8",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-1986423c5ce8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-d91b071426744",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-d91b071426744", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d93c853167cf3",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-d93c853167cf3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-c5147c7e4dfb",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-c5147c7e4dfb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec76e5fedc615",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-ec76e5fedc615", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-ff6f31a7540a9",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-ff6f31a7540a9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-6332a55ca58c4",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-6332a55ca58c4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-25a3448227144",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-25a3448227144", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-a10041bdbc4ca",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-a10041bdbc4ca", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-55a7e351b87a5",
    path: "/zh/miscellaneous/DvaJs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\DvaJs.md").then(comp => {
        Vue.component("v-55a7e351b87a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a71a1fe51caa",
    path: "/zh/miscellaneous/ES6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\ES6.md").then(comp => {
        Vue.component("v-a71a1fe51caa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-501c63f7252a6",
    path: "/zh/miscellaneous/Functional%20programming.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\Functional programming.md").then(comp => {
        Vue.component("v-501c63f7252a6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/Functional programming.html",
    redirect: "/zh/miscellaneous/Functional%20programming.html"
  },
  {
    name: "v-3e82af198b6ea",
    path: "/zh/miscellaneous/Generator.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\Generator.md").then(comp => {
        Vue.component("v-3e82af198b6ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-34e56a8040fee",
    path: "/zh/miscellaneous/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\JSX.md").then(comp => {
        Vue.component("v-34e56a8040fee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-547e8eb7cc654",
    path: "/zh/miscellaneous/antd.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\antd.md").then(comp => {
        Vue.component("v-547e8eb7cc654", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1f5907f6620ae",
    path: "/zh/miscellaneous/async.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\async.md").then(comp => {
        Vue.component("v-1f5907f6620ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-153f216858771",
    path: "/zh/miscellaneous/cssModule.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\cssModule.md").then(comp => {
        Vue.component("v-153f216858771", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d07ce8b2afb56",
    path: "/zh/miscellaneous/dom%20diff.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\dom diff.md").then(comp => {
        Vue.component("v-d07ce8b2afb56", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/dom diff.html",
    redirect: "/zh/miscellaneous/dom%20diff.html"
  },
  {
    name: "v-ec008860fbe39",
    path: "/zh/miscellaneous/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\git.md").then(comp => {
        Vue.component("v-ec008860fbe39", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1b01b3f1eef",
    path: "/zh/miscellaneous/github.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\github.md").then(comp => {
        Vue.component("v-1b01b3f1eef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6447f066abbdc",
    path: "/zh/miscellaneous/mobx.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\mobx.md").then(comp => {
        Vue.component("v-6447f066abbdc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e47dbf6acb07",
    path: "/zh/miscellaneous/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\react.md").then(comp => {
        Vue.component("v-4e47dbf6acb07", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5189ab66924d",
    path: "/zh/miscellaneous/virtual%20dom.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\miscellaneous\\virtual dom.md").then(comp => {
        Vue.component("v-5189ab66924d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miscellaneous/virtual dom.html",
    redirect: "/zh/miscellaneous/virtual%20dom.html"
  },
  {
    name: "v-c3f1879edb1f8",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-c3f1879edb1f8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f6f7a9e3975b",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-6f6f7a9e3975b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a42093c4db08",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-0a42093c4db08", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a6b6a9d517f72",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-a6b6a9d517f72", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-47ea012cd962b",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-47ea012cd962b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-450ca5c11aa66",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-450ca5c11aa66", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-5988354fc351",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-5988354fc351", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-e5f2365550854",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-e5f2365550854", comp.default)
        next()
      })
    }
  },
  {
    name: "v-00fbc0e1b3fb",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-00fbc0e1b3fb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-f876a24e0ee9f",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-f876a24e0ee9f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-e5871c641e345",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-e5871c641e345", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-6cd3d4feff40f",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-6cd3d4feff40f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-30a7886996e4f",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-30a7886996e4f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac6fda567c41a",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-ac6fda567c41a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5f5a666855ed9",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-5f5a666855ed9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1b84f317fe144",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-1b84f317fe144", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a4f6adb14d4c1",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-a4f6adb14d4c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a5a1ae0a833d",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-1a5a1ae0a833d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b33d5c8e3d3d",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-9b33d5c8e3d3d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-da5755a45f922",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-da5755a45f922", comp.default)
        next()
      })
    }
  },
  {
    name: "v-214a3b3e70fe9",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-214a3b3e70fe9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2f9c4edfc60e",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-d2f9c4edfc60e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-90c9b9b2735ae",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-90c9b9b2735ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d81c65275c",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-6d81c65275c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-debe71f64096",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-debe71f64096", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-fbf20b65653b3",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-fbf20b65653b3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-4c0101a8fd0cf",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-4c0101a8fd0cf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-93fb82b856036",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-93fb82b856036", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-15b760ebe73e6",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-15b760ebe73e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eaf3cf1761ea4",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-eaf3cf1761ea4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b014fc4a0950c",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-b014fc4a0950c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-e55b65ca0d2f3",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\APPS\\study\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-e55b65ca0d2f3", comp.default)
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