import {TPrayView} from '@/schemas/pray.schema';
import {cn} from '@/lib/utils';
import PrayCard from '@/app/(layout)/pray/_components/prayCard';

const PrayList = ({list}: {list: TPrayView[]}) => {
  return <div className={cn('space-y-2')}>
    {list.map(item => {
      return <PrayCard key={item.pray_seq} {...item}/>
    })}
  </div>;
}

export default PrayList