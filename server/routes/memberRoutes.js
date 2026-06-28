import express from "express";
import { addMember, getMembers, deleteMember, updateMember } from "../controllers/memberController.js";

const router = express.Router();

router.get("/", getMembers);
router.post("/", addMember);
router.delete("/:id", deleteMember);
router.put("/:id", updateMember);

export default router;