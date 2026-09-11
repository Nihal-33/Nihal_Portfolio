import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://roypcedtujdpxfpjccvt.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJveXBjZWR0dWpkcHhmcGpjY3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxMDI3MjMsImV4cCI6MjEwNDY3ODcyM30.8eu89J9Korkol26RTzJnM1Y5sfCS0BxiKOlDfN0IDuU';

export const supabase = createClient(supabaseUrl, supabaseKey);
