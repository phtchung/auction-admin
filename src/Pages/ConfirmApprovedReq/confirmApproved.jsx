import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { Select,Form,TreeSelect, DatePicker } from 'antd';
import {Button} from "@material-tailwind/react";
import {useState} from "react";
import {formatDateTime, treeSelectData} from "../../Utils/constant.js";
import {Dialog, DialogContent, DialogTitle, Stack} from "@mui/material";
import {toast} from "react-toastify";
import { sendApproveData} from "../../Services/requestService.jsx";
import LayOut from "../../Components/Layout/layout.jsx";
import useTreeCategories from "../CreateProductAuction/useCategories.jsx";
const { Option } = Select;
const ConfirmApproved = () => {
    const {categories , isLoading, isSuccess} = useTreeCategories()
    const [cate_name, setCate_name] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams()
    const [form] = Form.useForm();
    const {state} = useLocation()
    console.log('state',state)
    const [approveData, setApproveData] = useState({rq_id:id});
    const [open, setOpen] = useState(false);
    const handleapproveData = (key, value) => {
        setApproveData({...approveData, [key]: value});
        console.log(approveData)
    };
    const handleTreeSelect = (value,label ) => {
        handleapproveData('category', value)
        setCate_name(label[0])
    };

    if(state.status !== 1){
        navigate('/404')
    }
    const handleSubmit = async () => {
        try {
            if (Object.keys(approveData).length < 5 ) {
                toast.error("Chưa điền đủ các thông tin", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                });
                return;
            }
            const res = await sendApproveData({...approveData});
            handleOpen()
            navigate("/resultSuccess", { state: 2});
            setApproveData({rq_id:id});
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    const handleOpen = async () => {
        const values = await form.validateFields();
        setOpen(!open);
    }

  return(
      <LayOut>
              <div className="home-right bg-white">
                  <div className="flex p-4 gap-2  items-center px-2 justify-between">
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
                          <ArrowForwardIosOutlinedIcon
                              sx={{fontSize: 18}}
                              fontSize="small"
                              color="gray"
                          ></ArrowForwardIosOutlinedIcon>
                          <div className="text-base">Duyệt yêu cầu</div>

                      </div>
                  </div>
                  <div className="border-b border-gray-400  mx-5"></div>
                  <div className="flex justify-between m-2.5 items-center px-2">
                      <div className="text-left text-sm font-semibold mt-4 ">
                          Tạo thông tin phiên đấu giá sản phẩm
                      </div>

                  </div>
                  <div className="items-center font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                      <div className="grid grid-cols-2   items-center">
                          <div className="font-normal text-left col-span-1">
                              <Form
                                  form={form}
                                  className="custom-error"
                                  onFinish={(values) => {
                                      console.log({values})
                                  }}
                                  onFinishFailed={(failedValues) => {
                                      console.log({failedValues})
                                  }}
                              >
                                  <Form.Item
                                      rootClassName="p-4"
                                      name="select"
                                      label="Hình thức đấu giá"
                                      hasFeedback
                                      className="font-semibold"
                                      rules={[
                                          {
                                              required: true,
                                              message: 'Chọn hình thức đấu giá!',
                                          },
                                      ]}
                                  >
                                      <Select
                                          style={{
                                              marginLeft: '48px',
                                              maxWidth: 216,
                                          }}
                                          onChange={(value) => handleapproveData('type_of_auction', value)}
                                          placeholder="Chọn hình thức đấu giá">
                                          <Option value="1">Đấu giá tăng</Option>
                                          {
                                              state.auction_live !== "Đấu giá thông thường" &&
                                              <Option value="-1">Đấu giá giảm</Option>
                                          }
                                      </Select>
                                  </Form.Item>

                                  <div className="grid grid-cols-2  items-center">
                                      {
                                          categories &&
                                          <>
                                              <div className="font-normal text-left p-4 col-span-2">
                                                  <Form.Item
                                                      label="Danh mục sản phẩm"
                                                      name="TreeSelect"
                                                      hasFeedback
                                                      className="font-semibold "
                                                      rules={[
                                                          {
                                                              required: true,
                                                              message: 'Chọn danh mục sản phẩm!',
                                                          },
                                                      ]}
                                                  >
                                                      <TreeSelect
                                                          style={{
                                                              marginLeft: '32px',
                                                              maxWidth: 216,
                                                          }}
                                                          onChange={handleTreeSelect}
                                                          treeData={categories}
                                                      />
                                                  </Form.Item>
                                              </div>
                                          </>
                                      }

                                  <div className="font-normal col-span-2 p-4 mr-3 text-left">
                                      <Form.Item name="start_time"
                                                 className="font-semibold"
                                                 label="Thời gian bắt đầu"
                                                 rules=
                                                     {[{
                                                         type: 'object',
                                                         required: true,
                                                         message: 'Please select time!',
                                                     },
                                                         ({ getFieldValue }) => ({
                                                             validator(_, value) {
                                                                 if (!value || value > new Date(new Date().getTime() + 0 * 60 * 60 * 1000)) {
                                                                     return Promise.resolve();
                                                                 }
                                                                 return Promise.reject(new Error(`Thời gian bắt đầu phải sau ${formatDateTime(new Date(new Date().getTime() + 0 * 60 * 60 * 1000))} !`));
                                                             },
                                                         }),
                                                     ]}>
                                          <DatePicker
                                              style={{
                                                  marginLeft: '48px',
                                                  maxWidth: 216,
                                              }}
                                              onChange={(value) => handleapproveData('start_time', formatDateTime(value))}
                                              showTime format="YYYY-MM-DD HH:mm:ss"/>
                                      </Form.Item>
                                  </div>

                                      <div className="font-normal col-span-3 p-4 text-left">
                                          <Form.Item name="finish_time"
                                                     className="font-semibold"
                                                     label="Thời gian kết thúc"
                                                     rules=
                                                         {[{
                                                             type: 'object',
                                                             required: true,
                                                             message: 'Please select time!',
                                                         },
                                                             ({ getFieldValue }) => ({
                                                                 validator(_, value) {
                                                                     if (!value || getFieldValue('start_time') < value) {
                                                                         return Promise.resolve();
                                                                     }
                                                                     return Promise.reject(new Error('Thời gian kết thúc phải sau thời gian bắt đầu!'));
                                                                 },
                                                             }),
                                                         ]}>
                                              <DatePicker
                                                  style={{
                                                      marginLeft: '48px',
                                                      maxWidth: 216,
                                                  }}
                                                  onChange={(value) => handleapproveData('finish_time', formatDateTime(value))}
                                                  showTime format="YYYY-MM-DD HH:mm:ss"/>
                                          </Form.Item>

                                          <Form.Item>
                                              <div className="flex m-6 gap-5 pb-6 justify-end mr-10">
                                                  <Button
                                                      type="primary"
                                                      onClick={handleOpen}
                                                      className="p-2 px-6 py-2 right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                                                      Hoàn tất
                                                  </Button>
                                              </div>
                                          </Form.Item>
                                      </div>
                                  </div>
                              </Form>
                          </div>
                      </div>

                      <Dialog open={open} onClose={handleOpen} fullWidth maxWidth="md">
                          <DialogTitle>
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-sm">
                                  Xác nhận thông tin tạo phiên đấu giá
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
                                      className="items-center font-medium text-sm gap-6 my-8 mx-8 px-1 space-y-6 ">
                                      <div className="flex pt-2  gap-6 text-right">
                                          <div className=" w-1/5"> Hình thức đấu giá :</div>
                                          <div className="col-span-2">
                                              {approveData?.type_of_auction === '1' ? 'Đấu giá tăng' : approveData?.type_of_auction === '-1' ? 'Đấu giá giảm' : null}
                                          </div>
                                      </div>

                                      <div className="flex pt-1  gap-6 text-right">
                                          <div className=" w-1/5"> Danh mục sản phẩm :</div>
                                          <div className="col-span-2">
                                              {cate_name}
                                          </div>
                                      </div>

                                      <div className="flex pt-1  gap-6 text-right">
                                          <div className=" w-1/5"> Thời gian bắt đầu :</div>
                                          <div className="col-span-2">
                                              {approveData?.start_time || null}
                                          </div>
                                      </div>

                                      <div className="flex pt-1  gap-6 text-right">
                                          <div className=" w-1/5"> Thời gian kết thúc :</div>
                                          <div className="col-span-2">
                                              {approveData?.finish_time || null}
                                          </div>
                                      </div>

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
                                          Tạo
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
export default ConfirmApproved
