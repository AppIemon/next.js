(()=>{var e={};e.id=7758,e.ids=[7758],e.modules={5486:e=>{"use strict";e.exports=require("bcrypt")},12518:e=>{"use strict";e.exports=require("mongodb")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},46927:(e,s,r)=>{"use strict";r.r(s),r.d(s,{patchFetch:()=>m,routeModule:()=>d,serverHooks:()=>g,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>l});var t={};r.r(t),r.d(t,{POST:()=>p});var o=r(42706),n=r(28203),a=r(45994),i=r(52445);r(5486);var u=r(39187);async function p(e){try{let{username:s,password:r}=await e.json();if(console.log("Login attempt:",{username:s,passwordLength:r?.length}),!s||!r)return u.NextResponse.json({message:"사용자 이름과 비밀번호를 모두 입력해주세요"},{status:400});let t=(await i.X).db("forum"),o=await t.collection("users").findOne({$or:[{username:s},{nickname:s}]});if(!o)return u.NextResponse.json({message:"사용자를 찾을 수 없습니다"},{status:401});if(!o.password)return u.NextResponse.json({message:"비밀번호가 설정되지 않았습니다"},{status:401});console.log("Login verification:",{providedPassword:r,storedHash:o.password?.slice(0,10)+"...",passwordType:typeof r});let n=r===o.password;if(console.log("Login test mode:",{inputPassword:r,storedPassword:o.password,isValid:n}),!n)return u.NextResponse.json({message:"비밀번호가 일치하지 않습니다"},{status:401});let a={_id:o._id.toString(),username:o.username,nickname:o.nickname||o.username,role:o.role||"user"};return console.log("Login successful for:",a.username),u.NextResponse.json(a)}catch(e){return console.error("Login error details:",{error:e.message,stack:e.stack}),u.NextResponse.json({message:"로그인 처리 중 오류가 발생했습니다",error:e.message},{status:500})}}let d=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/auth/login/route",pathname:"/api/auth/login",filename:"route",bundlePath:"app/api/auth/login/route"},resolvedPagePath:"C:\\코딩\\p5\\forum\\app\\api\\auth\\login\\route.js",nextConfigOutput:"",userland:t}),{workAsyncStorage:c,workUnitAsyncStorage:l,serverHooks:g}=d;function m(){return(0,a.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:l})}},96487:()=>{},78335:()=>{},52445:(e,s,r)=>{"use strict";r.d(s,{X:()=>n});var t=r(12518);let o=process.env.MONGODB_URI;if(!process.env.MONGODB_URI)throw Error("Please add your Mongo URI to .env.local");let n=new t.MongoClient(o,{}).connect()}};var s=require("../../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[638,5452],()=>r(46927));module.exports=t})();