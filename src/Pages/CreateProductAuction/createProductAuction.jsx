import {DatePicker, Form, Input, InputNumber, Select, Tabs, TreeSelect} from "antd";
import {formatDateTime} from "../../Utils/constant.js";
import {useNavigate} from "react-router-dom";
import FileUpload from "../../Components/UploadFile/uploadFile.jsx";
import {useState} from "react";
import {createProductAuction} from "../../Services/requestService.jsx";
import LayOut from "../../Components/Layout/layout.jsx";
import useTreeCategories from "./useCategories.jsx";
import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
const TabPane = Tabs.TabPane
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
    const {categories, isLoading, isSuccess} = useTreeCategories()
    const navigate = useNavigate()
    const [adminAuctionData, setAdminAuctionData] = useState(null)
    const [adminAucstreamData, setAdminAucStreamData] = useState(null)
    const [form] = Form.useForm();
    const [form1] = Form.useForm();

    const handleSingleFileUpload = (formData) => {
            handleAdminAuctionData("singlefile", formData)
    }
    const handleSingleFileUpload1 = (formData) => {
        handleAdminAucStreamData("singlefile", formData)
    }

    const handleFilesUpload = (formData) => {
        handleAdminAuctionData("files", formData)
    };

    const handleFilesUpload1 = (formData) => {
        handleAdminAucStreamData("files", formData)
    };
    const handleTreeSelect = (value) => {
        handleAdminAuctionData('category', value)
    };

    const handleTreeSelect1 = (value) => {
        handleAdminAucStreamData('category', value)
    };
    const handleAdminAuctionData = (key, value) => {
        setAdminAuctionData({...adminAuctionData, [key]: value});
        console.log(adminAuctionData)
    };

    const handleAdminAucStreamData = (key, value) => {
        setAdminAucStreamData({...adminAucstreamData, [key]: value});
        console.log(adminAucstreamData)
    };

    const {mutate, isError, isPending} = useMutation({
        mutationFn: async (adminAuctionData) => {
            try {
                const res = await createProductAuction(adminAuctionData)
                const data = res.data
                return data;
            } catch (error) {
                console.log(error.response.data);
                throw error;
            }
        },
        onSuccess: (data) => {
            console.log(data)
            navigate('/resultSuccess',{state : 200})
            setAdminAuctionData(null);
        },
        onError:(error) => {
            toast.error(`${error.response.data.message}`)
        }
    });

    const handleSubmit = async () => {
        const values = await form.validateFields();
        mutate(adminAuctionData);
    };
    const handleSubmit1 = async () => {
        const values = await form1.validateFields();
        mutate(adminAucstreamData);
    };

    return (
        <LayOut>
            <div className="home-right bg-zinc-200">
                <div className="flex px-6 pt-6 pb-2 gap-2 items-center justify-end">
                    <div className="flex items-center  gap-2">
                        <div className="text-left text-base ">Tạo yêu cầu đấu giá</div>
                    </div>
                </div>
                <div className="border-b border-gray-400  mx-5"></div>
                {categories &&
                    <>
                        <div className="w-full h-full rounded-lg bg-zinc-200">
                            <div className="h-full  py-2 px-2">
                                <Tabs size={"large"} defaultActiveKey="1" centered
                                      tabBarGutter={200}
                                      indicator={{size: 400}}>
                                    <TabPane tab="Đấu giá trực tuyến / thông thường" key="1">
                                        <div
                                            className="items-center font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                                            <Form
                                                form={form}
                                                {...formItemLayout}
                                                onFinish ={(values) => {
                                                    console.log({values})
                                                }}
                                                onFinishFailed ={(failedValues) => {
                                                    console.log({failedValues})
                                                }}
                                                style={{
                                                    maxWidth: 660,
                                                    marginLeft: 100
                                                }}
                                                scrollToFirstError
                                            >
                                                <Form.Item
                                                    name="auction_live"
                                                    label="Hình thức đấu giá"
                                                    hasFeedback
                                                    required
                                                    className="font-semibold"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Hãy điền hình thức đấu giá!',
                                                        },
                                                    ]}
                                                >
                                                    <Select
                                                        onChange={(value) => handleAdminAuctionData('auction_live', value)}
                                                        placeholder="Hình thức đấu giá"
                                                        style={{textAlign: "left"}}
                                                    >
                                                        <Option value="1">Đấu giá trực tuyến</Option>
                                                        <Option value="0">Đấu giá thông thường</Option>
                                                    </Select>
                                                </Form.Item>

                                                <Form.Item
                                                    name="type_of_auction"
                                                    label="Phương thức đấu giá"
                                                    hasFeedback
                                                    className="font-semibold"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Phương thức đấu giá!',
                                                        },
                                                    ]}
                                                >
                                                    <Select
                                                        onChange={(value) => handleAdminAuctionData('type_of_auction', value)}
                                                        placeholder="Phương thức đấu giá"
                                                        style={{textAlign: "left"}}
                                                    >
                                                        <Option value="1">Đấu giá tăng</Option>
                                                        {
                                                            adminAuctionData?.auction_live === '1' &&
                                                            <Option value="-1">Đấu giá giảm</Option>
                                                        }
                                                    </Select>
                                                </Form.Item>

                                                <Form.Item name="start_time"
                                                           label="Thời gian bắt đầu"
                                                           rules={[
                                                               {
                                                                   type: 'object',
                                                                   required: true,
                                                                   message: 'Hãy chọn thời gian bắt đâu!',
                                                               },
                                                                   ({ getFieldValue }) => ({
                                                                       validator(_, value) {
                                                                           if (!value || value > new Date(new Date().getTime() + 60 * 60 * 1000)) {
                                                                               return Promise.resolve();
                                                                           }
                                                                           return Promise.reject(new Error(`Thời gian bắt đầu phải sau ${formatDateTime(new Date(new Date().getTime() + 60 * 60 * 1000))} !`));
                                                                       },
                                                                   }),
                                                               ]}>
                                                    <DatePicker
                                                        placeholder="Thời gian bắt đầu"
                                                        onChange={(value) => handleAdminAuctionData('start_time', (value.toISOString()))}
                                                        showTime
                                                        style={{
                                                            width: '100%',
                                                            textAlign: 'center'
                                                        }}
                                                        />
                                                </Form.Item>


                                                <Form.Item name="finish_time"
                                                           label="Thời gian kết thúc"
                                                           rules={[
                                                               {
                                                                   required: true,
                                                                   message: 'Hãy chọn thời gian kết thúc!',
                                                               },
                                                               ({ getFieldValue }) => ({
                                                                   validator(_, value) {
                                                                       if (!value || getFieldValue('start_time') < value) {
                                                                           return Promise.resolve();
                                                                       }
                                                                       return Promise.reject(new Error('Thời gian kết thúc nhỏ hơn thời gian bắt đầu!'));
                                                                   },
                                                               }),
                                                           ]}
                                                           >
                                                    <DatePicker
                                                        placeholder="Thời gian kết thúc"
                                                        onChange={(value) => handleAdminAuctionData('finish_time', (value.toISOString()))}
                                                        showTime
                                                        style={{
                                                            width: '100%',
                                                            textAlign: 'center'
                                                        }}
                                                        />
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
                                                        <Option value="S">S (Superior, chất lượng trên 90% )</Option>
                                                        <Option value="A">A (Excellent, chất lượng trên 80%) </Option>
                                                        <Option value="B">B (Good, chất lượng trên 70%)</Option>
                                                        <Option value="C">C (Fair, chất lượng trên 60%)</Option>
                                                        <Option value="D">D (Poor, chất lượng trên 50%)</Option>
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
                                                        treeData={categories}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    name="brand"
                                                    label="Thương hiệu sản phẩm"
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

                                                {
                                                    adminAuctionData?.auction_live === '0' &&
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
                                                }

                                                <Form.Item
                                                    name="reserve_price"
                                                    label="Giá khởi điểm"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Hãy điền giá khởi điểm!',
                                                        },
                                                        ({ getFieldValue }) => ({
                                                            validator(_, value) {
                                                                if (!value || getFieldValue('sale_price') ? getFieldValue('sale_price') > value : true) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(new Error('Giá khởi điểm phải nhỏ hơn giá bán trực tiếp!'));
                                                            },
                                                        }),
                                                    ]}
                                                >
                                                    <InputNumber
                                                        placeholder="Giá khởi điểm"
                                                        onChange={(value) => handleAdminAuctionData('reserve_price', value)}
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
                                                    <InputNumber
                                                        placeholder="Bước giá"
                                                        onChange={(value) => handleAdminAuctionData('step_price', value)}
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
                                                    <InputNumber
                                                        placeholder="Phí vận chuyển"
                                                        onChange={(value) => handleAdminAuctionData('shipping_fee', value)}
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
                                                            required: false,
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
                                                            required: false,
                                                            message: 'Hãy điền các hình ảnh liên quan!',
                                                        },
                                                    ]}
                                                >
                                                    <FileUpload length={16} onGetFormData={handleFilesUpload}/>
                                                </Form.Item>

                                                <Form.Item
                                                    name="description"
                                                    required
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
                                                    {
                                                        isPending ?
                                                            <>
                                                                <button disabled type="button" className="text-white bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">
                                                                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144
                                                                                 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025
                                                                                56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402
                                                                                 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                                              fill="currentColor"/>
                                                                    </svg>
                                                                    Xác nhận...
                                                                </button>

                                                            </>
                                                            :
                                                            <button
                                                                type="primary"
                                                                onClick={ handleSubmit}
                                                                className=" px-6 mb-8  right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                                                Xác nhận
                                                            </button>
                                                    }
                                                </Form.Item>
                                            </Form>

                                        </div>
                                    </TabPane>

                                    <TabPane tab="Đấu giá giảm " key="2">
                                        <div
                                            className="items-center font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                                            <Form
                                                {...formItemLayout}
                                                form={form1}
                                                onFinish ={(values) => {
                                                    console.log({values})
                                                }}
                                                onFinishFailed ={(failedValues) => {
                                                    console.log({failedValues})
                                                }}
                                                style={{
                                                    maxWidth: 660,
                                                    marginLeft: 100
                                                }}
                                                scrollToFirstError
                                            >
                                                <Form.Item
                                                    name="auction_live"
                                                    label="Hình thức đấu giá"
                                                    hasFeedback
                                                    className="font-semibold"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Hãy điền hình thức đấu giá!',
                                                        },
                                                    ]}
                                                >
                                                    <Select
                                                        onChange={(value) => handleAdminAucStreamData('auction_live', value)}
                                                        placeholder="Hình thức đấu giá"
                                                        style={{textAlign: "left"}}
                                                    >
                                                        <Option value="2">Đấu giá qua livestream</Option>
                                                    </Select>
                                                </Form.Item>

                                                <Form.Item
                                                    name="type_of_auction"
                                                    label="Phương thức đấu giá"
                                                    hasFeedback
                                                    className="font-semibold"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Hãy điền phương thức đấu giá!',
                                                        },
                                                    ]}
                                                >
                                                    <Select
                                                        onChange={(value) => handleAdminAucStreamData('type_of_auction', value)}
                                                        placeholder="Phương thức đấu giá"
                                                        style={{textAlign: "left"}}
                                                    >
                                                        <Option value="-1">Đấu giá giảm</Option>
                                                    </Select>
                                                </Form.Item>

                                                <Form.Item name="register_start"
                                                           label="Thời gian bắt đầu đăng ký"
                                                           rules={[
                                                               {
                                                                   type: 'object',
                                                                   required: true,
                                                                   message: 'Hãy chọn thời gian bắt đầu!',
                                                               },
                                                               ({ getFieldValue }) => ({
                                                                   validator(_, value) {
                                                                       if (!value || value > new Date(new Date().getTime() +  60 * 1000)) {
                                                                           return Promise.resolve();
                                                                       }
                                                                       return Promise.reject(new Error(`Thời gian bắt đầu đăng kí phải sau ${formatDateTime(new Date(new Date().getTime() +  60 * 1000))} !`));
                                                                   },
                                                               }),
                                                               ]}>
                                                    <DatePicker
                                                        placeholder="Thời gian bắt đầu đăng ký"
                                                        onChange={(value) => handleAdminAucStreamData('register_start', (value.toISOString()))}
                                                        showTime
                                                        style={{
                                                            width: '100%',
                                                            textAlign: 'center'
                                                        }}
                                                       />
                                                </Form.Item>

                                                <Form.Item name="register_finish"
                                                           label="Thời gian kết thúc đăng ký"
                                                           rules=
                                                               {[{
                                                                   type: 'object',
                                                                   required: true,
                                                                   message: 'Chọn thời gian kết thúc đăng ký đấu giá!',
                                                               },
                                                                   ({ getFieldValue }) => ({
                                                                       validator(_, value) {
                                                                           if (!value || getFieldValue('register_start') < value ) {
                                                                               return Promise.resolve();
                                                                           }
                                                                           return Promise.reject(new Error(`Thời gian kết thúc đăng ký phải sau thời gian bắt đầu !`));
                                                                       },
                                                                   }),
                                                               ]}>
                                                    <DatePicker
                                                        placeholder="Thời gian kết thúc đăng ký"
                                                        onChange={(value) => handleAdminAucStreamData('register_finish', (value.toISOString()))}
                                                        showTime
                                                        style={{
                                                            width: '100%',
                                                            textAlign: 'center'
                                                        }}
                                                        />
                                                </Form.Item>

                                                <Form.Item name="start_time"
                                                           label="Thời gian bắt đầu đấu giá"
                                                           rules=
                                                               {[{
                                                                   type: 'object',
                                                                   required: true,
                                                                   message: 'Hãy chọn thời gian bắt đầu đấu giá!',
                                                               },
                                                                   ({ getFieldValue }) => ({
                                                                       validator(_, value) {
                                                                           if (!value || value > new Date(new Date(getFieldValue('register_finish')).getTime() + 2*60 * 60 * 1000)) {
                                                                               return Promise.resolve();
                                                                           }
                                                                           return Promise.reject(new Error(`Thời gian bắt đầu đấu giá phải sau ${formatDateTime(new Date(new Date(getFieldValue('register_finish')).getTime() + 2*60 * 60 * 1000))} !`));
                                                                       },
                                                                   }),
                                                               ]}>
                                                    <DatePicker
                                                        placeholder="Thời gian bắt đầu đấu giá"
                                                        onChange={(value) => handleAdminAucStreamData('start_time', (value.toISOString()))}
                                                        showTime
                                                        style={{
                                                            width: '100%',
                                                            textAlign: 'center'
                                                        }}
                                                        />
                                                </Form.Item>

                                                <Form.Item name="finish_time"
                                                           label="Thời gian kết thúc đấu giá"
                                                           rules=
                                                               {[{
                                                                   type: 'object',
                                                                   required: true,
                                                                   message: 'Hãy chọn thời gian kết thúc đấu giá!',
                                                               },
                                                                   ({ getFieldValue }) => ({
                                                                       validator(_, value) {
                                                                           if (!value || getFieldValue('start_time') < value ) {
                                                                               return Promise.resolve();
                                                                           }
                                                                           return Promise.reject(new Error(`Thời gian kết thúc đấu giá phải sau thời gian bắt đầu !`));
                                                                       },
                                                                   }),
                                                               ]}>
                                                    <DatePicker
                                                        placeholder="Thời gian kết thúc đấu giá"
                                                        onChange={(value) => handleAdminAucStreamData('finish_time', (value.toISOString()))}
                                                        showTime
                                                        style={{
                                                            width: '100%',
                                                            textAlign: 'center'
                                                        }}
                                                    />
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
                                                        onChange={(e) => handleAdminAucStreamData('product_name', e.target.value)}
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
                                                        onChange={(value) => handleAdminAucStreamData('rank', value)}
                                                        style={{textAlign: "left"}}
                                                        placeholder="Chất lượng sản phẩm">
                                                        <Option value="S">S (Superior, chất lượng trên 90% )</Option>
                                                        <Option value="A">A (Excellent, chất lượng trên 80%) </Option>
                                                        <Option value="B">B (Good, chất lượng trên 70%)</Option>
                                                        <Option value="C">C (Fair, chất lượng trên 60%)</Option>
                                                        <Option value="D">D (Poor, chất lượng trên 50%)</Option>
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
                                                        onChange={handleTreeSelect1}
                                                        treeData={categories}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    name="brand"
                                                    label="Thương hiệu sản phẩm"
                                                    rules={[
                                                        {
                                                            required: false,
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        onChange={(e) => handleAdminAucStreamData('brand', e.target.value)}
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
                                                        onChange={(value) => handleAdminAucStreamData('is_used', value)}
                                                        style={{textAlign: "left"}}
                                                        placeholder="Tình trạng sản phẩm">
                                                        <Option value="0">Chưa sử dụng</Option>
                                                        <Option value="1">Đã sử dụng</Option>
                                                    </Select>
                                                </Form.Item>

                                                <Form.Item
                                                    name="deposit_price"
                                                    label="Phí đăng ký tham gia"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Hãy điền phí đăng ký tham gia!',
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber
                                                        placeholder="Phí đăng ký tham gia"
                                                        onChange={(value) => handleAdminAucStreamData('deposit_price', value)}
                                                        suffix="VNĐ"
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    name="reserve_price"
                                                    label="Giá khởi điểm"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Hãy điền giá khởi điểm!',
                                                        },
                                                        ({ getFieldValue }) => ({
                                                            validator(_, value) {
                                                                if (!value || getFieldValue('deposit_price') < value ) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(new Error(`Giá khởi điểm phải lớn hơn phí đăng ký !`));
                                                            },
                                                        }),
                                                    ]}
                                                >
                                                    <InputNumber
                                                        placeholder="Giá khởi điểm"
                                                        onChange={(value) => handleAdminAucStreamData('reserve_price',value)}
                                                        suffix="VNĐ"
                                                        style={{
                                                            width: '100%',

                                                        }}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    name="min_price"
                                                    label="Giá tối thiểu"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Hãy điền giá thấp nhất !',
                                                        },
                                                        ({ getFieldValue }) => ({
                                                            validator(_, value) {
                                                                if (!value || getFieldValue('reserve_price') > value ) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(new Error(`Giá tối thiểu phải nhỏ hơn giá khởi điểm !`));
                                                            },
                                                        }),
                                                    ]}
                                                >
                                                    <InputNumber
                                                        placeholder="Giá tối thiểu"
                                                        onChange={(value) => handleAdminAucStreamData('min_price',value)}
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
                                                    <InputNumber
                                                        placeholder="Bước giá"
                                                        onChange={(value) => handleAdminAucStreamData('step_price', value)}
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
                                                    <InputNumber
                                                        placeholder="Phí vận chuyển"
                                                        onChange={(value) => handleAdminAucStreamData('shipping_fee',value)}
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
                                                        onChange={(value) => handleAdminAucStreamData('can_return', value)}
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
                                                        onChange={(e) => handleAdminAucStreamData('delivery_from', e.target.value)}
                                                        placeholder="Nơi gửi sản phẩm "/>
                                                </Form.Item>

                                                <Form.Item
                                                    name="main_image"
                                                    label="Hình ảnh sản phẩm"
                                                    style={{textAlign: "left"}}
                                                    rules={[
                                                        {
                                                            required: false,
                                                        },
                                                    ]}
                                                >
                                                    <FileUpload length={1} onGetFormData={handleSingleFileUpload1}/>
                                                </Form.Item>

                                                <Form.Item
                                                    name="main_image"
                                                    label="Các hình ảnh liên quan "
                                                    style={{textAlign: "left"}}
                                                    rules={[
                                                        {
                                                            required: false,
                                                        },
                                                    ]}
                                                >
                                                    <FileUpload length={16} onGetFormData={handleFilesUpload1}/>
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
                                                        onChange={(e) => handleAdminAucStreamData('description', e.target.value)}
                                                        maxLength={300}/>
                                                </Form.Item>

                                                <Form.Item {...tailFormItemLayout}>
                                                    {
                                                        isPending ?
                                                            <>
                                                                <button disabled type="button" className="text-white bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">
                                                                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144
                                                                                 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025
                                                                                56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402
                                                                                 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                                              fill="currentColor"/>
                                                                    </svg>
                                                                    Hoàn tất...
                                                                </button>
                                                            </>
                                                            :
                                                            <button type="primary"
                                                                    onClick={handleSubmit1}
                                                                    className=" px-6 mb-8  right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                                                Hoàn tất
                                                            </button>
                                                    }
                                                </Form.Item>
                                            </Form>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </>}
            </div>
        </LayOut>
    )
}
export default CreateProductAuction
