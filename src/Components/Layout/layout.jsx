import {useEffect, useState} from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import {Link, useNavigate} from "react-router-dom";
const { Header, Content, Sider } = Layout;
function getItem(label, key,children,path) {
    return {
        key,
        children,
        label,
        path
    };
}

const items = [
    getItem('Quản lý đấu giá người dùng', '1',null,'/admin/reqTracking'),
    getItem('Quản lý đấu giá hệ thống', '2',null,'/admin/adminBidTracking'),
    getItem('Tạo phiên đấu giá', '3',null,'/admin/createProductAuction'),

    // getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),

];



const LayOut = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        // Lấy path từ URL và chọn key tương ứng
        const path = window.location.pathname
        const selectedItem = items.find((item) => item.path === path)
        if (selectedItem) {
            setSelectedKey(selectedItem.key)
        }
    }, [])
    const navigate = useNavigate()

    const [selectedKey, setSelectedKey] = useState('1')
    console.log(selectedKey)
    return (
        <>
            <Layout>
                <Sider style={{
                    minHeight: '100vh',}}  className="fixed-sider " onCollapse={(value) => setCollapsed(value)}  >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark"  selectedKeys={[selectedKey]}     mode="inline"  >
                        {items.map((item) => (
                            <Menu.Item key={item.key} onClick={() =>  setSelectedKey(item.key)} >
                                {item.icon}
                                <span>{item.label}</span>
                                <Link to={item.path} />
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
                            boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)',

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

