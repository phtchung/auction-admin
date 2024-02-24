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
export const tabData = [
    {
        value: "2",
        name: "Approved",
        top: "Approved",
        count: 3,
        color: "bg-orange-400",
    },
    {
        value: "3",
        name: "Bidding",
        top: "Bidding",
        count: 4,
        color: "bg-lime-500",
    },
    {
        value: "4",
        name: "Success",
        top: "Success",
        count: 5,
        color: "bg-green-700",
    },
    {
        value: "5",
        name: "Failure",
        top: "Failure",
        count: 6,
        color: "bg-fuchsia-700",
    },
    {
        value: "6",
        name: "Confirm ",
        top: "Confirm ",
        count: 2,
        color: "bg-yellow-300",
    },
    {
        value: "7",
        name: "Delivery start",
        top: "Departure",
        count: 3,
        color: "bg-indigo-800",
    },
    {
        value: "8",
        name: "Completed",
        top: "Completion",
        count: 2,
        color: "bg-emerald-800",
    },
    {value: "9", name: "Cancel", top: "Cancel", count: 2, color: "bg-red-600"},
    {
        value: "10",
        name: "Reject",
        top: "Reject",
        count: 3,
        color: "bg-rose-900",
    },
];

export const tabData1 = [
    {value: "1", name: "Auction winning", top: "Win", color: "bg-yellow-500"},
    {value: "2", name: "Delivery wait", top: "Wait", color: "bg-indigo-800"},
    {value: "3", name: "Completed", top: "Completed", color: "bg-emerald-800"},
    {value: "4", name: "Cancel", top: "Cancel", color: "bg-red-600"},
    {value: "5", name: "Return", top: "Return", color: "bg-cyan-500"},
];

export const tabDataAdmin = [
    {value: "1", name: "New Request", top: "New", color: "bg-cyan-400"},
    {value: "2", name: "Approved", top: "Approved", color: "bg-amber-500"},
    {value: "3", name: "Bidding", top: "Bidding", color: "bg-indigo-800"},
    {value: "4", name: "Reject", top: "Reject", color: "bg-pink-900"},
    {value: "5", name: "Cancel", top: "Cancel", color: "bg-red-600"},
    {value: "6", name: "Return", top: "Return", color: "bg-fuchsia-700"},

];

export const tabDataBiddingAdmin = [
    {
        value: "N",
        name: "New Product",
        top: "New",
        color: "bg-orange-400",
    },
    {
        value: "B",
        name: "Bidding",
        top: "Bidding",
        color: "bg-lime-500",
    },
    {
        value: "S",
        name: "Success",
        top: "Success",
        color: "bg-green-700",
    },
    {
        value: "C",
        name: "Confirm",
        top: "Confirm",
        color: "bg-fuchsia-700",
    },

    {
        value: "D",
        name: "Delivery start",
        top: "Departure",
        color: "bg-indigo-800",
    },
    {
        value: "E",
        name: "Completed",
        top: "Completion",
        color: "bg-emerald-800",
    },
    {value: "R", name: "Cancel", top: "Cancel", color: "bg-red-600"},
    {
        value: "G",
        name: "Return",
        top: "Return",
        color: "bg-yellow-300",
    },
    {
        value: "F",
        name: "Failure ",
        top: "Failure",
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
    {id: "action_by", name: "Tác nhân"},
];
export const colWinCancel = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "final_price", name: "Giá trúng thầu"},
    {id: "victory_time", name: "Thời gian thắng"},
    {id: "status", name: "Trạng thái"},
];
export const colAuctionWin = [
    {id: "product_id", name: "Mã sản phẩm"},
    {id: "product_name", name: "Tên sản phẩm"},
    {id: "reserve_price", name: "Giá khởi điểm"},
    {id: "final_price", name: "Giá trúng thầu"},
    {id: "victory_time", name: "Thời gian thắng"},
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

export const pathReqHistory = "/reqHistory/reqHistoryDetail"

export const pathSaleHistory = "/saleHistory/reqOrderDetail"


export const pending = {
    value: "1",
    name: "Pending",
    top: "Pending",
    count: 2,
    color: "bg-cyan-400",
};

export const numberToString = (state) => {
    switch (state) {
        case 1:
            return "Pending";
        case 2:
            return "Approved";
        case 3:
            return "Bidding";
        case 4:
            return "Bidding";
        case 5:
            return "Success";
        case 6:
            return "Confirm";
        case 7:
            return "Delivery start";
        case 8:
            return "Completed";
        case 10:
            return "Failure";
        case 11:
            return "Cancel";
        case 13:
            return "Reject";
        default:
            return "Pending";
    }
};

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
export const statusToString = (state) => {
    switch (state) {
        case 4:
            return "Auction Winning";
        case 5:
            return "Delivery Wait";
        case 6:
            return "Delivery Wait";
        case 7:
            return "Delivery Wait";
        case 567:
            return "Delivery Wait";
        case 8:
            return "Completed";
        case 9:
            return "Return";
        case 11:
            return "Cancel";
        default:
            return "Auction Winning";
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
        return 3;
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

export const rankItems = [
    {value: "S", label: "S"},
    {value: "A", label: "A"},
    {value: "B", label: "B"},
    {value: "C", label: "C"},
    {value: "D", label: "D"},
];

export const categories = [
    {value: "6590eeb91a599365d4b68951", label: "Điện tử"},
    {value: "65c1ffb748844c67a80a2156", label: "Đồ gia dụng"},
  {value: "65c1ffcb48844c67a80a2157", label: "Tài liệu học tập"},
  {value: "65c1ffe248844c67a80a2158", label: "Đồ chơi"},
  {value: "65c1fff048844c67a80a2159", label: "Dụng cụ thể thao"},
  {value: "65c2000d48844c67a80a215a", label: "Đồ trang trí"},
  {value: "65c2001b48844c67a80a215b", label: "Đồ dùng cá nhân"},
  {value: "65c2003e48844c67a80a215c", label: "Vật dụng cá nhân"},
  {value: "65c2007748844c67a80a215d", label: "Phụ kiện thời trang"},
  {value: "65c2009e48844c67a80a215e", label: "Quần áo"},
  {value: "65c200ad48844c67a80a215f", label: "Giày dép"},
  {value: "65c200bc48844c67a80a2160", label: "Nội thất"},

];

export function hideCharacters(username) {
    var hiddenPart = "";
    var visiblePart = "";

    if (username.length < 5) {
        hiddenPart = "*".repeat(2);
        visiblePart = username.slice(0, username.length - 2);
    } else {
        var hiddenCount = Math.floor(username.length / 2);
        var hiddenPositions = getRandomPositions(username.length, hiddenCount);

        hiddenPart = "";
        for (var i = 0; i < username.length; i++) {
            hiddenPart += hiddenPositions.includes(i) ? "*" : username[i];
        }

        visiblePart = "";
    }

    var hiddenUsername = visiblePart + hiddenPart;
    return hiddenUsername;
}

function getRandomPositions(length, count) {
    var positions = [];
    for (var i = 0; i < count; i++) {
        var randomPosition;
        do {
            randomPosition = Math.floor(Math.random() * length);
        } while (positions.includes(randomPosition));
        positions.push(randomPosition);
    }
    return positions;
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
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Tên người bán',
            size: 110,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Số điện thoại',
            size: 120,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 90,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'sale_price',
            header: 'Giá bán',
            size: 100,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
    ]



export const approvedColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã yêu cầu',
            size: 160,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Tên người bán',
            size: 110,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Số điện thoại',
            size: 120,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 90,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'start_time',
            header: 'Thời gian đấu giá',
            size: 130,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },

    ]
export const biddingColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã sản phẩm',
            size: 160,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Tên người bán',
            size: 110,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Số điện thoại',
            muiTableHeadCellProps: {
                align: 'center',
            },
            size: 150,
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 150,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 90,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'start_time',
            header: 'Thời gian đấu giá',
            size: 140,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
    ]

