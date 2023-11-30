import TabTitle from "@/components/TabTitle";
import Image from "next/image";

export default function Infomation() {
  return (
    <div className="pt-20 flex flex-col items-center gap-8 px-4">
      <TabTitle title="Info" />
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        🎬트레일러🎬
      </div>
      <iframe
        width="100%"
        height="800"
        src="https://www.youtube.com/embed/9oPbxUWU8Mw?si=EsHlGyW4zp6EISXP"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        📖스토리📖
      </div>
      <div className="w-full flex justify-start gap-8">
        <video
          width="50%"
          loop="loop"
          data-resize="true"
          muted
          autoPlay
          className="rounded-xl"
        >
          <source src="/vid/story.mp4" type="video/mp4" />
        </video>
        <div className="grid grid-rows-2 py-4 text-xl">
          <div>
            <span className="text-lime-300 text-4xl">고파고파🧪바이러스</span>
            <span>가 상륙해 버린 동물원…</span>
          </div>
          <div>
            <span className="text-amber-300 text-4xl">고양이😺사육사</span>
            <span>만이 배고픈 동물들을 행복하게 만들 수 있다!</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        🎮조작🎮
      </div>
      <div className="w-full grid grid-cols-3 justify-center text-2xl gap-4">
        <div className="text-center">🚍 이동: WASD</div>
        <div className="text-center">💨 대쉬: Lshift</div>
        <div className="text-center">🚀 점프: space bar</div>
        <div className="text-center">🏹 공격: 마우스 좌클릭</div>
        <div className="text-center">💣 스킬: 마우스 우클릭</div>
        <div className="text-center">🥽 시야전환: Alt + 마우스</div>
      </div>
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        🎨상세🎨
      </div>
      <div className="w-full flex justify-start gap-8">
        <video
          width="50%"
          loop="loop"
          data-resize="true"
          muted
          autoPlay
          className="rounded-xl"
        >
          <source src="/vid/weapon-custom.mp4" type="video/mp4" />
        </video>
        <div className="grid grid-rows-2 py-4 text-xl">
          <div>
            <span className="text-4xl text-lime-300">캐릭터🔧설정</span>
            <span>에서 원하는 공격과 스킬을 선택하세요.</span>
          </div>
          <div>
            <span>마음에 드는 모습으로 </span>
            <span className="text-4xl text-amber-300">고양이를🎒커스텀</span>
            <span>하세요.</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start gap-8 pb-8">
        <video
          width="50%"
          loop="loop"
          data-resize="true"
          muted
          autoPlay
          className="rounded-xl"
        >
          <source src="/vid/multi-hungroggy.mp4" type="video/mp4" />
        </video>
        <div className="grid grid-rows-2 py-4 text-xl">
          <div>
            <span className="text-4xl text-lime-300">최대👨‍👦‍👦3인</span>
            <span>까지 멀티플레이가 가능합니다.</span>
          </div>
          <div>
            <div className="pb-4">
              <span>중요한 것은 </span>
              <span className="text-4xl text-amber-300">
                포기하지🍕않는🍗허기짐!!
              </span>
            </div>
            <div className="text-base">
              <span>체력이 0이 되면 고파고파 바이러스에 감염되어 </span>
              <span className="text-zinc-300">헝그로기 상태</span>
              <span>에 빠집니다.</span>
            </div>
            <div className="text-base">
              다른 사육사가 주는 먹이를 통해 부활할 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
