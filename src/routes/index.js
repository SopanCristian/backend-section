const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
require("express-async-error");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares")

module.exports = function({ 
    HomeRoutes,
    UserRoutes,
    IdeaRoutes,
    CommentRoutes, 
}){
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/idea", IdeaRoutes);
    apiRoutes.use("/comment", CommentRoutes);

    router.use("/v1/api", apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}