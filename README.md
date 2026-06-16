# persian-ui-kit 🇮🇷

A comprehensive React UI component library built for Persian/Iranian web applications.
RTL-first, Vazir font, Jalali calendar, dark mode, and Iran-specific inputs — all in one package.

**[Live Demo →](https://alirewa.github.io/persian-ui-kit/)**

---

## Features

- **RTL-first** — every component is designed right-to-left from the ground up
- **Vazir Font** — built-in Vazir typeface (Regular, Light, Medium, Bold, Black)
- **Jalali Calendar** — full Shamsi/Solar date picker with month & year navigation
- **Dark / Light mode** — via CSS variables, zero flash on load
- **Theme customization** — override primary & secondary colors at runtime
- **Iran-specific inputs** — OTP, phone, national ID (with checksum), price with thousand separator
- **45+ icons** — local SVG React components, no external dependency
- **Accessible** — built on Radix UI primitives (Dialog, Popover, Select, etc.)
- **TypeScript** — fully typed with exported interfaces

---

## Install

```bash
npm install persian-ui-kit
# or
pnpm add persian-ui-kit
# or
yarn add persian-ui-kit
```

---

## Setup

```tsx
// app/layout.tsx (Next.js) or main.tsx (Vite)
import { PersianUIProvider } from 'persian-ui-kit'
import 'persian-ui-kit/styles'

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <PersianUIProvider theme="system">
          {children}
        </PersianUIProvider>
      </body>
    </html>
  )
}
```

---

## Theme Customization

```tsx
<PersianUIProvider
  theme="light"            // 'light' | 'dark' | 'system'
  colors={{
    primary: '#6366F1',    // override primary color
    secondary: '#F59E0B',  // override secondary color
  }}
  radius="lg"              // 'sm' | 'md' | 'lg'
>
  <App />
</PersianUIProvider>
```

---

## Components

### Form Controls
| Component | Description |
|-----------|-------------|
| `<Button>` | 6 variants, 5 sizes, icon support, loading state |
| `<Input>` | Text input with label, hint, error, prefix/suffix |
| `<Select>` | Dropdown with option groups |
| `<Checkbox>` | Checkbox with indeterminate state |
| `<RadioGroup>` | Radio button group |
| `<Switch>` | Toggle switch |
| `<FileUpload>` | Drag-and-drop file uploader |

### Iran-specific 🇮🇷
| Component | Description |
|-----------|-------------|
| `<DatePicker>` | Full Jalali calendar with day/month/year picker modes |
| `<OtpInput>` | OTP code input with auto-focus advance and paste support |
| `<PhoneInput>` | Iranian mobile number input with validation (09xx) |
| `<NationalIdInput>` | National ID input with checksum algorithm validation |
| `<PriceInput>` | Price input with thousand separator and Persian digits |

### Display
| Component | Description |
|-----------|-------------|
| `<Card>` | Card with header, content, footer slots |
| `<Badge>` | Badge in 8 color variants and 3 sizes |
| `<Avatar>` | Avatar with image, initials fallback, and group stacking |
| `<Typography>` | Vazir-powered h1–h6, paragraph, label, caption |
| `<EmptyState>` | Empty state with 8 Persian presets |
| `<Skeleton>` | RTL-aware loading skeleton |
| `<Spinner>` | Loading spinner in multiple sizes and colors |

### Navigation
| Component | Description |
|-----------|-------------|
| `<Tabs>` | Tab panels in 3 visual styles |
| `<Accordion>` | Accordion with single or multiple open mode |
| `<Dropdown>` | Dropdown menu with dividers and icons |
| `<Pagination>` | Persian-numeral pagination with page jump |
| `<Tooltip>` | Hover tooltip with 4 placement options |

### Overlays
| Component | Description |
|-----------|-------------|
| `<Modal>` | Dialog in 5 sizes with close on backdrop |
| `<Drawer>` | Slide-in panel from any of 4 sides |
| `<ToastProvider>` + `useToast` | Toast notifications (success, error, warning, info) |

---

## Usage Examples

```tsx
// Jalali DatePicker
import { DatePicker } from 'persian-ui-kit'

const [date, setDate] = useState(null)
<DatePicker label="تاریخ تولد" value={date} onChange={setDate} persian />
```

```tsx
// OTP Input
import { OtpInput } from 'persian-ui-kit'

<OtpInput length={6} onComplete={(code) => verifyOTP(code)} label="کد تایید" />
```

```tsx
// Persian Toast
import { useToast } from 'persian-ui-kit'

const { success, error } = useToast()
success('ثبت موفق!', 'اطلاعات با موفقیت ذخیره شد')
error('خطا!', 'لطفاً دوباره تلاش کنید')
```

```tsx
// Validators
import { isValidNationalId, isValidIranPhone } from 'persian-ui-kit'

isValidNationalId('0075654428')  // true
isValidIranPhone('09121234567')  // true
```

```tsx
// Persian number utilities
import { toPersianDigits, formatPrice } from 'persian-ui-kit'

toPersianDigits('1404')       // '۱۴۰۴'
formatPrice(1500000)          // '۱٬۵۰۰٬۰۰۰'
```

---

## Icons

45+ local SVG icons as React components — no CDN, no external dependency:

```tsx
import { CalendarIcon, PhoneIcon, UserIcon, SearchIcon } from 'persian-ui-kit'

<CalendarIcon size={20} color="var(--pui-primary)" />
```

---

## Hooks

```tsx
import { useJalali, useTheme } from 'persian-ui-kit'

// Jalali date utilities
const { toJalali, formatJalali, monthName, MONTH_NAMES } = useJalali()

// Theme control
const { theme, resolvedTheme, setTheme } = useTheme()
```

---

## Scripts

```bash
npm run dev          # Start demo app on http://localhost:3333
npm run build        # Build package (ESM + CJS + types)
npm test             # Run unit tests with Vitest
```

---

## License

MIT © [Alireza Pourgholam](https://github.com/Alirewa)
