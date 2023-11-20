import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  useEffect(() => {
    axios
      .get("http://localhost:8000/category")
      .then((response) => {
        setCategories(response.data.categories);
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

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <section className="shop-content">
        <div className="sidebar">
          <h1>TeeLab</h1>
          {categories &&
            categories.map((category) => (
              <div
                key={category.id}
                className={category.name === selectedCategory ? "active" : ""}
                onClick={() => handleCategoryClick(category.name)}
              >
                <li>{category.name}</li>
              </div>
            ))}
        </div>
        <div className="product">
          {products
            .filter(
              (data) =>
                !selectedCategory || data.category.name === selectedCategory
            )
            .map((data) => (
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
      </section>
    </>
  );
};

export default Shop;