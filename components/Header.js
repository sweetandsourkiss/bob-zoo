import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const [flag, setFlag] = useState(0);
  const router = useRouter();
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", () => setFlag(window.scrollY));
    }
    //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", () => setFlag(window.scrollY));
    };
    //  window 에서 스크롤을 감시를 종료
  });
  return (
    <div
      className={`fixed w-full h-20 z-10 flex justify-between items-center px-8 text-2xl select-none hover:bg-white hover:text-black ${
        flag > 0 ? "bg-white text-black" : "text-white"
      }`}
    >
      <Link href={"/"}>
        <div className="cursor-pointer">BOB ZOO</div>
      </Link>
      <div className="flex gap-4">
        <Link href={"/notice"}>
          <div
            className={`cursor-pointer rounded-xl hover:bg-blue-400 px-2 py-1 ${
              router.pathname === "/notice" ? "text-rose-600" : null
            }`}
          >
            공지사항
          </div>
        </Link>
        <Link href={"/info"}>
          <div
            className={`cursor-pointer rounded-xl hover:bg-blue-400 px-2 py-1 ${
              router.pathname === "/info" ? "text-rose-600" : null
            }`}
          >
            게임정보
          </div>
        </Link>
        {/* <Link href={"/download"}> */}
        <div
          className={`cursor-pointer rounded-xl hover:bg-blue-400 px-2 py-1 ${
            router.pathname === "/download" ? "text-rose-600" : null
          }`}
        >
          다운로드
        </div>
        {/* </Link> */}
        <Link href={"/team_mld"}>
          <div
            className={`cursor-pointer rounded-xl hover:bg-blue-400 px-2 py-1 ${
              router.pathname === "/team_mld" ? "text-rose-600" : null
            }`}
          >
            TEAM MLD
          </div>
        </Link>
      </div>
    </div>
  );
}
