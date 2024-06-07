import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {
     adminProductStatus,
    tabDataBiddingAdmin
} from "../../Utils/constant.js";

import TabItem from "../../Components/TabItem/TabItem.jsx";
import {CircularProgress} from "@mui/material";

import {
    MaterialReactTable,
} from 'material-react-table';
import {Button} from "@material-tailwind/react";
import useAdminBiddingTracking from "./useAdminBiddingTracking.jsx";
import CountdownTimer from "../../Components/Clock/countDownTime.jsx";
import LayOut from "../../Components/Layout/layout.jsx";


const AdminBiddingTracking = () => {
    const navigate = useNavigate();

    const {
        isLoading,
        isSuccess,
        data,
        isScCount,
        adminBidCount,
        columns,
        status,
        setStatus,
    } = useAdminBiddingTracking();


    const [selectedTab, setSelectedTab] = useState(status);
    const handelClick = (value) => {
        setStatus(adminProductStatus(value));
        setSelectedTab(value);
        navigate(`/adminBidTracking?status=${value}`);
    };
    return (
        <LayOut>
                <div className="home-right ">
                    <div className="flex justify-between items-center px-5 pt-3 pb-3   text-neutral-600  ">
                        <div className="text-left text-xl font-bold  ">
                            Quản lý sản phẩm đấu giá hệ thống
                        </div>
                        <div className="  ">
                            <CountdownTimer initialTimeInSeconds={60}/>
                        </div>
                    </div>
                    <div className="border-b border-neutral-300 "></div>
                    <div className="flex items-center font-normal justify-center pt-10 pb-8 flex-wrap  bg-zinc-100 ">
                        {isSuccess && isScCount && (
                            <div className="flex justify-center bg flex-wrap">
                                <>
                                    <TabItem
                                        data={tabDataBiddingAdmin[0]}
                                        count={adminBidCount?.countNewProduct}
                                        onClick={() => handelClick(2)}
                                        isSelected={selectedTab === 2}
                                    ></TabItem>

                                    <TabItem
                                        data={tabDataBiddingAdmin[1]}
                                        count={adminBidCount?.countProductBid}
                                        onClick={() => handelClick(3)}
                                        isSelected={selectedTab === 3 }
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataBiddingAdmin[2]}
                                        count={adminBidCount?.countProductSuccess}
                                        onClick={() => handelClick(5)}
                                        isSelected={selectedTab === 5}
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataBiddingAdmin[3]}
                                        count={adminBidCount?.countProductConfirm}
                                        onClick={() => handelClick(6)}
                                        isSelected={selectedTab === 6}
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataBiddingAdmin[4]}
                                        count={adminBidCount?.countProductDelivery}
                                        onClick={() => handelClick(7)}
                                        isSelected={selectedTab === 7}
                                    ></TabItem>

                                    <TabItem
                                    data={tabDataBiddingAdmin[5]}
                                    count={adminBidCount?.countProductCompleted}
                                    onClick={() => handelClick(8)}
                                    isSelected={selectedTab === 8}
                                ></TabItem>
                                    <TabItem
                                        data={tabDataBiddingAdmin[6]}
                                        count={adminBidCount?.countProductCancel}
                                        onClick={() => handelClick(11)}
                                        isSelected={selectedTab === 11}
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataBiddingAdmin[7]}
                                        count={adminBidCount?.countProductReturn}
                                        onClick={() => handelClick(9)}
                                        isSelected={selectedTab === 9}
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataBiddingAdmin[8]}
                                        count={adminBidCount?.countProductFailure}
                                        onClick={() => handelClick(10)}
                                        isSelected={selectedTab === 10}
                                    ></TabItem>
                                </>
                            </div>
                        )}
                    </div>
                    {isLoading && (
                        <>
                            <CircularProgress color="inherit" className="mt-20"/>{" "}
                        </>
                    )}

                    {isSuccess && (
                        <>
                            <div className="border border-gray-300 mt-6">

                                <MaterialReactTable
                                    enableColumnResizing={true}
                                    defaultColumn= {{
                                        minSize: 80,
                                        maxSize: 500,
                                    }}
                                    columns={columns}
                                    data={(data)}
                                    isloading={isLoading}
                                    enableDensityToggle={false}
                                    enableColumnFilters={false}
                                    enableHiding={false}
                                    showColumnFilters={true}
                                    enableColumnActions={false}
                                    muiTablePaperProps={{
                                        sx: {
                                            margin:0,
                                            padding:0,
                                            maxWidth: '1258px',
                                        },
                                    }}
                                    muiTableHeadCellProps={({column}) => ({
                                        sx: {
                                            textAlign: 'right',
                                            fontSize: '14px',
                                        },
                                    })}

                                    muiTableBodyCellProps={({row}) => ({
                                        sx: {
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden !important',
                                            whiteSpace: 'nowrap',
                                            fontSize: '13px',
                                            cursor: 'pointer',
                                            paddingX:'12px'
                                        },
                                    })}
                                    muiTableBodyRowProps={({row}) => ({
                                        onClick: () => {
                                            if(row.original.status === 9){
                                                navigate(
                                                    `/returnProductAdmin/detail/${row.original.product_id}?status=${row.original.status}`,
                                                )
                                            }else {
                                                navigate(
                                                    `/reqTracking/requestDetail/${row.original.product_id}?status=${row.original.status}`,
                                                )
                                            }
                                        },
                                    })}
                                />
                            </div>
                        </>
                    )}
                </div>
        </LayOut>
    );
}
export default AdminBiddingTracking
