import {it} from "mocha"
import {expect} from "chai"
import * as categorysService from "./../app/Services/category.services"

describe("CATEGORYS SERVICE", () => {
    it('create', () => {
        expect(categorysService.create('', 1)).to.equal(true)
    })
})