"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(factories, data) {
        this.initialized = false;
        this.frozen = false;
        if (data) {
            this.data = data;
        }
        else {
            this.data = {
                id: -1,
                index: "",
                name: "",
                description: "",
                image: "",
            };
        }
        this.factories = factories;
    }
    Model.prototype.initialize = function () {
        this.initialized = true;
    };
    Model.prototype.freeze = function () {
        this.frozen = true;
    };
    Object.defineProperty(Model.prototype, "index", {
        get: function () {
            return this.data.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "isEmpty", {
        get: function () {
            return !("index" in this.data && !!this.data.index && this.data.index.length > 0);
        },
        enumerable: false,
        configurable: true
    });
    return Model;
}());
exports.default = Model;
//# sourceMappingURL=model.js.map