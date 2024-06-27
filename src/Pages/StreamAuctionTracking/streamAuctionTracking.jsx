import {Button} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import LayOut from "../../Components/Layout/layout.jsx";
import {Form, Input, Modal, Popconfirm, Space, Table, Tooltip} from "antd";
import {DeleteOutlined, EditOutlined, SendOutlined} from "@ant-design/icons";
import {toast} from "react-toastify";
import useStreamAuctionTracking from "./useStreamAuctionTracking.jsx";
import {reSendCode, SendCodeToEmail, setStreamUrl} from "../../Services/requestService.jsx";

const AddCategoryModal = ({visible, onCancel, onAdd,loading, selectedOutput}) => {
    const [form] = Form.useForm()

    return (
        <Modal
            open={visible}
            title="Nhập đường dẫn stream cho phiên đấu giá"
            okText={"Xác nhận"}
            cancelText="Hủy"
            destroyOnClose={true}
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
                        data = {
                                auctionId: selectedOutput.auction_id,
                            url_stream: values?.url_stream,
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
                <Form.Item style={{width: '90%'}} className="mx-4 mt-4" name="url_stream" label='Stream URL'
                           rules={[{required: true, message: 'Vui lòng nhập đường dẫn stream'}]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

const StreamAuctionTracking = () => {
    const [filter, setFilter] = useState({});
    const [selectedData, setSelectedData] = useState(null)
    const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const {
        data,
        isLoading,
        isSuccess,
        queryTracking, setQueryTracking
    } = useStreamAuctionTracking();
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const handleFilter = (key, value) => {
        setFilter({...filter, [key]: value});
    };

    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    const onSubmit = () => {
        const params = {
            ...queryTracking,
            ...filter,
        };
        setQueryTracking(params);
    };

    const handleReSend = async ({userId, auctionId}) => {
        setLoading(true)
        try {
            const res = await setStreamUrl({
                userId, auctionId
            })
            setLoading(false)
            if (res.status === 200) {
                toast.success('Gửi mã thành công')
            }
        } catch (error) {
            setLoading(false)
            toast.error('Gửi mã thất bại')
        }
    }

    const handleSetUrlStream = async (values) => {
        setLoading(true)

        const {url_stream, auctionId} = values
        try {
            const res = await setStreamUrl(
                 {
                     url_stream, auctionId
            })
            setLoading(false)
            if (res.status === 200) {
                toast.success('Thiết lập đường dẫn thành công.')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error('Gửi mã thất bại')
        }
    }
    const columns = [
        {
            title: 'Hạn đăng ký',
            dataIndex: 'register_finish',
            align: 'center',
            width: 170,
        },
        {
            title: 'Phòng đấu giá',
            dataIndex: 'room',
            sorter: {
                compare: (a, b) => a.room - b.room,
                multiple: 2,
            },
            width: 130,
            align: 'center'
        },
        {
            title: 'Đăng ký',
            dataIndex: 'register_count',
            width: 90,
            align: 'center'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'state',
            width: 110,
            align: 'center'
        },
        {
            title: 'Stream URL',
            dataIndex: 'url_stream',
            width: 150,
            align: 'center',
            render:(record) =>(
                <Space>
                    <a target="_blank" href={record}>{record}</a>
                </Space>
            )
        },
        {
            title: 'Bắt đầu',
            dataIndex: 'start_time',
            width: 170,
            align: 'center'
        },
        {
            title: 'Kết thúc',
            dataIndex: 'finish_time',
            width: 170,
            align: 'center'
        },
        {
            title: 'Thao tác',
            fixed: 'right',
            width: 150,
            align: 'center',
            render: (text, record) => (
                <Space size="middle">
                    {/*<Popconfirm*/}
                    {/*    title={`Gửi lại mã truy cập phiên đấu giá?`}*/}
                    {/*    onConfirm={() => handleReSend({*/}
                    {/*        userId: record.user_id,*/}
                    {/*        auctionId: record.auction_id*/}
                    {/*    })}*/}
                    {/*    okText="Gửi"*/}
                    {/*    okButtonProps={{*/}
                    {/*        style: {backgroundColor: 'rgb(59 130 246)'},*/}
                    {/*    }}*/}
                    {/*    cancelText="Không"*/}
                    {/*    key="update-statuss"*/}
                    {/*>*/}
                    {/*    <span onClick={(e) => e.stopPropagation()}>*/}
                    {/*      <Tooltip title="Gửi lại mã truy cập">*/}
                    {/*       <SendOutlined />*/}
                    {/*      </Tooltip>*/}
                    {/*    </span>*/}
                    {/*</Popconfirm>*/}

                    <Tooltip
                        title="Nhập Stream URL"
                        onClick={() => {
                            setSelectedData(record)
                            setModalUpdateVisible(true)
                        }}
                    >
                        <EditOutlined/>
                    </Tooltip>

                    <Popconfirm
                        title="Chắc muốn hủy phiên đấu giá?"
                        // onConfirm={() => handleDeleteCategory({category_id: record.categoryChild_id})}
                        okText="Yes"
                        okButtonProps={{
                            style: {backgroundColor: 'rgb(59 130 246)'},
                        }}
                        cancelText="No"
                        disabled={record.register_count !== 0}
                    >
                        <Tooltip
                            title={
                                record.register_count !== 0
                                    ? 'Không thể hủy bỏ phiên đấu giá vì có đã có người đăng ký tham gia!'
                                    : 'Hủy'
                            }
                        >
                            <DeleteOutlined/>
                        </Tooltip>
                    </Popconfirm>
                </Space>
            )
        },
    ];
    return (
        <>
            <LayOut>
                <div className="home-right">
                    <div className="text-left px-5 pt-3 pb-3 text-xl font-bold text-neutral-600  bg-white">
                        Theo dõi đấu giá giảm
                    </div>
                    <div className="border-b border-neutral-300 "></div>
                    <div className="bg-white p-3 my-7 border-gray-300 border h-56 text-sm gap-7 ">

                        <div className="grid-cols-4 grid">
                            <div className="col-span-3 p-8 flex flex-col gap-12 px-24">
                                <div className="grid grid-cols-3 gap-20 items-center">
                                    <div className="font-medium col-span-1 text-sm  "> Trạng thái :</div>
                                    <div className="flex  col-span-2 px-8  items-center text-right">
                                        <select id="countries"
                                                onChange={(e) => handleFilter('state', e.target.value)}
                                                className=" border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                                            <option selected>Trạng thái phiên đấu giá</option>
                                            <option value="S">Đăng ký</option>
                                            <option value="O">Đang đấu giá</option>
                                            <option value="R">Sắp bắt đầu</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-20 items-center">
                                    <div className="font-medium col-span-1 text-sm  ">Mã phòng :</div>
                                    <div className="flex px-8 col-span-2  items-center text-right">
                                        <input
                                            placeholder="Nhập mã phòng"
                                            type="text"
                                            name="room"
                                            id="room"
                                            onChange={(e) => handleFilter('room', e.target.value)}
                                                style={{height: '40px', width: '100%', fontSize: 12}}
                                                className="block focus:outline-none focus:border-none border-0 py-1.5 pl-3 pr-5  ring-1 ring-inset hover:ring-orange-600 ring-gray-400  focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6"
                                            />
                                    </div>
                                </div>

                            </div>
                            <div className="col-span-1">
                                <div className="p-8  ">
                                    <Button
                                        onClick={onSubmit}
                                        size="md"
                                        className="  bg-blue-800 text-sm  font-medium  py-2 rounded   px-6"
                                    >
                                        Tìm kiếm
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {
                            data &&
                            <>
                                <Table style={{width: '100%'}} columns={columns} dataSource={data}
                                       onChange={onChange}/>
                            </>
                        }

                        <AddCategoryModal
                            visible={modalUpdateVisible}
                            onCancel={() => setModalUpdateVisible(false)}
                            onAdd={handleSetUrlStream}
                            selectedOutput={selectedData}
                            loading={loading}
                        />
                    </div>
                </div>
            </LayOut>
        </>
    );
};

export default StreamAuctionTracking;
