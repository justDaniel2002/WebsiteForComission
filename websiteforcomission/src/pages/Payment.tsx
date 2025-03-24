
import { useEffect } from "react";


export default function Payment() {

    useEffect(() => {
        window.scrollTo({ top: 250, behavior: "smooth" });
    }, []);

    return (
        <div>
            <div className="text-center text-[20px]
      lg:text-[30px] 
      my-[20px]">• THANH TOÁN</div>

            <div className="lg:text-[16px]
mb-[25px]">
                + Đơn vị tiền tệ là VNĐ. Mình chỉ nhận thanh toán qua tài khoản ngân hàng.<br />
                <br />
                + Thanh toán tối thiểu 50% sau khi chốt sketch idea.<br />
                <br />
                + Thanh toán nốt số còn lại sau chốt linear.<br />
            </div>
            <div className="font-bold mb-[20px] text-[16px]
      lg:text-[16px]">VẤN ĐỀ HỦY COMM</div>

            <div className="lg:text-[16px]
mb-[25px]">
                - <span className="font-bold">Lưu ý:</span> Trường hợp sửa quá lệch so với sketch idea (chẳng hạn như đổi góc mặt, đổi góc người, tạo dáng,…) cũng sẽ tính là huỷ comm và yêu cầu vẽ comm mới. Những trường hợp này cũng CẦN đọc điều khoản huỷ comm dưới đây:<br />
                <br />
                + Nếu huỷ comm ngay sau khi có sketch idea: Thanh toán cho mình 25% tổng comm và mình gửi bạn tiến độ đã làm được.<br />
                <br />
                + Nếu huỷ comm khi đang hoặc đã sketch details:<br />
                TH1 (Đã thanh toán 50%): Mình sẽ gửi tiến độ đã làm được cho bạn và không refund.
                <br />
                TH2 (Thanh toán nhiều hơn 50%): Mình sẽ refund lại số tiền dư ra so với 50% tổng comm và gửi bạn tiến độ đã làm được.<br />
                <br />
                - Khi đã có lineart mà muốn huỷ com thì vẫn phải thanh toán full tổng com, mình sẽ không refund kể từ bước lineart.<br />
                <br />
                - <span className="font-bold">Lưu ý khác:</span> Với những trường hợp mình gửi từ 2 sketch idea trở lên cho khách, mình có quyền tái sử dụng bản sketch bị loại vào các mục đích khác kể cả thương mại. Nếu muốn sở hữu bản sketch này thì khách cần phải mua.
            </div>

            <div className="text-center text-[20px]
      lg:text-[30px] 
      my-[20px]">• WAITLIST</div>

            <div className="lg:text-[16px]
mb-[25px]">
                - Cọc trước 100k/tranh và gửi brief để giữ slot. Khi đến lượt mình sẽ chủ động liên lạc với bạn để chạy comm (thường không quá 2 tháng). Chỉ ghi nhận slot wl khi đã chuyển cọc.                <br />
                <br />
                - Huỷ trong thời gian chờ = mất cọc.<br />
                <br />
                - Tiền cọc sẽ được hoàn trả dưới hình thức trừ thẳng vào tổng comm kể từ khi bắt đầu chạy comm.<br />
            </div>

        </div >
    )
}
