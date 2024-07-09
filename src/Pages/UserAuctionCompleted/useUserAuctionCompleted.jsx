import {useCallback, useContext, useState} from "react";
import { useQuery } from "@tanstack/react-query";
import {adminGetAuctionHistoryList} from "../../Services/requestService.jsx";
import { formatDateTime } from "../../Utils/constant.js";
import {SearchContext} from "../../Components/context/SearchContext.jsx";

export default function useUserAuctionCompleted() {

  const { queryString, setQueryString } = useContext(SearchContext);

  const parseData = useCallback((item) => {
    const userAuctionHistoryData = item?.auctions.map((data) => {
      return {
        id: data?._id,
        product_name: data?.product_id?.product_name,
        status: data?.status,
        status_name : data?.status === 8 ? 'Hoàn thành' :  data?.status === 10 ? 'Thất bại' : data?.status === 11 ? 'Hủy' : data?.status === 14 ? 'Đã trả hàng' : 'Từ chối trả hàng',
        start_time: formatDateTime(new Date(data?.start_time)),
        finish_time: formatDateTime(new Date(data?.finish_time)),
        seller_name:data?.seller_id?.name,
      };
    });

    const total = item?.total;
    return { userAuctionHistoryData, total };
  }, []);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["adminGetAuctionHistoryList", queryString],
    queryFn: () => adminGetAuctionHistoryList(queryString),
    staleTime: 20 * 1000,
    select: (data) => parseData(data.data),
    enabled: !!queryString  ,
  });

  return {
    userAuctionHistoryData: data?.userAuctionHistoryData,
    total: data?.total,
    isSuccess,
    isLoading,
    queryString,
    setQueryString,
  };
}
