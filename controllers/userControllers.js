import User from "../Models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/*export function getUsers(req, res) {
  res.json({
    message: "this is a get request",
  });
}*/

export function postUsers(req, res) {
  const user = req.body;
  const password = req.body.password;

  const saltRounds = 10;
  const passwordHash = bcrypt.hashSync(password, saltRounds);

  console.log(passwordHash);
  user.password = passwordHash;

  const newUser = new User(user);
  newUser
    .save()
    .then(() => {
      res.status(201).json({
        message: "User creation successful",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "User creation failed",
        error: error.message,
      });
    });
}
export function loginUser(req, res) {
  const credentials = req.body;
  //const passwordHash = bcrypt.hashSync(credentials.password, 10);

  User.findOne({
    email: credentials.email,
    password: passwordHash,
  }).then((user) => {
    if (user == null) {
      res.status(403).json({
        message: "User not found",
      });
    } else {
      const ispasswordvalid = bcrypt.compareSync(
        credentials.password,
        user.password
      );
      if (!ispasswordvalid) {
        res.status(403).json({
          message: "Incorrect Password",
        });
      } else {
        const payload = {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lasttName,
          type: user.type,
        };
        const token = jwt.sign(payload, "secret", { expiresIn: "48h" });
        res.json({
          message: "User Found",
          user: user,
          token: token,
        });
      }
    }
  });
}
/*export function deleteUsers(req, res) {
  res.json({
    message: "this is a delete request",
  });
}

export function putUsers(req, res) {
  res.json({
    message: "this is a put request",
  });
}*/
