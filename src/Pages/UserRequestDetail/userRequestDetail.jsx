import {adminChangeStateRequestFromUser, convertWinStatus, formatDateTime} from "../../Utils/constant.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import { Spin, Tabs} from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";
import UpdatePopup from "../../Components/UpdatePopup/UpdatePopup.jsx";
import useUserReqDetail from "./useUserRequestDetail.jsx";
import UserProductInfor from "../../Components/UserProductInfor/userProductInfor.jsx";
import UserBiddingInfo from "../../Components/UserProductInfor/userBiddingInfor.jsx";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import UserSellerInfor from "../../Components/UserProductInfor/userSellerInfor.jsx";
const TabPane = Tabs.TabPane

const UserRequestDetail = () => {
    const {reqData, isLoading, isSuccess,isError} = useUserReqDetail();
    const navigate = useNavigate();
    const [openCancel, setOpenCancel] = useState(false);

    const stateStr =  adminChangeStateRequestFromUser(reqData?.status);


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
                                        <UserProductInfor data={reqData}/>
                                    </TabPane>
                                    <TabPane tab="Thông tin yêu cầu" key="2">
                                        <UserSellerInfor data={reqData}/>
                                    </TabPane>
                                    {(reqData.status !== undefined  && reqData.status !== 13) ? (
                                            <TabPane tab="Thông tin đấu giá" key="3">
                                                <UserBiddingInfo data={reqData}/>
                                            </TabPane>
                                    ) : (
                                        <></>
                                    )}

                                    {/*lí do từ chôi*/}
                                    {reqData.status === 13 && (
                                        <>
                                            <TabPane tab="Từ chối yêu cầu" key="4">
                                                <div
                                                    className="items-center font-medium text-sm gap-6  my-5 px-1 lg:space-y-5  min-[225px]:space-y-3">

                                                    <div className="grid grid-cols-6 text-left">
                                                        <div className="min-[100px]:col-span-6 md:col-span-1"> Thời gian từ chối
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
                                                            {formatDateTime(reqData.cancel_time)}
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
                                                            {reqData?.return_reason}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPane>
                                        </>
                                    )}


                                </Tabs>
                            </div>

                            {/*Thông tin giao hàng của người win ấu giá , ng bán vào xác nhận , của phần admin*/}
                            {isSuccess &&
                                (reqData.status === 5 || reqData.status === 6 || reqData.status === 7 || reqData.status === 8 || reqData.status === 9)
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




                        </>
                    )}
                </div>
        </LayOut>
    );
};
export default UserRequestDetail;
