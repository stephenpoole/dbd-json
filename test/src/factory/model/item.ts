import { expect } from "chai";
import Factories from "../../../../src/factories";
import Model from "../../../../src/factory/model/item";

const item = {
    description:
        "A row of small explosive devices wrapped in heavy paper casing. Detonates into loud bangs and intense light flashes. Can be used as a distraction, as a blinding device or to celebrate.<br><li><b>1 charge.</b></li>",
    name: "Chinese Firecracker",
    id: 1,
    flavor: "flavor",
    index: "CHINESE_FIRECRACKER",
    type: 6,
    rarity: 5,
    image: "iconItems_chineseFirecracker",
};

describe("#itemModel", () => {
    it("should return an id", () => {
        const model = new Model(undefined as unknown as Factories, item);
        model.initialize();
        expect(model.id).to.equal(item.id);
    });

    it("should return a index", () => {
        const model = new Model(undefined as unknown as Factories, item);
        model.initialize();
        expect(model.index).to.equal(item.index);
    });

    it("should return a name", () => {
        const model = new Model(undefined as unknown as Factories, item);
        model.initialize();
        expect(model.name).to.equal(item.name);
    });

    it("should return a description", () => {
        const model = new Model(undefined as unknown as Factories, item);
        model.initialize();
        expect(model.description).to.equal(item.description);
    });

    it("should return a image", () => {
        const model = new Model(undefined as unknown as Factories, item);
        model.initialize();
        expect(model.image).to.equal(item.image);
    });

    it("should return a rarity", () => {
        const model = new Model(undefined as unknown as Factories, item);
        model.initialize();
        expect(model.rarity).to.equal(item.rarity);
    });

    it("should return a flavor", () => {
        const model = new Model(undefined as unknown as Factories, item);
        model.initialize();
        expect(model.flavor).to.equal(item.flavor);
    });

    it("should return an undefined flavor", () => {
        const model = new Model(undefined as unknown as Factories, { ...item, flavor: undefined });
        model.initialize();
        expect(model.flavor).to.equal(undefined);
    });

    it("should return an ItemType", () => {
        const model = new Model(undefined as unknown as Factories, item);
        model.initialize();
        expect(model.type).to.equal(item.type);
    });
});
