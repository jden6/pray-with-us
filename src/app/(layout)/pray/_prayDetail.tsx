import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {cn} from '@/lib/utils';
import {usePrayData} from '@/app/(layout)/pray/[id]/data';
import ContentParser
  from '@/app/(layout)/pray/_components/contentParser';

const PrayDetail = ({id}: {id:string}) => {
  const { data, isLoading } = usePrayData(id);
  const {pray} = data
  if(isLoading) return <div>loading...</div>
  const prayData = pray && pray[0]
  return <Card>
    <CardHeader>
      <CardTitle className={cn('text-lg')}>{prayData?.title}</CardTitle>
      <CardDescription>{prayData?.created_at}</CardDescription>
    </CardHeader>
    <CardContent className={cn('space-y-3')}>
      <div>
        <p className={cn('font-medium')}>{prayData?.user_seq}</p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span
              className="bg-background px-2 text-muted-foreground">기도 제목</span>
        </div>
      </div>
      <div>
        <ContentParser contents={prayData?.content} />
        {/*<ul className={cn('space-y-3')}>*/}
        {/*  {pray?.contents.map(content =>*/}
        {/*      <li key={content.seq}>*/}
        {/*        <p className={cn('font-semibold')}>{content.text}</p>*/}
        {/*      </li>,*/}
        {/*  )}*/}
        {/*</ul>*/}
      </div>
      {/*<div>*/}
      {/*  댓글 영역?*/}
      {/*</div>*/}
    </CardContent>
  </Card>;
};

export default PrayDetail;