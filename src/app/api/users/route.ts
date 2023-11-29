import {NextResponse} from 'next/server';
import {supa} from '@/lib/supabase/client';
import {userSchema} from '@/schemas/user.schema';

export async function GET(req: Request, res: Response) {
  const users = supa().from('t_users').select();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const createUser = await req.json();
  const validateUser = userSchema.safeParse(createUser);
  if (!validateUser.success) {
    return NextResponse.json(validateUser.error);
  }
  const user = await supa().from('t_users').insert(validateUser.data);

  return NextResponse.json(user);
}

export async function PUT(req: Request, res: Response) {

}