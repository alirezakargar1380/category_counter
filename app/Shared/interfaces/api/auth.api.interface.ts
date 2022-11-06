import { Static, Type } from '@sinclair/typebox'

export const IBodyRegister = Type.Object({
  username: Type.String(),
  password: Type.String()
})
export const IBodyLogin = Type.Object({
  username: Type.String(),
  password: Type.String()
})

export type IBodyRegister = Static<typeof IBodyRegister>
export type IBodyLogin = Static<typeof IBodyLogin>