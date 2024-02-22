import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {

    adminChangeStateToStringUser,
    adminProcessStatus,
    tabDataAdmin
} from "../../Utils/constant.js";

import CountdownTimer from "../../Components/Clock/countDownTime.jsx";
import TabItem from "../../Components/TabItem/TabItem.jsx";
import {CircularProgress} from "@mui/material";

import {
    MaterialReactTable,
} from 'material-react-table';
import {Button} from "@material-tailwind/react";
import useUserRequestTracking from "./useUserReqTracking.jsx";
import LayOut from "../../Components/Layout/layout.jsx";

const RequestTracking = () => {
    const navigate = useNavigate();

    const {
        isLoading,
        isSuccess,
        data,
        isScCount,
        adminReqCount,
        columns,
        status,
        setStatus,
    } = useUserRequestTracking();


    const [selectedTab, setSelectedTab] = useState(status);
    const handelClick = (value) => {
        setStatus(adminProcessStatus(value));
        setSelectedTab(value);
        navigate(`/reqTracking?status=${value}`);
    };
    return (
        <LayOut>
                <div className="home-right ">
                    <div className="flex justify-between items-center px-5 pt-3 pb-3   text-neutral-600 ">
                        <div className="text-left text-xl font-bold ">
                            Quản lý yêu cầu đấu giá sản phẩm người dùng
                        </div>
                        <div className="  ">
                            <CountdownTimer initialTimeInSeconds={60}/>
                        </div>
                    </div>
                    <div className="border-b border-neutral-300 "></div>
                    <div className="flex items-center font-normal justify-center pt-10 pb-6 flex-wrap  bg-zinc-100">
                        {isSuccess && isScCount && (
                            <div className="flex justify-end ">
                                <>
                                    <TabItem
                                        data={tabDataAdmin[0]}
                                        count={adminReqCount?.countNewReq}
                                        onClick={() => handelClick(1)}
                                        isSelected={selectedTab === 1}
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataAdmin[1]}
                                        count={adminReqCount?.countApproved}
                                        onClick={() => handelClick(2)}
                                        isSelected={selectedTab === 2}
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataAdmin[2]}
                                        count={adminReqCount?.countBidding}
                                        onClick={() => handelClick(3)}
                                        isSelected={selectedTab === 3}
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataAdmin[3]}
                                        count={adminReqCount?.countReject}
                                        onClick={() => handelClick(13)}
                                        isSelected={selectedTab === 13}
                                    ></TabItem>
                                    <TabItem
                                        data={tabDataAdmin[4]}
                                        count={adminReqCount?.countCancel}
                                        onClick={() => handelClick(11)}
                                        isSelected={selectedTab === 11}
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
                            <div className="border border-gray-300 ">
                                <div className="flex items-center justify-between  bg-white  p-2 text-base">
                                    <div className="text-left font-medium my-2 ml-3 ">
                                        Danh sách yêu cầu {adminChangeStateToStringUser(status)}
                                    </div>
                                </div>

                                <div className="border-b-2 border-gray-300 "></div>
                                <MaterialReactTable

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
                                            margin: 0,
                                            padding: 0,
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
                                            textAlign: 'center',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden !important',
                                            whiteSpace: 'nowrap',
                                            fontSize: '13px',
                                            cursor: 'pointer',
                                            paddingX: '12px'
                                        },
                                    })}
                                    muiTableBodyRowProps={({row}) => ({
                                        onClick: () => {
                                            console.log(row.original);
                                            navigate(
                                                `/reqTracking/userRequestDetail/${row.original.request_id}?status=${row.original.status}`,
                                            )
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
export default RequestTracking
