import React, { useState } from 'react'
import { Table, Badge, Avatar, Button, Pagination } from 'persian-ui-kit'
import { EditIcon, TrashIcon } from 'persian-ui-kit'
import type { TableColumn } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

interface User { id: number; name: string; role: string; status: 'active'|'inactive'|'pending'; date: string }

const users: User[] = [
  { id: 1, name: 'علیرضا پورقلام',  role: 'ادمین',          status: 'active',   date: '۱۴۰۳/۰۶/۱۵' },
  { id: 2, name: 'مریم محمدی',      role: 'کاربر',           status: 'active',   date: '۱۴۰۳/۰۵/۲۰' },
  { id: 3, name: 'رضا احمدی',       role: 'ویرایشگر',       status: 'inactive', date: '۱۴۰۳/۰۴/۱۰' },
  { id: 4, name: 'زهرا کریمی',      role: 'کاربر',           status: 'pending',  date: '۱۴۰۳/۰۶/۰۱' },
  { id: 5, name: 'حسین نوروزی',     role: 'مدیر محتوا',     status: 'active',   date: '۱۴۰۳/۰۳/۲۵' },
]

const statusMap = { active: { label: 'فعال', v: 'success' }, inactive: { label: 'غیرفعال', v: 'error' }, pending: { label: 'در انتظار', v: 'warning' } } as const

const columns: TableColumn<User>[] = [
  { key: 'id', title: '#', width: 50, align: 'center',
    render: (v) => <span style={{ fontFamily: 'var(--pui-font-family)', color: 'var(--pui-muted-foreground)' }}>{String(v)}</span> },
  { key: 'name', title: 'کاربر',
    render: (_, row) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar name={row.name} size="sm" />
        <span style={{ fontFamily: 'var(--pui-font-family)', fontWeight: 600 }}>{row.name}</span>
      </div>
    ) },
  { key: 'role', title: 'نقش',
    render: (v) => <Badge variant="primary" size="sm">{String(v)}</Badge> },
  { key: 'status', title: 'وضعیت', align: 'center',
    render: (v) => <Badge variant={statusMap[v as keyof typeof statusMap].v} size="sm">{statusMap[v as keyof typeof statusMap].label}</Badge> },
  { key: 'date', title: 'تاریخ ثبت' },
  { key: 'id', title: 'عملیات', align: 'center',
    render: () => (
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
        <Button size="xs" variant="outline" icon={<EditIcon size={12}/>}>ویرایش</Button>
        <Button size="xs" variant="destructive" icon={<TrashIcon size={12}/>}>حذف</Button>
      </div>
    ) },
]

export function TableSection() {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  return (
    <SectionWrapper title="📊 جدول">
      <SubSection title="جدول کامل">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Table columns={columns} data={users} rowKey="id" hoverable bordered />
        </div>
      </SubSection>

      <SubSection title="جدول راه‌راه (Striped)">
        <Table
          columns={columns.slice(0, 4)}
          data={users}
          rowKey="id"
          striped
        />
      </SubSection>

      <SubSection title="جدول در حال بارگذاری">
        <div style={{ width: '100%' }}>
          <div style={{ marginBottom: 8 }}>
            <Button size="sm" onClick={() => setLoading(l => !l)}>{loading ? 'نمایش داده' : 'نمایش لودینگ'}</Button>
          </div>
          <Table columns={columns.slice(0, 4)} data={users} rowKey="id" loading={loading} />
        </div>
      </SubSection>

      <SubSection title="جدول خالی">
        <Table columns={columns.slice(0, 4)} data={[]} rowKey="id" emptyText="هیچ کاربری ثبت نشده است" />
      </SubSection>

      <SubSection title="صفحه‌بندی">
        <Pagination page={page} totalPages={10} onPageChange={setPage} persian />
      </SubSection>
    </SectionWrapper>
  )
}
