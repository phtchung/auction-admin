export const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const colPending = [
    {id: "request_time", name: "Thời gian yêu cầu"},
    {id: "request_id", name: "Mã yêu cầu"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "reserve_price", name: "Giá khởi điểm"},
    {id: "sale_price", name: "Giá bán trực tiếp"},
];
export const colAppr = [
    {id: "request_time", name: "Thời gian gửi"},
    {id: "request_id", name: "Mã yêu cầu"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "reserve_price", name: "Giá khởi điểm"},
    {id: "start_time", name: "Thời gian đấu giá"},
];
export const colSuccess = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "reserve_price", name: "Giá khởi điểm"},
    {id: "final_price", name: "Giá trúng thầu"},
    {id: "victory_time", name: "Thời gian thắng"},
];

export const tabDataAdmin = [
    {value: "1", name: "Yêu cầu mới", top: "Mới", color: "bg-cyan-400"},
    {value: "2", name:"Đã duyệt", top: "Duyệt", color: "bg-amber-500"},
    {value: "3", name: "Đang đấu giá", top: "Đấu giá", color: "bg-indigo-800"},
    {value: "4", name: "Từ chối", top: "Từ chối", color: "bg-pink-900"},
    {value: "5", name: "Hủy", top: "Hủy", color: "bg-red-600"},
    {value: "6", name: "Trả hàng", top: "Trả hàng", color: "bg-fuchsia-700"},

];

export const tabDataBiddingAdmin = [
    {
        value: "N",
        name: "Sản phẩm mới",
        top: "Mới",
        color: "bg-orange-400",
    },
    {
        value: "B",
        name: "Đấu giá",
        top: "Đấu giá",
        color: "bg-lime-500",
    },
    {
        value: "S",
        name: "Thành công",
        top: "Thành công",
        color: "bg-green-700",
    },
    {
        value: "C",
        name: "Xác nhận",
        top: "Xác nhận",
        color: "bg-fuchsia-700",
    },

    {
        value: "D",
        name: "Bắt đầu giao hàng",
        top: "Bắt đầu giao hàng",
        color: "bg-indigo-800",
    },
    {
        value: "E",
        name: "Hoàn thành",
        top: "Hoàn thành",
        color: "bg-emerald-800",
    },
    {value: "R", name: "Cancel", top: "Cancel", color: "bg-red-600"},
    {
        value: "G",
        name: "Trả hàng",
        top: "Trả hàng",
        color: "bg-yellow-300",
    },
    {
        value: "F",
        name: "Thất bại",
        top: "Thất bại",
        color: "bg-rose-900",
    },
    {
        value: "N",
        name: "New Product",
        top: "Down",
        color: "bg-orange-400",
    },
];

export const colFail = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "reserve_price", name: "Giá khởi điểm"},
    {id: "start_time", name: "Thời gian đấu giá"},
    {id: "finish_time", name: "Thời gian kết thúc"},
];

export const colConf = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "final_price", name: "Giá trúng thầu"},
    {id: "shipping_fee", name: "Phí vận chuyển"},
    {id: "total_price", name: "Tổng tiền"},
];

export const colDlv = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "total_price", name: "Tổng tiền"},
    {id: "phone", name: "Số điện thoại"},
    {id: "address", name: "Địa chỉ"},
];
export const colCompletion = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "total_price", name: "Tổng tiền"},
    {id: "completed_at", name: "Thời gian nhận"},
];
export const colCancel = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "total_price", name: "Tổng tiền"},
    {id: "cancel_time", name: "Thời gian hủy"},
];

export const colReject = [
    {id: "request_id", name: "Mã yêu cầu"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "reserve_price", name: "Giá khởi điểm"},
    {id: "reject_time", name: "Thời gian từ chối"},

];
export const colDlvWait = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "total_price", name: "Tổng tiền"},
    {id: "status", name: "Trạng thái đơn"},
];


