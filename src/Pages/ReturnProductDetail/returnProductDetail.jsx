import {useNavigate, useParams} from "react-router-dom";
import {Image, Spin} from 'antd';
import LayOut from "../../Components/Layout/layout.jsx";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import NewProductInfor from "../../Components/DetailComponent/newProductInfor.jsx";
import useUserAuctionCompletedDetail from "../UserAuctionCompletedDetail/useUserAuctionCompletedDetail.jsx";
import {Button} from "@material-tailwind/react";
import {Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import {useState} from "react";
import {toast} from "react-toastify";
import {acceptReturnProduct,denyReturnProduct} from "../../Services/requestService.jsx";
import {formatDateTime} from "../../Utils/constant.js";

const ReturnProductDetail = () => {
    const {reqData, isLoading, isSuccess, isError} = useUserAuctionCompletedDetail();
    const {id} = useParams()
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [returnDataAdmin, setReturnDataAdmin] = useState({product_id:id});
    const handleOpen = () => setOpen(!open);
    const handleOpen1 = () => setOpen1(!open1);
    if (isError ) {
        return navigate('/404')
    }
    if (isLoading) {
        return (
            <LayOut>
                <Spin className="text-center mt-60" tip="Loading" size="large">
                </Spin>
            </LayOut>
        )
    }

    const handleSubmit = async () => {
        try {
            const res = await acceptReturnProduct({...returnDataAdmin});
            handleOpen()
            navigate("/resultSuccess", { state: 14});
            setReturnDataAdmin({product_id:id});
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const  handleDeny = async () => {
        try {
            const res = await denyReturnProduct({...returnDataAdmin});
            handleOpen1()
            navigate("/resultSuccess", { state: 15});
            setReturnDataAdmin({product_id:id});
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

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
                        {reqData.status === 9 && <>
                            <div className="grid grid-cols-3 bg-white pt-8 gap-4 m-10 ">
                                <div className="col-span-2  relative">
                                    <div className="mx-3 pb-2">
                                        <div className="text-base font-semibold text-neutral-600 ml-3 mb-3 text-left">
                                            Thông tin trả hàng
                                        </div>
                                        <div className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4  p-3 ">
                                            <div className="col-start-1 text-left col-span-5 ">
                                                {
                                                    reqData.deliData.return_image_list &&
                                                    <>
                                                        <div className="grid grid-cols-6 text-left ">
                                                            <Image.PreviewGroup
                                                                preview={{
                                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                                }}>
                                                                {reqData?.deliData?.return_image_list.map((imageUrl, index) => (
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
                                    </div>

                                </div>

                                <div className="text-sm text-left font-light border-l-2  text-neutral-600 mx-6 relative ">
                                    <div className="flex-col mt-6 mx-6 font-normal ">
                                        <div
                                            className="grid grid-rows-1 grid-cols-6 grid-flow-col gap-4 py-2 border-b-2 pb-4">
                                            <div className="col-start-1 font-semibold col-span-6 ">Thời gian yêu cầu trả
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
                        <div className="flex m-6 gap-5 justify-end mr-10">
                            <Button
                                onClick={handleOpen1}
                                className="p-2 px-6 py-2 right-0 bg-white rounded text-red-500  border-red-500 hover:border-red-500 text-sm  font-medium focus:outline-0">
                                Từ chối trả hàng
                            </Button>

                            <Button
                                onClick={handleOpen}
                                className="p-2 px-6 py-2 right-0 bg-red-500 rounded text-white border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                Đồng ý trả hàng
                            </Button>
                        </div>
                        {/*đồng ý trả hàng dioalog */}
                        <Dialog open={open} onClose={handleOpen} maxWidth="md">
                            <DialogTitle>
                                <div className="flex items-center justify-between">
                                <span className="font-semibold text-sm">
                                    Xác nhận yêu cầu trả hàng
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
                                        className="items-center font-semibold text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                                        Bạn có chắc chắn muốn đồng ý với yêu cầu trả hàng không ?

                                    </div>
                                    <div className="flex m-6 gap-5 justify-end mr-10">
                                        <Button
                                            onClick={handleOpen}
                                            className="p-2 px-6 py-2 right-0 bg-white rounded text-red-500 border-red-500 hover:border-red-500  text-sm  font-medium focus:outline-0">
                                            Hủy
                                        </Button>

                                        <Button
                                            onClick={handleSubmit}
                                            className="p-2 px-6 py-2 right-0 bg-red-500 rounded text-white  border-none text-sm  font-semibold focus:outline-0">
                                            Xác nhận
                                        </Button>
                                    </div>

                                </Stack>
                            </DialogContent>
                        </Dialog>

                        {/*từ choois trả hàng dioalog */}
                        <Dialog open={open1} onClose={handleOpen1} maxWidth="md">
                            <DialogTitle>
                                <div className="flex items-center justify-between">
                                <span className="font-semibold text-sm">
                                    Xác nhận yêu cầu trả hàng
                                </span>
                                    <div
                                        onClick={handleOpen1}
                                        className="bg-gray-800 rounded cursor-pointer text-sm text-white hover:bg-neutral-600 border-none font-medium focus:outline-0"
                                    >
                                    </div>
                                </div>
                                <div className="border-b mt-2  border-gray-300"></div>
                            </DialogTitle>
                            <DialogContent>
                                <Stack spacing={2} margin={1}>
                                    <div
                                        className="items-center font-semibold text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                                        Bạn có chắc chắn muốn từ chối  yêu cầu trả hàng không ?

                                    </div>
                                    <div className="flex m-6 gap-5 justify-end mr-10">
                                        <Button
                                            onClick={handleOpen1}
                                            className="p-2 px-6 py-2 right-0 bg-white rounded text-red-500 border-red-500 hover:border-red-500  text-sm  font-medium focus:outline-0">
                                            Không
                                        </Button>

                                        <Button
                                            onClick={handleDeny}
                                            className="p-2 px-6 py-2 right-0 bg-red-500 rounded text-white  border-none text-sm  font-semibold focus:outline-0">
                                            Từ chối nè
                                        </Button>
                                    </div>

                                </Stack>
                            </DialogContent>
                        </Dialog>
                    </>
                )}
            </div>
        </LayOut>
    );
};
export default ReturnProductDetail;
