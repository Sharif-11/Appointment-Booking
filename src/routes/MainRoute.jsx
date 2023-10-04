import About from '../pages/About/About';
import Admin from '../pages/Admin/Admin';
import Layout from '../components/Layout';
import Appointment from '../pages/Appointment/Appointment';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Contact from '../components/Contact';
import PatientQueue from '../components/PatientQueue/PatientQueue';
import ErrorPage from '../components/ErrorPage/ErrorPage'
import AdminDashboard from '../components/AdminDashboard';
import AdminScheduleTimings from '../components/AdminScheduleTimings/AdminScheduleTimings';
import AdminProfileSettings from '../components/AdminProfileSettings/AdminProfileSettings';
import AdminChangePassword from '../components/AdminChangePassword/AdminChangePassword';
import Schedule from '../pages/Schedule/Schedule';

const mainRouter = [
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/admin",
                element: <Admin></Admin>,
                children: [
                    {
                        path: "",
                        element: <AdminDashboard></AdminDashboard>
                    },
                    {
                        path: "admin/dashboard",
                        element: <AdminDashboard></AdminDashboard>
                    },
                    {
                        path: "admin/admin-schedule-timings",
                        element: <AdminScheduleTimings></AdminScheduleTimings>
                    },
                    {
                        path: "admin/admin-profile-settings",
                        element: <AdminProfileSettings></AdminProfileSettings>
                    },
                    {
                        path: "admin/admin-change-password",
                        element: <AdminChangePassword></AdminChangePassword>
                    }
                ]
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/schedule",
                element: <Schedule></Schedule>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/patient-queue",
                element: <PatientQueue></PatientQueue>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
];


export default mainRouter;