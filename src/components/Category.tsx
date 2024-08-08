import { useEffect, useState } from "react";
// import Product from "./Product";

import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProduct } from "../api/productAPI";
import { v4 as uuidv4 } from "uuid";
import { ProductRoot } from "../interface/Interfce";
import Product from "./Product";

const Category: React.FC<{ name: string }> = (props) => {
	const [listProduct, setListProduct] = useState<any[]>([]);
	useEffect(() => {
		// console.log(import.meta.env)
		getProductByType();
	}, []);

	const getProductByType = async () => {
		try {
			const response = await getProduct(props.name);
			let lstProduct = response.data.content;
			let newListProduct = transFormProduct(lstProduct);

			setListProduct(newListProduct);
			// console.log(response.data)
		} catch (error) {
			console.log(error);
		}
	};

	function transFormProduct(product: ProductRoot[]): any[] {
		return product.map((item) => ({
			...item,
			minPrice:
				item.productDetails.length > 0
					? Math.min(
							...item.productDetails.map(
								(details) => details.price
							)
						)
					: 0,
		}));
	}
	return (
		<div className="w-full my-8">
			<div className="flex flex-row justify-between mb-4">
				<div className="text-4xl ml-4 pb-4 uppercase">{props.name}</div>
				<a href="#" className="pt-4 mr-8 underline uppercase">
					go to shop
				</a>
			</div>

			<Swiper
				slidesPerView={4}
				spaceBetween={40}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				modules={[Pagination]}
			>
				{listProduct.map((item: any) => (
					<SwiperSlide key={uuidv4()}>
						<Product ID={item.id} price={item.minPrice}/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Category;
