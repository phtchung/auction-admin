import {useCallback, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getCategoryChild, getCategoryParent} from "../../Services/categoriesService.jsx";
import {useParams} from "react-router-dom";

export default function useCategoryDetail() {

    const {id} = useParams()
    const parseData = useCallback((item) => {
        const categories = item?.categories?.map((data) => {
            return {
                categoryChild_id: data?._id,
                parent_id: data.parent === null ? data?._id : null,
                name: data?.name,
                createdAt: data?.createdAt,
                status: data?.status === 1 ? 'Hoạt động' : 'Không hoạt động',
                count: 0,
            };
        });

        return {categories};
    }, []);

    const {
        data, isSuccess, isLoading, refetch,
    } = useQuery({
        queryKey: ["getCategoryChild", id],
        queryFn: () => getCategoryChild(id),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!id,
    });

    const {
        data: parent, isSuccess: isSc, isLoading: isLd,
    } = useQuery({
        queryKey: ["getCategoryParent", id],
        queryFn: () => getCategoryParent(id),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!id,
    });

    return {
        categories: data?.categories,
        parent: parent?.categories[0],
        isSuccess,
        isLoading,
        isSc, isLd,
        refetch,
    };
}
