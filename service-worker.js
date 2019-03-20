/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "88a53da9cb063bee68b438c59aad8c94"
  },
  {
    "url": "assets/css/0.styles.6c8b8b62.css",
    "revision": "5ac656b5842f8305e54f7d609ea7c1d9"
  },
  {
    "url": "assets/img/cloud_1.c43701eb.png",
    "revision": "c43701eb6a90a5a74d9c28dd7b46ee38"
  },
  {
    "url": "assets/img/cloud_2.73ab0d72.png",
    "revision": "73ab0d72c92cc0372c9d2cf4e8d55a1c"
  },
  {
    "url": "assets/img/cloud_3.e1af994a.png",
    "revision": "e1af994a8e23ab333c254fe3668e1bb4"
  },
  {
    "url": "assets/img/cloud-computing-models_iaas.a61da8cd.png",
    "revision": "a61da8cd2738e50b33315fb07c7e62a3"
  },
  {
    "url": "assets/img/cloud-computing-models_paas.f262885b.png",
    "revision": "f262885bee5eced0ad03e91713031975"
  },
  {
    "url": "assets/img/cloud-computing-models_saas.5cb46f09.png",
    "revision": "5cb46f090045393a0e36390eb4fb725b"
  },
  {
    "url": "assets/img/debug_1.62b6c15d.png",
    "revision": "62b6c15d303c641d8e36a122e2c05ea0"
  },
  {
    "url": "assets/img/debug_10.5522b673.png",
    "revision": "5522b673984641bfae8e5b1aa06924b5"
  },
  {
    "url": "assets/img/debug_2.a135762f.jpg",
    "revision": "a135762fc2eda254d15c1a7017c767cc"
  },
  {
    "url": "assets/img/debug_3.4df578da.png",
    "revision": "4df578da3efc0ff03048586c69f00ba8"
  },
  {
    "url": "assets/img/debug_4.15099033.png",
    "revision": "15099033adde4e5810cda6536f10c541"
  },
  {
    "url": "assets/img/debug_5.a0a3cd54.png",
    "revision": "a0a3cd5417851449ff51a4f2e5675f07"
  },
  {
    "url": "assets/img/debug_6.e23cff6d.png",
    "revision": "e23cff6d11314d9e55f794957b4d006d"
  },
  {
    "url": "assets/img/debug_7.7833a5aa.png",
    "revision": "7833a5aa2641ea4c323ecf5021b94295"
  },
  {
    "url": "assets/img/debug_8.050212ea.png",
    "revision": "050212ea0ebdd5912b6a3471f438f54f"
  },
  {
    "url": "assets/img/debug_9.e0dba1d7.png",
    "revision": "e0dba1d75a2078a8740d57dc2c06f47b"
  },
  {
    "url": "assets/img/flux-1.90fab893.png",
    "revision": "90fab8939d5aaa4adceab9a462d1dae1"
  },
  {
    "url": "assets/img/flux-2.a60c532f.png",
    "revision": "a60c532faf4a5d3623ba9cc63b4d7913"
  },
  {
    "url": "assets/img/flux-3.eeab519a.png",
    "revision": "eeab519ae5a83261728699f2c684b730"
  },
  {
    "url": "assets/img/MVC-1.b5b87125.jpg",
    "revision": "b5b871254258aca1a4c359c07a4b94c5"
  },
  {
    "url": "assets/img/MVC-2.559c2db8.jpg",
    "revision": "559c2db8a947104055bc0eabcc5fddc4"
  },
  {
    "url": "assets/img/MVP.f12fd882.jpg",
    "revision": "f12fd8820ae23a57c688ddfdb4945dc2"
  },
  {
    "url": "assets/img/MVVM.b94a224f.jpg",
    "revision": "b94a224f58fae5c7bc00f93ab30d1856"
  },
  {
    "url": "assets/img/react-router-redux.ea09e5d5.png",
    "revision": "ea09e5d5fc13553230b9ad97c476f2fe"
  },
  {
    "url": "assets/img/redux-data-flow.06080bd3.png",
    "revision": "06080bd35683ca5ab00ad2bd043ef4d2"
  },
  {
    "url": "assets/img/redux-flow.10d245ca.png",
    "revision": "10d245ca32ada88b1fbdcfd809448758"
  },
  {
    "url": "assets/img/redux-middleware.ebebd1d2.jpg",
    "revision": "ebebd1d2e898e1f9c6a34fc28e2778bc"
  },
  {
    "url": "assets/img/redux-react.ef5958fe.png",
    "revision": "ef5958fe400b9ab04ff317efc93b216c"
  },
  {
    "url": "assets/img/redux-saga.d97a2a8a.png",
    "revision": "d97a2a8afe73206d164331fca3846190"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vdom_1.a2085b6f.png",
    "revision": "a2085b6ff7f45b5c615a51213228577b"
  },
  {
    "url": "assets/img/vdom_10.15f83705.png",
    "revision": "15f8370546e0c5de50c95e3231f5bfa0"
  },
  {
    "url": "assets/img/vdom_4.c2da2aaa.png",
    "revision": "c2da2aaa296ec85b82451e8ea185fadd"
  },
  {
    "url": "assets/img/vdom_5.055181bd.png",
    "revision": "055181bdc28e9b3af82d1e41dc4a5767"
  },
  {
    "url": "assets/img/vdom_6.9b64430d.png",
    "revision": "9b64430dc3cf65562779d21f266cd66f"
  },
  {
    "url": "assets/img/vdom_7.826d8ee6.png",
    "revision": "826d8ee6d74adc6f88ff2758554f1338"
  },
  {
    "url": "assets/img/vdom_8.41264b4e.png",
    "revision": "41264b4e10471c9a1924973d048b7ffe"
  },
  {
    "url": "assets/img/vdom_9.0a70f75f.png",
    "revision": "0a70f75f2bc63763d46952bcc6afa924"
  },
  {
    "url": "assets/img/vloader_1.27e9cb80.png",
    "revision": "27e9cb8051e87bfd9ac2599de80ae1f5"
  },
  {
    "url": "assets/img/vloader_flow.ec43a830.svg",
    "revision": "ec43a8304844a83a28aa7acdaad2724d"
  },
  {
    "url": "assets/img/Vue-MVVM.edd0080f.png",
    "revision": "edd0080fb145315fbc96164c219fee7e"
  },
  {
    "url": "assets/img/vuex-flow.f83af28d.png",
    "revision": "f83af28dbd4b915220104b0858cf9bc4"
  },
  {
    "url": "assets/img/vuex.be68719a.png",
    "revision": "be68719a9e63469fb846d7e1dec92b81"
  },
  {
    "url": "assets/js/10.db22997a.js",
    "revision": "2c3551ae7bbebee7781b245a45a9499c"
  },
  {
    "url": "assets/js/11.33a79cb9.js",
    "revision": "083b698783d5ab0aa1ae46ac66c0faab"
  },
  {
    "url": "assets/js/12.b2585dd3.js",
    "revision": "4cf4049ab554c9baa9c99e802b759ad3"
  },
  {
    "url": "assets/js/13.0f14f677.js",
    "revision": "9dbcae6a47d7eabc5ee2b97c2fd2652b"
  },
  {
    "url": "assets/js/14.c18e8692.js",
    "revision": "f43a1e3ce8caf165f9af5fb29cbffba1"
  },
  {
    "url": "assets/js/15.7ac2b6b7.js",
    "revision": "9154673fb9a903c4ef38cd7f1a8e95a8"
  },
  {
    "url": "assets/js/16.e2ed7028.js",
    "revision": "0ff29875f3c1538b45f05c8ad2fec4d1"
  },
  {
    "url": "assets/js/17.4d352f72.js",
    "revision": "c6e47b6df4f1f676b5623cd59a766f1d"
  },
  {
    "url": "assets/js/18.0b05798c.js",
    "revision": "38f909de3045032116bc51e15801f92f"
  },
  {
    "url": "assets/js/19.12bcb7eb.js",
    "revision": "1407e339f485083ad4982a3454efb5e3"
  },
  {
    "url": "assets/js/2.ea6f4c8a.js",
    "revision": "07286834cc4ea131351f0d1a8c875603"
  },
  {
    "url": "assets/js/20.a5ab4cc3.js",
    "revision": "058fca492215e55c0d2952e132fdaae8"
  },
  {
    "url": "assets/js/21.82a5be90.js",
    "revision": "8ebc8360693c53e5bd1362665a9cf0ae"
  },
  {
    "url": "assets/js/3.46dfeb0e.js",
    "revision": "e445322b1e24dbd5d2d4e6bbda1ccbc1"
  },
  {
    "url": "assets/js/4.2a96f785.js",
    "revision": "bb9b024ae193b6cd82808285fd32d0db"
  },
  {
    "url": "assets/js/5.be2a6a64.js",
    "revision": "f577ff28417af7a7df2d2f9206853058"
  },
  {
    "url": "assets/js/6.11129e5b.js",
    "revision": "33db8476b684d68ca44a2283aad19d5f"
  },
  {
    "url": "assets/js/7.87b0d417.js",
    "revision": "ab269e8fe9b1b0905e8246e7a3b210c7"
  },
  {
    "url": "assets/js/8.2ecf3898.js",
    "revision": "7255fc39db460c4c71da8785e2754f87"
  },
  {
    "url": "assets/js/9.bf7d54e7.js",
    "revision": "d5202d808c9bd2a35f74a45c49dc59fe"
  },
  {
    "url": "assets/js/app.e8565908.js",
    "revision": "af97fe7bac234e58ec5b9b27d5c0287c"
  },
  {
    "url": "framework/index.html",
    "revision": "4703fd520a2ce46d9ac92e9bde57e4a0"
  },
  {
    "url": "framework/mvvm.html",
    "revision": "c50e14c0a79032ebc987432beee51f68"
  },
  {
    "url": "framework/redux.html",
    "revision": "78ca799bc65a73ec32b0c9caa63403c9"
  },
  {
    "url": "framework/vuex.html",
    "revision": "a29ad1deaefb1fab2d1b79d6f532e664"
  },
  {
    "url": "icon_logo.svg",
    "revision": "3de5d6fa0ffab0091df0c9ddd474b042"
  },
  {
    "url": "icons/snowball.png",
    "revision": "fb5cfc5bf794f2756bcf6704149192a6"
  },
  {
    "url": "index.html",
    "revision": "018bafcfe9713b2372f4523ca1bca5c7"
  },
  {
    "url": "media/index.html",
    "revision": "abbdd3d03deecf4f35799e3e7a165829"
  },
  {
    "url": "platform/babel.html",
    "revision": "45f0607317eb7f13bbddc20d5cadae90"
  },
  {
    "url": "platform/htmlParser.html",
    "revision": "0ccc9b8c5a38e7dd7b519e77f3cbf697"
  },
  {
    "url": "platform/index.html",
    "revision": "932ffe9521d4e654112f2c681bf4d053"
  },
  {
    "url": "platform/postcss.html",
    "revision": "0e2e7d1f3c3efa5338871832916b4daf"
  },
  {
    "url": "platform/templateCompiler.html",
    "revision": "c644e39bfc9a87a9491e2a5c0720f27d"
  },
  {
    "url": "platform/vueLoader.html",
    "revision": "06900c31d5b216e7974f9c0a8796faa7"
  },
  {
    "url": "render/index.html",
    "revision": "da9536f58f6b9483d4aa65085561d8d1"
  },
  {
    "url": "server/debugger.html",
    "revision": "e4a7bf695abfc4268e30ac4f563fb68f"
  },
  {
    "url": "server/index.html",
    "revision": "f2dc30e0bde40f3a2829ae8dc9c451f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
