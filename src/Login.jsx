import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../store/slices/loginslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userData } = useSelector((store) => store?.data);

  const navigate = useNavigate();
  const disptach = useDispatch();
  const [payload, setPayload] = useState({ email: "", password: "" });
  async function handleLogin() {
    const res = await axios.post(BaseUrl + "/login", payload, {
      withCredentials: true,
    });
    disptach(addUserData(res.data.data));
    navigate("/");
  }
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
      <div className="justify-center w-[35vw] mx-auto my-52">
        <div>
          <p className="text-center text-2xl font-semibold">
            Please Login to explore DevTinder!!
          </p>
        </div>
        <div className="card-body gap-5">
          <div>
            {payload.email}

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                onChange={(e) =>
                  setPayload((pre) => ({ ...pre, email: e.target.value }))
                }
              />
            </label>
          </div>

          <div>
            {payload.password}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                onChange={(e) =>
                  setPayload((pre) => ({ ...pre, password: e.target.value }))
                }
              />
            </label>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary w-full" onClick={handleLogin}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
