import { z } from 'zod'

export const fontEditSchema = z.object({
  name: z
    .string()
    .min(2, { message: '폰트 이름은 2글자 이상입니다.' })
    .max(8, { message: '폰트 이름은 8글자 이하입니다.' }),
  preview: z
    .string()
    .min(2, { message: '예시 문구는 2글자 이상입니다.' })
    .max(30, { message: '예시 문구는 30글자 이하입니다.' }),
})
