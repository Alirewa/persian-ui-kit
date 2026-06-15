import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge, Avatar } from 'persian-ui-kit'
import { HeartIcon, ShareIcon } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function CardsSection() {
  return (
    <SectionWrapper title="🗂️ کارت‌ها">
      <SubSection title="حالت‌های کارت">
        {(['default','outlined','elevated','ghost'] as const).map(v => (
          <Card key={v} variant={v} style={{ width: 200 }}>
            <CardContent>
              <p style={{ margin: 0, fontFamily: 'var(--pui-font-family)', color: 'var(--pui-foreground)', fontSize: 14 }}>
                کارت {v}
              </p>
            </CardContent>
          </Card>
        ))}
      </SubSection>

      <SubSection title="کارت کامل با Header/Footer">
        <Card style={{ width: '100%', maxWidth: 380 }}>
          <CardHeader>
            <CardTitle>محصول ویژه</CardTitle>
            <CardDescription>توضیحات کوتاه درباره این محصول یا خدمت مورد نظر</CardDescription>
          </CardHeader>
          <CardContent>
            <p style={{ margin: 0, fontFamily: 'var(--pui-font-family)', color: 'var(--pui-muted-foreground)', fontSize: 14, lineHeight: 1.7 }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">خرید</Button>
            <Button size="sm" variant="ghost" icon={<HeartIcon size={14}/>}>علاقه‌مندی</Button>
            <Button size="sm" variant="ghost" icon={<ShareIcon size={14}/>}>اشتراک</Button>
          </CardFooter>
        </Card>
      </SubSection>

      <SubSection title="کارت کاربر">
        <Card hoverable style={{ width: 280 }}>
          <CardContent>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
              <Avatar name="علی رضا پورقلام" size="lg" status="online" />
              <div>
                <div style={{ fontFamily: 'var(--pui-font-family)', fontWeight: 700, color: 'var(--pui-foreground)' }}>علیرضا پورقلام</div>
                <div style={{ fontFamily: 'var(--pui-font-family)', fontSize: 12, color: 'var(--pui-muted-foreground)' }}>توسعه‌دهنده فرانت‌اند</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Badge variant="primary">React</Badge>
              <Badge variant="success">TypeScript</Badge>
              <Badge variant="secondary">RTL</Badge>
            </div>
          </CardContent>
        </Card>
      </SubSection>

      <SubSection title="کارت آماری">
        {[
          { label: 'کاربران', value: '۱۲,۴۵۶', change: '+۱۲٪', color: 'success' },
          { label: 'فروش', value: '۸۴,۲۰۰', change: '+۵٪', color: 'primary' },
          { label: 'بازگشتی', value: '۳۴٪', change: '-۲٪', color: 'warning' },
        ].map(s => (
          <Card key={s.label} variant="elevated" style={{ flex: 1, minWidth: 160 }}>
            <CardContent>
              <div style={{ fontFamily: 'var(--pui-font-family)', fontSize: 12, color: 'var(--pui-muted-foreground)', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--pui-font-family)', fontSize: 28, fontWeight: 900, color: 'var(--pui-foreground)', marginBottom: 4 }}>{s.value}</div>
              <Badge variant={s.color as any} size="sm">{s.change}</Badge>
            </CardContent>
          </Card>
        ))}
      </SubSection>
    </SectionWrapper>
  )
}
