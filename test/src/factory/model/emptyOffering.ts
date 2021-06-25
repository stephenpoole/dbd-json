import { expect } from "chai";
import { ModifierType } from "../../../../src/en";
import { Rarity } from "../../../../src/lib/enum";
import Factories from "../../../../src/lib/factories";
import { Offering } from "../../../../src/lib/types";
import Model from "../../../../src/lib/factory/model/emptyOffering";

const offering = { index: "NOPE" };

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

describe("#emptyOfferingModel", () => {
    it("should return a undefined id", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            offering as unknown as Offering
        );
        model.initialize();
        expect(model.id).to.be.undefined;
    });

    it("should return a undefined description", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            offering as unknown as Offering
        );
        model.initialize();
        expect(model.description).to.be.undefined;
    });

    it("should return a undefined name", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            offering as unknown as Offering
        );
        model.initialize();
        expect(model.name).to.be.undefined;
    });

    it("should return a index", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            offering as unknown as Offering
        );
        model.initialize();
        expect(model.index).to.be.undefined;
    });

    it("should return a None rarity", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            offering as unknown as Offering
        );
        model.initialize();
        expect(model.rarity).to.equal(Rarity.None);
    });

    it("should return a undefined image", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            offering as unknown as Offering
        );
        model.initialize();
        expect(model.image).to.be.undefined;
    });

    it("should return the offering modifier", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            offering as unknown as Offering
        );
        model.initialize();
        expect(model.modifier).to.equal(ModifierType.Offering);
    });

    it("should return a undefined flavor", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            offering as unknown as Offering
        );
        model.initialize();
        expect(model.flavor).to.be.undefined;
    });
});
