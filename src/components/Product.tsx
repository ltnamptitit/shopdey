import { Card } from "antd";
import productImage from "../image/product-item1.jpg"; // Adjust the path if needed
import { Link } from "react-router-dom";

const Product: React.FC<{ ID: string; price: string }> = (props) => {
	return (
		<Card
			hoverable
			cover={<img className="p-4" src={productImage} />}
			className="group"
		>
			<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
				<Link to={`/product/${props.ID}`}>
					<button className="text-sm font-medium h-11 rounded-md px-8 bg-slate-700 hover:bg-slate-600 text-white">
						Buy Now
					</button>
				</Link>
			</div>
			<div>Nam</div>
			<div>{props.price}</div>
		</Card>
	);
};

export default Product;
