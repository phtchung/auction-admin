import {billChangeStatus} from "../../Utils/constant.js";
import {useNavigate} from "react-router-dom";
import { Spin, Image} from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import useAdminAuctionCompletedDetail from "./useAdminAuctionCompletedDetail.jsx";
import newProductInfor from "../../Components/DetailComponent/newProductInfor.jsx";
import NewProductInfor from "../../Components/DetailComponent/newProductInfor.jsx";

const UserAuctionCompletedDetail = () => {
    const {reqData, isLoading, isSuccess, isError} = useAdminAuctionCompletedDetail();
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


                    </>
                )}
            </div>
        </LayOut>
    );
};
export default UserAuctionCompletedDetail;
