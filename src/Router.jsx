import { createBrowserRouter } from "react-router-dom";

// Import pages
import Homepage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import HomeOwnerSignUp from "./pages/HomeOwnerSignUp";
import ServiceProviderSignUp from "./pages/ServiceProviderSignUp";
import ServiceProviderProfile from "./pages/ServiceProviderProfile";
import AddNewProject from "./pages/ServiceProvider/AddNewProject";
import AddRetailItem from "./pages/ServiceProvider/AddRetailItem";
import AddRentalItem from "./pages/ServiceProvider/AddRentalItem";
import ViewProject from "./pages/ServiceProvider/ViewProject";
import ViewRentalItem from "./pages/ServiceProvider/ViewRentalItem";
import ViewResponse from "./pages/ServiceProvider/ViewResponse";
import Product from "./pages/e-com/Product";
import Home from "./pages/e-com/Home";
import ProductList from "./pages/e-com/ProductList";
import Cart from "./pages/e-com/Cart";
import AdminDashboard from "./pages/admin/dash";
import FindFurniture from "./pages/findfurniture";
import AddCustomerRequest from "./pages/AddCustomerRequest";
import ViewCustomerRequest from "./pages/ViewCustomerRequest";
import CustomerRequestDetails from "./pages/CustomerRequestDetails";

//admin dashboard
import Dashboard from "./pages/adminDashboard/dashboard";
import Team from "./pages/adminDashboard/team";
import Invoices from "./pages/adminDashboard/invoices";
import Contacts from "./pages/adminDashboard/contacts";
import Bar from "./pages/adminDashboard/bar";
import Form from "./pages/adminDashboard/form";
import Line from "./pages/adminDashboard/line";
import Pie from "./pages/adminDashboard/pie";
import Reviews from "./pages/adminDashboard/reviews";
import Geography from "./pages/adminDashboard/geography";
import Calendar from "./pages/adminDashboard/calendar";

//blog pages
import BlogHome from "./pages/blog/home";
import BlogView from "./pages/blog/view"
import BlogCreate from "./pages/blog/create"

//renting pages
import AllRenters from "./pages/renter/AllRenters"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SignUp/HomeOwner",
    element: <HomeOwnerSignUp />,
  },
  {
    path: "/SignUp/ServiceProvider",
    element: <ServiceProviderSignUp />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/e-com/Home",
    element: <Home />,
  },
  {
    path: "/e-com/ProductList",
    element: <ProductList />,
  },
  {
    path: "/e-com/Product",
    element: <Product />,
  },
  {
    path: "/e-com/Cart",
    element: <Cart />,
  },
  {
    path: "/ServiceProviderProfile",
    element: <ServiceProviderProfile />,
  },
  {
    path: "/AddNewProject",
    element: <AddNewProject />,
  },
  {
    path: "/AddRetailItem",
    element: <AddRetailItem />,
  },
  {
    path: "/AddRentalItem",
    element: <AddRentalItem />,
  },
  {
    path: "/ViewProject",
    element: <ViewProject />,
  },
  {
    path: "/ViewRentalItem",
    element: < ViewRentalItem />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/team",
    element: <Team />,
  },
  {
    path: "/admin/contacts",
    element: <Contacts />,
  },
  {
    path: "/admin/invoices",
    element: <Invoices />,
  },
  {
    path: "/admin/form",
    element: <Form />,
  },
  {
    path: "/admin/bar",
    element: <Bar />,
  },
  {
    path: "/admin/pie",
    element: <Pie />,
  },
  {
    path: "/admin/line",
    element: <Line />,
  },
  {
    path: "/admin/reviews",
    element: <Reviews />,
  },
  {
    path: "/admin/calendar",
    element: <Calendar />,
  },
  {
    path: "/admin/geography",
    element: <Geography />,
  },
  {
    path: "/admin/dash",
    element: <AdminDashboard />,
  },
  {
    path: "/blog/",
    element: <BlogHome />,
  },
  {
    path: "/blog/view",
    element: <BlogView />,
  },
  {
    path: "/blog/create",
    element: <BlogCreate />,
  },
  {

    path: "/ViewResponse",
    element: <ViewResponse/>,
  },
  {
    path: "/findFurniture",
    element: <FindFurniture />,
  },
  {
    path: "/renting",
    element: <AllRenters />,
  },
  {
    path: "/AddCustomerRequest",
    element: <AddCustomerRequest />
  },
  {
    path: "/ViewCustomerRequest",
    element: <ViewCustomerRequest />
  },
  {
    path: "/CustomerRequestDetails",
    element: <CustomerRequestDetails/>
  },

]);

export default router;

