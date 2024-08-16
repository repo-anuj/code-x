import React from 'react'
import { Row } from 'reactstrap'
import Flatpickr from 'react-flatpickr';


const CPDateBox = () => {

  const today = new Date();
  const formattedToday = `${today.getDate()} ${today.toLocaleString('default', { month: 'short' })}, ${today.getFullYear()}`;

    return (
        <form action="#" >
            <Row className="g-3 mb-0 align-items-center">
                <div className="col-sm-auto">
                    <div className="input-group" >
                        <Flatpickr
                            className="form-control border-0 dash-filter-picker shadow bg-light"
                        options={{ mode: "range", dateFormat: "d M, Y",   defaultDate: [formattedToday] }}
                        // onChange={(dates) => handleDateChange(dates)}
                        />
                        <div className="input-group-text bg-primary border-primary text-white">
                            <i className="ri-calendar-2-line"></i>
                        </div>
                    </div>
                </div>
            </Row>
        </form>
    )
}

export default CPDateBox;