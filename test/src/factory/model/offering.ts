import { expect } from "chai";
import Factories from "../../../../src/lib/factories";
import Model from "../../../../src/lib/factory/model/offering";

const offering = {
    description:
        "Grants <b>100%</b> bonus Bloodpoints in all categories for all players this trial.<br><li>Stacks</li>",
    name: "Bloody Party Streamers",
    flavor: '"A reminder of a bloody good time when people came together, but left screaming."',
    id: 1,
    index: "BLOODY_PARTY_STREAMERS",
    rarity: 2,
    image: "iconFavors_bloodyPartyStreamers",
};

describe("#offeringModel", () => {
    it("should return an id", () => {
        const model = new Model(undefined as unknown as Factories, offering);
        model.initialize();
        expect(model.id).to.equal(offering.id);
    });

    it("should return a index", () => {
        const model = new Model(undefined as unknown as Factories, offering);
        model.initialize();
        expect(model.index).to.equal(offering.index);
    });

    it("should return a name", () => {
        const model = new Model(undefined as unknown as Factories, offering);
        model.initialize();
        expect(model.name).to.equal(offering.name);
    });

    it("should return a description", () => {
        const model = new Model(undefined as unknown as Factories, offering);
        model.initialize();
        expect(model.description).to.equal(offering.description);
    });

    it("should return a image", () => {
        const model = new Model(undefined as unknown as Factories, offering);
        model.initialize();
        expect(model.image).to.equal(offering.image);
    });

    it("should return a rarity", () => {
        const model = new Model(undefined as unknown as Factories, offering);
        model.initialize();
        expect(model.rarity).to.equal(offering.rarity);
    });

    it("should return a flavor", () => {
        const model = new Model(undefined as unknown as Factories, offering);
        model.initialize();
        expect(model.flavor).to.equal(offering.flavor);
    });

    it("should return an undefined flavor", () => {
        const model = new Model(undefined as unknown as Factories, {
            ...offering,
            flavor: undefined,
        });
        model.initialize();
        expect(model.flavor).to.equal(undefined);
    });
});
