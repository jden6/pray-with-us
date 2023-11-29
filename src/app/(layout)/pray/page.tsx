import Link from 'next/link';
import Page from '@/layout/Page';
import {cn} from '@/lib/utils';
import NoticeCard from '@/app/(layout)/pray/_components/noticeCard';
import {PraySearch} from '@/app/(layout)/pray/_components/praySearch';
import {Button} from '@/components/ui/button';
import PrayTab from '@/app/(layout)/pray/_components/prayTab';

const PrayPage = () => {
  return <Page title="With Us Pray List"
               actions={[
                 <Link key="write" href="/pray/new"><Button size="sm">새 기도 작성</Button></Link>]}>
    <div className={cn('grid', 'md:grid-cols-4', 'gap-3')}>
      <PrayTab />
      <div className={cn('hidden', 'sm:block', 'space-y-2')}>
        <PraySearch/>
        <NoticeCard/>
      </div>
    </div>
  </Page>;
};

export default PrayPage;