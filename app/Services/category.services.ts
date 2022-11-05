import { repositorys } from "../Repositorys"
import { ICategory } from "../Shared/interfaces/category.interface"

export const create = async (title: string): Promise<ICategory> => {
    return await repositorys.categorys.create({ title: title })
}

export const getCategory = async (page_num: number) => {
    return await repositorys.categorys.agg((page_num-1)*10, page_num*10)
}

export const getCategoryById = async (id: string) => {
    return await repositorys.categorys.aggOne(id)
}