import { PropertyValidate, Helpers } from './Helpers'
import * as Enum from '../enum'

const survivorPerks = require('../data/SurvivorPerks.json')
describe('#SurvivorPerks', function () {
    describe('#validate', function () {
        it('should be an array', function (done) { Helpers.isArray(done, survivorPerks) })

        survivorPerks.map(item => {
            describe(`#${item.index}`, function () {
                it('should be json', function (done) { Helpers.isJSON(done, item) })

                PropertyValidate.index(item, survivorPerks)
                PropertyValidate.id(item, survivorPerks)
                PropertyValidate.name(item, survivorPerks)

                describe('#rarities', function () {
                    it('should be an array', function (done) { Helpers.isArray(done, item.rarity) })
                    it('should have length of 3', function (done) { Helpers.isLength(done, item.rarity, 3) })

                    item.rarity.map((rarity, index) => {
                        describe('#rarity[${index}]', function () {
                            PropertyValidate.rarity(rarity, survivorPerks)
                        })
                    })
                })

                PropertyValidate.perkOwner(item, survivorPerks, Enum.PlayerTypes.SURVIVOR)
                PropertyValidate.description(item, survivorPerks)
                if ('flavor' in item) {
                    PropertyValidate.flavor(item, survivorPerks)
                }
                PropertyValidate.image(item, survivorPerks)

                describe('#tiers', function () {
                    it('should be an array', function (done) { Helpers.isArray(done, item.tiers) })
                    it('should have length of 3', function (done) { Helpers.isLength(done, item.tiers, 3) })

                    item.tiers.map((tier, index) => {
                        describe(`#tier[${index}]`, function () {
                            it('should be an array', function (done) { Helpers.isArray(done, tier) })
                            it('should not be empty', function (done) { Helpers.isNotEmpty(done, tier) })

                            tier.map((str, index1) => {
                                describe(`#tier[${index}][${index1}]`, function () {
                                    PropertyValidate.tier(str, survivorPerks)
                                })
                            })
                        })
                    })

                    it('should match %s count in description', function (done) {
                        Helpers.occurrences(done, item.description, '%s', item.tiers[0].length)
                    })
                })
            })
        })
    })
})

const killerPerks = require('../data/KillerPerks.json')
describe('#KillerPerks', function () {
    describe('#validate', function () {
        it('should be an array', function (done) { Helpers.isArray(done, killerPerks) })

        killerPerks.map(item => {
            describe(`#${item.index}`, function () {
                it('should be json', function (done) { Helpers.isJSON(done, item) })

                PropertyValidate.index(item, killerPerks)
                PropertyValidate.id(item, killerPerks)
                PropertyValidate.name(item, killerPerks)

                describe('#rarities', function () {
                    it('should be an array', function (done) { Helpers.isArray(done, item.rarity) })
                    it('should have length of 3', function (done) { Helpers.isLength(done, item.rarity, 3) })

                    item.rarity.map((rarity, index) => {
                        describe('#rarity[${index}]', function () {
                            PropertyValidate.rarity(rarity, killerPerks)
                        })
                    })
                })

                PropertyValidate.perkOwner(item, killerPerks, Enum.PlayerTypes.KILLER)
                PropertyValidate.description(item, killerPerks)
                if ('flavor' in item) {
                    PropertyValidate.flavor(item, killerPerks)
                }
                PropertyValidate.image(item, killerPerks)

                describe('#tiers', function () {
                    it('should be an array', function (done) { Helpers.isArray(done, item.tiers) })
                    it('should have length of 3', function (done) { Helpers.isLength(done, item.tiers, 3) })

                    item.tiers.map((tier, index) => {
                        describe(`#tier[${index}]`, function () {
                            it('should be an array', function (done) { Helpers.isArray(done, tier) })
                            it('should not be empty', function (done) { Helpers.isNotEmpty(done, tier) })

                            tier.map((str, index1) => {
                                describe(`#tier[${index}][${index1}]`, function () {
                                    PropertyValidate.tier(str, killerPerks)
                                })
                            })
                        })
                    })

                    it('should match %s count in description', function (done) {
                        Helpers.occurrences(done, item.description, '%s', item.tiers[0].length)
                    })
                })
            })
        })
    })
})