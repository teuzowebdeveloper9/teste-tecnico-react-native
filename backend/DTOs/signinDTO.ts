import {z} from 'zod'

export const signinSchema = z.object({
    email : z.string().email("the passed format was invalid"),
    password : z.string().min(7, "your password is too short")
})

export type SigninDTO = z.infer<typeof signinSchema>
