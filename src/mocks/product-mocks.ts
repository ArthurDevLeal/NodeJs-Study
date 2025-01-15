export type Product = {
	type: "RGB" | "NoRGB";
	id: string;
	name: string;
	price: number;
};
export const Products: Array<Product> = [
	{ id: "1", type: "RGB", name: "Teclado RGB", price: 85.5 },
	{ id: "2", type: "RGB", name: "Mouse RGB", price: 45.5 },
	{ id: "3", type: "RGB", name: "Cadeira RGB", price: 335.5 },
	{ id: "4", type: "RGB", name: "Mao RGB", price: 8998765.5 },
	{ id: "5", type: "NoRGB", name: "Teclado", price: 85.5 },
	{ id: "6", type: "NoRGB", name: "Mouse", price: 45.5 },
	{ id: "7", type: "NoRGB", name: "Cadeira", price: 335.5 },
	{ id: "8", type: "NoRGB", name: "Mao", price: 8998765.5 },
];
