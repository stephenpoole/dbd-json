const data = require('../');
import { PropertyValidate, Helpers } from './Helpers';

const items = data.Items;
describe('#Items', function() {
    describe('#validate', function() {
        it('should be an array', function(done) {
            Helpers.isArray(done, items);
        });

        items.map(item => {
            describe(`#${item.index}`, function() {
                it('should be json', function(done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, items);
                PropertyValidate.id(item, items);
                PropertyValidate.name(item, items);
                PropertyValidate.description(item, items);
                PropertyValidate.rarity(item, items);
                PropertyValidate.itemType(item, items);

                describe('#abilities', function() {
                    it('should exist', function(done) {
                        Helpers.exists(done, item, 'abilities');
                    });
                    it('should be an array', function(done) {
                        Helpers.isArray(done, item.abilities);
                    });
                    it('should not be empty', function(done) {
                        Helpers.isNotEmpty(done, item.abilities);
                    });
                    item.abilities.map((ability, index) =>
                        describe(`#ability[${index}]`, function() {
                            PropertyValidate.ability(ability, items, index);
                        })
                    );
                });

                if ('flavor' in item) {
                    PropertyValidate.flavor(item, items);
                }
                PropertyValidate.image(
                    item,
                    items,
                    data.Enum.ModifierTypes.ITEM
                );
            });
        });
    });
});
