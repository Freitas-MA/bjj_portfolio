import { motion } from "framer-motion";
import type { Data } from "../types/data";
import Card from "../components/Card";

interface InstructorsProps {
	data: Data["pages"]["instructors"];
}

export default function Instructors({ data }: InstructorsProps) {
	return (
		<div className="min-h-screen py-24">
			<div className="container">
				<motion.h1
					className="text-5xl text-center mb-16"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					Nossos Instrutores
				</motion.h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{data.instructors.map((instructor, index) => (
						<motion.div
							key={instructor.id}
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: index * 0.2 }}
						>
							<Card
								imageUrl={instructor.image}
								title={instructor.name}
								description={instructor.bio}
							>
								<p className="font-semibold">
									Especialidade: {instructor.specialty}
								</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
