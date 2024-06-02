import {adminChangeStateRequestFromUser, formatDateTime} from "../../Utils/constant.js";
import ProductInfor from "../../Components/AdminProductInfor/productInfor.jsx";
import AdminBiddingInfo from "../../Components/AdminProductInfor/adminBiddingInfor.jsx";
import useAdminReqDetail from "./useReqDetail.jsx";
import {Button} from "@material-tailwind/react";
import {useNavigate, useParams} from "react-router-dom";
import {cancelProduct, rejectRequest} from "../../Services/requestService.jsx";
import {toast} from "react-toastify";
import {useState} from "react";
import {Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import { Spin, Tabs} from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";
import UpdatePopup from "../../Components/UpdatePopup/UpdatePopup.jsx";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AdminDeliveryInfor from "../../Components/AdminProductInfor/adminDeliveryInfor.jsx";
const TabPane = Tabs.TabPane

const AdminRequestDetail = () => {
    const {reqData, isLoading, isSuccess,isError} = useAdminReqDetail();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openCancel, setOpenCancel] = useState(false);
    const {id} = useParams()
    const [rejectData, setRejectData] = useState({req_id:id});
    const stateStr =  adminChangeStateRequestFromUser(reqData?.status);
    const handleOpen = () => setOpen(!open);

    const handleOpenCancel = () => setOpenCancel(!openCancel);

    const handleRejectData = (key, value) => {
        setRejectData({...rejectData, [key]: value});

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
                            <div className="flex p-4 gap-2 items-center px-2 justify-between">
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
                                    <div className="text-left text-base ">Danh Sách {stateStr} </div>
                                    <ArrowForwardIosOutlinedIcon
                                        sx={{fontSize: 18}}
                                        fontSize="small"
                                        color="gray"
                                    ></ArrowForwardIosOutlinedIcon>
                                    <div className="text-base">Chi tiết</div>
                                </div>
                            </div>
                            <div className="border-b border-gray-400  mx-5"></div>
                            <div>
                                <Tabs defaultActiveKey="1" className="px-8">
                                    <TabPane tab="Thông tin sản phẩm" key="1">
                                        <ProductInfor data={reqData}/>
                                    </TabPane>

                                    {(reqData.status !== undefined && reqData.status !== 13) ? (
                                        <TabPane tab="Thông tin đấu giá" key="2">
                                            <AdminBiddingInfo data={reqData}/>
                                        </TabPane>
                                    ) : (
                                        <></>
                                    )}
                                    {(reqData.status === 7  || reqData.status === 5 || reqData.status === 6  || reqData.status === 8 || reqData.status === 9 || reqData.status === 14 || reqData.status === 15) && (
                                        <TabPane tab="Thông tin giao hàng" key="3">
                                            <AdminDeliveryInfor data={reqData} />
                                        </TabPane>
                                    )}

                                    {/*lí do từ chôi*/}
                                    {reqData.status === 13 && (
                                        <>
                                            <TabPane tab="Từ chối yêu cầu" key="4">
                                                <div
                                                    className="items-center font-medium text-sm gap-6  my-5 px-1 lg:space-y-5  min-[225px]:space-y-3">

                                                    <div className="grid grid-cols-6 text-left">
                                                        <div className="min-[100px]:col-span-6 md:col-span-1"> Thời gian
                                                            từ chối
                                                        </div>
                                                        <div
                                                            className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                                                            {reqData?.reject_time}</div>
                                                    </div>
                                                    <div className="grid grid-cols-6 text-left">
                                                        <div className="min-[100px]:col-span-6 md:col-span-1"> Từ chối
                                                            bởi
                                                        </div>
                                                        <div
                                                            className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                                                            Quản trị viên
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-6 text-left">
                                                        <div className="min-[100px]:col-span-6 md:col-span-1"> Lí do
                                                        </div>
                                                        <div
                                                            className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                                                            {reqData?.reason}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPane>
                                        </>
                                    )}
                                    {/*thông tin hủy*/}
                                    {(reqData.status === 11) && (
                                        <>
                                            <TabPane tab="Thông tin hủy" key="5">
                                                <div
                                                    className="items-center font-medium text-sm gap-6  my-5 px-1 lg:space-y-5  min-[225px]:space-y-3">

                                                    <div className="grid grid-cols-6 text-left">
                                                        <div className="min-[100px]:col-span-6 md:col-span-1">
                                                            Thời gian hủy
                                                        </div>
                                                        <div
                                                            className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                                                            đang fix
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-6 text-left">
                                                        <div className="min-[100px]:col-span-6 md:col-span-1"> Tác nhân
                                                        </div>
                                                        <div
                                                            className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                                                            Quản trị viên ? User
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-6 text-left">
                                                        <div className="min-[100px]:col-span-6 md:col-span-1"> Lí do
                                                        </div>
                                                        <div
                                                            className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                                                            Người dùng không điền thông tin nhận hàng
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPane>
                                        </>
                                    )}

                                </Tabs>
                            </div>

                            {
                                (reqData.status === 1 && reqData.admin_belong === 1) &&
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

                            {/*Hủy yc đấu giá của admin */}
                            <Dialog open={openCancel} onClose={handleOpenCancel} maxWidth="md">
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

                            {(reqData.status !== undefined &&
                                [5, 6].includes(reqData?.status) && reqData.admin_belong === 1) ? (
                                <UpdatePopup state={reqData.status}/>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </div>
        </LayOut>
    );
};
export default AdminRequestDetail;
