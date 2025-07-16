import React from "react";

const OrderList = () => {
  return (
    <div className="card">
      <h2>🧾 Danh sách đơn hàng</h2>
      <table>
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Khách hàng</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1001</td>
            <td>Nguyễn Văn A</td>
            <td>250.000đ</td>
            <td>Đang xử lý</td>
          </tr>
          <tr>
            <td>#1002</td>
            <td>Trần Thị B</td>
            <td>180.000đ</td>
            <td>Hoàn thành</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
