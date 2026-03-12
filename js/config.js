// Supabase configuration
// ИНСТРУКЦИЯ: замени значения ниже на свои из Supabase Dashboard → Settings → API
const SUPABASE_URL = 'ВСТАВЬ_СЮДА_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'ВСТАВЬ_СЮДА_SUPABASE_ANON_KEY';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
