const functions = require('firebase-functions');
const next = require('next');

// Next.js 환경 설정
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Next.js 앱 준비가 완료되면 Firebase Functions에서 처리
app.prepare().then(() => {
  exports.nextjs = functions.https.onRequest((req, res) => {
    return handle(req, res); // 요청을 Next.js로 전달
  });
});