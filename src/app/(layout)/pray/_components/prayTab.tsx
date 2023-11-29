"use client";

import {useState} from 'react';
import {cn} from '@/lib/utils';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
import PrayList from '@/app/(layout)/pray/_components/prayList';

const PrayTab = () => {
  const [tab, setTab] = useState('cell');
  return <Tabs defaultValue="cell" className={cn('col-span-3')}>
    <TabsList>
      <TabsTrigger value="cell" onClick={() => setTab('cell')}>셀 기도제목</TabsTrigger>
      <TabsTrigger value="me" onClick={() => setTab('me')}>내 기도제목</TabsTrigger>
      {/*<TabsTrigger value="vg">마을 기도제목</TabsTrigger>*/}
    </TabsList>
    <PrayList tab={tab}/>
  </Tabs>
}

export default PrayTab