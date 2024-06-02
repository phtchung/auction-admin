const UserSellerInfor = ({data}) => {
    return (
        <>
            <div className="items-center font-medium text-sm gap-6  my-5 px-1 lg:space-y-5  min-[225px]:space-y-3">
                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Mã yêu cầu</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.request_id}
                        </div>
                    </div>
                    {
                        (isFinite(data?.status) && data?.admin_belong !== 1) &&
                        <>
                            <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                <div className="min-[225px]:col-span-3 sm:col-span-1"> Thời gian yêu cầu</div>
                                <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                    {(data?.status === 1 || data?.status === 13) ? data?.createdAt : data?.request_time}
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Người bán</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.seller?.name}
                        </div>
                    </div>

                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Số điện thoại</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.seller?.phone}
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Đơn hàng hoàn thành</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.seller?.product_done_count}
                        </div>
                    </div>

                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3 sm:col-span-1"> Trung bình đánh giá</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.seller?.average_rating ? data?.seller?.average_rating : 0}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3 sm:col-span-1"> Điểm shop</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.seller?.shop_point || 0}
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};
export default UserSellerInfor;
