// Shared services data used by both the Services grid and the ServicesCarousel.
// The icon stroke color is set to currentColor so each consumer can theme it.

export const services = [
  {
    title: 'Network Management',
    description:
      'Proactive monitoring, management, and optimization of your entire network infrastructure to ensure maximum uptime and performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="9" y="16" width="6" height="6" rx="1" />
        <path d="M5 8v4h14V8M12 12v4" />
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    description:
      'Seamless migration, deployment, and management of cloud environments on AWS, Azure, and Google Cloud — tailored to your business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions including threat detection, vulnerability management, and compliance to protect your business assets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'AI Business Automation',
    description:
      'Streamline operations with intelligent automation — from AI-powered workflows and chatbots to data-driven insights that boost productivity and cut costs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 8V4M9 4h6" />
        <circle cx="9" cy="14" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
        <path d="M2 13v3M22 13v3" />
      </svg>
    ),
  },
  {
    title: 'Help Desk Support',
    description:
      '24/7 expert technical support for your team — fast response times, remote assistance, and on-site support when you need it most.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: 'Backup & Recovery',
    description:
      'Reliable automated data backup and disaster recovery solutions to keep your business running no matter what happens.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: 'IT Consulting',
    description:
      'Strategic IT guidance and technology roadmap planning aligned with your business goals — helping you make smarter investments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="100%" height="100%">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
]
