import { PropertyValidate, Helpers } from './Helpers'

const survivorAddons = require('../data/SurvivorAddons.json')
describe('#SurvivorAddons', function () {
    describe('#validate', function () {
        it('should be an array', function (done) { Helpers.isArray(done, survivorAddons) })

        survivorAddons.map(item => {
            describe(`#${item.index}`, function () {
                it('should be json', function (done) { Helpers.isJSON(done, item) })

                PropertyValidate.index(item, survivorAddons)
                PropertyValidate.id(item, survivorAddons)
                PropertyValidate.name(item, survivorAddons)
                PropertyValidate.addonType(item, survivorAddons)
                PropertyValidate.rarity(item, survivorAddons)
                PropertyValidate.description(item, survivorAddons)

                describe('#abilities', function () {
                    it('should be an array', function (done) { Helpers.isArray(done, item.abilities) })
                    it('should not be empty', function (done) { Helpers.isNotEmpty(done, item.abilities) })

                    item.abilities.map((ability, index) => {
                        describe(`#ability[${index}]`, function () {
                            PropertyValidate.ability(ability, survivorAddons)
                        })
                    })
                })

                PropertyValidate.image(item, survivorAddons)
            })
        })
    })
})

const killerAddons = require('../data/KillerAddons.json')
describe('#KillerAddons', function () {
    describe('#validate', function () {
        it('should be an array', function (done) { Helpers.isArray(done, killerAddons) })

        killerAddons.map(item => {
            describe(`#${item.index}`, function () {
                it('should be json', function (done) { Helpers.isJSON(done, item) })

                PropertyValidate.index(item, killerAddons)
                PropertyValidate.id(item, killerAddons)
                PropertyValidate.name(item, killerAddons)
                PropertyValidate.owner(item, killerAddons)
                PropertyValidate.rarity(item, killerAddons)
                PropertyValidate.description(item, killerAddons)

                describe('#abilities', function () {
                    it('should exist', function (done) { Helpers.exists(done, item, 'abilities') })
                    it('should be an array', function (done) { Helpers.isArray(done, item.abilities) })
                    it('should not be empty', function (done) { Helpers.isNotEmpty(done, item.abilities) })
                    item.abilities.map((ability, index) => PropertyValidate.ability(ability, killerAddons, index))
                })

                PropertyValidate.image(item, killerAddons)
            })
        })
    })
})