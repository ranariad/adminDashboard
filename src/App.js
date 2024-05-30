
import "./app.css"
import Home from "./components/pages/Home/Home";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import Layout from "./components/Layout/Layout";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

const routers = createBrowserRouter([
  {path:"/" , element:<Layout /> , children:[
    {index:true  , element:<Home />},
    {path:"users" , element:<UserList />},
    {path:"user/:userId" , element:<User/>},
    {path:"newUser" , element:<NewUser/>},
    {path:"products" , element:<ProductList/>},
    {path:"product/:productId" , element:<Product/>},
    {path:"newProduct" , element:<NewProduct/>},





  ]}
])


function App() {
return <RouterProvider router={routers}></RouterProvider>
 
}

export default App;
