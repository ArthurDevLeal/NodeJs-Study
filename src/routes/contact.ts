import express from "express";
import { readFile, writeFile } from "fs/promises";

const router = express.Router();
const listPath = "./src/data/contact.txt";

router.get("/", async (req, res) => {
	try {
		const text = await readFile(listPath, { encoding: "utf-8" });

		const contactList = text.split("\n");

		const objectList: Array<{ id: string; name: string; number: string }> = [];

		contactList.map((item) => {
			const itemArray = item.split("-");
			const object = {
				id: itemArray[0],
				name: itemArray[1],
				number: itemArray[2],
			};

			if (object.id || object.name || object.number) {
				objectList.push(object);
			}
		});
		if (objectList.length <= 0) {
			res.json({ error: "Not found any contact" });
			return;
		}
		res.status(200).json(objectList);
		return;
	} catch (error) {
		res.status(500).json("Internal server error");
	}
});

router.post("/", async (req, res) => {
	try {
		const { name, number } = req.body;

		const text = await readFile(listPath, { encoding: "utf-8" });
		const list = text.split("\n");

		const contact = `${list.length}-${name}-${number}`;

		list.push(contact);

		const newText = list.join("\n");

		await writeFile(listPath, newText);

		res.status(201).json("Contact added successfully");
		return;
	} catch (error) {
		res.status(500).json("Internal server error");
	}
});

router.delete("/", async (req, res) => {
	try {
		const { id } = req.query;
		const text = await readFile(listPath, { encoding: "utf-8" });
		const list = text.split("\n");
		const filteredList = list.filter((item) => {
			const currentItem = item.split("-");
			return currentItem[0] !== id;
		});

		if (filteredList.length === list.length) {
			res.status(404).json("Contact not found");
			return;
		}

		const newText = filteredList.join("\n");
		await writeFile(listPath, newText);

		res.status(200).json("Item removed successfully");
		return;
	} catch (error) {
		res.status(500).json("Internal server error");
	}
});

router.put("/", async (req, res) => {
	try {
		const { id, name, number } = req.body;
		const text = await readFile(listPath, { encoding: "utf-8" });
		const list = text.split("\n");

		const updatedList = list.map((item) => {
			const currentItem = item.split("-");
			if (currentItem[0] === id) {
				if (name) currentItem[1] = name;
				if (number) currentItem[2] = number;
				return currentItem.join("-");
			}
			return item;
		});
		if (updatedList.join("\n") === list.join("\n")) {
			res.status(404).json("Contact doesn't exist");
			return;
		}
		const newText = updatedList.join("\n");
		await writeFile(listPath, newText);

		res.status(200).json("Contact modified");
		return;
	} catch (error) {
		res.status(500).json("Internal server error");
	}
});

export default router;
