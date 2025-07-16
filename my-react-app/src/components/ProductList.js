import React from "react";

const ProductList = () => {
  return (
    <div className="card">
      <h2>📦 Danh sách sản phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chậu hoa hồng</td>
            <td>120.000đ</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cây sen đá</td>
            <td>75.000đ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
