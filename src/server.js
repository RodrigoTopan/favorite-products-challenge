import "./bootstrap";
import app from "./app";

const { APP_PORT } = process.env;

app.listen(APP_PORT || 8080);
