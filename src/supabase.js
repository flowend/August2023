import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zikxrlkxenvuwrxxbfra.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppa3hybGt4ZW52dXdyeHhiZnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0MTA3NTksImV4cCI6MjAwMzk4Njc1OX0.AipYH_LO6Zu_WqoepmARqtG1EZ-vY2Nb6BGsGMLIhhs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
