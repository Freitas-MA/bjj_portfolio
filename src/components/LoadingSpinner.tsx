import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function LoadingSpinner() {
	return (
		<motion.div
			className="fixed inset-0 flex items-center justify-center bg-background"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Loader2 className="w-[148px] h-[148px] animate-spin text-primary" />
		</motion.div>
	);
}
