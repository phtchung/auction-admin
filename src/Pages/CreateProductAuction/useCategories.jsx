import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import {getCategoriesTreeSelect} from "../../Services/categoriesService.jsx";

export default function useTreeCategories() {

    const parseData = useCallback((item) => {
        const categories = item?.map((data) => {
            const children = data?.children.map((child) => {
                return {
                    value : child?._id,
                    title : child?.name,
                    children : []
                }
            })
            return {
                value:data?._id,
                title: data?.name,
                children : children,
            };
        });
        return { categories };
    }, []);

    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ["getCategoriesTreeSelect11"],
        queryFn: () => getCategoriesTreeSelect(),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
    });

    return {
        categories: data?.categories,
        isSuccess,
        isLoading,

    };
}

