// Styles — import in your app: import 'persian-ui-kit/styles'
export type {} from './styles/index.css'

// Provider
export { PersianUIProvider } from './providers/PersianUIProvider'
export type { PersianUIProviderProps, Theme, Radius, ThemeColors } from './providers/PersianUIProvider'

// Hooks
export { useTheme }          from './hooks/useTheme'
export { useJalali }         from './hooks/useJalali'
export { usePersianNumber }  from './hooks/usePersianNumber'
export type { JalaliDate, UseJalaliReturn, JalaliFormatOptions } from './hooks/useJalali'

// Utils
export { cn }                                         from './utils/cn'
export { toPersianDigits, toEnglishDigits, formatPrice, parsePrice, formatIranPhone, formatFileSize } from './utils/persian'
export { isValidNationalId, isValidIranPhone, normalizeIranPhone, isValidPostalCode, isValidIban, isValidEmail } from './utils/validators'

// Components — Base
export { Button }                                     from './components/Button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button'

export { Input }                                      from './components/Input'
export type { InputProps, InputSize, InputVariant }   from './components/Input'

export { Select }                                     from './components/Select'
export type { SelectProps, SelectOption, SelectGroup } from './components/Select'

export { Checkbox }                                   from './components/Checkbox'
export type { CheckboxProps }                         from './components/Checkbox'

export { RadioGroup }                                 from './components/Radio'
export type { RadioGroupProps, RadioOption }          from './components/Radio'

export { Switch }                                     from './components/Switch'
export type { SwitchProps }                           from './components/Switch'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/Card'
export type { CardProps }                             from './components/Card'

export { Badge }                                      from './components/Badge'
export type { BadgeProps, BadgeVariant, BadgeSize }   from './components/Badge'

export { Avatar, AvatarGroup }                        from './components/Avatar'
export type { AvatarProps, AvatarGroupProps, AvatarSize, AvatarShape } from './components/Avatar'

export { Spinner }                                    from './components/Spinner'
export type { SpinnerProps, SpinnerSize, SpinnerColor } from './components/Spinner'

export { Skeleton }                                   from './components/Skeleton'
export type { SkeletonProps }                         from './components/Skeleton'

export { Typography }                                 from './components/Typography'
export type { TypographyProps }                       from './components/Typography'

// Components — Overlays
export { Modal }                                      from './components/Modal'
export type { ModalProps, ModalSize }                 from './components/Modal'

export { Drawer }                                     from './components/Drawer'
export type { DrawerProps, DrawerSide }               from './components/Drawer'

export { ToastProvider, useToast }                    from './components/Toast'
export type { ToastItem, ToastType, ToastPosition, ToastProviderProps } from './components/Toast'

// Components — Navigation
export { Tabs }                                       from './components/Tabs'
export type { TabsProps, TabItem }                    from './components/Tabs'

export { Accordion }                                  from './components/Accordion'
export type { AccordionProps, AccordionItem }         from './components/Accordion'

export { Dropdown }                                   from './components/Dropdown'
export type { DropdownProps, DropdownMenuItem }       from './components/Dropdown'

export { Tooltip }                                    from './components/Tooltip'
export type { TooltipProps, TooltipSide }             from './components/Tooltip'

export { Pagination }                                 from './components/Pagination'
export type { PaginationProps }                       from './components/Pagination'

export { Table }                                      from './components/Table'
export type { TableProps, TableColumn }               from './components/Table'

// Components — Iran-specific
export { OtpInput }                                   from './components/OtpInput'
export type { OtpInputProps }                         from './components/OtpInput'

export { PhoneInput }                                 from './components/PhoneInput'
export type { PhoneInputProps }                       from './components/PhoneInput'

export { NationalIdInput }                            from './components/NationalIdInput'
export type { NationalIdInputProps }                  from './components/NationalIdInput'

export { PriceInput }                                 from './components/PriceInput'
export type { PriceInputProps }                       from './components/PriceInput'

export { DatePicker }                                 from './components/DatePicker'
export type { DatePickerProps, JalaliDateValue }      from './components/DatePicker'

export { EmptyState }                                 from './components/EmptyState'
export type { EmptyStateProps, EmptyStatePreset }     from './components/EmptyState'

export { FileUpload }                                 from './components/FileUpload'
export type { FileUploadProps }                       from './components/FileUpload'

// Icons — all exported individually
export * from './components/Icons'
