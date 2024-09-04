import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Callback = () => {
  const navigate = useNavigate();
  let { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const accessToken = query.get("access_token")?.trim();

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
