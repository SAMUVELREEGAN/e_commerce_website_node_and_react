import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Navbar from "./component/Navbar";
import MyLayout from "./layout/MyLayout";
// import AdminPage from "./component/AdminPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyLayout />} >
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        </Route>
       
          {/* <Route path="/admin" element={<AdminPage />} /> */}
      </Routes>
    </Router>
  );
}
