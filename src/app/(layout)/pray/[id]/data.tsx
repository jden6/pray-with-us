'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {trpc} from '@/app/_trpc/client';

type prayContextType = {}
export const usePrayData = (id: string) => {
  const [prepared, setPrepared] = useState(false);
  const isNew = id === 'new';

  const {data, isLoading} = trpc.pray.getOne.useQuery(+id, {
    enabled: !isNew,
  });

  useEffect(() => {
    if (isNew) setPrepared(true);

    // setPrepared(true);
  }, [isNew]);

  const save = (data: any) => {

  };

  return {
    isLoading: !isNew && isLoading,
    isNew,
    data: {
      pray: data && data.data,
    },
    actions: {
      save,
    },
  };
};

const PrayContext = createContext({} as prayContextType);

export const usePray = () => useContext(PrayContext);
export const PrayProvider = ({children}: { children: ReactNode }) => {
  const value = usePray()
  return <PrayContext.Provider value={{...value}}>
    {children}
  </PrayContext.Provider>;
};