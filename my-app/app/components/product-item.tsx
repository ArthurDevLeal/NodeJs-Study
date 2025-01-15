import React from "react";
import { Product } from "../page";

export default function ProductItem({ id, name, price, type }: Product) {
	return (
		<div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
			{/* Card Header - ID and Type Badge */}
			<div className="flex items-center justify-between p-4">
				<span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
					#{id}
				</span>
				<span className="rounded-md bg-blue-500 px-3 py-1 text-sm font-medium text-white">
					{type}
				</span>
			</div>

			{/* Main Content */}
			<div className="border-t border-gray-100 px-6 py-4">
				<h3 className="mb-4 text-xl font-bold text-gray-800">{name}</h3>

				{/* Price Section */}
				<div className="mb-4">
					<div className="flex items-center gap-2">
						<span className="text-lg font-semibold text-blue-600">
							${Number(price).toLocaleString()}
						</span>
					</div>
				</div>

				{/* Product Details */}
				<div className="space-y-2 text-sm text-gray-600">
					<div className="flex items-center justify-between">
						<span>Product ID:</span>
						<span className="font-medium">{id}</span>
					</div>
					<div className="flex items-center justify-between">
						<span>Category:</span>
						<span className="font-medium">{type}</span>
					</div>
				</div>
			</div>

			{/* Card Footer */}
			<div className="bg-gray-50 px-6 py-4">
				<button
					onClick={() => console.log(`View product ${id}`)}
					className="w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					View Details
				</button>
			</div>
		</div>
	);
}
