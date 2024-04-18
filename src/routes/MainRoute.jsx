import AdminAppointment from "../components/AdminAppointment/AdminAppointment";
import CloseAppointment from "../components/AdminAppointment/CloseAppointment";
import CreateAppointment from "../components/AdminAppointment/CreateAppointment";
import DeleteAppointment from "../components/AdminAppointment/DeleteAppointment";
import StartAppointment from "../components/AdminAppointment/StartAppointment";
import AdminChangePassword from "../components/AdminChangePassword/AdminChangePassword";
import AdminDashboard from "../components/AdminDashboard";
import AdminProfileSettings from "../components/AdminProfileSettings/AdminProfileSettings";
import AdminScheduleTimings from "../components/AdminScheduleTimings/AdminScheduleTimings";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Layout from "../components/Layout";
import PatientQueue from "../components/PatientQueue/PatientQueue";
import UserProfile from "../components/UserProfile/UserProfile";
import Admin from "../pages/Admin/Admin";
import Appointments from "../pages/Appointment/Appointments";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Schedule from "../pages/Schedule/Schedule";
import Signup from "../pages/Signup/Signup";

import PatientProfile from "../components/PatientProfile/PatientProfile";
import PaymentCheckout from "../components/PaymentCheckout";
import UserProfileSettings from "../components/UserProfileSettings";
const mainRouter = [
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/",
        element: <Admin></Admin>,
        children: [
          {
            path: "/admin",
            element: <AdminDashboard></AdminDashboard>,
          },
          {
            path: "admin/dashboard",
            element: <AdminDashboard></AdminDashboard>,
          },
          {
            path: "admin/admin-schedule-timings",
            element: <AdminScheduleTimings></AdminScheduleTimings>,
          },
          {
            path: "admin/admin-appointment",
            element: <AdminAppointment />,
            children: [
              {
                path: "",
                element: <CreateAppointment />,
              },
              {
                path: "create",
                element: <CreateAppointment />,
              },
              {
                path: "delete",
                element: <DeleteAppointment />,
              },
              {
                path: "start",
                element: <StartAppointment />,
              },
              {
                path: "close",
                element: <CloseAppointment />,
              },
            ],
          },
          {
            path: "admin/admin-profile-settings",
            element: <AdminProfileSettings></AdminProfileSettings>,
          },
          {
            path: "admin/admin-change-password",
            element: <AdminChangePassword></AdminChangePassword>,
          },
        ],
      },
      {
        path: "/appointment",
        element: <Appointments />,
      },
      {
        path: "/checkout/:id",
        element: <PaymentCheckout />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/schedule",
        element: <Schedule></Schedule>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/patient-profile",
        element: <PatientProfile></PatientProfile>,
      },
      {
        path: "/user-profile-settings",
        element: <UserProfileSettings></UserProfileSettings>,
      },
      {
        path: "/patient-queue",
        element: <PatientQueue></PatientQueue>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
];

export default mainRouter;
