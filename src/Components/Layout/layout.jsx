import {useEffect, useState} from 'react';
import {  Layout, Menu } from 'antd';
import {Link, useLocation, useNavigate} from "react-router-dom";
const { Header, Content, Sider } = Layout;
function getItem(label, key,children) {
    return {
        key,
        children,
        label,
    };
}

const items = [
    getItem('Quản lý đấu giá người dùng', "/reqTracking"),
    getItem('Quản lý đấu giá hệ thống', "/adminBidTracking"),
    getItem('Tạo phiên đấu giá', "/createProductAuction"),
    getItem('Lịch sử yêu cầu', "/requestHistory"),
    getItem('Lịch sử đấu giá User', "/userAuctionCompleted"),
    getItem('Lịch sử đấu giá hệ thống', "/adminAuctionCompleted"),
    getItem('Yêu cầu trả hàng của User', "/returnProductUser"),
    getItem('Đăng xuất', '/logout'),
    // getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),

];

const LayOut = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <Layout>
                <Sider style={{
                    minHeight: '100vh'}}  className="fixed-sider " onCollapse={(value) => setCollapsed(value)}  >
                    <div className="demo-logo-vertical" />
                    <Menu style={{fontSize:12}} theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}  >
                        {items.map((item) => (
                            <Menu.Item key={item.key}  >
                                <span>{item.label}</span>
                                <Link to={item.key} />
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                        }}
                    />
                    <Content
                        style={{
                            margin: '0 32px 32px',
                            width:1260,
                            minHeight:300,
                            textAlign:'center'
                        }}
                    >
                    <div>
                        {children}
                    </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    );
};
export default LayOut;

