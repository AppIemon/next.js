(()=>{var e={};e.id=8314,e.ids=[8314],e.modules={12518:e=>{"use strict";e.exports=require("mongodb")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},51260:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>c,serverHooks:()=>x,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>l});var s={};t.r(s),t.d(s,{GET:()=>p});var n=t(42706),o=t(28203),a=t(45994),u=t(52445),i=t(39187);async function p(e,{params:r}){try{let e=(await u.X).db("forum"),t=await e.collection("users").findOne({username:r.username},{projection:{password:0}});if(!t)return i.NextResponse.json({message:"사용자를 찾을 수 없습니다"},{status:404});return i.NextResponse.json(t)}catch(e){return i.NextResponse.json({message:"서버 오류가 발생했습니다"},{status:500})}}let c=new n.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/user/[username]/route",pathname:"/api/user/[username]",filename:"route",bundlePath:"app/api/user/[username]/route"},resolvedPagePath:"C:\\코딩\\p5\\forum\\app\\api\\user\\[username]\\route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:l,serverHooks:x}=c;function m(){return(0,a.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:l})}},96487:()=>{},78335:()=>{},52445:(e,r,t)=>{"use strict";t.d(r,{X:()=>o});var s=t(12518);let n=process.env.MONGODB_URI;if(!process.env.MONGODB_URI)throw Error("Please add your Mongo URI to .env.local");let o=new s.MongoClient(n,{}).connect()}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,5452],()=>t(51260));module.exports=s})();