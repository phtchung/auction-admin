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

const { Option } = Select;
const ConfirmApproved = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const {state} = useLocation()
    const [approveData, setApproveData] = useState({rq_id:id});
    const [open, setOpen] = useState(false);
    const handleapproveData = (key, value) => {
        setApproveData({...approveData, [key]: value});
    };
    const handleTreeSelect = (value, label) => {
        handleapproveData('category',value)
        handleapproveData('category_label',label)
    };
    if(state !== 1){
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

    const handleOpen = () => setOpen(!open);
  return(
      <LayOut>
              <div className="home-right bg-white">
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
                      <div className="grid grid-cols-6  items-center">
                          <div className="font-normal text-left col-span-2">
                              <Form.Item
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
                                      marginLeft: '16px',
                                      maxWidth: 176,
                                  }}
                                      onChange={(value) => handleapproveData('type_of_auction',value)}
                                      placeholder="Chọn hình thức đấu giá">
                                      <Option  value="1">Đấu giá tăng</Option>
                                      <Option value="-1">Đấu giá giảm</Option>
                                  </Select>
                              </Form.Item>
                          </div>
                          <div className="font-normal text-left col-span-1">

                          </div>
                          <div className="font-normal col-span-3 text-left">
                              <Form.Item name="date-time-picker"
                                         className="font-semibold"
                                         label="Thời gian bắt đầu"
                                         rules=
                                             {[{
                                                 type: 'object',
                                                 required: true,
                                                 message: 'Please select time!',
                                             },
                                             ]}>
                                  <DatePicker
                                      onChange={(value) => handleapproveData('start_time',formatDateTime(value))}
                                      showTime format="YYYY-MM-DD HH:mm:ss"/>
                              </Form.Item>
                          </div>
                      </div>

                      <div className="grid grid-cols-6  items-center">
                          <div className="font-normal text-left col-span-2">
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
                                          maxWidth: 176,
                                      }}
                                      onChange={handleTreeSelect}
                                      // onChange={(value) => handleapproveData('category',value)}
                                      treeData={treeSelectData}
                                  />
                              </Form.Item>
                          </div>
                          <div className="font-normal text-left col-span-1">

                          </div>
                          <div className="font-normal col-span-3 text-left">
                              <Form.Item name="date-time-picker"
                                         className="font-semibold"
                                         label="Thời gian kết thúc"
                                         rules=
                                             {[{
                                                 type: 'object',
                                                 required: true,
                                                 message: 'Please select time!',
                                             },
                                             ]}>
                                  <DatePicker
                                      onChange={(value) => handleapproveData('finish_time',formatDateTime(value))}
                                      showTime format="YYYY-MM-DD HH:mm:ss"/>
                              </Form.Item>
                          </div>
                      </div>
                      <div className="flex m-6 gap-5 justify-end mr-10">

                          <Button
                              onClick={handleOpen}
                              className="p-2 px-6 py-2 right-0 bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                              Thiết lập
                          </Button>
                      </div>

                      <Dialog  open={open} onClose={handleOpen} fullWidth maxWidth="md" >
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
                                              {approveData?.category_label || null}
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
