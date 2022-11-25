import React from 'react';
import { Link } from 'react-router-dom';

const UserIconModal = () => {
  return (
    <section className="flex flex-col w-36 h-40 rounded-[15px] absolute top-[80px] right-10 p-4 text-lg font-semibold items-center justify-around border-solid border-2 border-borderline">
      <div className="cursor-pointer p-2 hover:bg-point-color hover:text-white rounded-[15px]">
        <Link to="/mypage">마이페이지</Link>
      </div>

      {/* 로그인 상태에 따른 조건부 렌더링 필요 */}
      <div className="cursor-pointer p-2"> 로그인 </div>
      <div className="cursor-pointer p-2"> 회원가입 </div>
    </section>
  );
};

export default UserIconModal;
