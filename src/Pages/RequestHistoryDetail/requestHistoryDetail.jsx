import {billChangeStatus, convertWinStatus, formatDateTime, rqChangeStatus} from "../../Utils/constant.js";
import {useNavigate, useParams} from "react-router-dom";
import {cancelProduct, rejectRequest} from "../../Services/requestService.jsx";
import {toast} from "react-toastify";
import {useState} from "react";
import {Input, Form, Spin, Image} from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import useReqHistoryDetail from "./useReqHistoryDetail.jsx";

const RequestHistoryDetail = () => {
    const {reqData, isLoading, isSuccess, isError} = useReqHistoryDetail();
    console.log(reqData)
    const navigate = useNavigate();
    const {id} = useParams()

    if (isLoading) {
        return (
            <LayOut>
                <Spin className="text-center mt-60" tip="Loading" size="large">
                </Spin>
            </LayOut>
        )
    }
    if (isError) {
        return navigate('/404')
    }
    return (
        <LayOut>
            <div className="home-right pb-4 ">
                {isSuccess && (
                    <>
                        <div className="flex p-4 gap-2 items-center px-2 justify-between bg-white">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() => navigate(-1)}
                            >
                                <ArrowBackIosOutlinedIcon
                                    sx={{fontSize: 20}}
                                    color="rgb(212,212,212)"
                                ></ArrowBackIosOutlinedIcon>
                                <div className="text-base"> Trở lại</div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="text-left text-base ">Danh Sách</div>
                                <ArrowForwardIosOutlinedIcon
                                    sx={{fontSize: 18}}
                                    fontSize="small"
                                    color="gray"
                                ></ArrowForwardIosOutlinedIcon>
                                <div className="text-base">Chi tiết</div>
                            </div>
                        </div>


                        <div className="m-10 font-sans font-normal bg-white mb-10">
                            {
                                reqData.status === 1 && <>
                                    <div
                                        className="text-base font-semibold mr-10 top-32 bg-amber-300 right-5 p-1 px-4 absolute">
                                        {rqChangeStatus(reqData.status)}
                                    </div>
                                </>
                            }
                            <div className="text-base font-semibold text-neutral-600 mb-4 mx-4 pt-3 text-left">
                                Thông tin sản phẩm
                            </div>
                            <div
                                className="grid  grid-rows-1 grid-cols-6 grid-flow-col gap-4  border-b-2 p-3 ">
                                <div className="col-start-1 font-semibold col-span-1 ">Mã yêu cầu :</div>
                                <div className="col-start-2  text-left col-span-2 ">{reqData?.request_id}</div>
                                <div className="col-start-4 font-semibold col-span-1 ...">Thời gian yêu cầu</div>
                                <div
                                    className="col-start-5 text-left col-span-2 ..."> {reqData.createdAt}</div>
                            </div>
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
                                    className="col-start-5 text-left col-span-2 ...">{reqData?.seller?.point }</div>
                            </div>
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
                                <div className="col-start-1 font-semibold col-span-1 ">Giá khởi điểm :</div>
                                <div className="col-start-2 text-left col-span-2 "> {reqData?.reserve_price} VND</div>
                                <div className="col-start-4 font-semibold col-span-1 ...">Giá bán trực tiếp :</div>
                                <div className="col-start-5 text-left col-span-2 ...">{reqData?.sale_price} VND</div>
                            </div>
                            <div
                                className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 p-3 ">
                                <div className="col-start-1 font-semibold col-span-1 ">Bước nhảy giá :</div>
                                <div className="col-start-2 text-left col-span-2 "> {reqData?.step_price} VND</div>
                                <div className="col-start-4 font-semibold col-span-1 ...">Phí vận chuyển :</div>
                                <div className="col-start-5 text-left col-span-2 ...">{reqData?.shipping_fee} VND</div>
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
                                <div className="col-start-2 text-left col-span-5 ">{reqData?.description}</div>
                            </div>
                        </div>


                        {
                            (reqData.status === 2) &&
                            <>
                                <div className="grid grid-cols-3 bg-white pt-8 gap-4 m-10 ">
                                    <div className="col-span-3 border-l border-gray-300 relative">
                                        <div
                                            className="text-base font-semibold mr-10 bg-amber-300 right-0 p-1 px-4 absolute">
                                            {rqChangeStatus(reqData.status)}
                                        </div>
                                        <div className="mx-3 pb-2">
                                        <div className="text-base font-semibold text-neutral-600 mb-4 text-left">
                                                Thông tin đấu giá sản phẩm
                                            </div>
                                            <div
                                                className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 py-2 ">
                                                <div className="col-start-1 font-semibold col-span-1 ">Hình thức</div>
                                                <div
                                                    className="col-start-2 text-left col-span-2 ">{reqData?.type_of_auction === 1 ? "Đấu giá tăng" : "Đấu giá giảm "}</div>
                                                <div className="col-start-4 font-semibold col-span-1 ...">Thời gian
                                                    duyệt
                                                </div>
                                                <div
                                                    className="col-start-5 text-left col-span-2 ...">{reqData.approved_at}</div>
                                            </div>
                                            <div
                                                className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 py-2 ">
                                                <div className="col-start-1 font-semibold col-span-1 ">Thời gian bắt
                                                    đầu
                                                </div>
                                                <div
                                                    className="col-start-2 text-left col-span-2 ">{reqData?.start_time}</div>
                                                <div className="col-start-4 font-semibold col-span-1 ...">Thời gian kết
                                                    thúc
                                                </div>
                                                <div
                                                    className="col-start-5 text-left col-span-2 ...">{reqData.finish_time}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        }

                        {(reqData.status === 13) && (
                            <>
                                <div className="grid grid-cols-3 bg-white pt-8 gap-4 m-10 ">
                                    <div className="col-span-3  border-gray-300 relative">
                                        <div
                                            className="text-base font-semibold mr-10 bg-amber-300 right-0 p-1 px-4 absolute">
                                            {rqChangeStatus(reqData.status)}
                                        </div>
                                        <div className="mx-3 pb-2">
                                            <div className="text-base font-semibold text-neutral-600 mb-4 text-left">
                                                Lý do từ chối yêu cầu
                                            </div>
                                            <div
                                                className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 py-2 ">
                                                <div className="col-start-1 font-semibold col-span-1 ">Tác nhân </div>
                                                <div
                                                    className="col-start-2 text-left col-span-2 ">Quản trị viên</div>
                                                <div className="col-start-4 font-semibold col-span-1 ...">Thời gian
                                                    từ chối
                                                </div>
                                                <div
                                                    className="col-start-5 text-left col-span-2 ...">{reqData.reject_time}</div>
                                            </div>
                                            <div
                                                className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 border-b-2 py-2 ">
                                                <div className="col-start-1 font-semibold col-span-1 ">Lí do
                                                </div>
                                                <div
                                                    className="col-start-2 text-left col-span-5 ">{reqData.reason}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                    </>
                )}
            </div>
        </LayOut>
    );
};
export default RequestHistoryDetail;
