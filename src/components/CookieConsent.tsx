import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function setCookie(name: string, value: string, days: number) {
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name: string) {
	return document.cookie.split("; ").reduce((r, v) => {
		const parts = v.split("=");
		return parts[0] === name ? decodeURIComponent(parts[1]) : r;
	}, "");
}

export default function CookieConsent() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const consent = getCookie("cookieConsent");
		if (!consent) {
			setVisible(true);
		}
	}, []);

	const handleConsent = (consent: "accepted" | "rejected") => {
		setCookie("cookieConsent", consent, 365);
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50">
			<div className="container flex flex-col md:flex-row items-center justify-between">
				<p className="mb-2 md:mb-0">
					Utilizamos cookies para melhorar a experiência dos nossos usuários.
					<Link to="/privacy-policy" className="underline ml-1">
						Política de Privacidade
					</Link>
				</p>
				<div className="flex space-x-4">
					<button
						type="button"
						className="bg-green-500 px-4 py-2 rounded"
						onClick={() => handleConsent("accepted")}
					>
						Aceitar
					</button>
					<button
						type="button"
						className="bg-red-500 px-4 py-2 rounded"
						onClick={() => handleConsent("rejected")}
					>
						Recusar
					</button>
				</div>
			</div>
		</div>
	);
}
