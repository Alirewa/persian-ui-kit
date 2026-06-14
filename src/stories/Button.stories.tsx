import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'
import { SearchIcon, PlusIcon } from '../components/Icons'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant:  { control: 'select', options: ['primary','secondary','ghost','outline','destructive','link'] },
    size:     { control: 'select', options: ['xs','sm','md','lg','xl'] },
    loading:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth:{ control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'دکمه اصلی', variant: 'primary' } }
export const Secondary: Story = { args: { children: 'دکمه فرعی', variant: 'secondary' } }
export const Ghost: Story = { args: { children: 'دکمه شفاف', variant: 'ghost' } }
export const Outline: Story = { args: { children: 'دکمه حاشیه‌دار', variant: 'outline' } }
export const Destructive: Story = { args: { children: 'حذف', variant: 'destructive' } }
export const Loading: Story = { args: { children: 'در حال بارگذاری...', loading: true } }
export const WithIcon: Story = { args: { children: 'جستجو', icon: <SearchIcon size={16} /> } }
export const Small: Story = { args: { children: 'کوچک', size: 'sm' } }
export const Large: Story = { args: { children: 'بزرگ', size: 'lg' } }
