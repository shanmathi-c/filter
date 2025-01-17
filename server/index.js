import express from "express";
import cors from "cors";
import bodyparser from "body-parser";

import filterRouter from "./routes/filter.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyparser.json());

app.use("/filter", filterRouter);
app.use("/data", filterRouter);
app.use("/product", filterRouter);

app.get("/", (req, res) => {
  console.log("working");
  res.send("this is homepage");
});

app.listen(PORT, () => {
  console.log("SEVER IS RUNNING IN PORT 5000");
});
