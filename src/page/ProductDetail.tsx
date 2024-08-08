import { Button, Carousel } from 'antd';

function ProductDetail() {
    // useEffect(() => {

    //     return cleanUp = () => {

    //     }
    // }, []);
    return (
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-6 py-12 md:py-20 max-w-max mx-auto">
            <div className="grid gap-6 border">
                {/* <Carousel arrows className="w-full rounded-lg">
					<img
						src="/placeholder.svg"
						alt="Product Image"
						className="w-full aspect-square object-cover"
					/>
					<img
						src="/placeholder.svg"
						alt="Product Image"
						className="w-full aspect-square object-cover"
					/>
					<img
						src="/placeholder.svg"
						alt="Product Image"
						className="w-full aspect-square object-cover"
					/>
				</Carousel> */}
            </div>
            <div className="grid gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Acme Wireless Headphones
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Experience the ultimate in audio quality and comfort
                        with our Acme Wireless Headphones. Crafted with premium
                        materials and advanced technology, these headphones
                        deliver an immersive listening experience.
                    </p>
                </div>
                <div className="grid gap-4">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Product Details
                        </h2>
                        <ul className="mt-2 space-y-2 text-muted-foreground">
                            <li>
                                <span className="font-medium">
                                    Connectivity:
                                </span>{' '}
                                Bluetooth 5.0
                            </li>
                            <li>
                                <span className="font-medium">
                                    Battery Life:
                                </span>{' '}
                                Up to 20 hours
                            </li>
                            <li>
                                <span className="font-medium">Drivers:</span>{' '}
                                40mm dynamic drivers
                            </li>
                            <li>
                                <span className="font-medium">
                                    Noise Cancellation:
                                </span>{' '}
                                Advanced active noise cancellation
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Key Features</h2>
                        <ul className="mt-2 space-y-2 text-muted-foreground">
                            <li className="w-5 h-5 mr-2 inline-block text-primary">
                                Immersive sound with 40mm dynamic drivers
                            </li>
                            <li className="w-5 h-5 mr-2 inline-block text-primary">
                                Advanced active noise cancellation
                            </li>
                            <li className="w-5 h-5 mr-2 inline-block text-primary">
                                Up to 20 hours of battery life
                            </li>
                            <li className="w-5 h-5 mr-2 inline-block text-primary">
                                Comfortable and adjustable design
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold">$99.99</div>
                        <div className="flex gap-2">
                            <Button>Add to Cart</Button>
                            <Button>Buy Now</Button>
                        </div>
                        {/* <div className="flex items-center gap-2">
								<span className="font-medium">Color:</span>
								<RadioGroup
									value={selectedColor}
									onValueChange={setSelectedColor}
									className="flex gap-2"
								>
									<RadioGroupItem
										value="black"
										id="black"
										className="peer sr-only"
									/>
									<Label
										htmlFor="black"
										className="w-8 h-8 bg-black rounded-full ring-1 ring-transparent peer-checked:ring-primary cursor-pointer"
									/>
									<RadioGroupItem
										value="white"
										id="white"
										className="peer sr-only"
									/>
									<Label
										htmlFor="white"
										className="w-8 h-8 bg-white rounded-full ring-1 ring-transparent peer-checked:ring-primary cursor-pointer"
									/>
									<RadioGroupItem
										value="blue"
										id="blue"
										className="peer sr-only"
									/>
									<Label
										htmlFor="blue"
										className="w-8 h-8 bg-blue-500 rounded-full ring-1 ring-transparent peer-checked:ring-primary cursor-pointer"
									/>
								</RadioGroup>
							</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
