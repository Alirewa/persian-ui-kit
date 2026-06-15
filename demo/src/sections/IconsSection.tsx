import React, { useState } from 'react'
import * as Icons from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

const iconNames = [
  'ChevronDownIcon','ChevronUpIcon','ChevronRightIcon','ChevronLeftIcon',
  'ArrowRightIcon','ArrowLeftIcon','ArrowUpIcon','ArrowDownIcon',
  'MenuIcon','XIcon','HomeIcon',
  'CheckIcon','CheckCircleIcon','XCircleIcon','AlertCircleIcon','InfoIcon','AlertTriangleIcon',
  'SearchIcon','EditIcon','TrashIcon','CopyIcon','DownloadIcon','UploadIcon',
  'RefreshIcon','FilterIcon','SortIcon','PlusIcon','MinusIcon',
  'MoreHorizIcon','MoreVertIcon','ShareIcon','ExternalLinkIcon','LinkIcon',
  'EyeIcon','EyeOffIcon','LockIcon','UnlockIcon','SettingsIcon',
  'UserIcon','UsersIcon','BellIcon','HeartIcon','StarIcon',
  'CalendarIcon','ClockIcon','MapPinIcon','PhoneIcon','MailIcon',
  'FileIcon','ImageIcon','SendIcon','LoaderIcon','ShieldIcon',
  'TagIcon','PackageIcon','CreditCardIcon','ShoppingCartIcon',
]

export function IconsSection() {
  const [size, setSize] = useState(24)
  const [color, setColor] = useState('var(--pui-foreground)')

  return (
    <SectionWrapper title="🎨 آیکن‌ها — لوکال SVG">
      <SubSection title="کنترل">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontFamily: 'var(--pui-font-family)', flexWrap: 'wrap' }}>
          <label style={{ color: 'var(--pui-foreground)', fontSize: 14 }}>
            سایز: {size}px
            <input type="range" min={14} max={48} value={size} onChange={e => setSize(+e.target.value)} style={{ marginRight: 8 }} />
          </label>
          <label style={{ color: 'var(--pui-foreground)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
            رنگ:
            <select value={color} onChange={e => setColor(e.target.value)} style={{ fontFamily: 'var(--pui-font-family)', padding: '4px 8px', borderRadius: 6, border: '1px solid var(--pui-border)', background: 'var(--pui-input-bg)', color: 'var(--pui-foreground)' }}>
              <option value="var(--pui-foreground)">پیش‌فرض</option>
              <option value="var(--pui-primary)">اصلی (Primary)</option>
              <option value="var(--pui-secondary)">فرعی (Secondary)</option>
              <option value="var(--pui-success)">سبز</option>
              <option value="var(--pui-error)">قرمز</option>
              <option value="var(--pui-warning)">نارنجی</option>
            </select>
          </label>
        </div>
      </SubSection>

      <SubSection title={`${iconNames.length} آیکن`}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 8, width: '100%' }}>
          {iconNames.map(name => {
            const Icon = (Icons as any)[name]
            if (!Icon) return null
            return (
              <div
                key={name}
                title={name}
                onClick={() => navigator.clipboard?.writeText(`<${name} />`).then(() => {})}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                  padding: '12px 8px', borderRadius: 'var(--pui-radius)',
                  border: '1px solid var(--pui-border)', cursor: 'pointer',
                  background: 'var(--pui-surface)',
                  transition: 'all 120ms',
                  fontFamily: 'var(--pui-font-family)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--pui-primary)', e.currentTarget.style.background = 'var(--pui-primary-subtle)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--pui-border)', e.currentTarget.style.background = 'var(--pui-surface)')}
              >
                <Icon size={size} color={color} />
                <span style={{ fontSize: 10, color: 'var(--pui-muted-foreground)', textAlign: 'center', wordBreak: 'break-all', direction: 'ltr' }}>
                  {name.replace('Icon', '')}
                </span>
              </div>
            )
          })}
        </div>
        <p style={{ fontFamily: 'var(--pui-font-family)', fontSize: 12, color: 'var(--pui-muted-foreground)', marginTop: 8 }}>
          💡 روی هر آیکن کلیک کنید تا کد آن کپی شود
        </p>
      </SubSection>
    </SectionWrapper>
  )
}
