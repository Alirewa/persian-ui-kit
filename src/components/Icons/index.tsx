import React from 'react'

export interface IconProps {
  size?: number
  color?: string
  className?: string
  strokeWidth?: number
}

function icon(paths: string | string[], opts?: { fill?: boolean }) {
  return function Icon({ size = 20, color = 'currentColor', className, strokeWidth = 2 }: IconProps) {
    const d = Array.isArray(paths) ? paths : [paths]
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={opts?.fill ? color : 'none'}
        stroke={opts?.fill ? 'none' : color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        {d.map((p, i) => <path key={i} d={p} />)}
      </svg>
    )
  }
}

// Navigation
export const ChevronDownIcon   = icon('M6 9l6 6 6-6')
export const ChevronUpIcon     = icon('M18 15l-6-6-6 6')
export const ChevronRightIcon  = icon('M9 18l6-6-6-6')
export const ChevronLeftIcon   = icon('M15 18l-6-6 6-6')
export const ArrowRightIcon    = icon('M5 12h14M12 5l7 7-7 7')
export const ArrowLeftIcon     = icon('M19 12H5M12 19l-7-7 7-7')
export const ArrowUpIcon       = icon('M12 19V5M5 12l7-7 7 7')
export const ArrowDownIcon     = icon('M12 5v14M5 12l7 7 7-7')
export const MenuIcon          = icon('M3 12h18M3 6h18M3 18h18')
export const XIcon             = icon('M18 6L6 18M6 6l12 12')
export const HomeIcon          = icon('M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10')

// Status
export const CheckIcon         = icon('M20 6L9 17l-5-5')
export const CheckCircleIcon   = icon(['M22 11.08V12a10 10 0 1 1-5.93-9.14','M22 4L12 14.01l-3-3'])
export const XCircleIcon       = icon(['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z','M15 9l-6 6M9 9l6 6'])
export const AlertCircleIcon   = icon(['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z','M12 8v4M12 16h.01'])
export const InfoIcon          = icon(['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z','M12 16v-4M12 8h.01'])
export const AlertTriangleIcon = icon('M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4M12 17h.01')

// Actions
export const SearchIcon        = icon('M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z M21 21l-4.35-4.35')
export const EditIcon          = icon('M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z')
export const TrashIcon         = icon('M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6')
export const CopyIcon          = icon('M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z')
export const DownloadIcon      = icon('M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3')
export const UploadIcon        = icon('M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12')
export const RefreshIcon       = icon('M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15')
export const FilterIcon        = icon('M22 3H2l8 9.46V19l4 2v-8.54L22 3z')
export const SortIcon          = icon('M3 6h18M7 12h10M11 18h2')
export const PlusIcon          = icon('M12 5v14M5 12h14')
export const MinusIcon         = icon('M5 12h14')
export const MoreHorizIcon     = icon('M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', { fill: true })
export const MoreVertIcon      = icon('M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', { fill: true })
export const ShareIcon         = icon('M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8 M16 6l-4-4-4 4 M12 2v13')
export const ExternalLinkIcon  = icon('M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14L21 3')
export const LinkIcon          = icon('M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71')

// UI
export const EyeIcon           = icon('M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z')
export const EyeOffIcon        = icon('M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24 M1 1l22 22')
export const LockIcon          = icon('M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4')
export const UnlockIcon        = icon('M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 9.9-1')
export const SettingsIcon      = icon('M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z')
export const UserIcon          = icon('M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z')
export const UsersIcon         = icon('M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z')
export const BellIcon          = icon('M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0')
export const HeartIcon         = icon('M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z')
export const StarIcon          = icon('M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z')
export const CalendarIcon      = icon('M3 4h18v18H3V4z M16 2v4M8 2v4M3 10h18')
export const ClockIcon         = icon('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2')
export const MapPinIcon        = icon('M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z')
export const PhoneIcon         = icon('M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15v1.92z')
export const MailIcon          = icon('M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6')
export const FileIcon          = icon('M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M13 2v7h7')
export const ImageIcon         = icon('M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z M21 15l-5-5L5 21')
export const SendIcon          = icon('M22 2L11 13 M22 2L15 22l-4-9-9-4 22-7z')
export const LoaderIcon        = icon('M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83')
export const ShieldIcon        = icon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z')
export const TagIcon           = icon('M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z M7 7h.01')
export const PackageIcon       = icon('M16.5 9.4l-9-5.19 M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12')
export const CreditCardIcon    = icon('M1 4h22v16H1V4z M1 10h22')
export const ShoppingCartIcon  = icon('M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0')
