import {useEffect, useState} from 'react';
import {Avatar, Layout, Menu} from 'antd';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuthContext} from "../context/AuthContext.jsx";
import {useQueryClient} from "@tanstack/react-query";
import useLogout from "../../Hook/useLogout.js";
import CurrentTime from "../Clock/currentTime.jsx";
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
    const {currentUser} = useAuthContext();
    const queryClient = useQueryClient();
    const {loading, logout} = useLogout()
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)


    const selectItem = (index) => {
        setSelectedItem(index);
    };
    const handleNotify = async () => {
        if (open1 === false) {
            try {
                queryClient.invalidateQueries({
                    queryKey: ["getNotify", currentUser.id],
                });
            } catch (error) {
                toast.error(error?.response?.data?.message);
            }
        }
    }
    const handleRead = async () => {
        try {
            setStatus(1)
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message);
        }
    }
    const handleUrl = (url) => {
        naviagate(`../${url}`, {replace: true})
        setOpen(!open)
    }
    return (
        <>
            <Layout style={{
                minHeight: '100vh',
            }}>


                <Sider width={215} trigger={null} collapsible collapsed={collapsed}
                       onCollapse={(value) => setCollapsed(value)}>
                    <Menu theme="dark" onClick={({key}) => navigate(key)} defaultSelectedKeys={[activeItem]}
                          mode="inline" items={items}/>
                </Sider>
                <div className="flex flex-col gap-6">
                    <div className="">
                        <header className={`flex w-full h-16 header  items-center dark:bg-dark`}
                                style={{backgroundColor: '#F27C08'}}>
                            <div className="container">
                                <div className="relative -mx-2 flex items-center justify-between">
                                    <div className="flex w-full items-center justify-between px-4">
                                        {
                                            !currentUser &&
                                            <>
                                                <div className="hidden justify-end pr-16 sm:flex  lg:pr-0">
                                                    <a
                                                        href="/signup"
                                                        className="px-7 py-3 rounded-md  hover:text-white hover:bg-orange-400 text-base font-medium text-white"
                                                    >
                                                        Đăng kí
                                                    </a>

                                                    <a
                                                        href="/login"
                                                        className="rounded-md hover:bg-orange-400  hover:text-white px-7 py-3 text-base font-medium text-white "
                                                    >
                                                        Đăng nhập
                                                    </a>
                                                </div>
                                            </>
                                        }

                                        <div className=" flex relative   ml-auto   items-center   px-5 ">
                                            {
                                                currentUser && <>
                                                    <div className="w-40">
                                                        <CurrentTime/>
                                                    </div>
                                                    <div onClick={() => setDropdownOpen(!dropdownOpen)}
                                                         className="relative lg:w-44 md:w-28">
                                                        <a className="flex items-center gap-4" href="#"
                                                           onClick={() => setDropdownOpen(!dropdownOpen)}>
                                                                <span className="hidden text-right lg:block flex-grow">
                                                                    <span
                                                                        className="block text-sm font-medium truncate text-white dark:text-white">{currentUser?.username}</span>
                                                                </span>

                                                            <span className="rounded-full text-neutral-800 text-base">
                                                               Welcome, Admin
                                                            </span>

                                                            <svg
                                                                className={dropdownOpen ? 'rotate-180' : ' fill-white sm:block'}
                                                                width="12" height="8" viewBox="0 0 12 8" fill="white"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                      d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                                                                      fill=""></path>
                                                            </svg>
                                                        </a>

                                                        <div style={{display: dropdownOpen ? 'block' : 'none'}}
                                                             className="absolute -right-1 mt-4 flex w-full  flex-col rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                                            <ul className="flex flex-col  border-b border-stroke  dark:border-strokedark">
                                                                <li>
                                                                    <a href="/user/profile"
                                                                       className="flex px-1.5 py-2 hover:text-neutral-700 items-center gap-2 text-sm  duration-300 ease-in-out text-neutral-600 hover:bg-neutral-100">
                                                                        <svg className="fill-black" width="16" height="16"
                                                                             viewBox="0 0 22 22" fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                                                                                fill=""></path>
                                                                            <path
                                                                                d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                                                                                fill=""></path>
                                                                        </svg>
                                                                        <span className="truncate">Tài khoản cá nhân</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <button onClick={logout}
                                                                    className="flex px-1.5 py-2 hover:text-neutral-700 items-center gap-2 text-sm w-full hover:bg-orange-300 bg-white border-none  duration-300 ease-in-out text-neutral-600 ">
                                                                <svg className="fill-black" width="16" height="16"
                                                                     viewBox="0 0 22 22" fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031
                                                                 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                                                                        fill=""></path>
                                                                    <path
                                                                        d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                                                                        fill=""></path>
                                                                </svg>
                                                                Đăng xuất
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                    <Layout style={{marginLeft: collapsed ? 80 : 0}}>
                        <Content
                            style={{
                                margin: '0 32px 32px',
                                width: '77rem',
                                textAlign: 'center',
                            }}
                        >
                            <div>
                                {children}
                            </div>
                        </Content>
                    </Layout>
                </div>


            </Layout>
        </>
    );
};
export default LayOut;

const ListItem = ({children, NavLink, onItemClick, active}) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className={`flex py-2  text-sm lg:ml-5 lg:inline-flex hover:text-white text-gray-100 ${active ? 'active-nav' : ''}`}
                    onClick={onItemClick}
                >
                    {children}
                </a>
            </li>
        </>
    );
};
