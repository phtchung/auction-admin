
import {  Result } from 'antd';
import {Button} from "@material-tailwind/react";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import LayOut from "../Layout/layout.jsx";
const ResultPage = () => {
    const navigate = useNavigate()
    const {state} = useLocation()

    console.log(state)
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    useEffect(() => {
        // Đặt tiêu đề và subTitle dựa trên giá trị của state
        if (state === 2) {
            setTitle('Duyệt yêu cầu đấu giá thành công!');
            setSubTitle(`Yêu cầu  sẽ được đấu giá lúc .`);
        } else if (state === 13) {
            setTitle('Hủy bỏ yêu cầu đấu giá thành công');
            setSubTitle(`Yêu cầu  chưa đủ điều kiện tham gia đấu giá .`);
        }else if(state === 200){
            setTitle('Tạo phiên đấu giá cho sản phẩm thành công');
            setSubTitle(`Sản phẩm sẽ sớm được đưa ra đấu giá .`);
        }
    }, [state]);
  return(
      <LayOut>
          <Result
              status="success"
              title={title}
              subTitle={subTitle}
              extra={[
                  <Button
                      onClick={() => navigate('/reqTracking') }
                      className="p-2 px-6 py-2 right-0 bg-blue-500 rounded text-white border-gray-400 border-none text-sm  font-medium focus:outline-0">
                      Về trang chủ
                  </Button>

              ]}
          />
      </LayOut>
  )
}

export default ResultPage
