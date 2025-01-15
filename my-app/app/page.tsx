"use client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";

export type Product = {
	type: "RGB" | "NoRGB";
	id: string;
	name: string;
	price: number;
};

export default function Page() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isChecked, setIsChecked] = useState(false);
	const [value, setValue] = useState("");
	const [price, setPrice] = useState(0);

	const createProduct = async ({ id, name, price, type }: Product) => {
		try {
			const req = await axios.post(
				"https://sturdy-guide-x54vv5x6x79fvxww-3000.app.github.dev/products/product/create",
				{ id, name, price, type }
			);
			setProducts(req.data);
		} catch (error) {
			alert(error);
		}
	};

	const handleClick = () => {
		if (value.trim() !== "" && price !== 0) {
			createProduct({
				id: `${products.length + 1}`,
				name: value,
				price,
				type: isChecked ? "RGB" : "NoRGB",
			});
		}
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response: AxiosResponse<Product[]> = await axios.get(
					"https://sturdy-guide-x54vv5x6x79fvxww-3000.app.github.dev/products",
					{}
				);
				setProducts(response.data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="flex flex-col gap-8 p-4">
			<h2 className="text-2xl font-semibold mb-4">Create a Product</h2>

			{/* Product Type (RGB or NoRGB) */}
			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					id="rgb-checkbox"
					checked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
				/>
				<label htmlFor="rgb-checkbox" className="text-lg">
					RGB
				</label>
			</div>

			{/* Product Name */}
			<input
				type="text"
				placeholder="Enter Product Name"
				className="border-2 p-2 rounded-md"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>

			{/* Product Price */}
			<input
				type="number"
				placeholder="Enter Product Price"
				className="border-2 p-2 rounded-md"
				value={price}
				onChange={(e) => setPrice(Number(e.target.value))}
			/>

			{/* Submit Button */}
			<button
				onClick={handleClick}
				className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
				disabled={value.trim() === "" || price === 0}
			>
				Create Product
			</button>

			{/* Displaying Product List */}
			<div className="grid grid-cols-4 gap-4 place-items-center mt-8">
				{products.map((item, index) => (
					<ProductItem key={index} {...item} />
				))}
			</div>
		</div>
	);
}
