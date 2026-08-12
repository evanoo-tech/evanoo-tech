import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  Gauge,
  Search,
  ShieldCheck,
  MonitorSmartphone,
  Settings2,
  MessagesSquare,
  PenTool,
  Code2,
  Bug,
  Eye,
  Rocket,
  LifeBuoy,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; description: string };

export const features: Feature[] = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Pixel-perfect layouts that adapt fluidly from 4K monitors down to small phones.",
  },
  {
    icon: Gauge,
    title: "Fast Loading Performance",
    description: "Optimised assets, edge caching and lean code for sub-second load times.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Semantic markup, metadata and clean URLs so Google ranks you higher.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Development",
    description: "SSL, hardened APIs and best-practice auth protect your data and customers.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Friendly",
    description: "Mobile-first builds engineered for the 70% of visitors arriving on phones.",
  },
  {
    icon: Settings2,
    title: "Easy to Manage",
    description: "Simple dashboards and CMS so your team updates content without a developer.",
  },
];

export type Package = {
  name: string;
  price: string;
  tagline: string;
  highlight?: boolean;
  bestForLabel?: string;
  bestFor?: string[];
  features: string[];
  delivery?: string;
  cta: string;
};

export const packages: Package[] = [
  {
    name: "Static Website",
    price: "₹4,999",
    tagline: "A polished online presence, live in a week.",
    bestForLabel: "Best For",
    bestFor: ["Personal Portfolio", "Small Business", "Startup Landing Page"],
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "Google Maps",
      "Social Media Links",
      "Free SSL Setup",
      "30 Days Support",
    ],
    delivery: "5–7 Days",
    cta: "Get Started",
  },
  {
    name: "Dynamic Website",
    price: "₹19,999",
    tagline: "Content, users and data — fully under your control.",
    highlight: true,
    features: [
      "Unlimited Pages",
      "Admin Panel",
      "User Login",
      "Database",
      "CMS",
      "Blog",
      "Dashboard",
      "API Integration",
      "Payment Gateway Ready",
      "Analytics",
      "Email Integration",
    ],
    delivery: "10–20 Days",
    cta: "Get Started",
  },
  {
    name: "E-Commerce Website",
    price: "₹29,999",
    tagline: "Sell online with secure payments and full order control.",
    features: [
      "Product Management",
      "Shopping Cart",
      "Secure Checkout",
      "Payment Gateway",
      "Order Tracking",
      "Customer Accounts",
      "Inventory Management",
      "Coupon System",
      "GST Ready",
      "Admin Dashboard",
    ],
    delivery: "15–25 Days",
    cta: "Get Started",
  },
  {
    name: "Custom Web Application",
    price: "₹39,999",
    tagline: "Enterprise-grade platforms built around your workflow.",
    bestForLabel: "Suitable For",
    bestFor: [
      "CRM",
      "ERP",
      "HRMS",
      "Loan Management",
      "Insurance Portal",
      "Healthcare",
      "School Management",
      "SaaS Platform",
    ],
    features: [
      "Custom Dashboard",
      "Authentication",
      "APIs",
      "Reports",
      "Multi User Roles",
      "Cloud Deployment",
      "Enterprise Security",
    ],
    cta: "Request Proposal",
  },
];

export const comparisonRows: { feature: string; values: string[] }[] = [
  { feature: "Responsive Design", values: ["yes", "yes", "yes", "yes"] },
  { feature: "Admin Panel", values: ["no", "yes", "yes", "yes"] },
  { feature: "Database", values: ["no", "yes", "yes", "yes"] },
  { feature: "Payment Gateway", values: ["no", "Optional", "yes", "yes"] },
  { feature: "User Login", values: ["no", "yes", "yes", "yes"] },
  { feature: "API Integration", values: ["no", "Optional", "Optional", "yes"] },
  { feature: "SEO", values: ["yes", "yes", "yes", "yes"] },
  { feature: "Maintenance", values: ["Optional", "Optional", "Optional", "Included"] },
];

export const comparisonColumns = ["Static", "Dynamic", "E-Commerce", "Custom"];

export const processSteps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: MessagesSquare, title: "Requirement Discussion", description: "We map your goals, audience and scope." },
  { icon: PenTool, title: "UI/UX Design", description: "Wireframes and high-fidelity designs for approval." },
  { icon: Code2, title: "Development", description: "Clean, scalable code built in weekly sprints." },
  { icon: Bug, title: "Testing", description: "Cross-device, performance and security testing." },
  { icon: Eye, title: "Client Review", description: "You review on a live staging link and give feedback." },
  { icon: Rocket, title: "Deployment", description: "Go live on fast, secure cloud infrastructure." },
  { icon: LifeBuoy, title: "Support & Maintenance", description: "Ongoing updates, monitoring and improvements." },
];

export const technologies = [
  "React",
  "Next.js",
  "Java Spring Boot",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Cloudflare",
];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "A static business website starts at ₹4,999, dynamic websites from ₹19,999, e-commerce from ₹29,999 and custom applications from ₹39,999. The final quote depends on pages, features and integrations — we share a fixed price before we start.",
  },
  {
    q: "How long does development take?",
    a: "Static sites go live in 5–7 days, dynamic websites in 10–20 days and e-commerce stores in 15–25 days. Custom applications are scoped in phases after the discovery call.",
  },
  {
    q: "Will my website be mobile responsive?",
    a: "Always. Every project is built mobile-first and tested on real phones, tablets and desktops before launch.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We audit your current site, keep what works for SEO, and rebuild the experience with a modern, faster front end — usually without losing your rankings.",
  },
  {
    q: "Do you provide hosting and domain?",
    a: "We can purchase and configure your domain, set up hosting on AWS or Cloudflare, and manage SSL and email — or deploy to infrastructure you already own.",
  },
  {
    q: "Will my website be SEO friendly?",
    a: "Yes. Semantic HTML, metadata, sitemaps, structured data, fast Core Web Vitals and clean URLs are part of every build.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Every package includes launch support, and we offer monthly maintenance plans covering updates, backups, monitoring and small content changes.",
  },
];
