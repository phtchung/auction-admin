const TabItem = ({ data, count, onClick, isSelected }) => {
  return (
    <>
        <div
            style={{
                backgroundColor:  "white",
            }}
            onClick={onClick}
            className={`flex-col ${isSelected ? 'border-t-red-600 border-t-4' : ' border-t-4'}   cursor-pointer m-3 border-2 border-gray-300 w-44 text-left relative bg-gray-200`}
        >
            <div className={`px-3 leading-8 text-sm ${isSelected ? 'text-red-500 ' : 'text-stone-600'}`}>
                {data.name}
            </div>
            {/*<div className=" px-3 leading-8 text-sm text-gray-600  color:isSelected ? " red" : " white",">*/}
            {/*    {data.name}*/}
            {/*</div>*/}
            <div className="border-b border-gray-400"></div>
            <div className="font-semibold bg-slate-50 px-3 text-stone-600 text-2xl">
                {count}
            </div>
            <div
                className={`absolute -right-2 -top-2 text-white text-xs font-light rounded-md px-1 ${data.color}`}
            >
                {data.top}
            </div>
        </div>
    </>
  );
};

export default TabItem;
