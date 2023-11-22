'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { prays } from '@/data/prays'

type prayContextType = {}
export const usePrayData = (id: string) => {
  const [prepared, setPrepared] = useState(false)
  const isNew = id === 'new'

  const data = prays.find(pray => pray.seq === +id)

  useEffect(() => {
    if (isNew) setPrepared(true)

    setPrepared(true)
  }, [isNew])

  const save = (data: any) => {

  }

  return {
    loading: !prepared,
    isNew,
    data: {
      pray: data
    },
    actions: {
      save
    }
  }
}

const PrayContext = createContext({} as prayContextType)

export const usePray = () => useContext(PrayContext)
export const PrayProvider = ({ pray, children }: { pray: any, children: ReactNode }) => {
  return <PrayContext.Provider value={pray}>
    {pray.loading ? 'loading...' : children}
  </PrayContext.Provider>
}