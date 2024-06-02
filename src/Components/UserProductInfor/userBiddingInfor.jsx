import {formatDateTime, formatMoney} from "../../Utils/constant.js";
import LayOut from "../Layout/layout.jsx";
import {Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import {Form, Input} from "antd";
import {useState} from "react";
import {rejectRequest} from "../../Services/requestService.jsx";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";

const UserBiddingInfo = ({ data }) => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [rejectData, setRejectData] = useState({req_id:id});
    const [open, setOpen] = useState(false);
    const [openCancel, setOpenCancel] = useState(false);
    const handleOpen = () => setOpen(!open);
    const handleRejectData = (key, value) => {
        setRejectData({...rejectData, [key]: value});
        console.log({...rejectData,reject_time:formatDateTime(new Date())})
    };

    const handleReject = async () => {
        try {
            const res = await rejectRequest({...rejectData,reject_time:formatDateTime(new Date())})
            handleOpen()
            navigate("/resultSuccess", { state: 13});

        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    const handelApprove = (reqData) => {
        navigate(`/reqTracking/requestDetail/approveRequest/${data?.request_id}`, {
            state: {
                status: data.status,
                auction_live: data.auction_live
            }
        });
    };
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
                            {data?.type_of_auction === 1 ? "Đấu giá tăng" : "Đấu giá giảm "}
                        </div>
                    </div>
                </div>

                {
                    data?.status !== 1 &&
                    <>
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
                    </>
                }

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


                <div className="grid grid-cols-6 text-left">
                    {
                        ((data?.status === 2 || data?.status === 3 || data?.status === 11) && (data?.admin_belong !== 1)) &&
                        <>
                            <div> Thời gian duyệt :</div>
                            <div className="font-normal  col-span-2">
                                {data?.approved_at}
                            </div>
                        </>
                    }
                </div>


                {data.status !== undefined &&
                    data.status !== 1 &&
                    data.status !== 2 &&
                    data.status !== 3 &&
                    data.status !== 10 &&
                    data.status !== 11 && (
                        <>
                            <div className="grid grid-cols-6 text-left">
                                <div> Giá trúng thầu :</div>
                                <div className="font-normal  col-span-2">
                                    {data?.final_price} VND
                                </div>
                                <di> Thời gian trúng thầu :</di>
                                <div className="font-normal col-span-2">
                                    {data?.victory_time}{" "}
                                </div>
                            </div>

                            <div className="grid grid-cols-6 text-left">
                                <div> Tổng tiền :</div>
                                <div className="font-normal col-span-2">
                                    {" "}
                                    {data?.final_price + data?.shipping_fee} VND
                                </div>
                                <div> Tổng tiền thực nhận :</div>
                                <div className="font-normal  col-span-2">
                                    {" "}
                                    {(
                                        (data?.final_price + data?.shipping_fee) *
                                        0.9
                                    ).toLocaleString() + " VND"}
                                </div>
                            </div>

                            <div className="grid grid-cols-6 text-left">
                                <div> Người trúng thầu :</div>
                                <div className="font-normal col-span-2">
                                    {data?.deliData?.name}
                                </div>
                                <div> Phone Number :</div>
                                <div className="font-normal col-span-2">
                                    {data?.deliData?.phone}
                                </div>
                            </div>
                        </>
                    )}
            </div>
            {
                data.status === 1 &&
                <>
                    <div className="flex m-6 gap-5 justify-end mr-10">
                        <button
                            onClick={handleOpen}
                            className="p-2 px-6 py-2 right-0 bg-white rounded text-gray-800 border-2   border-gray-800  hover:border-gray-800  text-sm  font-medium focus:outline-0">
                            Từ chối yêu cầu
                        </button>

                        <button
                            onClick={() => handelApprove(data)}
                            className="p-2 px-6 py-2 right-0 bg-gray-800 rounded text-white border-gray-800  border-none text-sm  font-semibold focus:outline-0">
                            Duyệt yêu cầu
                        </button>
                    </div>
                </>
            }
            {/*từ chối yc đấu giá*/}
            <Dialog open={open} onClose={handleOpen} maxWidth="md">
                <DialogTitle>
                    <div className="flex items-center justify-between">
                                    <span className="font-semibold text-sm">
                                        Từ chối yêu cầu đấu giá
                                    </span>
                        <div
                            onClick={handleOpen}
                            className="bg-gray-800 rounded cursor-pointer text-sm text-white hover:bg-neutral-600 border-none font-medium focus:outline-0"
                        >
                        </div>
                    </div>
                    <div className="border-b mt-2  border-gray-300"></div>
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={2} margin={1}>
                        <div
                            className="items-center font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                            <div className="flex pt-2   gap-6 text-right">
                                <div className="col-span-4">
                                    <Form.Item
                                        name="intro"
                                        label="Lí do"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Lí do từ chối',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea
                                            onChange={(e) => handleRejectData('reason', e.target.value)}
                                            style={{width: 400,}}
                                            maxLength={100}/>
                                    </Form.Item>
                                </div>
                            </div>

                        </div>
                        <div className="flex m-6 gap-5 justify-end mr-10">
                            <button
                                onClick={handleOpen}
                                className="p-2 px-6 py-2 right-0 bg-white rounded text-gray-800 border-2   border-gray-800  hover:border-gray-800  text-sm  font-medium focus:outline-0">
                                Hủy
                            </button>

                            <button
                                onClick={handleReject}
                                className="p-2 px-6 py-2 right-0 bg-gray-800 rounded text-white border-gray-800  border-none text-sm  font-semibold focus:outline-0">
                                Từ chối
                            </button>
                        </div>

                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default UserBiddingInfo;
