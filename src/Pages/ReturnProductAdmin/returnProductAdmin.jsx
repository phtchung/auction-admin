import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {colReturnFromAdmin} from "../../Utils/constant.js";
import LayOut from "../../Components/Layout/layout.jsx";
import {Checkbox} from "antd";
import {MaterialReactTable} from "material-react-table";
import useReturnProductAdmin from "./useReturnProductAdmin.jsx";

const ReturnProductAdmin = () => {
    const [filter, setFilter] = useState({});
    const navigate = useNavigate();
    const {
        returnProAdminData,
        isLoading,
        isSuccess,
        total,
        queryReturn,
        setQueryReturn,
    } = useReturnProductAdmin();

    const handleFilter = (key, value) => {
        setFilter({...filter, [key]: value});
    };
    const handleReload = () => {
        window.location.reload();
    };

    const onSubmit = () => {
        const params = {
            ...queryReturn,
            ...filter,
        };
        setQueryReturn(params);
    };
    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);
    return (
        <>

            <LayOut>
                <div className="home-right">
                    <div className="text-left px-5 pt-3 pb-3 text-xl font-bold text-neutral-600  bg-white">
                        Yêu cầu trả hàng đấu giá từ hệ thống
                    </div>
                    <div className="border-b border-neutral-300 "></div>
                    <div style={{
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                        color: '#000000DE',
                    }}
                         className="bg-white p-3 my-7 border-gray-300 border grid grid-rows-4 grid-flow-col h-56 text-sm gap-7 ">
                        <div className="col-span-3">
                            <div className="font-semibold text-sm p-3 pb-9 ">Tìm kiếm ngày :</div>
                            <div className="font-semibold text-sm p-3 ">Số điện thoại :</div>
                        </div>
                        <div className="row-span-6">
                            <LocalizationProvider
                                dateFormats="fullDate"
                                dateAdapter={AdapterDayjs}
                            >
                                <DatePicker
                                    defaultValue={queryReturn.start_time ? dayjs(queryReturn.start_time) : dayjs(new Date()).subtract(1, "day")}
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
                                    defaultValue={queryReturn.finish_time ? dayjs(queryReturn.finish_time) : dayjs(new Date()).subtract(1, "day")}
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
                                <Checkbox onClick={(e) => handleFilter('df', e.target.checked)}/>
                                <div className="font-medium text-xs px-2   "> Chỉ tìm kiếm theo số điện thoại</div>
                            </div>
                        </div>
                        <div className="row-span-3 space-y-6  ">
                            <Button
                                onClick={onSubmit}
                                size="md"
                                className="block w-24  bg-blue-800 text-xs  h-9 py-2 rounded m-2 mt-5 px-4"
                            >
                                Search
                            </Button>

                            <Button
                                size="md"
                                className=" block text-xs w-24 bg-blue-800 h-9 py-1 rounded m-2  px-4"
                            >
                                Xuất Excel
                            </Button>
                            <Button
                                onClick={handleReload}
                                size="md"
                                className=" block text-xs w-24 bg-blue-800 h-9 py-1 rounded m-2  px-4"
                            >
                                Reset
                            </Button>
                        </div>

                    </div>

                    {isSuccess && (
                        <>
                            <div className="bg-white py-1  my-6  font-sans  h-12">
                                <table style={{width: "100%"}}>
                                    <thead>
                                    <tr
                                        style={{
                                            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                            color: '#000000DE',
                                            height: 40,
                                            fontSize: 14,
                                        }}
                                    >
                                        <th className=" border-r-2">Tổng số yêu cầu</th>
                                        <th className=" text-lg w-1/3 bg-amber-400">{total?.total_reqReturn}</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </>
                    )}

                    {isSuccess && (
                        <>
                            <div className="border border-gray-300 ">
                                <MaterialReactTable
                                    columns={colReturnFromAdmin}
                                    data={(returnProAdminData)}
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
                                            navigate(
                                                `/returnProductAdmin/detail/${row.original.id}?status=${row.original.status}`,
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

export default ReturnProductAdmin;
