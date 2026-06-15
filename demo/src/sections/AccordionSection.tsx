import React from 'react'
import { Accordion } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

const faq = [
  { value: 'q1', title: 'چگونه می‌توانم حساب کاربری بسازم؟', content: 'برای ساخت حساب کاربری کافیست به صفحه ثبت‌نام مراجعه کرده و اطلاعات خود را وارد کنید.' },
  { value: 'q2', title: 'روش‌های پرداخت چیست؟', content: 'ما از کارت‌های بانکی شتاب، درگاه‌های اینترنتی و کیف پول الکترونیکی پشتیبانی می‌کنیم.' },
  { value: 'q3', title: 'آیا می‌توانم سفارش را لغو کنم؟', content: 'بله، تا ۲۴ ساعت پس از ثبت سفارش امکان لغو وجود دارد. پس از ارسال، لغو ممکن نیست.' },
  { value: 'q4', title: 'مدت زمان تحویل چقدر است؟', content: 'بسته به موقعیت جغرافیایی، تحویل بین ۳ تا ۷ روز کاری طول می‌کشد.' },
]

export function AccordionSection() {
  return (
    <SectionWrapper title="🪗 آکاردئون">
      <SubSection title="حالت پیش‌فرض (تک‌باز)">
        <div style={{ width: '100%' }}>
          <Accordion items={faq} type="single" collapsible variant="default" />
        </div>
      </SubSection>
      <SubSection title="حالت محصور (Bordered)">
        <div style={{ width: '100%' }}>
          <Accordion items={faq} type="single" variant="bordered" />
        </div>
      </SubSection>
      <SubSection title="چندباز (Multiple)">
        <div style={{ width: '100%' }}>
          <Accordion items={faq} type="multiple" variant="default" />
        </div>
      </SubSection>
    </SectionWrapper>
  )
}
