import Member from "../models/Member.js";

export const getMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({updatedAt:-1});

    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);

    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);

    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }

    res.status(200).json({
      message: "Member deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }

    res.json(member);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

