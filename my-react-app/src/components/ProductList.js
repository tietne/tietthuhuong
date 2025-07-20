import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table, Typography, Image } from "antd";

const { Title } = Typography;
const fetchProducts = async () => {
  const res = await axios.get("http://localhost:3000/products");
  return res.data;
};

const ProductList = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

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
  if (isLoading) return <p>Đang tải sản phẩm...</p>;
  if (isError) return <p>Lỗi tải dữ liệu sản phẩm!</p>;

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
