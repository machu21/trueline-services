import React from "react";
import {
  UserCheck,
  BarChart3,
  Globe,
  Stethoscope,
  Code2,
  Briefcase,
} from "lucide-react";

export const services = [
  {
    slug: "general-enterprise",
    title: "General Enterprise",
    desc: "Scale your executive reach with elite calendar management, travel logistics, and dedicated lifestyle support for high-performing founders.",
    icon: React.createElement(UserCheck, { className: "w-10 h-10" }),
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    tag: "Executive Support",
    impactTitle: "Executive Velocity",
    impactDesc: "We reclaim 20+ hours of your week by handling the cognitive load of high-level coordination.",
    features: [
      "Inbox & Calendar Mastery",
      "Executive Travel Logistics",
      "Lifestyle & Personal Assistance",
      "Project Coordination",
      "Stakeholder Communication",
      "Expense Management",
      "Meeting Brief Preparation",
      "Strategic Follow-up Tracking"
    ]
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    desc: "Drive more closings with data-driven lead prospecting, appointment setting, and CRM automation tailored for high-volume brokerage teams.",
    icon: React.createElement(BarChart3, { className: "w-10 h-10" }),
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    tag: "Sales & Growth",
    impactTitle: "Pipeline Consistency",
    impactDesc: "Ensure your CRM never sleeps with 24/7 lead nurturing and precise transaction tracking.",
    features: [
      "Skip Tracing & Data Entry",
      "Cold Calling & Appointment Setting",
      "CRM Lead Management",
      "Transaction Coordination",
      "MLS Listing Management",
      "Market Research & Comp Analysis",
      "Lead Prospecting & Scrubbing",
      "Social Media Property Marketing"
    ]
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    desc: "Optimize your digital storefront with 24/7 technical operations, inventory synchronization, and automated customer success workflows.",
    icon: React.createElement(Globe, { className: "w-10 h-10" }),
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    tag: "Digital Ops",
    impactTitle: "Frictionless Retail",
    impactDesc: "Eliminate stockouts and support delays with automated inventory and omnichannel sync.",
    features: [
      "Inventory & SKU Management",
      "Omnichannel Customer Support",
      "Order Fulfillment Tracking",
      "Storefront Technical Support",
      "Product Description Optimization",
      "Returns & Refund Processing",
      "Supplier & Vendor Liaison",
      "Review Management & Moderation"
    ]
  },
  {
    slug: "health-medical-service",
    title: "Health & Medical",
    desc: "HIPAA-compliant administrative solutions including patient intake coordination, medical billing support, and insurance verification.",
    icon: React.createElement(Stethoscope, { className: "w-10 h-10" }),
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    tag: "Healthcare",
    impactTitle: "HIPAA Compliance",
    impactDesc: "Maintain highest standards of patient data security while reducing front-desk overhead.",
    features: [
      "Patient Intake & Scheduling",
      "Insurance Verification",
      "Medical Billing Support",
      "HIPAA-Compliant Document Handling",
      "EHR/EMR System Management",
      "Prescription Refill Requests",
      "Telehealth Coordination",
      "Referral Processing"
    ]
  },
  {
    slug: "tech-dev",
    title: "Tech & Software",
    desc: "Unburden your engineering team with dedicated support for CRM deployments, marketing automation, and multi-platform integrations.",
    icon: React.createElement(Code2, { className: "w-10 h-10" }),
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    tag: "Tech & Dev",
    impactTitle: "DevOps Efficiency",
    impactDesc: "Move faster by delegating the 'grunt work' of technical documentation and CRM architecture.",
    features: [
      "CRM System Architecture",
      "API & Webhook Integrations",
      "Database Maintenance",
      "Technical Documentation",
      "Bug Report Triaging",
      "QA Testing Assistance",
      "SaaS Workspace Setup",
      "Toolstack Optimization"
    ]
  },
  {
    slug: "finance",
    title: "Finance & Bookkeeping",
    desc: "Maintain impeccable records with highly secure bookkeeping, sensitive data entry, and strict protocol-driven document management.",
    icon: React.createElement(Briefcase, { className: "w-10 h-10" }),
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    tag: "Operations",
    impactTitle: "Audit Readiness",
    impactDesc: "Crystal clear financial visibility with daily reconciliation and secure ledger management.",
    features: [
      "Daily Bookkeeping & Ledger",
      "Accounts Payable/Receivable",
      "Financial Reporting",
      "Payroll Administration",
      "Bank Reconciliation",
      "Tax Prep & Documentation",
      "Invoice Generation",
      "Cash Flow Monitoring"
    ]
  },
];