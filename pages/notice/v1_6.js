import TabTitle from "./../../components/TabTitle";
import Image from "next/image";

export default function v1_5() {
  return (
    <div className="pt-20 flex flex-col items-center gap-8 px-8 pb-8">
      <TabTitle title="v1.6" />
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        패치노트 v1.6
      </div>
      <div>
        <p className="text-center">
          안녕하세요 여러분~&nbsp;
          <span className="text-2xl text-blue-300">TEAM MLD</span> 입니다.
        </p>
        <p className="text-center">
          <span className="text-2xl text-amber-300">BOB ZOO 1.6 </span>버전이
          업데이트 되었습니다!
        </p>
        <p className="text-center">
          1.6 버전에서는&nbsp;
          <span className="text-2xl text-lime-300">계정 관련 기능이</span>
          추가되었습니다!
        </p>
      </div>
      <div className="text-4xl text-white">
        ---------- 업데이트 내용 ----------
      </div>
      <div className="text-4xl text-lime-300">회원가입 | 로그인 기능 추가</div>
      <div className="flex flex-col w-3/4 gap-4">
        <div className="flex gap-8">
          <Image
            src={"/img/v1.6_1.png"}
            width={2000}
            height={1}
            alt=""
            className="w-1/2"
          />
          <Image
            src={"/img/v1.6_2.png"}
            width={2000}
            height={1}
            alt=""
            className="w-1/2"
          />
        </div>
        <div className="text-base text-black text-center">
          <div>로그인 씬이 추가되었습니다.</div>
          <div>계정이 없는 경우 회원가입을 통해 계정을 생성할 수 있습니다.</div>
        </div>
      </div>
      <div className="flex flex-col w-3/4 gap-4">
        <div className="flex gap-8">
          <Image
            src={"/img/v1.5_7.png"}
            width={2000}
            height={1}
            alt=""
            className="w-1/2"
          />
          <Image
            src={"/img/v1.5_8.png"}
            width={2000}
            height={1}
            alt=""
            className="w-1/2"
          />
        </div>
        <div className="text-base text-black text-center">
          <div>방에 입장한 경우 방장의 닉네임이 상단에 노출됩니다.</div>
          <div>
            방장인 경우 우상단 플레이어 리스트에 왕관 이모티콘이 표시됩니다.
          </div>
        </div>
      </div>
      <div className="text-4xl text-white">--------------------</div>
      <div className="text-4xl text-black pt-4">이상입니다 감사합니다!</div>
    </div>
  );
}
