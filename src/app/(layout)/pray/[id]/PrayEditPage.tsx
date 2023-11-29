'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useEffect} from 'react';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import {useForm, useFieldArray} from 'react-hook-form';
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
import {trpc} from '@/app/_trpc/client';

const PrayEditPage = ({id}: { id: string }) => {
    const {push} = useRouter();
    const {data} = usePrayData(id);
    const {register, handleSubmit, control} = useForm();

    console.log(data)
    const {fields, prepend, append, remove} = useFieldArray({
      name: 'pray',
      control,
      rules: {
        maxLength: 5
      }
    });

    const handleAppend = () => {
      if(fields.length >= 5){
        toast('기도 제목은 최대 5개까지만 추가할 수 있습니다.');
        return;
      }
      append({value: ''}, {
        shouldFocus: true,
      });
    }

    // const handleRemove = (index: number) => {
    //   console.log(index, fields)
    //   remove(2);
    // }

    const {mutateAsync, error, isLoading: mutateLoading} = trpc.pray.create.useMutation();

    const onSubmit = async ({pray}: any) => {
      if (!pray.length) {
        toast.error('기도 제목을 입력해주세요.');
        return;
      }

      const title = pray[0].value;
      const content = JSON.stringify(pray);
      try {
        // await mutateAsync({title, content});
        console.log(pray)
      } catch (e) {
        return console.error(error);
      }

      // toast.success('기도가 등록되었습니다.');
      // push('/pray');
    };

  // useEffect(() => {
  //   if (data) {
  //     const prayContent = JSON.parse(data?.data?.content);
  //     prayContent.forEach((item: any) => {
  //       append({value: item.value}, {
  //         shouldFocus: true,
  //       });
  //     });
  //   }
  // }, [data]);

    return <form
      onSubmit={handleSubmit(onSubmit)}
    >
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
              <Button size="sm" type="submit"
                      // disabled={mutateLoading}
              >저장</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className={cn('flex', 'flex-col', 'space-y-1.5')}>
            <div className={cn('flex','justify-between', 'items-center')}>
              <Label htmlFor="name">기도 제목{'\'s'}</Label>
              <Button variant="outline" size="sm" type="button"
                      className={cn('ml-2')}
                      onClick={handleAppend}>+</Button>
            </div>
            <ul className={cn('space-y-1')}>
              {!fields.length
                ? <li
                    className={cn('flex', 'justify-center', 'items-center', 'cursor-pointer',
                    'rounded-lg', 'border-2', 'border-gray-300', 'h-14', 'hover:bg-gray-200')}>
                  기도제목을 추가해주세요
                </li>
                : fields.map((field, index) => (
                  <li key={index} className={cn('flex', 'space-x-2', 'items-center')}>
                    <Textarea key={index}
                              placeholder="기도 제목"
                              {...register(`pray.${index}.value`)}
                    />
                    <Button variant="outline" size="sm" type="button"
                            // onClick={() => handleRemove(index+1)}
                    >-</Button>
                  </li>
                ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </form>;
  }
;

export default PrayEditPage;