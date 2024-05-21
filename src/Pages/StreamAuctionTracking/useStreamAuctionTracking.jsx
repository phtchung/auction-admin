import {useCallback, useContext} from "react";
import { useQuery } from "@tanstack/react-query";
import {
    adminStreamTracking,
} from "../../Services/requestService.jsx";
import {SearchContext} from "../../Components/context/SearchContext.jsx";
import {formatDateTime} from "../../Utils/constant.js";

export default function useStreamAuctionTracking() {

    const { queryTracking, setQueryTracking} = useContext(SearchContext);

    const parseData = useCallback((item) => {
        const dataTracking = item?.auction?.map((data) => {
            console.log(data)
            return {
                id: data?._id,
                room: data?.room_id,
                start_time : formatDateTime(data?.start_time),
                finish_time : formatDateTime(data?.finish_time),
                register_finish : formatDateTime(data?.register_finish),
                url_stream:data?.url_stream,
                state : data?.status === 3 ? 'Đang đấu giá' : data?.register_finish < new Date() ? 'Sắp bắt đầu'  : 'Đăng ký',
                register_count : data?.code_access.length,
            };
        });

        return { dataTracking };
    }, []);

    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ["adminStreamTracking", queryTracking],
        queryFn: () => adminStreamTracking(queryTracking),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!queryTracking  ,
    });

    return {
        data: data?.dataTracking,
        isSuccess,
        isLoading,
        queryTracking, setQueryTracking
    };
}
