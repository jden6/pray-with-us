'use client';

import Link from 'next/link';
import Page from '@/layout/Page';
import {cn} from '@/lib/utils';
import NoticeCard from '@/app/(layout)/pray/_components/noticeCard';
import {Button} from '@/components/ui/button';
import PrayList from '@/components/pray/list';
import {api} from '@/app/_trpc/client';
import {TPrayView} from '@/schemas/pray.schema';
import NoDataCard from '@/app/(layout)/pray/_components/NoDataCard';

const PrayPage = () => {
  const {data, isLoading} = api.pray.getGroupPrayList.useQuery();
  return <Page title="With Us Pray List"
               actions={[
                 <Link key="write" href="/pray/new"><Button size="sm">새 기도
                   작성</Button></Link>]}>
    <div className={cn('grid', 'md:grid-cols-4', 'gap-3')}>
      <div className={cn('col-span-3')}>
        {/*// TODO: loading progress 필요*/}
        {data && <PrayList list={data.data as TPrayView[]}/>}
        {data?.count === 0 && <NoDataCard/>}
      </div>
      <div className={cn('hidden', 'sm:block', 'space-y-2')}>
        {/*<PraySearch/>*/}
        <NoticeCard/>
      </div>
    </div>
  </Page>;
};

export default PrayPage;