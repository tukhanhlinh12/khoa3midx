import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, InputNumber, Select } from "antd";
import { useToast } from "@chakra-ui/react";
import { createProduct, getProductById, updateProduct } from "../../services";

const EditProduct = (id) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const toast = useToast();

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const getProduct = async () => {
    try {
      const product = await getProductById(id.id);
      form.setFieldValue("name", product.data.product.name);
      form.setFieldValue("price", product.data.product.priceDetail.price);
      form.setFieldValue(
        "saleRatio",
        product.data.product.priceDetail.saleRatio
      );
      form.setFieldValue("category", product.data.product.priceDetail.category);
      form.setFieldValue(
        "material",
        product.data.product.detailProduct.material
      );
      form.setFieldValue("form", product.data.product.detailProduct.form);
      form.setFieldValue("color", product.data.product.detailProduct.color);
      form.setFieldValue("design", product.data.product.detailProduct.design);
      form.setFieldValue("image", product.data.product.detailProduct.image);
      form.setFieldValue("thumbnail", product.data.product.thumbnail);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = async (values) => {
    const formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("price", values.priceDetail.price);
    formdata.append("saleRatio", values.priceDetail.saleRatio);
    formdata.append("category", values.priceDetail.category);
    formdata.append("material", values.detailProduct.material);
    formdata.append("form", values.detailProduct.form);
    formdata.append("color", values.detailProduct.color);
    formdata.append("design", values.detailProduct.design);
    formdata.append("image", values.detailProduct.image);
    formdata.append("thumnail", values.thumbnail);
    // formdata.append("countInStock", values.countInStock)
    try {
      const result = await updateProduct(id, formdata);

      toast({
        status: "success",
        title: "Update sản phẩm thành công",
        position: "top",
      });
    } catch (error) {
      console.log(error);
      toast({
        status: "error",
        title: "Update sản phẩm thất bại",
        position: "top",
      });
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Update product"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={700}
      >
        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: "small",
          }}
          size="small"
          style={{
            maxWidth: 800,
          }}
          autoComplete="off"
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please fill the blank!" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item label="Sale ratio" name="saleRatio">
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select one!" }]}
          >
            <Select>
              <Select.Option value="65465abf81225ec455f35aba">
                Áo Thun
              </Select.Option>
              <Select.Option value="65465ae281225ec455f35abc">
                Baby Tee
              </Select.Option>
              <Select.Option value="65465af581225ec455f35abe">
                Áo Polo
              </Select.Option>
              <Select.Option value="65465b1e81225ec455f35ac0">
                Áo sơ mi
              </Select.Option>
              <Select.Option value="65465b6f81225ec455f35ac2">
                Áo khoác
              </Select.Option>
              <Select.Option value="65465ba081225ec455f35ac4">
                Hoodie
              </Select.Option>
              <Select.Option value="65465bc081225ec455f35ac6">
                Quần
              </Select.Option>
              <Select.Option value="65465be081225ec455f35ac8">
                Quần nữ
              </Select.Option>
              <Select.Option value="65465c0081225ec455f35aca">
                Phụ kiện
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Material" name="material">
            <Input />
          </Form.Item>
          <Form.Item label="Form" name="form">
            <Input />
          </Form.Item>
          <Form.Item label="Color" name="color">
            <Input />
          </Form.Item>
          <Form.Item label="Design" name="design">
            <Input />
          </Form.Item>
          <Form.Item label="Detail image" name="image">
            <Input />
          </Form.Item>
          <Form.Item
            label="Thumbnail"
            name="thumbnail"
            rules={[{ required: true, message: "Please fill the blank!" }]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item label="Count in stock" name="countInStock" rules={[{ required: true, message: 'Please fill the blank!' }]}>
        <Input />
      </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};
export default EditProduct;
