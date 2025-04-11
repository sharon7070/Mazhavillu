import React from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { Layout,AuthLayout } from "./layout";

/* ***Layouts**** */
const Home = React.lazy(() => import("./views/home/Home"));
const Login = React.lazy(() => import("./views/auth/Login"));

export default function Router() {
  const routes = useRoutes([
    {
      path: "login",
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    // {
    //   path: 'register',
    //   element: <Register />,
    // },
    {
      path: "/",
      element: (
        <PrivateRoute isAdmin={true}>
          <Layout />
        </PrivateRoute>
      ),
      children: [
        { path: "", element: <Home />, index: true },
        // { path: "user", element: <UserPage /> },
      ],
    },
    // {
    //   path: 'admin/login',
    //   element: <AdminLogin />,
    // },
    // {
    //   path: 'admin/register',
    //   element: <AdminRegister />,
    // },
    // {
    //   path: '/admin',
    //   element: <PrivateRoute isAdmin={true}><DashboardLayout /></PrivateRoute>,
    //   children: [
    //     { path: '', element: <DashboardAppPage />, index: true },
    //     { path: 'user', element: <UserPage /> },
    //     { path: 'role', element: <RolePage /> },
    //     { path: 'menu', element: <Menu /> },
    //     { path: 'permission', element: <MenuPermission /> },
    //     { path: 'branch', element: <Branch /> },
    //     { path: 'profile', element: <Profile /> },
    //     { path: 'userbranch', element: <UserBranch /> },
    //     { path: 'company', element: <Company /> },
    //     { path: 'userlog', element: <UserLog /> },
    //     { path: 'branchtype', element: <BranchType /> },
    //     { path: 'unauthorize', element: <UnAuthorize /> },
    //     { path: 'customer', element: <CustomerList /> },
    //     { path: '*', element: <Page404 /> },
    //   ],
    // },
  ]);

  return routes;
}
