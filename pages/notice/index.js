import TabTitle from "@/components/TabTitle";
import Link from "next/link";

export default function Notice() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <TabTitle title="Notice" />
      <div className="flex justify-center text-7xl text-rose-300 py-8">
        공지사항
      </div>
      <div className="w-full flex flex-col px-24 pb-8">
        <div className="w-full flex justify-center bg-stone-300 gap-20">
          <Link href={"/notice/v1_2"}>
            <div>패치노트 v1.2 (2023.10.05)</div>
          </Link>
        </div>
        <div className="w-full flex justify-center bg-stone-300 gap-20">
          <Link href={"/notice/v1_1"}>
            <div>패치노트 v1.1 (2023.10.04)</div>
          </Link>
        </div>
        <div className="w-full flex justify-center bg-stone-300 gap-20">
          <Link href={"/notice/v1_0"}>
            <div>BoB Zoo(v1.0)가 출시되었습니다!!</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
