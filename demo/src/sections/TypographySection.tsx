import React from 'react'
import { Typography } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function TypographySection() {
  return (
    <SectionWrapper title="🔤 تایپوگرافی — فونت وزیر">
      <SubSection title="عنوان‌ها">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
          <Typography variant="h1">سرتیتر یک — وزیر بلک</Typography>
          <Typography variant="h2">سرتیتر دو — وزیر اکسترابولد</Typography>
          <Typography variant="h3">سرتیتر سه — وزیر بولد</Typography>
          <Typography variant="h4">سرتیتر چهار — وزیر سمی‌بولد</Typography>
          <Typography variant="h5">سرتیتر پنج — وزیر مدیوم</Typography>
          <Typography variant="h6">سرتیتر شش — وزیر مدیوم</Typography>
        </div>
      </SubSection>

      <SubSection title="متن‌ها">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
          <Typography variant="lead">متن مقدمه — این یک پاراگراف معرفی است که معمولاً بزرگ‌تر از متن معمولی نوشته می‌شود.</Typography>
          <Typography variant="body1">متن اصلی — لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</Typography>
          <Typography variant="body2">متن کوچک — اطلاعات تکمیلی و توضیحات جزئی‌تر در این اندازه نوشته می‌شوند.</Typography>
          <Typography variant="caption">کپشن — برای توضیح تصاویر و جزئیات ریز</Typography>
          <Typography variant="overline">سربرگ کوچک — OVERLINE STYLE</Typography>
        </div>
      </SubSection>

      <SubSection title="رنگ‌ها">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
          {(['default','muted','primary','secondary','success','warning','error'] as const).map(c => (
            <Typography key={c} variant="body1" color={c}>
              رنگ {c} — این متن با رنگ {c} نمایش داده می‌شود
            </Typography>
          ))}
        </div>
      </SubSection>

      <SubSection title="وزن‌ها">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
          {(['light','regular','medium','bold','black'] as const).map(w => (
            <Typography key={w} variant="body1" weight={w}>
              وزن {w} — آزمایش فونت وزیر در این ضخامت
            </Typography>
          ))}
        </div>
      </SubSection>
    </SectionWrapper>
  )
}
