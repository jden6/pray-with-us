import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {cn} from '@/lib/utils';

const NoticeCard = () => {
  return <Card>
    <CardHeader>
      <CardTitle>공지사항</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className={cn('space-y-3')}>
        <li>프로토타입 테스트 중입니다.</li>
        <li>서로의 기도제목을 위해 기도해줍시다</li>
      </ul>
    </CardContent>
  </Card>;
};

export default NoticeCard;