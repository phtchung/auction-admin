import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {adminGetRequestHistory} from "../../Services/requestService.jsx";
import { formatDateTime } from "../../Utils/constant.js";

export default function useRequestHistory() {
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
    const reqHis = item?.requests.map((data) => {
      return {
        id: data?._id,
        product_name: data.product_name,
        rank: data?.rank,
        status: data?.status,
        createdAt: formatDateTime(new Date(data?.createdAt)),
        seller_name:data?.seller_id?.name,
        phone:data?.seller_id?.phone,
      };
    });

    const total = item?.total;
    return { reqHis, total };
  }, []);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["AdminGetRequestHistory", queryString],
    queryFn: () => adminGetRequestHistory(queryString),
    staleTime: 20 * 1000,
    select: (data) => parseData(data.data),
    enabled: !!start_time && !!finish_time  ,
  });

  return {
    reqHistoryData: data?.reqHis,
    total: data?.total,
    isSuccess,
    isLoading,
    queryString,
    setQueryString,
  };
}
