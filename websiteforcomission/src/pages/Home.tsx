import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, []);

  return (
    <div>
      <div className="text-center text-[30px]
      lg:text-[40px] 
      my-[20px]">• T.O.S</div>

      <div className="font-bold mb-[20px] text-[15px]
      lg:text-[18px]">A. Lưu ý chung</div>

      <div className="lg:text-[16px]
      mb-[25px]">
        - Commission chỉ được dùng với mục đích cá nhân, không sử dụng với mục đích thương mại trừ khi có thỏa thuận trước khi đặt.<br />
        <br />
        - Không sử dụng comm cho AI / NFTs.</div>

      <div className="font-bold mb-[20px] text-[15px]
      lg:text-[18px]">B. VỀ ARTIST</div>

      <div className="lg:text-[16px]
      mb-[25px]">
        ✔️ Only inking / B&W / Monotone<br />
        <br />
        ✔️ Fanart, OCxCharxOC, BL, GL, BG, R16, R18,...etc.<br />
        <br />
        ✔️ Furry, trung niên, size gap, background đơn giản,…etc.<br />
        <br />
        ✖️ Mecha, người già, vẽ lại từ người thật, background quá phức tạp.</div>
      <div className="lg:text-[16px]
      mb-[25px]">
        + Mình sẽ từ chối những đơn vượt quá khả năng của mình để đảm bảo chất lượng comm.<br />
        <br />
        + Mình sửa sketch không tính phí nên bạn cứ góp ý để mình cải thiện (mình chỉ sửa trên idea đã chốt ở bước trước đó, mình không sửa nếu như bạn yêu cầu xoá hết đi vẽ một pose khác).<br />
        <br />
        + Mình hoàn thiện comm trong khoảng 1 tuần - 2 tháng.<br />
        <br />
        + Nếu có nhu cầu in sản phẩm thành keychain, standee,...bạn có thể note với mình để mình chỉnh sửa file và gửi file PSD miễn phí.<br />
      </div>
      <div className="font-bold mb-[20px] text-[15px]
      lg:text-[18px]">C. VỀ KHÁCH HÀNG:</div>

      
    </div>
  )
}
