const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/", controller.getAllMusics)
router.post("/", controller.createMusic)
router.get("/artists", controller.getMusicByArtist)
router.get("/decade", controller.getMusicsAfter2010)
router.get("/:id", controller.getMusicById)
router.put("/:id", controller.updateMusic)
router.patch("/:id/favorited", controller.updateFavoritedStatus)
router.delete("/:id", controller.deleteMusic)

module.exports = router