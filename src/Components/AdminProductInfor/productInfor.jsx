
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import {useNavigate} from "react-router-dom";
import {Image} from 'antd';
import {adminChangeStateToStringAdmin, formatMoney} from "../../Utils/constant.js";

const ProductInfor = ({data}) => {
    const navigate = useNavigate();
    const stateStr =  adminChangeStateToStringAdmin(data.status);
    return (
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
            <div className="flex justify-between m-2.5 items-center px-2">
                <div className="text-left text-base font-semibold ">
                    Thông tin sản phẩm
                </div>
                <div className="text-base font-semibold mr-10 bg-amber-300 p-1 px-4">
                    {stateStr}
                </div>
            </div>

            <div className="items-center font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                <div className="grid grid-cols-6 text-left">
                    <div> Mã sản phẩm :</div>
                    <div className="font-normal  col-span-2">
                        {data?.request_id}
                    </div>
                    {
                        (isFinite(data?.status) && data.admin_belong !== 1) &&
                        <>
                            <di> Thời gian yêu cầu :</di>
                            <div className="font-normal col-span-2">
                                {data?.status === 1 ? data?.createdAt : data?.request_time}
                            </div>
                        </>
                    }
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div> Tên sản phẩm :</div>
                    <div className="font-normal  col-span-5"> {data?.product_name}</div>
                </div>
                <div className="grid grid-cols-6 text-left">
                    <div> Chất lượng :</div>
                    <div className="font-normal col-span-2"> {data?.rank}</div>
                    <div> Danh mục :</div>
                    <div className="font-normal col-span-2"> {data?.category_name}</div>
                </div>
                <div className="grid grid-cols-6 text-left">
                    <div> Thương hiệu :</div>
                    <div className="font-normal col-span-2">
                        {data?.brand}
                    </div>
                    <div> Tình trạng :</div>
                    <div className="font-normal col-span-2"> {data?.is_used} </div>
                </div>
                <div className="grid grid-cols-6 text-left">
                    <div> Giá khởi điểm :</div>
                    <div className="font-normal col-span-2">
                        {formatMoney(data?.reserve_price)} VND
                    </div>
                    {
                        data?.auction_live === 'Đấu giá thông thường' &&
                        <>
                            <div> Giá bán trực tiếp :</div>
                            <div className="font-normal col-span-2"> {formatMoney(data?.sale_price)} VND</div>
                        </>
                    }
                </div>
                <div className="grid grid-cols-6 text-left font-medium">
                    <div> Bước giá :</div>
                    <div className="font-normal col-span-2"> {formatMoney(data?.step_price)} VND</div>
                    <div> Phí vận chuyển :</div>
                    <div className="font-normal col-span-2"> {formatMoney(data?.shipping_fee)} VND</div>
                </div>
                <div className="grid grid-cols-6 text-left">
                    <div> Trả hàng :</div>
                    <div className="font-normal col-span-2">
                        {data?.can_return}
                    </div>
                    <div> Nơi gửi hàng :</div>
                    <div className="font-normal col-span-2"> {data?.delivery_from} </div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div> Mô tả sản phẩm :</div>
                    <div className="font-normal col-span-5"> {data?.description}</div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div> Hỉnh ảnh sản phẩm :</div>
                    <div className="font-normal col-span-5">
                    </div>
                </div>
                {data.main_image &&
                    <>
                        <div className="grid grid-cols-6 text-left mb-4">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <div className="font-normal col-span-1 mb-2">
                                    <Image height={150} width={150}
                                           src={data.main_image}/>
                                </div>

                            </Image.PreviewGroup>
                        </div>
                    </>
                }
                <div className="grid grid-cols-6 text-left">
                    <div> Các hình ảnh liên quan :</div>
                </div>
                {
                    data.image_list &&
                    <>
                        <div className="grid grid-cols-6 text-left mb-4">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}>
                                {data?.image_list.map((imageUrl, index) => (
                                    <>
                                        <div className="font-normal col-span-1 mb-2">
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
        </>
    );
};
export default ProductInfor;
