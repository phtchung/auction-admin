import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { colUserAuctionHistory} from "../../Utils/constant.js";
import LayOut from "../../Components/Layout/layout.jsx";
import {Checkbox} from "antd";
import {MaterialReactTable} from "material-react-table";
import useUserAuctionCompleted from "./useUserAuctionCompleted.jsx";
import BtnOk from "../../Components/BtnOk/index.jsx";
import {CircularProgress} from "@mui/material";

const UserAuctionCompleted = () => {
    const [filter, setFilter] = useState({});
    const navigate = useNavigate();
    const {
        userAuctionHistoryData,
        isLoading,
        isSuccess,
        total,
        queryString,
        setQueryString,
    } = useUserAuctionCompleted();

    const handleReload = () => {
        window.location.reload();
    };
    const handleFilter = (key, value) => {
        setFilter({...filter, [key]: value});
    };

    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    const onSubmit = () => {
        const params = {
            ...queryString,
            ...filter,
        };
        setQueryString(params);
    };
    return (
        <>

            <LayOut>
                <div className="home-right">
                    <div className="text-left px-5 pt-3 pb-3 text-xl font-bold text-neutral-600  bg-white">
                        Lịch sử đấu giá User
                    </div>
                    <div className="border-b border-neutral-300 "></div>
                    <div className="bg-white p-3 my-7 border-gray-300 border grid grid-rows-4 grid-flow-col h-56 text-sm gap-7 ">
                        <div className="col-span-3">
                            <div className="font-medium text-sm p-3 pb-9 ">Tìm kiếm ngày :</div>

                            <div className="font-medium text-sm p-3 ">Số điện thoại :</div>

                        </div>
                        <div className="row-span-6">
                            <LocalizationProvider
                                dateFormats="fullDate"
                                dateAdapter={AdapterDayjs}
                            >
                                <DatePicker
                                    defaultValue={queryString.start_time ? dayjs(queryString.start_time) : dayjs(new Date()).subtract(1, "day")}
                                    sx={{
                                        margin: 3,
                                        "& .MuiInputBase-input": {width: 150, fontSize: 12},
                                    }}
                                    onChange={(newValue) =>
                                        handleFilter("start_time", dayjs(newValue).startOf('day').toDate().toISOString())
                                    }
                                />
                            </LocalizationProvider>

                            <LocalizationProvider
                                dateFormats="fullDate"
                                dateAdapter={AdapterDayjs}
                            >
                                <DatePicker
                                    defaultValue={queryString.finish_time ? dayjs(queryString.finish_time) : dayjs(new Date()).subtract(1, "day")}

                                    sx={{
                                        margin: 3,
                                        "& .MuiInputBase-input": {width: 150, fontSize: 12},
                                    }}
                                    onChange={(newValue) =>
                                        handleFilter("finish_time", dayjs(newValue).endOf('day').toDate().toISOString())
                                    }
                                />
                            </LocalizationProvider>

                            <div className="flex px-5 pt-3 pl-14 ml-2 items-center gap-3 text-right">
                                <div className="relative shadow-sm">
                                    <input
                                        placeholder="Nhập số điện thoại tìm kiếm"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        onChange={(e) => handleFilter('phone', e.target.value)}
                                        style={{height: '30px', width: '220px', fontSize: 12}}
                                        className="block focus:outline-none focus:border-none border-0 py-1.5 pl-3 pr-5  ring-1 ring-inset hover:ring-black ring-gray-400  focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="justify-start pt-3 ml-2 flex items-center pl-14">
                                <Checkbox onClick={(e) => handleFilter('df',e.target.checked)}/>
                                <div className="font-medium text-xs px-2   "> Chỉ tìm kiếm theo số điện thoại</div>
                            </div>
                        </div>

                        <div className="row-span-3 flex flex-col gap-6 mx-auto mt-6 ">
                            <BtnOk onClick={onSubmit} text={'Tìm kiếm'}/>

                            <BtnOk onClick={handleReload} text={'Làm mới'}/>
                        </div>

                    </div>

                    {isLoading && (
                        <>
                            <CircularProgress color="inherit" className="mt-20"/>{" "}
                        </>
                    )}

                    {isSuccess && (
                        <>
                            <div className="bg-white  border-gray-300 border p-2 my-7 text-base h-24">
                                <table style={{width: "100%"}}>
                                    <thead>
                                    <tr
                                        style={{
                                            borderBottom: "1px solid #e5e7eb",
                                            height: 40,
                                            fontSize: 12,
                                        }}
                                    >
                                        <th className="w-1/5">Tổng số phiên đấu giá</th>
                                        <th className="w-1/6">Thành công</th>
                                        <th className="w-1/6">Thất bại</th>
                                        <th className="w-1/6">Trả hàng thành công</th>
                                        <th className="w-1/6">Từ chối trả hàng</th>
                                        <th className="w-1/6">Hủy</th>

                                    </tr>
                                    </thead>
                                    <tbody className="font-semibold">
                                    <tr style={{height: 40, fontSize: 16}}>
                                        <td className="cursor-pointer">{total?.total_product}</td>
                                        <td>{total?.total_completed}</td>
                                        <td>{total?.total_failure}</td>
                                        <td>{total?.total_returned}</td>
                                        <td>{total?.total_rj_returned}</td>
                                        <td>{total?.total_canceled}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {isSuccess && (
                        <>
                            <div className="border border-gray-300 ">

                                <div className="border-b-2 border-gray-300 "></div>
                                <MaterialReactTable
                                    enableColumnResizing={true}
                                    columns={colUserAuctionHistory}
                                    defaultColumn= {{
                                        minSize: 80,
                                        maxSize: 470,
                                    }}
                                    data={(userAuctionHistoryData)}
                                    isloading={isLoading}
                                    enableDensityToggle={false}
                                    enableColumnFilters={false}
                                    enableHiding={false}
                                    showColumnFilters={true}
                                    enableColumnActions={false}
                                    muiTableBodyProps={{
                                        sx: {
                                            '& td:last-child': {
                                                color: 'red',
                                            },
                                        }
                                    }}

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
                                            console.log(row)
                                            console.log(row.original);
                                            navigate(
                                                `/userAuctionCompleted/detail/${row.original.id}?status=${row.original.status}`,
                                            )
                                        },
                                    })}
                                />
                            </div>
                        </>
                    )}
                </div>
            </LayOut>
        </>
    );
};

export default UserAuctionCompleted;
