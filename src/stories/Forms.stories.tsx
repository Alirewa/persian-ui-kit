import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import { OtpInput } from '../components/OtpInput'
import { PhoneInput } from '../components/PhoneInput'
import { NationalIdInput } from '../components/NationalIdInput'
import { PriceInput } from '../components/PriceInput'

export default { title: 'Iran-Specific/Forms', parameters: { layout: 'centered' } } satisfies Meta

export const OtpInputDemo = () => {
  const [val, setVal] = useState('')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
      <OtpInput length={6} value={val} onChange={setVal} onComplete={(v) => alert(`کد: ${v}`)} label="کد تایید" hint="کد ۶ رقمی ارسال شده را وارد کنید" />
    </div>
  )
}

export const PhoneInputDemo = () => {
  const [phone, setPhone] = useState('')
  return <PhoneInput value={phone} onChange={(v) => setPhone(v)} fullWidth />
}

export const NationalIdDemo = () => {
  const [id, setId] = useState('')
  return <NationalIdInput value={id} onChange={(v) => setId(v)} fullWidth />
}

export const PriceInputDemo = () => {
  const [price, setPrice] = useState<number>(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <PriceInput value={price} onChange={setPrice} label="قیمت محصول" currency="ریال" fullWidth />
    </div>
  )
}
