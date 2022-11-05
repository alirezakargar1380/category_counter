import { Static, Type } from '@sinclair/typebox'

export const User = Type.Object({
  categoryTitle: Type.String(),
  counterNum: Type.Number()
})

export const IReplyCreateCategory = Type.Object({
  title: Type.String()
})

export type IBodyCreateCategory = Static<typeof User>
export type IReplyCreateCategory = Static<typeof IReplyCreateCategory>