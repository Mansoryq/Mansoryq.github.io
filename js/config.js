// Supabase configuration
const SUPABASE_URL = 'https://qyobkvllhbtzhtewxzmr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_hRjmXPKBeLjZhClghkV_Cg_PyBwcCf9';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
