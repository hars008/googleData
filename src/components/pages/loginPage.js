import Login from "./login";
import Registration from "./registration";
import { useContext } from "react";
import { LoginContextProvider } from "./context";
function Main() {
  const loginctx = useContext(LoginContextProvider);

  return (
    <div className="loginPage">
      <Login />

      {/* <Registration /> */}
    </div>
  );
}
export default Main;
