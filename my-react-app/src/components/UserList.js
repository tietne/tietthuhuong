import React, { useEffect, useState } from "react";
import { Table, Typography, Tag } from "antd";

const { Title } = Typography;

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const columns = [
    { title: "Tên người dùng", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === "admin" ? "volcano" : "blue"}>
          {role.toUpperCase()}
        </Tag>
      ),
    },
  ];

  return (
    <div style={{ padding: 40 }}>
      <Title level={3}>👤 Danh sách người dùng</Title>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={users}
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default UserList;
