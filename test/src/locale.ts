import { expect } from "chai";
import { Language } from "../../src";
import Locale from "../../src/locale";
import en from "../../src/locales/en";

describe("#locale", () => {
    it("should set data", () => {
        const locale = new Locale(Language.English);
        expect(locale.data).to.equal(en);
    });

    it("should return the correct language", () => {
        const locale = new Locale(Language.English);
        expect(locale.language).to.equal(Language.English);
    });

    it("should return items", () => {
        const locale = new Locale(Language.English);
        expect(locale.items).to.equal(en.items);
    });

    it("should return killerAddons", () => {
        const locale = new Locale(Language.English);
        expect(locale.killerAddons).to.equal(en.killerAddons);
    });

    it("should return killerOfferings", () => {
        const locale = new Locale(Language.English);
        expect(locale.killerOfferings).to.equal(en.killerOfferings);
    });

    it("should return killerPerks", () => {
        const locale = new Locale(Language.English);
        expect(locale.killerPerks).to.equal(en.killerPerks);
    });

    it("should return killers", () => {
        const locale = new Locale(Language.English);
        expect(locale.killers).to.equal(en.killers);
    });

    it("should return powers", () => {
        const locale = new Locale(Language.English);
        expect(locale.powers).to.equal(en.powers);
    });

    it("should return sharedOfferings", () => {
        const locale = new Locale(Language.English);
        expect(locale.sharedOfferings).to.equal(en.sharedOfferings);
    });

    it("should return survivorAddons", () => {
        const locale = new Locale(Language.English);
        expect(locale.survivorAddons).to.equal(en.survivorAddons);
    });

    it("should return survivorPerks", () => {
        const locale = new Locale(Language.English);
        expect(locale.survivorPerks).to.equal(en.survivorPerks);
    });

    it("should return survivors", () => {
        const locale = new Locale(Language.English);
        expect(locale.survivors).to.equal(en.survivors);
    });

    it("should change the language", () => {
        const locale = new Locale(Language.English);
        locale.changeLanguage(Language.Korean);
        expect(locale.language).to.equal(Language.Korean);
    });

    it("should default to English", () => {
        const locale = new Locale("" as unknown as Language);
        expect(locale.language).to.equal(Language.English);
    });
});
