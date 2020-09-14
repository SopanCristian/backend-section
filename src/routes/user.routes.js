const { Router } = require("express");
const { 
    AuthMiddleware, 
    ParseIntMiddleware, 
    CacheMiddleware,
} = require("../middlewares");
const { CACHE_TIME } = require("../helpers");
const cacheMiddleware = require("../middlewares/cache.middleware");

module.exports = function({ UserController }){
    const router = Router();

    router.get(
        "", 
        [AuthMiddleware, ParseIntMiddleware, cacheMiddleware(CACHE_TIME.ONE_HOUR)], 
        UserController.getAll
    );
    router.get("/:userId", UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);

    return router;
};