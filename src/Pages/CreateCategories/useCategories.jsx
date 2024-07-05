import {useCallback, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getCategories} from "../../Services/categoriesService.jsx";

export default function useCategories() {
    const [key , setKey] = useState('')
    const parseData = useCallback((item) => {
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
        queryKey: ["getCategories",key],
        queryFn: () => getCategories(key),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
    });

    return {
        categories: data?.categories,
        isSuccess,
        isLoading,
        refetch,
        key,setKey
    };
}
