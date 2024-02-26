
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const currentDateTime = new Date();
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

    const [df, setDf] = useState(false);
    const [phone, setPhone] = useState('');
    const [queryString, setQueryString] = useState({
        start_time: start_time,
        finish_time: finish_time,
        phone: phone,
        df:df
    });

    return (
        <SearchContext.Provider value={{ queryString, setQueryString }}>
            {children}
        </SearchContext.Provider>
    );
};
