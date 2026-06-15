import React from 'react'
import { FileUpload } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function FileUploadSection() {
  return (
    <SectionWrapper title="📁 آپلود فایل">
      <SubSection title="پیش‌فرض">
        <div style={{ width: '100%' }}>
          <FileUpload label="آپلود مدارک" hint="فایل‌های PNG، JPG، PDF تا ۵ مگابایت" accept=".png,.jpg,.pdf" />
        </div>
      </SubSection>
      <SubSection title="چندفایل">
        <div style={{ width: '100%' }}>
          <FileUpload label="آپلود تصاویر" multiple maxFiles={5} maxSize={5 * 1024 * 1024} accept="image/*" hint="حداکثر ۵ تصویر، هر کدام تا ۵ مگابایت" />
        </div>
      </SubSection>
      <SubSection title="غیرفعال">
        <div style={{ width: '100%' }}>
          <FileUpload label="آپلود غیرفعال" disabled hint="این فیلد در حال حاضر در دسترس نیست" />
        </div>
      </SubSection>
    </SectionWrapper>
  )
}
