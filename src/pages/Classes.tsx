import { motion } from "framer-motion";
import type { Data } from "../types/data";
import Card from "../components/Card";

interface ClassesProps {
	data: Data["pages"]["classes"];
}

export default function Classes({ data }: ClassesProps) {
	return (
		<div className="min-h-screen py-24">
			<div className="container">
				<motion.h1
					className="text-5xl text-center mb-16"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					Nossas Aulas
				</motion.h1>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{data.classes.map((classItem, index) => (
						<motion.div
							key={classItem.id}
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: index * 0.2 }}
						>
							<Card
								imageUrl={classItem.image}
								title={classItem.name}
								description={classItem.description}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
