import { ICategory, ICategoryCreateInput } from '../Shared/interfaces/category.interface';
import category from './../Model/category.model'

export class categorysRepository {
    constructor(private categoryModel: typeof category) {}

    async create(inputs: ICategoryCreateInput): Promise<ICategory> {
        return await this.categoryModel.create(inputs)
    }

    async agg() {
        return await this.categoryModel.aggregate([
            {
                $lookup: {
                    from: "counters",
                    localField: "_id",
                    foreignField: "category_id",
                    as: "counter"
                }
            },
            {
                $unwind: {
                    "path": "$counter",
                    "preserveNullAndEmptyArrays": true
                }
            }
        ])
    }
}