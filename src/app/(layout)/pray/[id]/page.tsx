'use client';

import {usePathname, useRouter} from 'next/navigation';
import Page from '@/layout/Page';
import {usePrayData} from '@/app/(layout)/pray/[id]/data';
import {Button} from '@/components/ui/button';
import PrayDetail from '@/app/(layout)/pray/_prayDetail';
import {PrayType} from '@/app/(layout)/pray/pray.type';
import PrayEditPage from '@/app/(layout)/pray/[id]/PrayEditPage';

const PrayPage = ({params: {id: prayId}}: { params: { id: string } }) => {
  const {push} = useRouter();
  const prayData = usePrayData(prayId);
  const {loading, isNew, data, actions: {save}} = prayData;
  const title = prayId === 'new' ? '기도 제목 작성' : '기도';
  // const actionName = prayId === 'new' ? '작성' : '수정';

  return <Page key="what" title={title} actions={
    isNew ? <Button key="save" onClick={save}>저장</Button> :
        <><Button key="edit" onClick={() => push(`/pray/${prayId}/edit`)}>수정</Button>
          <Button key="cancel" onClick={() => push('/pray')}>리스트</Button></>
  }>
    {isNew ? <PrayEditPage id={prayId}/> : loading ? <div>loading...</div> :
        <PrayDetail pray={data.pray as PrayType}/>}
  </Page>;
};

export default PrayPage;