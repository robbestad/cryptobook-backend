"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = require("express");
var AssetRouter_1 = __importDefault(require("./asset/AssetRouter"));
var MainRouter = /** @class */ (function () {
    function MainRouter() {
        this._router = (0, express_1.Router)();
        this._assetRouter = AssetRouter_1.default;
        this._configure();
    }
    Object.defineProperty(MainRouter.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    MainRouter.prototype._configure = function () {
        this._router.use('/asset', this._assetRouter);
    };
    return MainRouter;
}());
module.exports = new MainRouter().router;
