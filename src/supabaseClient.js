// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NIKEPP_ANON_KEY;
// const supabaseKey = process.env.NIKEPP_SUPERBASE_URL;

// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://exyspvbamfrfjvmnwggs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4eXNwdmJhbWZyZmp2bW53Z2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNDI4NTUsImV4cCI6MjAxMDcxODg1NX0.wEeZ8a77jMFORYhfVbh3-yxr400B0Sm0qakLPjn_2Gk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
