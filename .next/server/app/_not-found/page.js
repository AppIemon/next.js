(()=>{var e={};e.id=9492,e.ids=[9492],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},29274:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var o=t(70260),n=t(28203),s=t(25155),i=t.n(s),a=t(67292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);t.d(r,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,9019)),"C:\\코딩\\p5\\forum\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"]}],u=[],c={require:t,loadChunk:()=>Promise.resolve()},p=new o.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},79630:(e,r,t)=>{Promise.resolve().then(t.bind(t,46835))},42678:(e,r,t)=>{Promise.resolve().then(t.bind(t,2055))},63335:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,13219,23)),Promise.resolve().then(t.t.bind(t,34863,23)),Promise.resolve().then(t.t.bind(t,25155,23)),Promise.resolve().then(t.t.bind(t,40802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,48530,23)),Promise.resolve().then(t.t.bind(t,88921,23))},93599:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,66959,23)),Promise.resolve().then(t.t.bind(t,33875,23)),Promise.resolve().then(t.t.bind(t,88903,23)),Promise.resolve().then(t.t.bind(t,57174,23)),Promise.resolve().then(t.t.bind(t,84178,23)),Promise.resolve().then(t.t.bind(t,87190,23)),Promise.resolve().then(t.t.bind(t,61365,23))},2055:(e,r,t)=>{"use strict";t.d(r,{A:()=>i,AuthProvider:()=>a});var o=t(45512),n=t(58009);let s=(0,n.createContext)(),i=()=>{let e=(0,n.useContext)(s);if(!e)throw Error("useAuth must be used within an AuthProvider");return e};function a({children:e}){let[r,t]=(0,n.useState)(null),[i,a]=(0,n.useState)(!0),l=async e=>{try{console.log("Attempting login...");let r=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),cache:"no-store"}),o=await r.json();if(!r.ok)return{success:!1,error:o.message||"로그인에 실패했습니다"};return t(o),localStorage.setItem("user",JSON.stringify(o)),console.log("Login successful"),{success:!0}}catch(e){return console.error("Login error:",e),{success:!1,error:"로그인 처리 중 오류가 발생했습니다"}}},d=async e=>{try{if(!r?._id)return!1;if((await fetch("/api/user/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:r._id,profileData:e})})).ok){let o={...r,...e};return t(o),localStorage.setItem("user",JSON.stringify(o)),!0}return!1}catch(e){return console.error("Profile update failed:",e),!1}};return(0,o.jsx)(s.Provider,{value:{user:r,loading:i,login:l,logout:()=>{t(null),localStorage.removeItem("user")},updateProfile:d,isAuthenticated:!!r,isLoading:i},children:e})}},9019:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u,metadata:()=>d});var o=t(62740),n=t(4668),s=t.n(n),i=t(45482),a=t.n(i);t(82704);var l=t(46835);let d={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return(0,o.jsx)("html",{lang:"en",children:(0,o.jsx)("body",{className:`${s().variable} ${a().variable}`,children:(0,o.jsx)(l.AuthProvider,{children:e})})})}},46835:(e,r,t)=>{"use strict";t.d(r,{AuthProvider:()=>n});var o=t(46760);(0,o.registerClientReference)(function(){throw Error("Attempted to call useAuth() from the server but useAuth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\코딩\\p5\\forum\\hooks\\useAuth.js","useAuth");let n=(0,o.registerClientReference)(function(){throw Error("Attempted to call AuthProvider() from the server but AuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\코딩\\p5\\forum\\hooks\\useAuth.js","AuthProvider")},82704:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[638,2715],()=>t(29274));module.exports=o})();