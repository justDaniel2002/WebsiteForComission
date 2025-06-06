import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="text-justify">
      <div className="text-center text-[30px]
      lg:text-[40px] 
      my-[20px]">• T.O.S</div>

      <div className="font-bold mb-[20px] text-[15px]
      lg:text-[18px]">A. LƯU Ý CHUNG</div>

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
        ✔️ Fanart, OCxCharxOC, BL, GL, BG, R16,...etc.<br />
        <br />
        ✔️ Furry, trung niên, size gap, background đơn giản,…etc.<br />
        <br />
        ✖️ Mecha, người già, vẽ lại từ người thật, background quá phức tạp.</div>
      <div className="font-bold mb-[20px] text-[16px]
      lg:text-[18px]">- Trình tự các bước: Sketch idea - Sketch details - Lineart - Full</div>
      <div className="lg:text-[16px]
      mb-[25px]">
        - Mình sẽ từ chối những đơn vượt quá khả năng của mình để đảm bảo chất lượng comm.<br />
        <br />
        - Mình sửa sketch không tính phí nên bạn cứ góp ý để mình cải thiện, tuy nhiên mình chỉ sửa trên idea đã chốt ở bước trước đó, mình không sửa nếu như bạn yêu cầu xoá hết đi vẽ một pose khác (Chi tiết xem thêm trong mục Thanh Toán).<br />
        <br />
        - Trả comm: Mình gửi dưới dạng link drive. Trong file sẽ bao gồm 1 bản không có watermark và 1 bản có watermark.<br />
      </div>
      <div className="font-bold mb-[20px] text-[15px]
      lg:text-[18px]">C. VỀ KHÁCH HÀNG:</div>
      <div className="font-bold mb-[20px] text-[16px]
      lg:text-[18px]">- Vui lòng gửi brief chi tiết bao gồm:</div>
      <div className="lg:text-[16px]
      mb-[25px]">
        + Số char trong tranh.<br />
        <br />
        + Thể loại cho từng char (bust-up, halfbody, fullbody,…).<br />
        <br />
        + Ref char: Yêu cầu chi tiết, cụ thể từng đặc điểm. Nếu là fanart thì vui lòng ghi rõ tên char và tác phẩm gốc để mình có thể chủ động tìm thêm ref.<br />
        <br />
        + Background: Mô tả chi tiết, khuyến khích có cả ref bg.<br />
        <br />
        + Diễn đạt ý tưởng rõ ràng cả về tư thế, biểu cảm hay sắc thái của nhân vật. Khuyến khích có thêm hình vẽ mô tả pose (sketch người que, ref khác,…)</div>

      <div className="font-bold mb-[20px] text-[16px]
      lg:text-[18px]">- Quá trình sửa và góp ý tranh:</div>
      <div className="lg:text-[16px]
      mb-[25px]">
        + Note rõ những điểm cần sửa. Nếu cần thiết thì có thể sửa thẳng lên comm.<br />
        <br />
        + Chỉ sửa ở bước đang thực hiện, không sửa những gì đã chốt trước đó.</div>

        <div className="font-bold mb-[20px] text-[16px]
      lg:text-[18px]">- Một vài lưu ý khác:</div>
      <div className="lg:text-[16px]
      mb-[25px]">
        + Khi nhận được link drive, vui lòng tải ảnh về và lưu trữ trên thiết bị cá nhân. Link drive được mình lưu trữ trong 1 tháng kể từ ngày giao file cho khách, sau khoảng thời gian đó mình sẽ không chịu trách nhiệm nếu mất file.<br />
        <br />
        + Khi đăng tranh hãy kèm credit cho mình.</div>

    </div>
  )
}
