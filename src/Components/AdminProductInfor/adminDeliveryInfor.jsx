import {formatDateTime} from "../../Utils/constant.js";

const AdminDeliveryInfor = ({data}) => {
    return (
        <>
            <div
                className="items-center font-medium text-sm gap-6  my-5 px-1 lg:space-y-5  min-[225px]:space-y-3">
                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3 sm:col-span-1">Người nhận
                        </div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.deliData?.name}
                        </div>
                    </div>

                    <div
                        className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Số điện thoại
                        </div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.deliData?.phone}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[100px]:col-span-6 md:col-span-1"> Địa chỉ
                    </div>
                    <div className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                        {data?.deliData?.address}</div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[100px]:col-span-6 md:col-span-1"> Thanh toán
                    </div>
                    <div className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                        {data?.deliData?.payment_method}</div>
                </div>

                {data.status === 8 && <>
                    <div className="grid grid-cols-6 text-left">
                        <div className="min-[100px]:col-span-6 md:col-span-1"> Thời gian nhận hàng
                        </div>
                        <div className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                            {formatDateTime(data?.deliData?.completed_time)}</div>
                    </div>
                </>}
            </div>
        </>
    );
};
export default AdminDeliveryInfor;
