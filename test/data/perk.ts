import Data from "../../src/locales/en";
import { ModifierType, PlayerType } from "../../src";
import { PropertyValidate, Helpers } from "./helpers";

const { killerPerks, survivorPerks } = Data;

describe("#survivorPerks", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, survivorPerks);
        });

        survivorPerks.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, survivorPerks);
                PropertyValidate.id(item, survivorPerks);
                PropertyValidate._name(item, survivorPerks);

                describe("#rarity", function () {
                    it("should exist", function (done) {
                        Helpers.exists(done, item, "rarity");
                    });
                    it("should be an array", function (done) {
                        Helpers.isArray(done, item.rarity);
                    });
                    it("should have length of 3", function (done) {
                        Helpers.isLength(done, item.rarity, 3);
                    });

                    item.rarity.map((rarity, index) => {
                        describe("#rarity[${index}]", function () {
                            PropertyValidate.rarity(rarity, survivorPerks);
                        });
                    });
                });

                PropertyValidate.perkOwner(item, survivorPerks, PlayerType.Survivor);
                PropertyValidate.description(item, survivorPerks);
                if ("flavor" in item) {
                    PropertyValidate.flavor(item, survivorPerks);
                }
                PropertyValidate.image(item, survivorPerks, ModifierType.Perk);

                describe("#tiers", function () {
                    it("should exist", function (done) {
                        Helpers.exists(done, item, "tiers");
                    });
                    it("should be an array", function (done) {
                        Helpers.isArray(done, item.tiers);
                    });
                    it("should have length of 3", function (done) {
                        Helpers.isLength(done, item.tiers, 3);
                    });

                    if (!Array.isArray(item.tiers)) {
                        return;
                    }

                    item.tiers.map((tier, index) => {
                        describe(`#tier[${index}]`, function () {
                            it("should be an array", function (done) {
                                Helpers.isArray(done, tier);
                            });
                            it("should not be empty", function (done) {
                                Helpers.isNotEmpty(done, tier);
                            });

                            if (!Array.isArray(tier)) {
                                return;
                            }

                            tier.map((str, index1) => {
                                describe(`#tier[${index}][${index1}]`, function () {
                                    PropertyValidate.tier(str, survivorPerks);
                                });
                            });

                            it("should match {#} count in description", function (done) {
                                Helpers.occurrences(
                                    done,
                                    item.description,
                                    /\{[0-9]{1,3}\}/g,
                                    tier.length
                                );
                            });
                        });
                    });
                });
            });
        });
    });
});

describe("#killerPerks", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, killerPerks);
        });

        killerPerks.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, killerPerks);
                PropertyValidate.id(item, killerPerks);
                PropertyValidate._name(item, killerPerks);

                describe("#rarity", function () {
                    it("should exist", function (done) {
                        Helpers.exists(done, item, "rarity");
                    });
                    it("should be an array", function (done) {
                        Helpers.isArray(done, item.rarity);
                    });
                    it("should have length of 3", function (done) {
                        Helpers.isLength(done, item.rarity, 3);
                    });

                    item.rarity.map((rarity, index) => {
                        describe("#rarity[${index}]", function () {
                            PropertyValidate.rarity(rarity, killerPerks);
                        });
                    });
                });

                PropertyValidate.perkOwner(item, killerPerks, PlayerType.Killer);
                PropertyValidate.description(item, killerPerks);
                if ("flavor" in item) {
                    PropertyValidate.flavor(item, killerPerks);
                }
                PropertyValidate.image(item, killerPerks, ModifierType.Perk);

                describe("#tiers", function () {
                    it("should exist", function (done) {
                        Helpers.exists(done, item, "tiers");
                    });
                    it("should be an array", function (done) {
                        Helpers.isArray(done, item.tiers);
                    });
                    it("should have length of 3", function (done) {
                        Helpers.isLength(done, item.tiers, 3);
                    });

                    item.tiers.map((tier, index) => {
                        describe(`#tier[${index}]`, function () {
                            it("should be an array", function (done) {
                                Helpers.isArray(done, tier);
                            });
                            it("should not be empty", function (done) {
                                Helpers.isNotEmpty(done, tier);
                            });

                            tier.map((str, index1) => {
                                describe(`#tier[${index}][${index1}]`, function () {
                                    PropertyValidate.tier(str, killerPerks);
                                });
                            });

                            it("should match {#} count in description", function (done) {
                                Helpers.occurrences(
                                    done,
                                    item.description,
                                    /\{[0-9]{1,3}\}/g,
                                    tier.length
                                );
                            });
                        });
                    });
                });
            });
        });
    });
});
