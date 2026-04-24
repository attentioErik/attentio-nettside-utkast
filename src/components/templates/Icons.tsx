import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export const WrenchIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M14.7 6.3a3.5 3.5 0 1 1 4 5.6L8 22.7a2.1 2.1 0 1 1-3-3L15.7 9a3.5 3.5 0 0 1-1-2.7z" />
    <path d="m18 15 4 4" />
  </svg>
)

export const BoltIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
)

export const HammerIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9" />
    <path d="M17.64 15 22 10.64" />
    <path d="m20.91 11.7-1.25-1.25a2.5 2.5 0 0 1 0-3.54L20 6.6a2.5 2.5 0 0 0-3.54-3.54L10.6 8.9a2.5 2.5 0 0 0 0 3.54l1.25 1.25" />
  </svg>
)

export const PaintIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <rect x="3" y="3" width="18" height="6" rx="2" />
    <path d="M7 9v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9" />
    <path d="M12 13v4" />
    <rect x="9" y="17" width="6" height="4" rx="1" />
  </svg>
)

export const HomeIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2z" />
  </svg>
)

export const ShieldIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const ClockIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

export const StarIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true" fill="currentColor" stroke="none">
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3L7 14.2 2 9.3l6.9-1z" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const MailIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
)

export const MapPinIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const CheckIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="m5 12 5 5L20 7" />
  </svg>
)

export const MenuIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

export const CloseIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
)

export const UsersIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

export const TrendingUpIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="m22 7-8.5 8.5-5-5L2 17" />
    <path d="M16 7h6v6" />
  </svg>
)

export const LeafIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
)

export const tjenesteIcons = {
  wrench: WrenchIcon,
  bolt: BoltIcon,
  hammer: HammerIcon,
  paint: PaintIcon,
  home: HomeIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  star: StarIcon,
  users: UsersIcon,
  trending: TrendingUpIcon,
  leaf: LeafIcon,
} as const
