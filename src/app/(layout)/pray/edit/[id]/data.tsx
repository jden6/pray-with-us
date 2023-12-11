'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {api} from '@/app/_trpc/client';

type prayContextType = {}
export const usePrayData = (id: number | string) => {
  const [prepared, setPrepared] = useState(false);
  const isNew = id === 'new';

  const {data, isLoading} = api.pray.getOne.useQuery(+id, {
    enabled: !isNew,
  });
  const {mutateAsync: create} = api.pray.create.useMutation();
  const {mutateAsync: update} = api.pray.update.useMutation();

  useEffect(() => {
    if (isNew) setPrepared(true);

    // setPrepared(true);
  }, [isNew]);

  const save = async (data: { title: string, content: string }) => {
    if (isNew) {
      try {
        await create(data);
        toast('기도 제목이 등록되었습니다.');
      } catch (e) {
        console.error(e);
        toast('기도 제목 등록에 실패했습니다.\n현상이 지속될 경우 관리자에게 문의 바랍니다.');
      }
    } else {
      try {
        await update({pray_seq: +id, ...data});
        toast('기도 제목이 수정되었습니다.');
      } catch (e) {
        console.error(e);
        toast('기도 제목 수정이 실패했습니다.\n현상이 지속될 경우 관리자에게 문의 바랍니다.');
      }
    }
  };

  return {
    isLoading: !isNew && isLoading,
    isNew,
    data: {
      pray: data,
    },
    actions: {
      save,
    },
  };
};

const PrayContext = createContext({} as prayContextType);

export const usePray = () => useContext(PrayContext);
export const PrayProvider = ({children}: { children: ReactNode }) => {
  const value = usePray();
  return <PrayContext.Provider value={{...value}}>
    {children}
  </PrayContext.Provider>;
};