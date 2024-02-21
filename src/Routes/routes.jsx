import PageNotFound from "../Components/PageNotFound/pageNotFound.jsx";
import Login from "../Pages/Login/login.jsx";
import RequestTracking from "../Pages/UserRequestTracking/userReqTracking.jsx";
import AdminBiddingTracking from "../Pages/AdminBiddingTracking/adminBiddingTracking.jsx";
import AdminRequestDetail from "../Pages/RequestDetail/requestDetail.jsx";
import ConfirmApproved from "../Pages/ConfirmApprovedReq/confirmApproved.jsx";
import CreateProductAuction from "../Pages/CreateProductAuction/createProductAuction.jsx";
import ResultPage from "../Components/ResultPage/resultPage.jsx";


export const NormalRoutes = [{ path: "/login", element: <Login /> }];

export const UserRoutes = [
    { path: "/404", element: <PageNotFound /> },
    { path: "/", element: <RequestTracking /> },
    { path: "/reqTracking", element: <RequestTracking /> },
    { path: "/adminBidTracking", element: <AdminBiddingTracking /> },
    { path: "/reqTracking/requestDetail/:id", element: <AdminRequestDetail /> },
    { path: "/reqTracking/requestDetail/approveRequest/:id", element: <ConfirmApproved /> },
    { path: "/resultSuccess", element: <ResultPage /> },
    { path: "/createProductAuction", element: <CreateProductAuction /> },
];
