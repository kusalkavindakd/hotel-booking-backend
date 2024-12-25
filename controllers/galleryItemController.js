import Galleryitem from "../Models/galleryitem.js";

// Create Gallerry item
export function CreateGalleryItem(req, res) {
  const user = req.user;
  if (user == null) {
    res.status(403).json({
      message: "Please login to create gallery item",
    });
    return;
  }
  if (user.type != "admin") {
    res.status(403).json({
      message: "you do not have permisssion to create gallery item",
    });
    return;
  }

  const galleryItem = req.body.item;

  const newGalleryItem = new Galleryitem(galleryItem);

  newGalleryItem
    .save()
    .then(() => {
      res.json({
        message: "Gallery item created Sucessfully",
      });
    })
    .catch(() => {
      res.status(500).json({
        message: "Gallery item creation failed",
      });
    });
}
export function getGalleryItems(req, res) {
  Galleryitem.find().then((list) =>
    res.json({
      list: list,
    })
  );
}
