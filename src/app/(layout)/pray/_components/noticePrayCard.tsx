import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {cn} from '@/lib/utils';

const NoticePrayCard = () => {
  return <Card>
    <CardHeader>
      <CardTitle>특별 기도제목</CardTitle>
    </CardHeader>
    <CardContent className={cn('space-y-3')}>
      <div>기도제목 1</div>
      <div>기도제목 2</div>
    </CardContent>
  </Card>;
};

export default NoticePrayCard;