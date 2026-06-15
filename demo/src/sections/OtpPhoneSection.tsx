import React, { useState } from 'react'
import { OtpInput, PhoneInput, NationalIdInput, PriceInput, isValidIranPhone, isValidNationalId } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function OtpPhoneSection() {
  const [otp, setOtp] = useState('')
  const [phone, setPhone] = useState('')
  const [nationalId, setNationalId] = useState('')
  const [price, setPrice] = useState<number>(0)

  return (
    <SectionWrapper title="🇮🇷 ورودی‌های اختصاصی ایران">
      <SubSection title="کد OTP">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          <OtpInput
            length={6}
            value={otp}
            onChange={setOtp}
            onComplete={(v) => alert(`کد وارد شده: ${v}`)}
            label="کد تأیید پیامکی"
            hint="کد ۶ رقمی ارسال‌شده به موبایل را وارد کنید"
            persian
          />
          <OtpInput length={4} label="پین کیف پول (۴ رقم)" persian />
        </div>
      </SubSection>

      <SubSection title="شماره موبایل ایرانی">
        <div style={{ width: '100%' }}>
          <PhoneInput
            value={phone}
            onChange={(v, valid) => setPhone(v)}
            fullWidth
            hint="شماره به فرمت ۰۹xxxxxxxx"
          />
          {phone.length === 11 && (
            <div style={{ marginTop: 8, fontSize: 13, fontFamily: 'var(--pui-font-family)', color: isValidIranPhone(phone) ? 'var(--pui-success)' : 'var(--pui-error)' }}>
              {isValidIranPhone(phone) ? '✓ شماره معتبر است' : '✗ شماره نامعتبر است'}
            </div>
          )}
        </div>
      </SubSection>

      <SubSection title="کد ملی">
        <div style={{ width: '100%' }}>
          <NationalIdInput
            value={nationalId}
            onChange={(v) => setNationalId(v)}
            fullWidth
            hint="کد ملی ۱۰ رقمی بدون خط تیره"
          />
          {nationalId.length === 10 && (
            <div style={{ marginTop: 8, fontSize: 13, fontFamily: 'var(--pui-font-family)', color: isValidNationalId(nationalId) ? 'var(--pui-success)' : 'var(--pui-error)' }}>
              {isValidNationalId(nationalId) ? '✓ کد ملی معتبر است' : '✗ کد ملی نامعتبر است'}
            </div>
          )}
        </div>
      </SubSection>

      <SubSection title="ورودی قیمت">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <PriceInput value={price} onChange={setPrice} label="قیمت محصول" currency="تومان" fullWidth />
          <PriceInput label="حقوق ماهانه" currency="ریال" fullWidth />
          <PriceInput label="مبلغ فاکتور" currency="دلار" fullWidth />
        </div>
      </SubSection>
    </SectionWrapper>
  )
}
