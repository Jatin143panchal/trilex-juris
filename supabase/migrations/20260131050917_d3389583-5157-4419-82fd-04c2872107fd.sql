-- Create consultation_requests table
CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  legal_matter_type TEXT NOT NULL,
  case_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can submit a consultation request)
CREATE POLICY "Anyone can submit consultation requests"
ON public.consultation_requests
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view requests (for admin purposes)
CREATE POLICY "Authenticated users can view consultation requests"
ON public.consultation_requests
FOR SELECT
USING (auth.uid() IS NOT NULL);