(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2f34":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(t("a34a")),r=o(t("4df6"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=a(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return u=n.done,n},e:function(n){c=!0,o=n},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw o}}}}function a(n,e){if(n){if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,e):void 0}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function l(n,e,t,i,r,o,u){try{var a=n[o](u),c=a.value}catch(l){return void t(l)}a.done?e(c):Promise.resolve(c).then(i,r)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var o=n.apply(e,t);function u(n){l(o,i,r,u,a,"next",n)}function a(n){l(o,i,r,u,a,"throw",n)}u(void 0)}))}}t("2247");var f=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(t("2707"))}.bind(null,t)).catch(t.oe)},d={components:{uniIcons:f},data:function(){return{rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],menzhenxinxilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=this;return s(i.default.mark((function t(){var o,u,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.role=n.getStorageSync("role"),o=n.getStorageSync("nowTable"),t.next=4,e.$api.session(o);case 4:u=t.sent,e.user=u.data,e.tableName=o,a=r.default.list(),e.menuList=a,e.menuList.forEach((function(n,t){e.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&e.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t)})))()},onShow:function(){var n=this;return s(i.default.mark((function e(){var t,r,o,a,c;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,n.$api.page("config",{page:1,limit:5});case 3:r=e.sent,o=u(r.data.list);try{for(o.s();!(a=o.n()).done;)c=a.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&t.push({img:c.value,title:c.name})}catch(i){o.e(i)}finally{o.f()}return t&&(n.swiperList=t),e.next=9,n.$api.list("news",{page:1,limit:6});case 9:return r=e.sent,n.news=r.data.list,e.next=13,n.$api.recommend("menzhenxinxi",{page:1,limit:4});case 13:r=e.sent,n.menzhenxinxilist=r.data.list;case 15:case"end":return e.stop()}}),e)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,e){this.$utils.jump("../".concat(n,"/detail?id=").concat(e))},onPageTap:function(e){n.navigateTo({url:"../".concat(e,"/list"),fail:function(){n.switchTab({url:"../".concat(e,"/list")})}})},onPageTap2:function(e){n.setStorageSync("useridTag",0),n.navigateTo({url:e,fail:function(){n.switchTab({url:e})}})}}};e.default=d}).call(this,t("543d")["default"])},"361c":function(n,e,t){"use strict";t.r(e);var i=t("7106"),r=t("6517");for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);t("befa");var u,a=t("f0c5"),c=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=c.exports},6517:function(n,e,t){"use strict";t.r(e);var i=t("2f34"),r=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=r.a},7106:function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}));var r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.menuList,(function(e,t){var i=n.__get_orig(e),r=n.__map(e.frontMenu,(function(t,i){var r=n.__get_orig(t),o=n.role==e.roleName?n.__map(t.child,(function(e,t){var i=n.__get_orig(e),r=n.__map(e.buttons,(function(t,i){var r=n.__get_orig(t),o="查看"==t&&"yifahuodingdan"!=e.tableName&&"yituikuandingdan"!=e.tableName&&"yiquxiaodingdan"!=e.tableName&&"weizhifudingdan"!=e.tableName&&"yizhifudingdan"!=e.tableName&&"yiwanchengdingdan"!=e.tableName?e.menu.split("列表"):null;return{$orig:r,g0:o}}));return{$orig:i,l0:r}})):null;return{$orig:r,l1:o}}));return{$orig:i,l2:r}}))),i=n.__map(n.menzhenxinxilist,(function(e,t){var i=n.__get_orig(e),r=e.keshitupian?e.keshitupian.split(","):null;return{$orig:i,g1:r}})),r=n.__map(n.news,(function(e,t){var i=n.__get_orig(e),r=e.addtime.split(" ");return{$orig:i,g2:r}}));n.$mp.data=Object.assign({},{$root:{l3:t,l4:i,l5:r}})},o=[]},befa:function(n,e,t){"use strict";var i=t("e927"),r=t.n(i);r.a},e927:function(n,e,t){},ffa6:function(n,e,t){"use strict";(function(n){t("7f01");i(t("66fd"));var e=i(t("361c"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["ffa6","common/runtime","common/vendor"]]]);