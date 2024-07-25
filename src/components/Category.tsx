import { useEffect, useState } from "react";
import Product from "./Product";

import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProduct } from "../api/productAPI";
import { v4 as uuidv4 } from 'uuid';

const Category: React.FC<{ name: string }> = (props) => {
	const [listProduct, setListProduct] = useState([]);
	useEffect(() => {
		// console.log(import.meta.env)
		getProductByType();
	}, []);

	const getProductByType = async () => {
		try {
			const response = await getProduct(props.name);
			setListProduct(response?.data.content);
			// console.log(response.data)
		} catch (error) {
			console.log(error);
		}
	};
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
				}}
				modules={[Pagination]}
			>
				{listProduct.map((item:any) => (
					<SwiperSlide className="border" key={uuidv4()}>
						<Product idItem={item.id}/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Category;
