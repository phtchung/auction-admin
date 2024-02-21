import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { formatDateTime } from "../../Utils/constant.js";
import {AdminGetReqDetail} from "../../Services/requestService.jsx";

export default function useAdminReqDetail() {
    const { id } = useParams();

    const [searchParam, setSearchParam] = useSearchParams();
    const status = searchParam.get("status");

    const parseData = useCallback((data) => {
        const detail = {
            request_id: data?._id,
            product_name: data?.product_name,
            description: data?.description,
            step_price: data?.step_price,
            shipping_fee: data?.shipping_fee,
            sale_price: data?.sale_price,
            reserve_price: data?.reserve_price,
            final_price: data?.final_price,
            deliData: data?.product_delivery,
            category_name: data?.category_id?.name,
            victory_time: formatDateTime(new Date(data?.victory_time)),
            createdAt: formatDateTime(new Date(data?.createdAt)),
            approved_at:formatDateTime(new Date(data?.updatedAt)),
            start_time: formatDateTime(new Date(data?.start_time)),
            finish_time: formatDateTime(new Date(data?.finish_time)),
            request_time: formatDateTime(new Date(data?.request_id?.createdAt)),
            image_list:data?.image_list,
            main_image:data?.main_image,
            reason:data?.reason,
            reject_time:formatDateTime(new Date(data?.reject_time)),
            rank: data?.rank,
            status: data?.status,
            type_of_auction: data?.type_of_auction,
        };
        return { detail };
    }, []);

    const { data, isSuccess, isLoading,isError } = useQuery({
        queryKey: ["AdminGetReqDetail", id, status],
        queryFn: () => AdminGetReqDetail(id, status),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!id && !!status,
    });

    return {
        reqData: data?.detail,
        isSuccess,
        isLoading,
        isError
    };
}
