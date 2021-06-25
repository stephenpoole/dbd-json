import { expect } from "chai";
import { ModifierType } from "../../../../src/en";
import Factories from "../../../../src/lib/factories";
import { Power } from "../../../../src/lib/types";
import Model from "../../../../src/lib/factory/model/emptyPower";

const power = { index: "NOPE" };

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

describe("#emptyPowerModel", () => {
    it("should return a undefined id", () => {
        const model = new Model(factoriesMock as unknown as Factories, power as unknown as Power);
        model.initialize();
        expect(model.id).to.be.undefined;
    });

    it("should return a undefined description", () => {
        const model = new Model(factoriesMock as unknown as Factories, power as unknown as Power);
        model.initialize();
        expect(model.description).to.be.undefined;
    });

    it("should return a undefined name", () => {
        const model = new Model(factoriesMock as unknown as Factories, power as unknown as Power);
        model.initialize();
        expect(model.name).to.be.undefined;
    });

    it("should return a index", () => {
        const model = new Model(factoriesMock as unknown as Factories, power as unknown as Power);
        model.initialize();
        expect(model.index).to.be.undefined;
    });

    it("should return a undefined owner", () => {
        const model = new Model(factoriesMock as unknown as Factories, power as unknown as Addon);
        model.initialize();
        expect(model.owner).to.be.undefined;
    });

    it("should return a undefined image", () => {
        const model = new Model(factoriesMock as unknown as Factories, power as unknown as Power);
        model.initialize();
        expect(model.image).to.be.undefined;
    });

    it("should return the power modifier", () => {
        const model = new Model(factoriesMock as unknown as Factories, power as unknown as Power);
        model.initialize();
        expect(model.modifier).to.equal(ModifierType.Power);
    });

    it("should return a undefined flavor", () => {
        const model = new Model(factoriesMock as unknown as Factories, power as unknown as Power);
        model.initialize();
        expect(model.flavor).to.be.undefined;
    });
});
