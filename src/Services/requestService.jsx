import privateHttp from "./Http/privateHttp.config.js";
import privateHttp1 from "./Http/privateHttp1.config.js";


export const AdminGetReqCount = async () => {
    return privateHttp({
        method: "GET",
        url: `/admin/product/reqCount`,
    });
};

export const AdminGetBiddingCount = async () => {
    return privateHttp({
        method: "GET",
        url: `/admin/product/biddingCount`,
    });
};

export const AdminGetReqTracking = async (status) => {
    return privateHttp({
        method: "POST",
        url: "/admin/product/reqList",
        data: {
            status: status,
        },
    });
};

export const AdminGetBiddingTracking = async (status) => {
    return privateHttp({
        method: "POST",
        url: "/admin/product/bidList",
        data: {
            status: status,
        },
    });
};

export const AdminGetReqDetail = async (reqId) => {
    return privateHttp({
        method: "GET",
        url: `/admin/request/${reqId}`,
    });
};

export const sendApproveData = async (approvedData) => {
    return privateHttp({
        method: "POST",
        url: "/admin/approvedData",
        data: approvedData,
    });
};


export const rejectRequest = async (rejectData) => {
    return privateHttp({
        method: "POST",
        url: "/admin/rejectRequest",
        data: rejectData,
    });
};

export const cancelProduct = async (cancelData) => {
    return privateHttp({
        method: "POST",
        url: "/admin/cancelProduct",
        data: cancelData,
    });
};

export const createProductAuction = async (productData) => {
    return privateHttp1({
        method: "POST",
        url: "/admin/createProduct",
        data: productData,
    });
};

export const createBlog = async (blogData) => {
    return privateHttp1({
        method: "POST",
        url: "/admin/createBlog",
        data: blogData,
    });
};

export const createCategories = async (cateData) => {
    return privateHttp1({
        method: "POST",
        url: "/admin/createCategories",
        data: cateData,
    });
};


export const adminGetRequestHistory = async (params) => {
    return privateHttp({
        method: "POST",
        url: "admin/request",
        params,
    });
};

export const adminGetReqHistoryDetail = async (reqId) => {
    return privateHttp({
        method: "GET",
        url: `/admin/request/history/${reqId}`,
    });
};


export const adminGetAuctionHistoryList = async (params) => {
    return privateHttp({
        method: "POST",
        url: "admin/auctionHistoryList",
        params,
    });
};

export const adminGetAdminAuctionCompletedList = async (params) => {
    return privateHttp({
        method: "POST",
        url: "admin/adminAuctionCompletedList",
        params,
    });
};

export const getStreamAuctionTracking = async (params) => {
    return privateHttp({
        method: "POST",
        url: "/admin/streamAuction",
        params,
    });
};

export const adminStreamTracking = async (params) => {
    return privateHttp({
        method: "POST",
        url: "/admin/streamTracking",
        params,
    });
};

export const AdminGeAuctionCompletedDetail = async (reqId) => {
    return privateHttp({
        method: "GET",
        url: `/admin/auctionCompletedDetail/${reqId}`,
    });
};


export const returnProductOfUser = async (params) => {
    return privateHttp({
        method: "POST",
        url: "/admin/returnOfUser",
        params,
    });
};


export const returnProductOfAdmin = async (params) => {
    return privateHttp({
        method: "POST",
        url: "/admin/returnOfAdmin",
        params,
    });
};

export const acceptReturnProduct = async (returnDataAdmin) => {
    return privateHttp({
        method: "POST",
        url: "/admin/acceptReturn",
        data: returnDataAdmin,
    });
};

export const denyReturnProduct = async (returnDataAdmin) => {
    return privateHttp({
        method: "POST",
        url: "/admin/denyReturn",
        data: returnDataAdmin,
    });
};

export const reSendCode = async (data) => {
    return privateHttp({
        method: 'POST',
        url: `/admin/resendCode`,
        data
    });
}

export const SendCodeToEmail = async (data) => {
    return privateHttp({
        method: 'POST',
        url: `/admin/sendCodeToEmail`,
        data
    });
}


export const setStreamUrl = async (data) => {
    return privateHttp({
        method: 'POST',
        url: `/admin/setUrlStream`,
        data
    });
}
