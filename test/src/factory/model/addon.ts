import { expect } from "chai";
import { Addon, ItemType, ModifierType } from "../../../../src";
import { Player } from "../../../../src/enum";
import Factories from "../../../../src/factories";
import Model from "../../../../src/factory/model/addon";

const killer = {
    description:
        "A large and heavy Coil spring which add a good amount of strength to the Bear Trap hold.<br><li><b>Slightly increases</b> Bear Trap disarm time.</li>",
    name: "Strong Coil Spring",
    id: 2,
    index: "STRONG_COIL_SPRING",
    owner: "TRAPPER",
    rarity: 0,
    image: "iconAddon_coilSpring",
};

const survivor = {
    description:
        "A tiny Flashlight bulb that packs more wattage for a brighter, more powerful light beam.<br><li><b>Slightly narrows</b> the radius of the Flashlight beam.</li><li><b>Slightly increases</b> the beam's visual brightness.</li><li><b>Slightly increases</b> the Blindness duration.</li>",
    name: "Power Bulb",
    flavor: '"Even the most powerful light cannot pierce through The Black Fog\'s darkness."',
    id: 2,
    index: "POWER_BULB",
    type: 1,
    rarity: 0,
    image: "iconAddon_powerBulb",
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

describe("#addonModel", () => {
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

    it("should return a rarity", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.rarity).to.equal(killer.rarity);
    });

    it("should return a image", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.image).to.equal(killer.image);
    });

    it("should return the addon modifier", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.modifier).to.equal(ModifierType.Addon);
    });

    it("should return an Empty type given a killer", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.type).to.equal(ItemType.Empty);
    });

    it("should return a type given a survivor", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.type).to.equal(survivor.type);
    });

    it("should return a flavor", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.flavor).to.equal(survivor.flavor);
    });

    it("should return an undefined flavor", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.flavor).to.equal(undefined);
    });

    it("should return an owner model given a killer", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.owner).to.not.be.undefined;
    });

    it("should return an undefined owner given a survivor", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.owner).to.be.undefined;
    });

    it("should return a Player.Killer player given a killer", () => {
        const model = new Model(factoriesMock as unknown as Factories, killer);
        model.initialize();
        expect(model.player).to.equal(Player.Killer);
    });

    it("should return a Player.Survivor player given a survivor", () => {
        const model = new Model(factoriesMock as unknown as Factories, survivor);
        model.initialize();
        expect(model.player).to.equal(Player.Survivor);
    });

    it("should not call setOwner if model is empty", () => {
        const model = new Model(
            factoriesMock as unknown as Factories,
            { owner: killer.owner } as unknown as Addon
        );
        model.initialize();
        expect(model.owner).to.be.undefined;
    });
});
