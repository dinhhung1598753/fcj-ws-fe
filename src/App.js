import { useEffect } from "react";
import InputHeader from "./components/inputHeader";
import ListTodo from "./components/listTodo";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuth = !!Cookies.get("accessToken");
    if (!isAuth) navigate("/login");
  });

  return (
    <>
      <div style={{ margin: "10px auto", width: "400px", textAlign: "center" }}>
        <InputHeader />
        <ListTodo />
      </div>
    </>
  );
};

export default App;
