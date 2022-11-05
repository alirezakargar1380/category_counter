import { it } from "mocha"
import { expect } from "chai"
import * as categorysService from "./../app/Services/category.services"
import * as counterService from "./../app/Services/counter.service"
import mongooseLoader from "./../app/Loaders/mongoose.loader"
import { repositorys } from "./../app/Repositorys"

// connect to mongoDB
mongooseLoader()

describe("CATEGORYS SERVICE", () => {
    

    it('create', (done) => {
        categorysService
            .create("test title")
            .then(() => {
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

})

describe("COUNTER SERVICE", () => {
    it('min', (done) => {
        counterService.min("6366279cc654fbf47abbfd36").then(() => { done() }).catch((err) => { done(err) })
    })
})