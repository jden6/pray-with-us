import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const CellPeopleCard = () => {
  return <Card className={cn('h-60')}>
    <CardHeader>
      <CardTitle>오진희 셀</CardTitle>
    </CardHeader>
    <CardContent className={cn('grid', 'grid-cols-5', 'gap-3')}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png"/>
      </Avatar>
    </CardContent>
  </Card>
}

export default CellPeopleCard