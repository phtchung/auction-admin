import {billChangeStatus} from "../../Utils/constant.js";
import {useNavigate} from "react-router-dom";
import { Spin, Image} from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import NewProductInfor from "../../Components/DetailComponent/newProductInfor.jsx";
import useUserAuctionCompletedDetail from "../UserAuctionCompletedDetail/useUserAuctionCompletedDetail.jsx";
import {Button} from "@material-tailwind/react";

const ReturnProductUserDetail = () => {
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
                                <div className="text-left text-base ">Yêu cầu trả hàng</div>
                                <ArrowForwardIosOutlinedIcon
                                    sx={{fontSize: 18}}
                                    fontSize="small"
                                    color="gray"
                                ></ArrowForwardIosOutlinedIcon>
                                <div className="text-base">Chi tiết</div>
                            </div>
                        </div>

                        <NewProductInfor reqData={reqData}></NewProductInfor>
                        <div className="flex m-6 gap-5 justify-end mr-10">
                            <Button
                                className="p-2 px-6 py-2 right-0 bg-white rounded text-red-500 border-gray-400 border-red-500 hover:border-red-500 text-sm  font-medium focus:outline-0">
                                Từ chối trả hàng
                            </Button>

                            <Button

                                className="p-2 px-6 py-2 right-0 bg-red-500 rounded text-white border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                Đồng ý trả hàng
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </LayOut>
    );
};
export default ReturnProductUserDetail;
