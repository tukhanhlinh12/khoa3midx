import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/product")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      });
  }, []);

  const formatNumber = (number) => {
    return Math.round(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <>
      <div className="product">
        {products.map((data) => (
          <div className="containerz" key={data.id}>
            <img src={data.thumbnail} alt="#" />
            <p>{data.name}</p>
            <p className="name">{data.category.name}</p>
            <div className="price-math">
              <h4>
                {(data.priceDetail &&
                  formatNumber(
                    data.priceDetail.price *
                      ((100 - data.priceDetail.saleRatio) / 100)
                  )) ||
                  "0"}
                đ
              </h4>
              {data.priceDetail && <del className="delete">{data.priceDetail.price}đ</del>}
              <span className="cart-icon">
                <AiOutlineShoppingCart />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
