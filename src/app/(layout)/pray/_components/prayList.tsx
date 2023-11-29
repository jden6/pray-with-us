import {trpc} from '@/app/_trpc/client';
import {cn} from '@/lib/utils';
import PrayCard from '@/app/(layout)/pray/_components/prayCard';
import {TabsContent} from '@/components/ui/tabs';
import {Card, CardContent} from '@/components/ui/card';

const PrayList = ({tab}: { tab: string }) => {
  const {data, isLoading} = trpc.pray.getUserResentPray.useQuery(tab);

  console.log(data)
  if (isLoading) {
    return <div className={cn("h-full", "flex", "items-center", "justify-center")}>
      <div>loading...</div>
    </div>;
  }
  return <TabsContent
    value={tab}
    className={cn('space-y-3', 'h-[670px]', 'overflow-y-scroll')}>
    {data && data.data?.length === 0 && <div className={cn('text-center')}>
      <Card>
        <CardContent className={cn('pb-10')}>
          <div className={cn('text-2xl', 'text-gray-500')}>기도제목이 없습니다.</div>
        </CardContent>
      </Card>
    </div>}
    {data && data.data?.map(pray =>
      <PrayCard key={pray.pray_seq} {...pray} />,
    )}

  </TabsContent>;
};

export default PrayList;