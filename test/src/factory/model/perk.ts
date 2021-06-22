import { expect } from "chai";
import { Perk, ModifierType } from "../../../../src";
import { Player } from "../../../../src/enum";
import Factories from "../../../../src/factories";
import Model from "../../../../src/factory/model/perk";

const killer = {
    description:
        'Unlocks potential in one\'s aura reading ability. Each time a generator is fully repaired, survivors within <span class="Highlight1">{0} meters</span> of the completed generator will be revealed for <span class="Highlight2">{1} seconds</span>.<br>When the last generator is fully repaired, all the survivors\' auras are revealed for <span class="Highlight3">{2} seconds</span>.',
    name: "Bitter Murmur",
    id: 1,
    index: "BITTER_MURMUR",
    owner: "NOONE",
    rarity: [1, 2, 3],
    image: "iconPerks_bitterMurmur",
    tiers: [
        [16, 5, 5],
        [16, 5, 7],
        [16, 5, 10],
    ],
};

const survivor = {
    description:
        'Unlocks potential in one\'s aura reading ability. Each time a generator is completed, The Killer\'s aura is revealed to you for <span class="Highlight1">{0} seconds</span>.<br>When the last generator is powered the Killer\'s aura is revealed to you for <span class="Highlight2">{1} seconds</span>.',
    name: "Dark Sense",
    flavor: '"Take it from an old-timer: Slow down, don\'t rush and try not to worry so much! The best way to beat him is to know how he thinks." -Lost Tapes: Murf',
    id: 100,
    index: "DARK_SENSE",
    rarity: [1, 2, 3],
    owner: "NOONE",
    image: "iconPerks_darkSense",
    tiers: [
        [5, 5],
        [5, 7],
        [5, 10],
    ],
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
    survivor: { getModel: () => ({ data: { power: undefined } }) },
};

describe("#perkModel", () => {
    it("should return an id", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.id).to.equal(killer.id);
    });

    it("should return a name", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.name).to.equal(killer.name);
    });

    it("should return a index", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.index).to.equal(killer.index);
    });

    it("should return a rarity", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.rarity).to.not.be.undefined;
    });

    it("should return a image", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.image).to.equal(killer.image);
    });

    it("should return the perk modifier", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.modifier).to.equal(ModifierType.Perk);
    });

    it("should return a flavor", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.flavor).to.equal(survivor.flavor);
    });

    it("should return a tier", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.tier).to.not.be.undefined;
    });

    it("should return a description", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.description).to.not.be.undefined;
    });

    it("should return an undefined flavor", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.flavor).to.equal(undefined);
    });

    it("should return an owner model", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.owner).to.not.be.undefined;
    });

    it("should return a Player.Killer player given a killer", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.player).to.equal(Player.Killer);
    });

    it("should return a Player.Killer player given a survivor", () => {
        const model = new Model(
            {
                ...factoriesMock,
                killer: { ...factoriesMock.killer, exists: () => false },
            } as unknown as Factories,
            survivor
        );
        model.initialize();
        expect(model.player).to.equal(Player.Survivor);
    });

    it("should not call setOwner if model is empty", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            { owner: killer.owner } as unknown as Perk
        );
        model.initialize();
        expect(model.owner).to.be.undefined;
    });

    it("should default to the 3rd perk", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.rarity).to.equal(survivor.rarity[2]);
        expect(model.tier).to.equal(3);
    });

    it("should return the 2nd tier when set", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        const description = model.description;
        model.setTier(2);
        expect(model.rarity).to.equal(survivor.rarity[1]);
        expect(model.tier).to.equal(2);
        expect(model.description).to.not.equal(description);
    });

    it("should return the 1st tier when set", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        const description = model.description;
        model.setTier(1);
        expect(model.rarity).to.equal(survivor.rarity[0]);
        expect(model.tier).to.equal(1);
        expect(model.description).to.not.equal(description);
    });
});
