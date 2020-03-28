import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn as IconLogin } from "react-icons/fi";

import api from "../../services/api";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import "./styles.css";

const Logon = () => {
	const [id, setId] = useState("");
	const history = useHistory();
	async function handleLogin(event) {
		event.preventDefault();

		try {
			const response = await api.post("sessions", { id });
			localStorage.setItem("ongId", id);
			localStorage.setItem("ongName", response.data.name);
			history.push("/profile");
		} catch {
			alert("Falha no login. Tente novamente.");
		}
	}

	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="Be The Hero" />

				<form onSubmit={handleLogin}>
					<h1>Faça seu logon</h1>

					<input
						value={id}
						onChange={e => setId(e.target.value)}
						placeholder="Sua ID"
						type="text"
					/>
					<button className="button" type="submit">
						Entrar
					</button>

					<Link className="back-link" to="/register">
						<IconLogin size={16} color="#E02041" />
						Não tenho cadastro
					</Link>
				</form>
			</section>
			<img src={heroesImg} alt="Heroes"></img>
		</div>
	);
};

export default Logon;
