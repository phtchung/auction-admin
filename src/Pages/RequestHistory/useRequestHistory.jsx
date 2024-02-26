import {useCallback, useContext, useState} from "react";
import { useQuery } from "@tanstack/react-query";

import {adminGetRequestHistory} from "../../Services/requestService.jsx";
import { formatDateTime } from "../../Utils/constant.js";
import {SearchContext} from "../../Components/context/SearchContext.jsx";

export default function useRequestHistory() {
  const { queryString, setQueryString } = useContext(SearchContext);


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
        status_string:data?.status === 1 ? 'Yêu cầu mới' : data?.status === 2 ? 'Đã duyệt' : 'Từ chối'
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
    enabled: !!queryString ,
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
