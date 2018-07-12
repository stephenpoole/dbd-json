const data = require('../');
import { PropertyValidate, Helpers } from './Helpers';

const survivors = data.Survivors;
describe('#Survivors', function() {
    describe('#validate', function() {
        it('should be an array', function(done) {
            Helpers.isArray(done, survivors);
        });

        survivors.map(item => {
            describe(`#${item.index}`, function() {
                it('should be json', function(done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, survivors);
                PropertyValidate.id(item, survivors);
                PropertyValidate.name(item, survivors);
                PropertyValidate.description(item, survivors);
                PropertyValidate.image(
                    item,
                    survivors,
                    data.Enum.ModifierTypes.PLAYER
                );

                describe('#perks', function() {
                    it('should exist', function(done) {
                        Helpers.exists(done, item, 'perks');
                    });
                    it('should be an array', function(done) {
                        Helpers.isArray(done, item.perks);
                    });
                    it('should have length of 3', function(done) {
                        Helpers.isLength(done, item.perks, 3);
                    });

                    item.perks.map((perk, index) => {
                        describe(`#perk[${index}]`, function() {
                            it('should be a string', function(done) {
                                Helpers.isString(done, perk);
                            });
                            it('should not be empty', function(done) {
                                Helpers.isNotEmpty(done, perk);
                            });
                            it('should be a valid perk', function(done) {
                                Helpers.isPerk(
                                    done,
                                    perk,
                                    data.Enum.PlayerTypes.SURVIVOR
                                );
                            });
                        });
                    });
                });
            });
        });
    });
});
