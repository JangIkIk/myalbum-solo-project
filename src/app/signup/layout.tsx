import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "회원가입",
    description: "signup page"
}

export default function SignLayout({children}: {children: React.ReactNode}){
    return(
        <div className="min-h-full grid place-items-center">
            {children}
        </div>
    );
}