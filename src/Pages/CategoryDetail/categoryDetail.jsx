import {Button, Form, Input, Modal, Popconfirm, Space, Table, Tooltip} from "antd";
import LayOut from "../../Components/Layout/layout.jsx";
import {DeleteOutlined, EditOutlined, FallOutlined, LeftOutlined, PlusOutlined, RiseOutlined,} from "@ant-design/icons";
import {toast} from "react-toastify";
import {useState} from "react";
import {addCategory, deleteCategory, editCategory} from "../../Services/categoriesService.jsx";
import {useNavigate, useParams} from "react-router-dom";
import useCategoryDetail from "./useCategoryDetail.jsx";

const AddCategoryModal = ({visible, onCancel, onAdd, selectedOutput, isUpdate}) => {
    const [form] = Form.useForm()
    form.setFieldsValue({
        name: selectedOutput?.name || '',
    })

    return (
        <Modal
            open={visible}
            title="Thêm danh mục mới"
            okText={isUpdate ? "Cập nhật" : "Thêm"}
            cancelText="Hủy"
            okButtonProps={{
                style: {backgroundColor: 'rgb(59 130 246)'},
            }}
            onCancel={() => {
                form.resetFields()
                onCancel()
            }}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.setFieldsValue(values)
                        let data = {}
                        if (isUpdate) {
                            data = {
                                category_id: selectedOutput._id,
                                name: values?.name,
                            }
                        } else {
                            data = {
                                name: values?.name,
                            }
                        }
                        onAdd(data)
                        onCancel()
                        form.resetFields()
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info)
                    })
            }}
        >
            <Form form={form} layout="vertical">
                <Form.Item style={{width: '90%'}} className="mx-4 mt-4" name="name" label="Tên danh mục"
                           rules={[{required: true, message: 'Vui lòng nhập tên'}]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

const CategoryDetail = () => {
    const navigate = useNavigate()
    const {isLoading, isSuccess, parent, isSc, isLd, refetch, categories} = useCategoryDetail()
    const [modalVisible, setModalVisible] = useState(false)
    const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const handleAddCategory = async (values) => {
        setLoading(true)
        console.log('Add distributer:', values)
        try {
            const res = await addCategory({
                id: id,
                data: {
                    name: values.name,
                }
            })
            setLoading(false)
            if (res.status === 200) {
                toast.success('Thêm thành công')
                refetch()
            } else {
                toast.error('Thêm thất bại')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error('Thêm thất bại')
        }
    }
    const handleUpdateStatus = async ({category_id, currentStatus}) => {
        // Xử lý cập nhật trạng thái ở đây
        setLoading(true)
        const newStatus = currentStatus === 'Hoạt động' ? 0 : 1
        try {
            const res = await editCategory({
                data: {
                    category_id: category_id,
                    status: newStatus
                }
            })
            setLoading(false)
            if (res.status === 200) {
                toast.success('Cập nhật thành công')
                refetch()
            } else {
                toast.error('Cập nhật thất bại')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error('Cập nhật thất bại')
        }
    }

    const handleUpdateCategory = async (values) => {
        // Xử lý cập nhật trạng thái ở đây
        setLoading(true)
        const {name} = values
        try {
            const res = await editCategory({
                data: {
                    category_id: selectedCategory.categoryChild_id,
                    name: name
                }
            })
            setLoading(false)
            if (res.status === 200) {
                toast.success('Cập nhật thành công')
                refetch()
            } else {
                toast.error('Cập nhật thất bại')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error('Cập nhật thất bại')
        }
    }

    const handleDeleteCategory = async ({category_id}) => {
        // Xử lý xóa distributer ở đây
        setLoading(true)
        try {
            const res = await deleteCategory({
                category_id
            })

            setLoading(false)
            if (res.status === 200) {
                toast.success('Cập nhật thành công')
                refetch()
            } else {
                toast.error('Cập nhật thất bại')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error('Cập nhật thất bại')
        }
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'categoryChild_id',
            width: 230,
            align: 'center'
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 3,
            },
            align: 'center',
            width: 400,
        },
        {
            title: 'Số sản phẩm',
            dataIndex: 'count',
            sorter: {
                compare: (a, b) => a.count - b.count,
                multiple: 2,
            },
            width: 140,
            align: 'center'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            sorter: {
                compare: (a, b) => a.status - b.status,
                multiple: 1,
            },
            width: 160,
            align: 'center'
        },
        {
            title: 'Thao tác',
            fixed: 'right',
            width: 250,
            align: 'center',
            render: (text, record) => (
                <Space size="middle">
                    <Popconfirm
                        title={`Bạn muốn ${record.status === 'Hoạt động' ? 'Cập nhật thành không hoạt động' : 'Cập nhật thành hoạt động'}`}
                        onConfirm={() => handleUpdateStatus({
                            category_id: record.categoryChild_id,
                            currentStatus: record.status
                        })}
                        okText="Có"
                        okButtonProps={{
                            style: {backgroundColor: 'rgb(59 130 246)'},
                        }}
                        cancelText="Không"
                        key="update-statuss"
                    >
                        <span onClick={(e) => e.stopPropagation()}>
                          <Tooltip title="Cập nhật trạng thái">
                            {record.status === 'Hoạt động' ? <FallOutlined/> : <RiseOutlined/>}
                          </Tooltip>
                        </span>
                    </Popconfirm>
                    <Popconfirm
                        title="Bạn có chắc muốn xóa?"
                        onConfirm={() => handleDeleteCategory({category_id: record.categoryChild_id})}
                        okText="Yes"
                        okButtonProps={{
                            style: {backgroundColor: 'rgb(59 130 246)'},
                        }}
                        cancelText="No"
                        disabled={record.status === 'Hoạt động'}
                    >
                        <Tooltip
                            title={
                                record.status === 'Hoạt động'
                                    ? 'Bạn không thể xóa danh mục đang hoạt động, hãy cập nhật trạng thái trước!'
                                    : 'Xóa'
                            }
                        >
                            <DeleteOutlined/>
                        </Tooltip>
                    </Popconfirm>
                    <Tooltip
                        title="Edit"
                        onClick={() => {
                            setSelectedCategory(record)
                            setModalUpdateVisible(true)
                        }}
                    >
                        <EditOutlined/>
                    </Tooltip>
                </Space>
            )
        },
    ];
    return (
        <>
            <LayOut>
                <div className="home-right ">
                    {
                        isSc && <>
                            <div className="flex gap-2 pt-4  m-2.5 items-center px-2">
                                <LeftOutlined onClick={() => navigate(-1)} style={{fontSize:18}}/>

                                <h1 className="text-left text-xl font-semibold  ">
                                    Danh sách danh mục con của {parent?.name}
                                </h1>
                            </div>
                        </>
                    }

                    <div className="flex flex-col mt-8 gap-3 mx-4">
                        <Button style={{width: '10%'}} className="bg-blue-500" type="primary" icon={<PlusOutlined/>}
                                onClick={() => setModalVisible(true)}>
                            Thêm mới
                        </Button>
                    </div>
                    <div className="mt-10 mx-4 gap-3 flex flex-row">
                        {
                            categories &&
                            <>
                                <Table style={{width: '100%'}} columns={columns} dataSource={categories}
                                       onChange={onChange}/>
                            </>
                        }

                        <AddCategoryModal
                            visible={modalVisible}
                            onCancel={() => setModalVisible(false)}
                            onAdd={handleAddCategory}
                            selectedOutput={null}
                            isUpdate={false}
                        />
                        <AddCategoryModal
                            visible={modalUpdateVisible}
                            onCancel={() => setModalUpdateVisible(false)}
                            onAdd={handleUpdateCategory}
                            selectedOutput={selectedCategory}
                            isUpdate={true}
                        />
                    </div>
                </div>
            </LayOut>
        </>
    )
}
export default CategoryDetail
