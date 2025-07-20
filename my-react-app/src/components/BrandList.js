import React, { useEffect, useState } from "react";
import { Table, Typography, Image } from "antd";

const { Title } = Typography;

const BrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const columns = [
    { title: "Tên thương hiệu", dataIndex: "name", key: "name" },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logo) => <Image src={logo} width={60} />,
    },
  ];

  return (
    <div style={{ padding: 40 }}>
      <Title level={3}>🏷️ Danh sách thương hiệu</Title>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={brands}
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default BrandList;
