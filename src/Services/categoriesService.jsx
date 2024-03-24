import privateHttp from "./Http/privateHttp.config.js";
import publicHttp from "./Http/publicHttp.config.js";

export const getCategories = async () => {
    return privateHttp({
        method: "GET",
        url: `/admin/categories`,
    });
};

export const addCategory = async ({ data, id }) => {
    return privateHttp({
        method: 'POST',
        url: `/category/${id}`,
        data
    });
}

export const editCategory = async ({ data }) => {
    return privateHttp({
        method: 'PUT',
        url: `/admin/category`,
        data
    });
}

export const getCategoryChild = async (id) => {
    return privateHttp({
        method: "GET",
        url: `/admin/categoryChild/${id}`,
    });
};

export const getCategoryParent = async (id) => {
    return privateHttp({
        method: "GET",
        url: `/admin/categoryParent/${id}`,
    });
};

export const deleteCategory = async ({ category_id }) => {
    return privateHttp({
        method: 'DELETE',
        url: `/admin/category/${category_id}`,
    });
}

export const getCategoriesTreeSelect = async () => {
    return publicHttp({
        method: "GET",
        url: `/categories`,
    });
};
