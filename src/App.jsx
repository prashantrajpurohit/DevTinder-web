import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { BaseUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../store/slices/loginslice";
import { useEffect } from "react";

function App() {
  const { userData } = useSelector((store) => store?.data);
  const disptach = useDispatch();
  const navigate = useNavigate();
  async function getProfile() {
    if (userData) return;
    const res = await axios.get(BaseUrl + "/profile", {
      withCredentials: true,
    });
    disptach(addUserData(res.data.data));
    navigate("/");
  }
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
