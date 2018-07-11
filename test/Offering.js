const data = require('../');
const Enum = data.Enum;
import { PropertyValidate, Helpers } from './Helpers';

const survivorOfferings = data.SurvivorOfferings;
describe('#SurvivorOfferings', function() {
    describe('#validate', function() {
        it('should be an array', function(done) {
            Helpers.isArray(done, survivorOfferings);
        });

        survivorOfferings.map(item => {
            describe(`#${item.index}`, function() {
                it('should be json', function(done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, survivorOfferings);
                PropertyValidate.id(item, survivorOfferings);
                PropertyValidate.name(item, survivorOfferings);
                PropertyValidate.rarity(item, survivorOfferings);
                PropertyValidate.description(item, survivorOfferings);

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

                    item.abilities.map((ability, index) => {
                        describe(`#ability[${index}]`, function() {
                            PropertyValidate.ability(
                                ability,
                                survivorOfferings
                            );
                        });
                    });
                });

                if ('flavor' in item) {
                    PropertyValidate.flavor(item, survivorOfferings);
                }

                PropertyValidate.image(item, survivorOfferings);
            });
        });
    });
});

const killerOfferings = data.KillerOfferings;
describe('#KillerOfferings', function() {
    describe('#validate', function() {
        it('should be an array', function(done) {
            Helpers.isArray(done, killerOfferings);
        });

        killerOfferings.map(item => {
            describe(`#${item.index}`, function() {
                it('should be json', function(done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, killerOfferings);
                PropertyValidate.id(item, killerOfferings);
                PropertyValidate.name(item, killerOfferings);
                PropertyValidate.rarity(item, killerOfferings);
                PropertyValidate.description(item, killerOfferings);

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

                    item.abilities.map((ability, index) => {
                        describe(`#ability[${index}]`, function() {
                            PropertyValidate.ability(ability, killerOfferings);
                        });
                    });
                });

                if ('flavor' in item) {
                    PropertyValidate.flavor(item, killerOfferings);
                }

                PropertyValidate.image(item, killerOfferings);
            });
        });
    });
});

const sharedOfferings = data.SharedOfferings;
describe('#SharedOfferings', function() {
    describe('#validate', function() {
        it('should be an array', function(done) {
            Helpers.isArray(done, sharedOfferings);
        });

        sharedOfferings.map(item => {
            describe(`#${item.index}`, function() {
                it('should be json', function(done) {
                    Helpers.isJSON(done, item);
                });

                PropertyValidate.index(item, sharedOfferings);
                PropertyValidate.id(item, sharedOfferings);
                PropertyValidate.name(item, sharedOfferings);
                PropertyValidate.rarity(item, sharedOfferings);
                PropertyValidate.description(item, sharedOfferings);

                if ('abilities' in item) {
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

                        item.abilities.map((ability, index) => {
                            describe(`#ability[${index}]`, function() {
                                PropertyValidate.ability(
                                    ability,
                                    sharedOfferings
                                );
                            });
                        });
                    });
                }

                if ('flavor' in item) {
                    PropertyValidate.flavor(item, sharedOfferings);
                }

                PropertyValidate.image(item, sharedOfferings);
            });
        });
    });
});
