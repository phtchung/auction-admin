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
            muiTableHeadCellProps: {
                align: 'center',
            },
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
            size: 435, //medium column
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
        {
            accessorKey: 'sale_price',
            header: 'Giá bán',
            size: 140,
            muiTableHeadCellProps: {
                align: 'center',
            },
            muiTableBodyCellProps:{
                align:'center',
            },
            enableResizing: false,
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
            size: 430,
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
            size: 430,
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
            size: 440,
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
            accessorKey: 'sale_price',
            header: 'Giá bán',
            size: 150,
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
            size: 430,
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

export const AdminNewProductTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm', enableResizing: false, size: 220, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', enableResizing: false, size: 440, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'type_of_auction', header: 'Hính thức', enableResizing: false, size: 130, muiTableHeadCellProps: {align: 'left',},
        },
        {
            accessorKey: 'reserve_price',header: 'Giá khởi điểm', enableResizing: false, size: 145, muiTableHeadCellProps: {align: 'left',},muiTableBodyCellProps: {align: 'center',}
        },
        {
            accessorKey: 'sale_price', header: 'Giá bán', size: 145, enableResizing: false, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center',}
        },
        {
            accessorKey: 'start_time', header: 'Thời gian đấu giá', enableResizing: false, size: 175, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const AdminBiddingTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false ,size: 230, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức',enableResizing: false, size: 140, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false, size: 470, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'reserve_price',header: 'Giá khởi điểm',enableResizing: false ,size: 150, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'sale_price', header: 'Giá bán', size: 145,enableResizing: false, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'start_time', header: 'Thời gian đấu giá',enableResizing: false, size: 180, muiTableHeadCellProps: {align: 'center',},
        },
    ]

export const AdminSuccessTrackingColumns =
    [
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false , size: 220, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức',enableResizing: false , size: 140, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 440, muiTableHeadCellProps: {align: 'center',},
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
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 500, muiTableHeadCellProps: {align: 'center',},
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
        {accessorKey: 'product_id', header: 'Mã sản phẩm',enableResizing: false , size: 240, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'type_of_auction', header: 'Hình thức',enableResizing: false , size: 190, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center',}
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 600, muiTableHeadCellProps: {align: 'center',},
        },

        {
            accessorKey: 'cancel_time', header: 'Thời gian hủy',enableResizing: false , size: 220, muiTableHeadCellProps: {align: 'center',},muiTableBodyCellProps: {align: 'center',}
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
            accessorKey: 'product_name', header: 'Tên sản phẩm',enableResizing: false , size: 490, muiTableHeadCellProps: {align: 'center',},
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
        {accessorKey: 'id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'start_time', header: 'Ngày đấu giá', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'finish_time', header: 'Ngày kết thúc', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'seller_name', header: 'Người bán', size: 100, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'status_name', header: 'Trạng thái', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
    ]
export const colAdminAuctionHistory =
    [
        {accessorKey: 'id', header: 'Mã sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',}},
        {
            accessorKey: 'start_time', header: 'Ngày đấu giá', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'finish_time', header: 'Ngày kết thúc', size: 120, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'product_name', header: 'Tên sản phẩm', size: 170, muiTableHeadCellProps: {align: 'center',},
        },
        {
            accessorKey: 'status_name', header: 'Trạng thái', size: 120, muiTableHeadCellProps: {align: 'center',},
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
