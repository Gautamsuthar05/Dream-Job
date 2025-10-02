import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized. Login Again",
    });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.SECRET_KEY);
    if (tokenDecode) {
      req.userid = tokenDecode.id;
    } else {
      return res.json({
        success: false,
        message: "Token invalid, User not authorized",
      });
    }
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default userAuth;
