import { it } from "mocha"
import { expect } from "chai"
import * as categorysService from "./../app/Services/category.services"
import * as counterService from "./../app/Services/counter.service"
import mongooseLoader from "./../app/Loaders/mongoose.loader"
import { repositorys } from "./../app/Repositorys"
import { ObjectId } from "@fastify/mongodb"

// connect to mongoDB
mongooseLoader()

let category: any

describe("CATEGORYS SERVICE", () => {

    it('create', (done) => {
        categorysService
            .create("test title")
            .then((data) => {
                category = data
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    // it('get category by page number', (done) => {

    // })

})

describe("COUNTER SERVICE", () => {
    it('create counter', (done) => {
        counterService.create(category._id, 1000).then(() => { done() }).catch((err) => { done(err) })
    })

    it('min', (done) => {
        counterService.min(category._id as string).then((counter) => {
            expect(counter.counter_number).to.equal(999)
            done()
        }).catch((err) => { done(err) })
    })

    it('plus', (done) => {
        counterService.plus(category._id as string).then((counter) => {
            expect(counter.counter_number).to.equal(1000)
            done()
        }).catch((err) => { done(err) })
    })
})