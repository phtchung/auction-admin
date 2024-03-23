import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";
import {createCategories} from "../../Services/requestService.jsx";
import LayOut from "../../Components/Layout/layout.jsx";
import {Button, Form, Input, Modal, Pagination} from "antd";
import FileUpload from "../../Components/UploadFile/uploadFile.jsx";
import useCategories from "./useCategories.jsx";
import {Card} from 'antd';
import {CloudUploadOutlined, DeleteOutlined} from "@ant-design/icons";

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
const CreateCategories = () => {
    const navigate = useNavigate()
    const {isLoading, isSuccess, categories, refetch} = useCategories()
    const [cateData, setCateData] = useState(null)
    const [open, setOpen] = useState(false);

    const handleSingleFileUpload = (formData) => {
        handleCateData("singlefile", formData)
    }

    const handleCateData = (key, value) => {
        setCateData({...cateData, [key]: value});
        console.log(cateData)
    };

    const showModal = () => {
        setOpen(true);
    };
    const handleRender = () => {
        setCateData(null);
    }
    const handleNavigate = (url) => {
        navigate(`/categories/${url}`)
        window.scrollTo(0, 0)
    }
    const handleOk = async () => {
        setConfirmLoading(true);
        try {
            if (!cateData) {
                toast.error("Chưa điền thông tin");
                return;
            }
            const res = await createCategories({...cateData});
            setConfirmLoading(false);
            refetch()
            toast.success('Thêm thành công')
            setOpen(false);

        } catch (error) {
            setOpen(false);
            toast.error(error?.response?.data?.message);
        }
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [current, setCurrent] = useState(3);
    const onChange = (page) => {
        setCurrent(page);
    };
    return (
        <><LayOut>
            <div className="home-right ">
                <div className="flex justify-between m-2.5 items-center px-2">
                    <h1 className="text-left text-xl font-semibold mt-4 ">
                        Danh sách các danh mục sản phẩm
                    </h1>
                </div>
                <div className="flex flex-col gap-3 mx-4">
                    <div className="flex flex-row gap-10 items-center mt-2.5">
                        <Input style={{width: '40%'}} placeholder="Tìm kiếm danh mục sản phẩm"/>
                        <Button type="primary" className="bg-blue-500" onClick={showModal}>
                            Thêm mới
                        </Button>
                    </div>

                    <Modal
                        title="Thêm danh mục sản phẩm"
                        afterClose={handleRender}
                        open={open}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                        okButtonProps={{
                            style: {backgroundColor: 'rgb(59 130 246)'},
                        }}
                    >
                        <p>{
                            <>
                                <Form
                                    {...formItemLayout}
                                    style={{
                                        maxWidth: 660,
                                        marginTop: 30
                                    }}
                                >
                                    <Form.Item
                                        name="image"
                                        label="Hình ảnh"
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
                                        name="name"
                                        label="Tên danh mục"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Hãy điền tên danh mục!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input
                                            style={{width: '80%'}}
                                            onChange={(e) => handleCateData('name', e.target.value)}
                                            placeholder="Tên danh mục "/>
                                    </Form.Item>
                                </Form>
                            </>
                        }
                        </p>
                    </Modal>

                </div>
                <div className="mt-10 mx-4 gap-3 flex flex-row">
                    {categories && categories.map((category) => (
                        <>
                            <Card
                                hoverable
                                style={{
                                    width: 140,
                                    padding: '20px 20px',
                                    textAlign: 'center'
                                }}

                                cover={<img
                                    style={{width: 100, height: 90}}
                                    alt="example" src={category.image}/>}
                                actions={[
                                    <div>
                                        <CloudUploadOutlined/>
                                    </div>,
                                    <div>
                                        <DeleteOutlined key="delete"/>
                                    </div>,
                                ]}
                            >
                                <div onClick={() => (handleNavigate(category?.category_id))}
                                     className="hover:text-orange-600 text-sm mt-3 mb-4 min-h-10 text-neutral-800">
                                    {category?.name}
                                </div>
                            </Card>
                        </>
                    ))}

                </div>
                {isSuccess &&
                    <>
                        <div className="mt-10">
                            <Pagination current={current} onChange={onChange} total={categories.length}></Pagination>
                        </div>
                    </>
                }
            </div>
        </LayOut>
        </>
    )
}

export default CreateCategories
