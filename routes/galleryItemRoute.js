import express from "express";

import {
  CreateGalleryItem,
  getGalleryItems,
} from "../controllers/galleryItemController.js";

const galleryItemRouter = express.Router();

galleryItemRouter.post("/", CreateGalleryItem);

export default galleryItemRouter;

galleryItemRouter.get("/", getGalleryItems);
