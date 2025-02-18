import type React from "react";

interface CardProps {
	imageUrl: string;
	title: string;
	description?: string;
	children?: React.ReactNode;
}

export default function Card({
	imageUrl,
	title,
	description,
	children,
}: CardProps) {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
			<div className="relative h-1/2">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="p-6 h-1/2 overflow-hidden">
				<h3 className="text-2xl mb-2">{title}</h3>
				{description && <p className="text-gray-600 mb-4">{description}</p>}
				{children}
			</div>
		</div>
	);
}
