import Data from "../../src/lib/locales/en";
import { ModifierType } from "../../src/en";
import { PropertyValidate, Helpers } from "./helpers";

const { survivorAddons, killerAddons } = Data;

describe("#survivorAddons", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, survivorAddons);
        });

        survivorAddons.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, survivorAddons);
                PropertyValidate.id(item, survivorAddons);
                PropertyValidate._name(item, survivorAddons);
                PropertyValidate.addonType(item, survivorAddons);
                PropertyValidate.rarity(item, survivorAddons);
                PropertyValidate.description(item, survivorAddons);

                if ("flavor" in item) {
                    PropertyValidate.flavor(item, survivorAddons);
                }

                PropertyValidate.image(item, survivorAddons, ModifierType.Addon);
            });
        });
    });
});

describe("#killerAddons", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, killerAddons);
        });

        killerAddons.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, killerAddons);
                PropertyValidate.id(item, killerAddons);
                PropertyValidate._name(item, killerAddons);
                PropertyValidate.owner(item, killerAddons, false);
                PropertyValidate.rarity(item, killerAddons);
                PropertyValidate.description(item, killerAddons);

                if ("flavor" in item) {
                    PropertyValidate.flavor(item, killerAddons);
                }

                PropertyValidate.image(item, killerAddons, ModifierType.Addon);
            });
        });
    });
});
