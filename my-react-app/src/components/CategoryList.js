import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const columns = [
    { title: "Tên danh mục", dataIndex: "title", key: "title" },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
  ];

  return (
    <div style={{ padding: 40 }}>
      <Title level={3}>📂 Danh sách danh mục</Title>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={categories}
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default CategoryList;
