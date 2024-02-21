import { formatDateTime } from "../../Utils/constant.js";
import LayOut from "../Layout/layout.jsx";

const AdminBiddingInfo = ({ data }) => {
    return (
        <>
            <div className="flex justify-between m-2.5 items-center px-2">
                <div className="text-left text-sm font-semibold ">
                    Thông tin đấu giá
                </div>
            </div>

            <div className="items-center gap-6 font-medium mt-8 mx-8 px-1 text-sm space-y-6 ">
                <div className="grid grid-cols-6 text-left">
                    <div> Hình thức :</div>
                    <div className="font-normal  col-span-2">
                        {data?.type_of_auction === 1 ? "Đấu giá tăng" : "Đấu giá giảm "}
                    </div>
                    {
                        (data?.status === 2 || data?.status === 3 || data?.status === 11 ) &&
                        <>
                            <div> Thời gian duyệt :</div>
                            <div className="font-normal  col-span-2">
                                {data?.approved_at}
                            </div>
                        </>
                    }

                </div>

                <div className="grid grid-cols-6 text-left">
                    <div> Thời gian bắt đầu :</div>
                    <div className="font-normal  col-span-2"> {data?.start_time}</div>
                    <di> Thời gian kết thúc :</di>
                    <div className="font-normal col-span-2"> {data?.finish_time}</div>
                </div>

                {/*{data.status !== undefined &&*/}
                {/*    data.status !== 2 &&*/}
                {/*    data.status !== 3 &&*/}
                {/*    data.status !== 10 &&*/}
                {/*    data.status !== 11 && (*/}
                {/*        <>*/}
                {/*            <div className="grid grid-cols-6 text-left">*/}
                {/*                <div> Giá trúng thầu :</div>*/}
                {/*                <div className="font-normal  col-span-2">*/}
                {/*                    {" "}*/}
                {/*                    {data?.final_price} VND*/}
                {/*                </div>*/}
                {/*                <di> Thời gian trúng thầu :</di>*/}
                {/*                <div className="font-normal col-span-2">*/}
                {/*                    {data?.victory_time}{" "}*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="grid grid-cols-6 text-left">*/}
                {/*                <div> Tổng tiền :</div>*/}
                {/*                <div className="font-normal col-span-2">*/}
                {/*                    {" "}*/}
                {/*                    {data?.final_price + data?.shipping_fee} VND*/}
                {/*                </div>*/}
                {/*                <div> Tổng tiền thực nhận :</div>*/}
                {/*                <div className="font-normal  col-span-2">*/}
                {/*                    {" "}*/}
                {/*                    {(*/}
                {/*                        (data?.final_price + data?.shipping_fee) **/}
                {/*                        0.9*/}
                {/*                    ).toLocaleString() + " VND"}*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="grid grid-cols-6 text-left">*/}
                {/*                <div> Người trúng thầu :</div>*/}
                {/*                <div className="font-normal col-span-2">*/}
                {/*                    {" "}*/}
                {/*                    {data?.deliData?.name}*/}
                {/*                </div>*/}
                {/*                <div> Phone Number :</div>*/}
                {/*                <div className="font-normal col-span-2">*/}
                {/*                    {" "}*/}
                {/*                    {data?.deliData?.phone}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </>*/}
                {/*    )}*/}

            </div>
            {/*{(data?.status === 7 || data?.status === 8 || data?.status === 9) && (*/}
            {/*    <>*/}
            {/*        <div className="flex justify-between m-2.5 items-center px-2">*/}
            {/*            <div className="text-left text-sm font-semibold ">*/}
            {/*                Thông tin vận chuyển*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="items-center gap-6 font-medium my-8 mx-8 px-1 text-sm space-y-6 ">*/}
            {/*            <div className="grid grid-cols-6 text-left">*/}
            {/*                <div> Người nhận :</div>*/}
            {/*                <div className="font-normal col-span-2">*/}
            {/*                    {" "}*/}
            {/*                    {data?.deliData?.name}*/}
            {/*                </div>*/}
            {/*                <div> Số điện thoại :</div>*/}
            {/*                <div className="font-normal col-span-2">*/}
            {/*                    {" "}*/}
            {/*                    {data?.deliData?.phone}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="grid grid-cols-6 text-left">*/}
            {/*                <div> Địa chỉ nhận hàng :</div>*/}
            {/*                <div className="font-normal col-span-2">*/}
            {/*                    {" "}*/}
            {/*                    {data?.deliData?.address}*/}
            {/*                </div>*/}
            {/*                <div> Ghi chú :</div>*/}
            {/*                <div className="font-normal col-span-2">*/}
            {/*                    {" "}*/}
            {/*                    {data.deliData?.note}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="grid grid-cols-6 text-left">*/}
            {/*                <div> Thời gian nhận hàng :</div>*/}
            {/*                <div className="font-normal col-span-2">*/}
            {/*                    {" "}*/}
            {/*                    {formatDateTime(data?.deliData?.completed_at)}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*)}*/}
        </>
    );
};

export default AdminBiddingInfo;
