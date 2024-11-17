import express from 'express';
import { addcontactdata, viewContactData } from '../controllers/contactdata.js';
const router = express.Router()

// route.get('/getcontactid',getcontactid)
// route.get('/getcontactdata',getcontactdata)

router.post('/addcontactdata', addcontactdata);
router.get('/viewcontactdata', viewContactData);
// route.put('/edituser',edituser)


export default router;