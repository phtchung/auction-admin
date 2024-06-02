import {formatDateTime, formatMoney} from "../../Utils/constant.js";
import LayOut from "../Layout/layout.jsx";

const AdminBiddingInfo = ({ data }) => {
    console.log(data)
    return (
        <>
            <div className="items-center font-medium text-sm gap-6  my-5 px-1 lg:space-y-5  min-[225px]:space-y-3">
                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3 sm:col-span-1">Hình thức</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.auction_live}
                        </div>
                    </div>

                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Phương thức</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.type_of_auction}
                        </div>
                    </div>
                </div>

                {
                    data?.auction_live === 'Đấu giá livestream' &&
                    <>
                        <div className="grid grid-cols-6 text-left">
                            <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                <div className="min-[225px]:col-span-3 sm:col-span-1">Bắt đầu đăng ký</div>
                                <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                    {data?.register_start}
                                </div>
                            </div>

                            <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                <div className="min-[225px]:col-span-3  sm:col-span-1">Kết thúc đăng ký</div>
                                <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                    {data?.register_finish}
                                </div>
                            </div>
                        </div>
                    </>
                }

                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3 sm:col-span-1">Thời gian bắt đầu</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.start_time}
                        </div>
                    </div>

                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Thời gian kết thúc</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.finish_time}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Giá khởi điểm</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {formatMoney(data?.reserve_price)} VND
                        </div>
                    </div>
                    {
                        data?.auction_live === 'Đấu giá thông thường' &&
                        <>
                            <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                <div className="min-[225px]:col-span-3 sm:col-span-1"> Giá bán trực tiếp</div>
                                <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                    {formatMoney(data?.sale_price)} VND
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3 sm:col-span-1">Bước giá</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {formatMoney(data?.step_price)} VND
                        </div>
                    </div>

                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Phí vận chuyển</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {formatMoney(data?.shipping_fee)} VND
                        </div>
                    </div>
                </div>


                {data.status !== undefined &&
                    data.status !== 2 &&
                    data.status !== 3 &&
                    data.status !== 10 &&
                    data.status !== 11 && (
                        <>
                            <div className="grid grid-cols-6 text-left">
                                <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                    <div className="min-[225px]:col-span-3 sm:col-span-1">Giá trúng thầu</div>
                                    <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                        {formatMoney(data?.final_price)} VND
                                    </div>
                                </div>

                                <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                    <div className="min-[225px]:col-span-3  sm:col-span-1"> Thời gian trúng thầu</div>
                                    <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                        {data?.victory_time}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-6 text-left">
                                <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                    <div className="min-[225px]:col-span-3 sm:col-span-1">Tổng tiền</div>
                                    <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                        {formatMoney(data?.final_price + data?.shipping_fee)} VND
                                    </div>
                                </div>

                                <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                    <div className="min-[225px]:col-span-3  sm:col-span-1"> Tổng tiền thực nhận</div>
                                    <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                        {formatMoney((
                                            (data?.final_price + data?.shipping_fee) *
                                            0.9
                                        )).toLocaleString() + " VND"}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-6 text-left">
                                <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                    <div className="min-[225px]:col-span-3 sm:col-span-1">Người trúng thầu</div>
                                    <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                        {data?.winner}
                                    </div>
                                </div>

                                <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                    <div className="min-[225px]:col-span-3  sm:col-span-1"> Số điện thoại</div>
                                    <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                        {data?.phone}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
            </div>

        </>
    );
};

export default AdminBiddingInfo;
