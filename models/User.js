const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
  },
  walletBalance: {
    type: String,
    default: 0
  },
  referralId: {
    type: String,
    default: function () {
      return new mongoose.Types.ObjectId()
    }
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
