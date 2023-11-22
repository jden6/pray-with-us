'use client';

import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {z} from 'zod';
import toast from 'react-hot-toast';
import {useForm, SubmitHandler, useFieldArray} from 'react-hook-form';
import {
  Card, CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {usePrayData} from '@/app/(layout)/pray/[id]/data';

const PrayEditPage = ({id}: { id: string }) => {
      const {loading, data, actions} = usePrayData(id);
      const {register, handleSubmit, control} = useForm();
      const {fields, prepend, append, remove} = useFieldArray({
        name: 'pray',
        control,
      });
      const onSubmit = (data: any) => {
        console.log(data);
        toast.success('기도가 등록되었습니다.');
      };

      useEffect(() => {
        if (data) {
          const {pray} = data;
          console.log(pray?.contents);
          pray?.contents.map((content: any) => {
            append({value: content.text});
          });
        }
      }, []);

      return <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <div className={cn('flex', 'justify-between')}>
              <div>
                <CardTitle>새 기도 작성</CardTitle>
                <CardDescription>
                  기도 작성일 - {dayjs(new Date()).format('YYYY-MM-DD')}
                </CardDescription>
              </div>
              <div>
                <Button size="sm" type="submit">저장</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className={cn('flex', 'flex-col', 'space-y-1.5',
                'max-w-[450px]')}>
              <div className={cn('flex', 'justify-between', 'items-center')}>
                <Label htmlFor="name">기도 제목{'\'s'}</Label>
                <div className={cn('flex', 'space-x-1')}>
                  <Button variant="outline" size="sm" type="button"
                          onClick={() => append({value: ''})}>+</Button>
                  <Button variant="outline" size="sm" type="button"
                          onClick={() => remove(fields.length - 1)}>-</Button>
                </div>
              </div>
              <div className={cn('space-y-1')}>
                {fields.map((field, index) => (
                    <Textarea key={index}
                              placeholder="기도 제목"
                              {...register(`pray.${index}.value`)}
                    />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </form>;
    }
;

export default PrayEditPage;