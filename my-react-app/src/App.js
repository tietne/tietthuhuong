import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import UserList from "./components/UserList";
import BrandList from "./components/BrandList";
import OrderList from "./components/OrderList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Trang Quản Lý</h1>

        <nav>
          <ul className="menu">
            <li>
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li>
              <Link to="/categories">Danh mục</Link>
            </li>
            <li>
              <Link to="/users">Người dùng</Link>
            </li>
            <li>
              <Link to="/brands">Thương hiệu</Link>
            </li>
            <li>
              <Link to="/orders">Đơn hàng</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/brands" element={<BrandList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route
            path="*"
            element={<p>Chọn một mục từ menu để xem nội dung.</p>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
