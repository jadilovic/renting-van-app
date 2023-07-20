// ✅ Good Practice: Separating Responsibilities into Smaller Components

import products from './data/products';

const SingleResponsibilityPrinciple = () => {
	return (
		<div className="products">
			{products.map((product) => (
				<Product key={product?.id} product={product} />
			))}
		</div>
	);
};

// Product.js
// Separate component responsible for rendering the product details
const Product = ({ product }) => {
	return (
		<div className="product">
			<h3>{product?.name}</h3>
			<p>${product?.price}</p>
		</div>
	);
};

export default SingleResponsibilityPrinciple;
