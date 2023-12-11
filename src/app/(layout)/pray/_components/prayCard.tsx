import dayjs from 'dayjs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {cn} from '@/lib/utils';
import {TPrayView} from '@/schemas/pray.schema';
import ContentParser from '@/app/(layout)/pray/_components/contentParser';
import {TUser} from '@/schemas/user.schema';
import {usePrayModal} from '@/hooks/use.pray.modal';
import {usePraySheet} from '@/hooks/use.pray.sheet';

const PrayCard = ({pray_seq, title, content, created_at, t_users}: TPrayView & {
  t_users?: TUser
}) => {
  // const onOpen = usePrayModal(state => state.onOpen)
  const onOpen = usePraySheet(state => state.onOpen)
  // const avatarName = t_users && (t_users.name?.length > 2 ? t_users.name?.substring(0, 2) : t_users.name);
  return <Card>
    <CardHeader>
      <div className={cn('flex', 'justify-between')}>
        <CardTitle
          className={cn('flex', 'items-center','space-x-2', 'cursor-pointer')}
          onClick={() => onOpen(pray_seq)}>
          {/*<Avatar>*/}
          {/*  <AvatarFallback>{avatarName}</AvatarFallback>*/}
          {/*</Avatar>*/}
          <span>{title}</span>
        </CardTitle>
        {/*<BookmarkIcon className={cn('fill-black')}/>*/}
      </div>
      <CardDescription>{t_users && t_users.name} {dayjs(created_at).
        format('YYYY-MM-DD')}</CardDescription>
    </CardHeader>
    <CardContent>
      <ContentParser contents={content}/>
      {/*<p>{content}</p>*/}
    </CardContent>
    {/*<CardFooter className={cn('flex', 'justify-between')}>*/}
      {/*<div className={cn('flex', 'space-x-3')}>*/}
      {/*  {tags?.map(tag => <Badge key={tag}>{tag}</Badge>)}*/}
      {/*</div>*/}
      {/*<div className={cn('flex', 'space-x-3')}>*/}
      {/*  /!*<div>{author}</div>*!/*/}
      {/*</div>*/}
    {/*</CardFooter>*/}
  </Card>;

};

export default PrayCard;