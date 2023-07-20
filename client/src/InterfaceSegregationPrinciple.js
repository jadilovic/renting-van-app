// ✅ Good: reducing unnecessary dependencies and making
// the codebase more maintainable and scalable.
import products from './data/products';

const ProductThumbnailURL = ({ imageURL, alt }) => {
	return (
		<div>
			<img src={imageURL} alt={alt} />
		</div>
	);
};

// ✅ Good Practice
const Product = ({ product }) => {
	return (
		<div>
			<ProductThumbnailURL imageURL={product.imageURL} alt={product.name} />
			<h4>{product?.name}</h4>
			<p>{product?.description}</p>
			<p>{product?.price}</p>
		</div>
	);
};

const InterfaceSegregationPrinciple = () => {
	class Car {
		name;
		brand;
		year;
		constructor(name, brand, year) {
			this.name = name;
			this.brand = brand;
			this.year = year;
		}
	}

	class Boy extends Car {
		walking() {
			console.log('Boy is walking');
		}
	}

	const me = new Boy();

	console.log(me);

	const honda = new Car('Civic', 'Honda', 2000);
	console.log(honda);

	const fruits = ['apple', 'kiwi', 'orange', 'banana', 'grape'];
	var obj = {
		start: 3,
		calc: function (num) {
			console.log(num + 2 - this.start);
		},
	};

	obj['hello'] = 'bob';

	console.log(obj);

	obj.calc(4);

	const newFruits = fruits
		.map((fruit) => fruit.toUpperCase())
		.filter((fruit) => fruit.length > 5);
	console.log(newFruits);
	console.log(fruits);

	return (
		<div>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
};

export default InterfaceSegregationPrinciple;
