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
            product_name: data?.product_id?.product_name,
            description: data?.product_id?.description,
            step_price: data?.step_price,
            shipping_fee: data?.shipping_fee,
            sale_price: data?.sale_price ? data?.sale_price : 'Không có',
            reserve_price: data?.reserve_price,
            final_price: data?.final_price,
            deliData: data?.delivery,
            category_name: data?.category_id?.name,
            victory_time: formatDateTime(new Date(data?.victory_time)),
            createdAt: formatDateTime(new Date(data?.createdAt)),
            approved_at:formatDateTime(new Date(data?.updatedAt)),
            start_time: formatDateTime(new Date(data?.start_time)),
            finish_time: formatDateTime(new Date(data?.finish_time)),
            request_time: formatDateTime(new Date(data?.request_time)),
            image_list:data?.product_id?.image_list,
            main_image:data?.product_id?.main_image,
            reason:data?.reason,
            is_used:data?.product_id?.is_used === 0 ? 'Chưa sử dụng' : 'Đã sử dụng',
            auction_live:data?.auction_live === 0 ? 'Đấu giá thông thường' : data?.auction_live === 1 ? 'Đấu giá trực tuyến' : 'Đấu giá livestream',
            brand:data?.product_id?.brand,
            can_return:data?.product_id?.can_return === 0 ? 'Không' : 'Có thể',
            delivery_from:data?.product_id?.delivery_from,
            winner:data?.winner_id?.name,
            phone:data?.winner_id?.phone,
            reject_time:formatDateTime(new Date(data?.reject_time)),
            completed_time:formatDateTime(new Date(data?.product_delivery?.completed_time)),
            rank: data?.product_id?.rank,
            status: data?.status,
            admin_belong:data?.admin_belong,
            type_of_auction: data?.type_of_auction === 1 ? 'Đấu giá tăng' : 'Đấu giá giảm',
            register_start : formatDateTime(new Date(data?.register_start)),
            register_finish : formatDateTime(new Date(data?.register_finish)),
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
