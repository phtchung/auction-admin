import {convertWinStatus, formatDateTime} from "../../Utils/constant.js";
import {Button} from "@material-tailwind/react";
import {useNavigate, useParams} from "react-router-dom";
import {cancelProduct, rejectRequest} from "../../Services/requestService.jsx";
import {toast} from "react-toastify";
import {useState} from "react";
import {Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import {Input, Form,Spin } from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";
import UpdatePopup from "../../Components/UpdatePopup/UpdatePopup.jsx";
import useUserReqDetail from "./useUserRequestDetail.jsx";
import UserProductInfor from "../../Components/UserProductInfor/userProductInfor.jsx";
import UserBiddingInfo from "../../Components/UserProductInfor/userBiddingInfor.jsx";

const UserRequestDetail = () => {
    const {reqData, isLoading, isSuccess,isError} = useUserReqDetail();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openCancel, setOpenCancel] = useState(false);
    const {id} = useParams()
    const [rejectData, setRejectData] = useState({req_id:id});

    const handleOpen = () => setOpen(!open);

    const handleOpenCancel = () => setOpenCancel(!openCancel);

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

    const handleCancel = async () => {
        try {
            const res = await cancelProduct({...rejectData,reject_time:formatDateTime(new Date())})
            handleOpen()
            navigate("/resultSuccess", { state: 13});

        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    if (isLoading) {
        return (
            <LayOut >
                <Spin className="text-center mt-60"  tip="Loading" size="large">
                </Spin>
            </LayOut>

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
                            <UserProductInfor data={reqData}/>
                            {(reqData.status !== undefined && reqData.status !== 1 && reqData.status !== 13 ) ? (
                                <UserBiddingInfo data={reqData}/>
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
                                            onClick={() => navigate(`/reqTracking/requestDetail/approveRequest/${reqData?.request_id}`,{ state: reqData.status})}
                                            className="p-2 px-6 py-2 right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                            Duyệt yêu cầu
                                        </Button>
                                    </div>
                                </>
                            }

                            {
                                (reqData.status === 1 && reqData.admin_belong === 1)  &&
                                <>
                                    <div className="flex m-6 gap-5 justify-start mr-10">
                                        <Button
                                            onClick={handleOpenCancel}
                                            className="p-2 px-6 py-2 right-0 bg-red-500 rounded text-white border-gray-400 border-none text-sm  font-medium focus:outline-0">
                                            Hủy đấu giá
                                        </Button>

                                    </div>
                                </>
                            }
                            {/*từ chối yc đấu giá*/}
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

                            {/*Hủy yc đấu giá của admin */}
                            <Dialog open={openCancel} onClose={handleOpenCancel}  maxWidth="md">
                                <DialogTitle>
                                    <div className="flex items-center justify-between">
                                    <span className="font-semibold text-sm">
                                        Hủy đấu giá sản phẩm
                                    </span>
                                        <div
                                            onClick={handleOpenCancel}
                                            className="bg-gray-800 rounded cursor-pointer text-sm text-white hover:bg-neutral-600 border-none font-medium focus:outline-0"
                                        >
                                        </div>
                                    </div>
                                    <div className="border-b mt-2  border-gray-300"></div>
                                </DialogTitle>
                                <DialogContent>
                                    <Stack spacing={2} margin={1}>

                                        <div className="flex m-6 gap-5 justify-end mr-10">
                                            <Button
                                                onClick={handleOpenCancel}
                                                className="p-2 px-6 py-2 right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm font-semibold focus:outline-0">
                                                Không
                                            </Button>

                                            <Button
                                                onClick={handleCancel}
                                                className="p-2 px-6 py-2 right-0 bg-red-500  rounded text-white border-gray-400 border-none text-sm  font-medium focus:outline-0">
                                                Chắc chắn
                                            </Button>
                                        </div>

                                    </Stack>
                                </DialogContent>
                            </Dialog>


                            {/*Thông tin giao hàng của người win ấu giá , ng bán vào xác nhận */}
                            {isSuccess &&
                                (reqData.status === 5 || reqData.status === 6 || reqData.status === 7 || reqData.status === 8)
                                && (
                                    <>
                                        <div className="flex justify-between m-2.5 items-center px-2">
                                            <div className="text-left text-base font-semibold pt-8">
                                                Thông tin giao hàng
                                            </div>
                                        </div>
                                        <div
                                            className="items-center font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                                            <div className="grid grid-cols-6 text-left">
                                                <div> Người nhận :</div>
                                                <div className="font-normal col-span-2">
                                                    {reqData?.deliData?.name}
                                                </div>
                                                <div> Phone Number :</div>
                                                <div className="font-normal col-span-2">
                                                    {reqData?.deliData?.phone}
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
                                                <div> Thời gian nhận :</div>
                                                <div className="font-normal col-span-5">
                                                    {reqData?.completed_time}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-6 text-left">
                                                <div> Trạng thái đơn hiện tại :</div>
                                                <div className="font-normal col-span-2 text-amber-400">
                                                    {convertWinStatus(reqData?.status)}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}


                            {(reqData.status !== undefined &&
                                [5, 6].includes(reqData?.status) && reqData.admin_belong === 1) ? (
                                <UpdatePopup state={reqData.status}/>
                            ) : (
                                <></>
                            )}


                            {(reqData.status === 11 )&& (
                                <>
                                    <div className="flex justify-between m-2.5 items-center px-2">
                                        <div className="text-left text-sm font-medium pt-5">
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
                                        <div className="text-left text-sm pt-5 font-medium ">
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
                            )
                            }
                        </>
                    )}
                </div>
        </LayOut>
    );
};
export default UserRequestDetail;
