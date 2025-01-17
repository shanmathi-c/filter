import express from "express";

import { FilterController } from "../controller/filter.js";
const router = express.Router();
router.post("/create", FilterController.getCreate);
router.get("/get", FilterController.getData);
router.get("/indi", FilterController.getId);
router.put("/update-product", FilterController.putProduct);
router.post("/postProduct", FilterController.createEditdata);
router.get("/", (req, res) => {
  res.send("get desktopamazon router ");
});

export default router;
