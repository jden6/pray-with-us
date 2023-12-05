'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import toast from 'react-hot-toast';
import {useFieldArray, useForm} from 'react-hook-form';
import dayjs from 'dayjs';
import Page from '@/layout/Page';
import {Button} from '@/components/ui/button';
import {
  Card, CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {cn} from '@/lib/utils';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {api} from '@/app/_trpc/client';
import {usePrayData} from '@/app/(layout)/pray/[id]/data';

const PrayPage = ({params: {id: prayId}}: { params: { id: string } }) => {
  const {push} = useRouter();
  const title = prayId === 'new' ? '기도 제목 작성' : '기도';
  const submitText = prayId === 'new' ? '등록' : '수정';

  const {isNew, data, actions} = usePrayData(prayId);
  const {register, handleSubmit, control} = useForm();

  const {fields, prepend, append, remove} = useFieldArray({
    name: 'pray',
    control,
    rules: {
      maxLength: 5,
    },
  });

  const handleAppend = () => {
    if (fields.length >= 5) {
      toast('기도 제목은 최대 5개까지만 추가할 수 있습니다.');
      return;
    }
    append({value: ''}, {
      shouldFocus: true,
    });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  const onSubmit = async ({pray}: any) => {
    if (!pray.length) {
      toast.error('기도 제목을 입력해주세요.');
      return;
    }

    const title = pray[0].value;
    const content = JSON.stringify(pray);
    console.log({title, content})
    await actions.save({title, content})
  };

  useEffect(() => {
    if (!isNew && data?.pray) {
      const {content} = data.pray;
      const parsed = JSON.parse(content || '[]');
      parsed.map(({value}: { value: string }) => {
        append({value}, {
          shouldFocus: true,
        });
      });
    }
  }, [data.pray]);

  return <Page key="what" title={title} actions={[
    <Button key="cancel" onClick={() => push('/pray')}>리스트</Button>]}>

    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <div className={cn('flex', 'justify-between')}>
            <div>
              <CardTitle>새 기도 작성</CardTitle>
              <CardDescription>
                기도 작성일 - {dayjs(new Date()).format('YYYY-MM-DD')}
              </CardDescription>
            </div>
            <Button type="submit">{submitText}</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className={cn('flex', 'flex-col', 'space-y-1.5')}>
            <div className={cn('flex', 'justify-between', 'items-center')}>
              <Label htmlFor="name">기도 제목{'\'s'}</Label>
              <Button variant="outline" size="sm" type="button"
                      className={cn('ml-2')}
                      onClick={handleAppend}>+</Button>
            </div>
            <ul className={cn('space-y-1')}>
              {!fields.length
                ? <li
                  className={cn('flex', 'justify-center', 'items-center',
                    'cursor-pointer',
                    'rounded-lg', 'border-2', 'border-gray-300', 'h-14',
                    'hover:bg-gray-200')}>
                  기도제목을 추가해주세요
                </li>
                : fields.map((field, index) => (
                  <li key={index}
                      className={cn('flex', 'space-x-2', 'items-center')}>
                    <Textarea key={index} placeholder="기도 제목" {...register(
                      `pray.${index}.value`)} />
                    <Button variant="outline" size="sm" type="button"
                            onClick={() => handleRemove(index)}
                    >-</Button>
                  </li>
                ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </form>
  </Page>;
};

export default PrayPage;