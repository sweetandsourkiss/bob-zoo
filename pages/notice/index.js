import TabTitle from "@/components/TabTitle";
import Image from "next/image";
import Link from "next/link";

export default function Notice() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <TabTitle title="Notice" />
      <div className="flex justify-center text-7xl text-rose-300 py-8">
        공지사항
      </div>
      <div className="w-full h-4/5 grid grid-cols-3 px-12 pb-8 gap-8">
        <Link
          href={"/notice/v1_6"}
          className="flex flex-col justify-center items-center rounded-md bg-blue-400 hover:bg-blue-500 gap-2"
        >
          <Image
            src={"/img/v1.6_1.png"}
            width={2000}
            height={1500}
            alt=""
            className="w-full h-4/5 rounded-lg p-2"
          />
          <div>패치노트 v1.6(2023.10.10)</div>
        </Link>
        <Link
          href={"/notice/v1_5"}
          className="flex flex-col justify-center items-center rounded-md bg-blue-400 hover:bg-blue-500 gap-2"
        >
          <Image
            src={"/img/v1.5_1.png"}
            width={2000}
            height={1500}
            alt=""
            className="w-full h-4/5 rounded-lg p-2"
          />
          <div>패치노트 v1.5(2023.10.09)</div>
        </Link>
        <Link
          href={"/notice/v1_4"}
          className="flex flex-col justify-center items-center rounded-md bg-blue-400 hover:bg-blue-500 gap-2"
        >
          <Image
            src={"/img/v1.4_1.png"}
            width={2000}
            height={1500}
            alt=""
            className="w-full h-4/5 rounded-lg p-2"
          />
          <div>패치노트 v1.4 (2023.10.06)</div>
        </Link>
        <Link
          href={"/notice/v1_3"}
          className="flex flex-col justify-center items-center rounded-md bg-blue-400 hover:bg-blue-500 gap-2"
        >
          <Image
            src={"/img/v1.3_1.png"}
            width={2000}
            height={1500}
            alt=""
            className="w-full h-4/5 rounded-lg p-2"
          />
          <div>패치노트 v1.3 (2023.10.05)</div>
        </Link>
        <Link
          href={"/notice/v1_2"}
          className="flex flex-col justify-center items-center rounded-lg bg-blue-400 hover:bg-blue-500 gap-2"
        >
          <Image
            src={"/img/v1.2_1.png"}
            width={2000}
            height={1500}
            alt=""
            className="w-full h-4/5 rounded-lg p-2"
          />
          <div>패치노트 v1.2 (2023.10.05)</div>
        </Link>
        <Link
          href={"/notice/v1_1"}
          className="flex flex-col justify-center items-center rounded-lg bg-blue-400 hover:bg-blue-500 gap-2"
        >
          <Image
            src={"/img/v1.1_1.png"}
            width={2000}
            height={1500}
            alt=""
            className="w-full h-4/5 rounded-lg p-2"
          />
          <div>패치노트 v1.1 (2023.10.04)</div>
        </Link>
        <Link
          href={"/notice/v1_0"}
          className="flex flex-col justify-center items-center rounded-lg bg-blue-400 hover:bg-blue-500 gap-2"
        >
          <Image
            src={"/img/logo.png"}
            width={2000}
            height={1500}
            alt=""
            className="w-full h-4/5 round-lg p-2"
          />
          <div>BoB Zoo(v1.0)가 출시되었습니다!!</div>
        </Link>
      </div>
    </div>
  );
}
