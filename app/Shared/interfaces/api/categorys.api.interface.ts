import { Static, Type } from '@sinclair/typebox'

export const User = Type.Object({
  categoryTitle: Type.String(),
  counterNum: Type.Number()
})

export const IReplyCreateCategory = Type.Object({
  title: Type.String()
})

export const IParamGetCategorys = Type.Object({
  page_num: Type.String()
})

export const IParamGetCategoryById = Type.Object({
  category_id: Type.String()
})

export type IBodyCreateCategory = Static<typeof User>
export type IReplyCreateCategory = Static<typeof IReplyCreateCategory>
export type IParamGetCategorys = Static<typeof IParamGetCategorys>
export type IParamGetCategoryById = Static<typeof IParamGetCategoryById>