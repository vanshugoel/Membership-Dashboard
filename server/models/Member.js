import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    membershipType: {
      type: String,
      enum: ["Basic", "Silver", "Gold", "Platinum"],
      default: "Basic",
    },

    membershipFee: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Pending", "Expired"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.model("Member", memberSchema);

export default Member;