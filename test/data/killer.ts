import Data from "../../src/locales/en";
import { ModifierType, PlayerType } from "../../src";
import { PropertyValidate, Helpers } from "./helpers";

const { killers } = Data;

describe("#killers", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, killers);
        });

        killers.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, killers);
                PropertyValidate.id(item, killers);
                PropertyValidate._name(item, killers);
                PropertyValidate.description(item, killers);
                PropertyValidate.difficulty(item, killers);
                PropertyValidate.power(item, killers);
                PropertyValidate.image(item, killers, ModifierType.Player);

                describe("#perks", function () {
                    it("should exist", function (done) {
                        Helpers.exists(done, item, "perks");
                    });
                    it("should be an array", function (done) {
                        Helpers.isArray(done, item.perks);
                    });
                    it("should have length of 3", function (done) {
                        Helpers.isLength(done, item.perks, 3);
                    });

                    item.perks.map((perk, index) => {
                        describe(`#perk[${index}]`, function () {
                            it("should be a string", function (done) {
                                Helpers.isString(done, perk);
                            });
                            it("should not be empty", function (done) {
                                Helpers.isNotEmpty(done, perk);
                            });
                            it("should be a valid perk", function (done) {
                                Helpers.isPerk(done, perk, PlayerType.Killer);
                            });
                        });
                    });
                });
            });
        });
    });
});
