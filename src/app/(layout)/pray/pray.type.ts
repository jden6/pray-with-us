type contentType = {
  seq: number
  text: string
  description?: string
}

export type PrayType = {
  seq: number
  title?: string
  contents: contentType[]
  description?: string
  authorId: number
  author: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  tags?: string[]
}
export type PrayCardProps = {
  seq: number;
  title?: string;
  author: string;
  contents: contentType[];
  createdAt: string;
  tags?: string[];
}