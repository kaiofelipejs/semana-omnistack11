import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft as ArrowLeft } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

const Register = () => {
	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero" srcset="" />

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

				<form>
					<input placeholder="Nome da ONG" type="text" />
					<input placeholder="E-mail" type="email" />
					<input placeholder="WhatsApp" />

					<div className="input-group">
						<input placeholder="Cidade" type="text" />
						<input placeholder="UF" style={{ width: 80 }} />
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
