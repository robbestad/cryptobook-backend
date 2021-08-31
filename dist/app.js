"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var MainRouter_1 = __importDefault(require("./routers/MainRouter"));
var path = __importStar(require("path"));
// load the environment variables from the .env file
dotenv_1.default.config({
    path: '.env'
});
/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.router = MainRouter_1.default;
    }
    return Server;
}());
// initialize server app
var server = new Server();
// make server app handle any route starting with '/api'
server.app.use('/api', server.router);
var buildPath = path.resolve(__dirname, "../public");
server.app.use("/", express_1.default.static(buildPath, { index: false }));
server.app.use("*", function (req, res) {
    res.sendFile("index.html", { root: buildPath });
});
// make server app handle any error
server.app.use(function (err, req, res, next) {
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message
    });
});
// make server listen on some port
(function (APP_PORT) {
    if (APP_PORT === void 0) { APP_PORT = process.env.PORT || 5000; }
    server.app.listen(Number(APP_PORT), "0.0.0.0", function () { return console.log("> Listening on port " + APP_PORT); });
})();
