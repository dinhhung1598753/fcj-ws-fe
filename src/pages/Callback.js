import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("hehehe: ", searchParams);
    // const query = new URLSearchParams(search);
    const accessToken = searchParams.get("access_token")?.trim();
    console.log("accessToken: ", accessToken);

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
