import { expect } from "chai";
import { ModifierType } from "../../../../src/en";
import { Power } from "../../../../src/lib/types";
import Factories from "../../../../src/lib/factories";
import Model from "../../../../src/lib/factory/model/power";

const power = {
    description:
        "A powerful and violent last breath snatched from Crotus Prenn Asylum warden Patrick Spencer. Channelling its energy allows The Nurse to pierce and jump through the spirit world in a Blink multiple times in a row. Doing so leaves her in a state of fatigue.<br><li>Grants the Blink.</li><li>Grants <b>1</b> additional Chain Blink.</li>",
    name: "Spencer's Last Breath",
    id: 1,
    index: "SPENCERS_LAST_BREATH",
    owner: "NURSE",
    image: "iconPowers_breath",
};

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
};

describe("#powerModel", () => {
    it("should return an id", () => {
        const model = new Model(factoriesMock as unknown as Factories, power);
        model.initialize();
        expect(model.id).to.equal(power.id);
    });

    it("should return a description", () => {
        const model = new Model(factoriesMock as unknown as Factories, power);
        model.initialize();
        expect(model.description).to.equal(power.description);
    });

    it("should return a name", () => {
        const model = new Model(factoriesMock as unknown as Factories, power);
        model.initialize();
        expect(model.name).to.equal(power.name);
    });

    it("should return a index", () => {
        const model = new Model(factoriesMock as unknown as Factories, power);
        model.initialize();
        expect(model.index).to.equal(power.index);
    });

    it("should return a image", () => {
        const model = new Model(factoriesMock as unknown as Factories, power);
        model.initialize();
        expect(model.image).to.equal(power.image);
    });

    it("should return the power modifier", () => {
        const model = new Model(factoriesMock as unknown as Factories, power);
        model.initialize();
        expect(model.modifier).to.equal(ModifierType.Power);
    });

    it("should return an owner model given a power", () => {
        const model = new Model(factoriesMock as unknown as Factories, power);
        model.initialize();
        expect(model.owner).to.not.be.undefined;
    });

    it("should not call setOwner if model is empty", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            { owner: power.owner } as unknown as Power
        );
        model.initialize();
        expect(model.owner).to.be.undefined;
    });
});
