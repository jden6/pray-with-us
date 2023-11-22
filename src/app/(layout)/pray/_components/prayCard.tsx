'use client'

import { BookmarkIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { PrayCardProps } from '@/app/(layout)/pray/pray.type'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const PrayCard = ({ seq, tags, contents, author, createdAt }: PrayCardProps) => {
  const { push } = useRouter()
  return <Card onClick={() => push(`/pray/${seq}`)}>
    <CardHeader>
      <div className={cn('flex', 'justify-between')}>
        <CardTitle>{contents[0].text}</CardTitle>
        <BookmarkIcon className={cn('fill-black')}/>
      </div>
      <CardDescription>{author} {createdAt}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className={cn('space-y-1')}>
        {contents?.map((content, index) => <li key={index}>{index + 1}. {content.text}</li>)}
      </ul>
      {/*<p>{content}</p>*/}
    </CardContent>
    <CardFooter className={cn('flex', 'justify-between')}>
      <div className={cn('flex', 'space-x-3')}>
        {tags?.map(tag => <Badge key={tag}>{tag}</Badge>)}
      </div>
      <div className={cn('flex', 'space-x-3')}>
        {/*<div>{author}</div>*/}
      </div>
    </CardFooter>
  </Card>

}

export default PrayCard