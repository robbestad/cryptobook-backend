"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var dayjs_1 = __importDefault(require("dayjs"));
var axios_1 = __importDefault(require("axios"));
var AssetController = /** @class */ (function () {
    function AssetController() {
    }
    AssetController.prototype.fetchAsset = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            var date, end, start, error, result, fetchTimeSeries, fetchMetrics;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        date.setDate(date.getDate() - 1);
                        end = (0, dayjs_1.default)(date.getTime()).format("YYYY-MM-DD");
                        date.setDate(date.getDate() - 15);
                        start = (0, dayjs_1.default)(date.getTime()).format("YYYY-MM-DD");
                        error = [];
                        result = undefined;
                        if (!(process.env.NODE_ENV === "development")) return [3 /*break*/, 1];
                        // my IP got blocked...
                        result = {
                            "metrics": {
                                "status": { "elapsed": 8, "timestamp": "2021-08-30T15:26:56.773464Z" },
                                "data": {
                                    "id": "1e31218a-e44e-4285-820c-8282ee222035",
                                    "symbol": "BTC",
                                    "name": "Bitcoin",
                                    "slug": "bitcoin",
                                    "contract_addresses": [],
                                    "_internal_temp_agora_id": "9793eae6-f374-46b4-8764-c2d224429791"
                                }
                            }, "timeSeries": {
                                "status": { "elapsed": 72, "timestamp": "2021-08-30T15:26:56.919197666Z" }, "data": {
                                    "id": "1e31218a-e44e-4285-820c-8282ee222035",
                                    "symbol": "BTC",
                                    "name": "Bitcoin",
                                    "slug": "bitcoin",
                                    "contract_addresses": [],
                                    "_internal_temp_agora_id": "9793eae6-f374-46b4-8764-c2d224429791",
                                    "parameters": {
                                        "asset_key": "btc",
                                        "asset_id": "1e31218a-e44e-4285-820c-8282ee222035",
                                        "start": "2021-08-16T00:00:00Z",
                                        "end": "2021-08-30T00:00:00Z",
                                        "interval": "1d",
                                        "order": "ascending",
                                        "format": "json",
                                        "timestamp_format": "unix-milliseconds",
                                        "columns": ["timestamp", "open", "high", "low", "close", "volume"]
                                    },
                                    "schema": {
                                        "metric_id": "price",
                                        "name": "Price",
                                        "description": "Volume weighted average price computed using Messari Methodology",
                                        "values_schema": {
                                            "timestamp": "Timestamp in milliseconds since the epoch (1 January 1970 00:00:00 UTC)",
                                            "open": "The price of the asset at the beginning of the specified interval in US dollars.",
                                            "high": "The highest price of the asset during the specified interval in US dollars.",
                                            "low": "The lowest price of the asset during the specified interval in US dollars",
                                            "close": "The price of the asset at the end of the specified interval in US dollars.",
                                            "volume": "The total volume traded during the specified interval across all Messari method markets in US dollars"
                                        },
                                        "minimum_interval": "1m",
                                        "source_attribution": [{ "name": "Kaiko", "url": "https://www.kaiko.com/" }]
                                    },
                                    "values": [[1629072000000, 47056.23929198293, 48080.53719571329, 45677.51036536144, 45944.57110085371, 8815236257.191849], [1629158400000, 46097.06783779848, 47183.41748830067, 44395.67252937083, 44702.679927049634, 10549269277.127113], [1629244800000, 44674.721570370784, 46037.828680273764, 44208.93581826314, 44723.54788930048, 8559460203.210125], [1629331200000, 44801.34210677887, 47208.76771923585, 43932.35722428182, 46779.78198864239, 9819412175.453283], [1629417600000, 46745.815632839294, 49393.905216550826, 46636.0702324828, 49339.77499641724, 9406616493.991512], [1629504000000, 49326.874461014435, 49802.63666102425, 48247.5378872689, 48874.2292170511, 8232272458.817972], [1629590400000, 48886.85918236112, 49531.598641330595, 48081.901739265384, 49285.906871382074, 6054447034.400338], [1629676800000, 49311.59994696529, 50535.562307998836, 49036.43664196567, 49513.10577212436, 8874941849.122828], [1629763200000, 49517.37559653661, 49894.2070188698, 47607.88007732681, 47661.18803327176, 10151850556.795881], [1629849600000, 47727.11408103037, 49278.739294075494, 47135.434886802796, 48996.135100263746, 8141506652.168691], [1629936000000, 48971.08935285695, 49408.24250921965, 46295.173082377725, 46856.62735920133, 10339882466.573837], [1630022400000, 46899.495444932545, 49185.761078914635, 46358.63192281064, 49094.133344419366, 8366371711.4775915], [1630108800000, 49071.13366698264, 49323.10056427565, 48371.28260313884, 48931.190615437015, 4032398245.0912795], [1630195200000, 48901.589127785184, 49665.980269784995, 47795.13373669825, 48804.89206631799, 4626691956.208296], [1630281600000, 48835.14322584142, 48920.83856296806, 47530.67722987451, 47660.353177350844, 4320641646.718298]]
                                }
                            }, "error": []
                        };
                        return [3 /*break*/, 3];
                    case 1:
                        fetchTimeSeries = axios_1.default.get("https://data.messari.io/api/v1/assets/" + asset + "/metrics/price/time-series?start=" + start + "&end=" + end + "&interval=1d", {
                            headers: {
                                "x-messari-api-key": process.env.API_KEY
                            }
                        }).then(function (res) { return res.data; });
                        fetchMetrics = axios_1.default.get("https://data.messari.io/api/v1/assets/" + asset, {
                            headers: {
                                "x-messari-api-key": process.env.API_KEY
                            }
                        }).then(function (res) { return res.data; });
                        return [4 /*yield*/, Promise.all([fetchMetrics, fetchTimeSeries]).then(function (_a) {
                                var metrics = _a[0], timeSeries = _a[1];
                                return { metrics: metrics, timeSeries: timeSeries };
                            })];
                    case 2:
                        result = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, result];
                }
            });
        });
    };
    return AssetController;
}());
module.exports = new AssetController();
