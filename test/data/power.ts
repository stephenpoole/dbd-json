import Data from "../../src/lib/locales/en";
import { ModifierType, PlayerType } from "../../src/en";
import { PropertyValidate, Helpers } from "./helpers";

const { powers } = Data;

describe("#powers", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, powers);
        });

        powers.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, powers);
                PropertyValidate.id(item, powers);
                PropertyValidate._name(item, powers);
                PropertyValidate.description(item, powers);
                PropertyValidate.powerOwner(item, powers, PlayerType.Killer);

                PropertyValidate.image(item, powers, ModifierType.Power);
            });
        });
    });
});