export const colSaleHistory = [
    {id: "request_id", name: "Mã yêu cầu"},
    {id: "id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "final_price", name: "Thành tiền"},
    {id: "completed_at", name: "Ngày hoàn thành"},
];

export const adminChangeStateToStringUser = (state) => {
    switch (state) {
        case 1:
            return "Mới";
        case 2:
            return "Đã Duyệt";
        case 3:
            return "Đang Đấu Giá";
        case 4:
            return "Chờ thông tin giao hàng";
        case 9:
            return "Trả hàng";
        case 11:
            return "Hủy";
        case 13:
            return "Từ Chối";
        default:
            return "Yêu Cầu Mới";
    }
};

export const adminChangeStateToStringAdmin = (state) => {
    switch (state) {
        case 2:
            return "Mới";
        case 3:
            return "Đang Đấu Giá";
        case 4:
            return "Chờ thông tin giao hàng";
        case 5:
            return "Đấu giá thành công";
        case 6:
            return "Đã xác nhận";
        case 7:
            return "Giao hàng";
        case 8:
            return "Hoàn thành";
        case 9:
            return "Trả hàng";
        case 11:
            return "Hủy";
        case 10:
            return "Đấu giá thất bại";
        default:
            return "Mới";
    }
};

export const adminChangeStateRequestFromUser = (state) => {
    switch (state) {
        case 1:
            return "Yêu Cầu Mới";
        case 2:
            return "Đã duyệt";
        case 3:
            return "Đang đấu giá";
        case 9:
            return "Trả hàng";
        case 11:
            return "Hủy";
        case 13:
            return "Từ chối";
        default:
            return "Yêu Cầu Mới";
    }
};

export const billChangeStatus = (state) => {
    switch (state) {
        case 8:
            return "Hoàn thành";
        case 9:
            return "Yêu cầu trả hàng";
        case 10:
            return "Thất bại";
        case 11:
            return "Hủy";
        case 14:
            return "Đã trả hàng";
        default:
            return "Hoàn thành";
    }
};

export const rqChangeStatus = (state) => {
    switch (state) {
        case 1:
            return "Yêu cầu mới";
        case 2:
            return "Đã duyệt";
        case 13:
            return "Từ chối";
        default:
            return "Yêu cầu mới";
    }
};

export function convertStatusToData(status) {
    switch (status) {
        case 1:
            return colPending;
        case 2:
            return colAppr;
        case 3:
            return colAppr;
        case 5:
            return colSuccess;
        case 6:
            return colConf;
        case 7:
            return colDlv;
        case 8:
            return colCompletion;
        case 10:
            return colFail;
        case 11:
            return colCancel;
        case 13:
            return colReject;
        default:
            return colPending;
    }
}

export const formatDateTime = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    console.log(inputDateString)
    const formatDateComponent = (component) => String(component).padStart(2, "0");
    const year = formatDateComponent(inputDate.getFullYear());
    const month = formatDateComponent(inputDate.getMonth() + 1);
    const day = formatDateComponent(inputDate.getDate());
    const hours = formatDateComponent(inputDate.getHours());
    const minutes = formatDateComponent(inputDate.getMinutes());
    const seconds = formatDateComponent(inputDate.getSeconds());

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};

export const formatDateTimeSelect = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    console.log(inputDateString)
    const formatDateComponent = (component) => String(component).padStart(2, "0");
    const year = formatDateComponent(inputDate.getFullYear());
    const month = formatDateComponent(inputDate.getMonth() + 1);
    const day = formatDateComponent(inputDate.getDate());
    const hours = formatDateComponent(inputDate.getHours());
    const minutes = formatDateComponent(inputDate.getMinutes());
    const seconds = formatDateComponent(inputDate.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
export function processStatus(status) {
    if (
        status === 567 ||
        status === 4 ||
        status === 8 ||
        status === 9 ||
        status === 11
    ) {
        return status;
    } else {
        return 4;
    }
}

export function adminProcessStatus(status) {
    if (
        status === 1 ||
        status === 2 ||
        status === 3 ||
        status === 13 ||
        status === 9 ||
        status === 11
    ) {
        return status;
    } else {
        return 1;
    }
}

export function checkStatus(status){
    return status === 8 ||
        status === 10 ||
        status === 11 ||
        status === 14;
}

export function adminProductStatus(status) {
    if (
        status === 2 ||
        status === 3 ||
        status === 5 ||
        status === 6 ||
        status === 8 ||
        status === 7 ||
        status === 9 ||
        status === 11 ||
        status === 10
    ) {
        return status;
    } else {
        return 2;
    }
}
export function reqConvertStatus(status) {
    if (
        status === 1 ||
        status === 2 ||
        status === 3 ||
        status === 5 ||
        status === 6 ||
        status === 7 ||
        status === 8 ||
        status === 10 ||
        status === 11 ||
        status === 13
    ) {
        return status;
    } else {
        return 1;
    }
}

export function convertWinStatus(status) {
    switch (status) {
        case 5:
            return "Chờ xác nhận";
        case 6:
            return "Đã xác nhận";
        case 7:
            return "Đang giao hàng";
        case 8:
            return "Hoàn thành";
        case 9:
            return "Yêu cầu trả hàng";
        case 11 :
            return "Hủy thành công"
        default:
            return " ";
    }
}

export const newReqColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã yêu cầu',
            size: 220,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Người bán',
            size: 165,
            enableResizing: false

        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: '' +
                ' Điện thoại',
            size: 135,
            muiTableHeadCellProps: {
                align: 'left',
            },
            enableResizing: false
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            muiTableBodyCellProps:{
                align:'center',
            },
            size: 450,
            muiTableHeadCellProps: {
                align: 'center',
            },
            grow: true,
            enableResizing: false
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 150,
            muiTableHeadCellProps: {
                align: 'center',
            },
            grow: true, enableResizing: false,
            muiTableBodyCellProps:{
                align:'center',
            },
        },
    ]

