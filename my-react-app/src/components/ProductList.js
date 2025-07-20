import React, { useEffect, useState } from "react";
import { Table, Typography, Image } from "antd";

const { Title } = Typography;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const columns = [
    { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()}đ`,
    },
    {
      title: "Hình ảnh",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (img) => <Image src={img} width={60} />,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
  ];

  return (
    <div style={{ padding: 40 }}>
      <Title level={3}>🛍️ Danh sách sản phẩm</Title>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={products}
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ProductList;
