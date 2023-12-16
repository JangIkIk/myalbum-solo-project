import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "myalbum",
  description: "나의 앨범",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="flex max-w-screen-xl m-auto min-h-full">
          <aside className="bg-layout-left w-[150px] flex flex-col items-center">
            <div className="p-4">
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="py-2.5"
                />
              </Link>
            </div>
            <nav>
              <div className="router-button">
                <Link href={"/login"}>로그인 | ID / PW 찾기</Link>
              </div>
              <div className="router-button">
                <Link href={"/signup"}>회원가입</Link>
              </div>
            </nav>
          </aside>
          <main className="bg-layout-center flex-1">{children}</main>
          <aside className="bg-layout-right w-[200px]">오른쪽 사이드바</aside>
        </div>
      </body>
    </html>
  );
}
