const data = require('../');
const Enum = data.Enum;
import { PropertyValidate, Helpers } from './Helpers';

const powers = data.Powers;
describe('#Powers', function() {
    describe('#validate', function() {
        it('should be an array', function(done) {
            Helpers.isArray(done, powers);
        });

        powers.map(item => {
            describe(`#${item.index}`, function() {
                it('should be json', function(done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, powers);
                PropertyValidate.id(item, powers);
                PropertyValidate.name(item, powers);
                PropertyValidate.description(item, powers);
                PropertyValidate.powerOwner(
                    item,
                    powers,
                    Enum.PlayerTypes.KILLER
                );

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
                        PropertyValidate.ability(ability, powers, index)
                    );
                });

                PropertyValidate.image(item, powers);
            });
        });
    });
});
