import productImage from "../image/product-item1.jpg"; // Adjust the path if needed

const Product: React.FC<{ idItem: string }> = (props) => {
	return (
		<div className="group flex flex-col relative w-full mx-auto">
			<div>
				<img src={productImage} />
			</div>
			<div className="flex flex-row justify-between">
				<span className="uppercase">iphone X</span>
				<span>1000000</span>
			</div>
			<button className="w-4/5 h-[50px] flex justify-center bg-slate-50 opacity-90 text-center absolute bottom-[20px] invisible uppercase group-hover:visible">
				add to card
			</button>
		</div>
	);
};

export default Product;
