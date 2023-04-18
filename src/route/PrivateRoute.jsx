import PrivateMain from "../private-pages/main/PrivateMain";
import CreateProduct from "../private-pages/main/CreateProduct";
import AllProducts from "../private-pages/main/AllProducts";
import EditPage from "../private-pages/main/EditPage";
import OrderPage from "../private-pages/main/OrderPage";

export const PrivateRoute = [
    {
        id: "0",
        path: "/",
        element: <PrivateMain />
    },
    {
        id: "1",
        path: "/All_Products",
        element: <AllProducts />
    },
    {
        id: "2",
        path: "/CreateProduct",
        element: <CreateProduct />
    },
    {
        id: "3",
        path: "/EditPage",
        element: <EditPage />
    },
    {
        id: "",
        path: "/OrderPage",
        element: <OrderPage />
    },


];