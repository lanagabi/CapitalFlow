export type UserRole = 'borrower' | 'admin' | 'underwriter' | 'sales_rep' | 'super_admin';

export type ApplicationStatus = 'draft' | 'submitted' | 'docs_pending' | 'under_review' | 'approved' | 'counter_offered' | 'declined' | 'funded' | 'withdrawn';

export type ApplicationStage = 'new_lead' | 'contacted' | 'docs_pending' | 'under_review' | 'approved' | 'funded' | 'declined' | 'renewal';

export type OfferStatus = 'pending' | 'accepted' | 'declined' | 'expired';

export type DealStatus = 'pending_funding' | 'active' | 'paid_off' | 'defaulted' | 'cancelled';

export type DocumentCategory = 'bank_statement' | 'id' | 'voided_check' | 'tax_return' | 'financial_statement' | 'contract' | 'other';

export interface Profile {
  id: string;
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: UserRole;
  avatar_url: string | null;
  company: string;
  created_at: string;
  updated_at: string;
}

export interface Business {
  id: string;
  owner_id: string;
  legal_name: string;
  dba_name: string;
  ein: string;
  industry: string;
  years_in_business: number;
  website: string;
  address: Record<string, unknown>;
  monthly_revenue: number;
  average_deposits: number;
  existing_loans: number;
  created_at: string;
  updated_at: string;
}

export interface Application {
  id: string;
  business_id: string;
  borrower_id: string;
  assigned_rep_id: string | null;
  assigned_underwriter_id: string | null;
  status: ApplicationStatus;
  stage: ApplicationStage;
  requested_amount: number;
  purpose_of_funds: string;
  risk_score: number;
  fraud_flags: string[];
  revenue_consistency_score: number;
  debt_burden_ratio: number;
  estimated_max_advance: number;
  notes: string;
  tags: string[];
  submitted_at: string | null;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
  business?: Business;
  borrower?: Profile;
  assigned_rep?: Profile;
  assigned_underwriter?: Profile;
}

export interface Document {
  id: string;
  application_id: string;
  uploaded_by: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
  category: DocumentCategory;
  status: 'pending' | 'verified' | 'rejected';
  verified_by: string | null;
  verified_at: string | null;
  created_at: string;
}

export interface Offer {
  id: string;
  application_id: string;
  amount: number;
  factor_rate: number;
  apr: number;
  payment_frequency: 'daily' | 'weekly' | 'monthly';
  payment_amount: number;
  term_days: number;
  total_payback: number;
  status: OfferStatus;
  created_by: string | null;
  expires_at: string | null;
  accepted_at: string | null;
  created_at: string;
}

export interface Deal {
  id: string;
  offer_id: string;
  application_id: string;
  borrower_id: string;
  funded_amount: number;
  factor_rate: number;
  total_payback: number;
  balance_remaining: number;
  status: DealStatus;
  funded_at: string | null;
  maturity_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  deal_id: string;
  amount: number;
  payment_date: string;
  status: 'pending' | 'completed' | 'failed' | 'reversed';
  stripe_payment_id: string | null;
  created_at: string;
}

export interface Message {
  id: string;
  application_id: string | null;
  sender_id: string;
  recipient_id: string;
  subject: string;
  body: string;
  is_read: boolean;
  created_at: string;
}

export interface Task {
  id: string;
  application_id: string | null;
  assigned_to: string;
  created_by: string;
  title: string;
  description: string;
  due_date: string | null;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  completed_at: string | null;
  created_at: string;
}

export interface Note {
  id: string;
  application_id: string | null;
  author_id: string;
  content: string;
  is_internal: boolean;
  created_at: string;
}

export interface Commission {
  id: string;
  deal_id: string;
  rep_id: string;
  amount: number;
  percentage: number;
  status: 'pending' | 'approved' | 'paid';
  paid_at: string | null;
  created_at: string;
}

export interface Renewal {
  id: string;
  deal_id: string;
  application_id: string;
  percent_paid: number;
  eligible_amount: number;
  status: 'eligible' | 'offered' | 'accepted' | 'declined' | 'expired';
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  is_read: boolean;
  link: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  user_id: string | null;
  action: string;
  entity_type: string;
  entity_id: string | null;
  details: Record<string, unknown>;
  ip_address: string;
  created_at: string;
}
