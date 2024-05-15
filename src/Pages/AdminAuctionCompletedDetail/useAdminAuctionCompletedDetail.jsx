import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import {formatDateTime, formatMoney} from "../../Utils/constant.js";
import {AdminGeAuctionCompletedDetail, AdminGetReqDetail} from "../../Services/requestService.jsx";

export default function useAdminAuctionCompletedDetail() {
    const { id } = useParams();

    const [searchParam, setSearchParam] = useSearchParams();
    const status = searchParam.get("status");

    const parseData = useCallback((data) => {
        const detail = {
            request_id: data?._id,
            product_name: data?.product_id?.product_name,
            description: data?.product_id?.description,
            step_price: (data?.step_price),
            shipping_fee: (data?.shipping_fee),
            sale_price: (data?.sale_price),
            reserve_price: (data?.reserve_price),
            final_price: (data?.final_price),
            total_price: (data?.final_price + data?.shipping_fee),
            deliData: data?.delivery,
            seller:data?.seller_id,
            winner:data?.winner_id,
            category_name: data?.category_id?.name,
            victory_time: formatDateTime(new Date(data?.victory_time)),
            createdAt: formatDateTime(new Date(data?.createdAt)),
            updatedAt: formatDateTime(new Date(data?.updatedAt)),
            approved_at:formatDateTime(new Date(data?.updatedAt)),
            start_time: formatDateTime(new Date(data?.start_time)),
            finish_time: formatDateTime(new Date(data?.finish_time)),
            request_time: formatDateTime(new Date(data?.request_time)),
            image_list:data?.product_id?.image_list,
            main_image:data?.product_id?.main_image,
            reason:data?.reason,
            is_used:data?.product_id?.is_used === 0 ? 'Chưa sử dụng' : 'Đã sử dụng',
            brand:data?.product_id?.brand,
            can_return:data?.product_id?.can_return === 0 ? 'Không' : 'Có thể',
            delivery_from:data?.product_id?.delivery_from,
            reject_time:formatDateTime(new Date(data?.reject_time)),
            completed_time:formatDateTime(new Date(data?.completed_time)),
            rank: data?.product_id?.rank,
            status: data?.status,
            admin_belong:data?.admin_belong,
            type_of_auction: data?.type_of_auction === 1 ? 'Đấu giá tăng' : 'Đấu giá giảm',
        };
        return { detail };
    }, []);

    const { data, isSuccess, isLoading,isError, } = useQuery({
        queryKey: ["AdminGeAuctionCompletedDetail", id, status],
        queryFn: () => AdminGeAuctionCompletedDetail(id, status),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!id ,
    });

    return {
        reqData: data?.detail,
        isSuccess,
        isLoading,
        isError
    };
}
