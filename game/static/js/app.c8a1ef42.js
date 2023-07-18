(function(){"use strict";var e={7177:function(e,s,o){var t=o(9242),a=o(3396);function r(e,s,o,t,r,n){const l=(0,a.up)("NavBar"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),((0,a.wg)(),(0,a.j4)(c,{key:e.$route.fullPath}))],64)}o(8052);var n=o(7139);const l={class:"navbar navbar-expand-lg bg-body-tertiary"},c={class:"container"},i=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarText"},p={class:"navbar-nav me-auto mb-2 mb-lg-0"},d={class:"nav-item"},m={class:"nav-item"},f={key:0,class:"navbar-nav"},_={class:"nav-item"},w={class:"nav-item"},v={key:1,class:"navbar-nav"},g={class:"nav-item"},b={class:"nav-item"};function y(e,s,o,t,r,y){const h=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",l,[(0,a._)("div",c,[(0,a.Wm)(h,{class:"navbar-brand",to:{name:"Home"}},{default:(0,a.w5)((()=>[(0,a.Uk)("WEI's SPACE")])),_:1}),i,(0,a._)("div",u,[(0,a._)("ul",p,[(0,a._)("li",d,[(0,a.Wm)(h,{class:"nav-link active","aria-current":"page",to:{name:"Home"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1})]),(0,a._)("li",m,[(0,a.Wm)(h,{class:"nav-link",to:{name:"UserListView"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Friend List")])),_:1})])]),e.$store.state.user.is_login?((0,a.wg)(),(0,a.iD)("ul",v,[(0,a._)("li",g,[(0,a.Wm)(h,{class:"nav-link",to:{name:"UserProfileView",params:{userId:e.$store.state.user.id}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$store.state.user.username),1)])),_:1},8,["to"])]),(0,a._)("li",b,[(0,a._)("a",{class:"nav-link",style:{cursor:"pointer"},onClick:s[0]||(s[0]=(...e)=>t.logout&&t.logout(...e))},"Logout")])])):((0,a.wg)(),(0,a.iD)("ul",f,[(0,a._)("li",_,[(0,a.Wm)(h,{class:"nav-link",to:{name:"LoginView"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Login")])),_:1})]),(0,a._)("li",w,[(0,a.Wm)(h,{class:"nav-link",to:{name:"RegisterView"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Regiser")])),_:1})])]))])])])}var h=o(65),k={name:"NavBar",setup(){const e=(0,h.oR)(),s=()=>{e.commit("logout")};return{logout:s}}},U=o(89);const C=(0,U.Z)(k,[["render",y]]);var j=C,P={name:"App",components:{NavBar:j}};const x=(0,U.Z)(P,[["render",r]]);var V=x,B=o(2483);function O(e,s,o,t,r,n){const l=(0,a.up)("ContentBase");return(0,a.wg)(),(0,a.j4)(l,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Home ")])),_:1})}const D={class:"home"},T={class:"container"},H={class:"card"},I={class:"card-body"};function z(e,s,o,t,r,n){return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",T,[(0,a._)("div",H,[(0,a._)("div",I,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])])])}var L={name:"ContentBase"};const S=(0,U.Z)(L,[["render",z],["__scopeId","data-v-526196be"]]);var W=S,Z={name:"HomeView",components:{ContentBase:W}};const A=(0,U.Z)(Z,[["render",O]]);var R=A;const E=e=>((0,a.dD)("data-v-1742777b"),e=e(),(0,a.Cn)(),e),q={class:"row justify-content-md-center"},F={class:"col-3"},M={class:"mb-3"},N=E((()=>(0,a._)("label",{for:"userename",class:"form-label"},"Username",-1))),$={class:"mb-3"},G=E((()=>(0,a._)("label",{for:"password",class:"form-label"},"Password",-1))),Y={class:"error-message"},K=E((()=>(0,a._)("button",{type:"login",class:"btn btn-primary"},"login",-1)));function J(e,s,o,r,l,c){const i=(0,a.up)("ContentBase");return(0,a.wg)(),(0,a.j4)(i,null,{default:(0,a.w5)((()=>[(0,a._)("div",q,[(0,a._)("div",F,[(0,a._)("form",{onSubmit:s[2]||(s[2]=(0,t.iM)(((...e)=>r.login&&r.login(...e)),["prevent"]))},[(0,a._)("div",M,[N,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>r.username=e),type:"text",class:"form-control",id:"username"},null,512),[[t.nr,r.username]])]),(0,a._)("div",$,[G,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>r.password=e),type:"password",class:"form-control",id:"password"},null,512),[[t.nr,r.password]])]),(0,a._)("div",Y,(0,n.zw)(r.error_message),1),K],32)])])])),_:1})}o(7658);var Q=o(4870),X={name:"LoginView",components:{ContentBase:W},setup(){let e=(0,Q.iH)(""),s=(0,Q.iH)(""),o=(0,Q.iH)("");const t=(0,h.oR)(),a=()=>{o.value="",t.dispatch("login",{username:e.value,password:s.value,success(){gs.push({name:"UserListView"})},error(){o.value="username or password error"}})};return{username:e,password:s,error_message:o,login:a}}};const ee=(0,U.Z)(X,[["render",J],["__scopeId","data-v-1742777b"]]);var se=ee;function oe(e,s,o,t,r,n){const l=(0,a.up)("ContentBase");return(0,a.wg)(),(0,a.j4)(l,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" NotFound 404 ")])),_:1})}var te={name:"NotFoundView",components:{ContentBase:W}};const ae=(0,U.Z)(te,[["render",oe]]);var re=ae;const ne=e=>((0,a.dD)("data-v-ae0eb732"),e=e(),(0,a.Cn)(),e),le={class:"row justify-content-md-center"},ce={class:"col-3"},ie={class:"mb-3"},ue=ne((()=>(0,a._)("label",{for:"userename",class:"form-label"},"Username",-1))),pe={class:"mb-3"},de=ne((()=>(0,a._)("label",{for:"password",class:"form-label"},"Password",-1))),me={class:"mb-3"},fe=ne((()=>(0,a._)("label",{for:"password_confirm",class:"form-label"},"Password Confirm",-1))),_e={class:"error-message"},we=ne((()=>(0,a._)("button",{type:"submit",class:"btn btn-primary"},"register",-1)));function ve(e,s,o,r,l,c){const i=(0,a.up)("ContentBase");return(0,a.wg)(),(0,a.j4)(i,null,{default:(0,a.w5)((()=>[(0,a._)("div",le,[(0,a._)("div",ce,[(0,a._)("form",{onSubmit:s[3]||(s[3]=(0,t.iM)(((...e)=>r.register&&r.register(...e)),["prevent"]))},[(0,a._)("div",ie,[ue,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>r.username=e),type:"text",class:"form-control",id:"username"},null,512),[[t.nr,r.username]])]),(0,a._)("div",pe,[de,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>r.password=e),type:"password",class:"form-control",id:"password"},null,512),[[t.nr,r.password]])]),(0,a._)("div",me,[fe,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>r.password_confirm=e),type:"password",class:"form-control",id:"password_confirm"},null,512),[[t.nr,r.password_confirm]])]),(0,a._)("div",_e,(0,n.zw)(r.error_message),1),we],32)])])])),_:1})}var ge=o(7387),be=o.n(ge),ye={name:"RegisterView",components:{ContentBase:W},setup(){let e=(0,Q.iH)(""),s=(0,Q.iH)(""),o=(0,Q.iH)(""),t=(0,Q.iH)("");const a=(0,h.oR)(),r=()=>{t.value="",be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/user/",type:"POST",data:{username:e.value,password:s.value,password_confirm:o.value},success(o){"success"===o.result?a.dispatch("login",{username:e.value,password:s.value,success(){gs.push({name:"UserListView"})},error(){t.value="system error"}}):t.value=o.result}})};return{username:e,password:s,password_confirm:o,error_message:t,register:r}}};const he=(0,U.Z)(ye,[["render",ve],["__scopeId","data-v-ae0eb732"]]);var ke=he;const Ue=["onClick"],Ce={class:"card-body"},je={class:"row"},Pe={class:"col-1"},xe=["src"],Ve={class:"col-11"},Be={class:"username"},Oe={class:"follower-count"};function De(e,s,o,t,r,l){const c=(0,a.up)("ContentBase");return(0,a.wg)(),(0,a.j4)(c,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.users,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"card",key:e.id,onClick:s=>t.open_user_profile(e.id)},[(0,a._)("div",Ce,[(0,a._)("div",je,[(0,a._)("div",Pe,[(0,a._)("img",{class:"img-fluid img-field",src:e.photo,alt:""},null,8,xe)]),(0,a._)("div",Ve,[(0,a._)("div",Be,(0,n.zw)(e.username),1),(0,a._)("div",Oe,(0,n.zw)(e.followerCount),1)])])])],8,Ue)))),128))])),_:1})}var Te={name:"UserView",components:{ContentBase:W},setup(){const e=(0,h.oR)();let s=(0,Q.iH)([]);be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/userlist/",type:"get",success:e=>{s.value=e}});const o=s=>{e.state.user.is_login?gs.push({name:"UserProfileView",params:{userId:s}}):gs.push({name:"LoginView"})};return{users:s,open_user_profile:o}}};const He=(0,U.Z)(Te,[["render",De],["__scopeId","data-v-332ef7b3"]]);var Ie=He;const ze={class:"row"},Le={class:"col-3"},Se={class:"col-9"};function We(e,s,o,t,r,n){const l=(0,a.up)("UserProfileInfo"),c=(0,a.up)("UserProfileWrite"),i=(0,a.up)("UserProfilePosts"),u=(0,a.up)("ContentBase");return(0,a.wg)(),(0,a.j4)(u,null,{default:(0,a.w5)((()=>[(0,a._)("div",ze,[(0,a._)("div",Le,[(0,a.Wm)(l,{onFollow:t.follow,onUnfollow:t.unfollow,user:t.user},null,8,["onFollow","onUnfollow","user"]),t.is_me?((0,a.wg)(),(0,a.j4)(c,{key:0,onPost_a_post:t.post_a_post},null,8,["onPost_a_post"])):(0,a.kq)("",!0)]),(0,a._)("div",Se,[(0,a.Wm)(i,{user:t.user,posts:t.posts,onDelete_a_post:t.delete_a_post},null,8,["user","posts","onDelete_a_post"])])])])),_:1})}const Ze={class:"card"},Ae={class:"card-body"},Re={class:"row"},Ee={class:"col-3 img-field"},qe=["src"],Fe={class:"col-9"},Me={class:"username"},Ne={class:"fans"};function $e(e,s,o,t,r,l){return(0,a.wg)(),(0,a.iD)("div",Ze,[(0,a._)("div",Ae,[(0,a._)("div",Re,[(0,a._)("div",Ee,[(0,a._)("img",{class:"img-fluid",src:o.user.photo,alt:""},null,8,qe)]),(0,a._)("div",Fe,[(0,a._)("div",Me,(0,n.zw)(o.user.username),1),(0,a._)("div",Ne,"fellow: "+(0,n.zw)(o.user.followerCount),1),o.user.is_followed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:s[0]||(s[0]=(...e)=>t.follow&&t.follow(...e)),type:"button",id:"follow",class:"btn btn-success btn-small"}," +follow ")),o.user.is_followed?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:s[1]||(s[1]=(...e)=>t.unfollow&&t.unfollow(...e)),type:"button",id:"follow",class:"btn btn-success btn-small"}," unfollow ")):(0,a.kq)("",!0)])])])])}var Ge={name:"UserProfileInfo",props:{user:{type:Object,required:!0}},setup(e,s){const o=(0,h.oR)(),t=()=>{be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/follow/",type:"POST",data:{target_id:e.user.id},headers:{Authorization:"Bearer "+o.state.user.access},success(e){"success"===e.result&&s.emit("follow")}})},a=()=>{be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/follow/",type:"POST",data:{target_id:e.user.id},headers:{Authorization:"Bearer "+o.state.user.access},success(e){"success"===e.result&&s.emit("unfollow")}})};return{follow:t,unfollow:a}}};const Ye=(0,U.Z)(Ge,[["render",$e]]);var Ke=Ye;const Je={class:"card"},Qe={class:"card-body"},Xe={class:"card single-post"},es={class:"card-body"},ss=["onClick"];function os(e,s,o,t,r,l){return(0,a.wg)(),(0,a.iD)("div",Je,[(0,a._)("div",Qe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.posts.posts,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("div",Xe,[(0,a._)("div",es,[(0,a.Uk)((0,n.zw)(e.content)+" ",1),t.is_me?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:s=>t.delete_a_post(e.id),type:"button",class:"btn btn-danger btn-sm"}," delete ",8,ss)):(0,a.kq)("",!0)])])])))),128))])])}var ts={name:"UserProfilePosts",props:{posts:{type:Object,required:!0},user:{type:Object,required:!0}},setup(e,s){const o=(0,h.oR)();let t=(0,a.Fl)((()=>o.state.user.id===e.user.id));const r=e=>{be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/post/",type:"DELETE",data:{post_id:e},headers:{Authorization:"Bearer "+o.state.user.access}}),s.emit("delete_a_post",e)};return{is_me:t,delete_a_post:r}}};const as=(0,U.Z)(ts,[["render",os]]);var rs=as;const ns={class:"card edit-field"},ls={class:"card-body"},cs=(0,a._)("label",{for:"edit-post",class:"form-label"},"Edit Post",-1);function is(e,s,o,r,n,l){return(0,a.wg)(),(0,a.iD)("div",ns,[(0,a._)("div",ls,[cs,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":s[0]||(s[0]=e=>r.content=e),class:"form-control",id:"exampleFormControlTextarea1",rows:"3"},null,512),[[t.nr,r.content]]),(0,a._)("button",{onClick:s[1]||(s[1]=(...e)=>r.post_a_post&&r.post_a_post(...e)),type:"button",class:"btn btn-primary button-sm"}," send ")])])}var us={name:"UserProfileWrite",setup(e,s){let o=(0,Q.iH)("");const t=(0,h.oR)(),a=()=>{be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/post/",type:"POST",data:{content:o.value},headers:{Authorization:"Bearer "+t.state.user.access},success(e){"success"==e&&(s.emit("post_a_post",o.value),o.value="")}}),o.value&&(s.emit("post_a_post",o.value),o.value="")};return{content:o,post_a_post:a}}};const ps=(0,U.Z)(us,[["render",is]]);var ds=ps,ms={name:"UserProfileView",components:{ContentBase:W,UserProfileInfo:Ke,UserProfilePosts:rs,UserProfileWrite:ds},setup(){const e=(0,h.oR)(),s=(0,B.yj)(),o=parseInt(s.params.userId),t=(0,Q.qj)({}),r=(0,Q.qj)({});be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",type:"GET",data:{user_id:o},headers:{Authorization:"Bearer "+e.state.user.access},success(e){t.id=e.id,t.username=e.username,t.photo=e.photo,t.followerCount=e.followerCount,t.is_followed=e.is_followed}}),be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/post/",type:"GET",data:{user_id:o},headers:{Authorization:"Bearer "+e.state.user.access},success(e){r.count=e.length,r.posts=e}});const n=()=>{t.is_followed||(t.is_followed=!0,t.followerCount++)},l=()=>{t.is_followed&&(t.is_followed=!1,t.followerCount--)},c=e=>{r.count++,r.posts.unshift({id:r.count,userId:1,content:e})},i=e=>{r.posts=r.posts.filter((s=>s.id!==e)),r.count=r.posts.lenght},u=(0,a.Fl)((()=>o===e.state.user.id));return{user:t,follow:n,unfollow:l,posts:r,post_a_post:c,userId:o,is_me:u,delete_a_post:i}}};const fs=(0,U.Z)(ms,[["render",We]]);var _s=fs;const ws=[{path:"/myspace/",name:"Home",component:R},{path:"/myspace/userList/",name:"UserListView",component:Ie},{path:"/myspace/userProfile/:userId/",name:"UserProfileView",component:_s},{path:"/myspace/login/",name:"LoginView",component:se},{path:"/myspace/register/",name:"RegisterView",component:ke},{path:"/myspace/404/",name:"404",component:re},{path:"/myspace/:catchALL(.*)",redirect:"/myspace/404/"}],vs=(0,B.p7)({history:(0,B.r5)(),routes:ws});var gs=vs,bs=o(1598);const ys={state:{id:"",username:"",photo:"",followerCount:"",access:"",refresh:"",is_login:!1},getters:{},mutations:{updateUser(e,s){e.id=s.id,e.username=s.username,e.photo=s.photo,e.followerCount=s.followerCount,e.access=s.access,e.refresh=s.refresh,e.is_login=s.is_login},updateAccess(e,s){e.access=s},logout(e){e.id="",e.username="",e.photo="",e.followerCount=0,e.access="",e.refresh="",e.is_login=!1}},actions:{login(e,s){be().ajax({url:"https://app165.acapp.acwing.com.cn/api/token/",type:"POST",data:{username:s.username,password:s.password},success(o){const{access:t,refresh:a}=o,r=(0,bs.Z)(t);setInterval((()=>{be().ajax({url:"https://app165.acapp.acwing.com.cn/api/token/refresh/",type:"POST",data:{refresh:a},success(s){e.commit("updateAccess",s.access)}})}),27e4),be().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",type:"GET",data:{user_id:r.user_id},headers:{Authorization:"Bearer "+t},success(o){e.commit("updateUser",{...o,access:t,refresh:a,is_login:!0}),s.success()}})},error(){s.error()}})}},modules:{}};var hs=ys,ks=(0,h.MT)({state:{},getters:{},mutations:{},actions:{},modules:{user:hs}});(0,t.ri)(V).use(ks).use(gs).mount("#app")}},s={};function o(t){var a=s[t];if(void 0!==a)return a.exports;var r=s[t]={exports:{}};return e[t].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(s,t,a,r){if(!t){var n=1/0;for(u=0;u<e.length;u++){t=e[u][0],a=e[u][1],r=e[u][2];for(var l=!0,c=0;c<t.length;c++)(!1&r||n>=r)&&Object.keys(o.O).every((function(e){return o.O[e](t[c])}))?t.splice(c--,1):(l=!1,r<n&&(n=r));if(l){e.splice(u--,1);var i=a();void 0!==i&&(s=i)}}return s}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,a,r]}}(),function(){o.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(s,{a:s}),s}}(),function(){o.d=function(e,s){for(var t in s)o.o(s,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(s){return 0===e[s]};var s=function(s,t){var a,r,n=t[0],l=t[1],c=t[2],i=0;if(n.some((function(s){return 0!==e[s]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(c)var u=c(o)}for(s&&s(t);i<n.length;i++)r=n[i],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},t=self["webpackChunkmy_space_vue3"]=self["webpackChunkmy_space_vue3"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(7177)}));t=o.O(t)})();
//# sourceMappingURL=app.c8a1ef42.js.map