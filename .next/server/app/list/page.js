(()=>{var e={};e.id=5631,e.ids=[5631],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},38232:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>h,tree:()=>d});var s=r(70260),n=r(28203),i=r(25155),o=r.n(i),a=r(67292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["list",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5831)),"C:\\코딩\\p5\\forum\\app\\list\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9019)),"C:\\코딩\\p5\\forum\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\코딩\\p5\\forum\\app\\list\\page.js"],c={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/list/page",pathname:"/list",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},69474:(e,t,r)=>{Promise.resolve().then(r.bind(r,5831))},3978:(e,t,r)=>{Promise.resolve().then(r.bind(r,18060))},79630:(e,t,r)=>{Promise.resolve().then(r.bind(r,46835))},42678:(e,t,r)=>{Promise.resolve().then(r.bind(r,2055))},63335:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,40802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},93599:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,57174,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},18060:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(45512),n=r(58009),i=r(79334);function o({item:e}){let t=(0,i.useRouter)();return(0,s.jsxs)("div",{className:"list-item",children:[(0,s.jsxs)("div",{className:"list-item-header",children:[(0,s.jsx)("h4",{children:e.title}),(0,s.jsxs)("div",{className:"list-item-meta",children:[(0,s.jsxs)("span",{className:"author",children:["✍️ ",e.author||"익명"]}),(0,s.jsx)("span",{className:"date",children:e.createdAt?new Date(e.createdAt).toLocaleDateString():""})]})]}),(0,s.jsx)("p",{children:e.content}),(0,s.jsxs)("div",{className:"item-stats",children:[(0,s.jsxs)("span",{children:["\uD83D\uDC41️ ",e.views||0]}),(0,s.jsxs)("span",{children:["❤️ ",e.likes||0]})]}),e.image&&(0,s.jsx)("img",{src:`data:image/jpeg;base64,${e.image}`,alt:"게시글 이미지",style:{maxWidth:"200px"}}),(0,s.jsx)("button",{onClick:()=>t.push(`list/detail/${e._id}`),className:"detail-button",children:"자세히 보기"})]})}r(76080);var a=r(97631);function l(){let[e,t]=(0,n.useState)([]),[r,l]=(0,n.useState)(!0);return(0,i.useRouter)(),r?(0,s.jsx)("div",{className:"loading",children:"로딩중..."}):(0,s.jsxs)("div",{children:[(0,s.jsx)(a.default,{}),(0,s.jsx)("div",{className:"list-bg",children:e.map(e=>(0,s.jsx)(o,{item:e},e._id))})]})}},97631:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(45512),n=r(58009),i=r(28531),o=r.n(i),a=r(79334);let l=()=>{let[e,t]=(0,n.useState)(null),[r,i]=(0,n.useState)(!1),l=(0,a.useRouter)();return(0,n.useEffect)(()=>{let e=localStorage.getItem("user");e&&t(JSON.parse(e))},[]),(0,s.jsxs)("nav",{className:"navbar",children:[(0,s.jsxs)("div",{className:"nav-left",children:[(0,s.jsx)(o(),{href:"/",className:"nav-link",children:"홈"}),(0,s.jsx)(o(),{href:"/list",className:"nav-link",children:"게시판"})]}),(0,s.jsx)("div",{className:"nav-right",children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{href:"/write",className:"nav-link write-btn",children:"글쓰기"}),(0,s.jsx)(o(),{href:"/profile",className:"nav-link",children:"프로필"}),(0,s.jsx)("button",{onClick:()=>{localStorage.removeItem("user"),t(null),l.push("/login")},className:"nav-link",children:"로그아웃"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{href:"/login",className:"nav-link",children:"로그인"}),(0,s.jsx)(o(),{href:"/register",className:"nav-link",children:"회원가입"})]})})]})}},2055:(e,t,r)=>{"use strict";r.d(t,{A:()=>o,AuthProvider:()=>a});var s=r(45512),n=r(58009);let i=(0,n.createContext)(),o=()=>{let e=(0,n.useContext)(i);if(!e)throw Error("useAuth must be used within an AuthProvider");return e};function a({children:e}){let[t,r]=(0,n.useState)(null),[o,a]=(0,n.useState)(!0),l=async e=>{try{console.log("Attempting login...");let t=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),cache:"no-store"}),s=await t.json();if(!t.ok)return{success:!1,error:s.message||"로그인에 실패했습니다"};return r(s),localStorage.setItem("user",JSON.stringify(s)),console.log("Login successful"),{success:!0}}catch(e){return console.error("Login error:",e),{success:!1,error:"로그인 처리 중 오류가 발생했습니다"}}},d=async e=>{try{if(!t?._id)return!1;if((await fetch("/api/user/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t._id,profileData:e})})).ok){let s={...t,...e};return r(s),localStorage.setItem("user",JSON.stringify(s)),!0}return!1}catch(e){return console.error("Profile update failed:",e),!1}};return(0,s.jsx)(i.Provider,{value:{user:t,loading:o,login:l,logout:()=>{r(null),localStorage.removeItem("user")},updateProfile:d,isAuthenticated:!!t,isLoading:o},children:e})}},9019:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>d});var s=r(62740),n=r(4668),i=r.n(n),o=r(45482),a=r.n(o);r(82704);var l=r(46835);let d={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${i().variable} ${a().variable}`,children:(0,s.jsx)(l.AuthProvider,{children:e})})})}},5831:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\코딩\\\\p5\\\\forum\\\\app\\\\list\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\코딩\\p5\\forum\\app\\list\\page.js","default")},46835:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>n});var s=r(46760);(0,s.registerClientReference)(function(){throw Error("Attempted to call useAuth() from the server but useAuth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\코딩\\p5\\forum\\hooks\\useAuth.js","useAuth");let n=(0,s.registerClientReference)(function(){throw Error("Attempted to call AuthProvider() from the server but AuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\코딩\\p5\\forum\\hooks\\useAuth.js","AuthProvider")},46055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(88077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},82704:()=>{},76080:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,2715,7720,8531],()=>r(38232));module.exports=s})();