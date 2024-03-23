import PageNotFound from "../Components/PageNotFound/pageNotFound.jsx";
import Login from "../Pages/Login/login.jsx";
import RequestTracking from "../Pages/UserRequestTracking/userReqTracking.jsx";
import AdminBiddingTracking from "../Pages/AdminBiddingTracking/adminBiddingTracking.jsx";
import AdminRequestDetail from "../Pages/AdminBiddingDetail/requestDetail.jsx";
import ConfirmApproved from "../Pages/ConfirmApprovedReq/confirmApproved.jsx";
import CreateProductAuction from "../Pages/CreateProductAuction/createProductAuction.jsx";
import ResultPage from "../Components/ResultPage/resultPage.jsx";
import UserRequestDetail from "../Pages/UserRequestDetail/userRequestDetail.jsx";
import RequestHistory from "../Pages/RequestHistory/requestHistory.jsx";
import UserAuctionCompleted from "../Pages/UserAuctionCompleted/userAuctionCompleted.jsx";
import UserAuctionCompletedDetail from "../Pages/UserAuctionCompletedDetail/userAuctionCompletedDetail.jsx";
import RequestHistoryDetail from "../Pages/RequestHistoryDetail/requestHistoryDetail.jsx";
import AdminAuctionCompleted from "../Pages/AdminAuctionCompleted/adminAuctionCompleted.jsx";
import AdminAuctionCompletedDetail from "../Pages/AdminAuctionCompletedDetail/adminAuctionCompletedDetail.jsx";
import ReturnProductUser from "../Pages/ReturnProductUser/returnProductUser.jsx";
import ReturnProductAdmin from "../Pages/ReturnProductAdmin/returnProductAdmin.jsx";
import ReturnProductDetail from "../Pages/ReturnProductDetail/returnProductDetail.jsx";
import CreateBlog from "../Pages/CreateBlog/createBlog.jsx";
import CreateCategories from "../Pages/CreateCategories/createCategories.jsx";
import CategoryDetail from "../Pages/CategoryDetail/categoryDetail.jsx";


export const NormalRoutes = [{ path: "/login", element: <Login /> }];

export const UserRoutes = [
    { path: "/404", element: <PageNotFound /> },
    { path: "/", element: <RequestTracking /> },
    { path: "/reqTracking", element: <RequestTracking /> },
    { path: "/adminBidTracking", element: <AdminBiddingTracking /> },
    { path: "/reqTracking/requestDetail/:id", element: <AdminRequestDetail /> },
    { path: "/reqTracking/userRequestDetail/:id", element: <UserRequestDetail /> },
    { path: "/reqTracking/requestDetail/approveRequest/:id", element: <ConfirmApproved /> },
    { path: "/resultSuccess", element: <ResultPage /> },
    { path: "/createProductAuction", element: <CreateProductAuction /> },
    { path: "/createBlog", element: <CreateBlog /> },
    { path: "/categories", element: <CreateCategories /> },
    { path: "/categories/:id", element: <CategoryDetail /> },
    { path: "/requestHistory", element: <RequestHistory /> },
    { path: "/userAuctionCompleted", element: <UserAuctionCompleted/> },
    { path: "/userAuctionCompleted/detail/:id", element: <UserAuctionCompletedDetail/> },
    { path: "/requestHistory/detail/:id", element: <RequestHistoryDetail/> },
    { path: "/adminAuctionCompleted", element: <AdminAuctionCompleted/> },
    { path: "/adminAuctionCompleted/detail/:id", element: <AdminAuctionCompletedDetail/> },
    { path: "/returnProductUser", element: <ReturnProductUser/> },
    { path: "/returnProductAdmin", element: <ReturnProductAdmin/> },
    { path: "/returnProductUser/detail/:id", element: <ReturnProductDetail/> },
    { path: "/returnProductAdmin/detail/:id", element: <ReturnProductDetail/> },

];
