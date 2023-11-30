import TabTitle from "@/components/TabTitle";

export default function Download() {
  return (
    <div className="pt-20 flex flex-col items-center gap-12 pb-8">
      <TabTitle title="Download" />
      <div className="text-7xl text-rose-300 pt-8">다운로드</div>
      <a href="/download/bobzoo-setup-v1.2.exe" download className="w-fit">
        <div className="w-60 h-24 flex flex-col justify-center items-center rounded-lg bg-amber-300 hover:bg-blue-300 cursor-pointer">
          <div className="text-2xl">bobzoo-setup-v1.2</div>
          <div className="text-xl">(최신버전)</div>
        </div>
      </a>
      <a href="/download/bobzoo-setup-v1.1.exe" download className="w-fit">
        <div className="w-60 h-24 flex flex-col justify-center items-center rounded-lg bg-amber-300 hover:bg-blue-300 cursor-pointer">
          <div className="text-2xl">bobzoo-setup-v1.1</div>
        </div>
      </a>
      <a href="/download/bobzoo-setup-v1.0.exe" download className="w-fit">
        <div className="w-60 h-24 flex flex-col justify-center items-center rounded-lg bg-amber-300 hover:bg-blue-300 cursor-pointer">
          <div className="text-2xl">bobzoo-setup-v1.0</div>
        </div>
      </a>
    </div>
  );
}
