
import {  Result } from 'antd';
import {Button} from "@material-tailwind/react";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import LayOut from "../Layout/layout.jsx";
import BtnOk from "../BtnOk/index.jsx";
const ResultPage = () => {
    const navigate = useNavigate()
    const {state} = useLocation()

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    useEffect(() => {
        // Đặt tiêu đề và subTitle dựa trên giá trị của state
        if (state === 2) {
            setTitle('Duyệt yêu cầu đấu giá thành công!');
        } else if (state === 13) {
            setTitle('Hủy bỏ yêu cầu đấu giá thành công');
            setSubTitle(`Yêu cầu chưa đủ điều kiện tham gia đấu giá .`);
        }else if(state === 200){
            setTitle('Tạo phiên đấu giá cho sản phẩm thành công');
            setSubTitle(`Sản phẩm sẽ sớm được đưa ra đấu giá .`);
        }
        else if(state === 14){
            setTitle('Duyệt yêu cầu trả hàng thành công');
            setSubTitle(`Sản phẩm sẽ được trả lại cho người bán hàng.`);
        }else if(state === 15){
            setTitle('Từ chối cầu trả hàng thành công');
            setSubTitle(``);
        }else if(state === 17){
            setTitle('Tạo bài viết thành công');
            setSubTitle(``);
        }
    }, [state]);
  return(
      <LayOut>
          <Result
              status="success"
              title={title}
              subTitle={subTitle}
              extra={[
                  <BtnOk text={'Về trang chủ'} onClick={() => navigate('/reqTracking') }/>
              ]}
          />
      </LayOut>
  )
}

export default ResultPage
