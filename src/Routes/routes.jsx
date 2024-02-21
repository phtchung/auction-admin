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
    { path: "/admin/reqTracking", element: <RequestTracking /> },
    { path: "/admin/adminBidTracking", element: <AdminBiddingTracking /> },
    { path: "/admin/reqTracking/requestDetail/:id", element: <AdminRequestDetail /> },
    { path: "/admin/reqTracking/requestDetail/approveRequest/:id", element: <ConfirmApproved /> },
    { path: "/admin/resultSuccess", element: <ResultPage /> },
    { path: "/admin/createProductAuction", element: <CreateProductAuction /> },
];
