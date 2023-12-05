import {Card, CardContent} from '@/components/ui/card';
import {cn} from '@/lib/utils';

const NoDataCard = () => {
  return <Card>
    <CardContent className={cn('flex', 'items-center', 'justify-center')}>
      <div>등록된 기도제목이 없습니다.</div>
    </CardContent>
  </Card>
}

export default NoDataCard