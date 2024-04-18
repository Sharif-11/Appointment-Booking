import axios from "axios";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import UserContext from "./Contexts/UserContext";
import mainRouter from "./routes/MainRoute";
import { rootUrl } from "./utils/rootUrl";

function App() {
  const router = createBrowserRouter(mainRouter);
  const [user, setUser] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState(null);
  useEffect(() => {
    axios
      .get(rootUrl + "user/login", { withCredentials: true })
      .then(({ data }) => {
        console.log(data);
        if (data.status) {
          setUser(data.data);
          localStorage.setItem("token", data.data.token);
        }
      })
      .catch(() => setUser(null));
    axios
      .get(rootUrl + "doctor-info", { withCredentials: true })
      .then(({ data }) => {
        if (data.status) {
          setDoctorInfo(data.data);
        }
      })
      .catch(() => setDoctorInfo(null));
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, doctorInfo }}>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </UserContext.Provider>
  );
}

export default App;
