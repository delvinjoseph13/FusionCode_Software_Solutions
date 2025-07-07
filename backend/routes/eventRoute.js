import express from "express";
import { getallEvents, postnewEvent } from "../controller/eventController.js";

const router=express.Router()

router.get('/events',getallEvents)
router.post('/event',postnewEvent)

export default router;