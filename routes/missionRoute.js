const { Router } = require('express');


const missionController = require('../controllers/missionController');

const router = Router();

router.route('/').post(missionController.createMission);

module.exports = router;

const router = Router();

// require mission controller
const mission = require('../controllers/missionController');

router.get('/', mission);

// export module
module.exports = router;
