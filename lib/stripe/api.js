import { createClient } from "@supabase/supabase-js";
import {
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY,
} from "./constants";

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_KEY
);
