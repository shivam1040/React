import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/roductDetails";

const router=createBrowserRouter([
  //defining a root route which is present in all the children routes defined below which ultimately gets rendered in Outlet component used in Root component
  {path: "/", element: <RootLayout></RootLayout>, errorElement: <ErrorPage></ErrorPage>, children: [
    //rn now all the childs defined here are absolute paths basically fqdn/<the path> but if we want to make it relative like it should ender afert the root path i.e / we can remove the leading / in all the child paths
    //definining a routing path, so / loads home component
    //index: true means route/path thsat should be displayed at first along with the root path when / is hit
  {index: true, path: "/", element: <HomePage></HomePage>},
  {path: "/product", element: <ProductPage></ProductPage>},
  //:productId routes to this page dynamically wheneve url is like /product/1
  {path: "/product/:productId", element: <ProductDetailPage></ProductDetailPage>}
  ]}
])
//old way of defining routes
// const routeDefinitions=createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage></HomePage>}></Route>
//   </Route>
// )

function App() {
  //passing the created router using RouterProvider componenet
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
