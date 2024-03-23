
import {DatePicker, Form, Input, Select, TreeSelect} from "antd";
import {formatDateTime, treeSelectData} from "../../Utils/constant.js";
import {Button} from "@material-tailwind/react";
import {Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import FileUpload from "../../Components/UploadFile/uploadFile.jsx";
import {useState} from "react";
import {toast} from "react-toastify";
import {createProductAuction} from "../../Services/requestService.jsx";
import LayOut from "../../Components/Layout/layout.jsx";

const {Option} = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const CreateProductAuction = () => {
    const navigate = useNavigate()
    const [adminAuctionData, setAdminAuctionData] = useState(null)
    const [open, setOpen] = useState(false);

    const handleSingleFileUpload = (formData) => {
        // handleRequest("singlefile", formData)
        handleAdminAuctionData("singlefile", formData)
    }

    const handleFilesUpload = (formData) => {
        handleAdminAuctionData("files", formData)
    };
    const handleTreeSelect = (value) => {
        handleAdminAuctionData('category', value)
    };
    const handleAdminAuctionData = (key, value) => {
        setAdminAuctionData({...adminAuctionData, [key]: value});
        console.log(adminAuctionData)
    };
    const handleOpen = () => setOpen(!open);

    const handleSubmit = async () => {
        try {
            if (!adminAuctionData) {
                toast.error("Chưa điền thông tin");
                return;
            }
            const res = await createProductAuction({...adminAuctionData});

            navigate('/resultSuccess',{state : 200})
            handleOpen()
            setAdminAuctionData(null);
        } catch (error) {
            handleOpen()
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <LayOut>
                <div className="home-right" style={{backgroundColor:'#f5f5f5'}}>
                    <div className="flex px-6 pt-6 pb-2 gap-2 items-center  justify-end">

                        <div className="flex items-center  gap-2">
                            <div className="text-left text-base ">Tạo yêu cầu đấu giá</div>

                        </div>
                    </div>
                    <div className="border-b border-gray-400  mx-5"></div>
                    <div className="flex justify-between m-2.5 items-center px-2">
                        <div className="text-left text-base font-semibold mt-4 ">
                            Tạo thông tin sản phẩm đấu giá
                        </div>

                    </div>
                    <div className="items-center bg font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                        <Form
                            {...formItemLayout}

                            style={{
                                maxWidth: 660,
                                marginLeft: 100
                            }}
                            scrollToFirstError
                        >

                            <Form.Item
                                name="type_of_auction"
                                label="Hình thức đấu giá"
                                hasFeedback
                                className="font-semibold"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hình thức đấu giá!',
                                    },
                                ]}
                            >
                                <Select
                                    onChange={(value) => handleAdminAuctionData('type_of_auction', value)}
                                    placeholder="Hình thức đấu giá"
                                    style={{textAlign: "left"}}
                                >
                                    <Option value="1">Đấu giá tăng</Option>
                                    <Option value="-1">Đấu giá giảm</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="start_time"
                                       label="Thời gian bắt đầu"
                                       rules=
                                           {[{
                                               type: 'object',
                                               required: true,
                                               message: 'Please select time!',
                                           },
                                           ]}>
                                <DatePicker
                                    placeholder="Thời gian bắt đầu"
                                    onChange={(value) => handleAdminAuctionData('start_time', formatDateTime(value))}
                                    showTime
                                    style={{
                                        width: '100%',
                                        textAlign: 'center'
                                    }}
                                    format="YYYY-MM-DD HH:mm:ss"/>
                            </Form.Item>


                            <Form.Item name="finish_time"
                                       label="Thời gian kết thúc"
                                       rules=
                                           {[{
                                               type: 'object',
                                               required: true,
                                               message: 'Hãy chọn thời gian kết thúc!',
                                           },
                                           ]}>
                                <DatePicker
                                    placeholder="Thời gian kết thúc"
                                    onChange={(value) => handleAdminAuctionData('finish_time', formatDateTime(value))}
                                    showTime
                                    style={{
                                        width: '100%',
                                        textAlign: 'center'
                                    }}
                                    format="YYYY-MM-DD HH:mm:ss"/>
                            </Form.Item>

                            <Form.Item
                                name="product_name"
                                label="Tên sản phẩm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền tên sản phẩm!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input
                                    onChange={(e) => handleAdminAuctionData('product_name', e.target.value)}
                                    placeholder="Tên sản phẩm"/>
                            </Form.Item>

                            <Form.Item
                                name="rank"
                                label="Chất lượng sản phẩm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền chất lượng của sản phẩm ( từ S -> D )',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Select
                                    onChange={(value) => handleAdminAuctionData('rank', value)}
                                    style={{textAlign: "left"}}
                                    placeholder="Chất lượng sản phẩm">
                                    <Option value="S">S</Option>
                                    <Option value="A">A</Option>
                                    <Option value="B">B</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Danh mục sản phẩm"
                                name="TreeSelect"
                                className="font-semibold "
                                rules={[
                                    {
                                        required: true,
                                        message: 'Chọn danh mục sản phẩm!',
                                    },
                                ]}
                            >
                                <TreeSelect
                                    style={{textAlign: "left"}}
                                    placeholder="Danh mục sản phẩm"
                                    onChange={handleTreeSelect}
                                    // onChange={(value) => handleapproveData('category',value)}
                                    treeData={treeSelectData}
                                />
                            </Form.Item>
                            <Form.Item
                                name="brand"
                                label="Thương hiệu sản phẩm"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Có thể bỏ trống nếu không có!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input
                                    onChange={(e) => handleAdminAuctionData('brand', e.target.value)}
                                    placeholder="Thương hiệu "/>
                            </Form.Item>

                            <Form.Item
                                name="is_used"
                                label="Tình trạng sản phẩm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền tình trạng của sản phẩm (Đã sử dụng/ Chưa sử dụng )',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Select
                                    onChange={(value) => handleAdminAuctionData('is_used', value)}
                                    style={{textAlign: "left"}}
                                    placeholder="Tình trạng sản phẩm">
                                    <Option value="0">Chưa sử dụng</Option>
                                    <Option value="1">Đã sử dụng</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="sale_price"
                                label="Giá bán trực tiếp"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền giá bán trực tiếp!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Giá bán trực tiếp"
                                    onChange={(e) => handleAdminAuctionData('sale_price', e.target.value)}
                                    suffix="VNĐ"/>

                            </Form.Item>

                            <Form.Item
                                name="reserve_price"
                                label="Giá khởi điểm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền giá khởi điểm!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Giá khởi điểm"
                                    onChange={(e) => handleAdminAuctionData('reserve_price', e.target.value)}
                                    suffix="VNĐ"
                                    style={{
                                        width: '100%',

                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="step_price"
                                label="Bước giá"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền bước giá!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Bước giá"
                                    onChange={(e) => handleAdminAuctionData('step_price', e.target.value)}
                                    suffix="VNĐ"
                                    style={{
                                        width: '100%',
                                        textAlign: 'center'
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="shipping_fee"
                                label="Phí vận chuyển"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền phí vận chuyển sản phẩm!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Phí vận chuyển"
                                    onChange={(e) => handleAdminAuctionData('shipping_fee', e.target.value)}
                                    suffix="VNĐ"
                                    style={{
                                        width: '100%',
                                        textAlign: 'center'
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="can_return"
                                label="Có thể trả sản phẩm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền khả năng trả lại sản phẩm (Không/Có thể )',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Select
                                    onChange={(value) => handleAdminAuctionData('can_return', value)}
                                    style={{textAlign: "left"}}
                                    placeholder="Trả sản phẩm">
                                    <Option value="0">Không</Option>
                                    <Option value="1">Có thể</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="delivery_from"
                                label="Nơi gửi sản phẩm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Điền nơi gửi sản phẩm!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input
                                    onChange={(e) => handleAdminAuctionData('delivery_from', e.target.value)}
                                    placeholder="Nơi gửi sản phẩm "/>
                            </Form.Item>

                            <Form.Item
                                name="main_image"
                                label="Hình ảnh sản phẩm"
                                style={{textAlign: "left"}}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <FileUpload length={1} onGetFormData={handleSingleFileUpload}/>
                            </Form.Item>

                            <Form.Item
                                name="main_image"
                                label="Các hình ảnh liên quan "
                                style={{textAlign: "left"}}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền phí vận chuyển sản phẩm!',
                                    },
                                ]}
                            >
                                <FileUpload length={16} onGetFormData={handleFilesUpload}/>
                            </Form.Item>

                            <Form.Item
                                name="description"

                                label="Mô tả sản phẩm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Hãy điền mô tả sản phẩm!',
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    className="hover:border-none"
                                    placeholder="Mô tả sản phẩm"
                                    onChange={(e) => handleAdminAuctionData('description', e.target.value)}
                                    maxLength={300}/>
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                <Button
                                    onClick={handleOpen}
                                    className=" px-6 mb-8  right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                    Hoàn tất
                                </Button>
                            </Form.Item>
                        </Form>

                        <Dialog open={open} onClose={handleOpen} maxWidth="md">
                            <DialogTitle>
                                <div className="flex items-center justify-between">
                                <span className="font-semibold text-sm">
                                    Xác nhận tạo phiên đấu giá sản phẩm
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
                                        Bạn có chắc chắn muốn tạo phiên đấu giá với sản phẩm này không ?

                                    </div>
                                    <div className="flex m-6 gap-5 justify-end mr-10">
                                        <Button
                                            onClick={handleOpen}
                                            className="p-2 px-6 py-2 right-0 bg-red-500 rounded text-white border-gray-400 border-none text-sm  font-medium focus:outline-0">
                                            Hủy
                                        </Button>

                                        <Button
                                            onClick={handleSubmit}
                                            className="p-2 px-6 py-2 right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                            Xác nhận
                                        </Button>
                                    </div>

                                </Stack>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
        </LayOut>
    )
}
export default CreateProductAuction
