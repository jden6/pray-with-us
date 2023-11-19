import Page from '@/layout/Page'
import PrayCard from '@/app/(layout)/pray/_components/prayCard'
import { cn } from '@/lib/utils'
import NoticePrayCard from '@/app/(layout)/pray/_components/noticePrayCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CellPeopleCard from '@/app/(layout)/pray/_components/CellPeopleCard'
import { PraySearch } from '@/app/(layout)/pray/_components/praySearch'
import PrayCardList from '@/app/(layout)/pray/_components/prayCardList'

const PrayPage = () => {
  return <Page title="With Us Pray List">
    <div className={cn('grid', 'md:grid-cols-4', 'gap-3')}>
      <Tabs defaultValue="me" className={cn('col-span-3')}>
        <TabsList>
          <TabsTrigger value="me">내 기도제목</TabsTrigger>
          <TabsTrigger value="cell">셀 기도제목</TabsTrigger>
          {/*<TabsTrigger value="vg">마을 기도제목</TabsTrigger>*/}
        </TabsList>
        <PrayCardList />
        {/*<TabsContent value="me" className={cn('space-y-3', 'h-[690px]', 'overflow-y-scroll')}>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="me" author="지영" content="내 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*</TabsContent>*/}
        {/*<TabsContent value="cell" className={cn('space-y-3')}>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="cell" author="지영" content="cell 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*</TabsContent>*/}
        {/*<TabsContent value="vg" className={cn('space-y-3')}>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*  <PrayCard title="vg" author="지영" content="vg 기도제목을 입력해주세요" date="2023-03-31" tags={['일상', '테스트']}/>*/}
        {/*</TabsContent>*/}
      </Tabs>
      <div className={cn('hidden', 'sm:block')}>
        <PraySearch/>
        <CellPeopleCard/>
        <NoticePrayCard/>
      </div>
    </div>
  </Page>
}

export default PrayPage