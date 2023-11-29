import {createClient} from '@supabase/supabase-js';
import {NextResponse} from 'next/server';
import {UserSearchParamSchema} from '@/schemas/user.schema';
import {supa} from '@/lib/supabase/client';
export async function GET(req: Request){
  const {searchParams} = new URL(req.url);
  const searchParamsObject = UserSearchParamSchema.safeParse(searchParams);
  if (!searchParamsObject.success) {
    return NextResponse.json(searchParamsObject.error);
  }
  const {seq} = searchParamsObject.data;

  const {data, error} = await supa().from('t_users').select().eq('seq', seq)

  return NextResponse.json(data)
}

export async function DELETE(req: Request,{ params }: { params: { seq: string } } ) {
  const searchParamsObject = UserSearchParamSchema.safeParse(params);
  console.log(params)
  if (!searchParamsObject.success) {
    return NextResponse.json(searchParamsObject.error);
  }
  const {seq} = searchParamsObject.data;

  const deleteUser = await supa().from('t_users').delete().eq('user_seq', seq)

  return NextResponse.json(deleteUser)
}