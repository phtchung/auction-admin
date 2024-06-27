import {Button} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import LayOut from "../../Components/Layout/layout.jsx";
import {Form, Input, Modal, Popconfirm, Space, Table, Tooltip} from "antd";
import { EditOutlined, SendOutlined} from "@ant-design/icons";
import {toast} from "react-toastify";
import {reSendCode, SendCodeToEmail} from "../../Services/requestService.jsx";
import useStreamRegisterTracking from "./useStreamRegisterTracking.jsx";
import BtnOk from "../../Components/BtnOk/index.jsx";
import {CircularProgress} from "@mui/material";

const AddCategoryModal = ({visible, onCancel, onAdd,loading, selectedOutput}) => {
    const [form] = Form.useForm()

    return (
        <Modal
            open={visible}
            title="Nhập email gửi mã mới"
            okText={"Gửi"}
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
                                email: values?.email,
                                userId : selectedOutput.user_id
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
                <Form.Item style={{width: '90%'}} className="mx-4 mt-4" name="email" label="Email"
                           rules={[{required: true, message: 'Vui lòng nhập email'}]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

const StreamRegisterTracking = () => {
    const [filter, setFilter] = useState({});
    const [selectedData, setSelectedData] = useState(null)
    const [modalUpdateVisible, setModalUpdateVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const {
        adminAuctionCompletedData,
        isLoading,
        isSuccess,
        queryStream,
        setQueryStream,
    } = useStreamRegisterTracking();
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
            ...queryStream,
            ...filter,
        };
        setQueryStream(params);
    };

    const handleReSend = async ({userId, auctionId}) => {
        setLoading(true)
        try {
            const res = await reSendCode({
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
    const handleSendCode = async (values) => {
        setLoading(true)

        const {email , userId, auctionId} = values
        try {
            const res = await SendCodeToEmail(
                 {
                    auctionId, email,userId
            })
            setLoading(false)
            if (res.status === 200) {
                toast.success('Gửi mã thành công')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error('Gửi mã thất bại')
        }
    }
    const columns = [
        {
            title: 'Họ tên',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
                multiple: 1,
            },
            align: 'center',
            width: 200,
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            width: 140,
            align: 'center'
        },
        {
            title: 'Phòng đấu giá',
            dataIndex: 'room',
            sorter: {
                compare: (a, b) => a.room - b.room,
                multiple: 2,
            },
            width: 140,
            align: 'center'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: 170,
            align: 'center'
        },
        {
            title: 'Thao tác',
            fixed: 'right',
            width: 200,
            align: 'center',
            render: (text, record) => (
                <Space size="middle">
                    <Popconfirm
                        title={`Gửi lại mã truy cập phiên đấu giá?`}
                        onConfirm={() => handleReSend({
                            userId: record.user_id,
                            auctionId: record.auction_id
                        })}
                        okText="Gửi"
                        okButtonProps={{
                            style: {backgroundColor: 'rgb(59 130 246)'},
                        }}
                        cancelText="Không"
                        key="update-statuss"
                    >
                        <span onClick={(e) => e.stopPropagation()}>
                          <Tooltip title="Gửi lại mã truy cập">
                           <SendOutlined />
                          </Tooltip>
                        </span>
                    </Popconfirm>

                    <Tooltip
                        title="Gửi vào email khác"
                        onClick={() => {
                            setSelectedData(record)
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
                <div className="home-right">
                    <div className="text-left px-5 pt-3 pb-3 text-xl font-bold text-neutral-600  bg-white">
                        Theo dõi đấu giá giảm
                    </div>
                    <div className="border-b border-neutral-300 "></div>
                    <div className="bg-white p-3 my-7 border-gray-300 border h-56 text-sm gap-7 ">

                        <div className="grid-cols-4 grid">
                            <div className="col-span-3 p-8 flex flex-col gap-12 px-24">
                                <div className="grid grid-cols-3 gap-20 items-center">
                                    <div className="font-medium col-span-1 text-sm  ">Thông tin :</div>
                                    <div className="flex  col-span-2 px-8  items-center text-right">
                                            <input
                                                placeholder="Nhập số điện thoại, email tìm kiếm"
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                onChange={(e) => handleFilter('inFor', e.target.value)}
                                                style={{height: '40px', width: '100%', fontSize: 12}}
                                                className="block focus:outline-none focus:border-none border-0 py-1.5 pl-3 pr-5  ring-1 ring-inset hover:ring-black ring-gray-400  focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6"
                                            />
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
                                    <BtnOk onClick={onSubmit} text={'Tìm kiếm'}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isLoading && (
                        <>
                            <CircularProgress color="inherit" className="mt-20"/>{" "}
                        </>
                    )}

                    <div>
                        {
                            adminAuctionCompletedData &&
                            <>
                                <Table style={{width: '100%'}} columns={columns} dataSource={adminAuctionCompletedData}
                                       onChange={onChange}/>
                            </>
                        }

                        <AddCategoryModal
                            visible={modalUpdateVisible}
                            onCancel={() => setModalUpdateVisible(false)}
                            onAdd={handleSendCode}
                            selectedOutput={selectedData}
                            loading={loading}
                        />
                    </div>
                </div>
            </LayOut>
        </>
    );
};

export default StreamRegisterTracking;
