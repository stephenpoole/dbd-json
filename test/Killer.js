const data = require('../');
import { PropertyValidate, Helpers } from './Helpers';

const killers = data.Killers;
describe('#Killers', function() {
    describe('#validate', function() {
        it('should be an array', function(done) {
            Helpers.isArray(done, killers);
        });

        killers.map(item => {
            describe(`#${item.index}`, function() {
                it('should be json', function(done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, killers);
                PropertyValidate.id(item, killers);
                PropertyValidate.name(item, killers);
                PropertyValidate.description(item, killers);
                PropertyValidate.difficulty(item, killers);
                PropertyValidate.power(item, killers);
                PropertyValidate.image(
                    item,
                    killers,
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
                                    data.Enum.PlayerTypes.KILLER
                                );
                            });
                        });
                    });
                });
            });
        });
    });
});
