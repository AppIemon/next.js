(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4117],{2738:(e,t,a)=>{Promise.resolve().then(a.bind(a,7746))},6475:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var s=a(5155),l=a(2115);function n(e){let{postId:t,isEditMode:a=!1,currentUser:n,postAuthor:r}=e,[o,i]=(0,l.useState)([]),[c,d]=(0,l.useState)(!1),[m,h]=(0,l.useState)(!1);(0,l.useEffect)(()=>{u()},[t]);let u=async()=>{try{let e=await fetch("/api/files/".concat(t));if(e.ok){let t=await e.json();i(t)}}catch(e){console.error("파일 목록 로딩 실패:",e)}},f=async e=>{let a=Array.from(e.target.files);for(let e of a)if(e.size>5242880){alert("".concat(e.name,"의 크기가 5MB를 초과합니다."));return}d(!0);try{for(let e of a){let a=new FormData;if(a.append("file",e),!(await fetch("/api/files/".concat(t),{method:"POST",body:a})).ok)throw Error("파일 업로드 실패: ".concat(e.name))}u()}catch(e){console.error("파일 업로드 실패:",e),alert("파일 업로드 중 오류가 발생했습니다.")}finally{d(!1)}},p=(e,t)=>{try{let a="".concat(window.location.origin).concat(e);console.log("Download URL:",a);let s=document.createElement("a");s.href=a,s.download=t||"download",document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(e){console.error("Download error:",e),alert("파일 다운로드 중 오류가 발생했습니다.")}},g=async e=>{if(window.confirm("파일을 삭제하시겠습니까?"))try{if((await fetch("/api/files/".concat(e),{method:"DELETE"})).ok)u();else throw Error("파일 삭제 실패")}catch(e){console.error("파일 삭제 오류:",e),alert("파일 삭제 중 오류가 발생했습니다.")}},j=a||(null==n?void 0:n.nickname)===r;return(0,s.jsxs)("div",{className:"files-section",children:[(0,s.jsx)("div",{className:"files-header",onClick:()=>h(!m),children:(0,s.jsxs)("h3",{children:["첨부 파일 (",o.length,")",(0,s.jsx)("span",{className:"toggle-icon",children:m?"▼":"▶"})]})}),m&&(0,s.jsxs)(s.Fragment,{children:[j&&(0,s.jsxs)("div",{className:"file-upload-section",children:[(0,s.jsxs)("label",{className:"file-upload-label",children:["파일 첨부하기",(0,s.jsx)("input",{type:"file",onChange:f,className:"hidden",multiple:!0,accept:"*/*"})]}),(0,s.jsx)("p",{className:"file-info",children:"* 파일당 최대 5MB"}),c&&(0,s.jsx)("p",{children:"업로드 중..."})]}),o.length>0?(0,s.jsx)("div",{className:"file-grid",children:o.map((e,t)=>(0,s.jsxs)("div",{className:"file-download-item",children:[(0,s.jsx)("span",{className:"file-name",title:e.filename,children:e.filename}),(0,s.jsxs)("span",{className:"file-size",children:[(e.size/1024).toFixed(1),"KB"]}),(0,s.jsx)("button",{className:"file-download",onClick:()=>p(e.filepath,e.filename),children:"다운로드"}),j&&(0,s.jsx)("button",{className:"file-delete",onClick:()=>g(e._id),children:"삭제"})]},t))}):(0,s.jsx)("p",{className:"no-files",children:"첨부된 파일이 없습니다"})]})]})}},7746:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var s=a(5155),l=a(2115),n=a(6046),r=a(473);function o(e){let{user:t,onClose:a}=e;return(0,s.jsx)("div",{className:"profile-modal-overlay",onClick:a,children:(0,s.jsxs)("div",{className:"profile-modal-content",onClick:e=>e.stopPropagation(),children:[(0,s.jsx)("button",{className:"close-button",onClick:a,children:"\xd7"}),(0,s.jsxs)("div",{className:"profile-info",children:[t.profileImage&&(0,s.jsx)("div",{className:"profile-image-container",children:(0,s.jsx)("img",{src:t.profileImage,alt:"".concat(t.nickname,"의 프로필"),className:"profile-image"})}),(0,s.jsx)("h3",{children:t.nickname}),(0,s.jsx)("p",{className:"status-message",children:t.statusMessage||"상태 메시지가 없습니다."})]})]})})}function i(e){let{postId:t,postAuthor:a}=e,{user:n}=function(){let[e,t]=(0,l.useState)(null),[a,s]=(0,l.useState)(!0);(0,l.useEffect)(()=>{n()},[]);let n=async()=>{try{let e=localStorage.getItem("authToken");if(!e){t(null),s(!1);return}let a=await fetch("/api/auth/validate",{headers:{Authorization:"Bearer ".concat(e)}}),l=await a.json();l.isValid?t(l.user):(localStorage.removeItem("authToken"),t(null))}catch(e){console.error("Auth check failed:",e),localStorage.removeItem("authToken"),t(null)}finally{s(!1)}};return{user:e,loading:a,checkAuth:n}}(),[r,i]=(0,l.useState)([]),[c,d]=(0,l.useState)(""),[m,h]=(0,l.useState)({}),[u,f]=(0,l.useState)({}),[p,g]=(0,l.useState)(null),[j,x]=(0,l.useState)(!1),v=e=>{let t={},a=[];return e.forEach(e=>{t[e._id]={...e,replies:[]}}),e.forEach(e=>{if(e.parentId){let a=t[e.parentId];a&&a.replies.push(t[e._id])}else a.push(t[e._id])}),a},y=async()=>{try{console.log("Fetching comments for postId:",t);let e=await fetch("/api/comment/get?postId=".concat(t),{method:"GET",cache:"no-store"});if(console.log("API Response status:",e.status),e.ok){let t=await e.json();if(console.log("Raw comment data:",t),!t||!Array.isArray(t)){console.error("Invalid data format:",t),i([]);return}let a=v(t);console.log("Processed comments:",a),i(a)}else throw Error("댓글 로딩 실패: ".concat(e.status))}catch(e){console.error("댓글 로딩 상세 오류:",e),i([])}};(0,l.useEffect)(()=>{console.log("Comment component mounted with postId:",t),t&&y()},[t]);let N=async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.preventDefault();try{let e;if(a){let e=k(r,a);if(w(e)>=15){alert("더 이상 답글을 작성할 수 없습니다 (최대 15단계)");return}}let s=localStorage.getItem("user");if(!s){alert("로그인이 필요합니다");return}try{e="string"==typeof s?JSON.parse(s):s}catch(e){console.error("Invalid user data:",e),alert("로그인 정보가 올바르지 않습니다. 다시 로그인해주세요."),localStorage.removeItem("user");return}if(!c.trim()){alert("댓글 내용을 입력해주세요");return}let l=await fetch("/api/comment/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,content:c,parentId:a,author:{_id:e._id,nickname:e.nickname}})});if(l.ok)d(""),await y();else{let e=await l.json();alert(e.message||"댓글 작성 중 오류가 발생했습니다")}}catch(e){console.error("댓글 작성 오류:",e),alert("댓글 작성 중 오류가 발생했습니다")}},w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e.parentId)return t;let a=k(r,e.parentId);return a?w(a,t+1):t},k=(e,t)=>{for(let a of e){if(a._id===t)return a;if(a.replies){let e=k(a.replies,t);if(e)return e}}return null},S=async e=>{if(window.confirm("정말 삭제하시겠습니까?"))try{let t=localStorage.getItem("user");if(!t){alert("로그인이 필요합니다");return}let a=JSON.parse(t),s=await fetch("/api/comment/".concat(e),{method:"DELETE",headers:{"X-Author-Id":a._id}});if(s.ok)await y();else{let e=await s.json();throw Error(e.message)}}catch(e){alert(e.message||"삭제 중 오류가 발생했습니다")}},b=async(e,t)=>{try{let a=localStorage.getItem("user");if(!a){alert("로그인이 필요합니다");return}let s=JSON.parse(a),l=await fetch("/api/comment/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json","X-Author-Id":s._id},body:JSON.stringify({text:t,authorId:s._id})});if(l.ok)await y();else{let e=await l.json();throw Error(e.message)}}catch(e){alert(e.message||"수정 중 오류가 발생했습니다")}},C=async e=>{try{let t=await fetch("/api/user/".concat(e));if(t.ok){let e=await t.json();g(e),x(!0)}}catch(e){console.error("사용자 정보 로딩 실패:",e)}},I=e=>{h(t=>({...t,[e]:!t[e]}))},E=e=>{f(t=>({...t,[e]:!t[e]}))},_=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(console.log("Rendering comments:",{level:t,commentsCount:null==e?void 0:e.length}),Array.isArray(e))?e.map(e=>{var l,r;if(!e)return null;let o=(null===(l=e.author)||void 0===l?void 0:l.nickname)||"알 수 없음",i=null===(r=e.author)||void 0===r?void 0:r._id,h=(null==n?void 0:n.nickname)===o,f=e.replies&&e.replies.length>0;return(0,s.jsxs)("div",{className:"comment-item level-".concat(t),style:{marginLeft:"".concat(5*t,"px"),backgroundColor:0===t?"#fff3e0":"#fffde7",borderLeft:t>0?"3px solid #ffd54f":"none",padding:"10px",marginBottom:"10px",borderRadius:"5px",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},children:[(0,s.jsxs)("div",{className:"comment-content",children:[(0,s.jsxs)("div",{className:"comment-header",children:[(0,s.jsxs)("a",{onClick:()=>C(i),className:"comment-author-link",style:{cursor:"pointer"},children:[o,a===o&&(0,s.jsx)("span",{className:"author-badge",children:"작성자"})]}),(0,s.jsx)("span",{className:"comment-date",children:new Date(e.createdAt).toLocaleDateString()})]}),(0,s.jsx)("p",{className:"comment-text",children:e.isDeleted?(0,s.jsx)("span",{className:"deleted-comment",children:"삭제된 댓글입니다"}):e.content}),(0,s.jsx)("div",{className:"comment-footer",children:!e.isDeleted&&(0,s.jsxs)(s.Fragment,{children:[t<20?(0,s.jsx)("button",{onClick:()=>I(e._id),className:"reply-btn",children:"답글달기"}):(0,s.jsx)("span",{className:"max-level-notice",children:"최대 답글 단계에 도달했습니다"}),f&&(0,s.jsx)("button",{onClick:()=>E(e._id),className:"toggle-replies-btn",children:u[e._id]?"답글 접기":"답글 보기(".concat(e.replies.length,")")}),h&&(0,s.jsxs)("div",{className:"comment-actions",children:[(0,s.jsx)("button",{onClick:()=>{let t=prompt("댓글을 수정하세요",e.content);t&&t!==e.content&&b(e._id,t)},className:"edit-btn",children:"수정"}),(0,s.jsx)("button",{onClick:()=>S(e._id),className:"delete-btn",children:"삭제"})]})]})})]}),m[e._id]&&(0,s.jsxs)("form",{className:"reply-form",onSubmit:t=>{t.preventDefault(),N(t,e._id),I(e._id)},children:[(0,s.jsx)("textarea",{value:c,onChange:e=>d(e.target.value),placeholder:"답글을 작성하세요"}),(0,s.jsxs)("div",{className:"reply-actions",children:[(0,s.jsx)("button",{type:"submit",children:"답글 작성"}),(0,s.jsx)("button",{type:"button",className:"cancel-button",onClick:()=>I(e._id),children:"취소"})]})]}),f&&u[e._id]&&(0,s.jsx)("div",{className:"replies",children:_(e.replies,t+1)})]},e._id)}):(console.error("Comments is not an array:",e),null)},A=e=>{let t=0;return e.forEach(e=>{t+=1,e.replies&&Array.isArray(e.replies)&&(t+=A(e.replies))}),t};return(0,s.jsxs)("div",{className:"comment-section",children:[(0,s.jsxs)("h3",{className:"comment-title",children:["댓글 (",Array.isArray(r)?A(r):0,")"]}),(0,s.jsxs)("form",{onSubmit:e=>N(e),className:"comment-form",children:[(0,s.jsx)("textarea",{value:c,onChange:e=>d(e.target.value),placeholder:"댓글을 작성하세요",className:"comment-textarea"}),(0,s.jsx)("button",{type:"submit",className:"comment-button",children:"댓글 작성"})]}),(0,s.jsx)("div",{className:"comment-list",children:Array.isArray(r)&&r.length>0?_(r):(0,s.jsxs)("p",{children:["댓글이 없습니다. (총 ",A(r),"개)"]})}),j&&p&&(0,s.jsx)(o,{user:p,onClose:()=>{x(!1),g(null)}})]})}a(8173);var c=a(6475),d=a(3750);function m(){let{id:e}=(0,n.useParams)(),[t,a]=(0,l.useState)(null),[o,m]=(0,l.useState)(null),[h,u]=(0,l.useState)([]),[f,p]=(0,l.useState)(!0),[g,j]=(0,l.useState)(null),x=(0,n.useRouter)(),v=function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2]};(0,l.useEffect)(()=>{let t=async()=>{let e=localStorage.getItem("authToken");if(e)try{let t=await fetch("/api/auth/validate",{headers:{Authorization:"Bearer ".concat(e)}}),a=await t.json();a.isValid?m(a.user):(localStorage.removeItem("authToken"),m(null))}catch(e){v("Auth",e),localStorage.removeItem("authToken"),m(null)}};(()=>{let e=(0,d.C)();(0,d.G)(e)&&m(e)})(),t(),e&&(async()=>{p(!0),j(null);try{await y(),await N()}catch(e){v("LoadData",e),j("게시글을 불러오는데 실패했습니다.")}finally{p(!1)}})()},[e]);let y=async()=>{try{let t=await fetch("/api/posts/".concat(e)),s=await t.json();if(!s)throw Error("게시글 데이터가 없습니다.");a(s),u(s.likedBy||[])}catch(e){v("FetchPost",e),j(e.message||"게시글을 불러오는데 실패했습니다.")}},N=async()=>{try{let t=JSON.parse(sessionStorage.getItem("viewedPosts")||"[]");if(t.includes(e))return;(await fetch("/api/post/view",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:e})})).ok&&(t.push(e),sessionStorage.setItem("viewedPosts",JSON.stringify(t)),a(e=>({...e,views:((null==e?void 0:e.views)||0)+1})))}catch(e){v("Views",e)}},w=async()=>{try{let t=localStorage.getItem("user");if(!t){alert("로그인이 필요합니다"),x.push("/login");return}let a=JSON.parse(t),s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l=await fetch("/api/posts/".concat(e,"/like"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:s}});if(l.ok){let e=await l.json();e.success&&u(e.updatedLikedBy)}else{let e=await l.json();alert(e.message)}}catch(e){v("Like",e),alert("좋아요 처리 중 오류가 발생했습니다.")}},k=async()=>{if(window.confirm("정말 삭제하시겠습니까?"))try{let t=await fetch("".concat("/api/posts","/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(authToken)}});if(t.ok)x.push("/list");else{let e=await t.json();alert(e.message||"삭제 중 오류가 발생했습니다")}}catch(e){v("Delete",e),alert("삭제 중 오류가 발생했습니다")}};return g?(0,s.jsx)("div",{className:"error-message",children:g}):f?(0,s.jsx)("div",{className:"loading",children:"로딩중..."}):t?(0,s.jsxs)("div",{children:[(0,s.jsx)(r.default,{}),(0,s.jsxs)("div",{className:"detail-container",children:[g&&(0,s.jsxs)("div",{className:"error-banner",role:"alert",children:[(0,s.jsx)("p",{children:g}),(0,s.jsx)("button",{onClick:()=>window.location.reload(),children:"다시 시도"})]}),(0,s.jsx)("h1",{children:t.title}),(0,s.jsxs)("p",{children:["작성자: ",t.author]}),(0,s.jsxs)("div",{className:"post-stats",children:[(0,s.jsxs)("span",{children:["\uD83D\uDC41️ ",t.views||0]}),(0,s.jsxs)("button",{onClick:w,className:"like-button ".concat(o&&h.includes(o.nickname)?"liked":""),children:["❤️ ",h.length]})]}),(0,s.jsx)("p",{children:t.content}),t.image&&(0,s.jsx)("img",{src:"data:image/jpeg;base64,".concat(t.image),alt:"게시글 이미지",style:{maxWidth:"100%"}}),o&&o.nickname===t.author&&(0,s.jsxs)("div",{className:"post-actions",children:[(0,s.jsx)("button",{onClick:()=>x.push("/edit/".concat(e)),children:"수정"}),(0,s.jsx)("button",{onClick:k,children:"삭제"})]}),(0,s.jsx)(c.A,{postId:e,isEditMode:!1,currentUser:(0,d.C)(),postAuthor:null==t?void 0:t.author}),(0,s.jsx)(i,{postId:e,postAuthor:t.author})]})]}):(0,s.jsx)("div",{className:"not-found",children:"게시글을 찾을 수 없습니다."})}},473:(e,t,a)=>{"use strict";a.d(t,{default:()=>i});var s=a(5155),l=a(2115),n=a(8173),r=a.n(n),o=a(6046);let i=()=>{let[e,t]=(0,l.useState)(null),[a,n]=(0,l.useState)(!1),i=(0,o.useRouter)();return(0,l.useEffect)(()=>{let e=localStorage.getItem("user");e&&t(JSON.parse(e))},[]),(0,s.jsxs)("nav",{className:"navbar",children:[(0,s.jsxs)("div",{className:"nav-left",children:[(0,s.jsx)(r(),{href:"/",className:"nav-link",children:"홈"}),(0,s.jsx)(r(),{href:"/list",className:"nav-link",children:"게시판"})]}),(0,s.jsx)("div",{className:"nav-right",children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{href:"/write",className:"nav-link write-btn",children:"글쓰기"}),(0,s.jsx)(r(),{href:"/profile",className:"nav-link",children:"프로필"}),(0,s.jsx)("button",{onClick:()=>{localStorage.removeItem("user"),t(null),i.push("/login")},className:"nav-link",children:"로그아웃"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{href:"/login",className:"nav-link",children:"로그인"}),(0,s.jsx)(r(),{href:"/register",className:"nav-link",children:"회원가입"})]})})]})}},3750:(e,t,a)=>{"use strict";a.d(t,{C:()=>s,G:()=>l});let s=()=>{try{let e=localStorage.getItem("user");if(!e)return null;let t=JSON.parse(e);if(!t||"object"!=typeof t)return localStorage.removeItem("user"),null;return t}catch(e){return console.error("Local storage parsing error:",e),localStorage.removeItem("user"),null}},l=e=>e&&"object"==typeof e&&"string"==typeof e.nickname&&e.nickname.length>0}},e=>{var t=t=>e(e.s=t);e.O(0,[1028,8441,1517,7358],()=>t(2738)),_N_E=e.O()}]);