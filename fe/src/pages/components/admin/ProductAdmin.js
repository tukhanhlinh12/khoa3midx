import { Button, Pagination } from "antd"
import { Link } from "react-router-dom"
import { Space, Table, Tag, Popconfirm, Badge } from 'antd';
import { useEffect, useState } from "react";
import { deleteUser,deleteProduct,getProductById,getProduct } from "../../services";
// import { CLOUDINARY_URL } from "../config";
import { useToast } from "@chakra-ui/react";
import CreateProduct from "./CreateProduct"
import EditProduct from "./EditProduct";

const ManageProduct = () => {
    const [pageSize, setPageSize] = useState(3)
    const [pageIndex, setPageIndex] = useState(1)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const toast = useToast()

    const transformData = (data) => {
      return data.map((item) => {
        return {
          ...item,
          key: item._id,
        };
      });
    };
  
    const transformedProducts = transformData(products);
  
    const getPagingProduct = async () => {
        try {
            const result = await getProduct(pageSize, pageIndex)
            setProducts(result.data.products)
            setCount(result.data.count)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProducts = async (id) => {
        try {
            const result = await deleteProduct(id)
            toast({
                status: "success",
                title: "Xoá sản phẩm thành công",
                position: 'top'
            })
            setProducts(products.filter(item => item._id != id))
        } catch (error) {
            toast({
                status: "error",
                title: "Delete product failed",
                position: 'top'
            })
        }
    }

    useEffect(() => {
        getPagingProduct()
    }, [pageSize, pageIndex])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
          },
          {
              title: 'Thumbnail',
              dataIndex: 'thumbnail',
              key: 'thumbnail',
              render: (value) => (
                  <>
                      <img width={40} height={40} src={value} onError={(e) => e.target.src = "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"} />
                  </>
              )
          },
        {
            title: 'Price',
            dataIndex: 'priceDetail',
            key: 'priceDetail',
            render:(_,record)=><a>{record.priceDetail.price}đ</a>
        },
        {
          title: 'Sale Ratio',
          dataIndex: 'priceDetail',
          key: 'priceDetail',
          render:(_,record)=><a>{record.priceDetail.saleRatio}%</a>
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render:(_,record)=><a>{record.category.name}</a>
        },
        {
            title: 'Quantity',
            key: 'countInStock',
            dataIndex: 'countInStock',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {/* {console.log(record)} */}
                    <EditProduct id={record._id}/>
                    <Popconfirm style={{color: "red"}} title="Delete product" description="Are you sure to delete this product?" onConfirm={() => { deleteProducts(record._id) }}><a style={{color: "red"}} >Delete</a></Popconfirm>
                </Space>
            ),
        },
    ];

    const expandedRowRender = (record) => {
      const columns = [
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (value) => (
            <>
                <img width={40} height={40} src={value} onError={(e) => e.target.src = "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"} />
            </>
        )
        },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
        },
        {
          title: 'Size',
          dataIndex: 'size',
          key: 'size',
        },
        {
          title: 'Quantity',
          dataIndex: 'countInStock',
          key: 'countInStock'
          
        },
        {
          title: 'Action',
          dataIndex: 'operation',
          key: 'operation',
          render: () => (
            <Space size="middle">
              <a>Edit</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      return <Table columns={columns} dataSource={record.variants} pagination={false} />;
    };
    return (
        <>
            <CreateProduct/>
            <Table columns={columns} dataSource={transformedProducts} pagination={false} expandable={{expandedRowRender,defaultExpandedRowKeys:[]}} style={{ marginTop: '10px' }} />
            <Pagination current={pageIndex} pageSize={pageSize} total={count} style={{ marginTop: '10px'}} onChange={(page, pageSize) => { setPageIndex(page); setPageSize(pageSize) }} showSizeChanger pageSizeOptions={[3, 5, 8]} />
        </>

    )
}

export default ManageProduct