import express from 'express';
import validateToken from '../../../middlewares/auth';
import NotificationController from '../../../controllers/notifications.controller';

const router = express.Router();
const { notification, getUserNotification } = NotificationController;

// req.params can only be 'email' or 'inApp''
router.patch('/:emailOrInApp', validateToken, notification);
router.get('/', validateToken, getUserNotification);

export default router;
