(function(){"use strict";var e={2672:function(e,t,n){var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],i=n(1001),c={},s=(0,i.Z)(c,r,u,!1,null,null,null),a=s.exports,f=n(2631),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("ul",e._l(e.codeList,(function(n,o){return t("li",[e._v(e._s(n))])})),0),t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"focus",rawName:"v-focus"}],ref:"codeInput",staticClass:"code-input",attrs:{type:"text"},domProps:{value:e.code},on:{focus:e.focusCode,blur:function(e){return e.target.focus()},change:e.addCode,input:function(t){t.target.composing||(e.code=t.target.value)}}})])},l=[],p={data(){return{code:"",codeList:[]}},methods:{addCode(){this.codeList.push(this.code),this.code=""},focusCode(){this.$refs.codeInput.setAttribute("readonly","readonly"),setTimeout((()=>{this.$refs.codeInput.removeAttribute("readonly")}),200)}}},v=p,h=(0,i.Z)(v,d,l,!1,null,"7e4ed33e",null),m=h.exports;o.ZP.use(f.ZP);const g=[{path:"/",name:"home",component:m}],b=new f.ZP({routes:g});var w=b,y=n(3822);o.ZP.use(y.ZP);var P=new y.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});o.ZP.directive("focus",{inserted:function(e,t){e.focus()}}),o.ZP.config.productionTip=!1,new o.ZP({router:w,store:P,render:e=>e(a)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return e[o](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,u){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],u=e[f][2];for(var c=!0,s=0;s<o.length;s++)(!1&u||i>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,u<i&&(i=u));if(c){e.splice(f--,1);var a=r();void 0!==a&&(t=a)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[o,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,u,i=o[0],c=o[1],s=o[2],a=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var f=s(n)}for(t&&t(o);a<i.length;a++)u=i[a],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(f)},o=self["webpackChunktong_scanner"]=self["webpackChunktong_scanner"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2672)}));o=n.O(o)})();
//# sourceMappingURL=app.86ee8fcf.js.map