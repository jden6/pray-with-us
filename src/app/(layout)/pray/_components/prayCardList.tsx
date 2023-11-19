import { cn } from '@/lib/utils'
import PrayCard from '@/app/(layout)/pray/_components/prayCard'
import { TabsContent } from '@/components/ui/tabs'
import { prays } from '@/data/prays'

// card component
const PrayCardList = () => {
  return <TabsContent value="me" className={cn('space-y-3', 'h-[670px]', 'overflow-y-scroll')}>
    {prays.map(pray => <PrayCard key={pray.seq} title={pray.title} author={pray.author} contents={pray.contents}
                                 createdAt={pray.createdAt}
                                 tags={['일상', '테스트']}/>)}

  </TabsContent>
}

export default PrayCardList