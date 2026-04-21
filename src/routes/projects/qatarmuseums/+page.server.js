import { supabase } from "$lib/supabaseClient";

export async function load() { 
    const { data } = await supabase.from("projects").select(); 
    return { 
        projects: data ?? [], 
    };
 }