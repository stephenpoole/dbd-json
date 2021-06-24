import Data from "../../src/lib/locales/en";
import { ModifierType } from "../../src/en";
import { PropertyValidate, Helpers } from "./helpers";

const { killerOfferings, sharedOfferings, survivorOfferings } = Data;

describe("#survivorOfferings", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, survivorOfferings);
        });

        survivorOfferings.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, survivorOfferings);
                PropertyValidate.id(item, survivorOfferings);
                PropertyValidate._name(item, survivorOfferings);
                PropertyValidate.rarity(item, survivorOfferings);
                PropertyValidate.description(item, survivorOfferings);

                if ("flavor" in item) {
                    PropertyValidate.flavor(item, survivorOfferings);
                }

                PropertyValidate.image(item, survivorOfferings, ModifierType.Offering);
            });
        });
    });
});

describe("#killerOfferings", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, killerOfferings);
        });

        killerOfferings.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, killerOfferings);
                PropertyValidate.id(item, killerOfferings);
                PropertyValidate._name(item, killerOfferings);
                PropertyValidate.rarity(item, killerOfferings);
                PropertyValidate.description(item, killerOfferings);

                if ("flavor" in item) {
                    PropertyValidate.flavor(item, killerOfferings);
                }

                PropertyValidate.image(item, killerOfferings, ModifierType.Offering);
            });
        });
    });
});

describe("#sharedOfferings", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, sharedOfferings);
        });

        sharedOfferings.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, sharedOfferings);
                PropertyValidate.id(item, sharedOfferings);
                PropertyValidate._name(item, sharedOfferings);
                PropertyValidate.rarity(item, sharedOfferings);
                PropertyValidate.description(item, sharedOfferings);

                if ("flavor" in item) {
                    PropertyValidate.flavor(item, sharedOfferings);
                }

                PropertyValidate.image(item, sharedOfferings, ModifierType.Offering);
            });
        });
    });
});
