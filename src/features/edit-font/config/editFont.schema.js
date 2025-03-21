import { z } from 'zod'

export const editFontAttribute = {
  NAME: {
    section: 'name',
    label: '폰트 이름',
    input: { placeholder: '폰트 이름을 입력해주세요.' },
  },
  EXAMPLE: {
    section: 'example',
    label: '예시 문구',
    input: { placeholder: '원하시는 문구를 작성해주세요.' },
  },
}

export const editFontSchema = z.object({
  name: z.string().min(1, { message: '폰트 이름을 입력해주세요.' }),
  example: z.string().min(1, { message: '예시 문구를 입력해주세요.' }),
})
