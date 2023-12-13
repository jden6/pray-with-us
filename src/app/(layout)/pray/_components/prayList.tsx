import {api} from '@/app/_trpc/client';
import {cn} from '@/lib/utils';
import PrayCard from '@/app/(layout)/pray/_components/prayCard';
import {TabsContent} from '@/components/ui/tabs';
import {Card} from '@/components/ui/card';

const PrayList = ({tab}: { tab: string }) => {
  const {data, isLoading} = api.pray.getGroupPrayList.useQuery();

  if (isLoading) {
    return <div className={cn("h-full", "flex", "items-center", "justify-center")}>
      <div>loading...</div>
    </div>;
  }
  return <TabsContent
    value={tab}
    className={cn('space-y-3', 'h-[670px]', 'overflow-y-scroll')}>
    {data && data?.length === 0 && <div className={cn('text-center')}>
      <Card className={cn('flex', 'justify-center', 'items-center', 'h-96')}>
        <span className={cn("font-medium", 'text-2xl')}>기도제목을 등록해주세요</span>
      </Card>
    </div>}
    {data && data?.map(pray =>
      <PrayCard key={pray.pray_seq} {...pray} />,
    )}

  </TabsContent>;
};

export default PrayList;