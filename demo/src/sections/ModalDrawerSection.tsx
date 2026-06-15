import React, { useState } from 'react'
import { Modal, Drawer, Button, Input } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function ModalDrawerSection() {
  const [modal, setModal] = useState(false)
  const [modalSize, setModalSize] = useState<'sm'|'md'|'lg'>('md')
  const [confirm, setConfirm] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [drawerSide, setDrawerSide] = useState<'right'|'left'|'bottom'>('right')

  return (
    <SectionWrapper title="🪟 مودال و کشو">
      <SubSection title="مودال — سایزها">
        {(['sm','md','lg'] as const).map(s => (
          <Button key={s} variant="outline" onClick={() => { setModalSize(s); setModal(true) }}>
            مودال {s}
          </Button>
        ))}
      </SubSection>

      <SubSection title="مودال تأیید (Confirm)">
        <Button variant="destructive" onClick={() => setConfirm(true)}>حذف حساب کاربری</Button>
      </SubSection>

      <SubSection title="کشو — جهت‌ها">
        {([
          { side: 'right',  label: 'کشو راست (پیش‌فرض)' },
          { side: 'left',   label: 'کشو چپ' },
          { side: 'bottom', label: 'کشو پایین' },
        ] as const).map(d => (
          <Button key={d.side} variant="outline" onClick={() => { setDrawerSide(d.side); setDrawer(true) }}>
            {d.label}
          </Button>
        ))}
      </SubSection>

      {/* Main Modal */}
      <Modal
        open={modal}
        onOpenChange={setModal}
        title="ویرایش اطلاعات"
        description="اطلاعات زیر را تکمیل کنید"
        size={modalSize}
        footer={
          <>
            <Button variant="ghost" onClick={() => setModal(false)}>انصراف</Button>
            <Button onClick={() => setModal(false)}>ذخیره تغییرات</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="نام" placeholder="نام خود را وارد کنید" fullWidth />
          <Input label="نام خانوادگی" placeholder="نام خانوادگی" fullWidth />
          <Input label="ایمیل" type="email" placeholder="example@email.com" fullWidth />
        </div>
      </Modal>

      {/* Confirm Modal */}
      <Modal
        open={confirm}
        onOpenChange={setConfirm}
        title="تأیید حذف"
        size="sm"
        footer={
          <>
            <Button variant="ghost" onClick={() => setConfirm(false)}>انصراف</Button>
            <Button variant="destructive" onClick={() => setConfirm(false)}>بله، حذف کن</Button>
          </>
        }
      >
        <p style={{ fontFamily: 'var(--pui-font-family)', color: 'var(--pui-muted-foreground)', margin: 0 }}>
          آیا مطمئنید؟ این عملیات قابل بازگشت نیست و تمام داده‌های حساب شما حذف خواهد شد.
        </p>
      </Modal>

      {/* Drawer */}
      <Drawer
        open={drawer}
        onOpenChange={setDrawer}
        side={drawerSide}
        title="فیلترهای جستجو"
        description="موارد مورد نظر را انتخاب کنید"
        footer={
          <>
            <Button variant="ghost" onClick={() => setDrawer(false)}>پاک کردن</Button>
            <Button onClick={() => setDrawer(false)}>اعمال فیلتر</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="جستجو" placeholder="نام محصول..." fullWidth />
          <Input label="از قیمت" type="number" placeholder="۰" fullWidth />
          <Input label="تا قیمت" type="number" placeholder="۱,۰۰۰,۰۰۰" fullWidth />
        </div>
      </Drawer>
    </SectionWrapper>
  )
}
