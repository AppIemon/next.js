(()=>{var e={};e.id=3063,e.ids=[3063],e.modules={12518:e=>{"use strict";e.exports=require("mongodb")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79748:e=>{"use strict";e.exports=require("fs/promises")},33873:e=>{"use strict";e.exports=require("path")},93991:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>y,routeModule:()=>m,serverHooks:()=>v,workAsyncStorage:()=>j,workUnitAsyncStorage:()=>h});var s={};t.r(s),t.d(s,{DELETE:()=>w,GET:()=>f,POST:()=>x});var o=t(42706),i=t(28203),a=t(45994),n=t(52445),u=t(12518),p=t(79748),l=t(33873);let d=require("fs");var c=t(39187);async function f(e,{params:r}){try{let e=(await n.X).db("forum"),t=await e.collection("files").find({postId:r.id}).project({_id:1,filename:1,filepath:1,size:1,uploadedAt:1}).toArray();return c.NextResponse.json(t)}catch(e){return console.error("Files fetch error:",e),c.NextResponse.json({error:"파일 목록을 가져오는 중 오류가 발생했습니다."},{status:500})}}async function x(e,{params:r}){try{let t=(await e.formData()).get("file");if(!t)return c.NextResponse.json({error:"파일이 없습니다."},{status:400});let s=await t.arrayBuffer(),o=Buffer.from(s),i=(0,l.join)(process.cwd(),"public","uploads");(0,d.existsSync)(i)||await (0,p.mkdir)(i,{recursive:!0});let a=`${Date.now()}-${t.name.replace(/[^a-zA-Z0-9.]/g,"_")}`,u=(0,l.join)(i,a);await (0,p.writeFile)(u,o);let f=(await n.X).db("forum"),x=await f.collection("files").insertOne({filename:t.name,filepath:`/uploads/${a}`,postId:r.id,uploadedAt:new Date,size:t.size,type:t.type});return c.NextResponse.json({message:"파일이 업로드되었습니다.",filepath:`/uploads/${a}`,fileId:x.insertedId})}catch(e){return console.error("File upload error:",e),c.NextResponse.json({error:"파일 업로드 중 오류가 발생했습니다."},{status:500})}}async function w(e,{params:r}){try{let e=(await n.X).db("forum"),t=u.ObjectId.isValid(r.id)?{_id:new u.ObjectId(r.id)}:{postId:r.id},s=await e.collection("files").findOne(t);if(!s)return c.NextResponse.json({error:"파일을 찾을 수 없습니다."},{status:404});await e.collection("files").deleteOne(t);let o=(0,l.join)(process.cwd(),"public",s.filepath);return await (0,p.unlink)(o).catch(console.error),c.NextResponse.json({message:"파일이 삭제되었습니다."})}catch(e){return console.error("File delete error:",e),c.NextResponse.json({error:"파일 삭제 중 오류가 발생했습니다."},{status:500})}}let m=new o.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/files/[id]/route",pathname:"/api/files/[id]",filename:"route",bundlePath:"app/api/files/[id]/route"},resolvedPagePath:"C:\\코딩\\p5\\forum\\app\\api\\files\\[id]\\route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:j,workUnitAsyncStorage:h,serverHooks:v}=m;function y(){return(0,a.patchFetch)({workAsyncStorage:j,workUnitAsyncStorage:h})}},96487:()=>{},78335:()=>{},52445:(e,r,t)=>{"use strict";t.d(r,{X:()=>i});var s=t(12518);let o=process.env.MONGODB_URI;if(!process.env.MONGODB_URI)throw Error("Please add your Mongo URI to .env.local");let i=new s.MongoClient(o,{}).connect()}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,5452],()=>t(93991));module.exports=s})();