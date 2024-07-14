import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/dashboard";
import "./App.css";
import StartSell from "./pages/startSell";
import OrderReport from "./pages/orderReport";
import ProductReport from "./pages/Product";
import AddProduct from "./pages/Product/addProduct";
import UpdateProduct from "./pages/Product/updateProduct";
import CategoryReport from "./pages/category";
import AddCategory from "./pages/category/addCategory";
import UpdateCategory from "./pages/category/updateCategory";
import CompanyReport from "./pages/company";
import AddCompany from "./pages/company/addCompany";
import UpdateCompany from "./pages/company/updateCompany";
import ViewOrder from "./pages/orderReport/viewOrder";
import AddSell from "./pages/startSell/addSell";

const AppLayout = () => (
  <div className="row">
    <div className="col-md-2">
      <Sidebar />
    </div>
    <div
      className="col-md-10"
      style={{ backgroundColor: "#F9F8FB", height: 720 }}
    >
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sellDashboard" element={<StartSell />} />
        <Route path="/addSell/:id" element={<AddSell />} />
        <Route path="/orderReport" element={<OrderReport />} />
        <Route path="/viewOrder/:id" element={<ViewOrder />} />
        <Route path="/productReport" element={<ProductReport />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        <Route path="/categoryReport" element={<CategoryReport />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/updateCategory/:id" element={<UpdateCategory />} />
        <Route path="/companyReport" element={<CompanyReport />} />
        <Route path="/addCompany" element={<AddCompany />} />
        <Route path="/updateCompany/:id" element={<UpdateCompany />} />
      </Routes>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<AppLayout />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
