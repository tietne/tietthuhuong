import React from "react";

const UserList = () => {
  return (
    <div className="card">
      <h2>👤 Danh sách người dùng</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>a@gmail.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>b@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
