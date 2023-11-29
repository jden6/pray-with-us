import {createClient} from '@supabase/supabase-js';

export const supa = () => {
  return createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY ?? '',
    {
      global: {fetch: fetch.bind(globalThis)}
    }
  );
};