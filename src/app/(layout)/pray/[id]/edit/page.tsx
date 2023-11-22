'use client';

import PrayEditPage from '@/app/(layout)/pray/[id]/PrayEditPage';

const PrayUpdatePage = ({params: {id}}: { params: { id: string; } }) => {
  return (
      <PrayEditPage id={id}/>
  );
};

export default PrayUpdatePage;