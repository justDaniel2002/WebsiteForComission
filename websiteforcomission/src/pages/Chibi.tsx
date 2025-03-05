
import { useEffect } from "react";
import { ChibiPrices, InkingImages } from "../datas/datas";


export default function Chibi() {

    useEffect(() => {
            window.scrollTo({ top: 250, behavior: "smooth" });
          }, []);

    return (
        <div>
            <div className="my-[30px] text-center text-[20px] tracking-wider">• THANH TOÁN</div>

            <div className="lg:text-[16px]
mb-[25px]">
                + Đơn vị tiền tệ là VNĐ. Mình chỉ nhận thanh toán qua tài khoản ngân hàng.<br />
                <br />
                (Trình tự: Sketch idea - Sketch details - Lineart - Full)<br />
                <br />
                <span className="font-bold">1. Với những đơn {'<'}500,000vnđ:</span> Thanh toán full sau khi chốt sketch details. Mình không refund nếu khách muốn huỷ với loại comm này.<br />
                <br />
                <span className="font-bold">2. Với những đơn từ 500,000vnđ trở lên:</span> Thanh toán tối thiểu 50% sau khi chốt sketch idea. Thanh toán nốt trước khi gửi file full.<br />
                <br />
                • Nếu huỷ comm ngay sau khi có sketch idea: Thanh toán cho mình 25% tổng comm và mình gửi bạn tiến độ đã làm được.<br />
                <br />
                + Nếu huỷ comm khi đang hoặc đã sketch details:<br />
                TH1 (Đã thanh toán 50%): Mình sẽ gửi tiến độ đã làm được cho bạn và không refund.<br />
                TH2 (Thanh toán nhiều hơn 50%): Mình sẽ refund lại số tiền dư ra so với 50% tổng comm và gửi bạn tiến độ đã làm được.<br />
                <br/>
                • Thanh toán nốt số còn lại sau khi chốt lineart.<br/>
                <span className="font-bold">+ Lưu ý:</span> Khi đã có lineart mà muốn huỷ com thì vẫn phải thanh toán full tổng com, mình sẽ không refund kể từ bước lineart.<br />
            </div>

            <div className="w-full border-b-2 border-black"></div>

            <div className="my-[30px] text-center text-[20px] tracking-wider">BẢNG GIÁ</div>

            {/* Bảng giá */}
            <div className="m-auto grid grid-cols-2 mb-[60px] text-[14px] w-[250px]
            lg:w-[350px]
            lg:text-[20px]">
                <div className="border-b-2 pb-4 text-center border-black font-medium">Type</div>
                <div className="border-b-2 pb-4 text-center border-black font-medium">Price</div>
                {ChibiPrices.map(price => <>
                    <div className="text-center font-light border-b p-2">{price.type}</div>
                    <div className="text-center font-light border-b p-2">{price.price}</div></>)}
            </div>

            <div className="border-b w-full"></div>

            <div className="flex gap-2 flex-wrap justify-center my-[40px]">
                {InkingImages.map(img =>
                    <div className={`${img.flexspan}`}>
                        <img src={img.img} />
                    </div>)}
            </div>
        </div>
    )
}
