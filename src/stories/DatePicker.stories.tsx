import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker, JalaliDateValue } from '../components/DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Iran-Specific/DatePicker',
  component: DatePicker,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<JalaliDateValue | null>(null)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <DatePicker label="تاریخ تولد" value={date} onChange={setDate} persian />
        {date && <span style={{ direction: 'rtl', fontFamily: 'Vazir' }}>انتخاب شده: {date.jy}/{date.jm}/{date.jd}</span>}
      </div>
    )
  }
}

export const WithError: Story = {
  args: { label: 'تاریخ شروع', error: 'لطفاً تاریخ را انتخاب کنید', persian: true }
}
