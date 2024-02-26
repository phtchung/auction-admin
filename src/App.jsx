import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NormalRoutes, UserRoutes} from "./Routes/routes.jsx";
import RequireAuth from "./Components/context/requireAuth.jsx";
import 'react-toastify/dist/ReactToastify.css';
import '../src/Pages/Login/style.css'
import {SearchProvider} from "./Components/context/SearchContext.jsx";


const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer/>
            <SearchProvider>
            <BrowserRouter>
                <Routes>
                    {NormalRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}/>
                    ))}

                    {UserRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<RequireAuth>{route.element}</RequireAuth>}
                        ></Route>
                    ))}
                </Routes>
            </BrowserRouter>
            </SearchProvider>
        </QueryClientProvider>

    );
};
export default App;
