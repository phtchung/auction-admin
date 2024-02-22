import React, { useState, useEffect } from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {useSearchParams} from "react-router-dom";
import {reqConvertStatus} from "../../Utils/constant.js";

const CountdownTimer = ({ initialTimeInSeconds }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [status, setStatus] = useState(
        reqConvertStatus(parseInt(searchParams.get("status"))),
    );
    const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);
    const queryClient = useQueryClient();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeInSeconds(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId); // Clear interval on component unmount

    }, []); // Empty dependency array ensures that the effect runs once on mount

    useEffect(() => {
        if (timeInSeconds === 0) {
            queryClient.invalidateQueries({
                queryKey: ["getReqCount"],
            });
            setStatus(reqConvertStatus(parseInt(searchParams.get("status"))))
            queryClient.invalidateQueries({
                queryKey: ["getReqTracking", status],
            });
            queryClient.invalidateQueries({
                queryKey: ["AdminGetBiddingCount"],
            });
            queryClient.invalidateQueries({
                queryKey: ["AdminGetBiddingTracking", status],
            });
            setTimeInSeconds(initialTimeInSeconds);
        }
    }, [timeInSeconds, initialTimeInSeconds]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>
            <p className="text-base  mr-4">Reload: <strong>{formatTime(timeInSeconds)}</strong></p>
        </div>
    )
};

export default CountdownTimer;
