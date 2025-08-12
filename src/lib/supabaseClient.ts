import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hpawlcsswlnmoswlzxqf.supabase.co';
// WARNING: Using a service role key on the client-side is a major security risk.
// This should only be used for temporary debugging and must be replaced with the anon key
// and proper Row Level Security (RLS) policies before production.
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYXdsY3Nzd2xubW9zd2x6eHFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDk4ODUwOCwiZXhwIjoyMDcwNTY0NTA4fQ.xTmvDUYXrslKJ2OHjvIHozT2cvT_VIV2EYwwo9L3QfU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
