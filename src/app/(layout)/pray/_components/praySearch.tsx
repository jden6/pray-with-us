import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export function PraySearch() {
  return (
      <div className="flex items-center space-x-2">
        <Input type="text" placeholder="검색" width={600}/>
        <Button size="sm" type="submit">검색</Button>
      </div>
  );
}
