const router = require('express').Router();
const JobsController = require('../controllers/Jobs');

// TODO: Hacer una ruta para utilizar
// Patch, Put o Delete 

router.get('/getalljobs', JobsController.getAllJobs);
router.post('/geonejob', JobsController.getOneJob);
router.post('/createjob', JobsController.createJob);
router.post('/updatejob', JobsController.updateJob);
router.post('/deletejob', JobsController.deleteJob);
router.post('/getjobsbypage', JobsController.getJobsByPage);


module.exports = router;