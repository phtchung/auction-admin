import {Image} from "antd";

const ReviewInfo = ({data}) => {

    return (
        <>
            <div
                className="items-center font-medium text-sm gap-6  my-5 px-1 lg:space-y-5  min-[225px]:space-y-3">

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[100px]:col-span-6 md:col-span-1"> Thời gian đánh giá
                    </div>
                    <div className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                        {data?.review_time}</div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[100px]:col-span-6 md:col-span-1"> Đánh giá
                    </div>
                    <div className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                        {data?.review_rate}</div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[100px]:col-span-6 md:col-span-1"> Phản hồi người dùng
                    </div>
                    <div className="font-normal  min-[100px]:col-span-6  md:col-span-5">
                        {data?.review_comment}</div>
                </div>
                <div className="grid grid-cols-6 text-left">
                    <div className="min-[225px]:col-span-3  sm:col-span-2">
                        Ảnh đánh giá
                    </div>
                </div>

                {
                    data.review_images.length !== 0 ?
                        <>
                            <div
                                className="grid xl:grid-cols-6 gap-1 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 min-[225px]:col-span-1 text-left mb-4">
                                <Image.PreviewGroup
                                    preview={{
                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                    }}>
                                    {data?.review_images.map((imageUrl, index) => (
                                        <>
                                            <div className="font-normal col-span-1 mb-2">
                                                <Image key={index} height={150} width={150}
                                                       src={imageUrl}/>
                                            </div>
                                        </>
                                    ))}
                                </Image.PreviewGroup>
                            </div>
                        </>
                        :
                        <><span>Người dùng không gửi ảnh đánh giá </span></>
                }
            </div>
        </>
    );
};
export default ReviewInfo;
