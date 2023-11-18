import Page from '@/layout/Page'
import PrayCard from '@/app/(layout)/pray/_components/prayCard'
import { cn } from '@/lib/utils'
import NoticePrayCard from '@/app/(layout)/pray/_components/noticePrayCard'
import { PraySearch } from '@/app/(layout)/pray/_components/praySearch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CellPeopleCard from '@/app/(layout)/pray/_components/CellPeopleCard'

const PrayPage = () => {
  return <Page title="With Us Pray List">
    <Tabs defaultValue="cell">
      <div className={cn('flex', 'mb-3', 'justify-between')}>
        <div>
          <TabsList>
            <TabsTrigger value="cell">셀 기도제목</TabsTrigger>
            <TabsTrigger value="vg">마을 기도제목</TabsTrigger>
          </TabsList>
        </div>
        <PraySearch/>
      </div>
      <TabsContent value="cell">
        <div className={cn('grid', 'sm:grid-cols-3', 'gap-3')}>
          <div className={cn('col-span-2', 'space-y-2', 'h-full', 'overflow-y-scroll')}>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
          </div>
          <div className={cn('hidden', 'sm:block')}>
            <NoticePrayCard/>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="vg">
        <div className={cn('grid', 'sm:grid-cols-3', 'gap-3')}>
          <div className={cn('col-span-2', 'space-y-2', 'h-full', 'overflow-y-scroll')}>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
            <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>
          </div>
          <div className={cn('hidden', 'sm:block', 'space-y-3')}>
            <CellPeopleCard/>
            <NoticePrayCard/>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </Page>
}

export default PrayPage