import React, { useEffect, useState } from "react";
import "./DetailsInfo.css";
import CartSidebar from "./CartSidebar";
import { List } from "antd";

const DetailsInfo = (data) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [salePrice, setSalePrice] = useState(0);
  const [isSold, setIsSold] = useState(false);

  useEffect(() => {
    setSalePrice(
      data.productById.priceDetail.price *
        ((100 - data.productById.priceDetail.saleRatio) / 100)
    );
    isSoldCheck();
  }, []);

  const formatNumber = (number) => {
    return Math.round(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  //filter cac variant co cung mau
  const uniqueColors = new Set();
  const filteredVariants = data.productById.variants.filter((variant) => {
    const color = variant.color;
    if (!uniqueColors.has(color)) {
      uniqueColors.add(color);
      return true;
    }
    return false;
  });
  const uniqueSizes = new Set();
  const filteredVariantsBySize = data.productById.variants.filter((variant) => {
    const size = variant.size;
    if (!uniqueSizes.has(size)) {
      uniqueSizes.add(size);
      return true;
    }
    return false;
  });

  useEffect(() => {}, []);

  const inQuantity = () => {
    if (quantity < 999) {
      setQuantity(quantity + 1);
    }
  };
  const deQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };



  const isSoldCheck = () => {
    if ((data.productById.countInStock = 0)) {
      setIsSold(true);
    }
  };

  return (
    <div className="detailContainer">
      <h2 className="productName">{data.productById.name}</h2>
      <hr></hr>
      <div className="price">
        <h1 className="afterSale-price">{formatNumber(salePrice)}đ</h1>
        <h2 className="original-price">
          {formatNumber(data.productById.priceDetail.price)}đ
        </h2>
      </div>
      <div className="selection-color">
        <p>Màu sắc: {color}</p>
        {filteredVariants.map((variants, index) => (
          <button
            key={index}
            className="selection-input"
            onClick={() => {setColor(variants.color)}}
          >
            <img src={variants.image} className="color-img "></img>
          </button>
        ))}
      </div>
      <div className="selection-size">
        <p>Kích thước: {size}</p>
        {filteredVariantsBySize.map((variants, index) => (
          <button
            key={index}
            className="selection-input"
            onClick={() => setSize(variants.size)}
          >
            <div  className="size">{variants.size}</div>
          </button>
        ))}
      </div>
      <p style={{color: '#0158DA'}}>+ Hướng dẫn chọn size</p>
      <div className="quantity">
        <p>Số lượng</p>
        <button className="minus-quantity" onClick={deQuantity}>
          -
        </button>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min={1}
          max={100}
          value={quantity}
          onChange={(e) =>
            setQuantity(
              Math.min(999, Math.max(1, parseInt(e.target.value, 10)))
            )
          }
        ></input>
        <button className="add-quantity" onClick={inQuantity}>
          +
        </button>
        <p>Còn hàng</p>
      </div>
      <button className="addToCart-btn" type="submit">
        THÊM VÀO GIỎ
      </button>
    </div>
  );
};

export default DetailsInfo;
