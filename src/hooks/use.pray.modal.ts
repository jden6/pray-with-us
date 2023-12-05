import {create} from 'zustand';
import {z} from 'zod';

const modalSchema = z.object({
  id: z.number().optional(),
  isOpen: z.boolean(),
  onOpen: z.function().args(z.number()),
  onClose: z.function(),
});

export const usePrayModal = create<z.infer<typeof modalSchema>>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: number) => set({isOpen: true, id}),
  onClose: () => set({isOpen: false}),
}));