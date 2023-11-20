'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type prayContextType = {}
export const usePrayData = (id: string) => {
  const [prepared, setPrepared] = useState(false)
  const isNew = id === 'new'

  useEffect(() => {
    if (isNew) setPrepared(true)

    setPrepared(true)
  }, [isNew])

  const save = () => {

  }

  return {
    loading: !prepared,
    data: {},
    action: {
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