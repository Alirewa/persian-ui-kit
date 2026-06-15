import React from 'react'
import { Spinner, Skeleton, Card, CardContent } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function SpinnerSkeletonSection() {
  return (
    <SectionWrapper title="⏳ اسپینر و اسکلتون">
      <SubSection title="اسپینر — سایزها">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </SubSection>

      <SubSection title="اسپینر — رنگ‌ها">
        <Spinner color="primary"   size="lg" />
        <Spinner color="secondary" size="lg" />
        <div style={{ background: 'var(--pui-primary)', padding: 12, borderRadius: 8 }}>
          <Spinner color="white" size="lg" />
        </div>
      </SubSection>

      <SubSection title="اسکلتون — متن">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Skeleton height={32} width="60%" />
          <Skeleton height={16} />
          <Skeleton height={16} />
          <Skeleton height={16} width="80%" />
        </div>
      </SubSection>

      <SubSection title="اسکلتون — کارت">
        <Card style={{ width: 300 }}>
          <CardContent>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
              <Skeleton circle width={48} height={48} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Skeleton height={16} width="70%" />
                <Skeleton height={12} width="50%" />
              </div>
            </div>
            <Skeleton height={14} lines={3} />
          </CardContent>
        </Card>
        <Card style={{ width: 300 }}>
          <CardContent>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
              <Skeleton circle width={48} height={48} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Skeleton height={16} width="60%" />
                <Skeleton height={12} width="40%" />
              </div>
            </div>
            <Skeleton height={120} />
          </CardContent>
        </Card>
      </SubSection>
    </SectionWrapper>
  )
}
