import e from "express";
import routes from "./routes.js"
import cors from 'cors';

const app = e();
const port = process.env.PORT || 3000;
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use(cors({
    origin: '*'
}));

app.use(e.json());
app.use('/', routes)

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`)
});

console.log("Halo! Kita akan mulai membuat RESTful API");