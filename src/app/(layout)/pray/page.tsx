import Page from '@/layout/Page'
import PrayCard from '@/app/(layout)/pray/_components/prayCard'
import { cn } from '@/lib/utils'
import NoticePrayCard from '@/app/(layout)/pray/_components/noticePrayCard'
import { PraySearch } from '@/app/(layout)/pray/_components/praySearch'

const PrayPage = () => {
  return <Page title="With Us Pray List">
    <div className={cn("flex', ")}>
      <PraySearch />
    </div>
    <div className={cn('grid', 'sm:grid-cols-3', "gap-3")}>
      <div className={cn('col-span-2', "space-y-2", "h-[600px]", "overflow-y-scroll")}>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
        <PrayCard title="기도제목" author="지영" content="기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
      </div>
      <div className={cn("hidden", "sm:block")}>
        <NoticePrayCard />
      </div>
    </div>
  </Page>
}

export default PrayPage