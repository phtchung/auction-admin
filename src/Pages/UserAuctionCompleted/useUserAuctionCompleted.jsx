import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {adminGetAuctionHistoryList, adminGetRequestHistory} from "../../Services/requestService.jsx";
import { formatDateTime } from "../../Utils/constant.js";

export default function useUserAuctionCompleted() {
  const currentDateTime = new Date();
  const [df, setDf] = useState(false);
  const [phone, setPhone] = useState('');
  const [finish_time, setFinishTime] = useState(() => {
    const oneDaysAgo = new Date(currentDateTime);
    oneDaysAgo.setDate(oneDaysAgo.getDate() - 1);
    oneDaysAgo.setHours(23, 59, 59, 999);
    return oneDaysAgo.toISOString();
  });

  const [start_time, setStartTime] = useState(() => {
    const sevenDaysAgo = new Date(currentDateTime);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 1);
    sevenDaysAgo.setHours(0, 0, 0, 0);
    return sevenDaysAgo.toISOString();
  });

  const [queryString, setQueryString] = useState({
    start_time: start_time,
    finish_time: finish_time,
    phone: phone,
    df:df
  });

  const parseData = useCallback((item) => {
    const userAuctionHistoryData = item?.products.map((data) => {
      return {
        id: data?._id,
        product_name: data?.product_name,
        status: data?.status,
        status_name : data?.status === 8 ? 'Hoàn thành' :  data?.status === 10 ? 'Thất bại' : data?.status === 11 ? 'Hủy' : 'Đã trả hàng',
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
    enabled: !!start_time && !!finish_time  ,
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
