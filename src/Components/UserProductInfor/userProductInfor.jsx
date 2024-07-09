import {Image} from 'antd';

const UserProductInfor = ({data}) => {
    return (
        <>
            <div className="items-center font-medium text-sm gap-6  my-5 px-1 lg:space-y-5  min-[225px]:space-y-3">

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[100px]:col-span-6 md:col-span-1"> Tên sản phẩm</div>
                    <div className="font-normal  min-[100px]:col-span-6  md:col-span-5"> {data?.product_name}</div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Chất lượng</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.rank}
                        </div>
                    </div>
                    {
                        data?.status !== 1 &&
                        <>
                            <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                                <div className="min-[225px]:col-span-3 sm:col-span-1"> Danh mục</div>
                                <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                                    {data?.category_name}
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Thương hiệu</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.brand}
                        </div>
                    </div>
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3 sm:col-span-1"> Tình trạng</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.is_used === 0 ? 'Chưa sử dụng' : 'Đã sử dụng'}
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-6 text-left">
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3  sm:col-span-1"> Trả hàng</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.can_return === 0 ? 'Không' : 'Có thể'}
                        </div>
                    </div>
                    <div className="lg:col-span-3  min-[225px]:col-span-6 grid grid-cols-3">
                        <div className="min-[225px]:col-span-3 sm:col-span-1"> Nơi gửi hàng</div>
                        <div className="font-normal  sm:col-span-2 min-[225px]:col-span-3 ">
                            {data?.delivery_from}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[100px]:col-span-6 md:col-span-1"> Mô tả sản phẩm</div>
                    <div className="font-normal  min-[100px]:col-span-6  md:col-span-5" style={{ whiteSpace: 'pre-line' }}> {data?.description}</div>
                </div>

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[225px]:col-span-3  sm:col-span-2">
                        Hỉnh ảnh sản phẩm
                    </div>
                </div>

                {data.main_image &&
                    <>
                        <div
                            className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 min-[225px]:col-span-1 text-left mb-4">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <div className="font-normal col-span-1 mb-2">
                                    <Image height={150} width={150}
                                           src={data.main_image}/>
                                </div>

                            </Image.PreviewGroup>
                        </div>
                    </>
                }

                <div className="grid grid-cols-6 text-left">
                    <div className="min-[225px]:col-span-3  sm:col-span-2">
                        Các hình ảnh liên quan
                    </div>
                </div>

                {
                    data.image_list &&
                    <>
                        <div
                            className="grid xl:grid-cols-6 gap-1 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 min-[225px]:col-span-1 text-left mb-4">
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}>
                                {data?.image_list.map((imageUrl, index) => (
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
                }
            </div>
        </>
    );
};
export default UserProductInfor;
