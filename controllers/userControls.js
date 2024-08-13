const User = require("../models/User");
exports.apiForm = async (req, res) => {
  const { walletAddress } = req.body;
  try {
    const existingUser = await User.findOne({ walletAddress });
    existingUser && res.status(200).send({"message": `The response: ${existingUser}`});

    const user = new User({walletAddress});

    await user.save();
    res.send({"message": user})
  } catch (error) {
    res.status(500).send({ "Error Message": "Server Error" });
    console.log(error)
  }
};

exports.apiCheckUser = async (req, res) => {
  try {
    const { walletAddress } = req.body
    const existingUser = await User.findOne({ walletAddress })
    existingUser ? res.status(200).send(existingUser) : res.status(500).send({"message": "User details not found"})
  } catch (error) {
    
  }
}