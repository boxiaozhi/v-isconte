(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2dbde02"],{1213:function(e,n,t){"use strict";var l={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},s=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],r=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],i=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],c="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},a="fullscreenEnabled"in c&&Object.keys(l)||s[0]in c&&s||r[0]in c&&r||i[0]in c&&i||[],o={requestFullscreen:function(e){return e[a[l.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[a[l.requestFullscreen]]},get exitFullscreen(){return c[a[l.exitFullscreen]].bind(c)},get fullscreenPseudoClass(){return":"+a[l.fullscreen]},addEventListener:function(e,n,t){return c.addEventListener(a[l[e]],n,t)},removeEventListener:function(e,n,t){return c.removeEventListener(a[l[e]],n,t)},get fullscreenEnabled(){return Boolean(c[a[l.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return c[a[l.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return c[("on"+a[l.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return c[("on"+a[l.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return c[("on"+a[l.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return c[("on"+a[l.fullscreenerror]).toLowerCase()]=e}};n["a"]=o},"1c18":function(e,n,t){},"74d3":function(e,n,t){"use strict";t("1c18")},"87fc":function(e,n,t){},dcb5:function(e,n,t){"use strict";t("87fc")},e6e6:function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-container",class:{container:e.darkMode}},[t("float-actions",{attrs:{"show-menu":!1}}),t("div",{staticClass:"content",class:{container:e.darkMode}},[t("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[t("a-col",{attrs:{xs:22,sm:22,md:20,lg:18,xl:16,xxl:14}},[t("a-spin",{attrs:{spinning:e.loading,wrapperClassName:"spin-loading-container",tip:"Hello, ConteMan"}},[t("a-icon",{staticClass:"spin-loading",attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"}),t("div",{staticClass:"col-container"},[e.loading?e._e():[t("div",{staticClass:"title logo"},[t("span",[e._v(e._s(e.title))])]),t("div",{staticClass:"color-row bg-grey slogan"},[e._v(" "+e._s(e.slogan)+" ")]),t("div",{staticClass:"color-row bg-light-grey nav"},e._l(e.nav.items,(function(n){return t("span",{key:n.id,on:{click:function(t){return e.$router.push({path:n.value})}}},[e._v(" "+e._s(n.code)+" ")])})),0),t("div",{staticClass:"color-row bg-grey site"},e._l(e.site.items,(function(n){return t("span",{key:n.id,on:{click:function(t){return e.turnUrl(n.value)}}},[e._v(" "+e._s(n.code)+" ")])})),0),t("div",{staticClass:"color-row bg-light-grey social"},e._l(e.social.items,(function(n){return t("span",{key:n.id,on:{click:function(t){return e.turnUrl(n.value)}}},[e._v(" "+e._s(n.code)+" ")])})),0),t("div",{staticClass:"info"},[t("div",{staticClass:"beian"},[t("svg",{attrs:{width:"200",height:"11.52"},on:{click:function(n){return e.turnUrl("https://beian.miit.gov.cn/")}}},[t("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"200","text-anchor":"end"}},[e._v(" "+e._s(e.$config.beian)+" ")])])]),t("div",{staticClass:"beian"},[t("svg",{attrs:{width:"200",height:"11.52"},on:{click:function(n){return e.turnUrl("http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+e.$config.policeBeianNum)}}},[t("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"200","text-anchor":"end"}},[e._v(" "+e._s(e.$config.policeBeian)+" ")])])]),t("div",{staticClass:"run-time"},[e._v("©"+e._s(e.$config.siteCreateTime)+" - "+e._s(e.$dayjs().format("YYYY")))])])]],2)],1)],1)],1)],1)],1)},s=[],r=t("1da1"),i=(t("96cf"),t("ac0d")),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main-container"},[e.showMenu?t("div",{staticClass:"item"},[t("a-button",{attrs:{ghost:"",title:"打开菜单"},on:{click:function(n){return e.menuAction()}}},[t("a-icon",{attrs:{type:"appstore",theme:e.menuIconTheme}})],1)],1):e._e(),e.enableFullscreen?t("div",{staticClass:"item"},[t("a-button",{attrs:{ghost:"",title:"全屏"},on:{click:function(n){return e.fullScreen()}}},[e.isFullscreen?t("a-icon",{attrs:{type:"fullscreen-exit"}}):t("a-icon",{attrs:{type:"fullscreen"}})],1)],1):e._e(),t("div",{staticClass:"item"},[t("a-button",{attrs:{ghost:"",title:"暗黑模式"},on:{click:function(n){return e.darkAction()}}},[t("a-icon",{attrs:{type:"bulb",theme:e.darkModeIconTheme}})],1)],1)])},a=[],o=t("5530"),u=t("1213"),d=t("2f62"),f=t("9fb0"),m={name:"FloatActions",props:{showMenu:{type:Boolean,default:!0}},mixins:[i["a"]],data:function(){return{enableFullscreen:!0,isFullscreen:!1}},computed:{menuIconTheme:function(){return"outlined"},darkModeIconTheme:function(){return this.darkMode?"filled":"outlined"}},created:function(){this.enableFullscreen=u["a"].fullscreenEnabled,u["a"].addEventListener("fullscreenchange",this.fullscreenChange,!1)},methods:Object(o["a"])(Object(o["a"])({},Object(d["c"])("app",{menuAction:f["e"],darkAction:f["b"]})),{},{fullScreen:function(){var e=document.body;null===u["a"].fullscreenElement?u["a"].requestFullscreen(e):u["a"].exitFullscreen()},fullscreenChange:function(){null!==u["a"].fullscreenElement?this.isFullscreen=!0:this.isFullscreen=!1}})},g=m,b=(t("74d3"),t("2877")),h=Object(b["a"])(g,c,a,!1,null,"734f686f",null),v=h.exports,p=t("d354"),w=t("a417"),F=w["a"].e_isconte+"/api",k={socials:function(){return p["a"].get(F+"/socials")},base:function(){return p["a"].get(F+"/base")}},C=k,E={name:"Landpage",components:{FloatActions:v},mixins:[i["a"]],data:function(){return{title:"",slogan:"",nav:[],site:[],social:[],loading:!0,loadingTime:500,spaceSize:20}},created:function(){this.getBase()},methods:{turnUrl:function(e){return window.location.href=e,!0},getBase:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var t,l,s,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.$dayjs().millisecond(),n.next=3,C.base();case 3:l=n.sent,0===l.data.code&&(s=l.data.data,e.title=s.title,e.slogan=s.slogan,e.nav=s.nav,e.site=s.site,e.social=s.social,r=e.$dayjs().millisecond(),i=r-t,i<e.loadingTime?setTimeout((function(){e.loading=!1}),e.loadingTime-i):e.loading=!1);case 5:case"end":return n.stop()}}),n)})))()}}},_=E,y=(t("dcb5"),Object(b["a"])(_,l,s,!1,null,"2831efe6",null)),x=y.exports;n["default"]=x}}]);