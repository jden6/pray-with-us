import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Page from '@/layout/Page'

const NoticePage = () => {
  return <Page title="공지사항">
    <div className={cn('md:grid', 'gap-4', 'md:grid-cols-2', 'sm:grid-cols-1')}>
      <Card>
        <CardHeader>
          <CardTitle>마을 공지 사항</CardTitle>
          <CardContent>
            <p>공지사항이 없습니다.</p>
          </CardContent>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>이번주 마을 예배 자리</CardTitle>
          <CardContent>
            사진
          </CardContent>
        </CardHeader>
      </Card>
      <Card className={cn('col-span-2')}>
        <CardHeader>
          <CardTitle>오늘의 새 기도제목</CardTitle>
          <CardContent>
            <p>새 기도제목 리스트</p>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  </Page>
}

export default NoticePage