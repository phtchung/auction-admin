import {useCallback, useContext, useState} from "react";
import { useQuery } from "@tanstack/react-query";
import {adminGetAdminAuctionCompletedList, getStreamAuctionTracking} from "../../Services/requestService.jsx";
import {SearchContext} from "../../Components/context/SearchContext.jsx";

export default function useStreamAuctionTracking() {

    const {queryStream, setQueryStream} = useContext(SearchContext);

    const parseData = useCallback((item) => {
        const adminAuctionCompletedData = item?.data?.map((data) => {
            console.log(data)
            return {
                id: data?._id,
                name: data?.user_id?.name,
                room: data?.auction_id?.room_id,
                email : data?.user_id?.email,
                phone:data?.user_id?.phone,
                user_id : data?.user_id?._id,
                auction_id : data?.auction_id?._id
            };
        });

        return { adminAuctionCompletedData };
    }, []);

    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ["getStreamAuctionTracking", queryStream],
        queryFn: () => getStreamAuctionTracking(queryStream),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!queryStream  ,
    });

    return {
        adminAuctionCompletedData: data?.adminAuctionCompletedData,
        isSuccess,
        isLoading,
        queryStream,
        setQueryStream,
    };
}
