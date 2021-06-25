import { expect } from "chai";
import { ItemType, ModifierType } from "../../../../src/en";
import { Rarity } from "../../../../src/lib/enum";
import Factories from "../../../../src/lib/factories";
import { Item } from "../../../../src/lib/types";
import Model from "../../../../src/lib/factory/model/emptyItem";

const item = { index: "NOPE" };

const factoriesMock = {
    killer: {
        exists: () => true,
        getModel: () => ({
            data: {
                index: "POWER",
                power: "POWER",
            },
        }),
    },
    survivor: { getModel: () => ({ data: { power: undefined } }) },
};

describe("#emptyItemModel", () => {
    it("should return a undefined id", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.id).to.be.undefined;
    });

    it("should return a undefined description", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.description).to.be.undefined;
    });

    it("should return a undefined name", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.name).to.be.undefined;
    });

    it("should return a index", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.index).to.be.undefined;
    });

    it("should return a None rarity", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.rarity).to.equal(Rarity.None);
    });

    it("should return a undefined image", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.image).to.be.undefined;
    });

    it("should return the item modifier", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.modifier).to.equal(ModifierType.Item);
    });

    it("should return a undefined flavor", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.flavor).to.be.undefined;
    });

    it("should return a None ItemType", () => {
        const model = new Model(factoriesMock as unknown as Factories, item as unknown as Item);
        model.initialize();
        expect(model.type).to.equal(ItemType.None);
    });
});
