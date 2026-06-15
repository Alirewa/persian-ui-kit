import React, { useState } from 'react'
import { Pagination } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function PaginationSection() {
  const [p1, setP1] = useState(1)
  const [p2, setP2] = useState(5)
  const [p3, setP3] = useState(3)

  return (
    <SectionWrapper title="📄 صفحه‌بندی">
      <SubSection title="پیش‌فرض — فارسی">
        <Pagination page={p1} totalPages={10} onPageChange={setP1} persian />
      </SubSection>
      <SubSection title="صفحه میانی">
        <Pagination page={p2} totalPages={20} onPageChange={setP2} persian />
      </SubSection>
      <SubSection title="سایزها">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Pagination page={p3} totalPages={15} onPageChange={setP3} size="sm" persian />
          <Pagination page={p3} totalPages={15} onPageChange={setP3} size="md" persian />
          <Pagination page={p3} totalPages={15} onPageChange={setP3} size="lg" persian />
        </div>
      </SubSection>
      <SubSection title="اعداد انگلیسی">
        <Pagination page={p1} totalPages={10} onPageChange={setP1} persian={false} />
      </SubSection>
    </SectionWrapper>
  )
}
