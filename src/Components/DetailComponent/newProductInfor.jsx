import {Image} from "antd";
import {billChangeStatus, formatDateTime, formatMoney} from "../../Utils/constant.js";

const NewProductInfor = ({reqData}) => {
    console.log(reqData)
    return (
        <>
            <div className="m-10 font-sans font-normal bg-white mb-10">
                <div className="text-base font-semibold text-neutral-600 mb-4 mx-8 pt-3 text-left">
                    Thông tin sản phẩm
                </div>
                <div
                    className="grid  grid-rows-1 grid-cols-6 grid-flow-col gap-4  border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Mã sản phẩm :</div>
                    <div className="col-start-2  text-left col-span-2 ">{reqData?.request_id}</div>
                    {
                        reqData.admin_belong !== 1 &&
                        <>
                            <div className="col-start-4 font-semibold col-span-1 ">Thời gian yêu cầu</div>
                            <div
                                className="col-start-5 text-left col-span-2 "> {(reqData.status === 1 || reqData.status === 13) ? reqData?.createdAt : reqData?.request_time}
                            </div>
                        </>
                    }
                </div>

                {reqData.admin_belong !== 1 && <>
                    <div
                        className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                        <div className="col-start-1 font-semibold col-span-1 ">Người bán :</div>
                        <div className="col-start-2 text-left col-span-2 ">{reqData?.seller?.name}</div>
                        <div className="col-start-4 font-semibold col-span-1 ...">Đánh giá :</div>
                        <div
                            className="col-start-5 text-left col-span-2 ...">{reqData?.seller?.average_rating ? reqData?.seller?.average_rating : 0}</div>
                    </div>
                    <div
                        className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                        <div className="col-start-1 font-semibold col-span-1 ">Số điện thoại :</div>
                        <div className="col-start-2 text-left col-span-2 ">{reqData?.seller?.phone}</div>
                        <div className="col-start-4 font-semibold col-span-1 ...">Điểm tích lũy :</div>
                        <div
                            className="col-start-5 text-left col-span-2 ...">{reqData?.seller?.shop_point}</div>
                    </div>
                </>}

                <div
                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Tên sản phẩm :</div>
                    <div className="col-start-2 text-left col-span-5 ">{reqData?.product_name}</div>
                </div>
                <div
                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Danh mục :</div>
                    <div className="col-start-2 text-left col-span-2 ">{reqData?.category_name}</div>
                    <div className="col-start-4 font-semibold col-span-1 ...">Chất lượng :</div>
                    <div className="col-start-5 text-left col-span-2 ..."> {reqData?.rank}</div>
                </div>
                <div
                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Thương hiệu :</div>
                    <div className="col-start-2 text-left col-span-2 ">{reqData?.brand}</div>
                    <div className="col-start-4 font-semibold col-span-1 ">Tình trạng :</div>
                    <div className="col-start-5 text-left col-span-2 "> {reqData?.is_used}</div>
                </div>
                <div
                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Giá khởi điểm :</div>
                    <div className="col-start-2 text-left col-span-2 "> {formatMoney(reqData?.reserve_price)} VND
                    </div>
                    <div className="col-start-4 font-semibold col-span-1 ...">Giá bán trực tiếp :</div>
                    <div className="col-start-5 text-left col-span-2 ">{formatMoney(reqData?.sale_price)} VND
                    </div>
                </div>
                <div
                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Bước giá :</div>
                    <div className="col-start-2 text-left col-span-2 "> {formatMoney(reqData?.step_price)} VND</div>
                    <div className="col-start-4 font-semibold col-span-1 ">Phí vận chuyển :</div>
                    <div className="col-start-5 text-left col-span-2 ">{formatMoney(reqData?.shipping_fee)} VND
                    </div>
                </div>
                <div
                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Trả hàng :</div>
                    <div className="col-start-2 text-left col-span-2 ">{reqData?.can_return}</div>
                    <div className="col-start-4 font-semibold col-span-1 ">Nơi gửi hàng :</div>
                    <div className="col-start-5 text-left col-span-2 "> {reqData?.delivery_from}</div>
                </div>
                <div
                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Hình ảnh sản phẩm :</div>
                    <div className="col-start-2 text-left col-span-5 ">
                        {reqData.main_image &&
                            <>
                                <div className="grid grid-cols-6 text-left ">
                                    <Image.PreviewGroup
                                        preview={{
                                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                        }}
                                    >
                                        <div className="font-normal col-span-1 ">
                                            <Image height={150} width={150}
                                                   src={reqData.main_image}/>
                                        </div>
                                    </Image.PreviewGroup>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Hình ảnh liên quan :</div>
                    <div className="col-start-2 text-left col-span-5 ">
                        {
                            reqData.image_list &&
                            <>
                                <div className="grid grid-cols-6 text-left ">
                                    <Image.PreviewGroup
                                        preview={{
                                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                        }}>
                                        {reqData?.image_list.map((imageUrl, index) => (
                                            <>
                                                <div className="font-normal col-span-1">
                                                    <Image key={index} height={150} width={150}
                                                           src={imageUrl}/>
                                                </div>
                                            </>
                                        ))}
                                    </Image.PreviewGroup>
                                </div>
                            </>
                        }
                    </div>
                </div>

                <div
                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                    <div className="col-start-1 font-semibold col-span-1 ">Mô tả sản phẩm :</div>
                    <div className="col-start-2 text-left col-span-5 " style={{ whiteSpace: 'pre-line' }}>{reqData?.description}</div>
                </div>
            </div>

            <div className="grid grid-cols-3 bg-white pt-8 gap-4 m-10 ">

                <div className="text-sm text-left font-light text-neutral-600 mx-6 relative ">
                    <div
                        className="text-sm font-semibold mr-10 bg-amber-200 left-0 h-8 w-44 bottom-5 p-1 px-4 absolute">
                        {reqData?.updatedAt}
                    </div>
                    {
                        (reqData.status !== 10 && reqData.status !== 11) && <>
                        <div className="text-base font-semibold text-neutral-600 mx-6">
                                Thông tin giao hàng
                            </div>
                            <div className="flex-col mt-4 mx-6 font-normal ">
                                <div
                                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 py-2 ">
                                    <div className="col-start-1 font-semibold col-span-2 ">Người nhận</div>
                                    <div className="col-start-3 text-left col-span-4 ">
                                        {reqData?.deliData?.name}
                                    </div>
                                </div>
                                <div
                                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 py-2 ">
                                    <div className="col-start-1 font-semibold col-span-2 ">Số điện thoại
                                    </div>
                                    <div className="col-start-3 text-left col-span-4 ">
                                        {reqData?.deliData?.phone}
                                    </div>
                                </div>
                                <div
                                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 py-2 ">
                                    <div className="col-start-1 font-semibold col-span-2 ">Địa chỉ</div>
                                    <div className="col-start-3 text-left col-span-4 ">
                                        {reqData?.deliData?.address}
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>


                <div className="col-span-2 border-l border-gray-300 relative">
                    <div
                        className="text-base font-semibold mr-10 bg-amber-300 right-0 p-1 px-4 absolute">
                        {billChangeStatus(reqData.status)}
                    </div>
                    <div className="mx-3 ">
                        <div className="text-base font-semibold text-neutral-600 mb-4 text-left">
                            Thông tin đấu giá sản phẩm
                        </div>
                        <div
                            className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 py-2 ">
                            <div className="col-start-1 font-semibold col-span-1 ">Hình thức</div>
                            <div
                                className="col-start-2 text-left col-span-2 ">{reqData?.type_of_auction }</div>
                        </div>
                        <div
                            className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 py-2 ">
                            <div className="col-start-1 font-semibold col-span-1 "> Bắt đầu</div>
                            <div
                                className="col-start-2 text-left col-span-2 ">{reqData?.start_time}</div>
                            <div className="col-start-4 font-semibold col-span-1 "> Kết thúc
                            </div>
                            <div
                                className="col-start-5 text-left col-span-2 ...">{reqData.finish_time}</div>
                        </div>
                        {
                            reqData.status !== 10 &&
                            <>
                                <div
                                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 py-2 ">
                                    <div className="col-start-1 font-semibold col-span-1 ">Người trúng thầu
                                    </div>
                                    <div
                                        className="col-start-2 text-left col-span-2 ">  {reqData?.winner?.name}</div>
                                    <div className="col-start-4 font-semibold col-span-1 ...">Số điện thoại
                                    </div>
                                    <div className="col-start-5 text-left col-span-2 ...">
                                        {reqData?.winner?.phone}
                                    </div>
                                </div>

                                <div
                                    className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4  border-b-2  py-2 ">
                                    <div className="col-end-5 pl-24    font-semibold col-span-2 ">Thời
                                        gian trúng thầu
                                    </div>
                                    <div
                                        className="pl-3 text-left col-span-3 ">{reqData?.victory_time}</div>
                                </div>
                            </>
                        }
                    </div>
                    {
                        reqData.status !== 10 && <>

                            <div className="grid grid-cols-3 text-sm mt-7">
                                <div className="col-span-2 border-r border-gray-300 text-right pl-6 ">
                                    <div className="border-b border-gray-200 "></div>
                                    <div className="border-b border-gray-200 p-3 font-semibold">
                                        Giá khởi điểm
                                    </div>
                                    <div className="border-b border-gray-200 p-3 font-semibold">
                                        Giá thắng
                                    </div>
                                    <div className="border-b border-gray-200 p-3 font-semibold">
                                        Phí vận chuyển
                                    </div>
                                    <div className="border-b border-gray-200 p-4 font-semibold">
                                        Tổng tiền
                                    </div>
                                </div>
                                <div className="col-1 text-right mr-6">
                                    <div className="border-b bor        der-gray-200 "></div>
                                    <div className="border-b border-gray-200  p-3">
                                        {formatMoney(reqData?.reserve_price)}đ
                                    </div>
                                    <div className="border-b border-gray-200 p-3">
                                        {formatMoney(reqData?.final_price)}đ
                                    </div>
                                    <div className="border-b border-gray-200 p-3">
                                        {formatMoney(reqData?.shipping_fee)}đ
                                    </div>
                                    <div
                                        className="border-b border-gray-200  text-gray-600 font-bold p-4">
                                        {formatMoney(reqData?.final_price + reqData?.shipping_fee)}đ
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                </div>

            </div>
            {(reqData.status === 11) && (
                <div className="bg-white mx-10 pb-4">
                    <div className="flex justify-between bg-white m-2.5 items-center px-2">
                        <div className="text-left text-sm font-medium pt-5">
                            Lí do hủy
                        </div>
                    </div>
                    <div className="items-center gap-6 font-medium my-8 mx-8 px-1 text-sm space-y-6 ">
                        <div className="grid grid-cols-6 text-left">
                            <div> Thời gian hủy :</div>
                            <div className="font-normal  col-span-2">
                                {reqData.updatedAt}
                            </div>
                        </div>
                        <div className="grid grid-cols-6 text-left">
                            <div> Lí do :</div>
                            <div className="font-normal  col-span-2">
                                Người dùng không điền thông tin nhận hàng
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default NewProductInfor
