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

export const AdminGetBiddingTracking = async (admin_status) => {
    return privateHttp({
        method: "POST",
        url: "/admin/product/bidList",
        data: {
            admin_status: admin_status,
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
