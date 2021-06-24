import Data from "../../src/lib/locales/en";
import { ModifierType } from "../../src/en";
import { PropertyValidate, Helpers } from "./helpers";

const { items } = Data;

describe("#items", function () {
    describe("#validate", function () {
        it("should be an array", function (done) {
            Helpers.isArray(done, items);
        });

        items.map(item => {
            describe(`#${item.index}`, function () {
                it("should be json", function (done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, items);
                PropertyValidate.id(item, items);
                PropertyValidate._name(item, items);
                PropertyValidate.description(item, items);
                PropertyValidate.rarity(item, items);
                PropertyValidate.itemType(item, items);

                if ("flavor" in item) {
                    PropertyValidate.flavor(item, items);
                }
                PropertyValidate.image(item, items, ModifierType.Item);
            });
        });
    });
});
