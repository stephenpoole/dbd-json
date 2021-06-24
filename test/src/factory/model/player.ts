import { expect } from "chai";
import { ItemType, ModifierType } from "../../../../src/index.browser";
import { Player } from "../../../../src/enum";
import Factories from "../../../../src/factories";
import Model from "../../../../src/factory/model/player";

const killer = {
    description:
        "Evan MacMillan idolized his father. It wasn’t just that he was heir to a great fortune, it was the way he ran the estate. Raised under his firm hand, Evan had taken to running the workforce with an iron fist. Production was always high and the MacMillan Estate prospered under father and son. As Archie MacMillan’s mental health slowly degenerated, Evan protected him from the herd who wanted a piece of the fortune. No matter what his father asked of him, Evan would do.<br><br>When Archie MacMillan finally snapped, Evan became his enforcer in what would become known as the worst mass murder in modern history. They never proved that Evan lead over a hundred men into those dark tunnels before detonating the explosives and sealing them to their fate. The tale of the MacMillan Estate is a tale of wealth and power gone very wrong. How many victims fell to the hands of father and son is unknown. No record was ever made of what became of Evan MacMillan. His father is another unsolved puzzle, found in the basement of his own warehouse - dead and abandoned.<br>",
    id: 1,
    index: "TRAPPER",
    name: "The Trapper",
    difficulty: 0,
    power: "BEAR_TRAP",
    perks: ["UNNERVING_PRESENCE", "BRUTAL_STRENGTH", "AGITATION"],
    image: "TR_charSelect_portrait",
};

const survivor = {
    description:
        "A nervous leader, able to locate his allies and increase their effectiveness.<BR><BR>His personal perks, <B>Bond</B>, <B>Prove Thyself</B> and <B>Leader</B>, allow him to get in proximity of other survivors and provide bonuses to their actions as well as his own.",
    name: "Dwight Fairfield",
    id: 1,
    index: "DWIGHT_FAIRFIELD",
    difficulty: 0,
    perks: ["BOND", "PROVE_THYSELF", "LEADER"],
    image: "DF_charSelect_portrait",
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
    power: { getModel: () => ({ data: { index: "POWER" } }) },
    killerPerk: { getModel: () => ({ data: { index: "PERK" } }) },
    survivorPerk: { getModel: () => ({ data: { index: "PERK" } }) },
};

describe("#playerModel", () => {
    it("should return an id", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.id).to.equal(killer.id);
    });

    it("should return a description", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.description).to.equal(killer.description);
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

    it("should return a description", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.description).to.equal(killer.description);
    });

    it("should return a image", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.image).to.equal(killer.image);
    });

    it("should return a difficulty", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.difficulty).to.equal(killer.difficulty);
    });

    it("should return a power given a killer", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.power).to.not.be.undefined;
    });

    it("should not return a power given a survivor", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.power).to.be.undefined;
    });

    it("should not return perks", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.perks.length).to.be.greaterThan(0);
    });

    it("should return the player modifier", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.modifier).to.equal(ModifierType.Player);
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
});
