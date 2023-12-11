"use client";

import {useEffect, useState} from 'react';
import PraySheet from '@/components/pray.sheet';

const SheetProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) {
    return null;
  }

  return (
    <>
      <PraySheet />
    </>
  );
}

export default SheetProvider