export const rejectColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã sản phẩm',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Tên người bán',
            size: 110,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Số điện thoại',
            size: 120,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 90,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'sale_price',
            header: 'Giá bán',
            size: 100,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
    ]

export const returnColumns =
    [
        {
            accessorKey: 'request_id', //access nested data with dot notation
            header: 'Mã sản phẩm',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'seller_name', //access nested data with dot notation
            header: 'Tên người bán',
            size: 110,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'phone', //access nested data with dot notation
            header: 'Số điện thoại',
            size: 120,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'product_name',
            header: 'Tên sản phẩm',
            size: 170,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'reserve_price', //normal accessorKey
            header: 'Giá khởi điểm',
            size: 90,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
        {
            accessorKey: 'final_price',
            header: 'Giá trúng thầu',
            size: 100,
            muiTableHeadCellProps: {
                align: 'center',
            },
        },
    ]

export const treeSelectData = [
    {
        title: 'Light',
        value: 'light',
        children: [{title: 'Bamboo', value: 'bamboo'},{title: 'Bamboo1', value: '11'}]
    },
]

export const AdminNewProductTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'type_of_auction', header: 'Hính thức', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'reserve_price',header: 'Giá khởi điểm', size: 90, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'sale_price', header: 'Giá bán', size: 100, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'start_time', header: 'Thời gian đấu giá', size: 140, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const AdminBiddingTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'reserve_price',header: 'Giá khởi điểm', size: 90, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'sale_price', header: 'Giá bán', size: 100, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'start_time', header: 'Thời gian đấu giá', size: 140, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const AdminSuccessTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'final_price',header: 'Giá trúng thầu', size: 90, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'phone_receiver', header: 'Số điện thoại', size: 100, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'victory_time', header: 'Thời gian thắng', size: 140, muiTableHeadCellProps: {align: 'center',},
        },
    ]


export const AdminCompletedTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},

        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'final_price',header: 'Giá trúng thầu', size: 90, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'phone', header: 'Số điện thoại', size: 100, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'victory_time', header: 'Thời gian thắng', size: 140, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const AdminCancelTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },

        {
            accessorKey: 'cancel_time', header: 'Thời gian hủy', size: 140, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const AdminReturnTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'final_price',header: 'Giá trúng thầu', size: 90, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'phone', header: 'Số điện thoại', size: 100, muiTableHeadCellProps: {align: 'center',},
        },

    ]

export const AdminFailureTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'reserve_price',header: 'Giá khởi điểm', size: 90, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'start_time', header: 'Thời gian bắt đầu', size: 140, muiTableHeadCellProps: {align: 'center',},
        },

    ]

export const colReqHistory =
    [
        {accessorKey: 'id', header: 'Mã yêu cầu', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'createdAt', header: 'Ngày yêu cầu', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'seller_name',header: 'Người bán', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'phone', header: 'Số điện thoại', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },

        {
            accessorKey: 'status', header: 'Trạng thái', size: 140, muiTableHeadCellProps: {align: 'center',},
        },

    ]
