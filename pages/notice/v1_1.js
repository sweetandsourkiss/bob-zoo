import TabTitle from "./../../components/TabTitle";
import Image from "next/image";

export default function v1_1() {
  return (
    <div className="pt-20 flex flex-col items-center gap-8 px-8 pb-8">
      <TabTitle title="v1.1" />
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        패치노트 v1.1
      </div>
      <div>
        <p className="text-center">
          안녕하세요 여러분~&nbsp;
          <span className="text-2xl text-blue-300">TEAM MLD</span> 입니다.
        </p>
        <p className="text-center">
          <span className="text-2xl text-amber-300">BOB ZOO 1.1 </span>버전이
          업데이트 되었습니다!
        </p>
        <p className="text-center">
          1.1 버전에서는&nbsp;
          <span className="text-2xl text-lime-300">
            다양한 꾸미기 기능과 이벤트
          </span>
          추가되었습니다!
        </p>
      </div>
      <div className="text-4xl text-white">
        ---------- 업데이트 내용 ----------
      </div>
      <div className="text-4xl text-lime-300">마이쥬 시스템 추가</div>
      <div className="flex justify-center gap-4 py-4 text-xl">
        <div className="flex flex-col w-1/4 gap-4">
          <Image
            src={"/img/v1.1_1.png"}
            width={2000}
            height={1}
            alt=""
            className="w-full"
          />
          <div className="text-base text-black text-center">
            마이쥬를 꾸밀 수 있는 동물 추가
          </div>
        </div>
        <div className="flex flex-col w-1/4 gap-4">
          <Image
            src={"/img/v1.1_2.png"}
            width={2000}
            height={1}
            alt=""
            className="w-full"
          />
          <div className="text-base text-black text-center">
            동물을 획득할 수 있는 알 추가
          </div>
        </div>
        <div className="flex flex-col w-1/4 gap-4">
          <Image
            src={"/img/v1.1_3.png"}
            width={2000}
            height={1}
            alt=""
            className="w-full"
          />
          <div className="text-base text-black text-center">
            웰컴 알 5개 증정 추가
          </div>
        </div>
      </div>
      <div className="text-4xl text-lime-300">2스테이지 보스 패턴 추가</div>
      <div className="text-base text-black">인게임에서 확인하세요!</div>
      <div className="text-4xl text-lime-300">골드 획득량 조정</div>
      <div className="text-base text-black">인게임에서 확인하세요!</div>
      <div className="text-4xl text-white">--------------------</div>
      <div className="text-4xl text-black pt-4">이상입니다 감사합니다!</div>
    </div>
  );
}
