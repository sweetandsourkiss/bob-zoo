import TabTitle from "./../../components/TabTitle";
import Image from "next/image";

export default function v1_1() {
  return (
    <div className="pt-20 flex flex-col items-center gap-8 px-8 pb-8">
      <TabTitle title="v1.4" />
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        패치노트 v1.4
      </div>
      <div>
        <p className="text-center">
          안녕하세요 여러분~&nbsp;
          <span className="text-2xl text-blue-300">TEAM MLD</span> 입니다.
        </p>
        <p className="text-center">
          <span className="text-2xl text-amber-300">BOB ZOO 1.4 </span>버전이
          업데이트 되었습니다!
        </p>
        <p className="text-center">
          1.4 버전에서는&nbsp;
          <span className="text-2xl text-lime-300">엔딩 크레딧</span>이
          추가되었습니다!
        </p>
      </div>
      <div className="text-4xl text-white">
        ---------- 업데이트 내용 ----------
      </div>
      <div className="text-4xl text-lime-300">엔딩 크레딧 추가</div>
      <Image
        src={"/img/v1.4_1.png"}
        width={2000}
        height={1}
        alt=""
        className="w-full"
      />
      <div className="text-4xl text-lime-300">와이번 추가</div>
      <Image
        src={"/img/v1.4_2.png"}
        width={2000}
        height={1}
        alt=""
        className="w-2/3"
      />
      <div className="text-4xl text-lime-300">기타 수정내역</div>
      <div className="flex gap-4">
        <div className="text-base text-black">
          1스테이지 BGM 기본 사운드 조정
        </div>
        <div className="text-base text-black">
          미니건 딜레이 소폭 감소(상향)
        </div>
      </div>
      <div className="text-4xl text-white">--------------------</div>
      <div className="text-4xl text-black pt-4">이상입니다 감사합니다!</div>
    </div>
  );
}
