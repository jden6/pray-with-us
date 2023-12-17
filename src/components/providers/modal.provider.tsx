"use client";
import { useEffect, useState } from "react";
import PrayModal from "@/components/pray.modal";
import ModalDeletePray from '@/components/confirm.modal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PrayModal />
      <ModalDeletePray />
    </>
  );
};

export default ModalProvider;
