import {convertWinStatus, formatDateTime} from "../../Utils/constant.js";
import ProductInfor from "../../Components/ProductInfor/productInfor.jsx";
import AdminBiddingInfo from "../../Components/ProductInfor/adminBiddingInfor.jsx";
import useAdminReqDetail from "./useReqDetail.jsx";
import {Button} from "@material-tailwind/react";
import {useNavigate, useParams} from "react-router-dom";
import {rejectRequest} from "../../Services/requestService.jsx";
import {toast} from "react-toastify";
import {useState} from "react";
import {Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import {Input, Form,Spin } from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";

const AdminRequestDetail = () => {
    const {reqData, isLoading, isSuccess,isError} = useAdminReqDetail();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const {id} = useParams()
    const [rejectData, setRejectData] = useState({req_id:id});

    const handleOpen = () => setOpen(!open);

    const handleRejectData = (key, value) => {
        setRejectData({...rejectData, [key]: value});
        console.log({...rejectData,reject_time:formatDateTime(new Date())})
    };
    const handleReject = async () => {
        try {
            const res = await rejectRequest({...rejectData,reject_time:formatDateTime(new Date())})
            handleOpen()
            navigate("/admin/resultSuccess", { state: 13});

        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    if (isLoading) {
        return (
            <Spin  tip="Loading" size="large">

            </Spin>
       )
    }
    if(isError){
        return navigate('/404')
    }
    return (
        <LayOut>
                <div className="home-right pb-10 bg-white">
                    {isSuccess && (
                        <>
                            <ProductInfor data={reqData}/>
                            {(reqData.status !== undefined && reqData.status !== 1 && reqData.status !== 13 ) ? (
                                <AdminBiddingInfo data={reqData}/>
                            ) : (
                                <></>
                            )}

                            {
                                reqData.status === 1 &&
                                <>
                                    <div className="flex m-6 gap-5 justify-end mr-10">
                                        <Button
                                            onClick={handleOpen}
                                            className="p-2 px-6 py-2 right-0 bg-red-500 rounded text-white border-gray-400 border-none text-sm  font-medium focus:outline-0">
                                            Từ chối yêu cầu
                                        </Button>

                                        <Button
                                            onClick={() => navigate(`/admin/reqTracking/requestDetail/approveRequest/${reqData?.request_id}`,{ state: reqData.status})}
                                            className="p-2 px-6 py-2 right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                            Duyệt yêu cầu
                                        </Button>
                                    </div>
                                </>
                            }

                            <Dialog open={open} onClose={handleOpen}  maxWidth="md">
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
                                                            onChange={(e) => handleRejectData('reason',e.target.value)}
                                                            style={{width: 400,}}
                                                            maxLength={100}/>
                                                    </Form.Item>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex m-6 gap-5 justify-end mr-10">
                                            <Button
                                                onClick={handleOpen}
                                                className="p-2 px-6 py-2 right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm font-semibold focus:outline-0">
                                                Hủy
                                            </Button>

                                            <Button
                                                onClick={handleReject}
                                                className="p-2 px-6 py-2 right-0 bg-red-500  rounded text-white border-gray-400 border-none text-sm  font-medium focus:outline-0">
                                                Từ chối
                                            </Button>
                                        </div>

                                    </Stack>
                                </DialogContent>
                            </Dialog>

                            {isSuccess &&
                                (reqData.status === 5 || reqData.status === 6)
                                && (
                                    <>
                                        <div className="flex justify-between m-2.5 items-center px-2">
                                            <div className="text-left text-sm font-semibold ">
                                                Thông tin giao hàng
                                            </div>
                                        </div>
                                        <div className="items-center font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                                            <div className="grid grid-cols-6 text-left">
                                                <div> Người nhận :</div>
                                                <div className="font-normal col-span-2">
                                                    {reqData?.deliData?.receiver}
                                                </div>
                                                <div> Phone Number :</div>
                                                <div className="font-normal col-span-2">
                                                    {reqData?.deliData?.phone_receiver}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-6 text-left">
                                                <div> Địa chỉ :</div>
                                                <div className="font-normal col-span-5">
                                                    {reqData?.deliData?.address}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-6 text-left">
                                                <div> Ghi chú :</div>
                                                <div className="font-normal col-span-5">
                                                    {reqData?.deliData?.note}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-6 text-left">
                                                <div> Trạng thái đơn hiện tại :</div>
                                                <div className="font-normal col-span-2 text-amber-400">
                                                    {convertWinStatus(reqData?.deliData?.status)}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                            {reqData.status === 11 && (
                                <>
                                    <div className="flex justify-between m-2.5 items-center px-2">
                                        <div className="text-left text-base font-medium ">
                                            Lí do hủy
                                        </div>
                                    </div>
                                    <div className="items-center gap-6 font-medium my-8 mx-8 px-1 text-sm space-y-6 ">
                                        <div className="grid grid-cols-6 text-left">
                                            <div> Tác nhân :</div>
                                            <div className="font-normal col-span-2">
                                                Quản trị viên ? User
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-6 text-left">
                                            <div> Lí do :</div>
                                            <div className="font-normal  col-span-2">
                                                Người dùng không điền thông tin nhận hàng
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {reqData.status === 13 && (
                                <>
                                    <div className="flex justify-between m-2.5 items-center px-2">
                                        <div className="text-left text-base font-medium ">
                                            Lí do từ chối yêu cầu đấu giá sản phẩm
                                        </div>
                                    </div>
                                    <div className="items-center gap-6 font-medium my-8 mx-8 px-1 text-sm space-y-6 ">
                                        <div className="grid grid-cols-6 text-left">
                                            <div> Thời gian từ chối :</div>
                                            <div className="font-normal  col-span-2">
                                                {reqData?.reject_time}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 text-left">
                                            <div> Từ chối bởi :</div>
                                            <div className="font-normal col-span-2">
                                                Quản trị viên
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-6 text-left">
                                            <div> Lí do :</div>
                                            <div className="font-normal  col-span-2">
                                                {reqData?.reason}
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
export default AdminRequestDetail;
