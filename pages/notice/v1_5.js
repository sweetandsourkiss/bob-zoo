import TabTitle from "./../../components/TabTitle";
import Image from "next/image";

export default function v1_5() {
  return (
    <div className="pt-20 flex flex-col items-center gap-8 px-8 pb-8">
      <TabTitle title="v1.5" />
      <div className="flex justify-center text-7xl text-rose-300 pt-8">
        패치노트 v1.5
      </div>
      <div>
        <p className="text-center">
          안녕하세요 여러분~&nbsp;
          <span className="text-2xl text-blue-300">TEAM MLD</span> 입니다.
        </p>
        <p className="text-center">
          <span className="text-2xl text-amber-300">BOB ZOO 1.5 </span>버전이
          업데이트 되었습니다!
        </p>
        <p className="text-center">
          1.5 버전에서는&nbsp;
          <span className="text-2xl text-lime-300">전반적인 UI개선이</span>
          이루어졌습니다!
        </p>
      </div>
      <div className="text-4xl text-white">
        ---------- 업데이트 내용 ----------
      </div>
      <div className="text-4xl text-lime-300">인게임 UI 추가 및 개선</div>
      <div className="flex flex-col w-3/4 gap-4">
        <Image
          src={"/img/v1.5_1.png"}
          width={2000}
          height={1}
          alt=""
          className="w-full"
        />
        <div className="text-base text-black text-center">
          전반적으로 UI를 보기 편하고 직관적으로 알 수 있도록 개선하였습니다.
        </div>
      </div>
      <div className="flex flex-col w-3/4 gap-4">
        <Image
          src={"/img/v1.5_2.png"}
          width={2000}
          height={1}
          alt=""
          className="w-full"
          priority
        />
        <div className="text-base text-black text-center">
          로딩 씬에서 플레이 팁이 랜덤하게 나타납니다.
        </div>
      </div>

      <div className="flex w-3/4 gap-4">
        <div className="flex flex-col items-center">
          <Image
            src={"/img/v1.5_3.png"}
            width={2000}
            height={1}
            alt=""
            className="w-full"
          />
          <div className="text-base text-black text-center">
            상태창이 추가되었습니다.{" "}
            <span className="text-xl text-emerald-300">단축키 E</span>를 통해
            현재 플레이어의 능력치를 확인할 수 있습니다.
          </div>
        </div>
        <div>
          <Image
            src={"/img/v1.5_4.png"}
            width={2000}
            height={1}
            alt=""
            className="w-full"
          />
          <div>인게임 좌측 상단에 타이머가 추가되었습니다.</div>
          <div>
            이제 게임 플레이 시간과 최종 클리어 기록을 확인할 수 있습니다.
          </div>
          <div>기록 갱신을 위해 노력해보세요~</div>
        </div>
      </div>
      <div className="flex flex-col w-3/4 gap-4">
        <div className="flex gap-8">
          <Image
            src={"/img/v1.5_5.png"}
            width={2000}
            height={1}
            alt=""
            className="w-1/2"
          />
          <Image
            src={"/img/v1.5_6.png"}
            width={2000}
            height={1}
            alt=""
            className="w-1/2"
          />
        </div>
        <div className="text-base text-black text-center">
          <div>대기방 UI가 개선되었습니다.</div>
          <div>게임을 시작한 방은 회색으로 표시되도록 수정하였습니다.</div>
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
          <div>준비완료 기능이 추가되었습니다.</div>
          <div>
            플레이어들이 모두 준비 완료 상태이면 방장이 게임을 시작할 수
            있습니다.
          </div>
        </div>
      </div>
      <div className="text-4xl text-lime-300">오류 수정</div>
      <div className="text-black text-center">
        <div>
          플레이어의 공격 애니메이션이 동기화 되지 않는 오류를 수정했습니다.
        </div>
        <div>스테이지 입장 시 종소리가 들리는 오류를 수정했습니다.</div>

        <div>
          환경설정에서 효과음 크기 수정을 할 수 없던 오류를 수정했습니다.
        </div>
        <div>
          접촉 데미지와 물방울 데미지에 방어력이 적용되지 않던 오류를
          수정했습니다.
        </div>
      </div>
      <div className="text-4xl text-white">--------------------</div>
      <div className="text-4xl text-black pt-4">이상입니다 감사합니다!</div>
    </div>
  );
}
