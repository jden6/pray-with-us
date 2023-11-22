import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {cn} from '@/lib/utils';
import {PrayType} from '@/app/(layout)/pray/pray.type';

const PrayDetail = ({pray}: { pray: PrayType }) => {
  return <Card>
    <CardHeader>
      <CardTitle className={cn('text-lg')}>{pray?.contents[0].text}</CardTitle>
      <CardDescription>{pray?.createdAt}</CardDescription>
    </CardHeader>
    <CardContent className={cn('space-y-3')}>
      <div>
        <p className={cn('font-medium')}>{pray?.author}</p>
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
        <ul className={cn('space-y-3')}>
          {pray?.contents.map(content =>
              <li key={content.seq}>
                <p className={cn('font-semibold')}>{content.text}</p>
              </li>,
          )}
        </ul>
      </div>
      {/*<div>*/}
      {/*  댓글 영역?*/}
      {/*</div>*/}
    </CardContent>
  </Card>;
};

export default PrayDetail;