import React from 'react'
import type { Preview } from '@storybook/react'
import { PersianUIProvider } from '../src/providers/PersianUIProvider'
import '../src/styles/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark',  value: '#0f172a' },
      ],
    },
    docs: { toc: true },
  },
  globalTypes: {
    theme: {
      description: 'تم رنگی',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light'
      return (
        <PersianUIProvider theme={theme}>
          <div style={{ padding: '24px' }}>
            <Story />
          </div>
        </PersianUIProvider>
      )
    },
  ],
}

export default preview
