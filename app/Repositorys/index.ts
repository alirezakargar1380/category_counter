import { categorysRepository } from "./categorys.repo";
import categoryModel from "../Model/category.model";
import { counterRepository } from "./counters.repo";
import { usersRepository } from "./users.repo";
import counterModel from "../Model/counter.model";
import usersModel from "../Model/users.model";

export const repositorys = {
    categorys: new categorysRepository(categoryModel),
    counter: new counterRepository(counterModel),
    user: new usersRepository(usersModel)
}