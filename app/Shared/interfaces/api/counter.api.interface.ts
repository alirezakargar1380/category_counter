import { Static, Type } from '@sinclair/typebox'

export const counterPlus = Type.Object({
    category_id: Type.String(),
})

export const counterMin = Type.Object({
    category_id: Type.String(),
})

export type IParamCounterPlus = Static<typeof counterPlus>
export type IParamCounterMin = Static<typeof counterMin>