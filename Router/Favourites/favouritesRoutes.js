const express = require("express")
const { getFavourites, addFavourites, deleteFavourites } = require("../../Api/Favourite/favouriteController")

const router = express.Router()


router.post("/api/v1/favourites",addFavourites)
router.get("/api/v1/favourites/:email",getFavourites)
router.delete("/api/v1/favourites/:id",deleteFavourites)

module.exports = router