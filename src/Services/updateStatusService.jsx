import privateHttp from "./Http/privateHttp.config.js";

export const adminUpdateStatus = async ( newState) => {
    return privateHttp({
        method: "POST",
        url: `admin/product/updateStatus`,
        data: newState

    });
};
