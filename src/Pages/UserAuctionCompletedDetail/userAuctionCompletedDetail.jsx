import {billChangeStatus, checkStatus, formatDateTime} from "../../Utils/constant.js";
import {useNavigate} from "react-router-dom";
import { Spin, Image} from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";
import useUserAuctionCompletedDetail from "./useUserAuctionCompletedDetail.jsx";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import NewProductInfor from "../../Components/DetailComponent/newProductInfor.jsx";

const UserAuctionCompletedDetail = () => {
    const {reqData, isLoading, isSuccess, isError} = useUserAuctionCompletedDetail();
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <LayOut>
                <Spin className="text-center mt-60" tip="Loading" size="large">
                </Spin>
            </LayOut>
        )
    }
    if (isError || !checkStatus(reqData.status) ) {
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

                        <NewProductInfor reqData={reqData}></NewProductInfor>

                        {(reqData.status === 14 || reqData.status === 15) &&
                            <>
                                <div className="grid grid-cols-3 bg-white pt-8 gap-4 m-10 relative">
                                    <div
                                        className="text-base font-semibold mr-10 bg-amber-300 -right-2 top-4 p-1 px-4 absolute">
                                        {billChangeStatus(reqData.status)}
                                    </div>
                                    <div className="col-span-2  relative">
                                        <div className="mx-3 pb-2">
                                            <div
                                                className="text-base font-semibold text-neutral-600 ml-3 mb-3 text-left">
                                                Thông tin trả hàng
                                            </div>
                                            <div className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-3 p-3 ">
                                                <div className="col-start-1 text-left col-span-6 ">
                                                    {
                                                        reqData.deliData.return_image_list &&
                                                        <>
                                                            <div className="grid grid-cols-4 text-left ">
                                                                <Image.PreviewGroup
                                                                    preview={{
                                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                                    }}>
                                                                    {reqData?.deliData?.return_image_list.map((imageUrl, index) => (
                                                                        <>
                                                                            <div className="font-normal col-span-1">
                                                                                <Image key={index} height={150}
                                                                                       width={150}
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
                                        </div>
                                    </div>

                                    <div
                                        className="text-sm text-left font-light border-l-2  text-neutral-600 mx-6 relative ">
                                        <div className="flex-col mt-6 mx-6 font-normal ">
                                            <div
                                                className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 py-2 border-b-2 pb-4">
                                                <div className="col-start-1 font-semibold col-span-6 ">Thời gian yêu cầu
                                                    trả
                                                    hàng
                                                </div>
                                                <div className="col-start-1 text-left col-span-6 ">
                                                    {formatDateTime(reqData?.deliData?.return_time)}
                                                </div>
                                            </div>
                                            <div
                                                className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 py-2 border-b-2 pb-4">
                                                <div className="col-start-1 font-semibold col-span-6 "> Lí do trả hàng
                                                </div>
                                                <div className="col-start-1 text-left col-span-6 ">
                                                    {reqData?.deliData?.return_reason}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>}

                    </>
                )}
            </div>
        </LayOut>
    );
};
export default UserAuctionCompletedDetail;
