import {useCallback, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getCategories} from "../../Services/categoriesService.jsx";

export default function useCategories() {

    const parseData = useCallback((item) => {
        console.log(item)
        const categories = item?.categories?.map((data) => {
            return {
                category_id: data?._id,
                name: data?.name,
                image: data?.image,
            };
        });

        return {categories};
    }, []);

    const {
        data,
        isSuccess,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["getCategories"],
        queryFn: () => getCategories(),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
    });

    return {
        categories: data?.categories,
        isSuccess,
        isLoading,
        refetch,
    };
}
