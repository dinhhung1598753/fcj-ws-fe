import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");

    if (accessToken) {
      Cookies.set("accessToken", accessToken);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default Callback;
