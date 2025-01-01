import mongoose from 'mongoose';

// 유저 스키마 정의
const userSchema = new mongoose.Schema({
    // 사용자 아이디 - 고유값
    userId: { type: String, required: true, unique: true },
    // 비밀번호 - 해싱된 값 저장
    password: { type: String, required: true },
    // 사용자 닉네임
    nickname: { type: String, required: true },
    // 계정 생성일
    createdAt: { type: Date, default: Date.now },
});

// 모델 생성 및 내보내기
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
