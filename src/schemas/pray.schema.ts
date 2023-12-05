import {z} from 'zod';
import dayjs from 'dayjs';

export const praySchema = z.object({
  pray_seq: z.coerce.number(),
  title: z.string(),
  content: z.string(),
  user_seq: z.coerce.number(),
  created_at: z.date().optional().default(new Date(dayjs().valueOf())),
  updated_at: z.date().optional().default(new Date(dayjs().valueOf())),
  delete_yn: z.string().optional().default('N'),
})

export type TPraySchema = z.infer<typeof praySchema>

export const TPrayCreateSchema = praySchema.pick({
  title: true,
  content: true,
});

export const TPrayUpdateSchema = praySchema.pick({
  pray_seq: true,
  title: true,
  content: true,
});

export type TPrayView = z.infer<typeof praySchema>