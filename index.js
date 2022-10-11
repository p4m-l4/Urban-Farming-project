const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
	response.render("index");
});

app.get("/signIn", (request, response) => {
	response.render("signIn");
});

app.get("/home", (request, response) => {
	response.send("I am here. See me");
});

app.get("*", (request, response) => {
	response.send(
		"<h1 style='text-align: center; margin-top: 150px; font-size: 70px;'>404! Page not found.🐱‍🐉🐊</h1>"
	);
});

app.listen(4000, console.log("Awake and listening."));
