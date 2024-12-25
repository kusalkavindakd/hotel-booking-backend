import category from "../Models/category.js";

export function Createcategory(req, res) {
  const user = req.user;
  if (user == null) {
    res.status(403).json({
      message: "Please login to create Category",
    });
    return;
  }
  if (user.type != "admin") {
    res.status(403).json({
      message: "you do not have permisssion to create Category",
    });
    return;
  }

  const category = req.body.category;

  const newCategory = new category(category);

  newCategory
    .save()
    .then(() => {
      res.json({
        message: "Category created Sucessfully",
      });
    })
    .catch(() => {
      res.status(500).json({
        message: "Category creation failed",
      });
    });
}
export function getcategory(req, res) {
  category.find().then((list) =>
    res.json({
      list: list,
    })
  );
}
export function deletecategory(req, res) {
  res.json({
    message: "this is a delete request",
  });
}
