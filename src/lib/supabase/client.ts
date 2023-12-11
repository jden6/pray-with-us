import {createClient} from '@supabase/supabase-js';
import {Database} from '@/lib/supabase/schema';

export const supa = () => {
  return createClient<Database>(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY ?? '',
    {
      global: {fetch: fetch.bind(globalThis)}
    }
  );
};