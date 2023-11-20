'use client'

import Page from '@/layout/Page'
import { PrayProvider, usePrayData } from '@/app/(layout)/pray/[id]/data'
import { Button } from '@/components/ui/button'

const PrayPage = ({ params: { id: prayId } }: { params: { id: string } }) => {
  const pray = usePrayData(prayId)
  const { loading, data, action: { save } } = pray
  const title = prayId === 'new' ? '기도 작성' : '기도'
  const actionName = prayId === 'new' ? '작성' : '수정'
  return <Page title={title} actions={[<Button key="saveorupdate" onClick={save}>{actionName}</Button>]}>
    <PrayProvider pray={pray}>
      <div>기도 상세 페이지</div>
    </PrayProvider>
  </Page>
}

export default PrayPage