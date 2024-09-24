import jwt from "jsonwebtoken";

export default function isauthonticated(req, res, next) {
  console.log("fdfd");
  const token = req.headers.authorization;
  try {
    const data = jwt.verify(token, "jwtsecret");
    req.userid = data.id;

    next();
  } catch (error) {
    res.send({
      msg: "you are not authorized",
      error: error,
    });
  }
}
