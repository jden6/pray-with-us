import dayjs from 'dayjs';
import {BookmarkIcon} from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {cn} from '@/lib/utils';
import {TPrayView} from '@/schemas/pray.schema';
import ContentParser from '@/app/(layout)/pray/_components/contentParser';
import {Avatar, AvatarFallback} from '@/components/ui/avatar';

const PrayCard = ({title, content, created_at, t_users}: TPrayView & {
  author: string
}) => {
  const avatarName = t_users.name?.length > 2 ? t_users.name?.substring(0, 2) : t_users.name;
  return <>
    <Card>
      <CardHeader>
        <div className={cn('flex', 'justify-between')}>
          <CardTitle className={cn('flex', 'items-center','space-x-2')}>
            <Avatar>
              <AvatarFallback>{avatarName}</AvatarFallback>
            </Avatar>
            <span>{title}</span>
          </CardTitle>
          <BookmarkIcon className={cn('fill-black')}/>
        </div>
        <CardDescription>{t_users.name} {dayjs(created_at).
          format('YYYY-MM-DD')}</CardDescription>
      </CardHeader>
      <CardContent>
        <ContentParser contents={content}/>
        {/*<p>{content}</p>*/}
      </CardContent>
      <CardFooter className={cn('flex', 'justify-between')}>
        {/*<div className={cn('flex', 'space-x-3')}>*/}
        {/*  {tags?.map(tag => <Badge key={tag}>{tag}</Badge>)}*/}
        {/*</div>*/}
        {/*<div className={cn('flex', 'space-x-3')}>*/}
        {/*  /!*<div>{author}</div>*!/*/}
        {/*</div>*/}
      </CardFooter>
    </Card>
  </>;

};

export default PrayCard;