import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft as ArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [city, setCity] = useState("");
	const [uf, setUf] = useState("");

	const history = useHistory();

	async function handleRegister(event) {
		event.preventDefault();

		const data = {
			name,
			email,
			whatsapp,
			city,
			uf
		};

		try {
			const response = await api.post("ongs", data);
			alert(`Seu ID de acesso: ${response.data.id}`);
			history.push("/");
		} catch {
			alert(`Erro no cadastro. Tente novamente.`);
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero" />

					<h1>Cadastro</h1>
					<p>
						Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
						os casos da sua ONG.
					</p>

					<Link className="back-link" to="/">
						<ArrowLeft size={16} color="#E02041" />
						Voltar para logon
					</Link>
				</section>

				<form onSubmit={handleRegister}>
					<input
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder="Nome da ONG"
						type="text"
					/>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder="E-mail"
						type="email"
					/>
					<input
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
						placeholder="WhatsApp"
					/>

					<div className="input-group">
						<input
							value={city}
							onChange={e => setCity(e.target.value)}
							placeholder="Cidade"
							type="text"
						/>
						<input
							value={uf}
							onChange={e => setUf(e.target.value)}
							placeholder="UF"
							style={{ width: 80 }}
						/>
					</div>

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
