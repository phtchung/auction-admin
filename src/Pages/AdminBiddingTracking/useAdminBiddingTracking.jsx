import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    AdminBiddingTrackingColumns, AdminCancelTrackingColumns, AdminCompletedTrackingColumns, AdminFailureTrackingColumns,
    AdminNewProductTrackingColumns,
    adminProductStatus, AdminReturnTrackingColumns, AdminSuccessTrackingColumns,
    formatDateTime,
} from "../../Utils/constant.js";
import { useSearchParams } from "react-router-dom";
import {
    AdminGetBiddingCount,
    AdminGetBiddingTracking,
} from "../../Services/requestService.jsx";

export default function useAdminBiddingTracking() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [status, setStatus] = useState(
        adminProductStatus(searchParams.get("status")),
    );
    console.log(status)

    const parseData = useCallback((item) => {
        const adminBidData = item?.adminBiddingList?.map((data) => {
            return {
                product_id : data?._id,
                product_name: data?.product_name,
                admin_status: data?.admin_status,
                createdAt: formatDateTime(new Date(data?.createdAt)),
                reserve_price: data?.reserve_price,
                type_of_auction:data?.type_of_auction,
                sale_price:data?.sale_price,
                final_price: data?.final_price,
                seller_name:data?.seller_id?.username,
                phone: data?.seller_id?.phone,
                start_time:formatDateTime(new Date(data?.start_time)),
                finish_time:formatDateTime(new Date(data?.finish_time)),
                victory_time: formatDateTime(new Date(data?.victory_time)),
                total_price: data?.final_price + data?.shipping_fee,
                completed_at: formatDateTime(
                    new Date(data?.product_delivery?.completed_at),
                ),
            };
        });

        const colTrackingData =
            item.admin_status === 'N' || item.admin_status === '-N'
                ? AdminNewProductTrackingColumns
                : item.admin_status === 'B'
                    ? AdminBiddingTrackingColumns
                    : item.admin_status === 'S' || item.admin_status === 'C' || item.admin_status === 'D'
                        ? AdminSuccessTrackingColumns
                        : item.admin_status === 'E'
                            ? AdminCompletedTrackingColumns
                            : item.admin_status === 'R' ?
                                AdminCancelTrackingColumns :
                                item.admin_status === 'G' ?
                                    AdminReturnTrackingColumns : AdminFailureTrackingColumns;
        console.log(adminBidData , colTrackingData)
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
