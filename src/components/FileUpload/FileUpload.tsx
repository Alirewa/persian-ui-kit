import React, { useId, useRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { formatFileSize } from '../../utils/persian'
import { UploadIcon, FileIcon, XIcon } from '../Icons'
import styles from './FileUpload.module.css'

export interface FileUploadProps {
  accept?: string
  multiple?: boolean
  maxSize?: number
  maxFiles?: number
  label?: string
  hint?: string
  error?: string
  disabled?: boolean
  onChange?: (files: File[]) => void
  className?: string
}

export function FileUpload({
  accept, multiple, maxSize, maxFiles = 5,
  label, hint, error: errorProp, disabled, onChange, className,
}: FileUploadProps) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string>()

  function addFiles(newFiles: File[]) {
    setError(undefined)
    const valid: File[] = []
    for (const f of newFiles) {
      if (maxSize && f.size > maxSize) { setError(`فایل "${f.name}" از حجم مجاز (${formatFileSize(maxSize)}) بیشتر است`); continue }
      valid.push(f)
    }
    const merged = multiple ? [...files, ...valid].slice(0, maxFiles) : valid.slice(0, 1)
    setFiles(merged)
    onChange?.(merged)
  }

  function remove(index: number) {
    const updated = files.filter((_, i) => i !== index)
    setFiles(updated)
    onChange?.(updated)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    if (disabled) return
    addFiles(Array.from(e.dataTransfer.files))
  }

  const displayError = errorProp ?? error

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <div
        className={cn(styles.zone, dragOver && styles.dragOver, disabled && styles.disabled, displayError && styles.hasError)}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => e.key === 'Enter' && !disabled && inputRef.current?.click()}
        aria-label="آپلود فایل"
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className={styles.hiddenInput}
          onChange={(e) => addFiles(Array.from(e.target.files ?? []))}
          onClick={(e) => { (e.target as HTMLInputElement).value = '' }}
        />
        <UploadIcon size={32} className={styles.uploadIcon} />
        <p className={styles.zoneText}>فایل را اینجا رها کنید یا <span className={styles.browseLink}>انتخاب کنید</span></p>
        {hint && <p className={styles.zoneHint}>{hint}</p>}
      </div>

      {files.length > 0 && (
        <ul className={styles.fileList}>
          {files.map((f, i) => (
            <li key={i} className={styles.fileItem}>
              <FileIcon size={16} className={styles.fileIcon} />
              <span className={styles.fileName}>{f.name}</span>
              <span className={styles.fileSize}>{formatFileSize(f.size)}</span>
              <button type="button" className={styles.removeBtn} onClick={() => remove(i)} aria-label="حذف فایل">
                <XIcon size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
      {displayError && <span className={styles.error} role="alert">{displayError}</span>}
    </div>
  )
}

FileUpload.displayName = 'FileUpload'
