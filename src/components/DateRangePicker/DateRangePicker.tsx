import { useEffect, useRef, useState } from 'react'
import { isSameDay, startOfToday } from 'date-fns'
import { DayPicker, type DateRange } from 'react-day-picker'
import 'react-day-picker/style.css'
import CalendarIcon from '../TicketsSearchForm/icons/CalendarIcon.tsx'
import { formatTicketDate } from './dateRangeFormat.ts'
import s from './DateRangePicker.module.css'

interface Props {
  /** Round trip — диапазон в два поля; One Way — только Depart. */
  isRoundTrip: boolean
  departFieldName?: string
  returnFieldName?: string
}

export default function DateRangePicker({
  isRoundTrip,
  departFieldName = 'departure_date',
  returnFieldName = 'return_date',
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  /** Подтверждённые даты в полях формы */
  const [range, setRange] = useState<DateRange | undefined>()
  const [singleDate, setSingleDate] = useState<Date | undefined>()

  /** Черновик в открытом календаре — коммит только по Apply */
  const [draftRange, setDraftRange] = useState<DateRange | undefined>()
  const [draftSingle, setDraftSingle] = useState<Date | undefined>()

  const departLabel =
    (isRoundTrip ? range?.from : singleDate) != null
      ? formatTicketDate(isRoundTrip ? range!.from! : singleDate!)
      : ''
  const returnLabel = range?.to != null ? formatTicketDate(range.to) : ''

  const canApplyRound =
    draftRange?.from != null &&
    draftRange?.to != null &&
    !isSameDay(draftRange.from, draftRange.to)

  const canApplySingle = draftSingle != null
  const canApply = isRoundTrip ? canApplyRound : canApplySingle

  useEffect(() => {
    if (!isRoundTrip) {
      setRange(undefined)
      setDraftRange(undefined)
    }
  }, [isRoundTrip])

  useEffect(() => {
    if (!open) return

    function handlePointerDown(event: MouseEvent) {
      const root = wrapperRef.current
      if (!root?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [open])

  const openPicker = () => {
    setDraftRange(range)
    setDraftSingle(singleDate)
    setOpen(true)
  }

  const handleReset = () => {
    setDraftRange(undefined)
    setDraftSingle(undefined)
  }

  const handleApply = () => {
    if (!canApply) return
    if (isRoundTrip) {
      setRange(draftRange)
    } else {
      setSingleDate(draftSingle)
    }
    setOpen(false)
  }

  return (
    <div className={s.wrapper} ref={wrapperRef}>
      <div className={s.dates_row}>
        <button
          type="button"
          className={s.date_field}
          onClick={openPicker}
          aria-expanded={open}
          aria-haspopup="dialog"
        >
          <CalendarIcon className={s.calendar_icon} />
          <span
            className={`${s.date_value} ${departLabel ? '' : s.date_placeholder}`}
          >
            {departLabel || 'Depart'}
          </span>
        </button>

        <button
          type="button"
          className={s.date_field}
          onClick={openPicker}
          disabled={!isRoundTrip}
          aria-expanded={open && isRoundTrip}
          aria-haspopup="dialog"
        >
          <CalendarIcon className={s.calendar_icon} />
          <span
            className={`${s.date_value} ${returnLabel ? '' : s.date_placeholder}`}
          >
            {returnLabel || 'Return'}
          </span>
        </button>
      </div>

      <input type="hidden" name={departFieldName} value={departLabel} />
      <input type="hidden" name={returnFieldName} value={returnLabel} />

      {open && (
        <div className={s.popover} role="dialog" aria-label="Pick travel dates">
          {isRoundTrip ? (
            <DayPicker
              className={s.day_picker}
              mode="range"
              numberOfMonths={2}
              selected={draftRange}
              onSelect={setDraftRange}
              disabled={{ before: startOfToday() }}
            />
          ) : (
            <DayPicker
              className={s.day_picker}
              mode="single"
              numberOfMonths={2}
              selected={draftSingle}
              onSelect={setDraftSingle}
              disabled={{ before: startOfToday() }}
            />
          )}

          <footer className={s.picker_footer}>
            <button
              type="button"
              className={s.reset_btn}
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="button"
              className={s.apply_btn}
              disabled={!canApply}
              onClick={handleApply}
            >
              Apply
            </button>
          </footer>
        </div>
      )}
    </div>
  )
}