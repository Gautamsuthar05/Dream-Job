import userModel from "../models/userModel.js";

const getUserData = async (req, res) => {
  try {
    const userid = req.userid;
    const user = await userModel.findById(userid);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    } else {
      return res.json({
        success: true,
        name: user.name,
        isAccountVerified: user.isAccountVerified,
      });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default getUserData;
