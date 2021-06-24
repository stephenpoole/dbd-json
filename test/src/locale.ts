import { expect } from "chai";
import Locale from "../../src/lib/locale";
import en from "../../src/lib/locales/en";

describe("#locale", () => {
    it("should set data", () => {
        const locale = new Locale(en);
        expect(locale.data).to.equal(en);
    });

    it("should return the correct language", () => {
        const locale = new Locale(en);
        expect(locale.language).to.equal(en.language);
    });

    it("should return items", () => {
        const locale = new Locale(en);
        expect(locale.items).to.equal(en.items);
    });

    it("should return killerAddons", () => {
        const locale = new Locale(en);
        expect(locale.killerAddons).to.equal(en.killerAddons);
    });

    it("should return killerOfferings", () => {
        const locale = new Locale(en);
        expect(locale.killerOfferings).to.equal(en.killerOfferings);
    });

    it("should return killerPerks", () => {
        const locale = new Locale(en);
        expect(locale.killerPerks).to.equal(en.killerPerks);
    });

    it("should return killers", () => {
        const locale = new Locale(en);
        expect(locale.killers).to.equal(en.killers);
    });

    it("should return powers", () => {
        const locale = new Locale(en);
        expect(locale.powers).to.equal(en.powers);
    });

    it("should return sharedOfferings", () => {
        const locale = new Locale(en);
        expect(locale.sharedOfferings).to.equal(en.sharedOfferings);
    });

    it("should return survivorAddons", () => {
        const locale = new Locale(en);
        expect(locale.survivorAddons).to.equal(en.survivorAddons);
    });

    it("should return survivorPerks", () => {
        const locale = new Locale(en);
        expect(locale.survivorPerks).to.equal(en.survivorPerks);
    });

    it("should return survivors", () => {
        const locale = new Locale(en);
        expect(locale.survivors).to.equal(en.survivors);
    });
});
