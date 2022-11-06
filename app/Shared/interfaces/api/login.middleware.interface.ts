import { Static, Type } from '@sinclair/typebox'

export const ILoginMiddlewareHeaders = Type.Object({
    authorization: Type.String(),
})

export type ILoginMiddlewareHeaders = Static<typeof ILoginMiddlewareHeaders>