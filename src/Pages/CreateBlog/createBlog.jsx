import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";
import {createBlog} from "../../Services/requestService.jsx";
import LayOut from "../../Components/Layout/layout.jsx";
import { Form, Input} from "antd";
import FileUpload from "../../Components/UploadFile/uploadFile.jsx";
import {Button} from "@material-tailwind/react";
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
const CreateBlog = () => {
    const navigate = useNavigate()
    const [blogData, setBlogData] = useState(null)
    const [open, setOpen] = useState(false);

    const handleSingleFileUpload = (formData) => {
        handleBlogData("singlefile", formData)
    }
    const handleSingleFileUpload1 = (formData) => {
        handleBlogData("singlefile_sub", formData)
    }

    const handleBlogData = (key, value) => {
        setBlogData({...blogData, [key]: value});
        console.log(blogData)
    };
    const handleOpen = () => setOpen(!open);

    const handleSubmit = async () => {
        try {
            if (!blogData) {
                toast.error("Chưa điền thông tin");
                return;
            }
            const res = await createBlog({...blogData});

            navigate('/resultSuccess',{state : 17})
            handleOpen()
            setBlogData(null);
        } catch (error) {
            handleOpen()
            toast.error(error?.response?.data?.message);
        }
    };
  return(
      <>
          <LayOut>
              <div className="home-right">
                  <div className="flex px-6 pt-6 pb-2 gap-2 items-center  justify-end">
                      <div className="flex items-center  gap-2">
                          <div className="text-left text-base ">Tạo blog đấu giá</div>
                      </div>
                  </div>
                  <div className="border-b border-gray-400  mx-5"></div>
                  <div className="flex justify-between m-2.5 items-center px-2">
                      <div className="text-left text-base font-semibold mt-4 ">
                           Thông tin blog
                      </div>
                  </div>
                  <div className="flex flex-col gap-3">
                      <Form
                          {...formItemLayout}
                          style={{
                              maxWidth: 660,
                              marginLeft: 200
                          }}
                      >
                          <Form.Item
                              name="sub_image"
                              label="Hình ảnh tiêu đề, 250x250"
                              style={{textAlign: "left"}}
                              rules={[
                                  {
                                      required: true,
                                  },
                              ]}
                          >
                              <FileUpload length={1} onGetFormData={handleSingleFileUpload1}/>
                          </Form.Item>

                          <Form.Item
                              name="image"
                              label="Hình ảnh chính"
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
                              name="title"
                              label="Tiêu đề"
                              rules={[
                                  {
                                      required: true,
                                      message: 'Hãy điền tiêu đề bài viết!',
                                      whitespace: true,
                                  },
                              ]}
                          >
                              <Input
                                  onChange={(e) => handleBlogData('title', e.target.value)}
                                  placeholder="Tiêu đề bài viết"/>
                          </Form.Item>


                          <Form.Item
                              name="subtitle1"
                              label="Tiêu đề phụ 1"
                              rules={[
                                  {
                                      required: true,
                                      message: 'Hãy điền tiêu đề phụ thứ nhất!',
                                  },
                              ]}
                          >
                              <Input.TextArea
                                  placeholder="Tiêu đề phụ thứ nhất"
                                  onChange={(e) => handleBlogData('subtitle1', e.target.value)}
                                  maxLength={300}/>
                          </Form.Item>
                          <Form.Item
                              name="subtitle2"
                              label="Tiêu đề phụ 2"
                              rules={[
                                  {
                                      message: 'Hãy điền tiêu đề phụ thứ hai!',
                                  },
                              ]}
                          >
                              <Input.TextArea
                                  placeholder="Tiêu đề phụ thứ hai"
                                  onChange={(e) => handleBlogData('subtitle2', e.target.value)}
                                  maxLength={300}/>
                          </Form.Item>
                          <Form.Item
                              name="subtitle3"
                              label="Tiêu đề phụ 3"
                              rules={[
                                  {
                                      message: 'Hãy điền tiêu đề phụ thứ ba!',
                                  },
                              ]}
                          >
                              <Input.TextArea
                                  placeholder="Tiêu đề phụ thứ ba"
                                  onChange={(e) => handleBlogData('subtitle3', e.target.value)}
                                  maxLength={300}/>
                          </Form.Item>
                          <Form.Item
                              name="content"
                              label="Nội dung"
                              rules={[
                                  {
                                      required: true,
                                      message: 'Hãy điền nội dung bài viết!',
                                  },
                              ]}
                          >
                              <Input.TextArea
                                  placeholder="Nội dung"
                                  onChange={(e) => handleBlogData('content', e.target.value)}
                                  maxLength={300}/>
                          </Form.Item>
                      </Form>

                  </div>
                  <Button
                      onClick={handleSubmit}
                      className="mb-8 w-32 text-center bg-yellow-400 rounded text-black border-gray-400 border-none text-sm  font-semibold focus:outline-0">
                      Hoàn tất
                  </Button>
              </div>
          </LayOut>
      </>
  )
}

export default CreateBlog
