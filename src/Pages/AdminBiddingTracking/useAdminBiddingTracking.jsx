import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    AdminBiddingTrackingColumns, AdminCancelTrackingColumns, AdminCompletedTrackingColumns, AdminFailureTrackingColumns,
    AdminNewProductTrackingColumns,
    adminProductStatus, AdminReturnTrackingColumns, AdminSuccessTrackingColumns,
    formatDateTime, formatMoney,
} from "../../Utils/constant.js";
import { useSearchParams } from "react-router-dom";
import {
    AdminGetBiddingCount,
    AdminGetBiddingTracking,
} from "../../Services/requestService.jsx";

export default function useAdminBiddingTracking() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [status, setStatus] = useState(
        adminProductStatus(parseInt(searchParams.get("status"))),
    );
    console.log(searchParams.get("status"))

    const parseData = useCallback((item) => {
        const adminBidData = item?.adminBiddingList?.map((data) => {
            return {
                product_id : data?._id,
                product_name: data?.product_name,
                status: data?.status,
                admin_belong:data?.admin_belong,
                createdAt: formatDateTime(new Date(data?.createdAt)),
                reserve_price:formatMoney(data?.reserve_price),
                cancel_time:formatDateTime(data?.cancel_time),
                type_of_auction: data?.type_of_auction === 1 ? 'Đấu giá tăng' : 'Đấu giá giảm',
                sale_price:formatMoney(data?.sale_price),
                final_price: formatMoney(data?.final_price),
                seller_name:data?.seller_id?.username,
                phone: data?.seller_id?.phone,
                phone_receiver : data?.product_delivery?.phone,
                start_time:formatDateTime(new Date(data?.start_time)),
                finish_time:formatDateTime(new Date(data?.finish_time)),
                victory_time: formatDateTime(new Date(data?.victory_time)),
                total_price: data?.final_price + data?.shipping_fee,
                isDeliInfor:data?.isDeliInfor === 0 ? 'Chưa có thông tin giao hàng' : 'Đang đấu giá',
                completed_at: formatDateTime(
                    new Date(data?.product_delivery?.completed_at),
                ),
            };
        });

        const colTrackingData =
            item.status === 2
                ? AdminNewProductTrackingColumns
                : item.status === 3
                    ? AdminBiddingTrackingColumns
                    : item.status === 5 || item.status === 6 || item.status === 7
                        ? AdminSuccessTrackingColumns
                        : item.status === 8
                            ? AdminCompletedTrackingColumns
                            : item.status === 11 ?
                                AdminCancelTrackingColumns :
                                item.status === 9 ?
                                    AdminReturnTrackingColumns : AdminFailureTrackingColumns;
        return { adminBidData, colTrackingData };
    }, []);

    const {
        data, isSuccess, isLoading, refetch: refetch1,} = useQuery({
        queryKey: ["AdminGetBiddingTracking", status],
        queryFn: () => AdminGetBiddingTracking(status),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!status,
    });

    const {
        data: AdminBidCount, isSuccess: isScCount, isLoading: isLdCount, refetch,} = useQuery({
        queryKey: ["AdminGetBiddingCount"],
        queryFn: () => AdminGetBiddingCount(),
        staleTime: 20 * 1000,
    });


    return {
        data: data?.adminBidData,
        columns: data?.colTrackingData,
        isSuccess,
        isLoading,
        adminBidCount: AdminBidCount?.data,
        isScCount,
        isLdCount,
        status,
        setStatus,
        refetch,
        refetch1,
    };
}
