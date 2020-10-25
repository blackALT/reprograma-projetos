const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/", controller.getAllMusics)
router.get("/sandy", controller.getMusicBySandy) // Contratos para ir ao infinito e além
router.get("/decade", controller.getMusicsAfter2010) // Contratos para ir ao infinito e além
router.get("/favorite", controller.getFavoriteMusics) // Extra
router.get("/:id", controller.getMusicById)
router.post("/", controller.createMusic)
router.put("/:id", controller.updateMusic)
router.patch("/:id/favorited", controller.updateFavoritedStatus)
router.delete("/:id", controller.deleteMusic)

module.exports = router