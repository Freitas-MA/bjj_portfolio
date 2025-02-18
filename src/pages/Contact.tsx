import { motion } from "framer-motion";
import {
	Facebook,
	Instagram,
	Youtube,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import type { Data } from "../types/data";

interface ContactProps {
	data: Data["pages"]["contact"];
}

export default function Contact({ data }: ContactProps) {
	return (
		<div className="min-h-screen pt-[7rem]">
			<div className="container">
				<motion.h1
					className="text-5xl text-center mb-16"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					Contato
				</motion.h1>

				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
					<motion.div
						className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						<div>
              <h2 className="text-2xl mb-6">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>{data.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>{data.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>{data.email}</span>
                </div>
              </div>
            </div>

						<div className="mb-8">
							<h3 className="text-xl mb-4">Redes Sociais</h3>
							<div className="flex space-x-4">
								<a
									href={data.social.facebook}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Facebook className="w-6 h-6" />
								</a>
								<a
									href={data.social.instagram}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Instagram className="w-6 h-6" />
								</a>
								<a
									href={data.social.youtube}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Youtube className="w-6 h-6" />
								</a>
							</div>
						</div>
					</motion.div>

					<motion.div
						className="bg-white rounded-lg shadow-lg p-8"
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4 }}
					>
						<h2 className="text-2xl mb-6">Envie uma Mensagem</h2>

						<form className="space-y-4">
							<div>
								<label htmlFor="name" className="block mb-2">
									Nome
								</label>
								<input
									type="text"
									id="name"
									className="w-full px-4 py-2 border rounded-lg"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-2 border rounded-lg"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block mb-2">
									Mensagem
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full px-4 py-2 border rounded-lg"
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
							>
								Enviar Mensagem
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
