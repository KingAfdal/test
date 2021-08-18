import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
const Product = ({ product }) => {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme.isLight ? "light" : "darker";
  return (
    <div>
      <img src={product.image} alt="Sony Camera" />
      <div className={themeClass + " details flex flex-column"}>
        <p className="flex flex-row">
          <span className="product-name">{product.product}</span>
          <span className="product-price">${product.price}</span>
        </p>
        <p className="product-desc text-secondary">{product.dimention}</p>
        <p className="flex flex-row">
          <span className="product-reviews">colours({product.colours})</span>
          <span className="product-material">material({product.material})</span>

        </p>
      </div>
    </div>
  );
};

export default Product;
