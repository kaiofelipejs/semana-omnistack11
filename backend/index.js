const express = require("express");

const app = express();

app.get("/", (req, res) => {
	return res.send({
		evento: "Semana OmniStack 11.0",
		aluno: "Kaio Felipe Silva"
	});
});

app.listen(3333);
