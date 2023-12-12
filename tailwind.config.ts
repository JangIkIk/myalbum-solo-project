import type { Config } from "tailwindcss";

const config: Config = {
  // Tailwind 클래스 이름이 포함된 파일을 인식하기위한 파일경로들
  content: [ // 참고: https://tailwindcss.com/docs/content-configuration
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // 색상, 글꼴, 글자크기, 테두리크기, 시각적 디자인과 관련
  theme: { //참고: https://tailwindcss.com/docs/theme
    // 글꼴
    // fontFamily:{
    // },
    // 반응형 스크린
    // screens:{ // https://tailwindcss.com/docs/screens
    // },
    // 테두리
    // borderRadius:{
    // },
    // 간격과 크기조정
    // spacing:{ // https://tailwindcss.com/docs/customizing-spacing
    // },

    extend: {
      // 커스텀 색상
      colors: { // https://tailwindcss.com/docs/customizing-colors
        "layout-left": "#060607",
        "layout-center": "#2B2D31",
        "layout-right": "#313338",
        "button-default": "#404040",
        "text-default": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