export const approvedColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã yêu cầu',
            size: 220,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Người bán',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Điện thoại',
            size: 135,
            muiTableHeadCellProps: {
                align: 'left',
            },
            enableResizing: false
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 400,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 135,
            muiTableHeadCellProps: {
                align: 'left',
            },
            grow: true,
            muiTableBodyCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'start_time',
            header: 'Thời gian đấu giá',
            size: 165,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },

    ];

export const biddingColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã sản phẩm',
            size: 220,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Người bán',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Điện thoại',
            muiTableHeadCellProps: {
                align: 'left',
            },
            size: 135,
            enableResizing: false,
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 400,
            muiTableBodyCellProps:{
                align:'center',
            },
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 135,
            muiTableHeadCellProps: {
                align: 'left',
            },
            grow: true,
            muiTableBodyCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'start_time',
            header: 'Thời gian đấu giá',
            size: 165,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
    ]

export const rejectColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã sản phẩm',
            size: 220,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Người bán',
            size: 155,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Điện thoại',
            size: 135,
            muiTableHeadCellProps: {
                align: 'left',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 400,
            muiTableHeadCellProps: {
                align: 'center',
            },
            muiTableBodyCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 135,
            enableResizing: false,
            grow:true,
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'reject_time',
            header: 'Thời gian hủy',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
            muiTableBodyCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
    ]

export const returnColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã sản phẩm',
            size: 220,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Người bán',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Điện thoại',
            size: 135,
            muiTableHeadCellProps: {
                align: 'left',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 400,
            muiTableHeadCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 150,
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
        {
            accessorKey: 'final_price',
            header: 'Giá trúng thầu',
            size: 153,
            muiTableHeadCellProps: {
                align: 'center',
            },
            muiTableBodyCellProps: {
                align: 'center',
            },
            enableResizing: false,
        },
    ]

export const treeSelectData = [
    {
        title: 'Light',
        value: 'light',
        children: [{title: 'Bamboo', value: 'bamboo'},{title: 'Bamboo1', value: '11'}]
    },
]

export const formatMoney = (number) => {
    number = parseInt(number)
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const AdminNewProductTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', enableResizing: false, size: 220, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', enableResizing: false, size: 480, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'type_of_auction', header: 'Hính thức', enableResizing: false, size: 130, muiTableHeadCellProps: {align: 'left',},
        },
        {
            accessorKey: 'reserve_price',header: 'Giá khởi điểm', enableResizing: false, size: 165, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center',}
        },
        {
            accessorKey: 'start_time', header: 'Thời gian đấu giá', enableResizing: false, size: 195, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const AdminBiddingTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false ,size: 220, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức',enableResizing: false, size: 140, muiTableHeadCellProps: {align: 'center'},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false, size: 390, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'reserve_price',header: 'Giá khởi điểm',enableResizing: false ,size: 130, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'start_time', header: 'Thời gian đấu giá',enableResizing: false, size: 170, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const AdminSuccessTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false , size: 220, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức',enableResizing: false , size: 140, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 400, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'final_price',header: 'Giá trúng thầu',enableResizing: false , size: 140, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'phone_receiver', header: 'Số điện thoại',enableResizing: false , size: 140, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'victory_time', header: 'Thời gian thắng',enableResizing: false , size: 175, muiTableHeadCellProps: {align: 'center',},
        },
    ]


