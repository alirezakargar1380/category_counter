import { categorysRepository } from "./categorys.repo";
import categoryModel from "../Model/category.model";
import { counterRepository } from "./counters.repo";
import counterModel from "../Model/counter.model";

export default  {
    categorysRepo: new categorysRepository(categoryModel),
    counterRepo: new counterRepository(counterModel)
}