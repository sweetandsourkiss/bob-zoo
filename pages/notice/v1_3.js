import Image from "next/image";
import TabTitle from "../../components/TabTitle";

export default function v1_3() {
  return (
    <div className="pt-20 flex flex-col items-center gap-8 px-8 pb-8">
      <TabTitle title="v1.3" />
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        패치노트 v1.3
      </div>
      <div>
        <p className="text-center">
          안녕하세요 여러분~&nbsp;
          <span className="text-2xl text-blue-300">TEAM MLD</span> 입니다.
        </p>
        <p className="text-center">
          <span className="text-2xl text-amber-300">BOB ZOO 1.3 </span>버전이
          업데이트 되었습니다!
        </p>
        <p className="text-center">
          1.3 버전에서는&nbsp;
          <span className="text-2xl text-lime-300">
            포션 추가 및 플레이어 수에 따른 난이도 조정
          </span>
          가 추가되었습니다!
        </p>
      </div>
      <div className="text-4xl text-white">
        ---------- 업데이트 내용 ----------
      </div>
      <div className="text-4xl text-lime-300">도시락 추가</div>
      <div className="text-base text-black">
        앞으로는 q키를 통해서 60초에 한번 최대 체력의 50%를 회복할 수 있습니다!
      </div>
      <Image
        src={"/img/v1.3_1.png"}
        width={2000}
        height={1}
        alt=""
        className="w-2/3"
      />
      <div className="text-4xl text-lime-300">
        플레이어 수에 따른 난이도 조정
      </div>
      <div className="text-base text-black">
        이제 플레이어 수에 따라서 동물들의 HP와 코인이 조정됩니다!
      </div>
      <div className="text-4xl text-white">--------------------</div>
      <div className="text-4xl text-black pt-4">이상입니다 감사합니다!</div>
    </div>
  );
}
