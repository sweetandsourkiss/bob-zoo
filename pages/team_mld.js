import TabTitle from "@/components/TabTitle";
import Image from "next/image";

export default function Team_MLD() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <TabTitle title="TEAM MLD" />
      <h2 className="text-7xl text-rose-300 pt-8">TEAM MLD</h2>
      <p className="text-blue-300 pb-4">(Metaverse Lucky Debugging)</p>
      <div className="grid gap-4 justify-center grid-cols-3 pb-8">
        <div>
          <Image
            src={"/img/kmb.png"}
            width={200}
            height={200}
            alt=""
            priority
          />
          <div>
            <p className="flex justify-center text-amber-300 text-2xl">
              김민범
            </p>
            <p className="flex justify-center text-stone-300">보스</p>
          </div>
        </div>
        <div>
          <Image src={"/img/kjh.png"} width={200} height={200} alt="" />
          <div>
            <p className="flex justify-center text-amber-300 text-2xl">
              김주현
            </p>
            <p className="flex justify-center text-stone-300">플레이어</p>
          </div>
        </div>
        <div>
          <Image src={"/img/ksh.png"} width={200} height={200} alt="" />
          <div>
            <p className="flex justify-center text-amber-300 text-2xl">
              김상혁
            </p>
            <p className="flex justify-center text-stone-300">UI - 아이템</p>
          </div>
        </div>
        <div>
          <Image src={"/img/phs.png"} width={200} height={200} alt="" />
          <div>
            <p className="flex justify-center text-amber-300 text-2xl">
              박한샘
            </p>
            <p className="flex justify-center text-stone-300">적 | 포톤</p>
          </div>
        </div>
        <div>
          <Image src={"/img/sjh.png"} width={200} height={200} alt="" />
          <div>
            <p className="flex justify-center text-amber-300 text-2xl">
              손준호
            </p>
            <p className="flex justify-center text-stone-300">UI - 씬</p>
          </div>
        </div>
        <div>
          <Image src={"/img/ldy.png"} width={200} height={200} alt="" />
          <div>
            <p className="flex justify-center text-amber-300 text-2xl">
              이동윤
            </p>
            <p className="flex justify-center text-stone-300">보스</p>
          </div>
        </div>
      </div>
    </div>
  );
}
