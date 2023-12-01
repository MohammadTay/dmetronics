
import './ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = ({ products, index }) => {
  return (

    <div className="product-list">
      {products.map(product => (
        <Link to={`/${index}/${product._id}`} key={product._id}>
          <div className="product-item">
            <img src={product?.Image} alt={product?.Name} />
            <h3>{product.Name}</h3>
            <p>{product.Description}</p>
            <p className="price">${product?.Price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
