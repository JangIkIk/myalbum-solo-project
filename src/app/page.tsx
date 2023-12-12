import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex max-w-screen-xl m-auto h-screen">
      <aside className="bg-layout-left w-[150px] flex flex-col items-center">
        <div className="p-4"><Image src={"/assets/logo.png"} width={100} height={100} alt="logo" className="py-2.5"/></div>
        <nav>
          <div className="router-button"><Link href={"/"}>로그인 | ID / PW 찾기</Link></div>
          <div className="router-button"><Link href={"/"}>회원가입</Link></div>
        </nav>
      </aside>
      <main className="bg-layout-center flex-1">메인영역</main>
      <aside className="bg-layout-right w-[200px]">오른쪽 사이드바</aside>
    </div>
  );
}