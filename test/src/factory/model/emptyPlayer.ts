import { expect } from "chai";
import { Difficulty, ModifierType } from "../../../../src/en";
import Factories from "../../../../src/lib/factories";
import { Player } from "../../../../src/lib/types";
import Model from "../../../../src/lib/factory/model/emptyPlayer";

const player = { index: "NOPE" };

const factoriesMock = {
    killer: {
        exists: () => true,
        getModel: () => ({
            data: {
                index: "POWER",
                player: "POWER",
            },
        }),
    },
    survivor: { getModel: () => ({ data: { player: undefined } }) },
};

describe("#emptyPlayerModel", () => {
    it("should return a undefined id", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        expect(model.id).to.be.undefined;
    });

    it("should return a undefined description", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        expect(model.description).to.be.undefined;
    });

    it("should return a undefined name", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        expect(model.name).to.be.undefined;
    });

    it("should return a index", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        expect(model.index).to.be.undefined;
    });

    it("should return a undefined image", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        expect(model.image).to.be.undefined;
    });

    it("should return the player modifier", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        expect(model.modifier).to.equal(ModifierType.Player);
    });

    it("should return a None difficulty", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        expect(model.difficulty).to.equal(Difficulty.None);
    });

    it("should return a undefined power", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        expect(model.power).to.be.undefined;
    });

    it("should return undefined perks", () => {
        const model = new Model(factoriesMock as unknown as Factories, player as unknown as Player);
        model.initialize();
        model.perks.forEach(perk => expect(perk).to.be.undefined);
    });
});
