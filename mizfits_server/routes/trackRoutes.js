import { Express } from "express";
import trackController from "../controllers/trackController";

const router = Express.router();

router.get('/', trackController.getTracks);
router.get('/:id', trackController.getTrack);
router.post('/', trackController.createTrack);
router.delete('/:id', trackController.deleteTrack);
router.put('/:id', trackController.updateTrack);

module.exports = router;