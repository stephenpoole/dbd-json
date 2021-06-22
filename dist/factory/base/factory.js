"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Factory = /** @class */ (function () {
    function Factory(data) {
        this.data = data;
    }
    Factory.prototype.get = function (key) {
        var item = this.data.find(function (value) { return value.index === key; });
        return item;
    };
    Factory.prototype.exists = function (key) {
        return !!this.get(key);
    };
    return Factory;
}());
exports.default = Factory;
//# sourceMappingURL=factory.js.map