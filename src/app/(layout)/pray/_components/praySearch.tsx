import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

export function PraySearch () {
  return (
    <div className="flex w-[600px] items-center space-x-2">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="전체"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">이름</SelectItem>
          {/*<SelectItem value="셀"></SelectItem>*/}
        </SelectContent>
      </Select>
      <Input type="text" placeholder="검색" width={600} />
      <Button size="sm" type="submit">검색</Button>
    </div>
  )
}
