import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';

const social = {
  naver: {
    color: 'bg-[#17ce5f]',
    korean: '네이버',
    icon: <SiNaver />,
  },
  kakao: {
    color: 'bg-[#fada0b]',
    korean: '카카오',
    icon: <RiKakaoTalkFill />,
  },
  google: {
    color: 'bg-[#ffffff]',
    korean: '구글',
    icon: <FcGoogle />,
  },
};

function LoginButton({ socialType }: { socialType: string }) {
  const nowSocial = social[socialType as keyof object];
  const handleLogin = () => {
    // login 호출
  };
  return (
    <button
      onClick={handleLogin}
      className={`${nowSocial['color']} relative flex items-center justify-center rounded-[3px] border-border-color border-[1px] w-full px-[12px] py-[8px] text-base m-[4px]`}
    >
      <div className="absolute left-[12px]">{nowSocial['icon']}</div>
      <div>{`${nowSocial['korean']}로 로그인하기`}</div>
    </button>
  );
}

export default LoginButton;
