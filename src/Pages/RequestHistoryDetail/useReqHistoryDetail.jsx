import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { formatDateTime } from "../../Utils/constant.js";
import { adminGetReqHistoryDetail} from "../../Services/requestService.jsx";

export default function useReqHistoryDetail() {
  const { id } = useParams();

  const parseData = useCallback((data) => {
    console.log(data)
    const detail = {
      request_id: data?._id,
      product_name: data?.product_id?.product_name,
      description: data?.product_id?.description,
      step_price: data?.step_price,
      shipping_fee: data?.shipping_fee,
      sale_price: data?.sale_price,
      reserve_price: data?.reserve_price,
      final_price: data?.final_price,
      deliData: data?.delivery,
      seller:data?.seller_id,
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
      reject_time:formatDateTime(new Date(data?.reject_time)),
      completed_time:formatDateTime(new Date(data?.delivery?.completed_time)),
      rank: data?.product_id?.rank,
      status: data?.status,
      admin_belong:data?.admin_belong,
      type_of_auction: data?.type_of_auction === 1 ? 'Đấu giá tăng' : 'Đấu giá giảm',
    };
    return { detail };
  }, []);

  const { data, isSuccess, isLoading,isError } = useQuery({
    queryKey: ["adminGetReqHistoryDetail", id],
    queryFn: () => adminGetReqHistoryDetail(id),
    staleTime: 20 * 1000,
    select: (data) => parseData(data.data),
    enabled: !!id,
  });

  return {
    reqData: data?.detail,
    isSuccess,
    isLoading,
    isError
  };
}