export const AdminCompletedTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false , size: 230, muiTableHeadCellProps: {align: 'center',}},

        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 480, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'final_price',header: 'Giá trúng thầu',enableResizing: false , size: 150, muiTableHeadCellProps: {align: 'left',},muiTableBodyCellProps: {align: 'center',},
        },
        {
            accessorKey: 'phone', header: 'Số điện thoại',enableResizing: false , size: 165, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center',},
        },
        {
            accessorKey: 'victory_time', header: 'Thời gian thắng',enableResizing: false , size: 190, muiTableHeadCellProps: {align: 'center'},muiTableBodyCellProps: {align: 'center',}
        },
    ]

export const AdminCancelTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false , size: 260, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức',enableResizing: false , size: 190, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center',}
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 450, muiTableHeadCellProps: {align: 'center',},
        },

        {
            accessorKey: 'cancel_time', header: 'Thời gian hủy',enableResizing: false , size: 250, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center',}
        },
    ]

export const AdminReturnTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false , size: 230, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức',enableResizing: false , size: 160, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 530, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'final_price',header: 'Giá trúng thầu',enableResizing: false , size: 150, muiTableHeadCellProps: {align: 'left',},muiTableBodyCellProps: {align: 'center',},
        },
        {
            accessorKey: 'phone', header: 'Số điện thoại',enableResizing: false , size: 170, muiTableHeadCellProps: {align: 'left',},muiTableBodyCellProps: {align: 'center',},
        },

    ]

export const AdminFailureTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false , size: 230, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức',enableResizing: false , size: 150, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 470, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'reserve_price',header: 'Giá khởi điểm',enableResizing: false , size: 150, muiTableHeadCellProps: {align: 'center'},muiTableBodyCellProps: {align: 'center',},
        },
        {
            accessorKey: 'start_time', header: 'Thời gian bắt đầu',enableResizing: false , size: 230, muiTableHeadCellProps: {align: 'center'},muiTableBodyCellProps: {align: 'center',}
        },

    ]

export const colReqHistory =
    [
        {accessorKey: 'id', header: 'Mã yêu cầu', size: 220,enableResizing: false, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'createdAt', header: 'Ngày yêu cầu',enableResizing: false, size: 155, muiTableHeadCellProps: {align: 'left',},
        },
        {
            accessorKey: 'seller_name',header: 'Người bán',enableResizing: false, size: 160, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'phone', header: 'Điện thoại',enableResizing: false, size: 140, muiTableHeadCellProps: {align: 'left',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false, size: 430, muiTableHeadCellProps: {align: 'center'}
        },

        {
            accessorKey: 'status_string', header: 'Trạng thái',enableResizing: false, size: 140, muiTableHeadCellProps: {align: 'center'},muiTableBodyCellProps: {align: 'center'}
        },

    ]

export const colUserAuctionHistory =
    [
        {accessorKey: 'id', header: 'Mã sản phẩm',enableResizing: false, size: 230, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'finish_time', header: 'Ngày kết thúc',enableResizing: false, size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false, size: 470, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'seller_name', header: 'Người bán',enableResizing: false, size: 180, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center'}
        },
        {
            accessorKey: 'status_name', header: 'Trạng thái',enableResizing: false, size: 150, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center'}
        },
    ]

export const colAdminAuctionHistory =
    [
        {accessorKey: 'id', header: 'Mã sản phẩm',enableResizing: false, size: 220, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'start_time', header: 'Ngày đấu giá',enableResizing: false, size: 180, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'finish_time', header: 'Ngày kết thúc',enableResizing: false, size: 180, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false, size: 490, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'status_name', header: 'Trạng thái',enableResizing: false, size: 150, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center'}
        },
    ]

export const colReturnFromUser =
    [
        {accessorKey: 'id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'seller_name',header: 'Người bán', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'winner_name',header: 'Người mua', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'winner_phone', header: 'Số điện thoại', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'return_time', header: 'Thời gian trả', size: 140, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const colReturnFromAdmin =
    [
        {accessorKey: 'id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'winner_name',header: 'Người mua', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'winner_phone', header: 'Số điện thoại', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'return_time', header: 'Thời gian trả hàng', size: 140, muiTableHeadCellProps: {align: 'center',},
        },
    ]
