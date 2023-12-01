const express = require('express');

const ctrl = require("../../controllers/auth")

const {validateBody, authenticate, upload} = require("../../middelwares")

const {schemas} = require("../../models/user")

const router = express.Router();

// signup
router.post('/register', validateBody(schemas.registerAndLoginSchema), ctrl.register)

// signin
router.post("/login", validateBody(schemas.registerAndLoginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent )

router.post("/logout", authenticate, ctrl.logout)

router.patch("/", authenticate, ctrl.updateSubscription)

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar )

module.exports = router;