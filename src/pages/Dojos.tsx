import { motion } from "framer-motion";
import type { Data } from "../types/data";
import Card from "../components/Card";

interface DojosProps {
	data: Data["pages"]["dojos"];
}

export default function Dojos({ data }: DojosProps) {
	return (
		<div className="min-h-screen py-24">
			<div className="container">
				<motion.h1
					className="text-5xl text-center mb-16"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					Nossas Unidades
				</motion.h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{data.dojos.map((dojo, index) => (
						<motion.div
							key={dojo.id}
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: index * 0.2 }}
						>
							<Card
								imageUrl={dojo.images[0]}
								title={dojo.name}
								description={dojo.description}
							>
								<p className="font-semibold mb-4">{dojo.address}</p>
								<a
									href={dojo.mapLink}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
								>
									Ver no Mapa
								</a>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
