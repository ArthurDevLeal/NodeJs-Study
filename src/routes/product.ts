import express from "express";
import { Product, Products } from "../mocks/product-mocks";

const router = express.Router();

router.get("/", (req, res) => {
	const { type } = req.query;

	const productTypeList = Products.filter((item) => item.type === type);

	if (productTypeList.length > 0) {
		res.json(productTypeList);
	} else {
		res.send(Products);
	}
});

router.get("/product/:id", (req, res) => {
	const { id } = req.params;

	const currentProduct = Products.find((item) => item.id === id);

	if (currentProduct) {
		res.json(currentProduct);
	}
});

router.post("/product/create", (req, res) => {
	const { id, name, price, type }: Product = req.body;

	Products.push({ id, name, price, type });

	res.status(200).json(Products);
});

export default router;
