'use client'

import Page from '@/layout/Page'
import { cn } from '@/lib/utils'
import NoticePrayCard from '@/app/(layout)/pray/_components/noticePrayCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CellPeopleCard from '@/app/(layout)/pray/_components/CellPeopleCard'
import { PraySearch } from '@/app/(layout)/pray/_components/praySearch'
import PrayCardList from '@/app/(layout)/pray/_components/prayCardList'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const PrayPage = () => {
  const { push } = useRouter()
  return <Page title="With Us Pray List"
               actions={[<Button size="sm" key="write" onClick={() => push('/pray/new')}>기도 작성</Button>]}>
    <div className={cn('grid', 'md:grid-cols-4', 'gap-3')}>
      <Tabs defaultValue="me" className={cn('col-span-3')}>
        <TabsList>
          <TabsTrigger value="me">내 기도제목</TabsTrigger>
          <TabsTrigger value="cell">셀 기도제목</TabsTrigger>
          {/*<TabsTrigger value="vg">마을 기도제목</TabsTrigger>*/}
        </TabsList>
        <PrayCardList/>
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