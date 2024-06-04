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
    getItem('Quản lý đấu giá', '1', [
        getItem('Người dùng ', '/reqTracking'),
        getItem('Hệ thống', "/adminBidTracking"),
    ]),
    // getItem( 'Quản lý đấu giá người dùng', '/reqTracking'),
    // getItem('Quản lý đấu giá hệ thống', "/adminBidTracking"),
    // getItem('Quản lý đấu giá Livestream', "/streamAuctionTracking"),
    // getItem('Quản lý đăng ký đấu giá', "/streamRegisterTracking"),
    getItem('Tạo phiên đấu giá', "/createProductAuction"),
    getItem('Lịch sử yêu cầu', "/requestHistory"),
    getItem('Lịch sử đấu giá', '3', [
        getItem('Người dùng ', "/userAuctionCompleted"),
        getItem('Hệ thống', "/adminAuctionCompleted"),
    ]),
    // getItem('Lịch sử đấu giá User', "/userAuctionCompleted"),
    // getItem('Lịch sử đấu giá hệ thống', "/adminAuctionCompleted"),
    getItem('Yêu cầu trả hàng', '4', [
        getItem('Người dùng ', "/returnProductUser"),
        getItem('Hệ thống', "/returnProductAdmin"),
    ]),
    // getItem('Yêu cầu trả hàng của User', "/returnProductUser"),
    // getItem('Yêu cầu trả hàng của hệ thống', "/returnProductAdmin"),
    getItem('Đấu giá livestream', '2', [
        getItem('Quản lý đấu giá ', "/streamAuctionTracking"),
        getItem('Đăng ký đấu giá', "/streamRegisterTracking"),
    ]),
    getItem('Danh mục sản phẩm', "/categories"),
    getItem('Tạo blog', "/createBlog"),
    getItem('Đăng xuất', '/logout'),
];

const LayOut = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const activeItem = '/'+location.pathname.split('/')[1]
    console.log(activeItem)
    const navigate = useNavigate()

    return (
        <>
            <Layout style={{
                minHeight: '100vh',
            }}>
                {/*<Sider style={{ position: 'fixed', height: '100%', left: 0 }}  onCollapse={(value) => setCollapsed(value)}  >*/}
                {/*    <div className="demo-logo-vertical" />*/}
                {/*    <Menu style={{fontSize:12}} theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}  >*/}
                {/*        {items.map((item) => (*/}
                {/*            <Menu.Item key={item.key}  >*/}
                {/*                <span>{item.label}</span>*/}
                {/*                <Link to={item.key} />*/}
                {/*            </Menu.Item>*/}
                {/*        ))}*/}
                {/*    </Menu>*/}
                {/*</Sider>*/}

                <Sider width={230}  trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu theme="dark" onClick={({key}) => navigate(key)} defaultSelectedKeys={[activeItem]} mode="inline" items={items} />
                </Sider>

                <Layout style={{ marginLeft: collapsed ? 80 : 0 }}>
                    <Header
                        style={{
                            padding: 0,
                        }}
                    >
                    </Header>
                    <Content
                        style={{
                            margin: '0 32px 32px',
                            width: '77rem',
                            textAlign:'center',
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

