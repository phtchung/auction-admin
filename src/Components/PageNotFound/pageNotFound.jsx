import { Button, Result } from 'antd';
import {useNavigate} from "react-router-dom";
import LayOut from "../Layout/layout.jsx";
const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <LayOut>
            <Result
                status="404"

                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button onClick={() => navigate('/reqTracking')} >Trang chủ</Button>}
            />
        </LayOut>

    )

};
export default PageNotFound;
