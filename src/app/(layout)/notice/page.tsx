import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Page from '@/layout/Page'

const NoticePage = () => {
  return <Page title="공지사항">
    <div className={cn('md:grid', 'gap-4', 'md:grid-cols-2', 'lg:grid-cols-4')}>
      <Card>
        <CardHeader>
          <CardTitle>시스템 공지</CardTitle>
          <CardContent>
            <p>공지사항이 없습니다.</p>
          </CardContent>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>시스템 공지</CardTitle>
          <CardContent>
            <p>공지사항이 없습니다.</p>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  </Page>
}

export default NoticePage