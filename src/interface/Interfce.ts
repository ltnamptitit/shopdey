export interface ProductDetail {
	id: string;
	name: string;
	description: string;
	quantity: number;
	color: string;
	memory: number;
	price: number;
	sale: number;
}

export interface ProductRoot {
    id: string;
    name: string;
    description: string;
    image: string;
    type: string;
    productDetails: ProductDetail[];
}

export interface ProductTrans {
    id: string;
    name: string;
    description: string;
    image: string;
    type: string;
    minPrice: number;
    productDetails: ProductDetail[];
}