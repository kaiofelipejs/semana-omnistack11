import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn as IconLogin } from "react-icons/fi";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import "./styles.css";

const Logon = () => {
	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="Be The Hero" />

				<form action="">
					<h1>Faça seu logon</h1>

					<input placeholder="Sua ID" type="text" />
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
