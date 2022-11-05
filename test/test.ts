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
    it('create', (done) => {
        counterService.create().then(() => { done() }).catch((err) => { done(err) })
    })

    // repositorys.categorys.aggOne().then((d) => console.log(d))
    repositorys.counter.findOne('63662fae8205ac47da3e062f').then((d) => console.log(d))
})