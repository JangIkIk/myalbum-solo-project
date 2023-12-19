import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-full grid place-items-center">
      <div className="w-5/6 h-1/2 bg-[#0f1011] flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col w-1/2">
          <label htmlFor="user_id" className="text-white">
            아이디
          </label>
          <input
            type="text"
            id="user_id"
            className="h-12 rounded-xl p-2.5"
          ></input>
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="user_ps" className="text-white">
            비밀번호
          </label>
          <input
            type="text"
            id="user_ps"
            className="h-12 rounded-xl p-2.5"
          ></input>
        </div>
        <div className="text-white flex w-1/2 justify-between">
            <label htmlFor="user_check" className="cursor-pointer flex gap-2">
            <input type="checkbox" id="user_check"></input>
            로그인 기억하기</label>
          <div className="flex gap-2">
            <Link href={"findid"}>ID 찾기</Link>
            <span>|</span>
            <Link href={"findpw"}>PW 찾기</Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-evenly mt-2.5">
          <Link href={""} className="text-white flex bg-[#404040] gap-2 p-2.5">
            <Image
              width={25}
              height={25}
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAxzz///8AxjcAxCZQ0Gjc9N/m9+jR8dbQ9Ntp2YMAxjgAxCwAxTAAxTP7//3p+Osfy01R1HC068Hx/PTL8tVIz2O77cfF7ct/3pXX9d8Awx+L4aA70F+Y5KlJ0mqn6LcszVWh5rB024yH4Jtg2oBa1Xau6bwozVMQgS/cAAACxklEQVR4nO3c7W7aQBBG4Vm7QPGabwqBkBSSpr3/O6yUKi0EbK8NjTKvzvPbWnHixWInks0AAAAAAAAAAAAAAAAAAAAAAAAAQEORJ4kJS8WbrXRLxbdFP8FknjcuFVeTlJXWH5yYfQlphmXTUvnXpIV6zX+rm0ouHE+LhqW8F4Zl0010XxjuGhL9FzbtU/+FYbOtXUqgMNzXPugVCsMuq1lKonAzqllKojA81OxTjcLwWH0XRQr78oXhe+UHVCkMs6q7KFM4sYqfNjKFYV7xPNUprDoqChUuLu9TocKwuvgTXKkwPF3ap1KFF4+KUoVheeF5qlUY7s4TxQrH+7Ojolhh2JzdRLXC85GGXOHZSEOvsPfuJuoVhsNpomDhu6OiYmE/O/5po1h4OtKQLDzZp5qFx0dFzcLjkYZo4dFIQ7Xw3z5VLQzrt08sW/h3pKFb+DbS0C0My1y9MDxH9cLx61FRuTBsSvXC15GGdmHYZ+qF/VK9MByiemGYbdUL+87v4aT5ksPSdeGPRfM1CZd85sKXtOv8Fg63P9ULS0v4KrouHI0e1QstP6gXWt5XL8x26oUWH9QLrdyoF2a7sXihxWf1wtRjruPCwq7dp5+90Mon9UKLa/XCYpp2DvRbaOVQvdDyuXphMbpmn3ootNE1Iw0XhRavGGn4KCyy7kdFH4U2mqkXXjHS8FJoses+dVPYeaThptDivXqhld2Oio4KO440HBV2HGl4KrRt2n8MHRd2Gmm4Kuw00vBVaHGlXthhpOGssMNIw1th+5GGu8Iia7lP3RW2Pir6K2x7VHRYWBStjooOC1vuU4+FFg/qhRZ76oXZL/XCNiMNp4UtRhpeC7N96lHRa6HFO/VCyxNHGh9dWOx6gwSbl7r3ev5ZaZqy0GBQ9TK0/ybxjeWNgTd99zkAAAAAAAAAAAAAAAAAAAAAAAAACb8BlaxF0SY61+4AAAAASUVORK5CYII="
              }
              alt="naver"
            />
            Naver 로그인
          </Link>
          <Link href={""} className="text-white flex bg-[#404040] gap-2 p-2.5">
            <Image
              width={25}
              height={25}
              src={
                "data:image/jpeg;base64,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"
              }
              alt="Google"
            />
            Google 로그인
          </Link>
        </div>
        <button className="bg-white py-4 px-16 mt-2.5 rounded-2xl">로그인</button>
      </div>
    </div>
  );
}

