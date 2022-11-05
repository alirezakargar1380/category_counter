import { repositorys } from "../Repositorys"
import { ICategory } from "../Shared/interfaces/category.interface"

export const create = async (title: string): Promise<ICategory> => {
    return await repositorys.categorys.create({ title: title })
}