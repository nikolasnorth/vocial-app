import express, {json} from "express";
import v1 from "./api/v1/";

const app = express();

app.use(json());
app.use("/v1", v1);

export default app;
