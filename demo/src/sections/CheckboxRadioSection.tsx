import React, { useState } from 'react'
import { Checkbox, RadioGroup, Switch } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function CheckboxRadioSection() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)
  const [radio, setRadio] = useState('card')
  const [sw1, setSw1] = useState(true)
  const [sw2, setSw2] = useState(false)

  return (
    <SectionWrapper title="☑️ چک‌باکس، رادیو و سوئیچ">
      <SubSection title="چک‌باکس">
        <Checkbox label="موافقم با شرایط و قوانین" checked={checked1} onCheckedChange={setChecked1} />
        <Checkbox label="دریافت خبرنامه" checked={checked2} onCheckedChange={setChecked2} hint="هفته‌ای یکبار ایمیل دریافت می‌کنید" />
        <Checkbox label="حالت Indeterminate" indeterminate />
        <Checkbox label="غیرفعال" disabled />
        <Checkbox label="غیرفعال و تیک‌دار" disabled checked />
      </SubSection>

      <SubSection title="سایزهای چک‌باکس">
        <Checkbox label="کوچک" size="sm" />
        <Checkbox label="متوسط" size="md" />
        <Checkbox label="بزرگ" size="lg" />
      </SubSection>

      <SubSection title="رادیو باتن">
        <RadioGroup
          label="روش پرداخت"
          value={radio}
          onValueChange={setRadio}
          options={[
            { value: 'card',   label: 'کارت بانکی',   hint: 'ویزا، مستر، شتاب' },
            { value: 'wallet', label: 'کیف پول',       hint: 'موجودی فعلی: ۲۵۰,۰۰۰ تومان' },
            { value: 'cash',   label: 'پرداخت نقدی',  hint: 'پرداخت در محل' },
            { value: 'pos',    label: 'کارت‌خوان',     disabled: true },
          ]}
        />
      </SubSection>

      <SubSection title="رادیو افقی">
        <RadioGroup
          value={radio}
          onValueChange={setRadio}
          orientation="horizontal"
          options={[
            { value: 'day',   label: 'روزانه' },
            { value: 'week',  label: 'هفتگی' },
            { value: 'month', label: 'ماهانه' },
          ]}
        />
      </SubSection>

      <SubSection title="سوئیچ">
        <Switch label="حالت تاریک" checked={sw1} onCheckedChange={setSw1} />
        <Switch label="اعلان‌ها" checked={sw2} onCheckedChange={setSw2} hint="دریافت پوش نوتیفیکیشن" />
        <Switch label="VPN" disabled />
        <Switch label="سوئیچ بزرگ" size="lg" checked={sw1} onCheckedChange={setSw1} />
        <Switch label="سوئیچ کوچک" size="sm" checked={sw2} onCheckedChange={setSw2} />
      </SubSection>
    </SectionWrapper>
  )
}
