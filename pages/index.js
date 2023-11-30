import TabTitle from "./../components/TabTitle";

export default function Home() {
  return (
    <>
      <TabTitle title="BOB ZOO" />
      <div className="w-full z-0 flex flex-col items-center">
        <video
          width="100%"
          loop="loop"
          data-resize="true"
          muted
          autoPlay
          className="opacity-80"
        >
          <source src="/vid/main.mp4" type="video/mp4" />
        </video>
        <a
          href="/download/bobzoo-setup-v1.2.exe"
          download
          className="w-fit absolute top-1/3 "
        >
          {/* <a
          href="https://bob-zoo.notion.site/bob-zoo/BoB-Zoo-v-0-11-d63a382885f74076a1d01a434d8a5c97"
          className="w-fit absolute top-1/3"
        > */}
          <div className="flex flex-col justify-center items-center gap-4 rounded-lg border-8 border-solid border-black p-12 cursor-pointer hover:bg-gradient-to-br hover:from-white hover:to-black ">
            <div className="text-8xl">
              <span className="text-red-300 ">지금</span>
              <span className="text-blue-300">바로</span>
            </div>
            <div className="w-80 h-32 flex flex-col justify-center items-center">
              <div className="text-8xl text-emerald-300">다운로드</div>
              <div className="text-base text-amber-300">
                (bobzoo-setup-v1.2)
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
