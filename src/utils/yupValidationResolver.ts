import { yupResolver } from '@hookform/resolvers/yup'
import { AnyObjectSchema } from 'yup'

export const resolveSchema = (schema: AnyObjectSchema) => yupResolver(schema)
