import React from 'react'
import { Badge, Avatar, AvatarGroup } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

const users = [
  { name: 'علیرضا پورقلام' },
  { name: 'مریم محمدی', src: '' },
  { name: 'رضا احمدی' },
  { name: 'زهرا کریمی' },
  { name: 'حسین نوروزی' },
  { name: 'فاطمه عباسی' },
]

export function BadgeAvatarSection() {
  return (
    <SectionWrapper title="🏷️ نشانه و آواتار">
      <SubSection title="حالت‌های نشانه">
        {(['default','primary','secondary','success','warning','error','info','outline'] as const).map(v => (
          <Badge key={v} variant={v}>{v}</Badge>
        ))}
      </SubSection>

      <SubSection title="نشانه با نقطه">
        <Badge variant="success" dot>آنلاین</Badge>
        <Badge variant="error"   dot>آفلاین</Badge>
        <Badge variant="warning" dot>مشغول</Badge>
        <Badge variant="primary" dot>جدید</Badge>
      </SubSection>

      <SubSection title="نشانه قابل حذف">
        <Badge variant="primary"   removable onRemove={() => alert('حذف شد')}>React</Badge>
        <Badge variant="secondary" removable onRemove={() => {}}>TypeScript</Badge>
        <Badge variant="success"   removable onRemove={() => {}}>RTL</Badge>
      </SubSection>

      <SubSection title="سایزهای نشانه">
        <Badge size="sm" variant="primary">کوچک</Badge>
        <Badge size="md" variant="primary">متوسط</Badge>
        <Badge size="lg" variant="primary">بزرگ</Badge>
      </SubSection>

      <SubSection title="آواتار — سایزها">
        <Avatar size="xs" name="علیرضا" />
        <Avatar size="sm" name="مریم محمدی" />
        <Avatar size="md" name="رضا احمدی" />
        <Avatar size="lg" name="زهرا کریمی" />
        <Avatar size="xl" name="حسین نوروزی" />
      </SubSection>

      <SubSection title="آواتار — وضعیت">
        <Avatar size="lg" name="آنلاین"  status="online"  />
        <Avatar size="lg" name="آفلاین" status="offline" />
        <Avatar size="lg" name="مشغول"  status="busy"    />
        <Avatar size="lg" name="غایب"   status="away"    />
      </SubSection>

      <SubSection title="آواتار — اشکال">
        <Avatar size="lg" name="دایره"  shape="circle" />
        <Avatar size="lg" name="مربع"   shape="square" />
      </SubSection>

      <SubSection title="گروه آواتار">
        <AvatarGroup avatars={users} max={4} size="md" />
        <AvatarGroup avatars={users} max={3} size="lg" />
      </SubSection>
    </SectionWrapper>
  )
}
