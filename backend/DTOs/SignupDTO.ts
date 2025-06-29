import { z } from 'zod'

export const signupSchema = z.object({
    email : z.string().email("the passed format was invalid"),
    password: z.string().min(7, "your password is too short"),
    confirmPassword: z.string(),
}).refine(
    (data) => data.confirmPassword === data.password,
    {
        message: "the credentials do not match",
         path: ["confirmPassword"]
    }
);

export type signupDTO = z.infer<typeof signupSchema>