// Supabase configuration
const SUPABASE_URL = 'https://qyobkvllhbtzhtewxzmr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5b2JrdmxsaGJ0emh0ZXd4em1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMjg0NTgsImV4cCI6MjA4ODkwNDQ1OH0.Cd5W7cvz9s6dYbwxFK6jMmyXlGwcReWa5N0gyQ6dhs8';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
