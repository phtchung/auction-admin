import {useCallback, useContext} from "react";
import { useQuery } from "@tanstack/react-query";
import {returnProductOfAdmin, returnProductOfUser} from "../../Services/requestService.jsx";
import { formatDateTime } from "../../Utils/constant.js";
import {SearchContext} from "../../Components/context/SearchContext.jsx";

export default function useReturnProductAdmin() {
  const { queryReturn, setQueryReturn } = useContext(SearchContext);


  const parseData = useCallback((item) => {
    const returnProAdmin = item?.returnProducts.map((data) => {
      return {
        id: data?._id,
        product_name: data.product_name,
        rank: data?.rank,
        status: data?.status,
        createdAt: formatDateTime(new Date(data?.createdAt)),
        seller_name:data?.seller_id?.name,
        winner_phone:data?.winner_id?.phone,
        winner_name:data?.winner_id?.name,
        return_time:formatDateTime(new Date(data?.product_delivery?.return_time)),
      };
    });

    const total = item?.total;
    return { returnProAdmin, total };
  }, []);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["returnProductOfAdmin", queryReturn],
    queryFn: () => returnProductOfAdmin(queryReturn),
    staleTime: 20 * 1000,
    select: (data) => parseData(data.data),
    enabled: !!queryReturn ,
  });

  return {
    returnProAdminData: data?.returnProAdmin,
    total: data?.total,
    isSuccess,
    isLoading,
    queryReturn,
    setQueryReturn,
  };
}
