import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/layout";
import Main from "./components/pages/loginPage";
import Det from "./components/pages/detailpage";
import About from "./components/pages/about";
// import Registration from "./components/pages/registration";
import Mainpage from "./components/pages/mainpage";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/home" element={<Mainpage />} />
          <Route path="/details" element={<Det />} />
          <Route path="/about" element={<About />}/>
          <Route path="/loginPage" element={<Main />} />
          {/* <Route path="/Register" element={<Registration />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
