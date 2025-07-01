import {z} from 'zod'

export const createActivitySchema = z.object({
   title : z.string().min(5, "activity title too short"),
   durationInMinutes : z.number().int("Value must be an integer ."),
   intensity : z.string().min(1, "intensity is required")
})

export type CreateAcivityDTO = z.infer<typeof createActivitySchema>