export default function Signup() {
  return (
    <form className="w-[620px] h-auto">
      <div className="w-full flex justify-evenly p-2">
        <div className="basis-3/12 text-white pt-2">
          <label htmlFor="user_id">아이디</label>
        </div>
        <div className="flex-1">
          <input type="text" placeholder="sky123" maxLength={16} id="user_id" className="w-full h-10 rounded-xl p-2"></input>
          <p className="text-red-500 text-center text-xs p-2">영문, 숫자를 포함한 8 ~ 16</p>
        </div>
        <div className="basis-3/12 text-center">
          <button type="button" className="bg-white rounded-2xl py-2 px-8">중복확인</button>
        </div>
      </div>

      <div className="w-full flex justify-evenly p-2">
        <div className="basis-3/12 text-white pt-2">
          <label htmlFor="user_password">비밀번호</label>
        </div>
        <div className="flex-1">
          <input type="password" placeholder="doung123!" maxLength={16} id="user_password" className="w-full h-10 rounded-xl p-2"></input>
          <p className="text-red-500 text-center text-xs p-2">특수문자 하나이상, 숫자하나이상을 포함한 영문 8 ~ 16</p>
        </div>
        <div className="basis-3/12 text-center">
        </div>
      </div>

      <div className="w-full flex justify-evenly p-2">
        <div className="basis-3/12 text-white pt-2">
          <label htmlFor="user_passwordCheck">비밀번호 확인</label>
        </div>
        <div className="flex-1">
          <input type="password" placeholder="doung123!" maxLength={16} id="user_passwordCheck" className="w-full h-10 rounded-xl p-2"></input>
          <p className="text-red-500 text-center text-xs p-2">비밀번호가 일치하지 않습니다.</p>
        </div>
        <div className="basis-3/12 text-center">
        </div>
      </div>

      <div className="w-full flex justify-evenly p-2">
        <div className="basis-3/12 text-white pt-2">
          <label htmlFor="user_name">이름</label>
        </div>
        <div className="flex-1">
          <input type="text" placeholder="홍길동" id="user_name" className="w-full h-10 rounded-xl p-2"></input>
          <p className="text-red-500 text-center text-xs p-2">특수문자는 사용할수 없습니다.</p>
        </div>
        <div className="basis-3/12 text-center">
        </div>
      </div>

      <div className="w-full flex justify-evenly p-2">
        <div className="basis-3/12 text-white pt-2">
          <label htmlFor="user_email">이메일</label>
        </div>
        <div className="flex-1">
          <input type="email" placeholder="sky123@gmail.com" id="user_id" className="w-full h-10 rounded-xl p-2"></input>
          <p className="text-red-500 text-center text-xs p-2">이메일 형식이 올바르지 않습니다.</p>
        </div>
        <div className="basis-3/12 text-center">
          <button type="button" className="bg-white rounded-2xl py-2 px-8">인증 요청</button>
        </div>
      </div>

      <div className="w-full flex justify-evenly p-2">
        <div className="basis-3/12 text-white pt-2">
          <label htmlFor="user_id">인증코드</label>
        </div>
        <div className="flex-1">
          <input type="text" placeholder="12345" id="user_id" className="w-full h-10 rounded-xl p-2"></input>
          <p className="text-red-500 text-center text-xs p-2">인증코드가 올바르지 않습니다.</p>
        </div>
        <div className="basis-3/12 text-center">
          <button type="button" className="bg-white rounded-2xl py-2 px-8">확인 03:00</button>
        </div>
      </div>
      <div className="flex justify-center mt-4"><button type="submit" className="bg-white rounded-2xl py-2 px-8 basis-3/12">가입하기</button></div>
    </form>
  );
}
