import {type SubmitEvent, useId, useState} from 'react'
import DateRangePicker from '../DateRangePicker/DateRangePicker.tsx'
import PersonIcon from './icons/PersonIcon.tsx'
import s from './TicketsSearchForm.module.css'
import {useNavigate} from "react-router-dom";

export default function TicketsSearchForm() {
    const tripRoundId = useId()
    const tripOneWayId = useId()
    const [passengers, setPassengers] = useState(1)
    const [isRoundTrip, setIsRoundTrip] = useState(true)

    const navigate = useNavigate()

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        navigate('/search-results')
    }

    return (
        <form className={s.tickets_form}
              onSubmit={handleSubmit}>
            <div className={s.trip_row}>
                <div className={s.trip_type}>
                    <label className={s.radio_label} htmlFor={tripRoundId}>
                        <input
                            id={tripRoundId}
                            className={s.radio_input}
                            type="radio"
                            name="trip_type"
                            value="round"
                            checked={isRoundTrip}
                            onChange={() => setIsRoundTrip(true)}
                        />
                        <span className={s.radio_mark}/>
                        Round trip
                    </label>
                    <label className={s.radio_label} htmlFor={tripOneWayId}>
                        <input
                            id={tripOneWayId}
                            className={s.radio_input}
                            type="radio"
                            name="trip_type"
                            value="one_way"
                            checked={!isRoundTrip}
                            onChange={() => setIsRoundTrip(false)}
                        />
                        <span className={s.radio_mark}/>
                        One Way
                    </label>
                </div>

                <div className={s.counter_block}>
                    <PersonIcon className={s.person_icon}/>
                    <div className={s.counter_controls}>
                        <button
                            type="button"
                            className={s.counter_btn}
                            onClick={() => setPassengers((n) => Math.max(1, n - 1))}
                            aria-label="Fewer passengers"
                        >
                            -
                        </button>
                        <span className={s.counter_value}>{passengers}</span>
                        <button
                            type="button"
                            className={s.counter_btn}
                            onClick={() => setPassengers((n) => Math.min(9, n + 1))}
                            aria-label="More passengers"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className={s.cities_row}>
                <label className={s.field_label}>
                    Departure
                    <input
                        className={s.field_input}
                        type="text"
                        placeholder="Your City/Station"
                        name="departure_city"
                    />
                </label>

                <label className={s.field_label}>
                    Arrival
                    <input
                        className={s.field_input}
                        type="text"
                        placeholder="Where to?"
                        name="arrival_city"
                    />
                </label>
            </div>

            <div className={s.dates_section}>
                <p className={s.dates_title}>Pick your lucky day</p>
                <DateRangePicker isRoundTrip={isRoundTrip}/>
            </div>

            <button type="submit" className={s.submit_btn}>
                Ticket, Please!
            </button>
        </form>
    )
}