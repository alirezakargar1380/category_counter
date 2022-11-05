import { categorysRepository } from "./categorys.repo";
import categoryModel from "../Model/category.model";
import { counterRepository } from "./counters.repo";
import counterModel from "../Model/counter.model";

export const repositorys = {
    categorys: new categorysRepository(categoryModel),
    counter: new counterRepository(counterModel)
}