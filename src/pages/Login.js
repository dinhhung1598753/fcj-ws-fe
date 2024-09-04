import { Button } from "antd";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = !!Cookies.get("accessToken");
    if (isAuth) navigate("/");
  }, []);

  const handleLogin = () => {
    window.location.href = process.env.REACT_APP_AUTH_URL;
  };

  return (
    <>
      <div
        style={{
          margin: "10px auto",
          width: "400px",
          height: "500px",
          textAlign: "center",
        }}
      >
        <Button type="primary" onClick={handleLogin}>
          Login / Sign up
        </Button>
      </div>
    </>
  );
};

export default Login;
