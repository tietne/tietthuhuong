import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const columns = [
    { title: "ID Đơn hàng", dataIndex: "id", key: "id" },
    { title: "Khách hàng", dataIndex: "customerName", key: "customerName" },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (total) => `${total.toLocaleString()}đ`,
    },
    { title: "Ngày tạo", dataIndex: "createdAt", key: "createdAt" },
  ];

  return (
    <div style={{ padding: 40 }}>
      <Title level={3}>📦 Danh sách đơn hàng</Title>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={orders}
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default OrderList;
