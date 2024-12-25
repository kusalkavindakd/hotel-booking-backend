import express from "express";

import {
  Createcategory,
  getcategory,
  deletecategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", Createcategory);

export default categoryRouter;

categoryRouter.get("/", getcategory);
categoryRouter.get("/", deletecategory);
