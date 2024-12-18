import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Workflow", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with OutreachIQ was a game-changer for our project. Their attention to innovative solutions helped us achieve our goals faster. We are grateful for their professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare size={64}/>,
    text: "Automated Outreach Campaign",
    description:
      "Let AI handle your outreach while you focus on closing deals. Reach your audience through email, LinkedIn, or SMS with zero manual effort.",
  },
  {
    icon: <Fingerprint size={64}/>,
    text: "Multi-Channel Communication",
    description:
      "Communicate with prospects where they are, all from one place. Build connections across channels seamlessly with OutreachIQ.",
  },
  {
    icon: <ShieldHalf size={64}/>,
    text: "Smart Insights and Reporting",
    description:
      "Get actionable insights on every campaign. Track open rates, responses, and conversions with OutreachIQ’s powerful analytics.",
  },
  {
    icon: <BatteryCharging size={64}/>,
    text: "Real-Time Preview",
    description:
      "Preview your incoming prospects in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap size={64}/>,
    text: "Customize Workflows",
    description:
      "Create unique workflows that fit your process, not the other way around. Our flexible workflows adapt to your sales strategy.",
  },
  {
    icon: <GlobeLock size={64}/>,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Enterprise",
    price: "$199",
    features: [
      "Full access with unlimited usage",
      "AI assistant for sales insights",
      "Team performance and analytics",
      "Custom CRM integrations",
      "Enterprise-level security",
    ],
  },
  {
    title: "Pro",
    price: "$49",
    features: [
      "Unlimited emails/month",
      "Advanced automation workflow",
      "Advanced analytics & reporting",
      "Multi-channel support",
      "Priority CRM integration",
    ],
  },
  {
    title: "Starter",
    price: "$19",
    features: [
      "500 emails/month",
      "Basic automation workflow",
      "Basic reporting",
      "Email + LinkedIn outreach",
      "CRM integration (limited)",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
