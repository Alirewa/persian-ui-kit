# persian-ui-kit 🇮🇷

کامپوننت‌های UI فارسی برای React — با پشتیبانی کامل از RTL، فونت وزیر، تقویم شمسی، تم دارک/لایت، و اعتبارسنجی‌های اختصاصی ایران.

> Persian React UI Kit with RTL, Jalali Calendar, Dark Mode, and Iran-specific form inputs.

---

## نصب | Install

```bash
pnpm add persian-ui-kit
# یا
npm install persian-ui-kit
# یا
yarn add persian-ui-kit
```

## راه‌اندازی | Setup

```tsx
// app/layout.tsx (Next.js)
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

## تنظیم تم | Theme Customization

```tsx
<PersianUIProvider
  theme="light"           // 'light' | 'dark' | 'system'
  colors={{
    primary: '#6366F1',   // رنگ اصلی
    secondary: '#F59E0B', // رنگ فرعی
  }}
  radius="lg"             // 'sm' | 'md' | 'lg'
>
  ...
</PersianUIProvider>
```

## فونت وزیر | Vazir Font

پس از نصب، فایل‌های فونت را از پکیج `vazir-font` به پوشه `public/fonts` کپی کنید:

```bash
# Next.js
cp node_modules/vazir-font/dist/Vazir*.woff2 public/fonts/
```

یا آن‌ها را در `src/assets/fonts/` قرار دهید تا به صورت خودکار bundle شوند.

---

## کامپوننت‌ها | Components

### فرم‌ها
| کامپوننت | توضیح |
|----------|--------|
| `<Button>` | دکمه با ۶ حالت و ۵ سایز |
| `<Input>` | ورودی متن با label، hint، error |
| `<Select>` | انتخاب با گروه‌بندی |
| `<Checkbox>` | چک‌باکس با حالت indeterminate |
| `<RadioGroup>` | انتخاب رادیویی |
| `<Switch>` | کلید آن/آف |
| `<FileUpload>` | آپلود با drag-drop فارسی |

### ایران-خاص 🇮🇷
| کامپوننت | توضیح |
|----------|--------|
| `<DatePicker>` | تقویم شمسی کامل با year/month picker |
| `<OtpInput>` | ورود کد OTP با focus خودکار |
| `<PhoneInput>` | شماره موبایل ایرانی با اعتبارسنجی |
| `<NationalIdInput>` | کد ملی با الگوریتم کنترل |
| `<PriceInput>` | ورود قیمت با جداکننده هزار |

### نمایش
| کامپوننت | توضیح |
|----------|--------|
| `<Card>` | کارت با header/footer |
| `<Badge>` | نشانه با ۸ رنگ |
| `<Avatar>` | آواتار + گروه |
| `<Typography>` | تایپوگرافی وزیر h1–h6 |
| `<EmptyState>` | حالت خالی با ۸ preset فارسی |
| `<Skeleton>` | skeleton loader راستچین |
| `<Spinner>` | لودینگ |

### ناوبری
| کامپوننت | توضیح |
|----------|--------|
| `<Tabs>` | تب با ۳ حالت |
| `<Accordion>` | آکاردئون single/multiple |
| `<Dropdown>` | منو کشویی با submenu |
| `<Pagination>` | صفحه‌بندی فارسی |
| `<Tooltip>` | راهنمای hover |

### بازشوها
| کامپوننت | توضیح |
|----------|--------|
| `<Modal>` | مودال با ۵ سایز |
| `<Drawer>` | کشو از ۴ طرف |
| `<ToastProvider>` + `useToast` | اعلان‌های فارسی |

---

## مثال‌ها | Examples

```tsx
// DatePicker شمسی
import { DatePicker } from 'persian-ui-kit'
const [date, setDate] = useState(null)
<DatePicker label="تاریخ تولد" value={date} onChange={setDate} persian />

// OTP
import { OtpInput } from 'persian-ui-kit'
<OtpInput length={6} onComplete={(code) => verifyOTP(code)} label="کد تایید" />

// Toast فارسی
import { useToast } from 'persian-ui-kit'
const { success, error } = useToast()
success('ثبت موفق!', 'اطلاعات با موفقیت ذخیره شد')

// اعتبارسنجی
import { isValidNationalId, isValidIranPhone } from 'persian-ui-kit'
isValidNationalId('0075654428') // true
isValidIranPhone('09121234567') // true
```

---

## اسکریپت‌ها | Scripts

```bash
pnpm dev           # Storybook روی پورت ۶۰۰۶
pnpm build         # ساخت پکیج (ESM + CJS + types)
pnpm test          # اجرای تست‌ها
pnpm build:storybook  # ساخت Storybook ایستا
```

## انتشار | Publishing

```bash
# ایجاد تگ و انتشار خودکار
git tag v0.1.0
git push origin v0.1.0
# GitHub Actions به صورت خودکار روی npm منتشر می‌کند
```

---

## لایسنس | License

MIT © [Alireza Pourgholam](https://github.com/webdyir)
