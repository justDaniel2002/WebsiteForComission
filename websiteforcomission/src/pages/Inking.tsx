
import { useEffect } from "react";
import { InkingImages, InkingPrices } from "../datas/datas";


export default function Inking() {

    useEffect(() => {
        window.scrollTo({ top: 250, behavior: "smooth" });
      }, []);

    return (
        <div className="kaushan-script-regular">

            <div className="my-[30px] text-center text-[20px] tracking-wider">BẢNG GIÁ</div>

            {/* Bảng giá */}
            <div className="m-auto grid grid-cols-2 mb-[60px] text-[12px] w-[300px]
            lg:w-[450px]
            lg:text-[20px]">
                <div className="border-b-2 pb-4 text-center border-black font-medium">Type</div>
                <div className="border-b-2 pb-4 text-center border-black font-medium">Price</div>
                {InkingPrices.map(price => <>
                    <div className={`text-center font-light ${price?.bold?'border-b-2':'border-b'} p-2`}>{price.type}</div>
                    <div className={`text-center font-light ${price?.bold?'border-b-2':'border-b'} p-2`}>{price.price}</div></>)}
            </div>

            <div className="my-[30px] text-center text-[20px] tracking-wider">THÊM BỘ PHẬN CƠ THỂ</div>

            <div className="text-center text-[14px]
            lg:text-[18px]">
                + Thêm tay/chân: + 80.000vnđ/tay/chân<br />
                <br />
                + Thêm char cùng loại: + 80%<br />
                <br />
                + Thêm char khác loại: + giá gốc<br />
                <br />
                <span className="font-bold">Ví dụ:</span><br />
                <br />
                2 bust-up = 300k + 240k (80% char 1) = 540k<br />
                <br />
                1 bust-up + 1 half-body = 300k + 360k = 660k<br />
            </div>

            <div className="flex gap-2 flex-wrap justify-center my-[40px]">
                {InkingImages.sort(img => img.order).map(img => 
                <div className={`${img.flexspan}`}>
                    <img src={img.img}/>
                </div>)}
            </div>
        </div>
    )
}
